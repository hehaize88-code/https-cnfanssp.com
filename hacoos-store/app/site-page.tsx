import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CircleAlert,
  PackageCheck,
  Ruler,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { InteractiveHeader, SiteTracking } from "./site-interactions";
import {
  categories,
  copy,
  products,
  routeFor,
  type Locale,
  type PageKey,
} from "./site-data";
import { contentRevision, refresh } from "./seo-refresh";
import { octoberKeys } from "./october-content";
import { articles } from "./article-content";
import { articleExpansions } from "./article-expansions";
import {
  pageChecklists,
  pageExplanations,
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
  ...octoberKeys,
  "articles/hacoo-codes-product-id-guide",
  "articles/hacoo-links-not-working",
  "articles/hacoo-spreadsheet-verify-links",
  "articles/hacoo-find-product-old-link-screenshot",
  "articles/hacoo-shoes-links",
  "articles/hacoo-hoodie-tracksuit-links",
  "articles/hacoo-bag-links",
  "articles/hacoo-wrong-product-link",
  "articles/find-product-links",
  "articles/read-qc-photos",
  "articles/size-before-you-buy",
  "articles/spreadsheet-finds-categories-start",
];

const articleReleaseDates: Partial<Record<PageKey, string>> = {
  ...Object.fromEntries(octoberKeys.map(key => [key, contentRevision])),
  "articles/spreadsheet-finds-categories-start": "2026-08-29",
  "articles/hacoo-codes-product-id-guide": "2026-09-17",
  "articles/hacoo-links-not-working": "2026-09-17",
  "articles/hacoo-spreadsheet-verify-links": "2026-09-17",
  "articles/hacoo-find-product-old-link-screenshot": "2026-09-18",
  "articles/hacoo-shoes-links": "2026-09-18",
  "articles/hacoo-hoodie-tracksuit-links": "2026-09-18",
  "articles/hacoo-bag-links": "2026-09-18",
  "articles/hacoo-wrong-product-link": "2026-09-18",
};

const detailIcons: Partial<Record<PageKey, typeof ShieldCheck>> = {
  spreadsheet: Search,
  finds: PackageCheck,
  categories: Search,
  "qc-guide": ShieldCheck,
  shipping: Truck,
  guide: BookOpen,
  articles: BookOpen,
  faq: CircleAlert,
};

function Logo({ locale }: { locale: Locale }) {
  return (
    <a className="logo" href={routeFor(locale, "home")} aria-label={copy[locale].pageLabels.home.title}>
      <img src="/hacoo-logo.png" alt="Hacoo" width={200} height={64} />
    </a>
  );
}

