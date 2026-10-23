"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  CircleAlert,
  Languages,
  Menu,
  PackageCheck,
  Ruler,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import {
  categories,
  copy,
  products,
  routeFor,
  type Locale,
  type PageKey,
} from "./site-data";
import { newArticleKeys } from "./article-meta";
import { refreshCopy } from "./seo-refresh";
import type { Article } from "./article-content";
import {
  pageChecklists,
  ui,
  type ArticleKey,
} from "./localized-content";

const navKeys: PageKey[] = [
  "spreadsheet",
  "finds",
  "categories",
  "qc-guide",
  "shipping",
  "guide",
  "articles",
  "faq",
];

const articleKeys: ArticleKey[] = [
  ...newArticleKeys,
  "articles/find-product-links",
  "articles/read-qc-photos",
  "articles/size-before-you-buy",
];

const detailIcons: Partial<Record<PageKey, typeof ShieldCheck>> = {
  "qc-guide": ShieldCheck,
  shipping: Truck,
  guide: BookOpen,
};

function Logo({ locale }: { locale: Locale }) {
  return (
    <a className="logo" href={routeFor(locale, "home")} aria-label={copy[locale].pageLabels.home.title}>
      <img src="/hacoo-logo.png" alt="Hacoo" />
    </a>
  );
}

function SearchDesk({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = copy[locale];
  return (
    <form
      className={compact ? "search-desk compact" : "search-desk"}
      action="https://www.cnfanshp.com/search.html"
      method="get"
      data-main-search
      data-link-type="search"
      target="_blank"
      rel="nofollow"
    >
      <input type="hidden" name="channelid" value="2" />
      <Search aria-hidden="true" />
      <label className="sr-only" htmlFor={`keywords-${compact ? "compact" : "hero"}`}>
        {t.searchPlaceholder}
      </label>
      <input id={`keywords-${compact ? "compact" : "hero"}`} name="keywords" placeholder={t.searchPlaceholder} required />
      <button type="submit">{t.searchButton}<ArrowUpRight aria-hidden="true" /></button>
    </form>
  );
}

function Header({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const [open, setOpen] = useState(false);
  const t = copy[locale];
  const u = ui[locale];
  const changeLocale = (next: string) => {
    window.location.href = routeFor(next as Locale, pageKey);
  };
  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo locale={locale} />
        <nav className="desktop-nav" aria-label={u.primaryNav}>
          {navKeys.map((key) => (
            <a key={key} className={key === pageKey ? "active" : ""} href={routeFor(locale, key)}>{t.nav[key]}</a>
          ))}
        </nav>
        <div className="header-tools">
          <div className="language-control">
            <Languages aria-hidden="true" />
            <NativeSelect
              className="language-trigger"
              value={locale}
              onChange={(event) => changeLocale(event.target.value)}
              aria-label={u.language}
            >
              <NativeSelectOption value="en">English</NativeSelectOption>
              <NativeSelectOption value="de">Deutsch</NativeSelectOption>
              <NativeSelectOption value="fr">Français</NativeSelectOption>
              <NativeSelectOption value="es">Español</NativeSelectOption>
              <NativeSelectOption value="it">Italiano</NativeSelectOption>
            </NativeSelect>
          </div>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? t.close : t.menu}>
            <Menu aria-hidden="true" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label={u.primaryNav}>
          {navKeys.map((key) => <a key={key} href={routeFor(locale, key)}>{t.nav[key]}<ChevronRight /></a>)}
        </nav>
      )}
    </header>
  );
}

function CategoryGrid({ locale, limit }: { locale: Locale; limit?: number }) {
  const t = copy[locale];
  const u = ui[locale];
  const visible = limit ? categories.slice(0, limit) : categories;
  return (
    <div className="category-grid">
      {visible.map((category, index) => (
        <a key={category.key} href={category.href} target="_blank" rel="nofollow sponsored noopener" className={`category-card color-${index % 4}`}>
          <span>0{index + 1}</span>
          <strong>{u.categoryNames[category.key]}</strong>
          <ArrowUpRight aria-hidden="true" />
        </a>
      ))}
      {limit && <a className="category-card category-more" href={routeFor(locale, "categories")}><span>+</span><strong>{t.nav.categories}</strong><ArrowRight /></a>}
    </div>
  );
}

