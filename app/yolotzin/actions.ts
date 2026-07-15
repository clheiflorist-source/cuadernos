"use server";

import { CAPITULOS, LIBRO, TOTAL_CAMPOS } from "./contenido";
import {
  depositoDisponible,
  guardarBorrador,
  leerBorrador,
  type Borrador,
} from "@/lib/deposito";

export type EntregaCuaderno = {
  nombres: string;
  respuestas: Record<string, string>;
};

type Preparado = {
  nombres: string;
  respondidas: number;
  texto: string;
  html: string;
};

const esc = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

/** Formatea el cuaderno completo en texto plano y HTML de correo. */
function preparar(entrega: EntregaCuaderno): Preparado {
  const nombres = entrega.nombres.trim().slice(0, 120);
  const respuestas = entrega.respuestas ?? {};
  const r = (id: string) => (respuestas[id] ?? "").trim().slice(0, 6000);

  let respondidas = 0;
  const lineas: string[] = [];
  const bloquesHtml: string[] = [];

  for (const cap of CAPITULOS) {
    lineas.push("", `═══ Capítulo ${cap.num} · ${cap.titulo} ═══`);
    const items: string[] = [];
    for (const campo of cap.paginas.flat()) {
      const respuesta = r(campo.id);
      if (respuesta) respondidas += 1;
      lineas.push("", `P. ${campo.titulo}`, `R. ${respuesta || "—"}`);
      items.push(
        `<tr><td style="padding:18px 0 0;">
          <p style="margin:0;font-family:Georgia,serif;font-size:16px;line-height:1.5;color:#33302b;">${esc(campo.titulo)}</p>
          <p style="margin:6px 0 0;font-size:14px;line-height:1.7;color:${respuesta ? "#55503f" : "#b3ab99"};white-space:pre-wrap;">${respuesta ? esc(respuesta) : "— sin respuesta —"}</p>
        </td></tr>`,
      );
    }
    bloquesHtml.push(
      `<tr><td style="padding:34px 0 0;">
        <p style="margin:0;font-family:Georgia,serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#a7896b;">Capítulo ${cap.num}</p>
        <p style="margin:4px 0 0;font-family:Georgia,serif;font-size:22px;color:#33302b;">${esc(cap.titulo)}</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${items.join("")}</table>
      </td></tr>`,
    );
  }

  const fecha = new Date().toLocaleDateString("es-MX", {
    timeZone: "America/Mexico_City",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const texto = [
    `${LIBRO.titulo} · ${LIBRO.subtitulo} · ${LIBRO.servicio}`,
    `Pareja: ${nombres}`,
    `Entregado: ${fecha}`,
    `Respuestas: ${respondidas} de ${TOTAL_CAMPOS}`,
    ...lineas,
  ].join("\n");

  const html = `<div style="background:#faf9f5;padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5dfd3;">
      <tr><td style="padding:40px 40px 0;text-align:center;">
        <p style="margin:0;font-family:Georgia,serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:#a7896b;">${esc(LIBRO.marca)}</p>
        <p style="margin:14px 0 0;font-family:Georgia,serif;font-size:28px;color:#33302b;">${esc(LIBRO.titulo)}</p>
        <p style="margin:6px 0 0;font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#86866c;">${esc(LIBRO.subtitulo)} · ${esc(LIBRO.servicio)}</p>
        <p style="margin:22px 0 0;font-family:Georgia,serif;font-style:italic;font-size:20px;color:#33302b;">${esc(nombres)}</p>
        <p style="margin:6px 0 0;font-size:12px;color:#918a7d;">Entregado el ${esc(fecha)} · ${respondidas} de ${TOTAL_CAMPOS} respuestas</p>
        <div style="margin:26px auto 0;width:56px;border-top:1px solid #d9c9a8;"></div>
      </td></tr>
      <tr><td style="padding:0 40px 44px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${bloquesHtml.join("")}</table>
      </td></tr>
    </table>
  </div>`;

  return { nombres, respondidas, texto, html };
}

async function correoResend(mensaje: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[cuaderno] Sin RESEND_API_KEY — correo no enviado.");
    return false;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.LEAD_FROM ?? "Clhei Cuadernos <onboarding@resend.dev>",
        to: [mensaje.to],
        subject: mensaje.subject,
        text: mensaje.text,
        html: mensaje.html,
      }),
    });
    if (!res.ok) {
      console.error(
        `[cuaderno] Resend respondió ${res.status}: ${await res.text().catch(() => "")}`,
      );
      return false;
    }
    return true;
  } catch (e) {
    console.error("[cuaderno] Error al enviar correo:", e);
    return false;
  }
}

/** Respaldo durable opcional (Google Apps Script, Zapier, n8n, Sheets…). */
async function enviarWebhook(payload: object): Promise<boolean> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, at: new Date().toISOString() }),
    });
    return res.ok;
  } catch (e) {
    console.error("[cuaderno] Error en webhook:", e);
    return false;
  }
}

/**
 * Entrega el cuaderno respondido a Clhei. El contenido SIEMPRE queda en los
 * logs del servidor como primer respaldo; si ningún canal confirma la
 * entrega, se devuelve ok:false para que la pareja no crea que ya llegó.
 */
