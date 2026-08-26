import { locales, type Locale } from "@/lib/site-data";

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = locales.includes(locale as Locale) ? locale : "en";
  return <><script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(safeLocale)}` }} />{children}</>;
}
