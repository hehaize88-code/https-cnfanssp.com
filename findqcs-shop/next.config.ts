import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages serves this public research site as a static export.
  // All article slugs are declared through generateStaticParams().
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
