import { notFound } from "next/navigation";
import { LocalizedTerms, getLegalCopy } from "@/components/LocalizedLegalPages";
import { localizedPageMetadata } from "@/components/LocalizedPages";
import { LOCALIZED_LOCALES } from "@/app/i18n";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!LOCALIZED_LOCALES.includes(locale)) return {};
  const page=getLegalCopy(locale).terms;
  return localizedPageMetadata(locale,"/terms",page.title,page.intro);
}

export default async function Terms({ params }) {
  const { locale }=await params;
  if (!LOCALIZED_LOCALES.includes(locale)) notFound();
  return <LocalizedTerms locale={locale}/>;
}
