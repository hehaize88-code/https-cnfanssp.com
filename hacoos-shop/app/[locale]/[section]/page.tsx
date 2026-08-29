import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, localizedSections, pageContent, sectionOrder, type Locale, type Section } from "../../site-data";
import { GuideInteractive } from "../../guide-interactive";
import { resolveLanguage } from "../../i18n";

export function generateStaticParams(){ return Object.keys(locales).flatMap((locale) => sectionOrder.map((section) => ({locale,section}))); }
export async function generateMetadata({ params }:{params:Promise<{locale:string;section:string}>}):Promise<Metadata>{
  const {locale,section}=await params; if(!(locale in locales)||!(section in pageContent)) return {};
  const localContent=localizedSections[locale as Locale][section as Section];
  return { title:`${localContent.title} | ${locales[locale as Locale].label}`, description:localContent.intro, alternates:{canonical:`/${locale}/${section}`,languages:{en:`/${section}`,zh:`/zh/${section}`,de:`/de/${section}`,pl:`/pl/${section}`,es:`/es/${section}`,it:`/it/${section}`,fr:`/fr/${section}`,pt:`/pt/${section}`,ro:`/ro/${section}`,sv:`/sv/${section}`,"x-default":`/${section}`}} };
}
export default async function Page({params,searchParams}:{params:Promise<{locale:string;section:string}>;searchParams:Promise<{lang?:string|string[]}>}){const [{locale,section},query]=await Promise.all([params,searchParams]);if(!(locale in locales)||!(section in pageContent))notFound();return <GuideInteractive initialLocale={resolveLanguage(query.lang,locale as Locale)} prefix={`/${locale}`} section={section as Section}/>;}
