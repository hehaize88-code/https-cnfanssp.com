import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, localizedSections, type Locale } from "../../site-data";
import { ArticlesContent } from "../../articles-content";
import { resolveLanguage } from "../../i18n";

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
  const {locale}=await params;
  if(!(locale in locales)) return {};
  const content=localizedSections[locale as Locale].articles;
  return {title:`${content.title} | ${locales[locale as Locale].label}`,description:content.intro,alternates:{canonical:`/${locale}/articles`}};
}

export default async function Page({params,searchParams}:{params:Promise<{locale:string}>;searchParams:Promise<{lang?:string|string[]}>}){
  const [{locale},query]=await Promise.all([params,searchParams]);
  if(!(locale in locales)) notFound();
  return <ArticlesContent initialLocale={resolveLanguage(query.lang,locale as Locale)} prefix={`/${locale}`} />;
}
