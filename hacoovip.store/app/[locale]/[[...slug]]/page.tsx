import { ArticleView } from "@/components/article-view";
import { ContentView } from "@/components/content-view";
import { HomeView } from "@/components/home-view";
import { getArticle } from "@/lib/articles";
import { translate } from "@/lib/i18n";
import { languageAlternates, locales, routeNames, type Locale, type RouteName } from "@/lib/site-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug?: string[] }> }): Promise<Metadata> {
  const { locale: rawLocale, slug = [] } = await params;
  if (!locales.includes(rawLocale as Locale) || rawLocale === "en") return {};
  const locale = rawLocale as Locale;
  const path = slug.join("/");
  const article = slug[0] === "articles" && slug[1] ? getArticle(slug[1]) : undefined;
  const titles: Record<string, string> = {
    spreadsheet: "Hacoo Spreadsheet: a visual index, not an official Hacoo feature",
    finds: "Hacoo finds selected for a checkable product trail",
    guide: "How Hacoo works: what the official sources actually say",
    qc: "Hacoo product checks: evidence before assumptions",
    shipping: "Hacoo shipping times, after-sales support and refund facts",
    faq: "Hacoo facts worth checking before you use a product link",
    articles: "Independent Hacoo research and shopping guides",
  };
  const descriptions: Record<string, string> = {
    spreadsheet: "Hacoo's official website and app-store descriptions present a content-sharing community and marketplace. They do not describe a native spreadsheet. This independent index answers the separate search need for organised product routes without pretending otherwise.",
    finds: "A deliberately small set of products. Each card shows the same lead image as its destination route, a category and an approximate USD guide price—so the next click is clear and easy to recheck.",
    guide: "Hacoo describes itself as an open content-sharing community where people can share, review products, discover services and connect with others. Here is the practical version of that promise, separated from independent product-link browsing.",
    qc: "Official Hacoo materials say users can rate products, brands and services, and provide routes for reporting suspected intellectual-property violations. Neither statement guarantees that any individual listing is accurate, authentic or suitable.",
    shipping: "This page uses Hacoo's published Shipping & Delivery and help-centre information. The figures are official estimates, not promises, and the final order screen remains the place to confirm price and delivery options.",
    faq: "Concise answers based on Hacoo's website, Google Play listing, published policies and clearly labelled third-party review data. No invented guarantees and no copied customer-service script.",
    articles: "Long-form articles built around one search intent at a time. Every article distinguishes official claims, app-store data, customer-review patterns and our own practical interpretation.",
  };
  const rawTitle = article?.title ?? (path ? titles[slug[0]] : "Hacoo spreadsheet, app facts and product routes—clearly separated.");
  const rawDescription = article?.deck ?? (path ? descriptions[slug[0]] : "Hacoo officially describes a content-sharing community and marketplace—not a native spreadsheet. We pair a visual, independent product index with source-led guides to the app, reviews, shipping and returns.");
  return {
    title: translate(locale, rawTitle),
    description: rawDescription ? translate(locale, rawDescription) : undefined,
    alternates: { canonical: `/${locale}${path ? `/${path}` : ""}`, languages: languageAlternates(path) },
    robots: { index: true, follow: true },
    openGraph: { title: translate(locale, rawTitle), description: rawDescription ? translate(locale, rawDescription) : undefined, locale },
  };
}

export default async function LocalizedPage({ params }: { params: Promise<{ locale: string; slug?: string[] }> }) {
  const { locale: rawLocale, slug = [] } = await params;
  if (!locales.includes(rawLocale as Locale) || rawLocale === "en") notFound();
  const locale = rawLocale as Locale;
  if (slug.length === 0) return <HomeView locale={locale} />;
  if (slug.length === 1 && routeNames.includes(slug[0] as RouteName)) return <ContentView page={slug[0] as RouteName} locale={locale} />;
  if (slug.length === 2 && slug[0] === "articles" && getArticle(slug[1])) return <ArticleView slug={slug[1]} locale={locale} />;
  notFound();
}
