import type { MetadataRoute } from "next";
import { locales, pageKeys, routeFor } from "./site-data";

import { entryContent, novemberRevision } from "./entry-content";
import { novemberKeys } from "./guide-content";

const updatedPages = new Set<string>([
  ...novemberKeys, ...Object.keys(entryContent.en.pages), ...Object.keys(entryContent.en.examples),
  "home", "articles", "qc-guide",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageKeys.map((pageKey) => ({
      url: `https://hacoos.store${routeFor(locale, pageKey)}`,
      lastModified: new Date(updatedPages.has(pageKey) ? novemberRevision : "2026-10-10"),
      changeFrequency: pageKey === "home" || pageKey === "finds" ? "weekly" as const : "monthly" as const,
      priority: pageKey === "home" ? 1 : pageKey === "spreadsheet" || pageKey === "finds" ? 0.8 : 0.6,
    })),
  );
}
