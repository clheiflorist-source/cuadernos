import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // La raíz aún no tiene portada propia: el primer cuaderno es Yolotzin.
      { source: "/", destination: "/yolotzin", permanent: false },
    ];
  },
};

export default nextConfig;
