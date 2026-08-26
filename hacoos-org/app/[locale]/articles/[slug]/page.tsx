import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/site-pages";
import { articleSlugs, localizedContent } from "@/lib/localized-content";
import { locales, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.flatMap((locale) => articleSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale) || !articleSlugs.includes(slug)) return {};
  const article = localizedContent[locale as Locale].longGuides.find((item) => item.id === slug)!;
  return {
    title: `${article.title} — Hacoos.org`,
    description: article.standfirst,
    alternates: {
      canonical: `https://hacoos.org/${locale}/articles/${slug}`,
      languages: {
        "x-default": `https://hacoos.org/en/articles/${slug}`,
        ...Object.fromEntries(locales.map((item) => [item, `https://hacoos.org/${item}/articles/${slug}`])),
      },
    },
  };
}

export default async function LocalisedArticle({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!locales.includes(locale as Locale) || !articleSlugs.includes(slug)) notFound();
  return <ArticlePage locale={locale as Locale} slug={slug} />;
}
