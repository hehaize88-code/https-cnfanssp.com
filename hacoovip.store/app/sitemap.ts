import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { articles } from "@/lib/articles";
import { locales, routeNames } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hacoovip.store";
  const corePaths = ["", ...routeNames];
  const articlePaths = articles.map((article) => ({ path: `articles/${article.slug}`, lastModified: new Date(article.modifiedISO ?? article.dateISO ?? "2026-08-29") }));
  const english = [
    ...corePaths.map((path) => ({ url: `${base}/${path}`, lastModified: new Date("2026-09-19"), changeFrequency: path ? "weekly" as const : "daily" as const, priority: path ? .8 : 1 })),
    ...articlePaths.map(({ path, lastModified }) => ({ url: `${base}/${path}`, lastModified, changeFrequency: "monthly" as const, priority: .85 })),
  ];
  const translated = locales.filter((locale) => locale !== "en").flatMap((locale) => [
    ...corePaths.map((path) => ({ url: `${base}/${locale}${path ? `/${path}` : ""}`, lastModified: new Date("2026-09-19"), changeFrequency: path ? "weekly" as const : "daily" as const, priority: path ? .8 : .9 })),
    ...articlePaths.map(({ path, lastModified }) => ({ url: `${base}/${locale}/${path}`, lastModified, changeFrequency: "monthly" as const, priority: .8 })),
  ]);
  return [...english, ...translated];
}
