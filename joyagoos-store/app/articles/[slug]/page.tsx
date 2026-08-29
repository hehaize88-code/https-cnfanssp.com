import { notFound } from "next/navigation";
import { articles, type ArticleSlug } from "../../article-data";
import { ArticleInteractive } from "../../article-interactive";
import { resolveLanguage } from "../../i18n";
import { buildPageMetadata } from "../../seo";
import { getArticleCopy } from "../../article-content";
export function generateStaticParams(){return Object.keys(articles).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!(slug in articles))return{};const a=getArticleCopy(slug as ArticleSlug,"en");return buildPageMetadata({title:a.title,description:a.description,path:`/articles/${slug}`,article:true})}
export default async function Page({params,searchParams}:{params:Promise<{slug:string}>;searchParams:Promise<{lang?:string|string[]}>}){const[{slug},query]=await Promise.all([params,searchParams]);if(!(slug in articles))notFound();return <ArticleInteractive slug={slug as ArticleSlug} language={resolveLanguage(query.lang)}/>;}
