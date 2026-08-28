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
    locales.map((lang) => [lang, `https://hacoos.uk${routeFor(lang, pageKey)}`]),
  );
  languages["x-default"] = `https://hacoos.uk${routeFor("en", pageKey)}`;
  const canonical = `https://hacoos.uk${routeFor(locale, pageKey)}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: pageKey.startsWith("articles/") ? "article" : "website",
      siteName: "Hacoo UK Guide",
      title: meta.title,
      description: meta.description,
      url: canonical,
      locale,
      images: ["/hacoo-logo.png"],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      images: ["/hacoo-logo.png"],
    },
    other: { "content-language": localeNames[locale] },
  };
}

export default async function RoutePage({ params }: Props) {
  const { route } = await params;
  const resolved = resolveRoute(route);
  if (!resolved) notFound();
  return <SitePage locale={resolved.locale} pageKey={resolved.pageKey} />;
}
