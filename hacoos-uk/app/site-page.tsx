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
  MessageCircle,
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
  pageExplanations,
  researchBasis,
  ui,
  type ArticleKey,
  type EvidenceFact,
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

const articleKeys: PageKey[] = [
  "articles/find-product-links",
  "articles/read-qc-photos",
  "articles/size-before-you-buy",
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

const englishPageEvidence: Partial<Record<PageKey, EvidenceFact[]>> = {
  spreadsheet: [
    { value: "5 fields", label: "identity record", note: "Title, first image, option, source price and source listing ID are checked together." },
    { value: "1 route", label: "per source listing ID", note: "Duplicate and expired routes belong in the update record rather than the current index." },
    { value: "dated", label: "destination check", note: "A route is a time-stamped observation, not a permanent availability promise." },
    { value: "external", label: "catalogue destination", note: "The indexed destinations are not official Hacoo product URLs." },
  ],
  finds: [
    { value: "8 routes", label: "external listings checked", note: "The current index contains eight independently matched catalogue destinations." },
    { value: "8 / 8", label: "first-image matches", note: "Each card image matched the destination's current first social-preview image on 28 August 2026." },
    { value: "HTTP 200", label: "destination response", note: "All eight final destinations loaded successfully at the check date." },
    { value: "0", label: "official Hacoo product URLs", note: "Every product card opens an external catalogue and is labelled accordingly." },
  ],
  categories: [
    { value: "8", label: "external category routes", note: "Each route opens a distinct catalogue category without changing its existing target." },
    { value: "1 intent", label: "per category", note: "Shoes, clothing, bags and accessories require different identity fields." },
    { value: "ID + image", label: "minimum identity pair", note: "Category context alone is not enough to identify a listing." },
    { value: "current", label: "destination evidence", note: "A category label does not guarantee stock, quality or delivery." },
  ],
  "qc-guide": [
    { value: "1st", label: "confirm identity", note: "Match source listing ID, colour and variant before judging construction." },
    { value: "3 views", label: "photo distance", note: "Use full-item, detail and ruler views to separate scale from defects." },
    { value: "ruler", label: "measurement evidence", note: "Measured photos are more useful than visual size estimates." },
    { value: "no", label: "authenticity claim", note: "A first-image match or review score does not prove authenticity or quality." },
  ],
  shipping: [
    { value: "15–25 days", label: "official UK estimate", note: "Hacoo's shipping page lists this range for the United Kingdom." },
    { value: "3 stages", label: "delivery record", note: "Track preparation, international transit and final-mile delivery separately." },
    { value: "15 days", label: "general return window", note: "The detailed help guidance starts the general window after receipt and lists exclusions." },
    { value: "no exchange", label: "current help guidance", note: "The cited help page says exchanges are not currently supported." },
  ],
  guide: [
    { value: "UK", label: "region and address first", note: "Visible catalogue and delivery coverage can depend on the actual region." },
    { value: "exact", label: "selected option saved", note: "Record colour, size, measurements and source listing ID together." },
    { value: "UK / EU", label: "size comparison", note: "Use the seller's measurements and a garment or shoe that already fits." },
    { value: "dated", label: "evidence screenshot", note: "Keep the chosen option, price, route and check date in one record." },
  ],
  faq: [
    { value: "3 types", label: "evidence separated", note: "Official policy, independent route observations and public review themes are labelled separately." },
    { value: "UK", label: "question scope", note: "Region, address, delivery and returns answers are written for United Kingdom users." },
    { value: "plain", label: "limits stated", note: "A working link does not guarantee stock, quality or delivery." },
    { value: "unknown", label: "remains unknown", note: "We do not turn missing official information into a confident claim." },
  ],
  articles: [
    { value: "3", label: "decision-stage guides", note: "External routes, review photos and UK/EU sizing each own a distinct primary intent." },
    { value: "1", label: "primary intent per guide", note: "Supporting questions are included without making every article target the same keyword." },
    { value: "1,200–1,800", label: "English words per article", note: "Long-form pages keep useful depth without padding with repeated fact blocks." },
    { value: "28 Aug 2026", label: "research check", note: "Platform facts and destination observations are date-labelled." },
  ],
  methodology: [
    { value: "4", label: "source classes", note: "Official policy, app stores, public reviews and independent route checks are kept separate." },
    { value: "28 Aug 2026", label: "current check date", note: "Every named source and route observation carries the same visible review date." },
    { value: "8 / 8", label: "first-image comparisons", note: "Card images were compared with destination social-preview images." },
    { value: "200 + identity", label: "live-route rule", note: "A successful response is required, but matching identity fields are required too." },
  ],
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
            <img src={product.image} alt={u.productNames[product.id]} loading="lazy" decoding="async" width={800} height={656} />
            <span><Check />{t.sourceChecked}</span>
          </a>
          <div className="product-body">
            <div className="product-meta"><span>{u.productCategories[product.category]}</span><small>{u.sourceListingId} {product.id}</small></div>
            <h3><a href={product.href} target="_blank" rel="nofollow sponsored noopener">{u.productNames[product.id]}</a></h3>
            <div className="product-price"><strong>{product.price}</strong><span>≈ {product.gbp}</span><span>{product.sourcePrice}</span></div>
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
          <a className="hero-feature hero-feature-main" href={products[0].href} target="_blank" rel="nofollow sponsored noopener">
            <img src={products[0].image} alt={u.productNames[products[0].id]} loading="eager" decoding="async" fetchPriority="high" width={720} height={720} />
            <em>01</em>
          </a>
          <a className="hero-feature hero-feature-small" href={products[3].href} target="_blank" rel="nofollow sponsored noopener">
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

function EvidenceGrid({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const u = ui[locale];
  const checklist = pageChecklists[locale][pageKey];
  const facts = locale === "en" && englishPageEvidence[pageKey]
    ? englishPageEvidence[pageKey]!
    : checklist
      ? checklist.slice(0, 4).map((note, index) => ({ value: `0${index + 1}`, label: u.practicalChecklist, note }))
      : evidenceFacts[locale];
  return (
    <section className="section evidence-section">
      <div className="section-heading split">
        <div><span>{u.evidenceChecked}</span><h2>{u.evidenceTitle}</h2></div>
        <p>{researchBasis[locale].join(" · ")}</p>
      </div>
      <div className="evidence-grid">
        {facts.map((fact, index) => (
          <article key={`${fact.label}-${index}`}>
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
          <span>{u.lastReviewed}: 28 / 08 / 2026</span>
        </div>
      </section>
      <EvidenceGrid locale={locale} pageKey={pageKey} />
      <section className="section route-disclosure"><p>{u.externalRouteDisclosure}</p></section>
      <figure className="article-figure">
        <a href={figureProduct.href} target="_blank" rel="nofollow sponsored noopener">
          <img src={figureProduct.image} alt={`${u.exampleImage}: ${u.productNames[figureProduct.id]}`} loading="lazy" decoding="async" width={900} height={720} />
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

      {["spreadsheet", "finds", "categories", "qc-guide", "shipping", "guide", "faq", "articles", "methodology"].includes(pageKey) && <EvidenceGrid locale={locale} pageKey={pageKey} />}

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
      {!["finds", "categories", "faq", "articles", "methodology"].includes(pageKey) && <FieldNotes locale={locale} pageKey={pageKey} />}
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
        <a href={routeFor(locale, "methodology")}>{t.nav.methodology}</a>
      </div>
      <div className="footer-base"><span>© 2026 Hacoos.uk</span><span>{t.updated}</span></div>
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
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    inLanguage: locale,
    image: "https://hacoos.uk/hacoo-logo.png",
    author: { "@type": "Organization", name: "Hacoos UK Research Desk", url: "https://hacoos.uk/methodology" },
    publisher: { "@type": "Organization", name: "Hacoos UK Research Desk", url: "https://hacoos.uk/", logo: { "@type": "ImageObject", url: "https://hacoos.uk/hacoo-logo.png" } },
    mainEntityOfPage: `https://hacoos.uk${routeFor(locale, pageKey)}`,
  } : null;
  return (
    <div className="site-shell">
      <Header locale={locale} pageKey={pageKey} />
      <main className={pageKey === "home" ? "home-main" : undefined}>{pageKey === "home" ? <HomePage locale={locale} /> : <InteriorPage locale={locale} pageKey={pageKey} />}</main>
      <Footer locale={locale} />
      <a
        className="whatsapp-float"
        href="https://wa.me/message/3V2YFNRFGBI2O1"
        target="_blank"
        rel="noopener nofollow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      {faqJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />}
      {articleJson && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />}
    </div>
  );
}
