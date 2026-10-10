import type { MetadataRoute } from "next";
import { locales, pageKeys, routeFor } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => pageKeys.map((pageKey) => ({
    url: `https://hacoos.uk${routeFor(locale, pageKey)}`,
    lastModified: new Date("2026-10-10"),
    changeFrequency: pageKey === "home" || pageKey === "finds" ? "weekly" as const : "monthly" as const,
    priority: pageKey === "home" ? 1 : pageKey === "articles" || pageKey === "guide" ? 0.8 : 0.6,
    alternates: { languages: Object.fromEntries([
      ...locales.map((lang) => [lang, `https://hacoos.uk${routeFor(lang, pageKey)}`]),
      ["x-default", `https://hacoos.uk${routeFor("en", pageKey)}`],
    ]) },
  })));
}
