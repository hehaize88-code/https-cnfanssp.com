import type { MetadataRoute } from "next";
import { articles, PLANNED_ORIGIN } from "./data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-08-27T00:00:00Z");
  const routes = ["", "/finds", "/categories", "/qc", "/shipping", "/guide", "/articles", "/faq"];
  return [...routes.map((route, i) => ({ url: `${PLANNED_ORIGIN}${route}`, lastModified: now, changeFrequency: i < 2 ? "weekly" as const : "monthly" as const, priority: i === 0 ? 1 : i < 4 ? 0.85 : 0.7 })), ...articles.map((article) => ({ url: `${PLANNED_ORIGIN}/articles/${article.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.75 }))];
}
