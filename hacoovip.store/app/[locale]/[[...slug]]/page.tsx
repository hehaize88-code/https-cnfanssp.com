import { ArticleView } from "@/components/article-view";
import { ContentView } from "@/components/content-view";
import { HomeView } from "@/components/home-view";
import { articles, getArticle } from "@/lib/articles";
import { translate } from "@/lib/i18n";
import { languageAlternates, locales, routeNames, trustRouteNames, type Locale, type RouteName, type TrustRouteName } from "@/lib/site-data";
import { getTrustPage } from "@/lib/trust-pages";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales
    .filter((locale) => locale !== "en")
    .flatMap((locale) => [
      { locale, slug: [] as string[] },
      ...routeNames.map((route) => ({ locale, slug: [route] })),
      ...articles.map((article) => ({ locale, slug: ["articles", article.slug] })),
    ]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug?: string[] }> }): Promise<Metadata> {
  const { locale: rawLocale, slug = [] } = await params;
  if (!locales.includes(rawLocale as Locale) || rawLocale === "en") return {};
  const locale = rawLocale as Locale;
  const path = slug.join("/");
  const article = slug[0] === "articles" && slug[1] ? getArticle(slug[1]) : undefined;
  const titles: Record<string, string> = {
    spreadsheet: "Hacoo Product-Route Index",
    finds: "Hacoo Product-Route Selection",
    guide: "Hacoo App Facts & Research Guide",
    qc: "Hacoo Photo Evidence Checklist",
    shipping: "Reading Hacoo Delivery Estimates",
    faq: "Hacoo App Facts FAQ",
    articles: "Hacoo Source-Checked Buyer Guides",
  };
  const descriptions: Record<string, string> = {
    spreadsheet: "Independent visual product routes with image-matched destinations and a clear explanation that this is not an official Hacoo feature.",
    finds: "A compact selection with matching lead images, transparent categories and approximate USD guide prices to recheck on the live destination.",
    guide: "Current Hacoo app identity and public facts, clearly separated from this independent product-route guide.",
    qc: "A practical checklist for reading product-photo evidence without turning images or reviews into guarantees.",
    shipping: "How to read Hacoo's published delivery ranges, processing time and after-sales wording as dated guidance rather than a promise.",
    faq: "Concise, dated answers about Hacoo app identity, public policies, independent product routes and evidence limits.",
    articles: "Source-checked guides that separate current official statements, dated public records and independent buyer guidance.",
  };
  const trustPage = slug.length === 1 && trustRouteNames.includes(slug[0] as TrustRouteName) ? getTrustPage(locale, slug[0] as TrustRouteName) : undefined;
  const rawTitle = trustPage?.title ?? article?.seoTitle ?? (path ? titles[slug[0]] : "Hacoo Product Research Briefs & App Facts");
  const rawDescription = trustPage?.description ?? article?.seoDescription ?? (path ? descriptions[slug[0]] : "Define product requirements before browsing, then use independent product routes and dated Hacoo app facts without confusing either with an official spreadsheet.");
  return {
    title: translate(locale, rawTitle),
    description: rawDescription ? translate(locale, rawDescription) : undefined,
    alternates: { canonical: `/${locale}${path ? `/${path}` : ""}`, languages: languageAlternates(path) },
    robots: { index: true, follow: true },
    openGraph: { title: translate(locale, rawTitle), description: rawDescription ? translate(locale, rawDescription) : undefined, locale, images: article?.image ? [{ url: article.image.src, width: 1200, height: 630, alt: translate(locale, article.image.alt) }] : undefined },
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
