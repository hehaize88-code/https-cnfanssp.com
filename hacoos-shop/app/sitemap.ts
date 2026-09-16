import type { MetadataRoute } from "next";
import { articleSlugs } from "./article-data";
import { localizedArticleSlugs } from "./article-locales";
import { languages, publicPages, routePath } from "./site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-09-16");
  const routes=languages.flatMap((lang) => publicPages.map((page) => ({ url: `https://hacoos.shop${routePath(lang, page)}`, lastModified: updated, changeFrequency: page === "home" ? "daily" as const : "weekly" as const, priority: page === "home" ? 1 : 0.8 })));
  const englishArticles=articleSlugs.map(slug=>({url:`https://hacoos.shop/articles/${slug}/`,lastModified:updated,changeFrequency:"monthly" as const,priority:.85}));
  const translatedArticles=languages.filter(lang=>lang!=="en").flatMap(lang=>localizedArticleSlugs.map(slug=>({url:`https://hacoos.shop/${lang}/articles/${slug}/`,lastModified:updated,changeFrequency:"monthly" as const,priority:.85})));
  return [...routes,...englishArticles,...translatedArticles];
}