function ProductGrid({ locale, limit }: { locale: Locale; limit?: number }) {
  const t = copy[locale];
  const u = ui[locale];
  const visible = limit ? products.slice(0, limit) : products;
  return (
    <div className="product-grid">
      {visible.map((product) => (
        <article className="product-card" key={product.id}>
          <a href={product.href} target="_blank" rel="nofollow sponsored noopener" className="product-image" aria-label={`${t.openListing}: ${u.productNames[product.id]}`}>
            {/* Remote images stay source-matched; no proxy or local substitution. */}
            <img src={product.image} alt={u.productNames[product.id]} loading="lazy" />
            <span><Check />{t.sourceChecked}</span>
          </a>
          <div className="product-body">
            <div className="product-meta"><span>{u.productCategories[product.category]}</span><small>ID {product.id}</small></div>
            <h3><a href={product.href} target="_blank" rel="nofollow sponsored noopener">{u.productNames[product.id]}</a></h3>
            <div className="product-price"><strong>{product.price}</strong><span>USD</span></div>
            <a className="product-link" href={product.href} target="_blank" rel="nofollow sponsored noopener">{t.openListing}<ArrowUpRight /></a>
          </div>
        </article>
      ))}
    </div>
  );
}

function Workflow({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const u = ui[locale];
  return (
    <section className="section workflow-section">
      <div className="section-heading"><span>03 / {u.route}</span><h2>{t.workflowTitle}</h2></div>
      <ol className="workflow-grid">
        {t.workflow.map((step, index) => <li key={step}><b>0{index + 1}</b><p>{step}</p></li>)}
      </ol>
      <a className="text-link" href={routeFor(locale, "guide")}>{t.readGuides}<ArrowRight /></a>
    </section>
  );
}

function FieldNotes({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section className="section notes-section">
      <div className="section-heading"><span>{t.fieldNotes.toUpperCase()}</span><h2>{t.fieldNotes}</h2></div>
      <div className="notes-grid">
        {t.sectionLabels.map((label, index) => (
          <article key={label}><b>0{index + 1}</b><h3>{label}</h3><p>{t.sectionText[index]}</p></article>
        ))}
      </div>
    </section>
  );
}

function FaqList({ locale, limit }: { locale: Locale; limit?: number }) {
  const t = copy[locale];
  return (
    <div className="faq-list">
      {t.faq.slice(0, limit).map(([question, answer], index) => (
        <details key={question} open={index === 0 && !limit}>
          <summary><span>{question}</span><b>+</b></summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

function ArticleCards({ locale, limit, exclude }: { locale: Locale; limit?: number; exclude?: ArticleKey }) {
  const t = copy[locale];
  const icons = [Search, PackageCheck, Ruler];
  return (
    <div className="article-grid">
      {articleKeys.filter(key => key !== exclude).slice(0, limit).map((key, index) => {
        const Icon = icons[index % icons.length];
        return (
          <a href={routeFor(locale, key)} key={key}>
            <Icon aria-hidden="true" />
            <span>0{index + 1} / {ui[locale].buyerGuides.toUpperCase()}</span>
            <h2>{t.pageLabels[key]!.title}</h2>
            <p>{t.pageLabels[key]!.intro}</p>
            <b>{t.readGuides}<ArrowRight /></b>
          </a>
        );
      })}
    </div>
  );
}

function ResourceCards({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const u = ui[locale];
  return (
    <div className="resource-grid">
      <a className="resource-card resource-articles" href={routeFor(locale, "articles")}>
        <span>04 / {u.seoLibrary}</span>
        <BookOpen aria-hidden="true" />
        <div>
          <h2>{t.pageLabels.articles.title}</h2>
          <p>{t.pageLabels.articles.intro}</p>
          <b>{t.nav.articles}<ArrowRight /></b>
        </div>
      </a>
      <a className="resource-card resource-faq" href={routeFor(locale, "faq")}>
        <span>05 / {u.quickAnswers}</span>
        <CircleAlert aria-hidden="true" />
        <div>
          <h2>{t.pageLabels.faq.title}</h2>
          <p>{t.pageLabels.faq.intro}</p>
          <b>{t.nav.faq}<ArrowRight /></b>
        </div>
      </a>
    </div>
  );
}

function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const u = ui[locale];
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><i />{t.badge}</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <SearchDesk locale={locale} />
          <small><CircleAlert />{t.sourceNote}</small>
        </div>
        <aside className="hero-aside">
          <span>{u.liveIndex}</span>
          <strong>08</strong>
          <p>{u.matchedFinds}</p>
          <div><b>05</b><small>{u.languages}</small></div>
          <div><b>07</b><small>{u.buyerGuides}</small></div>
        </aside>
      </section>

      <section className="section category-section">
        <div className="section-heading"><span>01 / {u.explore}</span><h2>{t.categoriesTitle}</h2></div>
        <CategoryGrid locale={locale} limit={4} />
      </section>

      <section className="section finds-section">
        <div className="section-heading split"><div><span>02 / {u.matched}</span><h2>{t.findsTitle}</h2></div><p>{t.findsText}</p></div>
        <ProductGrid locale={locale} limit={6} />
        <a className="text-link" href={routeFor(locale, "finds")}>{t.viewAll}<ArrowRight /></a>
      </section>
      <Workflow locale={locale} />
      <section className="section resource-section">
        <ResourceCards locale={locale} />
      </section>
      <section className="section guide-preview">
        <div className="section-heading"><span>06 / {u.deepReads}</span><h2>{t.nav.articles}</h2></div>
        <ArticleCards locale={locale} limit={4} />
        <a className="text-link" href={routeFor(locale, "articles")}>{t.viewAll}<ArrowRight /></a>
      </section>
      <section className="section faq-preview">
        <div className="section-heading"><span>07 / {u.answers}</span><h2>{t.pageLabels.faq.title}</h2></div>
        <FaqList locale={locale} limit={3} />
        <a className="text-link" href={routeFor(locale, "faq")}>{t.nav.faq}<ArrowRight /></a>
      </section>
    </>
  );
}

function ArticlePage({ locale, pageKey, article }: { locale: Locale; pageKey: ArticleKey; article: Article }) {
  const t = copy[locale];
  const u = ui[locale];
  const figureProduct = products[pageKey.includes("shoes") || pageKey.includes("size") ? 0 : 1];
  const r = refreshCopy[locale];
  return (
    <>
      <section className="interior-hero article-hero">
        <span className="eyebrow"><i />{t.badge}</span>
        <h1>{t.pageLabels[pageKey]!.title}</h1>
        <p>{t.pageLabels[pageKey]!.intro}</p>
        <div className="article-byline">
          <span>{u.readingTime}: {article.minutes} {u.minutes}</span>
          <span>{u.lastReviewed}: <time dateTime="2026-10-09">09 / 10 / 2026</time></span>
        </div>
      </section>
      <nav className="article-toc" aria-label={r.contents}>
        <b>{r.contents}</b>
        {article.sections.map((section,index) => <a key={section.heading} href={`#section-${index + 1}`}>{section.heading}</a>)}
      </nav>
      {!pageKey.includes("tracking") && !pageKey.includes("links-not") && <figure className="article-figure">
        <a href={figureProduct.href} target="_blank" rel="nofollow sponsored noopener">
          <img src={figureProduct.image} alt={`${u.exampleImage}: ${u.productNames[figureProduct.id]}`} loading="lazy" />
        </a>
        <figcaption><b>{u.exampleImage}</b><span>{u.figureCaption}</span></figcaption>
      </figure>}
      <article className="long-article">
        {article.sections.map((section, index) => (
          <section id={`section-${index + 1}`} key={section.heading}>
            <span>0{index + 1}</span>
            <div>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}><Check />{item}</li>)}</ul>}
            </div>
          </section>
        ))}
      </article>
      <section className="section takeaways">
        <div className="section-heading"><span>{u.keyTakeaways}</span><h2>{t.pageLabels[pageKey]!.title}</h2></div>
        <ol>{article.takeaways.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ol>
      </section>
      <section className="section research-basis">
        <div><span className="kicker">{u.articleSources}</span><h2>{r.sources}</h2></div>
        <ul>
          <li><a href="https://www.hacoo.app/" target="_blank" rel="noopener">{r.official}</a></li>
          <li><a href="https://web.hacoo.app/en-US/pages/shipping-info" target="_blank" rel="noopener">{r.shippingSource}</a> · 09 / 10 / 2026</li>
          <li>{r.method}</li>
        </ul>
      </section>
      {!pageKey.includes("tracking") && !pageKey.includes("links-not") && <section className="section inline-cta article-next">
        <h2>{r.next}</h2>
        <p>{r.destinationNote}</p>
        <a data-link-type="article-cta" href={`https://www.cnfanshp.com/search.html?keywords=${pageKey.includes("shoes") ? "shoes" : pageKey.includes("clothing") ? "hoodie" : ""}&channelid=2`} target="_blank" rel="nofollow sponsored noopener">{r.search}<ArrowUpRight /></a>
      </section>}
      <section className="section related-reading">
        <div className="section-heading"><span>{u.relatedReading}</span><h2>{t.pageLabels.articles.title}</h2></div>
        <ArticleCards locale={locale} limit={3} exclude={pageKey} />
      </section>
    </>
  );
}

function InteriorPage({ locale, pageKey, article }: { locale: Locale; pageKey: PageKey; article?: Article }) {
  const t = copy[locale];
  const u = ui[locale];
  const page = t.pageLabels[pageKey]!;
  const checklist = pageChecklists[locale][pageKey];
  const DetailIcon = detailIcons[pageKey] ?? ShieldCheck;
  if (pageKey.startsWith("articles/") && article) {
    return <ArticlePage locale={locale} pageKey={pageKey as ArticleKey} article={article} />;
  }
  return (
    <>
      <section className="interior-hero">
        <span className="eyebrow"><i />{t.badge}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        {pageKey === "spreadsheet" && <SearchDesk locale={locale} compact />}
      </section>



      {pageKey === "finds" && <section className="section"><ProductGrid locale={locale} /></section>}
      {pageKey === "categories" && <section className="section"><CategoryGrid locale={locale} /></section>}
      {pageKey === "faq" && <section className="section faq-page"><FaqList locale={locale} /></section>}
      {pageKey === "shipping" && <section className="section inline-cta"><p>{refreshCopy[locale].shippingSummary}</p><a href={routeFor(locale, "articles/tracking-not-updating")}>{t.pageLabels["articles/tracking-not-updating"]!.title}<ArrowRight /></a></section>}
      {pageKey === "articles" && <section className="section"><ArticleCards locale={locale} /></section>}
      {pageKey === "spreadsheet" && (
        <>
          <section className="section"><ProductGrid locale={locale} limit={4} /></section>
          <Workflow locale={locale} />
        </>
      )}
      {checklist && (
        <section className="section detail-layout">
          <div className="detail-icon"><DetailIcon aria-hidden="true" /></div>
          <div>
            <span className="kicker">{u.practicalChecklist}</span>
            <ol className="checklist">{checklist.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ol>
          </div>
        </section>
      )}
      {!["finds", "categories", "faq", "articles"].includes(pageKey) && <FieldNotes locale={locale} />}
      {checklist && <section className="section inline-cta"><h2>{t.pageLabels.articles.title}</h2><a href={routeFor(locale, "articles")}>{t.readGuides}<ArrowRight /></a></section>}
    </>
  );
}

function Footer({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const t = copy[locale];
  return (
    <footer>
      <div className="footer-top"><Logo locale={locale} /><p>{t.independent}</p></div>
      <div className="footer-links">
        {navKeys.map((key) => <a key={key} href={routeFor(locale, key)}>{t.nav[key]}</a>)}
      </div>
      <div className="footer-languages">{(["en", "de", "fr", "es", "it"] as Locale[]).map(lang => <a key={lang} href={routeFor(lang, pageKey)} hrefLang={lang} lang={lang}>{({en:"English",de:"Deutsch",fr:"Français",es:"Español",it:"Italiano"})[lang]}</a>)}</div>
      <div className="footer-base"><span>© 2026 Hacoos.pro</span><span>{t.updated}</span></div>
    </footer>
  );
}

export function SitePage({ locale, pageKey, article }: { locale: Locale; pageKey: PageKey; article?: Article }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
  }, [locale]);
  const faqJson = pageKey === "faq" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy[locale].faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  } : null;
  const articleJson = pageKey.startsWith("articles/") ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: copy[locale].pageLabels[pageKey]!.title,
    description: copy[locale].pageLabels[pageKey]!.intro,
    datePublished: newArticleKeys.includes(pageKey as typeof newArticleKeys[number]) ? "2026-10-09" : "2026-08-27",
    dateModified: "2026-10-09",
    inLanguage: locale,
    author: { "@type": "Organization", name: "Hacoos Research Desk" },
    publisher: { "@type": "Organization", name: "Hacoos" },
    mainEntityOfPage: `https://hacoos.pro${routeFor(locale, pageKey)}`,
  } : null;
  return (
    <div className="site-shell">
      <Header locale={locale} pageKey={pageKey} />
      <main className={pageKey === "home" ? "home-main" : undefined}>{pageKey === "home" ? <HomePage locale={locale} /> : <InteriorPage locale={locale} pageKey={pageKey} article={article} />}</main>
      <Footer locale={locale} pageKey={pageKey} />
      {faqJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />}
      {articleJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />}
    </div>
  );
}
