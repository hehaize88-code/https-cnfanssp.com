import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "../site-data";
import { HomeContent } from "../home-content";
import { resolveLanguage } from "../i18n";

export function generateStaticParams(){ return Object.keys(locales).map((locale) => ({ locale })); }
export async function generateMetadata({ params }:{ params:Promise<{locale:string}> }):Promise<Metadata>{
  const { locale } = await params; if(!(locale in locales)) return {};
  const t = locales[locale as Locale];
  return { title: `${t.title} | Joyagoos Store`, description:t.intro, alternates:{ canonical:`/${locale}`, languages:{ en:"/", zh:"/zh", de:"/de", pl:"/pl", es:"/es", it:"/it", fr:"/fr", pt:"/pt", ro:"/ro", sv:"/sv", "x-default":"/" } } };
}
export default async function Page({ params, searchParams }:{ params:Promise<{locale:string}>;searchParams:Promise<{lang?:string|string[]}> }){ const [{locale},query]=await Promise.all([params,searchParams]); if(!(locale in locales)) notFound(); return <HomeContent locale={resolveLanguage(query.lang,locale as Locale)} prefix={`/${locale}`} />; }
