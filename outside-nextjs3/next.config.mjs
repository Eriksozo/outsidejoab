/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estático: gera a pasta `out/` — ideal para Cloudflare Pages.
  output: "export",
  images: {
    // Usamos <img> com URLs externas, então a otimização do next/image fica desligada.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "fabricadefrasesinfinitas.com" },
      { protocol: "https", hostname: "fast.wistia.com" },
    ],
  },
};

export default nextConfig;
