import type { MetadataRoute } from "next";
import { sectionOrder } from "./site-data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://joyagoos.store"; const locales=["zh","de","pl","es","it","fr","pt","ro","sv"];
  const articlePaths=["articles/joyagoo-how-to-buy-guide","articles/joyagoo-qc-photo-checklist","articles/joyagoo-actual-vs-volumetric-weight","articles/joyagoo-link-verification-guide"];
  const paths=["",...sectionOrder,...articlePaths,...locales,...locales.flatMap(locale=>sectionOrder.map(section=>`${locale}/${section}`))];
  return paths.map((path,index)=>({url:`${base}/${path}`,lastModified:new Date("2026-08-29"),changeFrequency:index<5?"weekly":"monthly",priority:path===""?1:path.split("/").length===1?.8:.65}));
}
