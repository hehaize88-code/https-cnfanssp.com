import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Site from "../site";
import { ArticleSlug, articleSlugs, CoreRouteKey, decisionCopy, Lang, languages, localizedPath, RouteKey, routeKeys, TrustRouteKey, trustRouteKeys } from "../site-data";
import { localizedContent } from "../localized-content";
import { localizedArticles } from "../localized-articles";
import { trustContent } from "../trust-content";

type Props = { params: Promise<{ slug?: string[] }> };
const canonicalDomain = "https://hacoovip.com";
export const dynamic = "force-static";
export const dynamicParams = false;
const routeSeo: Record<Exclude<CoreRouteKey, "">, { title: string; description: string; keywords: string[] }> = {
  spreadsheet: { title: "Hacoo Spreadsheet 2026 — Curated Links & Categories", description: "Browse a fact-checked Hacoo spreadsheet with exact category routes, matching product images, USD planning prices and a clear link-verification method.", keywords: ["Hacoo spreadsheet", "Hacoo links", "Hacoo finds"] },
  finds: { title: "Hacoo Finds 2026 — Matched Images and Product Links", description: "Explore curated Hacoo finds whose first images, titles and detail-page destinations are checked together before publication.", keywords: ["Hacoo finds", "Hacoo product links", "Hacoo spreadsheet finds"] },
  "qc-guide": { title: "Hacoo QC Guide — Photos, Size and Defect Checklist", description: "Use a practical Hacoo QC photo checklist informed by the platform’s official return-evidence requirements for size, damage and wrong-item cases.", keywords: ["Hacoo QC", "Hacoo quality check", "Hacoo size guide"] },
  shipping: { title: "Hacoo Shipping 2026 — Countries, Cost and Delivery Time", description: "Compare official Hacoo delivery ranges, supported-area guidance, split-parcel notes and the checks to make before ordering.", keywords: ["Hacoo shipping", "Hacoo delivery time", "Hacoo supported countries"] },
  returns: { title: "Hacoo Returns and Refunds — 15-Day Policy Explained", description: "Understand Hacoo’s published 15-day return window, free-return exclusions, evidence requirements, costs and no-exchange rule.", keywords: ["Hacoo returns", "Hacoo refund", "Hacoo return policy"] },
  articles: { title: "Hacoo Guides 2026 — Spreadsheet, Links, Shipping & Reviews", description: "Read human-written Hacoo guides based on official platform research and clearly labelled third-party review signals.", keywords: ["Hacoo guide", "Hacoo spreadsheet guide", "Hacoo reviews"] },
  faq: { title: "Hacoo FAQ 2026 — Links, Shipping, Returns and Reviews", description: "Plain answers to common Hacoo questions, with official facts separated from independent checking advice.", keywords: ["Hacoo FAQ", "Hacoo links", "Hacoo shipping returns"] },
};

function isTrustRoute(route: RouteKey | "article"): route is TrustRouteKey {
  return trustRouteKeys.includes(route as TrustRouteKey);
}

function parse(raw: string[] = []) {
  const first = raw[0] as Lang | undefined;
  const hasLang = languages.some(x => x.code === first) && first !== "en";
  const lang: Lang = hasLang ? first! : "en";
  const parts = hasLang ? raw.slice(1) : raw;
  if (!parts.length) return { lang, route: "" as RouteKey, routePath: "" };
  if (parts[0] === "articles" && parts.length === 2 && articleSlugs.includes(parts[1] as ArticleSlug)) return { lang, route: "article" as const, articleSlug: parts[1] as ArticleSlug, routePath: parts.join("/") };
  if (parts.length === 1 && routeKeys.includes(parts[0] as RouteKey)) return { lang, route: parts[0] as RouteKey, routePath: parts[0] };
  return null;
}

export function generateStaticParams() {
  const paths: { slug?: string[] }[] = [{ slug: [] }];
  for (const { code } of languages) {
    const prefix = code === "en" ? [] : [code];
    if (code !== "en") paths.push({ slug: prefix });
    for (const route of routeKeys) {
      if (route) paths.push({ slug: [...prefix, route] });
    }
    for (const article of articleSlugs) paths.push({ slug: [...prefix, "articles", article] });
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = parse((await params).slug || []); if (!parsed) return {};
  const routePath = parsed.route === "article" ? `articles/${parsed.articleSlug}` : parsed.route;
  const l = localizedContent[parsed.lang];
  const a = parsed.route === "article" ? localizedArticles[parsed.lang][parsed.articleSlug!] : null;
  const title = parsed.route === "article" ? a!.title : parsed.route === "" ? `${decisionCopy[parsed.lang].heroTitle} | Hacoo VIP` : isTrustRoute(parsed.route) ? `${trustContent[parsed.lang][parsed.route].title} | Hacoo VIP` : parsed.lang === "en" ? routeSeo[parsed.route].title : `${l.pageInfo[parsed.route].title} | Hacoo VIP`;
  const description = parsed.route === "article" ? a!.excerpt : parsed.route === "" ? decisionCopy[parsed.lang].heroText : isTrustRoute(parsed.route) ? trustContent[parsed.lang][parsed.route].intro : parsed.lang === "en" ? routeSeo[parsed.route].description : l.pageInfo[parsed.route].text;
  const localeKeywords: Record<Lang, string[]> = { en: ["Hacoo product comparison", "Hacoo shortlist", "compare Hacoo finds", "Hacoo decision guide"], de: ["Hacoo Produktvergleich", "Hacoo Auswahlliste", "Hacoo Funde vergleichen", "Hacoo Entscheidungshilfe"], es: ["comparar productos Hacoo", "lista Hacoo", "comparar hallazgos Hacoo", "guía de decisión Hacoo"], fr: ["comparatif produits Hacoo", "liste Hacoo", "comparer sélections Hacoo", "guide de décision Hacoo"], it: ["confronto prodotti Hacoo", "lista Hacoo", "confrontare proposte Hacoo", "guida decisionale Hacoo"] };
  const keywords = parsed.route === "article" ? [a!.keyword, localeKeywords[parsed.lang][0], "Hacoo 2026"] : parsed.route === "" ? localeKeywords[parsed.lang] : isTrustRoute(parsed.route) ? [trustContent[parsed.lang][parsed.route].title, "Hacoo VIP", "independent Hacoo guide"] : parsed.lang !== "en" ? [routeSeo[parsed.route].keywords[0], ...localeKeywords[parsed.lang].slice(0, 2)] : routeSeo[parsed.route].keywords;
  const absolute = (lang: Lang) => `${canonicalDomain}${localizedPath(lang, routePath)}`;
  const image = `${canonicalDomain}${a?.image || "/products/cnfanssp-travis-hoodie.webp"}`;
  return { title, description, keywords, robots: { index: true, follow: true }, alternates: { canonical: absolute(parsed.lang), languages: { en: absolute("en"), "de-DE": absolute("de"), "es-ES": absolute("es"), "fr-FR": absolute("fr"), "it-IT": absolute("it"), "x-default": absolute("en") } }, openGraph: { type: parsed.route === "article" ? "article" : "website", url: absolute(parsed.lang), title, description, siteName: "Hacoo VIP", locale: parsed.lang, images: [{ url: image, width: 800, height: 800, alt: a?.imageAlt || decisionCopy[parsed.lang].heroTitle }] }, twitter: { card: "summary_large_image", title, description, images: [image] } };
}

export default async function Page({ params }: Props) { const parsed = parse((await params).slug || []); if (!parsed) notFound(); return <Site {...parsed}/>; }
