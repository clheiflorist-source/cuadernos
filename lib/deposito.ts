/**
 * Depósito de borradores para continuidad entre dispositivos.
 * Usa Redis por API REST (Upstash) si las variables existen; si no, la
 * función `depositoDisponible()` devuelve false y toda la característica se
 * oculta en la interfaz — el cuaderno funciona igual con localStorage.
 *
 * Alta (una vez, ~3 min): Vercel → proyecto cuadernos → Storage → conectar
 * una base Redis (Upstash). Vercel inyecta las variables solo; según la
 * integración se llaman `KV_REST_API_URL`/`KV_REST_API_TOKEN` (Marketplace)
 * o `UPSTASH_REDIS_REST_URL`/`UPSTASH_REDIS_REST_TOKEN`. Aceptamos ambas.
 */

const URL_KV =
  process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const TOKEN_KV =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

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

/**
 * Cada cuaderno guarda sus borradores bajo su propio namespace. El valor por
 * omisión "yolotzin" preserva las claves de los borradores que ya existen en
 * producción; cuadernos nuevos (p. ej. "ollin") pasan su propio slug.
 */
const clave = (token: string, ns = "yolotzin") => `cuaderno:${ns}:${token}`;

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
  ns?: string,
): Promise<boolean> {
  try {
    await comando([
      "SET",
      clave(token, ns),
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

export async function leerBorrador(
  token: string,
  ns?: string,
): Promise<Borrador | null> {
  try {
    const crudo = await comando(["GET", clave(token, ns)]);
    if (typeof crudo !== "string") return null;
    return JSON.parse(crudo) as Borrador;
  } catch (e) {
    console.error("[deposito] Error al leer borrador:", e);
    return null;
  }
}
