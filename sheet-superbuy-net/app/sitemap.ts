import type { MetadataRoute } from "next";
import { articles } from "./data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base="https://sheet-superbuy.net";
  const languages=["en","zh","de","fr","es","it","pt","pl","nl"];
  const paths=["/","/spreadsheet/","/finds/","/qc/","/shipping/","/articles/","/faq/",...articles.map(a=>`/articles/${a.slug}/`)];
  const url=(p:string,l:string)=>base+(l==="en"?p:`/${l}${p}`);
  return languages.flatMap(locale=>paths.map(p=>({url:url(p,locale),lastModified:new Date("2026-10-13"),alternates:{languages:Object.fromEntries([...languages.map(l=>[l==="zh"?"zh-CN":l,url(p,l)]),["x-default",url(p,"en")]])}})));
}
