import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SearchBox } from "@/components/search-box";
import { categories, copy, languages, products, routes, type Lang } from "@/lib/site-data";
import { articles, articleSlugs, type ArticleSlug } from "@/lib/articles";
import { officialFacts } from "@/lib/official-facts";

type Props = { params: Promise<{ lang: string; slug?: string[] }> };
const site = "https://hacoovip.pro";
const validLang = (value: string): value is Lang => languages.includes(value as Lang);
const articleSourceUrls: Record<ArticleSlug, string[]> = {
  "hacoo-spreadsheet-live-source": [
    "https://www.hacoo.app/en-US/pages/terms-of-service",
    "https://www.hacoo.app/en-US/pages/intellectual-property",
    "https://apps.apple.com/gb/app/hacoo-discovering-inspiring/id1399907836",
    "https://act.hacoo.app/act/sara/helpcenter/order1",
  ],
  "hacoo-reviews-2026": [
    "https://www.hacoo.app/trust-center",
    "https://apps.apple.com/gb/app/hacoo-discovering-inspiring/id1399907836",
    "https://play.google.com/store/apps/details?id=com.saramart.android",
    "https://www.trustpilot.com/review/www.hacoo.app",
  ],
  "hacoo-shipping-time-cost": [
    "https://www.hacoo.app/en-US/pages/shipping-info",
    "https://act.hacoo.app/faqshippingfee",
    "https://act.hacoo.app/act/sara/helpcenter/return11",
    "https://www.hacoo.app/en-US/pages/terms-of-service",
  ],
};

