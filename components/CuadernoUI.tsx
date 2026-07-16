"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { waLink } from "@/lib/site";
import LogoMark from "@/components/LogoMark";
import Ambiente from "@/components/Ambiente";
import type { Borrador } from "@/lib/deposito";
import type {
  AccionesCuaderno,
  Campo,
  Capitulo,
  ContenidoCuaderno,
} from "@/lib/cuaderno-tipos";
import { TEXTOS_UI, type Lang, type TextosUI } from "@/lib/textos-ui";

/* ============ Modelo de páginas ============ */

type Pagina =
  | { tipo: "portada" }
  | { tipo: "instrucciones" }
  | { tipo: "carta" }
  | { tipo: "apertura"; cap: Capitulo }
  | { tipo: "preguntas"; cap: Capitulo; campos: Campo[] }
  | { tipo: "cierre" }
  | { tipo: "entrega" }
  | { tipo: "final" };

const ROMANOS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

/** Parte un título en dos renglones, antes de la última palabra. */
function partirTitulo(t: string): [string, string] {
  const i = t.lastIndexOf(" ");
  return i === -1 ? [t, ""] : [t.slice(0, i), t.slice(i + 1)];
}

/* ============ Ornamento: filete con rombo, dibujado a mano ============ */

function Ornamento({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 8"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <line
        x1="0"
        y1="4"
        x2="48"
        y2="4"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <rect
        x="56"
        y="0"
        width="8"
        height="8"
        transform="rotate(45 60 4)"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <line
        x1="72"
        y1="4"
        x2="120"
        y2="4"
        stroke="currentColor"
        strokeWidth="0.6"
      />
    </svg>
  );
}

/* ============ Área de respuesta (escritura libre) ============ */

