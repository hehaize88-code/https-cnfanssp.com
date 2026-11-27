import type { MetadataRoute } from "next";
import { articles } from "./article-data";
import { baseUrl,languages,localPath } from "./i18n";
export default function sitemap():MetadataRoute.Sitemap {
  const pages=["/","/spreadsheet","/qc","/shipping","/guides","/articles","/faq"];
  return languages.flatMap(lang=>[
    ...pages.map(path=>({url:baseUrl+localPath(path,lang),lastModified:new Date("2026-11-27"),changeFrequency:"weekly" as const,priority:path==="/"?1:0.8})),
    ...articles.map(a=>({url:baseUrl+localPath(`/articles/${a.slug}`,lang),lastModified:new Date(["en","de","es","fr","it"].includes(lang)?a.updated:"2026-11-27"),changeFrequency:"monthly" as const,priority:0.75}))
  ]);
}