export function generateStaticParams() {
  return languages.flatMap((lang) => [
    ...routes.map((route) => ({ lang, slug: route ? [route] : [] })),
    ...articleSlugs.map((article) => ({ lang, slug: ["articles", article] })),
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: rawLang, slug = [] } = await params;
  if (!validLang(rawLang)) return {};
  const route = slug[0] || "";
  const c = copy[rawLang];
  const articleSlug = route === "articles" && articleSlugs.includes(slug[1] as ArticleSlug) ? slug[1] as ArticleSlug : null;
  const page = route ? c.pages[route] : null;
  const article = articleSlug ? articles[rawLang][articleSlug] : null;
  const title = article ? `${article.title} | Hacoo` : page ? `${page.title} | Hacoo` : "Hacoo Spreadsheet, Finds & Product Links | Hacoo";
  const description = article?.description || page?.intro || c.intro;
  const routePath = slug.join("/");
  const path = routePath ? `/${rawLang}/${routePath}` : `/${rawLang}`;
  return {
    title, description, robots: { index: true, follow: true },
    alternates: {
      canonical: `${site}${path}`,
      languages: Object.fromEntries([
        ...languages.map((lang) => [lang, `${site}/${lang}${routePath ? `/${routePath}` : ""}`]),
        ["x-default", `${site}/en${routePath ? `/${routePath}` : ""}`],
      ]),
    },
  };
}

function Header({ lang, route }: { lang: Lang; route: string }) {
  const c = copy[lang];
  const activeRoute = route.split("/")[0];
  return (
    <>
      <div className="notice-bar"><span>{c.independent}</span><span>{c.updated}</span></div>
      <header className="site-header">
        <div className="header-inner">
        <Link href={`/${lang}`} className="brand" aria-label="HacooVIP Pro home">
          <img src="/hacoo-logo.png" alt="Hacoo" width="235" height="58" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {routes.slice(1).map((item) => <Link key={item} className={activeRoute === item ? "active" : ""} href={`/${lang}/${item}`}>{c.nav[item]}</Link>)}
        </nav>
        <div className="language-links" aria-label="Language">
          {languages.map((item) => <Link key={item} className={item === lang ? "active" : ""} href={`/${item}${route ? `/${route}` : ""}`}>{item.toUpperCase()}</Link>)}
        </div>
        </div>
        <details className="mobile-nav">
          <summary>{c.nav.finds} <span>＋</span></summary>
          <div>{routes.map((item) => <Link key={item || "home"} href={`/${lang}${item ? `/${item}` : ""}`}>{c.nav[item || "home"]}</Link>)}</div>
        </details>
      </header>
    </>
  );
}

function ProductGrid({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return <div className="product-grid">{products.map((product, index) => (
    <a className="product-card" href={product.href} target="_blank" rel="noopener noreferrer" key={product.href}>
      <div className="product-image"><span className="product-number">0{index + 1}</span><img src={product.image} alt={product.name} width="750" height="750" loading="lazy" /></div>
      <div className="product-info"><div className="product-meta"><span>{c.cats[product.category]}</span><strong>{product.price}</strong></div>
      <h3>{product.name}</h3><span className="product-link">{c.open}<b>↗</b></span></div>
    </a>
  ))}</div>;
}

function Home({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return <>
    <section className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow"><span>{c.nav.finds}</span> {c.badge}</p>
        <h1>{c.hero} <em>{c.heroAccent}</em></h1>
        <p className="hero-intro">{c.intro}</p>
        <SearchBox placeholder={c.search} button={c.searchButton} />
        <div className="trust-row"><span><b>✓</b> {c.updated}</span><span><b>✓</b> {c.independent}</span></div>
      </div>
      <div className="hero-gallery" aria-label={c.productTitle}>
        <a className="gallery-main" href={products[0].href} target="_blank" rel="noopener noreferrer" aria-label={`${c.open}: ${products[0].name}`}><img src="/products/amiri-ma1.webp" alt="Black and white sneaker product reference" width="750" height="750" /><span>{c.cats.shoes} · $53.44 ↗</span></a>
        <a className="gallery-small gallery-one" href={products[1].href} target="_blank" rel="noopener noreferrer" aria-label={`${c.open}: ${products[1].name}`}><img src="/products/represent-hoodie.webp" alt="Hoodie product reference" width="750" height="750" /></a>
        <a className="gallery-small gallery-two" href={products[5].href} target="_blank" rel="noopener noreferrer" aria-label={`${c.open}: ${products[5].name}`}><img src="/products/trapstar-bag.webp" alt="Shoulder bag product reference" width="750" height="750" /></a>
        <a className="gallery-note" href="https://cnfanssp.com/AllProducts/" target="_blank" rel="noopener noreferrer" aria-label={c.viewAll}><strong>06</strong><span>{c.nav.finds} ↗</span></a>
      </div>
    </section>
    <section className="category-section">
      <div className="section-shell category-shell">
        <div className="category-title"><p className="index">01 · {c.nav.finds}</p><h2>{c.categoryTitle}</h2><p>{c.categorySub}</p></div>
        <div className="category-grid">{categories.map((category) => <a key={category.key} href={category.href} target="_blank" rel="noopener noreferrer"><span>{category.icon}</span><strong>{c.cats[category.key]}</strong><b>↗</b></a>)}</div>
      </div>
    </section>
    <section className="section-shell block-section products-section">
      <div className="section-heading"><div><p className="index">02 · {c.nav.finds} · 06</p><h2>{c.productTitle}</h2></div><p>{c.productSub}</p></div>
      <ProductGrid lang={lang} />
      <a className="outline-button" href="https://cnfanssp.com/AllProducts/" target="_blank" rel="noopener noreferrer">{c.viewAll} ↗</a>
    </section>
    <section className="method-section"><div className="section-shell method-inner">
      <div className="method-intro"><p className="index">03 · {c.nav.guide}</p><h2>{c.guideTitle}</h2><p>{c.guideSub}</p></div>
      <div className="method-grid">{c.cards.map((card, index) => <article key={card.title}><span>0{index + 1}</span><div><h3>{card.title}</h3><p>{card.body}</p></div></article>)}</div>
    </div></section>
    <section className="home-reading-section"><div className="section-shell">
      <div className="home-section-heading"><div><p className="index">04 · {c.nav.articles}</p><h2>{c.pages.articles.title}</h2></div><Link href={`/${lang}/articles`}>{c.nav.articles} →</Link></div>
      <div className="home-article-grid">{articleSlugs.map((slug, index) => {
        const article = articles[lang][slug];
        return <Link className="home-article-card" key={slug} href={`/${lang}/articles/${slug}`}>
          <div className="home-article-thumb"><span>0{index + 1}</span><small>{article.readTime}</small><strong>{index === 0 ? c.nav.spreadsheet : index === 1 ? c.nav.qc : c.nav.shipping}</strong></div>
          <div><h3>{article.title}</h3><p>{article.description}</p><b>{c.open} →</b></div>
        </Link>;
      })}</div>
    </div></section>
    <section className="home-faq-section"><div className="section-shell">
      <div className="home-section-heading"><div><p className="index">05 · {c.nav.faq}</p><h2>{c.pages.faq.title}</h2><p>{c.pages.faq.intro}</p></div><Link href={`/${lang}/faq`}>{c.nav.faq} →</Link></div>
      <div className="home-faq-grid">{c.pages.faq.sections.map((item, index) => <Link href={`/${lang}/faq`} key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.body}</p><b>＋</b></Link>)}</div>
    </div></section>
  </>;
}

function Interior({ lang, route }: { lang: Lang; route: string }) {
  const c = copy[lang];
  const page = c.pages[route];
  const facts = officialFacts[lang][route];
  if (!page) notFound();
  return <>
    <section className="interior-hero-wrap"><div className="interior-hero section-shell"><div><p className="eyebrow"><span>{c.nav[route]}</span> {page.eyebrow}</p><h1>{page.title}</h1></div><p>{page.intro}</p></div></section>
    {facts && <section className="fact-strip"><div className="section-shell fact-strip-inner"><div><small>{facts.checked}</small><strong>{facts.label}</strong></div><ul>{facts.items.map((item) => <li key={item}>{item}</li>)}</ul></div></section>}
    {route === "finds" && <section className="section-shell interior-products"><ProductGrid lang={lang} /></section>}
    {route === "articles" ? <ArticleIndex lang={lang} /> : <section className="section-shell article-grid">{page.sections.map((section, index) => <article key={section.title}><span>{String(index + 1).padStart(2,"0")}</span><div><h2>{section.title}</h2><p>{section.body}</p></div></article>)}</section>}
    {(route === "spreadsheet" || route === "finds") && <section className="section-shell inline-search"><h2>{c.categoryTitle}</h2><SearchBox placeholder={c.search} button={c.searchButton} /></section>}
  </>;
}

function ArticleIndex({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return <section className="section-shell article-index">{articleSlugs.map((slug, index) => {
    const article = articles[lang][slug];
    return <Link className="article-card" key={slug} href={`/${lang}/articles/${slug}`}>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <div><small>{article.readTime}</small><h2>{article.title}</h2><p>{article.description}</p><b>{c.open} →</b></div>
    </Link>;
  })}</section>;
}

function ArticleDetail({ lang, slug }: { lang: Lang; slug: ArticleSlug }) {
  const c = copy[lang];
  const article = articles[lang][slug];
  const sourceLabels = {
    en: { basis: "Research basis", note: "Company statements are identified as Hacoo’s own claims; review-platform figures are dated snapshots and may change." },
    de: { basis: "Recherchegrundlage", note: "Unternehmensaussagen werden als eigene Angaben von Hacoo gekennzeichnet; Bewertungszahlen sind datierte Momentaufnahmen und können sich ändern." },
    es: { basis: "Base de la investigación", note: "Las afirmaciones de la empresa se identifican como datos de Hacoo; las cifras de reseñas son capturas fechadas y pueden cambiar." },
    fr: { basis: "Base de recherche", note: "Les déclarations de l’entreprise sont identifiées comme telles ; les notes publiques sont des instantanés datés susceptibles de changer." },
    it: { basis: "Base della ricerca", note: "Le dichiarazioni aziendali sono indicate come dati di Hacoo; le valutazioni pubbliche sono istantanee datate e possono cambiare." },
  }[lang];
  const currentIndex = articleSlugs.indexOf(slug);
  const nextSlug = articleSlugs[(currentIndex + 1) % articleSlugs.length];
  const nextArticle = articles[lang][nextSlug];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    inLanguage: lang,
    dateModified: "2026-08-28",
    mainEntityOfPage: `${site}/${lang}/articles/${slug}`,
    isBasedOn: articleSourceUrls[slug],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className="article-detail-hero"><div className="section-shell">
      <div className="breadcrumbs"><Link href={`/${lang}`}>{c.nav.home}</Link><span>›</span><Link href={`/${lang}/articles`}>{c.nav.articles}</Link></div>
      <p className="article-kicker">{c.nav.articles} · {article.readTime}</p>
      <h1>{article.title}</h1><p>{article.description}</p>
      {article.factChecked && <small className="article-source-line">{article.factChecked}</small>}
    </div></section>
    <article className="section-shell article-prose">
      {article.sources && <div className="research-basis"><strong>{sourceLabels.basis}</strong><p>{article.sources.map((source, index) => <span key={source}><a href={articleSourceUrls[slug][index]} target="_blank" rel="noopener noreferrer">{source}</a>{index < article.sources!.length - 1 ? " · " : ""}</span>)}</p><small>{sourceLabels.note}</small></div>}
      <ArticleVisual lang={lang} slug={slug} />
      {article.sections.map((section, index) => <section key={section.title} id={`section-${index + 1}`}>
        <span>{String(index + 1).padStart(2, "0")}</span><div><h2>{section.title}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>)}
      <aside><strong>{c.independent}</strong><p>{c.disclaimer}</p></aside>
    </article>
    <section className="section-shell next-article"><div><small>{c.nav.articles}</small><h2>{nextArticle.title}</h2></div><Link href={`/${lang}/articles/${nextSlug}`}>{c.open} →</Link></section>
  </>;
}

function ArticleVisual({ lang, slug }: { lang: Lang; slug: ArticleSlug }) {
  const c = copy[lang];
  const labels = {
    en: { rating: "Public rating snapshot · 28 Aug 2026 · Platforms use different audiences and scoring methods.", other: "Other countries", days: "days", shipping: "Hacoo’s published destination guidance · checked 28 Aug 2026 · not a delivery guarantee." },
    de: { rating: "Öffentlicher Bewertungsstand · 28. Aug. 2026 · Plattformen haben unterschiedliche Zielgruppen und Methoden.", other: "Andere Länder", days: "Tage", shipping: "Veröffentlichte Zielangaben von Hacoo · geprüft am 28. Aug. 2026 · keine Liefergarantie." },
    es: { rating: "Resumen público de valoraciones · 28 ago. 2026 · Cada plataforma usa audiencias y métodos distintos.", other: "Otros países", days: "días", shipping: "Plazos por destino publicados por Hacoo · revisados el 28 ago. 2026 · no son una garantía." },
    fr: { rating: "Aperçu public des notes · 28 août 2026 · Chaque plateforme utilise un public et une méthode différents.", other: "Autres pays", days: "jours", shipping: "Délais par destination publiés par Hacoo · vérifiés le 28 août 2026 · sans garantie." },
    it: { rating: "Riepilogo pubblico delle valutazioni · 28 ago. 2026 · Le piattaforme usano pubblici e metodi diversi.", other: "Altri paesi", days: "giorni", shipping: "Tempi per destinazione pubblicati da Hacoo · verificati il 28 ago. 2026 · non sono una garanzia." },
  }[lang];
  if (slug === "hacoo-spreadsheet-live-source") return <figure className="article-product-strip">
    {products.slice(0, 3).map((product) => <a key={product.href} href={product.href} target="_blank" rel="noopener noreferrer"><img src={product.image} alt={product.name} width="750" height="750" loading="lazy" /><span>{product.name}<b>{product.price} ↗</b></span></a>)}
    <figcaption>{c.productSub}</figcaption>
  </figure>;
  if (slug === "hacoo-reviews-2026") return <figure className="rating-snapshot">
    <div><span>Apple App Store UK</span><b>4.7 / 5</b><i style={{ width: "94%" }} /></div>
    <div><span>Google Play</span><b>4.0 / 5</b><i style={{ width: "80%" }} /></div>
    <div><span>Trustpilot</span><b>3.6 / 5</b><i style={{ width: "72%" }} /></div>
    <figcaption>{labels.rating}</figcaption>
  </figure>;
  return <figure className="shipping-snapshot">
    <div><span>UK · FR · DE · IT</span><b>15–25</b><small>{labels.days}</small></div>
    <div><span>ES</span><b>15–30</b><small>{labels.days}</small></div>
    <div><span>{labels.other}</span><b>25–65</b><small>{labels.days}</small></div>
    <figcaption>{labels.shipping}</figcaption>
  </figure>;
}

function Footer({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return <footer><div className="section-shell footer-grid"><div className="brand footer-brand"><img src="/hacoo-logo.png" alt="Hacoo" width="235" height="58" /><small>{c.independent}</small></div><p>{c.disclaimer}</p><div className="footer-links"><Link href={`/${lang}/faq`}>{c.nav.faq}</Link><Link href={`/${lang}/articles`}>{c.nav.articles}</Link><a href="https://cnfanssp.com/AllProducts/" target="_blank" rel="noopener noreferrer">{c.viewAll} ↗</a></div></div></footer>;
}

export default async function SitePage({ params }: Props) {
  const { lang: rawLang, slug = [] } = await params;
  if (!validLang(rawLang) || slug.length > 2) notFound();
  const route = slug[0] || "";
  if (!routes.includes(route as (typeof routes)[number])) notFound();
  const articleSlug = slug[1] as ArticleSlug | undefined;
  if (slug.length === 2 && (route !== "articles" || !articleSlugs.includes(articleSlug as ArticleSlug))) notFound();
  const routePath = slug.join("/");
  return <div className="site-wrap" lang={rawLang}><Header lang={rawLang} route={routePath} /><main>{articleSlug ? <ArticleDetail lang={rawLang} slug={articleSlug} /> : route ? <Interior lang={rawLang} route={route} /> : <Home lang={rawLang} />}</main><Footer lang={rawLang} /><a className="whatsapp" href="https://wa.me/message/3V2YFNRFGBI2O1" target="_blank" rel="noopener noreferrer" aria-label={copy[rawLang].whatsapp}>WA</a></div>;
}
