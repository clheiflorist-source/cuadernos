export const SITE = {
  name: "Clhei Floral Styling & Events",
  shortName: "Clhei",
  url: "https://cuadernos.clhei.florist",
  whatsapp: "522225727457",
  email: "clhei.florist@gmail.com",
} as const;

/** Deep-link de WhatsApp con mensaje precargado. */
export function waLink(service?: string): string {
  const msg = service
    ? `Hola, Clhei. Me interesa ${service}. ¿Me pueden compartir más información?`
    : "Hola, Clhei. Estamos respondiendo nuestro cuaderno y necesitamos ayuda.";
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
}
