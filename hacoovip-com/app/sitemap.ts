import type { MetadataRoute } from "next";
import { articleSlugs, languages, localizedPath, routeKeys } from "./site-data";

export const dynamic = "force-static";

const domain = "https://hacoovip.com";
const firstPublished = "2026-08-28";
const articleModified: Record<string, string> = {
  "articles/how-to-use-hacoo-spreadsheet": "2026-08-28",
  "articles/how-to-check-hacoo-links": "2026-08-28",
  "articles/hacoo-shipping-and-returns-guide": "2026-08-28",
  "articles/hacoo-reviews-what-users-report": "2026-08-28",
};

function lastModified(path: string) {
  return new Date(articleModified[path] || firstPublished);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...routeKeys, ...articleSlugs.map(slug => `articles/${slug}`)];
  return languages.flatMap(({ code }) => pages.map(path => ({
    url: `${domain}${localizedPath(code, path)}`,
    lastModified: lastModified(path),
    changeFrequency: path.startsWith("articles/") ? "monthly" as const : path.includes("policy") || path === "privacy" || path === "terms" ? "yearly" as const : "weekly" as const,
    priority: path === "" ? 1 : path === "spreadsheet" || path === "finds" ? 0.85 : path.startsWith("articles/") ? 0.8 : path === "about" || path === "sources-policy" ? 0.65 : 0.6,
  })));
}
