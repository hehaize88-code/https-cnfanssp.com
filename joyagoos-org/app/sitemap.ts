import type { MetadataRoute } from "next";
import { languages, pageKeys } from "./site-data";
import { seoArticleSlugs } from "./seo-articles";
import { articleDates } from "./article-dates";
import { releaseDate } from "./content/november-meta";
const base="https://joyagoos.org";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap {
  return languages.flatMap(lang => pageKeys.map(page => {
    const isArticle=seoArticleSlugs.includes(page);
    const suffix=page==="home"?"":isArticle?`articles/${page}/`:`${page}/`;
    const updated=isArticle?articleDates(page,lang).modified:["home","spreadsheet","finds","guide","qc","shipping","articles"].includes(page)?releaseDate:"2026-08-28";
    const alternates=Object.fromEntries(languages.map(code=>[code,`${base}/${code}/${suffix}`]));
    return {url:`${base}/${lang}/${suffix}`,lastModified:new Date(updated),alternates:{languages:{...alternates,"x-default":`${base}/en/${suffix}`}},changeFrequency:page==="home"?"weekly" as const:"monthly" as const,priority:page==="home"?1:.8};
  }));
}
