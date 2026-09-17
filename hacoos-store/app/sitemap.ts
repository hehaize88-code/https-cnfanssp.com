import type { MetadataRoute } from "next";
import { locales, pageKeys, routeFor } from "./site-data";

const releaseDate = (pageKey: (typeof pageKeys)[number]) => {
  if (pageKey.startsWith("articles/hacoo-")) return new Date("2026-09-17");
  if (pageKey === "home" || pageKey === "spreadsheet" || pageKey === "finds" || pageKey === "articles") return new Date("2026-09-17");
  if (pageKey === "articles/spreadsheet-finds-categories-start") return new Date("2026-08-29");
  return new Date("2026-08-27");
};

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageKeys.map((pageKey) => ({
      url: `https://hacoos.store${routeFor(locale, pageKey)}`,
      lastModified: releaseDate(pageKey),
      changeFrequency: pageKey === "home" || pageKey === "finds" ? "weekly" as const : "monthly" as const,
      priority: pageKey === "home" ? 1 : pageKey === "spreadsheet" || pageKey === "finds" ? 0.8 : 0.6,
    })),
  );
}
