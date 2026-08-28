import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, Footer, Header, JsonLd } from "../../components";
import { articles, PLANNED_ORIGIN } from "../../data";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.description, alternates: { canonical: `${PLANNED_ORIGIN}/articles/${article.slug}` }, openGraph: { title: article.title, description: article.description, type: "article", url: `${PLANNED_ORIGIN}/articles/${article.slug}` } };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);
  const publicationDate = article.slug === "can-you-trust-old-qc-photos" ? "2026-08-28" : "2026-08-27";
  return <><Header /><main><Breadcrumbs items={[{ label: "Articles", href: "/articles" }, { label: article.title }]} />
    <article className="long-article shell"><header><div className="eyebrow"><span />QC field guide</div><h1>{article.title}</h1><p>{article.description}</p><div><span>Reviewed {article.updated}</span><span>{article.readTime}</span><span>Independent research</span></div></header>
      <div className="article-layout"><aside><b>IN THIS GUIDE</b>{article.sections.map((section, i) => <a key={section.heading} href={`#section-${i + 1}`}>{String(i + 1).padStart(2, "0")} {section.heading}</a>)}</aside>
        <div className="article-body">{article.sections.map((section, i) => <section id={`section-${i + 1}`} key={section.heading}><span>{String(i + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}
          {article.sources && <section className="article-sources"><span>SOURCES</span><h2>Research sources reviewed</h2><p>Primary platform pages used for factual claims in this article. Features and displayed figures can change after the review date.</p><div>{article.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="nofollow noopener noreferrer">{source.label} ↗</a>)}</div></section>}
          <div className="article-disclosure"><b>Research boundary</b><p>Product availability, prices, currency conversion, seller terms and return conditions can change. Reopen the current destination and inspect the exact unit received before making a decision.</p></div>
        </div></div>
      <footer className="related-row"><div><span>KEEP READING</span><h2>Related field guides</h2></div>{related.map((item) => <Link key={item.slug} href={`/articles/${item.slug}`}><b>{item.title}</b><span>Read →</span></Link>)}</footer>
    </article>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.description, datePublished: publicationDate, dateModified: publicationDate, mainEntityOfPage: `${PLANNED_ORIGIN}/articles/${article.slug}`, author: { "@type": "Organization", name: "FindQC Research Desk" }, publisher: { "@type": "Organization", name: "FindQC Research Desk" } }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: PLANNED_ORIGIN }, { "@type": "ListItem", position: 2, name: "Articles", item: `${PLANNED_ORIGIN}/articles` }, { "@type": "ListItem", position: 3, name: article.title, item: `${PLANNED_ORIGIN}/articles/${article.slug}` }] }} />
  </main><Footer /></>;
}
