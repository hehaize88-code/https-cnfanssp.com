import type { MetadataRoute } from "next";
import { locales, pageKeys, routeFor, type PageKey } from "./site-data";

// Preserve real modification dates per page. When a new article is added,
// update only its entry and the discovery pages that materially changed.
const lastModifiedByPage: Record<PageKey, string> = {
  home: "2026-08-27",
  spreadsheet: "2026-08-27",
  finds: "2026-08-27",
  categories: "2026-08-27",
  "qc-guide": "2026-08-27",
  shipping: "2026-08-27",
  guide: "2026-08-27",
  faq: "2026-08-27",
  articles: "2026-08-27",
  "articles/find-product-links": "2026-08-27",
  "articles/read-qc-photos": "2026-08-27",
  "articles/size-before-you-buy": "2026-08-27",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageKeys.map((pageKey) => ({
      url: `https://hacoos.pro${routeFor(locale, pageKey)}`,
      lastModified: new Date(lastModifiedByPage[pageKey]),
      changeFrequency: pageKey === "home" || pageKey === "finds" ? "weekly" as const : "monthly" as const,
      priority: pageKey === "home" ? 1 : pageKey === "spreadsheet" || pageKey === "finds" ? 0.8 : 0.6,
    })),
  );
}
