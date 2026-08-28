import type { MetadataRoute } from "next";
import { articleSlugs, languages, localizedPath, routeKeys } from "./site-data";

export const dynamic = "force-static";

const domain = "https://hacoovip.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [...routeKeys, ...articleSlugs.map(slug => `articles/${slug}`)];
  return languages.flatMap(({ code }) => pages.map(path => ({
    url: `${domain}${localizedPath(code, path)}`,
    lastModified: new Date("2026-08-28"),
    changeFrequency: path.startsWith("articles/") ? "monthly" as const : "weekly" as const,
    priority: path === "" ? 1 : path === "spreadsheet" || path === "finds" ? 0.9 : 0.75,
  })));
}
