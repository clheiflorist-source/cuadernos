"use server";

/**
 * Acciones de servidor del cuaderno PAHTIĀ. La lógica (correo, respaldo y
 * continuidad) vive en lib/entrega.ts; aquí solo se enlaza con el contenido
 * de este cuaderno.
 */

import { CONTENIDO } from "./contenido";
import * as core from "@/lib/entrega";
import type { Borrador } from "@/lib/deposito";
import type { EntregaCuaderno, ResultadoEnlace } from "@/lib/cuaderno-tipos";

export async function entregarCuaderno(
  entrega: EntregaCuaderno,
): Promise<{ ok: boolean }> {
  return core.entregarCuaderno(CONTENIDO, entrega);
}

export async function crearEnlace(datos: {
  correo: string;
  origen: string;
  borrador: Omit<Borrador, "actualizado" | "correo">;
}): Promise<ResultadoEnlace> {
  return core.crearEnlace(CONTENIDO, datos);
}

export async function sincronizarBorrador(
  token: string,
  borrador: Omit<Borrador, "actualizado">,
): Promise<{ ok: boolean }> {
  return core.sincronizarBorrador(CONTENIDO, token, borrador);
}

export async function obtenerBorrador(
  token: string,
): Promise<Borrador | null> {
  return core.obtenerBorrador(CONTENIDO, token);
}
