import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SitePage } from "../../site-page";
import { copy, languages, pageIntro, pageKeys, type Lang, type PageKey } from "../../site-data";
import { seoArticleSlugs } from "../../seo-articles";
import { getLocalizedSeoArticle } from "../../seo-article-locales";

const siteBase = "https://joyagoos.org";
const basePages=["spreadsheet","finds","guide","qc","shipping","faq","articles"];
function parsePage(slug?: string[]): PageKey | null { if(!slug?.length)return "home"; if(slug.length===1&&basePages.includes(slug[0]))return slug[0] as PageKey; if(slug.length===2&&slug[0]==="articles"&&seoArticleSlugs.includes(slug[1]))return slug[1] as PageKey; return null; }
function route(lang:Lang,page:PageKey){if(page==="home")return `/${lang}/`;if(seoArticleSlugs.includes(page))return `/${lang}/articles/${page}/`;return `/${lang}/${page}/`;}
export function generateStaticParams(){return languages.flatMap(lang=>pageKeys.map(page=>({lang,slug:page==="home"?[]:seoArticleSlugs.includes(page)?["articles",page]:[page]})));}
export async function generateMetadata({params}:{params:Promise<{lang:string;slug?:string[]}>}):Promise<Metadata>{const {lang:rawLang,slug}=await params;const lang=rawLang as Lang;const page=parsePage(slug);if(!languages.includes(lang)||!page)return{};const article=getLocalizedSeoArticle(page,lang);const intro=page!=="home"&&!article?pageIntro[lang][page as keyof typeof pageIntro.en]:null;const label=page==="home"?"Joyagoo Spreadsheet · Joyagoos":article?.title??intro?.[1]??"Joyagoos";const description=page==="home"?copy[lang].lede as string:article?.description??intro?.[2]??copy[lang].disclaimer as string;const map=Object.fromEntries(languages.map(code=>[code,`${siteBase}${route(code,page)}`]));return{title:`${label} | Joyagoos`,description,robots:{index:true,follow:true},alternates:{canonical:`${siteBase}${route(lang,page)}`,languages:{...map,"x-default":`${siteBase}${route("en",page)}`}}};}
export default async function LangPage({params}:{params:Promise<{lang:string;slug?:string[]}>}){const {lang:rawLang,slug}=await params;const lang=rawLang as Lang;const page=parsePage(slug);if(!languages.includes(lang)||!page)notFound();return <SitePage lang={lang} page={page}/>;}
