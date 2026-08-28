import type { ArticleRecord } from "../articles/article-data";
import { LanguageSwitcher } from "./LanguageProvider";

export default function LongArticle({ article, related }: { article: ArticleRecord; related: ArticleRecord[] }) {
  const articleUrl = `https://acbuys.shop/articles/${article.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.updated,
    inLanguage: "en",
    mainEntityOfPage: articleUrl,
    image: ["https://acbuys.shop/og.png"],
    author: { "@type": "Organization", name: "ACBuy Finds editorial team", url: "https://acbuys.shop/articles/acbuy-information-verification/" },
    publisher: { "@type": "Organization", name: "ACBuy Finds", logo: { "@type": "ImageObject", url: "https://acbuys.shop/acbuy-logo.png" } },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://acbuys.shop/" },
      { "@type": "ListItem", position: 2, name: "Research & Guides", item: "https://acbuys.shop/articles/" },
      { "@type": "ListItem", position: 3, name: article.shortTitle, item: articleUrl },
    ],
  };

  return (
    <main className="long-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="notice"><span>Independent product discovery guide</span><i /><span>Facts checked against current official pages</span></div>
      <header>
        <a className="brand" href="/"><span className="brand-logo"><img src="/acbuy-logo.png" alt="ACBuy" width="785" height="262" /></span></a>
        <nav><a href="/#finds">Finds</a><a href="/guide/">Guide</a><a href="/qc-guide/">QC</a><a href="/shipping/">Shipping</a><a href="/faq/">FAQ</a><a href="/articles/">Research &amp; Guides</a></nav>
        <div className="header-actions"><LanguageSwitcher /><a className="mobile-articles" href="/articles/">Research &amp; Guides</a><a className="open-catalog" href="https://www.cnfanssp.com/AllProducts/" target="_blank" rel="noopener">Open full catalog ↗</a></div>
      </header>

      <article>
        <div className="article-breadcrumb"><a href="/">Home</a><span>/</span><a href="/articles/">Research &amp; Guides</a><span>/</span><b>{article.shortTitle}</b></div>
        <div className="article-hero">
          <span className="eyebrow">{article.category}</span>
          <h1>{article.title}</h1>
          <p>{article.dek}</p>
          <div className="article-meta"><span>Updated {article.updatedLabel}</span><span>{article.readingTime} min read</span></div>
        </div>

        <div className="article-layout">
          <aside className="article-toc"><b>In this guide</b>{article.sections.map((section, index) => <a key={section.heading} href={`#part-${index + 1}`}>{String(index + 1).padStart(2, "0")} · {section.heading}</a>)}</aside>
          <div className="article-body">
            <div className="research-note"><b>Research note</b><p>{article.researchNote}</p></div>
            {article.visual && <figure className={`article-visual ${article.visual.kind}`}><div aria-hidden="true">{article.visual.items.map((item, index) => <span key={item}><i>{String(index + 1).padStart(2, "0")}</i><b>{item}</b></span>)}</div><figcaption>{article.visual.caption}</figcaption></figure>}
            {article.sections.map((section, index) => (
              <section id={`part-${index + 1}`} key={section.heading}>
                <span className="section-number">{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 42)}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                {section.callout && <div className="article-callout"><b>{section.callout.title}</b><p>{section.callout.text}</p></div>}
              </section>
            ))}
            <section className="article-faq">
              <span className="section-number">FAQ</span><h2>Questions readers usually ask</h2>
              {article.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
            </section>
            <div className="source-box"><b>Sources and verification</b><p>Platform-specific statements were checked on ACBuy’s official homepage, shopping flow and product-order interface on {article.updatedLabel}. Policies, routes, prices and availability can change, so live account information takes priority.</p></div>
          </div>
        </div>
      </article>

      <section className="related-articles"><div><span className="eyebrow">Read next</span><h2>Continue the research.</h2></div><div>{related.map((item) => <a key={item.slug} href={`/articles/${item.slug}/`}><span>{item.category}</span><b>{item.shortTitle}</b><i>↗</i></a>)}</div></section>
      <section className="cta info-cta"><div><span className="eyebrow light">Use the research</span><h2>Compare current product records.</h2></div><a href="https://www.cnfanssp.com/AllProducts/" target="_blank" rel="noopener">Browse the full catalog ↗</a></section>
      <footer className="site-footer"><a className="brand" href="/"><span className="brand-logo"><img src="/acbuy-logo.png" alt="ACBuy" width="785" height="262" /></span></a><p>Independent educational guide. Verify current product, storage, shipping and after-sales details before ordering.</p><div><a href="/guide/">Guide</a><a href="/qc-guide/">QC</a><a href="/shipping/">Shipping</a><a href="/faq/">FAQ</a><a href="/articles/">Research &amp; Guides</a></div><small>© 2026 ACBuy Finds. Not affiliated with ACBuy or displayed brands.</small></footer>
    </main>
  );
}