export async function entregarCuaderno(
  entrega: EntregaCuaderno,
): Promise<{ ok: boolean }> {
  if (!entrega?.nombres?.trim()) return { ok: false };

  const preparado = preparar(entrega);

  console.log(
    "[cuaderno]",
    JSON.stringify({ nombres: preparado.nombres, respuestas: entrega.respuestas }),
  );

  const [correo, webhook] = await Promise.all([
    correoResend({
      to: process.env.LEAD_TO ?? "clhei.florist@gmail.com",
      subject: `📖 El Primer Capítulo — ${preparado.nombres} — Cuaderno Yolotzin (${preparado.respondidas}/${TOTAL_CAMPOS})`,
      text: preparado.texto,
      html: preparado.html,
    }),
    enviarWebhook({ tipo: "cuaderno-yolotzin-entrega", ...entrega }),
  ]);

  const delivered = correo || webhook;
  if (!delivered) {
    console.error("[cuaderno] NINGÚN canal confirmó la entrega.");
  }
  return { ok: delivered };
}

/* ============ Continuidad entre dispositivos ============ */

/** Orígenes desde los que aceptamos construir enlaces de continuidad. */
function origenValido(origen: string): boolean {
  return (
    /^https:\/\/([a-z0-9-]+\.)*clhei\.florist\//.test(origen) ||
    /^https:\/\/[a-z0-9-]+\.vercel\.app\//.test(origen) ||
    /^http:\/\/localhost(:\d+)?\//.test(origen)
  );
}

export type ResultadoEnlace =
  | { disponible: false }
  | {
      disponible: true;
      ok: boolean;
      token?: string;
      enlace?: string;
      correoEnviado?: boolean;
    };

/**
 * Crea el enlace de continuidad: guarda el borrador en el depósito y
 * envía el enlace al correo de la pareja. Si el correo no puede salir
 * (p. ej. dominio aún sin verificar en Resend), el enlace igual se
 * devuelve para que lo guarden ellos mismos.
 */
export async function crearEnlace(datos: {
  correo: string;
  origen: string;
  borrador: Omit<Borrador, "actualizado" | "correo">;
}): Promise<ResultadoEnlace> {
  if (!depositoDisponible()) return { disponible: false };

  const correo = datos.correo.trim().slice(0, 200);
  if (!/^\S+@\S+\.\S+$/.test(correo)) return { disponible: true, ok: false };
  if (!origenValido(datos.origen)) return { disponible: true, ok: false };

  const token = crypto.randomUUID().replaceAll("-", "").slice(0, 24);
  const guardado = await guardarBorrador(token, {
    ...datos.borrador,
    correo,
    actualizado: new Date().toISOString(),
  });
  if (!guardado) return { disponible: true, ok: false };

  const enlace = `${datos.origen}?c=${token}`;
  const nombres = datos.borrador.nombres?.trim();

  const correoEnviado = await correoResend({
    to: correo,
    subject: "El Primer Capítulo — su enlace para continuar",
    text: [
      nombres ? `Hola, ${nombres}.` : "Hola.",
      "",
      "Este es el enlace de su cuaderno. Ábranlo en cualquier dispositivo y encontrarán sus respuestas tal como las dejaron:",
      "",
      enlace,
      "",
      "Guárdenlo con cariño — es la llave de su primer capítulo.",
      "",
      "Clhei Floral Styling & Events",
    ].join("\n"),
    html: `<div style="background:#faf9f5;padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e5dfd3;">
        <tr><td style="padding:40px;text-align:center;">
          <p style="margin:0;font-family:Georgia,serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:#a7896b;">Clhei Floral Styling &amp; Events</p>
          <p style="margin:16px 0 0;font-family:Georgia,serif;font-size:24px;color:#33302b;">El Primer Capítulo</p>
          <p style="margin:20px 0 0;font-size:14px;line-height:1.8;color:#6b6459;">${nombres ? esc(`Hola, ${nombres}.`) : "Hola."}<br>Este es el enlace de su cuaderno. Ábranlo en cualquier dispositivo y encontrarán sus respuestas tal como las dejaron.</p>
          <p style="margin:28px 0 0;"><a href="${enlace}" style="font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#33302b;border:1px solid #a7896b;padding:14px 28px;text-decoration:none;display:inline-block;">Abrir nuestro cuaderno</a></p>
          <p style="margin:28px 0 0;font-family:Georgia,serif;font-style:italic;font-size:14px;color:#86866c;">Guárdenlo con cariño — es la llave de su primer capítulo.</p>
        </td></tr>
      </table>
    </div>`,
  });

  return { disponible: true, ok: true, token, enlace, correoEnviado };
}

/** Sincroniza el borrador con el depósito (llamado desde el autoguardado). */
export async function sincronizarBorrador(
  token: string,
  borrador: Omit<Borrador, "actualizado">,
): Promise<{ ok: boolean }> {
  if (!depositoDisponible() || !/^[a-z0-9]{16,32}$/.test(token)) {
    return { ok: false };
  }
  const ok = await guardarBorrador(token, {
    ...borrador,
    actualizado: new Date().toISOString(),
  });
  return { ok };
}

/** Recupera el borrador de un enlace de continuidad. */
export async function obtenerBorrador(
  token: string,
): Promise<Borrador | null> {
  if (!depositoDisponible() || !/^[a-z0-9]{16,32}$/.test(token)) return null;
  return leerBorrador(token);
}
