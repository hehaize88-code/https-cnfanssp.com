import type { MetadataRoute } from "next";
import { articles } from "./article-data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://spreadsheet-hipobuys.com";
  const staticPages=["/","/spreadsheet","/qc","/shipping","/guides","/articles","/faq"];
  const changedPages=new Set(["/","/spreadsheet","/articles"]);
  return [
    ...staticPages.map((path,index)=>({url:`${base}${path}`,lastModified:new Date(changedPages.has(path)?"2026-09-14":"2026-08-25"),changeFrequency:(index===0?"weekly":"monthly") as "weekly"|"monthly",priority:index===0?1:.8})),
    ...articles.map((article)=>({url:`${base}/articles/${article.slug}`,lastModified:new Date(article.updated),changeFrequency:"monthly" as const,priority:.75}))
  ];
}
