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
import { LanguageSelect, SiteAnalytics } from "./site-interactions";
import { editorial } from "./editorial-copy";
import {
  categories,
  locales,
  localeNames,
  copy,
  products,
  routeFor,
  type Locale,
  type PageKey,
} from "./site-data";
import { articles, articleKeys } from "./article-content";
import {
  pageChecklists,
  pageExplanations,
  ui,
  type ArticleKey,
} from "./localized-content";

const navKeys: PageKey[] = [
  "spreadsheet",
  "finds",
  "guide",
  "qc-guide",
  "shipping",
  "faq",
  "articles",
];

const detailIcons: Partial<Record<PageKey, typeof ShieldCheck>> = {
  spreadsheet: Search,
  finds: PackageCheck,
  categories: Search,
  "qc-guide": ShieldCheck,
  shipping: Truck,
  guide: BookOpen,
  articles: BookOpen,
  faq: CircleAlert,
  methodology: ShieldCheck,
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
    <form
      className={compact ? "search-desk compact" : "search-desk"}
      action="https://www.cnfanshp.com/search.html"
      data-track="search_redirect"
      data-placement={compact ? "index" : "home"}
      method="get"
      target="_blank"
      rel="nofollow noopener"
    >
      <Search aria-hidden="true" />
      <label className="sr-only" htmlFor={`keywords-${compact ? "compact" : "hero"}`}>
        {t.searchPlaceholder}
      </label>
      <input id={`keywords-${compact ? "compact" : "hero"}`} name="keywords" placeholder={t.searchPlaceholder} required />
      <input type="hidden" name="channelid" value="2" />
      <button type="submit">{t.searchButton}<ArrowUpRight aria-hidden="true" /></button>
    </form>
  );
}

