import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.cnfanssp.com", pathname: "/uploads/**" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
