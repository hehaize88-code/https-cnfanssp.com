import copy from "./content/articles.json";
import { languages, t, type Lang } from "./i18n";
export type ArticleSection = { heading:string; paragraphs:string[]; bullets?:string[] };
export type Article = {
  slug:string; title:string; seoTitle?:string; description:string; kicker:string; topic:string;
  published:string; updated:string; readTime:string; summary:string;
  sections:ArticleSection[]; sources:{label:string; note:string; url?:string}[]; related:string[];
};
const sources:Record<string,{label:string;note:string;url?:string}>={
  method:{label:"Editorial method",note:"Original checklists and worked examples. Example amounts are not live quotes; verify your own listing and account terms."},
  app:{label:"Hipobuy app listing · Apple App Store",note:"Describes purchasing from Chinese marketplaces. Platform statements are not guarantees for individual orders.",url:"https://apps.apple.com/us/app/hipobuy/id6748938660"},
  zoll:{label:"German customs · zoll.de",note:"Destination reference for import requirements; check current guidance for your goods.",url:"https://www.zoll.de/EN/Private-individuals/Postal_consignments_internet_order/Shipments-from-a-non-EU-country/Duties-and-taxes/Assessment-of-taxes-and-duties/assessment-of-taxes-and-duties.html"},
  douane:{label:"French customs · douane.gouv.fr",note:"Guidance on checking included taxes, duties and separate carrier charges.",url:"https://www.douane.gouv.fr/fiche/nos-conseils-avant-dacheter-sur-internet"}
};
const topics:Record<string,string>={shipping:"Shipping",buying:"Buying",qc:"QC & sizing",verification:"Listing checks"};
export function getArticles(lang:Lang="en"):Article[] {
  const n=languages.indexOf(lang);
  return copy.map(a=>{
    const sections=a.sections.map(s=>({heading:s.heading[n],paragraphs:s.paragraphs.map(p=>p[n])}));
    const words=[a.summary[n],...sections.flatMap(s=>[s.heading,...s.paragraphs])].join(" ").split(/\s+/).length;
    return {slug:a.slug,title:a.title[n],description:a.description[n],summary:a.summary[n],published:a.published,updated:a.updated,topic:a.topic,kicker:t(topics[a.topic],lang),readTime:`${Math.max(2,Math.ceil(words/180))} ${t("min read",lang)}`,sections,sources:a.sources.map(id=>({...sources[id],label:t(sources[id].label,lang),note:t(sources[id].note,lang)})),related:a.related};
  });
}
export const articles=getArticles();
export function getArticle(slug:string,lang:Lang="en") {return getArticles(lang).find(a=>a.slug===slug);}
