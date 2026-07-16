"use client";

import CuadernoUI from "@/components/CuadernoUI";
import { CONTENIDO, CONTENIDO_EN } from "./contenido";
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
      contenidoEn={CONTENIDO_EN}
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
