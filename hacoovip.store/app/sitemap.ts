import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { articles } from "@/lib/articles";
import { locales, routeNames } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hacoovip.store";
  const english = ["", ...routeNames, ...articles.map((a) => `articles/${a.slug}`)].map((path) => ({ url: `${base}/${path}`, lastModified: new Date("2026-08-29"), changeFrequency: path ? "weekly" as const : "daily" as const, priority: path ? .8 : 1 }));
  const translated = locales.filter((locale) => locale !== "en").flatMap((locale) => ["", ...routeNames, ...articles.map((a) => `articles/${a.slug}`)].map((path) => ({ url: `${base}/${locale}${path ? `/${path}` : ""}`, lastModified: new Date("2026-08-29"), changeFrequency: path ? "weekly" as const : "daily" as const, priority: path ? .8 : .9 })));
  return [...english, ...translated];
}
