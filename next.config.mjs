/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // FR par défaut, EN prévu — préparé côté routing applicatif (voir /lib/i18n).
};

export default nextConfig;
