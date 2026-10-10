import type { MetadataRoute } from "next";
import { articles, PLANNED_ORIGIN } from "./data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/finds", "/spreadsheet", "/categories", "/qc", "/shipping", "/guide", "/articles", "/faq"];
  const allRoutes = [...routes, ...articles.map((article) => `/articles/${article.slug}`)];
  return ["en", "nl", "de", "it", "es"].flatMap((locale) => allRoutes.map((route) => {
    const prefix = locale === "en" ? "" : `/${locale}`;
    const article = articles.find((item) => route === `/articles/${item.slug}`);
    const changed = locale !== "en" || ["", "/articles"].includes(route);
    return {
      url: `${PLANNED_ORIGIN}${prefix}${route || (locale === "en" ? "/" : "")}`,
      lastModified: new Date(`${article?.modified ?? (changed ? "2026-10-08" : "2026-09-15")}T00:00:00Z`),
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : route.includes("/articles/") ? 0.75 : 0.8,
    };
  }));
}
