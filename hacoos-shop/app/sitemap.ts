import type { MetadataRoute } from "next";
import { articleSlugs } from "./article-data";
import { languages, publicPages, routePath } from "./site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-27");
  const routes=languages.flatMap((lang) => publicPages.map((page) => ({ url: `https://hacoos.shop${routePath(lang, page)}`, lastModified: updated, changeFrequency: page === "home" ? "daily" as const : "weekly" as const, priority: page === "home" ? 1 : 0.8 })));
  return [...routes,...languages.flatMap(lang=>articleSlugs.map(slug=>({url:`https://hacoos.shop${lang==="en"?`/articles/${slug}/`:`/${lang}/articles/${slug}/`}`,lastModified:updated,changeFrequency:"monthly" as const,priority:.85})))];
}
