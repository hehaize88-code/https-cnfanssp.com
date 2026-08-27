/** @type {import('next').NextConfig} */
const language = process.env.NEXT_PUBLIC_SITE_LANGUAGE || "en";

const nextConfig = {
  output: "export",
  distDir: process.env.NEXT_BUILD_DIR || ".next",
  basePath: language === "en" ? "" : `/${language}`,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
