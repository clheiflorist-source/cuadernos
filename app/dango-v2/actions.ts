"use server";

/**
 * Acciones de servidor del cuaderno DÁNGO · Edición v2 (experimento).
 * La lógica (correo, respaldo y continuidad) vive en lib/entrega.ts; aquí
 * solo se enlaza con el contenido de este cuaderno. La entrega usa las
 * etiquetas en ESPAÑOL sin importar el idioma en pantalla: Tania lee en
 * español y las respuestas llegan tal como la pareja las escribió.
 * Namespace propio (slug dango-v2): sus borradores no se mezclan con /dango.
 */

import { CONTENIDO_ES } from "./contenido";
import * as core from "@/lib/entrega";
import type { Borrador } from "@/lib/deposito";
import type { EntregaCuaderno, ResultadoEnlace } from "@/lib/cuaderno-tipos";

export async function entregarCuaderno(
  entrega: EntregaCuaderno,
): Promise<{ ok: boolean }> {
  return core.entregarCuaderno(CONTENIDO_ES, entrega);
}

export async function crearEnlace(datos: {
  correo: string;
  origen: string;
  borrador: Omit<Borrador, "actualizado" | "correo">;
}): Promise<ResultadoEnlace> {
  return core.crearEnlace(CONTENIDO_ES, datos);
}

export async function sincronizarBorrador(
  token: string,
  borrador: Omit<Borrador, "actualizado">,
): Promise<{ ok: boolean }> {
  return core.sincronizarBorrador(CONTENIDO_ES, token, borrador);
}

export async function obtenerBorrador(
  token: string,
): Promise<Borrador | null> {
  return core.obtenerBorrador(CONTENIDO_ES, token);
}
