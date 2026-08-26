/* eslint-disable @next/next/no-img-element -- local, dimensioned responsive sources are intentional */
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  PackageCheck,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { copy, locales, sections, type Locale, type Section } from "@/lib/site-data";
import { localizedContent } from "@/lib/localized-content";
import { sectionDetails } from "@/lib/section-details";

const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  pt: "Português",
};

function localPath(locale: Locale, section?: Section) {
  return section ? `/${locale}/${section}` : `/${locale}`;
}

function languagePath(locale: Locale, section?: Section, articleSlug?: string) {
  if (articleSlug) return `/${locale}/articles/${articleSlug}`;
  return localPath(locale, section);
}

function Header({ locale, section, articleSlug }: { locale: Locale; section?: Section; articleSlug?: string }) {
  const t = copy[locale];
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href={localPath(locale)} aria-label="Hacoo home">
          <img className="logo-image" src="/hacoo-logo.png" alt="Hacoo" width="217" height="57" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {sections.map((item) => (
            <Link className={section === item ? "active" : ""} key={item} href={localPath(locale, item)}>
              {t.nav[item]}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <details className="language-menu">
            <summary>{locale.toUpperCase()} <ChevronDown size={14} strokeWidth={1.6} /></summary>
            <div className="language-list">
              <small>{t.language}</small>
              {locales.map((item) => (
                <Link key={item} href={languagePath(item, section, articleSlug)} lang={item} className={item === locale ? "active" : ""}>
                  {localeNames[item]}
                </Link>
              ))}
            </div>
          </details>
          <details className="mobile-menu">
            <summary aria-label={t.menu}><span></span><span></span></summary>
            <nav>{sections.map((item) => <Link key={item} href={localPath(locale, item)}>{t.nav[item]}</Link>)}</nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <Link className="wordmark wordmark-light" href={localPath(locale)}>
            <img className="logo-image" src="/hacoo-logo.png" alt="Hacoo" width="217" height="57" />
          </Link>
          <p>{t.footerLine}</p>
        </div>
        <div className="footer-links">{sections.map((item) => <Link key={item} href={localPath(locale, item)}>{t.nav[item]}</Link>)}</div>
      </div>
      <div className="shell footer-bottom"><p>{t.disclaimer}</p><span>© 2026 Hacoos.org</span></div>
    </footer>
  );
}

function SearchForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <form className="search-form" action="https://www.cnfanssp.com/search.html" method="get">
      <Search size={20} strokeWidth={1.5} aria-hidden="true" />
      <input name="keywords" type="search" required placeholder={t.searchPlaceholder} aria-label={t.searchPlaceholder} />
      <input type="hidden" name="channelid" value="2" />
      <input type="hidden" name="method" value="1" />
      <button type="submit">{t.searchButton}<ArrowRight size={17} /></button>
    </form>
  );
}

function ProductGrid({ locale, limit, eagerCount = 2 }: { locale: Locale; limit?: number; eagerCount?: number }) {
  const t = copy[locale];
  const list = typeof limit === "number" ? localizedContent[locale].products.slice(0, limit) : localizedContent[locale].products;
  return (
    <div className="product-grid">
      {list.map((product, index) => (
        <a className="product-card" href={product.href} key={product.href} rel="noopener noreferrer">
          <div className="product-image-wrap">
            <img
              src={product.image}
              srcSet={`${product.imageSmall} 360w, ${product.image} ${product.imageWidth}w`}
              sizes="(max-width: 680px) 48vw, (max-width: 980px) 50vw, 33vw"
              width={product.imageWidth}
              height={product.imageHeight}
              alt={product.title}
              loading={index < eagerCount ? "eager" : "lazy"}
              decoding="async"
            />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="product-meta">
            <p>{product.category}</p><h3>{product.title}</h3>
            <div><span>{product.note}</span><ArrowUpRight size={18} strokeWidth={1.4} aria-label={t.openReference} /></div>
          </div>
        </a>
      ))}
    </div>
  );
}

function CategoryGrid({ locale }: { locale: Locale }) {
  return (
    <div className="category-grid">
      {localizedContent[locale].categories.map((category) => (
        <a href={category.href} className="category-row" key={category.href} rel="noopener noreferrer">
          <span>{category.mark}</span><div><h3>{category.name}</h3><p>{category.note}</p></div><ArrowUpRight size={20} strokeWidth={1.3} />
        </a>
      ))}
    </div>
  );
}

function ArticleCards({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <div className="guide-grid">
      {localizedContent[locale].guideCards.map((article, index) => (
        <Link href={`/${locale}/articles/${article.id}`} className="guide-card" key={article.id}>
          <div className="guide-index">0{index + 1}</div><p>{article.tag}</p><h3>{article.title}</h3><span>{article.summary}</span>
          <b>{t.readGuide}<ArrowRight size={16} /></b>
        </Link>
      ))}
    </div>
  );
}

