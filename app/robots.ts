import type { MetadataRoute } from "next";

/** Sitio privado: nada se indexa. Los enlaces se comparten en persona. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
