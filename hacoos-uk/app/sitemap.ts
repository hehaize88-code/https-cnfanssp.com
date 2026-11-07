import { articles, type ArticleKey } from "./article-content";
import type { MetadataRoute } from "next";
import { locales, pageKeys, routeFor } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedHubs = new Set(["home", "shipping", "articles", "methodology"]);
  return locales.flatMap((locale) => pageKeys.map((pageKey) => ({
    url: `https://hacoos.uk${routeFor(locale, pageKey)}`,
    lastModified: new Date(updatedHubs.has(pageKey) ? "2026-11-05" : articles[locale][pageKey as ArticleKey]?.reviewed ?? "2026-10-10"),
    changeFrequency: pageKey === "home" || pageKey === "finds" ? "weekly" as const : "monthly" as const,
    priority: pageKey === "home" ? 1 : pageKey === "articles" || pageKey === "guide" ? 0.8 : 0.6,
    alternates: { languages: Object.fromEntries([
      ...locales.map((lang) => [lang, `https://hacoos.uk${routeFor(lang, pageKey)}`]),
      ["x-default", `https://hacoos.uk${routeFor("en", pageKey)}`],
    ]) },
  })));
}
