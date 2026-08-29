"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { articles } from "@/lib/articles";
import { categories, hrefFor, liveCategory, liveProduct, liveSearch, products, type Locale } from "@/lib/site-data";
import { localizedCopy, translate } from "@/lib/i18n";
import { useSiteLocale } from "@/lib/use-site-locale";
import { SiteShell } from "./site-shell";

const homeFaqs = [
  ["What does Hacoo officially say it is?", "Hacoo's About page and Google Play listing describe an open content-sharing community for sharing life, discovering content, rating products, brands and services, and connecting with people and businesses."],
  ["Is a Hacoo spreadsheet an official Hacoo feature?", "We found no native spreadsheet described in the official homepage, About page or Google Play description reviewed on 28 August 2026. The term is used by independent websites and social communities for organised product-link collections."],
  ["What shipping times does Hacoo publish?", "Its Shipping & Delivery page says receiving time is usually about 15–28 days, with published destination ranges of 15–25 days for the UK, France, Germany and Italy; 15–30 for Spain; and 25–65 for other countries. It also says dates are guidelines, not guarantees."],
] as const;

export function ProductCard({ product, c, locale = "en" }: { product: (typeof products)[number]; c: Record<string, string>; locale?: Locale }) {
  const tx = (value: string) => translate(locale, value);
  return (
    <article className="product-card">
      <a href={liveProduct(product.id)} target="_blank" rel="noreferrer" className="product-image-wrap">
        <img src={product.image} alt={`${tx(product.name)} ${tx(product.category)} ${tx("product")}`} width="640" height="640" loading="lazy" />
        <span className="image-arrow">↗</span>
      </a>
      <div className="product-copy">
        <span>{tx(product.category)}</span><h3>{tx(product.name)}</h3>
        <div><strong>{product.price}</strong><a href={liveProduct(product.id)} target="_blank" rel="noreferrer">{c.open}</a></div>
      </div>
    </article>
  );
}

export function HomeView({ locale = "en" }: { locale?: Locale }) {
  const { locale: activeLocale } = useSiteLocale(locale);
  const c = localizedCopy(activeLocale);
  const tx = (value: string) => translate(activeLocale, value);
  const [query, setQuery] = useState("");

  function search(event: FormEvent) {
    event.preventDefault();
    window.open(liveSearch(query), "_blank", "noopener,noreferrer");
  }

  return (
    <SiteShell locale={locale}>
      <main className="home-main">
        <section className="hero-shell">
          <div className="hero-copy">
            <span className="section-kicker">{tx("HACOO / SPREADSHEET / 2026")}</span>
            <h1>{c.heroTitle}</h1><p>{c.heroBody}</p>
            <form className="hero-search" onSubmit={search}>
              <label className="sr-only" htmlFor="hero-search">{c.search}</label>
              <input id="hero-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={c.searchPlaceholder} />
              <button type="submit">{c.search} <span>↗</span></button>
            </form>
            <div className="hero-actions">
              <Link className="button primary" href={hrefFor(activeLocale, "spreadsheet")}>{c.browse}</Link>
              <Link className="button text" href={hrefFor(activeLocale, "guide")}>{c.learn} →</Link>
            </div>
          </div>
          <div className="hero-board" aria-label={tx("Featured Hacoo categories")}>
            <div className="board-head"><span>{tx("CURATED INDEX")}</span><strong>10 / 10</strong></div>
            <div className="board-grid">
              {categories.slice(0, 6).map((category) => (
                <a key={category.slug} href={liveCategory(category.slug)} target="_blank" rel="noreferrer">
                  <span>{category.mark}</span><strong>{tx(category.name)}</strong><b>↗</b>
                </a>
              ))}
            </div>
            <div className="board-foot"><span><i /> {c.verified}</span><span>{c.categories}</span></div>
          </div>
        </section>

        <section className="category-strip" aria-label={tx("Product categories")}>
          {categories.map((category) => (
            <a key={category.slug} href={liveCategory(category.slug)} target="_blank" rel="noreferrer">
              <small>{category.mark}</small><span>{tx(category.name)}</span><b>↗</b>
            </a>
          ))}
        </section>

        <section className="fact-strip" aria-label={tx("Hacoo facts checked August 28 2026")}>
          <Link href={hrefFor(activeLocale, "guide")}><small>{tx("OFFICIAL POSITIONING")}</small><strong>{tx("Community + discovery")}</strong><span>{tx("Hacoo says users can share, review and connect. Read the source check →")}</span></Link>
          <Link href={hrefFor(activeLocale, "articles/what-is-hacoo-app")}><small>{tx("GOOGLE PLAY")}</small><strong>{tx("10M+ downloads")}</strong><span>{tx("About 59K reviews and ~4.1 stars when checked. Read the app guide →")}</span></Link>
          <Link href={hrefFor(activeLocale, "shipping")}><small>{tx("PUBLISHED RECEIVING TIME")}</small><strong>{tx("Usually 15–28 days")}</strong><span>{tx("Official guidance—not a guaranteed delivery date. See shipping facts →")}</span></Link>
        </section>

        <section className="products-section">
          <div className="section-heading">
            <div><span className="section-kicker">{tx("LATEST ROUTES")}</span><h2>{c.products}</h2></div><p>{c.productsBody}</p>
          </div>
          <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} c={c} locale={activeLocale} />)}</div>
          <div className="center-action"><Link className="button primary" href={hrefFor(activeLocale, "spreadsheet")}>{c.all} →</Link></div>
        </section>

        <section className="home-editorial-preview">
          <div className="home-articles-preview">
            <div className="preview-heading">
              <div><span className="section-kicker">{tx("EVIDENCE DESK / 1,200–1,800 WORD GUIDES")}</span><h2>{tx("Independent Hacoo research and shopping guides")}</h2></div>
              <Link href={hrefFor(activeLocale, "articles")}>{c.articles} →</Link>
            </div>
            <div className="home-article-thumbs">
              {articles.slice(0, 3).map((article, index) => (
                <Link key={article.slug} href={hrefFor(activeLocale, `articles/${article.slug}`)}>
                  <div><span>{tx(article.tag)}</span><small>{String(index + 1).padStart(2, "0")}</small></div>
                  <h3>{tx(article.title)}</h3>
                  <p>{tx(article.deck)}</p>
                  <b>{tx("READ ARTICLE")} ↗</b>
                </Link>
              ))}
            </div>
          </div>

          <div className="home-faq-preview">
            <div className="preview-heading">
              <div><span className="section-kicker">{tx("FACT CHECK / INDEPENDENT PUBLISHER")}</span><h2>{tx("Hacoo facts worth checking before you use a product link")}</h2></div>
              <Link href={hrefFor(activeLocale, "faq")}>{c.faq} →</Link>
            </div>
            <div className="home-faq-list">
              {homeFaqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{tx(question)}</strong><b>+</b></summary>
                  <p>{tx(answer)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-section">
          <div className="workflow-title"><span className="section-kicker">{tx("HOW IT WORKS")}</span><h2>{c.workflow}</h2></div>
          {[["01", c.step1, c.step1b], ["02", c.step2, c.step2b], ["03", c.step3, c.step3b]].map(([number, title, body]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
