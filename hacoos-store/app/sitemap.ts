import type { MetadataRoute } from "next";
import { locales, pageKeys, routeFor } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageKeys.map((pageKey) => ({
      url: `https://hacoos.store${routeFor(locale, pageKey)}`,
      lastModified: new Date("2026-08-27"),
      changeFrequency: pageKey === "home" || pageKey === "finds" ? "weekly" as const : "monthly" as const,
      priority: pageKey === "home" ? 1 : pageKey === "spreadsheet" || pageKey === "finds" ? 0.8 : 0.6,
    })),
  );
}
