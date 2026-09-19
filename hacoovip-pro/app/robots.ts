import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://hacoovip.pro/sitemap.xml",
    host: "https://hacoovip.pro",
  };
}
