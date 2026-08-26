import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://allchinabuys.store/sitemap.xml",
    host: "https://allchinabuys.store",
  };
}
