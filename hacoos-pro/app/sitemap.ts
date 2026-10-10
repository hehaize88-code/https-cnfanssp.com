import type { MetadataRoute } from "next";
import { locales, pageKeys, routeFor, type PageKey } from "./site-data";

// Preserve real modification dates per page. When a new article is added,
// update only its entry and the discovery pages that materially changed.
const lastModifiedByPage = Object.fromEntries(pageKeys.map(key => [key, "2026-10-09"])) as Record<PageKey, string>;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageKeys.map((pageKey) => ({
      url: `https://hacoos.pro${routeFor(locale, pageKey)}`,
      lastModified: new Date(lastModifiedByPage[pageKey]),
      changeFrequency: pageKey === "home" || pageKey === "finds" ? "weekly" as const : "monthly" as const,
      alternates: { languages: Object.fromEntries([...locales.map(lang => [lang, `https://hacoos.pro${routeFor(lang, pageKey)}`]), ["x-default", `https://hacoos.pro${routeFor("en", pageKey)}`]]) },
      priority: pageKey === "home" ? 1 : pageKey === "spreadsheet" || pageKey === "finds" ? 0.8 : 0.6,
    })),
  );
}
