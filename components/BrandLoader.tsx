"use client";

import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

/**
 * Animación de carga de marca — solo la primera visita de la sesión:
 * el logo mark oficial de Clhei florece en oro con una leve inclinación 3D,
 * aparece CLHEI y el telón sube.
 *
 * Las navegaciones internas entre subpáginas ya NO se interrumpen con velo:
 * la transición es directa. Sin JS no se renderiza estorbo (CSS lo oculta) y
 * prefers-reduced-motion salta la intro.
 */

const INTRO_EXIT_AT = 2000;
const INTRO_TOTAL = 2850;

export default function BrandLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem("clhei-intro")) {
      setVisible(false);
      return;
    }
    sessionStorage.setItem("clhei-intro", "1");
    const t1 = setTimeout(() => setExiting(true), INTRO_EXIT_AT);
    const t2 = setTimeout(() => setVisible(false), INTRO_TOTAL);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`brand-loader ${exiting ? "brand-loader-exit" : ""}`} aria-hidden="true">
      <div className="loader-stage">
        <LogoMark size={92} className="loader-mark-draw" />
      </div>
      <p className="loader-word">CLHEI</p>
      <p className="loader-sub">Floral Styling &amp; Events</p>
    </div>
  );
}
