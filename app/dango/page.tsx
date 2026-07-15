import type { Metadata } from "next";
import Cuaderno from "./Cuaderno";
import { depositoDisponible } from "@/lib/deposito";

/**
 * El Primer Capítulo · Cuaderno de Descubrimiento · DÁNGO (Destination Wedding Planner).
 * Página privada: se comparte por enlace directo con parejas que ya
 * contrataron. Personalización: ?pareja=Ana%20y%20Luis
 * Continuidad entre dispositivos: ?c=<token> (si el depósito está activo).
 */
export const metadata: Metadata = {
  title: "El Primer Capítulo · Cuaderno de Descubrimiento",
  description:
    "Un cuaderno para responder juntos, antes de hablar de vuelos, hospedaje o itinerarios.",
  robots: { index: false, follow: false },
};

export default function PaginaCuaderno() {
  return <Cuaderno continuidadDisponible={depositoDisponible()} />;
}
