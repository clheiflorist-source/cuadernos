/**
 * Tipos compartidos del cuaderno «El Primer Capítulo».
 *
 * El diseño vive una sola vez (components/CuadernoUI.tsx) y cada cuaderno
 * —Yolotzin, OLLIN, los que vengan— aporta únicamente su contenido y su
 * etiqueta de servicio. Estos tipos son el contrato entre ambos.
 */

import type { Borrador } from "./deposito";

export type Campo = {
  /** Clave estable para autoguardado y correo. No cambiar entre versiones. */
  id: string;
  /** "pregunta" = pregunta normal · "frase" = frase por completar (display grande) */
  tipo: "pregunta" | "frase";
  /** Texto de la pregunta o de la frase a completar. */
  titulo: string;
  /** Párrafos de acompañamiento debajo de la pregunta. */
  nota?: string[];
  /** Párrafos que preparan un ejercicio, antes del título. */
  lead?: string[];
  /** Cita destacada dentro de un ejercicio. */
  cita?: string;
};

export type Capitulo = {
  num: number;
  titulo: string;
  /** Frases editoriales de la página de apertura (en itálica). */
  frases: string[];
  /** Párrafos introductorios de la apertura. */
  intro: string[];
  /** Páginas de preguntas: cada arreglo interior es una página (máx. 2 campos). */
  paginas: Campo[][];
};

export type Libro = {
  titulo: string;
  subtitulo: string;
  /** Servicio completo, tal como se muestra en portada. Ej. "OLLIN · Wedding Planner Integral". */
  servicio: string;
  marca: string;
  firma: string;
  /** Identificador de ruta: define la clave de localStorage y el namespace del depósito. */
  slug: string;
  /** Etiqueta corta del lockup y del asunto de correo. Ej. "OLLIN". */
  etiqueta: string;
};

export type Instrucciones = {
  titulo: string;
  parrafos: string[];
  notaDigital: string;
};

export type CartaBienvenida = {
  parrafos: string[];
  despedida: string;
};

export type CartaCierre = {
  titulo: string;
  parrafos: string[];
  despedida: string;
};

/** Todo el contenido de un cuaderno, empaquetado para el componente de diseño. */
export type ContenidoCuaderno = {
  libro: Libro;
  instrucciones: Instrucciones;
  cartaBienvenida: CartaBienvenida;
  cartaCierre: CartaCierre;
  fraseFinal: string;
  capitulos: Capitulo[];
  totalCampos: number;
};

/* ============ Entrega y continuidad ============ */

export type EntregaCuaderno = {
  nombres: string;
  respuestas: Record<string, string>;
};

export type ResultadoEnlace =
  | { disponible: false }
  | {
      disponible: true;
      ok: boolean;
      token?: string;
      enlace?: string;
      correoEnviado?: boolean;
    };

/** Acciones de servidor que el componente de diseño invoca. */
export type AccionesCuaderno = {
  entregarCuaderno: (entrega: EntregaCuaderno) => Promise<{ ok: boolean }>;
  crearEnlace: (datos: {
    correo: string;
    origen: string;
    borrador: Omit<Borrador, "actualizado" | "correo">;
  }) => Promise<ResultadoEnlace>;
  sincronizarBorrador: (
    token: string,
    borrador: Omit<Borrador, "actualizado">,
  ) => Promise<{ ok: boolean }>;
  obtenerBorrador: (token: string) => Promise<Borrador | null>;
};
