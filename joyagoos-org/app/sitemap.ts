import type { MetadataRoute } from "next";
import { languages, pageKeys } from "./site-data";
import { seoArticleSlugs } from "./seo-articles";
const base="https://joyagoos.org";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{return languages.flatMap(lang=>pageKeys.map(page=>({url:`${base}/${lang}/${page==="home"?"":seoArticleSlugs.includes(page)?`articles/${page}/`:`${page}/`}`,lastModified:new Date("2026-08-28"),changeFrequency:page==="home"?"weekly":"monthly",priority:page==="home"?1:.8})));}
