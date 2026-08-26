import { notFound } from "next/navigation";
import { LocalizedPrivacy, getLegalCopy } from "@/components/LocalizedLegalPages";
import { localizedPageMetadata } from "@/components/LocalizedPages";
import { LOCALIZED_LOCALES } from "@/app/i18n";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!LOCALIZED_LOCALES.includes(locale)) return {};
  const page=getLegalCopy(locale).privacy;
  return localizedPageMetadata(locale,"/privacy",page.title,page.intro);
}

export default async function Privacy({ params }) {
  const { locale }=await params;
  if (!LOCALIZED_LOCALES.includes(locale)) notFound();
  return <LocalizedPrivacy locale={locale}/>;
}
