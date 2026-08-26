import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionPage } from "@/components/site-pages";
import { copy, locales, sections, type Locale, type Section } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.flatMap((locale) => sections.map((section) => ({ locale, section })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; section: string }> }): Promise<Metadata> {
  const { locale, section } = await params;
  if (!locales.includes(locale as Locale) || !sections.includes(section as Section)) return {};
  const t = copy[locale as Locale];
  const title = `${t.sectionTitles[section as Section]} | Hacoos.org`;
  const description = t.sectionIntros[section as Section];
  const canonical = `https://hacoos.org/${locale}/${section}`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://hacoos.org/${locale}/${section}`,
      languages: {
        "x-default": `https://hacoos.org/en/${section}`,
        ...Object.fromEntries(locales.map((item) => [item, `https://hacoos.org/${item}/${section}`])),
      },
    },
    openGraph: {
      type: "website",
      siteName: "Hacoos.org",
      title,
      description,
      url: canonical,
      locale,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function LocalisedSection({ params }: { params: Promise<{ locale: string; section: string }> }) {
  const { locale, section } = await params;
  if (!locales.includes(locale as Locale) || !sections.includes(section as Section)) notFound();
  return <SectionPage locale={locale as Locale} section={section as Section} />;
}
