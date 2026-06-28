/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Las fotos viven en /public; permitimos optimización local.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
