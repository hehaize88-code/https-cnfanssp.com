import { notFound } from "next/navigation";
import { articles, isArticleAvailableInLanguage, type ArticleSlug } from "../../article-data";
import { ArticleInteractive } from "../../article-interactive";
import { resolveLanguage } from "../../i18n";
import { buildPageMetadata } from "../../seo";
import { getArticleCopy } from "../../article-content";
export function generateStaticParams(){return Object.keys(articles).map(slug=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!(slug in articles))return{};const articleSlug=slug as ArticleSlug;const a=getArticleCopy(articleSlug,"en");return buildPageMetadata({title:a.title,description:a.description,path:`/articles/${slug}`,article:true,availableLanguages:isArticleAvailableInLanguage(articleSlug,"zh")?undefined:["en"]})}
export default async function Page({params,searchParams}:{params:Promise<{slug:string}>;searchParams:Promise<{lang?:string|string[]}>}){const[{slug},query]=await Promise.all([params,searchParams]);if(!(slug in articles))notFound();return <ArticleInteractive slug={slug as ArticleSlug} language={resolveLanguage(query.lang)}/>;}
