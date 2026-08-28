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
import { articles } from "./article-content";
import { articleExpansions } from "./article-expansions";
import {
  evidenceFacts,
  pageChecklists,
  researchBasis,
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

const articleKeys: PageKey[] = [
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
      action="https://www.cnfanssp.com/search.html"
      method="get"
      target="_blank"
      rel="nofollow"
    >
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
            <div className="product-price"><strong>{product.price}</strong><span>{product.sourcePrice}</span></div>
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

function ArticleCards({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const icons = [Search, PackageCheck, Ruler];
  return (
    <div className="article-grid">
      {articleKeys.map((key, index) => {
        const Icon = icons[index];
        return (
          <a href={routeFor(locale, key)} key={key}>
            <Icon aria-hidden="true" />
            <span>0{index + 1} / {ui[locale].buyerGuides.toUpperCase()}</span>
            <h2>{t.pageLabels[key].title}</h2>
            <p>{t.pageLabels[key].intro}</p>
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
          <div><b>03</b><small>{u.buyerGuides}</small></div>
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
        <ArticleCards locale={locale} />
      </section>
      <section className="section faq-preview">
        <div className="section-heading"><span>07 / {u.answers}</span><h2>{t.pageLabels.faq.title}</h2></div>
        <FaqList locale={locale} limit={3} />
        <a className="text-link" href={routeFor(locale, "faq")}>{t.nav.faq}<ArrowRight /></a>
      </section>
    </>
  );
}

function EvidenceGrid({ locale }: { locale: Locale }) {
  const u = ui[locale];
  return (
    <section className="section evidence-section">
      <div className="section-heading split">
        <div><span>{u.evidenceChecked}</span><h2>{u.evidenceTitle}</h2></div>
        <p>{researchBasis[locale].join(" · ")}</p>
      </div>
      <div className="evidence-grid">
        {evidenceFacts[locale].map((fact) => (
          <article key={fact.label}>
            <strong>{fact.value}</strong>
            <h3>{fact.label}</h3>
            <p>{fact.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArticlePage({ locale, pageKey }: { locale: Locale; pageKey: ArticleKey }) {
  const t = copy[locale];
  const u = ui[locale];
  const article = articles[locale][pageKey];
  const expansions = locale === "en" ? [] : articleExpansions[locale][pageKey];
  const figureProduct = products[pageKey === "articles/find-product-links" ? 0 : pageKey === "articles/read-qc-photos" ? 1 : 3];
  return (
    <>
      <section className="interior-hero article-hero">
        <span className="eyebrow"><i />{t.badge}</span>
        <h1>{t.pageLabels[pageKey].title}</h1>
        <p>{t.pageLabels[pageKey].intro}</p>
        <div className="article-byline">
          <span>{u.readingTime}: {article.minutes} {u.minutes}</span>
          <span>{u.lastReviewed}: 27 / 08 / 2026</span>
        </div>
      </section>
      <EvidenceGrid locale={locale} />
      <figure className="article-figure">
        <a href={figureProduct.href} target="_blank" rel="nofollow sponsored noopener">
          <img src={figureProduct.image} alt={`${u.exampleImage}: ${u.productNames[figureProduct.id]}`} loading="lazy" />
        </a>
        <figcaption><b>{u.exampleImage}</b><span>{u.figureCaption}</span></figcaption>
      </figure>
      <article className="long-article">
        {article.sections.map((section, index) => (
          <section key={section.heading}>
            <span>0{index + 1}</span>
            <div>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {expansions[index] && <p>{expansions[index]}</p>}
              {section.bullets && <ul>{section.bullets.map((item) => <li key={item}><Check />{item}</li>)}</ul>}
            </div>
          </section>
        ))}
      </article>
      <section className="section takeaways">
        <div className="section-heading"><span>{u.keyTakeaways}</span><h2>{t.pageLabels[pageKey].title}</h2></div>
        <ol>{article.takeaways.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ol>
      </section>
      <section className="section research-basis">
        <div><span className="kicker">{u.articleSources}</span><h2>{u.evidenceChecked}</h2></div>
        <ul>{researchBasis[locale].map((source) => <li key={source}>{source}</li>)}</ul>
      </section>
      <section className="section related-reading">
        <div className="section-heading"><span>{u.relatedReading}</span><h2>{t.pageLabels.articles.title}</h2></div>
        <ArticleCards locale={locale} />
      </section>
    </>
  );
}

function InteriorPage({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const t = copy[locale];
  const u = ui[locale];
  const page = t.pageLabels[pageKey];
  const checklist = pageChecklists[locale][pageKey];
  const DetailIcon = detailIcons[pageKey] ?? ShieldCheck;
  if (pageKey.startsWith("articles/")) {
    return <ArticlePage locale={locale} pageKey={pageKey as ArticleKey} />;
  }
  return (
    <>
      <section className="interior-hero">
        <span className="eyebrow"><i />{t.badge}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        {pageKey === "spreadsheet" && <SearchDesk locale={locale} compact />}
      </section>

      {["spreadsheet", "finds", "categories", "qc-guide", "shipping", "guide", "faq", "articles"].includes(pageKey) && <EvidenceGrid locale={locale} />}

      {pageKey === "finds" && <section className="section"><ProductGrid locale={locale} /></section>}
      {pageKey === "categories" && <section className="section"><CategoryGrid locale={locale} /></section>}
      {pageKey === "faq" && <section className="section faq-page"><FaqList locale={locale} /></section>}
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

function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer>
      <div className="footer-top"><Logo locale={locale} /><p>{t.independent}</p></div>
      <div className="footer-links">
        {navKeys.map((key) => <a key={key} href={routeFor(locale, key)}>{t.nav[key]}</a>)}
      </div>
      <div className="footer-base"><span>© 2026 Hacoos.pro</span><span>{t.updated}</span></div>
    </footer>
  );
}

export function SitePage({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.locale = locale;
  }, [locale]);
  const faqJson = pageKey === "faq" || pageKey === "home" ? {
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
    headline: copy[locale].pageLabels[pageKey].title,
    description: copy[locale].pageLabels[pageKey].intro,
    datePublished: "2026-08-27",
    dateModified: "2026-08-27",
    inLanguage: locale,
    author: { "@type": "Organization", name: "Hacoos Research Desk" },
    publisher: { "@type": "Organization", name: "Hacoos" },
    mainEntityOfPage: `https://hacoos.pro${routeFor(locale, pageKey)}`,
  } : null;
  return (
    <div className="site-shell">
      <Header locale={locale} pageKey={pageKey} />
      <main className={pageKey === "home" ? "home-main" : undefined}>{pageKey === "home" ? <HomePage locale={locale} /> : <InteriorPage locale={locale} pageKey={pageKey} />}</main>
      <Footer locale={locale} />
      {faqJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />}
      {articleJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />}
    </div>
  );
}
