"use client";

import { useEffect, useRef } from "react";

/**
 * Punto dorado que sigue al cursor con inercia y crece sobre elementos
 * interactivos. Solo existe en dispositivos con puntero fino; el cursor
 * nativo nunca se oculta (es acento, no reemplazo).
 */
export default function CursorDot() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const dot = ref.current!;
    let cx = 0, cy = 0, px = 0, py = 0, raf = 0, shown = false;

    const onMove = (e: PointerEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      if (!shown) {
        dot.classList.add("cursor-dot-on");
        shown = true;
      }
    };
    const onOver = (e: PointerEvent) => {
      const t = e.target as Element | null;
      dot.classList.toggle(
        "cursor-dot-grow",
        !!t?.closest("a, button, [role='button'], summary"),
      );
    };
    const loop = () => {
      px += (cx - px) * 0.22;
      py += (cy - py) * 0.22;
      dot.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%)`;
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

  return <div ref={ref} className="cursor-dot" aria-hidden="true" />;
}
