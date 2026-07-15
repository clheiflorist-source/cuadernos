"use client";

import CuadernoV2 from "./CuadernoV2";
import { CONTENIDO_ES, CONTENIDO_EN } from "./contenido";
import {
  crearEnlace,
  entregarCuaderno,
  obtenerBorrador,
  sincronizarBorrador,
} from "./actions";

/**
 * DÁNGO · Destination Wedding Planner — Edición v2 (experimento premium
 * bilingüe, en evaluación). El diseño de esta edición vive en ./CuadernoV2.
 */
export default function Cuaderno({
  continuidadDisponible,
}: {
  continuidadDisponible: boolean;
}) {
  return (
    <CuadernoV2
      contenidos={{ es: CONTENIDO_ES, en: CONTENIDO_EN }}
      acciones={{
        entregarCuaderno,
        crearEnlace,
        sincronizarBorrador,
        obtenerBorrador,
      }}
      continuidadDisponible={continuidadDisponible}
    />
  );
}
