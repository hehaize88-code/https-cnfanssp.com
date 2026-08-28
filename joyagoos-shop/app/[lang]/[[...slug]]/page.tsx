import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SitePage } from "../../site-page";
import { categoryKeys, copy, languages, pageIntro, pageKeys, uiText, type CategoryKey, type Lang, type PageKey, type TrustPageKey } from "../../site-data";
import { seoArticleSlugs } from "../../seo-articles";
import { getLocalizedSeoArticle } from "../../seo-article-locales";
import { getCategoryPage, getTrustPage } from "../../support-pages";

const siteBase = "https://joyagoos.shop";
export const dynamicParams = false;
const basePages=["spreadsheet","finds","guide","qc","shipping","faq","articles"];
const trustPages=["about","editorial-policy","how-we-verify-links"];
function parsePage(slug?: string[]): PageKey | null { if(!slug?.length)return "home"; if(slug.length===1&&(basePages.includes(slug[0])||trustPages.includes(slug[0])))return slug[0] as PageKey; if(slug.length===2&&slug[0]==="categories"&&categoryKeys.includes(slug[1] as CategoryKey))return slug[1] as CategoryKey; if(slug.length===2&&slug[0]==="articles"&&seoArticleSlugs.includes(slug[1]))return slug[1] as PageKey; return null; }
function route(lang:Lang,page:PageKey){if(page==="home")return `/${lang}/`;if(seoArticleSlugs.includes(page))return `/${lang}/articles/${page}/`;if(categoryKeys.includes(page as CategoryKey))return `/${lang}/categories/${page}/`;return `/${lang}/${page}/`;}
export function generateStaticParams(){return languages.flatMap(lang=>pageKeys.map(page=>({lang,slug:page==="home"?[]:seoArticleSlugs.includes(page)?["articles",page]:categoryKeys.includes(page as CategoryKey)?["categories",page]:[page]})));}

const pageTitles:Record<Lang,Record<string,string>>={
  en:{spreadsheet:"Joyagoo Spreadsheet 2026: Verified Product Links",finds:"Latest Joyagoo Finds: Verified Product Links",guide:"How to Use Joyagoo: Complete Buying Guide",qc:"Joyagoo QC Guide: How to Check Warehouse Photos",shipping:"Joyagoo Shipping Guide: Weight, Packing and Costs",faq:"Joyagoo FAQ: Spreadsheet, QC, Returns and Shipping",articles:"Joyagoo Product-Link Research: Finds and Verification"},
  de:{spreadsheet:"Joyagoo Tabelle 2026: Geprüfte Produktlinks",finds:"Aktuelle Joyagoo Finds: Geprüfte Produktlinks",guide:"Joyagoo verwenden: Vollständige Kaufanleitung",qc:"Joyagoo QC-Anleitung: Lagerfotos prüfen",shipping:"Joyagoo Versand: Gewicht, Verpackung und Kosten",faq:"Joyagoo FAQ: Tabelle, QC, Rückgabe und Versand",articles:"Joyagoo Produktlink-Recherche: Finds und Prüfung"},
  es:{spreadsheet:"Hoja Joyagoo 2026: Enlaces de producto verificados",finds:"Últimos hallazgos Joyagoo: Enlaces verificados",guide:"Cómo usar Joyagoo: Guía de compra completa",qc:"Guía QC Joyagoo: Cómo revisar fotos de almacén",shipping:"Envío Joyagoo: Peso, embalaje y costes",faq:"FAQ Joyagoo: Hoja, QC, devoluciones y envío",articles:"Investigación de enlaces Joyagoo: Hallazgos y verificación"},
  fr:{spreadsheet:"Tableur Joyagoo 2026 : Liens produits vérifiés",finds:"Sélections Joyagoo récentes : Liens vérifiés",guide:"Comment utiliser Joyagoo : Guide d’achat complet",qc:"Guide QC Joyagoo : Vérifier les photos d’entrepôt",shipping:"Livraison Joyagoo : Poids, emballage et coûts",faq:"FAQ Joyagoo : Tableur, QC, retours et livraison",articles:"Recherche de liens Joyagoo : Sélections et vérification"},
  it:{spreadsheet:"Foglio Joyagoo 2026: Link prodotto verificati",finds:"Ultime selezioni Joyagoo: Link verificati",guide:"Come usare Joyagoo: Guida completa all’acquisto",qc:"Guida QC Joyagoo: Controllare le foto del magazzino",shipping:"Spedizione Joyagoo: Peso, imballo e costi",faq:"FAQ Joyagoo: Foglio, QC, resi e spedizione",articles:"Ricerca link Joyagoo: Selezioni e verifica"},
};

export async function generateMetadata({params}:{params:Promise<{lang:string;slug?:string[]}>}):Promise<Metadata>{
  const {lang:rawLang,slug}=await params;
  const lang=rawLang as Lang;
  const page=parsePage(slug);
  if(!languages.includes(lang)||!page)return{};
  const article=getLocalizedSeoArticle(page,lang);
  const category=categoryKeys.includes(page as CategoryKey)?getCategoryPage(lang,page as CategoryKey):null;
  const trust=trustPages.includes(page)?getTrustPage(lang,page as TrustPageKey):null;
  const intro=basePages.includes(page)&&page!=="home"?pageIntro[lang][page as keyof typeof pageIntro.en]:null;
  const label=page==="home"?uiText[lang].homeTitle:category?.title??trust?.title??article?.title??pageTitles[lang][page]??intro?.[1]??"Joyagoos";
  const description=page==="home"?copy[lang].lede as string:category?.description??trust?.description??article?.description??intro?.[2]??copy[lang].disclaimer as string;
  const archive=Boolean(article);
  const canonicalBase=archive?"https://joyagoos.org":siteBase;
  const map=Object.fromEntries(languages.map(code=>[code,`${canonicalBase}${route(code,page)}`]));
  const title=page==="home"||label.includes("Joyagoos")?label:`${label} | Joyagoos`;
  const canonical=`${canonicalBase}${route(lang,page)}`;
  return{title,description,robots:{index:!archive,follow:true},alternates:{canonical,languages:{...map,"x-default":`${canonicalBase}${route("en",page)}`}},openGraph:{type:archive?"article":"website",title,description,url:canonical,siteName:"Joyagoos",images:[{url:"/joyagoo-logo.png",width:768,height:235,alt:"Joyagoos product research"}],locale:lang},twitter:{card:"summary_large_image",title,description,images:["/joyagoo-logo.png"]}};
}
export default async function LangPage({params}:{params:Promise<{lang:string;slug?:string[]}>}){const {lang:rawLang,slug}=await params;const lang=rawLang as Lang;const page=parsePage(slug);if(!languages.includes(lang)||!page)notFound();return <SitePage lang={lang} page={page}/>;}
