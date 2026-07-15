"use client";

import CuadernoUI from "@/components/CuadernoUI";
import { CONTENIDO } from "./contenido";
import {
  crearEnlace,
  entregarCuaderno,
  obtenerBorrador,
  sincronizarBorrador,
} from "./actions";

/** DÁNGO · Destination Wedding Planner. El diseño vive en components/CuadernoUI. */
export default function Cuaderno({
  continuidadDisponible,
}: {
  continuidadDisponible: boolean;
}) {
  return (
    <CuadernoUI
      contenido={CONTENIDO}
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