function AreaRespuesta({
  id,
  valor,
  onCambio,
  compacta = false,
  T,
}: {
  id: string;
  valor: string;
  onCambio: (id: string, texto: string) => void;
  compacta?: boolean;
  T: TextosUI;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);

  // Autocrecer con el contenido (también al restaurar la sesión).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [valor]);

  return (
    <div className="relative mt-6">
      <textarea
        ref={ref}
        value={valor}
        onChange={(e) => onCambio(id, e.target.value)}
        placeholder={T.placeholderRespuesta}
        aria-label={T.ariaRespuesta}
        rows={compacta ? 3 : 4}
        className="cuaderno-writing peer w-full resize-none overflow-hidden border-0 border-b border-line bg-transparent pb-3 font-editorial font-medium text-[1.3rem] leading-[1.85] text-charcoal outline-none placeholder:italic placeholder:text-ink-faint/70 placeholder:transition-opacity placeholder:duration-500 focus:placeholder:opacity-40"
      />
      {/* La línea que despierta: se dibuja de izquierda a derecha al enfocar. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold-deep transition-transform duration-500 ease-out peer-focus:scale-x-100"
      />
    </div>
  );
}

/** Renglón para los nombres (portada y entrega): la línea nace del centro. */
function LineaNombres({
  valor,
  onCambio,
  className = "",
  T,
}: {
  valor: string;
  onCambio: (v: string) => void;
  className?: string;
  T: TextosUI;
}) {
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={valor}
        onChange={(e) => onCambio(e.target.value.slice(0, 120))}
        placeholder={T.placeholderNombres}
        aria-label={T.ariaNombres}
        className="cuaderno-writing peer w-full border-0 border-b border-line bg-transparent pb-2 text-center font-editorial text-2xl italic text-charcoal outline-none placeholder:text-ink-faint/60 placeholder:transition-opacity placeholder:duration-500 focus:placeholder:opacity-40"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-gold-deep transition-transform duration-500 ease-out peer-focus:scale-x-100"
      />
    </div>
  );
}

/* ============ Bloques tipográficos ============ */

function Firma({ contenido }: { contenido: ContenidoCuaderno }) {
  return (
    <div className="mt-12">
      <p className="font-editorial text-[1.7rem] italic text-charcoal">
        {contenido.libro.firma}
      </p>
      <p className="kicker mt-2">{contenido.libro.marca}</p>
    </div>
  );
}

function CampoBloque({
  campo,
  valor,
  onCambio,
  enPar,
  numero,
  T,
}: {
  campo: Campo;
  valor: string;
  onCambio: (id: string, texto: string) => void;
  enPar: boolean;
  numero?: number;
  T: TextosUI;
}) {
  if (campo.tipo === "frase") {
    return (
      <div>
        {campo.lead?.map((t) => (
          <p key={t} className="mt-2 max-w-prose leading-relaxed text-ink-soft">
            {t}
          </p>
        ))}
        {campo.cita && (
          <p className="mt-8 font-display text-xl text-charcoal md:text-2xl">
            {campo.cita}
          </p>
        )}
        {campo.nota?.map((t) => (
          <p
            key={t}
            className="mt-6 max-w-prose text-[0.95rem] leading-relaxed text-ink-soft"
          >
            {t}
          </p>
        ))}
        <p className="mt-8 font-editorial font-medium text-[1.8rem] leading-snug text-charcoal md:text-[2.1rem]">
          {campo.titulo}
        </p>
        <AreaRespuesta id={campo.id} valor={valor} onCambio={onCambio} T={T} />
      </div>
    );
  }
  return (
    <div>
      <p className="font-display text-sm tracking-[0.2em] text-gold-deep">
        {numero}.
      </p>
      <h2 className="mt-3 text-xl font-medium leading-snug text-charcoal md:text-[1.4rem]">
        {campo.titulo}
      </h2>
      {campo.nota?.map((t) => (
        <p
          key={t}
          className="mt-4 max-w-prose text-[0.95rem] leading-relaxed text-ink-soft"
        >
          {t}
        </p>
      ))}
      <AreaRespuesta
        id={campo.id}
        valor={valor}
        onCambio={onCambio}
        compacta={enPar}
        T={T}
      />
    </div>
  );
}

/* ============ Cuaderno ============ */

/**
 * El diseño vive aquí una sola vez; cada cuaderno (Yolotzin, OLLIN, PAHTIĀ,
 * DÁNGO) aporta solo su contenido. Detalles premium compartidos: capitular
 * en las cartas, numeral romano fantasma en las aperturas, ornamento de
 * rombo, hilo de avance con destello champaña. La portada y la página final
 * son crema, como el resto del libro.
 *
 * Bilingüe opcional: si se pasa `contenidoEn`, aparece el conmutador ES/EN
 * en la cabecera. Las respuestas comparten ids entre idiomas, así que
 * cambiar de lengua nunca borra nada. El idioma se recuerda con el borrador
 * y puede fijarse por URL con ?lang=en.
 */
export default function CuadernoUI({
  contenido,
  contenidoEn,
  acciones,
  continuidadDisponible,
}: {
  contenido: ContenidoCuaderno;
  contenidoEn?: ContenidoCuaderno;
  acciones: AccionesCuaderno;
  continuidadDisponible: boolean;
}) {
  const bilingue = Boolean(contenidoEn);
  const [lang, setLang] = useState<Lang>("es");
  const C = lang === "en" && contenidoEn ? contenidoEn : contenido;
  const T = TEXTOS_UI[lang];
  const {
    libro: LIBRO,
    instrucciones: INSTRUCCIONES,
    cartaBienvenida: CARTA_BIENVENIDA,
    cartaCierre: CARTA_CIERRE,
    fraseFinal: FRASE_FINAL,
    capitulos: CAPITULOS,
    totalCampos: TOTAL_CAMPOS,
  } = C;
  const { entregarCuaderno, crearEnlace, sincronizarBorrador, obtenerBorrador } =
    acciones;

  // Modelo de páginas y folios: misma estructura en ambos idiomas (mismos
  // ids, mismo número de páginas), así que el folio sobrevive al conmutador.
  const { PAGINAS, IDX_ENTREGA, IDX_FINAL, NUMERO_EN_CAPITULO } = useMemo(() => {
    const paginas: Pagina[] = [
      { tipo: "portada" },
      { tipo: "instrucciones" },
      { tipo: "carta" },
      ...CAPITULOS.flatMap((cap): Pagina[] => [
        { tipo: "apertura", cap },
        ...cap.paginas.map(
          (campos): Pagina => ({ tipo: "preguntas", cap, campos }),
        ),
      ]),
      { tipo: "cierre" },
      { tipo: "entrega" },
      { tipo: "final" },
    ];
    const numero = new Map<string, number>();
    for (const cap of CAPITULOS) {
      cap.paginas.flat().forEach((campo, i) => {
        numero.set(campo.id, i + 1);
      });
    }
    return {
      PAGINAS: paginas,
      IDX_ENTREGA: paginas.findIndex((p) => p.tipo === "entrega"),
      IDX_FINAL: paginas.length - 1,
      NUMERO_EN_CAPITULO: numero,
    };
  }, [CAPITULOS]);

  const LS_KEY = `clhei-cuaderno-${contenido.libro.slug}-v1`;

  const reduced = useReducedMotion();
  const [pagina, setPagina] = useState(0);
  const [nombres, setNombres] = useState("");
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);
  const [estado, setEstado] = useState<"quieto" | "enviando" | "error">(
    "quieto",
  );
  const [indiceAbierto, setIndiceAbierto] = useState(false);
  const [listo, setListo] = useState(false);
  const [guardadoVisible, setGuardadoVisible] = useState(false);
  const [almacenOk, setAlmacenOk] = useState(true);
  const [retomado, setRetomado] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [correoCont, setCorreoCont] = useState("");
  const [contEstado, setContEstado] = useState<
    "quieto" | "creando" | "correo" | "enlace" | "error"
  >("quieto");
  const [enlaceCont, setEnlaceCont] = useState("");
  const [copiado, setCopiado] = useState(false);
  const guardadoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const indicadorRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sincRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** Centinela: el primer guardado tras cargar no anuncia nada. */
  const contenidoPrevio = useRef<string | null>(null);
  const indiceAbiertoRef = useRef(false);
  indiceAbiertoRef.current = indiceAbierto;

  /* Restaurar sesión: enlace de continuidad (?c=) > este navegador.
     Idioma: ?lang=en|es > preferencia guardada > español.
     Personalización por URL: ?pareja=Ana%20y%20Luis */
  useEffect(() => {
    (async () => {
      try {
        localStorage.setItem("clhei-cuaderno-test", "1");
        localStorage.removeItem("clhei-cuaderno-test");
      } catch {
        setAlmacenOk(false);
      }
      let locales: {
        nombres?: string;
        respuestas?: Record<string, string>;
        pagina?: number;
        enviado?: boolean;
        token?: string;
        lang?: Lang;
      } | null = null;
      try {
        const crudo = localStorage.getItem(LS_KEY);
        if (crudo) locales = JSON.parse(crudo);
      } catch {
        /* una sesión limpia también es un buen comienzo */
      }

      const params = new URLSearchParams(window.location.search);
      const langUrl = params.get("lang");
      if (bilingue && (langUrl === "en" || langUrl === "es")) setLang(langUrl);
      else if (bilingue && (locales?.lang === "en" || locales?.lang === "es"))
        setLang(locales.lang);

      const tokenUrl = params.get("c");
      let servidor: Borrador | null = null;
      if (tokenUrl && continuidadDisponible) {
        try {
          servidor = await obtenerBorrador(tokenUrl);
        } catch {
          servidor = null;
        }
      }

      // El enlace de continuidad manda; si no trae nada, manda lo local.
      const fuente = servidor ?? locales;
      if (servidor && tokenUrl) setToken(tokenUrl);
      else if (locales?.token) setToken(locales.token);

      if (fuente) {
        if (fuente.nombres) setNombres(fuente.nombres);
        if (fuente.respuestas) setRespuestas(fuente.respuestas);
        if (fuente.enviado) setEnviado(true);
        if (typeof fuente.pagina === "number") {
          setPagina(
            Math.min(
              Math.max(0, fuente.pagina),
              fuente.enviado ? IDX_FINAL : IDX_ENTREGA,
            ),
          );
        }
        if (
          !fuente.enviado &&
          ((fuente.pagina ?? 0) > 0 ||
            Object.values(fuente.respuestas ?? {}).some(
              (r) => String(r).trim().length > 0,
            ))
        ) {
          setRetomado(true);
          setTimeout(() => setRetomado(false), 5200);
        }
      } else {
        const pareja = params.get("pareja");
        if (pareja) setNombres(pareja.slice(0, 120));
      }
      setListo(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [continuidadDisponible]);

  /* El idioma vive también en el atributo lang del documento. */
  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "es-MX";
  }, [lang]);

  /* Autoguardado silencioso + señal discreta de «Guardado» */
  useEffect(() => {
    if (!listo) return;
    if (guardadoRef.current) clearTimeout(guardadoRef.current);
    guardadoRef.current = setTimeout(() => {
      try {
        localStorage.setItem(
          LS_KEY,
          JSON.stringify({ nombres, respuestas, pagina, enviado, token, lang }),
        );
        // Solo se anuncia cuando cambió lo escrito (no al pasar página
        // ni en el primer guardado tras cargar).
        const contenidoActual = JSON.stringify({ nombres, respuestas });
        if (contenidoPrevio.current === null) {
          contenidoPrevio.current = contenidoActual;
        } else if (contenidoActual !== contenidoPrevio.current) {
          contenidoPrevio.current = contenidoActual;
          setGuardadoVisible(true);
          if (indicadorRef.current) clearTimeout(indicadorRef.current);
          indicadorRef.current = setTimeout(
            () => setGuardadoVisible(false),
            2400,
          );
        }
      } catch {
        setAlmacenOk(false);
      }
    }, 350);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nombres, respuestas, pagina, enviado, token, lang, listo]);

  /* Sincronización con el enlace de continuidad (si existe) */
  useEffect(() => {
    if (!listo || !token || !continuidadDisponible) return;
    if (sincRef.current) clearTimeout(sincRef.current);
    sincRef.current = setTimeout(() => {
      sincronizarBorrador(token, {
        nombres,
        respuestas,
        pagina,
        enviado,
      }).catch(() => {
        /* el respaldo local sigue intacto */
      });
    }, 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nombres, respuestas, pagina, enviado, token, listo, continuidadDisponible]);

  const respondidas = useMemo(
    () => Object.values(respuestas).filter((r) => r.trim().length > 0).length,
    [respuestas],
  );

  const maxPagina = enviado ? IDX_FINAL : IDX_ENTREGA;

  const irA = useCallback(
    (n: number) => {
      setPagina(Math.min(Math.max(0, n), enviado ? IDX_FINAL : IDX_ENTREGA));
      setIndiceAbierto(false);
      window.scrollTo(0, 0);
    },
    [enviado, IDX_FINAL, IDX_ENTREGA],
  );

  /* Navegación con teclado (sin robar el foco de la escritura) */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIndiceAbierto(false);
        return;
      }
      const t = e.target as HTMLElement;
      if (t.tagName === "TEXTAREA" || t.tagName === "INPUT") return;
      if (e.key === "ArrowRight") irA(pagina + 1);
      if (e.key === "ArrowLeft") irA(pagina - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pagina, irA]);

  /* Pasar página con el pulgar: swipe horizontal en pantallas táctiles */
  useEffect(() => {
    let x0 = 0;
    let y0 = 0;
    let activo = false;
    const inicio = (e: TouchEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("textarea, input, button, a")) {
        activo = false;
        return;
      }
      activo = true;
      x0 = e.touches[0].clientX;
      y0 = e.touches[0].clientY;
    };
    const fin = (e: TouchEvent) => {
      if (!activo || indiceAbiertoRef.current) return;
      const dx = e.changedTouches[0].clientX - x0;
      const dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 70 && Math.abs(dx) > 2 * Math.abs(dy)) {
        irA(pagina + (dx < 0 ? 1 : -1));
      }
    };
    window.addEventListener("touchstart", inicio, { passive: true });
    window.addEventListener("touchend", fin, { passive: true });
    return () => {
      window.removeEventListener("touchstart", inicio);
      window.removeEventListener("touchend", fin);
    };
  }, [pagina, irA]);

  const onCambio = useCallback((id: string, texto: string) => {
    setRespuestas((r) => ({ ...r, [id]: texto }));
  }, []);

  const enviar = async () => {
    if (!nombres.trim() || estado === "enviando") return;
    setEstado("enviando");
    try {
      const { ok } = await entregarCuaderno({ nombres, respuestas });
      if (ok) {
        setEnviado(true);
        setEstado("quieto");
        setPagina(IDX_FINAL);
        window.scrollTo(0, 0);
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  const pedirEnlace = async () => {
    if (contEstado === "creando" || !/^\S+@\S+\.\S+$/.test(correoCont.trim()))
      return;
    setContEstado("creando");
    try {
      const res = await crearEnlace({
        correo: correoCont.trim(),
        origen: `${window.location.origin}${window.location.pathname}`,
        borrador: { nombres, respuestas, pagina, enviado },
      });
      if (res.disponible && res.ok && res.token) {
        setToken(res.token);
        setEnlaceCont(res.enlace ?? "");
        setContEstado(res.correoEnviado ? "correo" : "enlace");
      } else {
        setContEstado("error");
      }
    } catch {
      setContEstado("error");
    }
  };

  const copiarEnlace = async () => {
    try {
      await navigator.clipboard.writeText(enlaceCont);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2200);
    } catch {
      /* el enlace queda visible para copiarlo a mano */
    }
  };

  /* Índice: entradas navegables */
  const indice = useMemo(() => {
    const entradas: { etiqueta: string; detalle?: string; idx: number }[] = [
      { etiqueta: T.portadaIdx, idx: 0 },
      { etiqueta: INSTRUCCIONES.titulo, idx: 1 },
      { etiqueta: T.cartaIdx, idx: 2 },
    ];
    for (const cap of CAPITULOS) {
      const idx = PAGINAS.findIndex(
        (p) => p.tipo === "apertura" && p.cap.num === cap.num,
      );
      const campos = cap.paginas.flat();
      const hechas = campos.filter((c) =>
        (respuestas[c.id] ?? "").trim(),
      ).length;
      entradas.push({
        etiqueta: `${ROMANOS[cap.num - 1]} · ${cap.titulo}`,
        detalle: T.avance(hechas, campos.length),
        idx,
      });
    }
    entradas.push(
      { etiqueta: CARTA_CIERRE.titulo, idx: IDX_ENTREGA - 1 },
      { etiqueta: T.entregaIdx, idx: IDX_ENTREGA },
    );
    return entradas;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [respuestas, C, T]);

  const actual = PAGINAS[pagina];
  const capActual =
    actual.tipo === "apertura" || actual.tipo === "preguntas"
      ? actual.cap
      : null;
  const [titulo1, titulo2] = partirTitulo(LIBRO.titulo);

  const transicion = reduced
    ? { duration: 0 }
    : { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] as const };

  if (!listo) return <div className="min-h-dvh bg-cream" />;

  return (
    <div className="relative min-h-dvh bg-cream">
      {/* ——— Marca de agua viva + anillo estela ——— */}
      <Ambiente pagina={pagina} />

      {/* ——— Barra superior: lockup Clhei · Servicio + idioma + índice ——— */}
      <header className="fixed inset-x-0 top-0 z-30 bg-cream/85 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 md:h-20 md:px-8">
          <span className="flex items-center gap-3 md:gap-4">
            <span className="font-display text-[0.85rem] tracking-[0.3em] text-charcoal md:text-[0.95rem]">
              CLHEI
            </span>
            <span
              aria-hidden="true"
              className="hidden h-3.5 w-px bg-line-gold sm:block"
            />
            <span className="hidden font-display text-[0.7rem] uppercase tracking-[0.3em] text-gold-deep sm:block md:text-[0.75rem]">
              {LIBRO.etiqueta}
            </span>
          </span>
          <span className="flex items-center gap-4 md:gap-7">
            {capActual && (
              <span className="kicker hidden text-ink-faint lg:block">
                {T.capitulo} {ROMANOS[capActual.num - 1]} · {capActual.titulo}
              </span>
            )}
            <span
              aria-live="polite"
              className={`kicker text-sage transition-opacity duration-700 ${
                guardadoVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {T.guardado}
            </span>
            {/* Conmutador de idioma (solo si el cuaderno es bilingüe) */}
            {bilingue && (
              <span
                className="flex items-center gap-2"
                role="group"
                aria-label={T.ariaIdioma}
              >
                {(["es", "en"] as const).map((l, i) => (
                  <span key={l} className="flex items-center gap-2">
                    {i > 0 && (
                      <span
                        aria-hidden="true"
                        className="h-3 w-px bg-line-gold"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setLang(l)}
                      aria-pressed={lang === l}
                      className={`cursor-pointer font-display text-[0.68rem] uppercase tracking-[0.28em] transition-colors duration-300 ${
                        lang === l
                          ? "text-gold-deep underline decoration-line-gold underline-offset-4"
                          : "text-ink-faint hover:text-charcoal"
                      }`}
                    >
                      {l.toUpperCase()}
                    </button>
                  </span>
                ))}
              </span>
            )}
            {pagina > 0 && pagina < IDX_FINAL && (
              <button
                type="button"
                onClick={() => setIndiceAbierto(true)}
                className="kicker cursor-pointer border border-line-gold px-4 py-2.5 transition-colors duration-300 hover:border-gold-deep hover:text-charcoal md:px-5"
              >
                {T.indice}
              </button>
            )}
          </span>
        </div>
        {/* hilo de avance con destello champaña, fino como una costura */}
        <div className="h-px w-full bg-line/60">
          <div
            className="cuaderno-thread h-px w-full origin-left transition-transform duration-700"
            style={{ transform: `scaleX(${pagina / IDX_FINAL})` }}
          />
        </div>
      </header>

      {/* ——— Página actual ——— */}
      <main className="relative z-10 mx-auto w-full max-w-2xl px-6 pb-40 pt-28 md:px-8 md:pt-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={pagina}
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -12 }}
            transition={transicion}
          >
            {/* Portada */}
            {actual.tipo === "portada" && (
              <div className="flex min-h-[70dvh] flex-col items-center justify-center text-center">
                <LogoMark size={54} className="opacity-90" />
                <p className="kicker mt-10">{LIBRO.subtitulo}</p>
                <h1 className="font-display mt-6 text-4xl leading-tight tracking-[0.08em] text-charcoal md:text-5xl">
                  {titulo1}
                  {titulo2 && (
                    <>
                      <br />
                      {titulo2}
                    </>
                  )}
                </h1>
                <p className="kicker mt-6 text-sage">{LIBRO.servicio}</p>
                <LineaNombres
                  valor={nombres}
                  onCambio={setNombres}
                  className="mt-14 w-full max-w-sm"
                  T={T}
                />
                <button
                  type="button"
                  onClick={() => irA(1)}
                  className="kicker mt-14 cursor-pointer border border-gold-deep/40 px-9 py-3.5 text-charcoal transition-colors duration-300 hover:border-gold-deep hover:text-gold-deep"
                >
                  {T.abrir}
                </button>
                <p className="mt-16 text-[0.7rem] tracking-[0.2em] text-ink-faint">
                  {LIBRO.marca.toUpperCase()}
                </p>
              </div>
            )}

            {/* Antes de comenzar */}
            {actual.tipo === "instrucciones" && (
              <div className="flex min-h-[64dvh] flex-col justify-center py-6">
                <h1 className="font-display text-3xl tracking-[0.06em] text-charcoal">
                  {INSTRUCCIONES.titulo}
                </h1>
                <div className="mt-10 space-y-6">
                  {INSTRUCCIONES.parrafos.map((t) => (
                    <p
                      key={t}
                      className="max-w-prose text-[1.05rem] leading-[1.9] text-charcoal/90"
                    >
                      {t}
                    </p>
                  ))}
                </div>
                <Ornamento className="mt-12 w-24 text-gold-deep/50" />
                <p className="accent-italic mt-8 max-w-prose text-[1.05rem] leading-relaxed text-ink-soft">
                  {INSTRUCCIONES.notaDigital}
                </p>
                {!almacenOk && (
                  <p className="accent-italic mt-6 max-w-prose text-[1.05rem] leading-relaxed text-gold-deep">
                    {T.avisoAlmacen}
                  </p>
                )}

                {/* Continuidad entre dispositivos */}
                {continuidadDisponible && (
                  <div className="mt-12 border-t border-line/60 pt-8">
                    {!token ? (
                      <>
                        <p className="kicker">{T.contKicker}</p>
                        <p className="mt-4 max-w-prose text-[0.95rem] leading-relaxed text-ink-soft">
                          {T.contInvitacion}
                        </p>
                        <div className="mt-6 flex max-w-md items-end gap-4">
                          <div className="relative flex-1">
                            <input
                              type="email"
                              value={correoCont}
                              onChange={(e) =>
                                setCorreoCont(e.target.value.slice(0, 200))
                              }
                              placeholder={T.contPlaceholder}
                              aria-label={T.contAria}
                              className="cuaderno-writing peer w-full border-0 border-b border-line bg-transparent pb-2 font-editorial font-medium text-lg text-charcoal outline-none placeholder:italic placeholder:text-ink-faint/60"
                            />
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold-deep transition-transform duration-500 ease-out peer-focus:scale-x-100"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={pedirEnlace}
                            disabled={
                              contEstado === "creando" ||
                              !/^\S+@\S+\.\S+$/.test(correoCont.trim())
                            }
                            className="kicker cursor-pointer border border-line-gold px-5 py-3 transition-colors duration-300 hover:border-gold-deep hover:text-gold-deep disabled:cursor-default disabled:opacity-40"
                          >
                            {contEstado === "creando"
                              ? T.contPreparando
                              : T.contEnviar}
                          </button>
                        </div>
                        {contEstado === "error" && (
                          <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-soft">
                            {T.contError}
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <p className="kicker">{T.contKicker}</p>
                        {contEstado === "correo" && (
                          <p className="accent-italic mt-4 max-w-prose text-[1.05rem] leading-relaxed text-ink-soft">
                            {T.contCorreo}
                          </p>
                        )}
                        {contEstado === "enlace" && (
                          <div className="mt-4 max-w-prose">
                            <p className="accent-italic text-[1.05rem] leading-relaxed text-ink-soft">
                              {T.contEnlaceListo}
                            </p>
                            <div className="mt-4 flex items-center gap-4">
                              <span className="min-w-0 flex-1 truncate border-b border-line pb-1 text-sm text-ink-soft">
                                {enlaceCont}
                              </span>
                              <button
                                type="button"
                                onClick={copiarEnlace}
                                className="kicker cursor-pointer whitespace-nowrap transition-colors hover:text-charcoal"
                              >
                                {copiado ? T.copiado : T.copiar}
                              </button>
                            </div>
                          </div>
                        )}
                        {contEstado === "quieto" && (
                          <p className="accent-italic mt-4 max-w-prose text-[1.05rem] leading-relaxed text-ink-soft">
                            {T.contActivo}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Carta de bienvenida — con capitular */}
            {actual.tipo === "carta" && (
              <div className="py-6">
                <h1 className="kicker">{T.cartaIdx}</h1>
                <div className="mt-10 space-y-6">
                  {CARTA_BIENVENIDA.parrafos.map((t, i) => (
                    <p
                      key={t}
                      className={`max-w-prose text-[1.05rem] leading-[1.9] text-charcoal/90 ${
                        i === 0 ? "cuaderno-dropcap" : ""
                      }`}
                    >
                      {t}
                    </p>
                  ))}
                  <p className="max-w-prose text-[1.05rem] leading-[1.9] text-charcoal/90">
                    {CARTA_BIENVENIDA.despedida}
                  </p>
                </div>
                <Firma contenido={C} />
              </div>
            )}

            {/* Apertura de capítulo — con numeral fantasma y ornamento */}
            {actual.tipo === "apertura" && (
              <div className="relative flex min-h-[64dvh] flex-col justify-center text-center">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-editorial italic leading-none text-gold/[0.08] text-[13rem] md:text-[19rem]"
                >
                  {ROMANOS[actual.cap.num - 1]}
                </span>
                <p className="kicker relative">
                  {T.capitulo} {ROMANOS[actual.cap.num - 1]}
                </p>
                <h1 className="font-display relative mt-6 text-4xl tracking-[0.06em] text-charcoal md:text-5xl">
                  {actual.cap.titulo}
                </h1>
                <Ornamento className="relative mx-auto mt-9 w-28 text-gold-deep/60" />
                <div className="relative mt-9 space-y-5">
                  {actual.cap.frases.map((f) => (
                    <p
                      key={f}
                      className="accent-italic mx-auto max-w-xl text-xl leading-[1.7] text-charcoal/90 md:text-[1.35rem]"
                    >
                      {f}
                    </p>
                  ))}
                </div>
                {actual.cap.intro.length > 0 && (
                  <div className="relative mx-auto mt-10 max-w-xl space-y-5 text-left">
                    {actual.cap.intro.map((t) => (
                      <p key={t} className="leading-[1.9] text-ink-soft">
                        {t}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Página de preguntas */}
            {actual.tipo === "preguntas" && (
              <div className="py-6">
                <h1 className="sr-only">
                  {T.capitulo} {ROMANOS[actual.cap.num - 1]} ·{" "}
                  {actual.cap.titulo}
                </h1>
                <p className="kicker" aria-hidden="true">
                  {ROMANOS[actual.cap.num - 1]} · {actual.cap.titulo}
                </p>
                <div className="mt-12 space-y-20">
                  {actual.campos.map((campo) => (
                    <CampoBloque
                      key={campo.id}
                      campo={campo}
                      valor={respuestas[campo.id] ?? ""}
                      onCambio={onCambio}
                      enPar={actual.campos.length > 1}
                      numero={NUMERO_EN_CAPITULO.get(campo.id)}
                      T={T}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Epílogo · carta de cierre — con capitular */}
            {actual.tipo === "cierre" && (
              <div className="py-6">
                <p className="kicker">{T.epilogo}</p>
                <h1 className="font-display mt-6 text-3xl tracking-[0.06em] text-charcoal">
                  {CARTA_CIERRE.titulo}
                </h1>
                <div className="mt-10 space-y-6">
                  {CARTA_CIERRE.parrafos.map((t, i) => (
                    <p
                      key={t}
                      className={`max-w-prose text-[1.05rem] leading-[1.9] text-charcoal/90 ${
                        i === 0 ? "cuaderno-dropcap" : ""
                      }`}
                    >
                      {t}
                    </p>
                  ))}
                  <p className="max-w-prose text-[1.05rem] leading-[1.9] text-charcoal/90">
                    {CARTA_CIERRE.despedida}
                  </p>
                </div>
                <Firma contenido={C} />
              </div>
            )}

            {/* La entrega */}
            {actual.tipo === "entrega" && (
              <div className="flex min-h-[64dvh] flex-col justify-center text-center">
                <p className="kicker">{T.entregaIdx}</p>
                <h1 className="font-display mt-6 text-3xl tracking-[0.06em] text-charcoal md:text-4xl">
                  {T.listoTitulo}
                </h1>
                <p className="mx-auto mt-8 max-w-lg leading-[1.9] text-ink-soft">
                  {T.listoCuerpo}
                </p>
                <p className="mt-6 text-sm text-ink-faint">
                  {T.llevan(respondidas, TOTAL_CAMPOS)}
                </p>
                {respondidas < TOTAL_CAMPOS * 0.6 && (
                  <p className="accent-italic mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
                    {T.sinPrisa}
                  </p>
                )}
                {!nombres.trim() && (
                  <div className="mx-auto mt-10 w-full max-w-sm">
                    <p className="accent-italic text-ink-soft">
                      {T.antesNombres}
                    </p>
                    <LineaNombres
                      valor={nombres}
                      onCambio={setNombres}
                      className="mt-4"
                      T={T}
                    />
                  </div>
                )}
                <button
                  type="button"
                  onClick={enviar}
                  disabled={!nombres.trim() || estado === "enviando"}
                  className="kicker mx-auto mt-12 cursor-pointer border border-gold-deep/50 px-10 py-4 text-charcoal transition-colors duration-300 hover:border-gold-deep hover:text-gold-deep disabled:cursor-default disabled:opacity-40"
                >
                  {estado === "enviando" ? T.enviando : T.enviar}
                </button>
                {estado === "error" && (
                  <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-ink-soft">
                    {T.errorEnvio}
                    <a
                      href={waLink()}
                      target="_blank"
                      rel="noopener"
                      className="link-gold"
                    >
                      {T.errorWhats}
                    </a>
                    {T.errorEnvioFin}
                  </p>
                )}
              </div>
            )}

            {/* Página final */}
            {actual.tipo === "final" && (
              <div className="flex min-h-[70dvh] flex-col items-center justify-center text-center">
                <LogoMark size={50} className="opacity-85" />
                <h1 className="font-display mt-10 text-3xl tracking-[0.06em] text-charcoal">
                  {T.finalTitulo}
                </h1>
                <p className="mx-auto mt-6 max-w-md leading-[1.9] text-ink-soft">
                  {T.finalGracias(nombres.trim())}
                </p>
                <Ornamento className="mx-auto mt-12 w-28 text-gold-deep/50" />
                <p className="accent-italic mx-auto mt-10 max-w-md text-lg leading-[1.8] text-charcoal/85">
                  {FRASE_FINAL}
                </p>
                <p className="mt-16 text-[0.7rem] tracking-[0.2em] text-ink-faint">
                  {LIBRO.marca.toUpperCase()}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ——— Al volver: retomamos donde lo dejaron ——— */}
      <AnimatePresence>
        {retomado && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pointer-events-none fixed inset-x-0 bottom-24 z-30 flex justify-center px-6"
          >
            <p className="accent-italic border border-line bg-parchment px-6 py-3 text-[0.95rem] text-ink-soft">
              {T.retomado}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ——— Navegación inferior ——— */}
      {actual.tipo !== "portada" && actual.tipo !== "final" && (
        <nav className="fixed inset-x-0 bottom-0 z-30 bg-gradient-to-t from-cream via-cream/95 to-transparent pb-5 pt-10">
          <div className="mx-auto flex max-w-2xl items-center justify-between px-6 md:px-8">
            <button
              type="button"
              onClick={() => irA(pagina - 1)}
              className="kicker cursor-pointer py-2 transition-colors hover:text-charcoal"
            >
              {T.anterior}
            </button>
            <span className="hidden text-[0.68rem] tracking-[0.3em] text-ink-faint md:block">
              {pagina + 1} / {PAGINAS.length}
            </span>
            {pagina < maxPagina ? (
              <button
                type="button"
                onClick={() => irA(pagina + 1)}
                className="kicker cursor-pointer py-2 text-gold-deep transition-colors hover:text-charcoal"
              >
                {T.siguiente}
              </button>
            ) : (
              <span aria-hidden className="kicker invisible py-2">
                {T.siguiente}
              </span>
            )}
          </div>
        </nav>
      )}

      {/* ——— Índice ——— */}
      <AnimatePresence>
        {indiceAbierto && (
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-cream"
          >
            <div className="mx-auto max-w-md px-6 py-20">
              <div className="flex items-center justify-between">
                <p className="kicker">{T.indice}</p>
                <button
                  type="button"
                  onClick={() => setIndiceAbierto(false)}
                  className="kicker cursor-pointer transition-colors hover:text-charcoal"
                  aria-label={T.ariaCerrarIndice}
                >
                  {T.cerrar}
                </button>
              </div>
              <ul className="mt-10 space-y-1">
                {indice.map((e) => (
                  <li key={e.etiqueta}>
                    <button
                      type="button"
                      onClick={() => irA(e.idx)}
                      className="group flex w-full cursor-pointer items-baseline justify-between gap-4 border-b border-line/60 py-4 text-left transition-colors hover:border-line-gold"
                    >
                      <span
                        className={`font-editorial font-medium text-xl transition-colors group-hover:text-gold-deep ${
                          pagina >= e.idx &&
                          (indice.find((x) => x.idx > e.idx)?.idx ?? Infinity) >
                            pagina
                            ? "text-gold-deep"
                            : "text-charcoal"
                        }`}
                      >
                        {e.etiqueta}
                      </span>
                      {e.detalle && (
                        <span className="text-xs tracking-wider text-ink-faint">
                          {e.detalle}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
