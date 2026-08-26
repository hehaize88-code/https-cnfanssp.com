import { notFound } from "next/navigation";
import { LocalizedContact, getLegalCopy } from "@/components/LocalizedLegalPages";
import { localizedPageMetadata } from "@/components/LocalizedPages";
import { LOCALIZED_LOCALES } from "@/app/i18n";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!LOCALIZED_LOCALES.includes(locale)) return {};
  const page=getLegalCopy(locale).contact;
  return localizedPageMetadata(locale,"/contact",page.title.join(" "),page.intro);
}

export default async function Contact({ params }) {
  const { locale }=await params;
  if (!LOCALIZED_LOCALES.includes(locale)) notFound();
  return <LocalizedContact locale={locale}/>;
}
