/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // As imagens originais ficam hospedadas remotamente (WordPress).
    // Liberadas aqui caso você queira migrar para next/image no futuro.
    remotePatterns: [
      { protocol: "https", hostname: "fabricadefrasesinfinitas.com" },
      { protocol: "https", hostname: "fast.wistia.com" },
    ],
  },
};

export default nextConfig;
