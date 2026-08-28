import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/site-pages";
import { copy, locales, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const t = copy[locale as Locale];
  const canonical = `https://hacoos.org/${locale}`;
  return {
    title: t.homeMetaTitle,
    description: t.intro,
    alternates: {
      canonical: `https://hacoos.org/${locale}`,
      languages: {
        "x-default": "https://hacoos.org/en",
        ...Object.fromEntries(locales.map((item) => [item, `https://hacoos.org/${item}`])),
      },
    },
    openGraph: {
      type: "website",
      siteName: "Hacoos.org",
      title: t.homeMetaTitle,
      description: t.intro,
      url: canonical,
      locale,
    },
    twitter: {
      card: "summary",
      title: t.homeMetaTitle,
      description: t.intro,
    },
  };
}

export default async function LocalisedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <HomePage locale={locale as Locale} />;
}
