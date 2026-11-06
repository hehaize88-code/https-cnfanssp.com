import { novemberUi } from "../november-content";
import { notFound } from "next/navigation";
import { locales, type Locale } from "../site-data";
import { HomeContent } from "../home-content";
import { resolveLanguage } from "../i18n";
import { buildPageMetadata } from "../seo";

export function generateStaticParams(){ return Object.keys(locales).map((locale) => ({ locale })); }
export async function generateMetadata({ params }:{ params:Promise<{locale:string}> }){
  const { locale } = await params; if(!(locale in locales)) return {};
  const t = novemberUi[locale as Locale];
  return buildPageMetadata({ title: t.homeTitle, description:t.homeDescription, path:"/", language:locale as Locale });
}
export default async function Page({ params, searchParams }:{ params:Promise<{locale:string}>;searchParams:Promise<{lang?:string|string[]}> }){ const [{locale},query]=await Promise.all([params,searchParams]); if(!(locale in locales)) notFound(); return <HomeContent locale={locale as Locale} prefix={`/${locale}`} />; }
