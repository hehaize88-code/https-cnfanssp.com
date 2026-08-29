import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: ["/api/"] }, sitemap: "https://hacoovip.store/sitemap.xml", host: "https://hacoovip.store" }; }
