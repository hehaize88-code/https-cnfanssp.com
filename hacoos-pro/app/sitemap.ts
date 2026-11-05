import { revisedOn } from "./article-meta";
import type { MetadataRoute } from "next";
import { locales, pageKeys, routeFor } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pageKeys.map((pageKey) => ({
      url: `https://hacoos.pro${routeFor(locale, pageKey)}`,
      lastModified: new Date(revisedOn(pageKey)),
      changeFrequency: pageKey === "home" || pageKey === "finds" ? "weekly" as const : "monthly" as const,
      alternates: { languages: Object.fromEntries([...locales.map(lang => [lang, `https://hacoos.pro${routeFor(lang, pageKey)}`]), ["x-default", `https://hacoos.pro${routeFor("en", pageKey)}`]]) },
      priority: pageKey === "home" ? 1 : pageKey === "spreadsheet" || pageKey === "finds" ? 0.8 : 0.6,
    })),
  );
}
