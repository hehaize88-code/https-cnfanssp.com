import { articles, type Article } from "../article-content";
import { articleExpansions } from "../article-expansions";
import type { ArticleKey } from "../localized-content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SitePage } from "../site-page";
import {
  locales,
  localeNames,
  pageKeys,
  pageMeta,
  routeFor,
  type Locale,
  type PageKey,
} from "../site-data";

type Props = { params: Promise<{ route: string[] }> };

function resolveRoute(input: string[]): { locale: Locale; pageKey: PageKey } | null {
  const parts = [...input];
  const locale: Locale = locales.includes(parts[0] as Locale)
    ? (parts.shift() as Locale)
    : "en";
  const key = parts.length ? parts.join("/") : "home";
  if (!pageKeys.includes(key as PageKey)) return null;
  return { locale, pageKey: key as PageKey };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { route } = await params;
  const resolved = resolveRoute(route);
  if (!resolved) return {};
  const { locale, pageKey } = resolved;
  const meta = pageMeta[pageKey][locale];
  const languages = Object.fromEntries(
    locales.map((lang) => [lang, `https://hacoos.pro${routeFor(lang, pageKey)}`]),
  );
  languages["x-default"] = `https://hacoos.pro${routeFor("en", pageKey)}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://hacoos.pro${routeFor(locale, pageKey)}`,
      languages,
    },
    other: { "content-language": localeNames[locale] },
  };
}

export default async function RoutePage({ params }: Props) {
  const { route } = await params;
  const resolved = resolveRoute(route);
  if (!resolved) notFound();
  let article: Article | undefined;
  if (resolved.pageKey.startsWith("articles/")) {
    const key = resolved.pageKey as ArticleKey;
    const original = articles[resolved.locale][key];
    const extra = resolved.locale === "en" ? [] : articleExpansions[resolved.locale][key] ?? [];
    article = {...original, sections: original.sections.map((section,index) => ({...section, paragraphs:[...section.paragraphs, ...(index > 0 && extra[index - 1] ? [extra[index - 1]] : [])]}))};
    const words = article.sections.flatMap(section => section.paragraphs).join(" ").split(/\s+/).length;
    article.minutes = Math.max(3, Math.ceil(words / 180));
  }
  return <SitePage locale={resolved.locale} pageKey={resolved.pageKey} article={article} />;
}
