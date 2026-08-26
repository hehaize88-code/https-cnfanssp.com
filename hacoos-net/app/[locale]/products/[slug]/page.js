import { notFound } from "next/navigation";
import { LocalizedProduct, localizedPageMetadata } from "@/components/LocalizedPages";
import { products } from "@/app/data";
import { LOCALIZED_LOCALES } from "@/app/i18n";
import { getLocalizedResearch } from "@/app/localizedResearch";

export function generateStaticParams() {
  return LOCALIZED_LOCALES.flatMap((locale)=>products.map(({slug})=>({locale,slug})));
}

export async function generateMetadata({params}) {
  const {locale,slug}=await params;
  const original=products.find((item)=>item.slug===slug);
  const translated=getLocalizedResearch(locale).products[slug];
  const product=original&&translated?{...original,...translated}:null;
  if(!LOCALIZED_LOCALES.includes(locale)||!product)return{};
  return localizedPageMetadata(locale,`/products/${slug}`,product.name,product.focus);
}

export default async function ProductPage({params}) {
  const {locale,slug}=await params;
  if(!LOCALIZED_LOCALES.includes(locale)||!products.some((item)=>item.slug===slug))notFound();
  return <LocalizedProduct locale={locale} slug={slug}/>;
}
