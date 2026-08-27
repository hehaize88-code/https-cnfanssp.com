import type { MetadataRoute } from "next";
import { articles, PLANNED_ORIGIN } from "./data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-08-27T00:00:00Z");
  const routes = ["", "/finds", "/categories", "/qc", "/shipping", "/guide", "/articles", "/faq"];
  const english = [...routes, ...articles.map((article) => `/articles/${article.slug}`)];
  const localized = ["nl", "de", "it", "es"].flatMap((locale) => english.map((route) => `/${locale}${route}`));
  return [...english, ...localized].map((route) => ({
    url: `${PLANNED_ORIGIN}${route || "/"}`,
    lastModified: now,
    changeFrequency: route === "" || /^\/(nl|de|it|es)$/.test(route) ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : /^\/(nl|de|it|es)$/.test(route) ? 0.9 : route.includes("/articles/") ? 0.75 : 0.8,
  }));
}