function Header({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const t = copy[locale];
  const u = ui[locale];
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
            <LanguageSelect locale={locale} label={u.language} routes={Object.fromEntries(locales.map((lang) => [lang, routeFor(lang, pageKey)]))} />
          </div>
          <details className="mobile-menu">
            <summary className="menu-button" aria-label={t.menu}><Menu aria-hidden="true" /></summary>
            <nav className="mobile-nav" aria-label={u.primaryNav}>
              {navKeys.map((key) => <a key={key} href={routeFor(locale, key)}>{t.nav[key]}<ChevronRight aria-hidden="true" /></a>)}
            </nav>
          </details>
        </div>
      </div>
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
        <a key={category.key} href={category.href} data-track="outbound_category_click" data-category={category.key} data-placement={limit ? "home" : "categories"} target="_blank" rel="nofollow sponsored noopener" className={`category-card color-${index % 4}`}>
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
          <a href={product.href} data-track="outbound_product_click" data-product-id={product.id} data-placement={limit ? "home" : "finds"} target="_blank" rel="nofollow sponsored noopener" className="product-image" aria-label={`${t.openListing}: ${u.productNames[product.id]}`}>
            {/* Remote images stay source-matched; no proxy or local substitution. */}
            <img src={product.image} alt={u.productNames[product.id]} loading="lazy" decoding="async" width={800} height={656} />
            <span><Check />{t.sourceChecked}</span>
          </a>
          <div className="product-body">
            <div className="product-meta"><span>{u.productCategories[product.category]}</span><small>{u.sourceListingId} {product.id}</small></div>
            <h3><a href={product.href} data-track="outbound_product_click" data-product-id={product.id} data-placement={limit ? "home" : "finds"} target="_blank" rel="nofollow sponsored noopener">{u.productNames[product.id]}</a></h3>
            <div className="product-price"><strong>≈ {product.price}</strong><span>{product.sourcePrice}</span></div>
            <a className="product-link" href={product.href} data-track="outbound_product_click" data-product-id={product.id} data-placement={limit ? "home" : "finds"} target="_blank" rel="nofollow sponsored noopener">{t.openListing}<ArrowUpRight /></a>
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

function FieldNotes({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const t = copy[locale];
  const checklist = pageChecklists[locale][pageKey];
  const notes = checklist ? [checklist[0], checklist[2], checklist[4]] : t.sectionText;
  return (
    <section className="section notes-section">
      <div className="section-heading"><span>{t.fieldNotes.toUpperCase()}</span><h2>{t.fieldNotes}</h2></div>
      <div className="notes-grid">
        {t.sectionLabels.map((label, index) => (
          <article key={label}><b>0{index + 1}</b><h3>{label}</h3><p>{notes[index]}</p></article>
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

const featuredArticleKeys: ArticleKey[] = [
  "articles/hacoo-not-showing-products-uk",
  "articles/hacoo-vs-dhgate-uk",
  "articles/how-to-use-hacoo-uk",
  "articles/how-long-does-hacoo-take-to-deliver-uk",
];

function ArticleCards({ locale, keys = articleKeys }: { locale: Locale; keys?: ArticleKey[] }) {
  const t = copy[locale];
  const icons = [Search, PackageCheck, Ruler, ShieldCheck, Truck, BookOpen, CircleAlert];
  return <div className="article-grid">
    {keys.map((key, index) => {
      const Icon = icons[index % icons.length];
      const article = articles[locale][key];
      return <a href={routeFor(locale, key)} key={key}>
        <Icon aria-hidden="true" />
        <span>{String(index + 1).padStart(2, "0")} / {ui[locale].buyerGuides.toUpperCase()}</span>
        <h3>{article.title}</h3>
        <p>{article.intro}</p>
        <b>{t.readGuides}<ArrowRight aria-hidden="true" /></b>
      </a>;
    })}
  </div>;
}

const topicPages: ArticleKey[] = ["articles/how-to-use-hacoo-uk", "articles/how-long-does-hacoo-take-to-deliver-uk", "articles/size-before-you-buy", "articles/hacoo-not-showing-products-uk"];
function TopicLinks({ locale }: { locale: Locale }) {
  const e = editorial[locale];
  return <nav className="topic-links" aria-label={e.choose}>
    {topicPages.map((key, index) => <a key={key} href={routeFor(locale, key)}>{e.topics[index]}<ArrowRight aria-hidden="true" /></a>)}
  </nav>;
}

function relatedKeys(pageKey: ArticleKey): ArticleKey[] {
  const candidates: ArticleKey[] = /delivery|tracking|returns|customs/.test(pageKey)
    ? ["articles/how-long-does-hacoo-take-to-deliver-uk", "articles/hacoo-tracking-uk", "articles/hacoo-returns-refunds-uk", "articles/hacoo-uk-vat-customs"]
    : /size|photos|readiness|checklist/.test(pageKey)
      ? ["articles/size-before-you-buy", "articles/read-qc-photos", "articles/hacoo-uk-pre-order-readiness-sheet", "articles/hacoo-order-checklist-uk"]
      : ["articles/how-to-use-hacoo-uk", "articles/hacoo-not-showing-products-uk", "articles/hacoo-website-vs-app", "articles/hacoo-vs-dhgate-uk"];
  return candidates.filter((key) => key !== pageKey).slice(0, 3);
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
          <TopicLinks locale={locale} />
          <SearchDesk locale={locale} />
          <small><CircleAlert />{t.sourceNote}</small>
        </div>
        <aside className="hero-aside">
          <span>{u.liveIndex}</span>
          <a className="hero-feature hero-feature-main" href={products[0].href} data-track="outbound_product_click" data-product-id={products[0].id} data-placement="hero" target="_blank" rel="nofollow sponsored noopener">
            <img src={products[0].image} alt={u.productNames[products[0].id]} loading="eager" decoding="async" fetchPriority="high" width={720} height={720} />
            <em>01</em>
          </a>
          <a className="hero-feature hero-feature-small" href={products[3].href} data-track="outbound_product_click" data-product-id={products[3].id} data-placement="hero" target="_blank" rel="nofollow sponsored noopener">
            <img src={products[3].image} alt={u.productNames[products[3].id]} loading="eager" decoding="async" fetchPriority="high" width={720} height={720} />
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
        <div className="section-heading"><span>06 / {u.deepReads}</span><h2>{editorial[locale].latest}</h2></div>
        <ArticleCards locale={locale} keys={featuredArticleKeys} />
        <a className="text-link all-guides" href={routeFor(locale, "articles")}>{editorial[locale].all}<ArrowRight aria-hidden="true" /></a>
      </section>
      <section className="section faq-preview">
        <div className="section-heading"><span>07 / {u.answers}</span><h2>{t.pageLabels.faq.title}</h2></div>
        <FaqList locale={locale} limit={3} />
        <a className="text-link" href={routeFor(locale, "faq")}>{t.nav.faq}<ArrowRight /></a>
      </section>
    </>
  );
}

function ArticlePage({ locale, pageKey }: { locale: Locale; pageKey: ArticleKey }) {
  const t = copy[locale];
  const u = ui[locale];
  const article = articles[locale][pageKey];
  if (!article) return null;
  const showFigure = ["articles/find-product-links", "articles/read-qc-photos", "articles/size-before-you-buy"].includes(pageKey);
  const figureProduct = products[pageKey === "articles/find-product-links" ? 0 : pageKey === "articles/read-qc-photos" ? 1 : 3];
  return (
    <>
      <section className="interior-hero article-hero">
        <span className="eyebrow"><i />{t.badge}</span>
        <h1>{t.pageLabels[pageKey].title}</h1>
        <p>{t.pageLabels[pageKey].intro}</p>
        <div className="article-byline">
          <span>{u.readingTime}: {article.minutes} {u.minutes}</span>
          <span>{u.lastReviewed}: {(article.reviewed ?? "2026-08-28").split("-").reverse().join(" / ")}</span>
        </div>
      </section>
      <nav className="article-toc" aria-label={editorial[locale].contents}>
        <h2>{editorial[locale].contents}</h2>
        <ol>{article.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>)}</ol>
      </nav>
      {showFigure && <section className="section route-disclosure"><p>{u.externalRouteDisclosure}</p></section>}
      {showFigure && <figure className="article-figure">
          <a href={figureProduct.href} data-track="outbound_product_click" data-product-id={figureProduct.id} data-placement="article" target="_blank" rel="nofollow sponsored noopener">
            <img src={figureProduct.image} alt={`${u.exampleImage}: ${u.productNames[figureProduct.id]}`} loading="lazy" decoding="async" width={900} height={720} />
          </a>
          <figcaption><b>{u.exampleImage}</b><span>{u.figureCaption}</span></figcaption>
        </figure>}
      <article className="long-article">
        {article.sections.map((section, index) => (
          <section key={section.heading} id={`section-${index + 1}`}>
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
        <div className="section-heading"><span>{u.keyTakeaways}</span><h2>{t.pageLabels[pageKey].title}</h2></div>
        <ol>{article.takeaways.map((item, index) => <li key={item}><b>0{index + 1}</b><span>{item}</span></li>)}</ol>
      </section>
      <section className="section research-basis">
        <div><span className="kicker">{u.articleSources}</span><h2>{u.articleSources}</h2></div>
        <ul>{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener">{source.label}</a></li>)}</ul>
      </section>
      <section className="section related-reading">
        <div className="section-heading"><span>{u.relatedReading}</span><h2>{t.pageLabels.articles.title}</h2></div>
        <ArticleCards locale={locale} keys={relatedKeys(pageKey)} />
        <a className="text-link all-guides" href={routeFor(locale, "articles")}>{editorial[locale].all}<ArrowRight aria-hidden="true" /></a>
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

      {["guide", "faq", "shipping", "qc-guide"].includes(pageKey) && <section className="topic-section"><h2>{editorial[locale].choose}</h2><TopicLinks locale={locale} /></section>}
      {pageKey === "methodology" && <section className="section research-basis">
        <div><h2>{u.articleSources}</h2><p>{t.updated}</p><p>{t.independent}</p></div>
        <ul>{Array.from(new Map(Object.values(articles[locale]).flatMap((article) => article.sources).map((source) => [source.href, source])).values()).map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener">{source.label}</a></li>)}</ul>
      </section>}

      {pageKey === "finds" && <section className="section"><ProductGrid locale={locale} /></section>}
      {pageKey === "categories" && <section className="section"><CategoryGrid locale={locale} /></section>}
      {pageKey === "faq" && <section className="section faq-page"><FaqList locale={locale} /></section>}
      {pageKey === "articles" && <section className="section article-library"><ArticleCards locale={locale} keys={[...featuredArticleKeys, ...articleKeys.filter((key) => !featuredArticleKeys.includes(key))]} /></section>}
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
      {!["finds", "categories", "faq", "articles", "methodology"].includes(pageKey) && <FieldNotes locale={locale} pageKey={pageKey} />}
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
        <a href={routeFor(locale, "methodology")}>{t.nav.methodology}</a>
      </div>
      <nav className="language-links" aria-label={ui[locale].language}>{locales.map((lang) => <a key={lang} href={routeFor(lang, pageKey)} hrefLang={lang} lang={lang} aria-current={locale === lang ? "page" : undefined}>{localeNames[lang]}</a>)}</nav>
      <div className="footer-base"><span>© 2026 Hacoos.uk</span><span>{t.updated}</span></div>
    </footer>
  );
}

export function SitePage({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const faqJson = pageKey === "faq" || pageKey === "home" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (pageKey === "home" ? copy[locale].faq.slice(0, 3) : copy[locale].faq).map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  } : null;
  const article = pageKey.startsWith("articles/") ? articles[locale][pageKey as ArticleKey] : null;
  const articleJson = article ? {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "Article",
      headline: copy[locale].pageLabels[pageKey].title,
      description: copy[locale].pageLabels[pageKey].intro,
      datePublished: article.published ?? (pageKey === "articles/hacoo-uk-pre-order-readiness-sheet" ? "2026-08-29" : "2026-08-28"),
      dateModified: article.reviewed ?? (pageKey === "articles/hacoo-uk-pre-order-readiness-sheet" ? "2026-08-29" : "2026-08-28"),
      inLanguage: locale,
      image: "https://hacoos.uk/hacoo-logo.png",
      author: { "@type": "Organization", name: "Hacoos UK Research Desk", url: "https://hacoos.uk/methodology" },
      publisher: { "@type": "Organization", name: "Hacoos UK Research Desk", url: "https://hacoos.uk/", logo: { "@type": "ImageObject", url: "https://hacoos.uk/hacoo-logo.png" } },
      mainEntityOfPage: `https://hacoos.uk${routeFor(locale, pageKey)}`,
      citation: article.sources?.map((source) => source.href),
    }, {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hacoos UK", item: `https://hacoos.uk${routeFor(locale, "home")}` },
        { "@type": "ListItem", position: 2, name: copy[locale].pageLabels.articles.title, item: `https://hacoos.uk${routeFor(locale, "articles")}` },
        { "@type": "ListItem", position: 3, name: copy[locale].pageLabels[pageKey].title, item: `https://hacoos.uk${routeFor(locale, pageKey)}` },
      ],
    }],
  } : null;
  return (
    <div className="site-shell">
      <SiteAnalytics locale={locale} />
      <Header locale={locale} pageKey={pageKey} />
      <main className={pageKey === "home" ? "home-main" : undefined}>{pageKey === "home" ? <HomePage locale={locale} /> : <InteriorPage locale={locale} pageKey={pageKey} />}</main>
      <Footer locale={locale} pageKey={pageKey} />
      {faqJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />}
      {articleJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />}
    </div>
  );
}
