"use client";

import { useEffect, useRef } from "react";
import LogoMark from "@/components/LogoMark";

/**
 * Ambiente del cuaderno: presencia de marca sutil que acompaña sin
 * interrumpir la escritura de la pareja.
 *
 * — Marca de agua: el logo mark oficial de Clhei en oro a muy baja
 *   opacidad, en dos capas (una grande, una pequeña) que se recomponen
 *   con una transición lenta en cada vuelta de página — presencia viva,
 *   no monótona, sin imágenes que predispongan.
 *
 * — Estela: un anillo dorado sigue al cursor con inercia (smooth
 *   follower), acompañando al punto Clhei del sitio.
 *
 * Con puntero grueso o prefers-reduced-motion todo queda quieto.
 */

/** Composiciones por las que rota la marca al pasar página (vw/vh, grados). */
const SLOTS = [
  { x: 76, y: 26, r: 10 },
  { x: 20, y: 70, r: -16 },
  { x: 82, y: 64, r: 24 },
  { x: 16, y: 24, r: -6 },
  { x: 81, y: 42, r: 14 },
];

export default function Ambiente({ pagina }: { pagina: number }) {
  const anillo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cx = innerWidth / 2;
    let cy = innerHeight / 2;
    let rx = cx;
    let ry = cy;
    let raf = 0;
    let visto = false;

    const onMove = (e: PointerEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (!visto && anillo.current) {
        anillo.current.classList.add("cuaderno-anillo-on");
        visto = true;
      }
    };
    const onOver = (e: PointerEvent) => {
      anillo.current?.classList.toggle(
        "cuaderno-anillo-grow",
        !!(e.target as Element | null)?.closest(
          "a, button, textarea, input, [role='button']",
        ),
      );
    };
    const loop = () => {
      if (anillo.current) {
        rx += (cx - rx) * 0.1;
        ry += (cy - ry) * 0.1;
        anillo.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("pointerover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  const slotA = SLOTS[pagina % SLOTS.length];
  const slotB = SLOTS[(pagina + 2) % SLOTS.length];
  // Rotación que varía con la página para que la marca nunca repita pose.
  const rotA = slotA.r + (((pagina * 7) % 24) - 12);
  const rotB = -slotB.r - (((pagina * 5) % 16) - 8);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div
          className="cuaderno-mark absolute left-0 top-0"
          style={{
            transform: `translate(${slotA.x}vw, ${slotA.y}vh) translate(-50%, -50%) rotate(${rotA}deg)`,
          }}
        >
          <div className="cuaderno-float">
            <LogoMark size={520} style={{ opacity: 0.05 }} />
          </div>
        </div>
        <div
          className="cuaderno-mark absolute left-0 top-0"
          style={{
            transform: `translate(${slotB.x}vw, ${slotB.y}vh) translate(-50%, -50%) rotate(${rotB}deg)`,
          }}
        >
          <div className="cuaderno-float-b">
            <LogoMark size={180} style={{ opacity: 0.045 }} />
          </div>
        </div>
      </div>
      <div ref={anillo} className="cuaderno-anillo" aria-hidden="true" />
    </>
  );
}
