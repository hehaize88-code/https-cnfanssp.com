import { locales, type Locale } from "@/lib/site-data";
import { notFound } from "next/navigation";
import { LocaleLanguage } from "@/components/locale-language";

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <><LocaleLanguage locale={locale} />{children}</>;
}
