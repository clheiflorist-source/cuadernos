"use client";

import CuadernoUI from "@/components/CuadernoUI";
import { CONTENIDO } from "./contenido";
import {
  crearEnlace,
  entregarCuaderno,
  obtenerBorrador,
  sincronizarBorrador,
} from "./actions";

/** PAHTIĀ · Coordinación del Día. El diseño vive en components/CuadernoUI. */
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
