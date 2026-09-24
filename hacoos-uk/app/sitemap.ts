import type { MetadataRoute } from "next";
import { englishOnlyArticleKeys, locales, pageKeys, routeFor } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageKeys
      .filter((pageKey) => locale === "en" || !englishOnlyArticleKeys.has(pageKey))
      .map((pageKey) => ({
      url: `https://hacoos.uk${routeFor(locale, pageKey)}`,
      lastModified: new Date(
        englishOnlyArticleKeys.has(pageKey) || pageKey === "home" || pageKey === "articles"
          ? "2026-09-18"
          : pageKey === "articles/hacoo-uk-pre-order-readiness-sheet"
            ? "2026-08-29"
            : "2026-08-28",
      ),
      changeFrequency: pageKey === "home" || pageKey === "finds" ? "weekly" as const : "monthly" as const,
      priority: pageKey === "home" ? 1 : pageKey === "spreadsheet" || pageKey === "finds" || englishOnlyArticleKeys.has(pageKey) ? 0.8 : 0.6,
    })),
  );
}
