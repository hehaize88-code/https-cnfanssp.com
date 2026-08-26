import type { NextConfig } from "next";

const isCloudflarePagesBuild = process.env.CLOUDFLARE_PAGES === "1";

const nextConfig: NextConfig = {
  ...(isCloudflarePagesBuild
    ? {
        output: "export",
        images: { unoptimized: true },
        typescript: { tsconfigPath: "tsconfig.pages.json" },
      }
    : {}),
};

export default nextConfig;
