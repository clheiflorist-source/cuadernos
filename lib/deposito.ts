/**
 * Depósito de borradores para continuidad entre dispositivos.
 * Usa Upstash Redis (REST) si las variables existen; si no, la función
 * `depositoDisponible()` devuelve false y toda la característica se oculta
 * en la interfaz — el cuaderno funciona igual con localStorage.
 *
 * Alta (una vez, ~3 min): Vercel → proyecto cuadernos → Storage →
 * Upstash for Redis (plan gratuito) → conectar. Eso inyecta
 * UPSTASH_REDIS_REST_URL y UPSTASH_REDIS_REST_TOKEN solas.
 */

const URL_KV = process.env.UPSTASH_REDIS_REST_URL;
const TOKEN_KV = process.env.UPSTASH_REDIS_REST_TOKEN;

/** Los borradores viven ~10 meses: de la contratación a la boda, con aire. */
const TTL_SEGUNDOS = 60 * 60 * 24 * 300;

export function depositoDisponible(): boolean {
  return Boolean(URL_KV && TOKEN_KV);
}

async function comando(cmd: (string | number)[]): Promise<unknown> {
  const res = await fetch(URL_KV as string, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN_KV}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cmd),
  });
  if (!res.ok) {
    throw new Error(`Upstash respondió ${res.status}`);
  }
  const datos = (await res.json()) as { result?: unknown; error?: string };
  if (datos.error) throw new Error(datos.error);
  return datos.result;
}

const clave = (token: string) => `cuaderno:yolotzin:${token}`;

export type Borrador = {
  nombres: string;
  respuestas: Record<string, string>;
  pagina: number;
  enviado: boolean;
  correo?: string;
  actualizado: string;
};

export async function guardarBorrador(
  token: string,
  borrador: Borrador,
): Promise<boolean> {
  try {
    await comando([
      "SET",
      clave(token),
      JSON.stringify(borrador),
      "EX",
      TTL_SEGUNDOS,
    ]);
    return true;
  } catch (e) {
    console.error("[deposito] Error al guardar borrador:", e);
    return false;
  }
}

export async function leerBorrador(token: string): Promise<Borrador | null> {
  try {
    const crudo = await comando(["GET", clave(token)]);
    if (typeof crudo !== "string") return null;
    return JSON.parse(crudo) as Borrador;
  } catch (e) {
    console.error("[deposito] Error al leer borrador:", e);
    return null;
  }
}
