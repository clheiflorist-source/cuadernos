import type { Metadata } from "next";
import "./globals.css";
import CursorDot from "@/components/CursorDot";
import BrandLoader from "@/components/BrandLoader";
import { SITE } from "@/lib/site";

/**
 * Cuadernos Clhei — espacio privado para las parejas del estudio.
 * Todo el sitio vive fuera de los buscadores: los enlaces se comparten
 * en persona, después de contratar.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Cuadernos · Clhei Floral Styling & Events",
    template: "%s · Clhei",
  },
  description: "Un espacio para escribir juntos, antes de hablar de flores.",
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: "#faf9f5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <head>
        <link
          rel="preload"
          href="/fonts/Cinzel-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/jost-v20-latin-300.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Marca <html class="js"> antes del primer paint: sin JS, el CSS
            oculta el loader para no dejar un velo permanente. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <main>{children}</main>
        <CursorDot />
        <BrandLoader />
      </body>
    </html>
  );
}
