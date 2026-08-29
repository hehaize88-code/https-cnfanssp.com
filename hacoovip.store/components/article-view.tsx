import Link from "next/link";
import { getArticle } from "@/lib/articles";
import { translate } from "@/lib/i18n";
import { hrefFor, type Locale } from "@/lib/site-data";
import { SiteShell } from "./site-shell";

export function ArticleView({ slug, locale = "en" }: { slug: string; locale?: Locale }) {
  const article = getArticle(slug);
  const activeLocale = locale;
  const tx = (value: string) => translate(activeLocale, value);
  if (!article) return null;
  return <SiteShell locale={locale}><main className="article-main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: tx(article.title),
          description: tx(article.deck),
          datePublished: "2026-08-28",
          dateModified: "2026-08-29",
          author: { "@type": "Organization", name: "HacooVIP Research Desk" },
          publisher: { "@type": "Organization", name: "HacooVIP", url: "https://hacoovip.store/" },
          inLanguage: activeLocale,
          mainEntityOfPage: `https://hacoovip.store${hrefFor(activeLocale, `articles/${article.slug}`)}`,
          image: article.image ? `https://hacoovip.store${article.image.src}` : undefined,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: tx("Home"), item: `https://hacoovip.store${hrefFor(activeLocale)}` },
            { "@type": "ListItem", position: 2, name: tx("Articles"), item: `https://hacoovip.store${hrefFor(activeLocale, "articles")}` },
            { "@type": "ListItem", position: 3, name: tx(article.title), item: `https://hacoovip.store${hrefFor(activeLocale, `articles/${article.slug}`)}` },
          ],
        },
      ],
    }) }} />
    <nav className="breadcrumbs" aria-label={tx("Breadcrumb")}><Link href={hrefFor(activeLocale)}>{tx("Home")}</Link><span>/</span><Link href={hrefFor(activeLocale, "articles")}>{tx("Articles")}</Link><span>/</span><span>{tx(article.tag)}</span></nav>
    <header className="article-hero"><span className="section-kicker">{tx(article.tag)}</span><h1>{tx(article.title)}</h1><p>{tx(article.deck)}</p><div><span>{tx(article.date)}</span><span>{tx(article.readTime)}</span><span>{tx("Source-led independent research")}</span></div>{article.reviewed && <small>{tx(article.reviewed)}</small>}</header>
    {article.image && <figure className="article-figure"><img src={article.image.src} alt={tx(article.image.alt)} width="1200" height="630" loading="lazy" /><figcaption>{tx(article.image.caption)}</figcaption></figure>}
    <div className="article-layout"><aside><strong>{tx("IN THIS GUIDE")}</strong>{article.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}><span>{String(index + 1).padStart(2,"0")}</span>{tx(section.heading)}</a>)}</aside><article>{article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><span className="section-number">{String(index + 1).padStart(2,"0")}</span><h2>{tx(section.heading)}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{tx(paragraph)}</p>)}</section>)}</article></div>
    {article.sources && <section className="article-sources"><span className="section-kicker">{tx("SOURCES & CHECK DATE")}</span><h2>{tx("Evidence used for this guide")}</h2><div>{article.sources.map((source) => <div key={source.url}><strong>{tx(source.label)}</strong><span>{tx(source.note)}</span><small>{source.url.replace(/^https?:\/\//, "")}</small></div>)}</div><p>{tx("Sources were checked on 28 August 2026. Policies, ratings and app-store details can change; verify the current source wording when it affects a decision.")}</p></section>}
    <section className="route-cta"><div><span className="section-kicker">{tx("NEXT STEP")}</span><h2>{tx("Return to the visual product index")}</h2></div><Link className="button primary" href={hrefFor(activeLocale, "spreadsheet")}>{tx("Open spreadsheet")} →</Link></section>
  </main></SiteShell>;
}
