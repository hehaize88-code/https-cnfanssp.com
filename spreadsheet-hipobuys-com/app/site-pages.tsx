import type { Metadata } from "next";
import Home from "./views/home";
import Spreadsheet from "./views/spreadsheet";
import QC from "./views/qc";
import Shipping from "./views/shipping";
import Guides from "./views/guides";
import FAQ from "./views/faq";
import Articles from "./views/articles";
import ArticlePage from "./views/article";
import { getArticle,getArticles } from "./article-data";
import { baseUrl,isLang,localPath,languageAlternates,t,type Lang } from "./i18n";
export const pageInfo:Record<string,{title:string;description:string}>={
  "/":{title:"Hipobuy Spreadsheet: Product Links, Shipping & QC",description:"Find Hipobuy product links and practical guides to shipping costs, Germany and France delivery, QC photos and sizing."},
  "/spreadsheet":{title:"Hipobuy Spreadsheet: Find and Verify Product Links",description:"Search product categories, verify current seller listings and compare variants before placing a Hipobuy order."},
  "/qc":{title:"Hipobuy QC Photos: Warehouse Inspection Checklist",description:"Check Hipobuy QC photos for order matching, visible defects and measurements before international shipping."},
  "/shipping":{title:"Hipobuy Shipping: Cost Calculator & Country Guides",description:"Estimate Hipobuy shipping costs, compare chargeable weight and read Germany and France delivery guides."},
  "/guides":{title:"Hipobuy Guides: Buying, Sizing, QC & Shipping",description:"Follow the Hipobuy workflow with practical guides to ordering, size checks, QC photos and parcel planning."},
  "/articles":{title:"Hipobuy Articles: Shipping, Buying, QC & Sizing",description:"Read 14 practical Hipobuy guides covering shipping costs, Germany, France, ordering, sizing and listing checks."},
  "/faq":{title:"Hipobuy FAQ: Product Links, QC & Shipping",description:"Answers about Hipobuy product links, QC photos, storage, shipping costs and this independent guide."}
};
export function resolvePage(segments:string[]) {
  const parts=[...segments];
  let lang:Lang="en";
  if(parts[0]&&isLang(parts[0])&&parts[0]!=="en") lang=parts.shift() as Lang;
  const path=parts.length?"/"+parts.join("/"):"/";
  if(pageInfo[path]) return {lang,path};
  if(parts.length===2&&parts[0]==="articles"&&getArticle(parts[1],lang)) return {lang,path};
  return null;
}
export function pageMetadata(path:string,lang:Lang):Metadata {
  const article=path.startsWith("/articles/")?getArticle(path.split("/")[2],lang):null;
  const info=article||pageInfo[path];
  if(!info)return {};
  const title=article?article.title:t(info.title,lang);
  const description=article?article.description:t(info.description,lang);
  return {title:{absolute:title+" | Hipo Index"},description,alternates:{canonical:baseUrl+localPath(path,lang),languages:languageAlternates(path)},openGraph:{type:article?"article":"website",title,description,url:baseUrl+localPath(path,lang),siteName:"Hipo Index",locale:{en:"en_US",de:"de_DE",es:"es_ES",fr:"fr_FR",it:"it_IT"}[lang],images:[{url:baseUrl+"/og.png",width:1200,height:630,alt:title}],...(article?{publishedTime:article.published,modifiedTime:article.updated}:{})},twitter:{card:"summary_large_image",title,description,images:[baseUrl+"/og.png"]}};
}
export function renderPage(path:string,lang:Lang) {
  if(path==="/")return <Home lang={lang} articles={getArticles(lang).slice(0,4)}/>;
  if(path==="/spreadsheet")return <Spreadsheet lang={lang}/>;
  if(path==="/qc")return <QC lang={lang}/>;
  if(path==="/shipping")return <Shipping lang={lang}/>;
  if(path==="/guides")return <Guides lang={lang}/>;
  if(path==="/faq")return <FAQ lang={lang}/>;
  if(path==="/articles")return <Articles lang={lang}/>;
  const article=getArticle(path.split("/")[2],lang);
  return article?<ArticlePage article={article} lang={lang}/>:null;
}
