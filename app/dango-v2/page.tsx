import type { Metadata } from "next";
import Cuaderno from "./Cuaderno";
import { depositoDisponible } from "@/lib/deposito";

/**
 * El Primer Capítulo · DÁNGO · Edición v2 — experimento premium bilingüe,
 * en evaluación. Página privada: se comparte por enlace directo.
 * Personalización: ?pareja=Ana%20y%20Luis · Idioma: ?lang=en
 * Continuidad entre dispositivos: ?c=<token> (si el depósito está activo).
 */
export const metadata: Metadata = {
  title: "El Primer Capítulo · Cuaderno de Descubrimiento",
  description:
    "Un cuaderno para responder juntos · A notebook to answer together.",
  robots: { index: false, follow: false },
};

export default function PaginaCuaderno() {
  return <Cuaderno continuidadDisponible={depositoDisponible()} />;
}