function SearchDesk({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = copy[locale];
  return (
    <div className="catalog-search"><form
      aria-label={refresh[locale].catalog}
      className={compact ? "search-desk compact" : "search-desk"}
      action="https://cnfanshp.com/search.html"
      method="get"
      target="_blank"
      rel="nofollow noopener"
    >
      <input type="hidden" name="channelid" value="2" />
      <Search aria-hidden="true" />
      <label className="sr-only" htmlFor={`keywords-${compact ? "compact" : "hero"}`}>
        {t.searchPlaceholder}
      </label>
      <input id={`keywords-${compact ? "compact" : "hero"}`} name="keywords" placeholder={t.searchPlaceholder} required />
      <button type="submit">{t.searchButton}<ArrowUpRight aria-hidden="true" /></button>
    </form><p className="catalog-disclosure">{refresh[locale].catalogNote}</p></div>
  );
}

function Header({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const t = copy[locale];
  return <InteractiveHeader logo={<Logo locale={locale} />} locale={locale}
    links={navKeys.map(key => ({href: routeFor(locale, key), label: t.nav[key], active: key === pageKey}))}
    localeRoutes={Object.fromEntries(['en', 'de', 'fr', 'es', 'it'].map(lang => [lang, routeFor(lang as Locale, pageKey)]))}
    labels={{primaryNav: ui[locale].primaryNav, language: ui[locale].language, menu: t.menu, close: t.close}} />;
}

function CategoryGrid({ locale, limit }: { locale: Locale; limit?: number }) {
  const t = copy[locale];
  const u = ui[locale];
  const visible = limit ? categories.slice(0, limit) : categories;
  return (
    <div className="category-grid">
      {visible.map((category, index) => (
        <a key={category.key} href={category.href} target="_blank" rel="nofollow sponsored noopener" className={`category-card color-${index % 4}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>
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
            <img src={product.image} alt={u.productNames[product.id]} loading="lazy" decoding="async" width={800} height={656} />
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

function ArticleCards({ locale, limit, exclude }: { locale: Locale; limit?: number; exclude?: PageKey }) {
  const t = copy[locale];
  const icons = [Search, PackageCheck, Ruler];
  return (
    <div className="article-grid">
      {[...articleKeys].filter(key => key !== exclude).sort((a, b) => (articleReleaseDates[b] ?? "2026-08-27").localeCompare(articleReleaseDates[a] ?? "2026-08-27")).slice(0, limit).map((key, index) => {
        const Icon = icons[index % icons.length];
        return (
          <a href={routeFor(locale, key)} key={key}>
            <Icon aria-hidden="true" />
            <span>{String(index + 1).padStart(2, "0")} / {ui[locale].buyerGuides.toUpperCase()}</span>
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
          <a className="hero-feature hero-feature-main" href={products[0].href} target="_blank" rel="nofollow sponsored noopener">
            <img src={products[0].image} alt={u.productNames[products[0].id]} loading="eager" decoding="async" fetchPriority="high" width={720} height={720} />
            <em>01</em>
          </a>
          <a className="hero-feature hero-feature-small" href={products[3].href} target="_blank" rel="nofollow sponsored noopener">
            <img src={products[3].image} alt={u.productNames[products[3].id]} loading="eager" decoding="async" width={720} height={720} />
            <em>02</em>
          </a>
          <div className="hero-stat"><b>08</b><small>{u.matchedFinds}</small></div>
          <div className="hero-stat"><b>05</b><small>{u.languages}</small></div>
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
        <a className="text-link" href={routeFor(locale, "articles")}>{t.nav.articles}<ArrowRight /></a>
      </section>
      <section className="section faq-preview">
        <div className="section-heading"><span>07 / {u.answers}</span><h2>{t.pageLabels.faq.title}</h2></div>
        <FaqList locale={locale} limit={3} />
        <a className="text-link" href={routeFor(locale, "faq")}>{t.nav.faq}<ArrowRight /></a>
      </section>
    </>
  );
}

const relatedRoutes: Partial<Record<PageKey, PageKey[]>> = {
  shipping: ['articles/hacoo-order-tracking', 'articles/hacoo-returns-refunds'],
  'qc-guide': ['articles/read-qc-photos', 'articles/size-before-you-buy', 'articles/hacoo-returns-refunds'],
  spreadsheet: ['articles/hacoo-spreadsheet-verify-links', 'articles/find-product-links', 'articles/hacoo-search-no-results'],
  'articles/hacoo-order-tracking': ['shipping', 'articles/hacoo-returns-refunds', 'articles/read-qc-photos'],
  'articles/hacoo-search-no-results': ['articles/hacoo-links-not-working', 'articles/hacoo-codes-product-id-guide', 'spreadsheet'],
  'articles/hacoo-returns-refunds': ['articles/read-qc-photos', 'articles/hacoo-order-tracking', 'shipping'],
};
function NextSteps({ locale, pageKey }: {locale: Locale; pageKey: PageKey}) {
  const routes = relatedRoutes[pageKey] ?? ['spreadsheet', 'qc-guide', 'shipping'] as PageKey[];
  return <nav className="section next-steps" aria-label={refresh[locale].next}>
    <h2>{refresh[locale].next}</h2>
    <div>{routes.filter(key => key !== pageKey).map(key => <a key={key} href={routeFor(locale, key)}>{copy[locale].pageLabels[key].title}<ArrowRight aria-hidden="true" /></a>)}</div>
  </nav>;
}
function PageGuidance({locale, pageKey}: {locale: Locale; pageKey: PageKey}) {
  const sections = refresh[locale].sections[pageKey as 'shipping' | 'qc-guide' | 'spreadsheet'];
  if (!sections) return null;
  return <><article className="long-article page-guidance">{sections.map(([heading, ...paragraphs], i) => <section key={heading}><span>{String(i + 1).padStart(2, '0')}</span><div><h2>{heading}</h2>{paragraphs.map(p => <p key={p}>{p}</p>)}</div></section>)}</article><NextSteps locale={locale} pageKey={pageKey} /></>;
}

function ArticlePage({ locale, pageKey }: { locale: Locale; pageKey: ArticleKey }) {
  const t = copy[locale];
  const u = ui[locale];
  const article = articles[locale][pageKey];
  const expansions = locale === "en" ? [] : articleExpansions[locale][pageKey] ?? [];
  const reviewed = ["articles/find-product-links", "articles/read-qc-photos"].includes(pageKey) ? contentRevision : articleReleaseDates[pageKey] ?? "2026-08-27";
  const reviewedDisplay = reviewed.split("-").reverse().join(" / ");
  return (
    <>
      <section className="interior-hero article-hero">
        <span className="eyebrow"><i />{t.badge}</span>
        <h1>{t.pageLabels[pageKey].title}</h1>
        <p>{t.pageLabels[pageKey].intro}</p>
        <div className="article-byline">
          <span>{u.readingTime}: {article.minutes} {u.minutes}</span>
          <span>{u.lastReviewed}: {reviewedDisplay}</span>
        </div>
      </section>
      <nav className="article-toc" aria-label={refresh[locale].contents}>
        <h2>{refresh[locale].contents}</h2>
        <ol>{article.sections.map((section, i) => <li key={section.heading}><a href={`#section-${i + 1}`}>{section.heading}</a></li>)}</ol>
      </nav>
      <article className="long-article">
        {article.sections.map((section, index) => (
          <section id={`section-${index + 1}`} key={section.heading}>
            <span>{String(index + 1).padStart(2, "0")}</span>
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
      <NextSteps locale={locale} pageKey={pageKey} />
      <section className="section research-basis">
        <div><h2>{u.articleSources}</h2><p>{octoberKeys.includes(pageKey as typeof octoberKeys[number]) ? refresh[locale].sourceNote : u.evidenceChecked}</p></div>
        <ul>{(octoberKeys.includes(pageKey as typeof octoberKeys[number]) ? refresh[locale].sources : researchBasis[locale]).map(source => <li key={source}>{source}</li>)}</ul>
      </section>
      <section className="section related-reading">
        <div className="section-heading"><span>{u.relatedReading}</span><h2>{t.pageLabels.articles.title}</h2></div>
        <ArticleCards locale={locale} limit={4} exclude={pageKey} />
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

      <PageGuidance locale={locale} pageKey={pageKey} />

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
            {pageExplanations[locale][pageKey] && <p className="checklist-explanation">{pageExplanations[locale][pageKey]}</p>}
            <ol className="checklist">{checklist.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ol>
          </div>
        </section>
      )}
      {!["finds", "categories", "faq", "articles", "shipping", "qc-guide", "spreadsheet"].includes(pageKey) && <FieldNotes locale={locale} />}
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
      <div className="footer-base"><span>© 2026 Hacoos.store</span><span>{t.updated}</span></div>
    </footer>
  );
}

export function SitePage({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const faqJson = pageKey === "faq" || pageKey === "home" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy[locale].faq.slice(0, pageKey === "home" ? 3 : undefined).map(([question, answer]) => ({
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
    datePublished: articleReleaseDates[pageKey] ?? "2026-08-27",
    dateModified: ["articles/find-product-links", "articles/read-qc-photos"].includes(pageKey) ? contentRevision : articleReleaseDates[pageKey] ?? "2026-08-27",
    inLanguage: locale,
    author: { "@type": "Organization", name: "Hacoos Research Desk" },
    publisher: { "@type": "Organization", name: "Hacoos" },
    mainEntityOfPage: `https://hacoos.store${routeFor(locale, pageKey)}`,
  } : null;
  return (
    <div className="site-shell">
      <SiteTracking locale={locale} pageKey={pageKey} />
      <Header locale={locale} pageKey={pageKey} />
      <main className={pageKey === "home" ? "home-main" : undefined}>{pageKey === "home" ? <HomePage locale={locale} /> : <InteriorPage locale={locale} pageKey={pageKey} />}</main>
      <Footer locale={locale} />
      {faqJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />}
      {articleJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />}
    </div>
  );
}