function FAQList({ locale }: { locale: Locale }) {
  return (
    <div className="faq-list">
      {localizedContent[locale].faqs.map(([question, answer], index) => (
        <details key={question} open={index === 0}>
          <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<ChevronDown size={18} /></summary><p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const c = localizedContent[locale];
  const homeUrl = `https://hacoos.org/${locale}`;
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hacoos.org",
    url: "https://hacoos.org/en",
    logo: { "@type": "ImageObject", url: "https://hacoos.org/hacoo-logo.png", width: 217, height: 57 },
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hacoos.org",
    url: homeUrl,
    inLanguage: locale,
    publisher: { "@type": "Organization", name: "Hacoos.org", url: "https://hacoos.org/en" },
  };
  return (
    <>
      <Header locale={locale} />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow"><CircleDot size={14} />{t.eyebrow}</p><h1>{t.title}</h1><p className="hero-tagline">{t.tagline}</p><p className="hero-intro">{t.intro}</p>
            <SearchForm locale={locale} /><Link className="text-link" href={localPath(locale, "spreadsheet")}>{t.browse}<ArrowRight size={16} /></Link>
          </div>
          <div className="hero-gallery" aria-label={c.ui.selectedReferences}>
            <a className="hero-photo main-photo" href={c.products[0].href} rel="noopener noreferrer" aria-label={`${t.openReference}: ${c.products[0].title}`}>
              <img src={c.products[0].image} srcSet={`${c.products[0].imageSmall} 360w, ${c.products[0].image} ${c.products[0].imageWidth}w`} sizes="(max-width: 680px) 81vw, 40vw" width={c.products[0].imageWidth} height={c.products[0].imageHeight} alt={c.products[0].title} fetchPriority="high" decoding="async" /><span>{c.ui.object} / 01</span>
            </a>
            <a className="hero-photo inset-photo" href={c.products[2].href} rel="noopener noreferrer" aria-label={`${t.openReference}: ${c.products[2].title}`}>
              <img src={c.products[2].image} srcSet={`${c.products[2].imageSmall} 360w, ${c.products[2].image} ${c.products[2].imageWidth}w`} sizes="(max-width: 680px) 38vw, 22vw" width={c.products[2].imageWidth} height={c.products[2].imageHeight} alt={c.products[2].title} loading="lazy" decoding="async" /><span>{c.ui.object} / 02</span>
            </a>
            <div className="paper-note"><Sparkles size={17} /><p>{c.ui.paperNote[0]}<br />{c.ui.paperNote[1]}</p></div>
          </div>
        </section>
        <section className="signal-band"><div className="shell signals">
          <div><strong>08</strong><span>{c.ui.signals[0]}</span></div><div><strong>06</strong><span>{c.ui.signals[1]}</span></div>
          <div><strong>QC</strong><span>{c.ui.signals[2]}</span></div><div><strong>LIVE</strong><span>{c.ui.signals[3]}</span></div>
        </div></section>
        <section className="section shell">
          <div className="section-head"><div><p className="kicker">{c.ui.kickers[0]}</p><h2>{t.latest}</h2></div><p>{t.latestIntro}</p></div>
          <ProductGrid locale={locale} eagerCount={0} /><Link className="outline-link" href={localPath(locale, "finds")}>{t.allFinds}<ArrowRight size={17} /></Link>
        </section>
        <section className="section section-tint"><div className="shell">
          <div className="section-head"><div><p className="kicker">{c.ui.kickers[1]}</p><h2>{t.categories}</h2></div><p>{t.categoriesIntro}</p></div><CategoryGrid locale={locale} />
        </div></section>
        <section className="section shell method-section">
          <div className="section-head"><div><p className="kicker">{c.ui.kickers[2]}</p><h2>{t.method}</h2></div><p>{t.methodIntro}</p></div>
          <div className="method-grid">
            {c.ui.methodCards.map(([title, text], index) => <article key={title}>{index === 0 ? <Search /> : index === 1 ? <Ruler /> : <ShieldCheck />}<span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>
        <section className="section guides-home"><div className="shell">
          <div className="section-head section-head-light"><div><p className="kicker">{c.ui.kickers[3]}</p><h2>{t.sectionTitles.articles}</h2></div><p>{t.sectionIntros.articles}</p></div><ArticleCards locale={locale} />
        </div></section>
        <section className="section shell faq-home">
          <div className="section-head"><div><p className="kicker">{c.ui.kickers[4]}</p><h2>{t.faqTitle}</h2></div><p>{t.disclaimer}</p></div><FAQList locale={locale} />
        </section>
      </main><Footer locale={locale} />
    </>
  );
}

function SectionHero({ locale, section }: { locale: Locale; section: Section }) {
  const t = copy[locale];
  return <section className="subhero shell"><p className="kicker">{localizedContent[locale].ui.libraryPrefix} / {t.nav[section].toUpperCase()}</p><h1>{t.sectionTitles[section]}</h1><p>{t.sectionIntros[section]}</p></section>;
}

function SpreadsheetPage({ locale }: { locale: Locale }) {
  const t = copy[locale]; const c = localizedContent[locale];
  return <>
    <section className="index-search shell"><SearchForm locale={locale} /><p>{c.ui.searchHelp}</p></section>
    <section className="section shell"><div className="section-head"><div><p className="kicker">{c.ui.entryPoints}</p><h2>{t.categories}</h2></div><p>{t.categoriesIntro}</p></div><CategoryGrid locale={locale} /></section>
    <section className="section section-tint"><div className="shell"><div className="editorial-grid">{c.ui.editorialSteps.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div></div></section>
  </>;
}

function FindsPage({ locale }: { locale: Locale }) {
  const c = localizedContent[locale];
  return <section className="section shell subpage-products"><ProductGrid locale={locale} /><div className="source-note"><PackageCheck /><div><h2>{c.ui.sourceNote[0]}</h2><p>{c.ui.sourceNote[1]}</p></div></div></section>;
}

function ArticlesPage({ locale }: { locale: Locale }) {
  const c = localizedContent[locale];
  return <section className="section shell article-library"><div className="article-library-note"><p className="kicker">{c.ui.articleLibrary[0]}</p><h2>{c.ui.articleLibrary[1]}</h2><p>{c.ui.articleLibrary[2]}</p></div><ArticleCards locale={locale} /></section>;
}

function ArticleFactStrip({ facts }: { facts: Array<[string, string]> }) {
  return <div className="article-fact-strip">{facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>;
}

function ArticleFigure({ locale, articleId, caption }: { locale: Locale; articleId: string; caption: string }) {
  const c = localizedContent[locale];
  if (articleId !== "hacoo-spreadsheet-guide" && articleId !== "hacoo-qc-guide") return null;
  return <figure className="article-figure">
    <div>{c.products.slice(articleId === "hacoo-qc-guide" ? 0 : 1, articleId === "hacoo-qc-guide" ? 2 : 3).map((product) => <a href={product.href} key={product.href} rel="noopener noreferrer"><img src={product.image} srcSet={`${product.imageSmall} 360w, ${product.image} ${product.imageWidth}w`} sizes="(max-width: 680px) 48vw, 390px" width={product.imageWidth} height={product.imageHeight} loading="lazy" decoding="async" alt={product.title} /><span>{product.title}</span></a>)}</div>
    <figcaption>{caption}</figcaption>
  </figure>;
}

function GuidesPage({ locale }: { locale: Locale }) {
  const c = localizedContent[locale];
  return <section className="section shell guide-hub">
    <div className="section-head"><div><p className="kicker">{c.ui.guideHub[0]}</p><h2>{c.ui.guideHub[1]}</h2></div><p>{c.ui.guideHub[2]}</p></div>
    <div className="check-grid guide-step-grid">{c.ui.guideSteps.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><Check size={18} /><h2>{title}</h2><p>{text}</p></article>)}</div>
    <div className="guide-hub-articles"><ArticleCards locale={locale} /></div>
  </section>;
}

function QCPage({ locale }: { locale: Locale }) {
  const c = localizedContent[locale]; const qcGuide = c.longGuides.find((guide) => guide.id === "hacoo-qc-guide")!;
  return <section className="section shell">
    <div className="check-grid">{c.ui.qcCheckpoints.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><Check size={18} /><h2>{title}</h2><p>{text}</p></article>)}</div>
    <article className="feature-note"><p className="kicker">{c.ui.completeMethod}</p><h2>{qcGuide.title}</h2><p className="standfirst">{qcGuide.standfirst}</p><p>{qcGuide.summary}</p><ArticleFactStrip facts={qcGuide.facts} /><Link className="outline-link" href={`/${locale}/articles/${qcGuide.id}`}>{copy[locale].readGuide}<ArrowRight size={17} /></Link></article>
  </section>;
}

function ShippingPage({ locale }: { locale: Locale }) {
  const c = localizedContent[locale]; const guide = c.longGuides.find((item) => item.id === "hacoo-shipping-guide")!;
  return <section className="section shell">
    <div className="shipping-board">{c.ui.shippingBoard.map(([label, title, text]) => <div key={label}><span>{label}</span><strong>{title}</strong><p>{text}</p></div>)}</div>
    <article className="feature-note"><p className="kicker">{c.ui.fieldNote}</p><h2>{guide.title}</h2><p className="standfirst">{guide.standfirst}</p><p>{guide.summary}</p><ArticleFactStrip facts={guide.facts} /><Link className="outline-link" href={`/${locale}/articles/${guide.id}`}>{copy[locale].readGuide}<ArrowRight size={17} /></Link></article>
    <div className="shipping-warning"><ShieldCheck /><div><h2>{c.ui.shippingWarning[0]}</h2><p>{c.ui.shippingWarning[1]}</p></div></div>
  </section>;
}

function FAQPage({ locale }: { locale: Locale }) {
  const t = copy[locale]; const c = localizedContent[locale];
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: c.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <section className="section shell faq-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /><FAQList locale={locale} /><div className="independent-note"><CircleDot /><h2>{c.ui.independent}</h2><p>{t.disclaimer}</p></div></section>;
}

function SectionDepth({ locale, section }: { locale: Locale; section: Section }) {
  const detail = sectionDetails[locale][section];
  return <section className="section section-depth"><div className="shell section-depth-grid">
    <div><p className="kicker">{detail.label}</p><h2>{detail.heading}</h2></div>
    <div className="section-depth-copy">{detail.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<ul>{detail.checks.map((check) => <li key={check}><Check size={15} />{check}</li>)}</ul></div>
  </div></section>;
}

export function SectionPage({ locale, section }: { locale: Locale; section: Section }) {
  const canonical = `https://hacoos.org/${locale}/${section}`;
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hacoos.org", item: `https://hacoos.org/${locale}` },
    { "@type": "ListItem", position: 2, name: copy[locale].sectionTitles[section], item: canonical },
  ] };
  return <><Header locale={locale} section={section} /><main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} /><SectionHero locale={locale} section={section} />
    {section === "spreadsheet" && <SpreadsheetPage locale={locale} />}{section === "finds" && <FindsPage locale={locale} />}
    {section === "articles" && <ArticlesPage locale={locale} />}{section === "guides" && <GuidesPage locale={locale} />}
    {section === "qc" && <QCPage locale={locale} />}{section === "shipping" && <ShippingPage locale={locale} />}{section === "faq" && <FAQPage locale={locale} />}
    <SectionDepth locale={locale} section={section} />
  </main><Footer locale={locale} /></>;
}

export function ArticlePage({ locale, slug }: { locale: Locale; slug: string }) {
  const c = localizedContent[locale]; const article = c.longGuides.find((item) => item.id === slug);
  if (!article) return null;
  const canonical = `https://hacoos.org/${locale}/articles/${article.id}`;
  const wordCount = [article.title, article.standfirst, ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs])].join(" ").trim().split(/\s+/).length;
  const articleJsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.standfirst,
    datePublished: "2026-08-26", dateModified: "2026-08-26", inLanguage: locale, wordCount, keywords: article.targetKeyword,
    mainEntityOfPage: canonical, image: `https://hacoos.org${c.products[Math.max(0, c.longGuides.findIndex((item) => item.id === article.id))].image}`,
    author: { "@type": "Organization", name: "Hacoos.org", url: "https://hacoos.org/en" },
    publisher: { "@type": "Organization", name: "Hacoos.org", url: "https://hacoos.org/en", logo: { "@type": "ImageObject", url: "https://hacoos.org/hacoo-logo.png", width: 217, height: 57 } }, isAccessibleForFree: true,
  };
  const breadcrumbJsonLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hacoos.org", item: `https://hacoos.org/${locale}` },
    { "@type": "ListItem", position: 2, name: copy[locale].sectionTitles.articles, item: `https://hacoos.org/${locale}/articles` },
    { "@type": "ListItem", position: 3, name: article.title, item: canonical },
  ] };
  return <><Header locale={locale} section="articles" articleSlug={slug} /><main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <section className="article-hero shell"><Link href={`/${locale}/articles`}><ArrowLeft size={15} />{c.ui.backToArticles}</Link><p className="kicker">{article.targetKeyword} · {article.reviewedAt}</p><h1>{article.title}</h1><p>{article.standfirst}</p></section>
    <section className="article-evidence shell"><p>{article.evidenceNote}</p><ArticleFactStrip facts={article.facts} /></section>
    <section className="longform single-article shell"><aside><p>{c.ui.onThisPage}</p>{article.sections.map((item) => <a href={`#${item.id}`} key={item.id}>{item.heading}</a>)}</aside><div className="articles"><article id="article-start">{article.sections.map((item, index) => <section id={item.id} key={item.id}><h2>{item.heading}</h2>{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{index === 1 && <ArticleFigure locale={locale} articleId={article.id} caption={article.evidenceNote} />}</section>)}</article></div></section>
  </main><Footer locale={locale} /></>;
}
