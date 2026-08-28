import { ArticleSlug, articleSlugs, categories, copy, CoreRouteKey, decisionCopy, Lang, languages, localizedPath, products, RouteKey, TrustRouteKey, trustRouteKeys } from "./site-data";
import { localizedContent } from "./localized-content";
import { localizedArticles } from "./localized-articles";
import { trustContent, trustNav } from "./trust-content";

const DOMAIN = "https://hacoovip.com";
const CATALOG = "https://cnfanssp.com/AllProducts/";
const WHATSAPP = "https://wa.me/message/3V2YFNRFGBI2O1";
const routePaths: CoreRouteKey[] = ["", "spreadsheet", "finds", "qc-guide", "shipping", "returns", "articles", "faq"];

function isTrustRoute(route: RouteKey | "article"): route is TrustRouteKey {
  return trustRouteKeys.includes(route as TrustRouteKey);
}

function live(url: string, label: string) {
  const target = new URL(url);
  target.searchParams.set("utm_source", "hacoovip.com");
  target.searchParams.set("utm_medium", "referral");
  target.searchParams.set("utm_campaign", "hacoo-product-comparison");
  target.searchParams.set("utm_content", label);
  return target.toString();
}

function Header({ lang, routePath }: { lang: Lang; routePath: string }) {
  const t = copy[lang];
  const l = localizedContent[lang];
  return <header className="header">
    <a className="logo" href={localizedPath(lang)} aria-label="Hacoo home"><img src="/hacoo.png" alt="Hacoo" width="200" height="64"/></a>
    <nav aria-label="Primary navigation">{routePaths.map((path, i) => <a key={path} href={localizedPath(lang, path)}>{t.nav[i]}</a>)}</nav>
    <div className="header-actions">
      <details className="lang"><summary>{lang.toUpperCase()}⌄</summary><div>{languages.map(x => <a key={x.code} href={localizedPath(x.code, routePath)} lang={x.code}>{x.label}<span>{x.short}</span></a>)}</div></details>
      <a className="catalog-button" href={live(CATALOG, "header-catalog")} target="_blank" rel="nofollow sponsored noopener">{t.open}</a>
      <details className="menu"><summary>{l.common.menu}</summary><div>{routePaths.map((path, i) => <a key={path} href={localizedPath(lang, path)}>{t.nav[i]}</a>)}</div></details>
    </div>
  </header>;
}

function Search({ lang, compact = false }: { lang: Lang; compact?: boolean }) {
  const t = copy[lang];
  return <form className={`search${compact ? " compact" : ""}`} action="https://cnfanssp.com/search.html" method="get" target="_blank">
    <label className="sr-only" htmlFor={`search-${compact}`}>{t.search}</label><input id={`search-${compact}`} name="keywords" placeholder={t.placeholder}/><input type="hidden" name="channelid" value="2"/><input type="hidden" name="utm_source" value="hacoovip.com"/><button>{t.search}<span>↗</span></button>
  </form>;
}

function CategoryGrid({ lang }: { lang: Lang }) {
  const l = localizedContent[lang];
  return <div className="category-grid">{categories.map(([name, destination, no], i) => <a key={name} href={live(destination, `category-${name.toLowerCase().replace(/\W+/g, "-")}`)} target="_blank" rel="nofollow sponsored noopener"><span>{no}</span><h3>{l.categories[i]}</h3><b>{l.common.explore} ↗</b></a>)}</div>;
}

function ProductGrid({ lang }: { lang: Lang }) {
  const l = localizedContent[lang];
  return <div className="product-grid">{products.map((p, i) => <a key={p.id} href={live(`https://cnfanssp.com/AllProducts/${p.id}.html`, `find-${p.id}`)} target="_blank" rel="nofollow sponsored noopener"><div className="product-image"><img src={p.image} alt={`${p.title} — ${l.productCategories[p.category]}`} width="800" height="800" loading={i ? "lazy" : "eager"}/><span>{p.price}</span></div><small>{l.productCategories[p.category]} · {p.sourcePrice} {l.common.sourcePrice} · {copy[lang].updated}</small><h3>{p.title}</h3><b>{copy[lang].result} ↗</b></a>)}</div>;
}

function Heading({ index, title, text }: { index: string; title: string; text: string }) {
  return <div className="heading"><span>{index}</span><h2>{title}</h2><p>{text}</p></div>;
}

function ArticleCards({ lang }: { lang: Lang }) {
  const l = localizedContent[lang];
  return <div className="article-cards">{articleSlugs.map((slug, i) => { const a = localizedArticles[lang][slug]; return <a key={slug} href={localizedPath(lang, `articles/${slug}`)}><div><img src={a.image} alt={a.imageAlt} width="800" height="800" loading="lazy"/><span>0{i + 1}</span></div><small>{a.keyword.toUpperCase()} · {l.common.minutes}</small><h3>{a.title}</h3><p>{a.excerpt}</p><b>{copy[lang].read} →</b></a>; })}</div>;
}

function FaqList({ lang }: { lang: Lang }) {
  return <div className="faq-list">{localizedContent[lang].faq.map(([q, a], i) => <details key={q} open={i === 0}><summary><span>0{i + 1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div>;
}

function Home({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const d = decisionCopy[lang];
  const l = localizedContent[lang];
  return <>
    <section className="hero editorial-hero"><div className="hero-copy"><span>{d.heroEyebrow}</span><h1>{d.heroTitle}</h1><p>{d.heroText}</p><Search lang={lang}/><div className="proof">{t.proof.map((x, i) => <b key={x}><span>0{i + 1}</span>{x}</b>)}</div></div><aside className="hero-collage"><figure className="collage-main"><img src="/products/cnfanssp-travis-hoodie.webp" alt="Travis Scott Hoodie" width="750" height="750"/><figcaption><span>{l.home.newCheck}</span><b>{l.home.imageTitleUrl}</b></figcaption></figure><figure className="collage-small"><img src="/products/cnfanssp-prada-backpack.webp" alt="PRADA Backpacks Bags" width="750" height="750"/><figcaption>{l.home.accessoryCaption}</figcaption></figure><div className="collage-note"><span>{l.home.howItWorks}</span><b>{l.home.workflow.split("\n").map((x, i) => <span key={x}>{x}{i === 0 && <br/>}</span>)}</b><p>{l.home.noClaims}</p></div></aside></section>
    <section className="section"><Heading index={l.home.categoryIndex} title={t.categoriesTitle} text={t.categoriesText}/><CategoryGrid lang={lang}/></section>
    <section className="section clay"><Heading index={l.home.findsIndex} title={d.findsTitle} text={d.findsText}/><ProductGrid lang={lang}/><p className="price-note">{l.home.priceNote}</p></section>
    <section className="method"><div><span>{l.home.methodIndex}</span><h2>{d.methodTitle}</h2><p>{d.methodText}</p><a href={localizedPath(lang, "qc-guide")}>{t.nav[3]} →</a></div><div className="steps">{d.steps.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section ink"><Heading index={l.home.articlesIndex} title={t.articlesTitle} text={t.articlesText}/><ArticleCards lang={lang}/></section>
    <section className="faq-section"><Heading index={l.home.faqIndex} title={t.faqTitle} text={l.home.faqText}/><FaqList lang={lang}/></section>
  </>;
}

function PageHero({ lang, route }: { lang: Lang; route: Exclude<CoreRouteKey, ""> }) { const p = localizedContent[lang].pageInfo[route]; return <section className="page-hero"><span>{p.eyebrow}</span><h1>{p.title}</h1><p>{p.text}</p></section>; }

function Checklist({ items }: { items: [string, string][] }) { return <div className="checklist">{items.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</div>; }

function BasicPage({ lang, route }: { lang: Lang; route: Exclude<CoreRouteKey, ""> }) {
  const l = localizedContent[lang];
  if (route === "spreadsheet") { const p = l.spreadsheet; return <><PageHero lang={lang} route={route}/><section className="search-band"><div><span>{p.searchLabel}</span><h2>{p.searchTitle}</h2></div><Search lang={lang} compact/></section><section className="section"><Heading index={p.headingIndex} title={p.headingTitle} text={p.headingText}/><CategoryGrid lang={lang}/></section><section className="editorial soft-panel"><aside><span>{p.asideLabel}</span><h2>{p.asideTitle}</h2><p>{p.asideText}</p></aside><Checklist items={p.items.map(x => [x[0], x[1]])}/></section><p className="source-line">{p.source}</p></>; }
  if (route === "finds") { const p = l.finds; return <><PageHero lang={lang} route={route}/><section className="section clay"><Heading index={p.headingIndex} title={p.headingTitle} text={p.headingText}/><ProductGrid lang={lang}/><p className="price-note">{p.priceNote}</p></section><section className="editorial"><aside><span>{p.asideLabel}</span><h2>{p.asideTitle}</h2><p>{p.asideText}</p></aside><Checklist items={p.items.map(x => [x[0], x[1]])}/></section></>; }
  if (route === "qc-guide") { const p = l.qc; return <><PageHero lang={lang} route={route}/><section className="editorial"><aside><span>{p.asideLabel}</span><h2>{p.asideTitle}</h2><p>{p.asideText}</p></aside><Checklist items={p.items.map(x => [x[0], x[1]])}/></section><p className="source-line">{p.source}</p></>; }
  if (route === "shipping") { const p = l.shipping; return <><PageHero lang={lang} route={route}/><section className="fact-strip">{p.facts.map(([value, text]) => <div key={value}><b>{value}</b><span>{text}</span></div>)}</section><section className="editorial"><aside><span>{p.asideLabel}</span><h2>{p.asideTitle}</h2><p>{p.asideText}</p></aside><Checklist items={p.items.map(x => [x[0], x[1]])}/></section><p className="source-line">{p.source}</p></>; }
  if (route === "returns") { const p = l.returns; return <><PageHero lang={lang} route={route}/><section className="fact-strip coral">{p.facts.map(([value, text]) => <div key={value}><b>{value}</b><span>{text}</span></div>)}</section><section className="editorial"><aside><span>{p.asideLabel}</span><h2>{p.asideTitle}</h2><p>{p.asideText}</p></aside><Checklist items={p.items.map(x => [x[0], x[1]])}/></section><p className="source-line">{p.source}</p></>; }
  if (route === "articles") return <><PageHero lang={lang} route={route}/><section className="section ink"><ArticleCards lang={lang}/></section></>;
  return <><PageHero lang={lang} route="faq"/><section className="faq-page"><FaqList lang={lang}/></section></>;
}

function TrustPage({ lang, route }: { lang: Lang; route: TrustRouteKey }) {
  const p = trustContent[lang][route];
  return <article className="trust-page"><header><span>{p.eyebrow}</span><h1>{p.title}</h1><p>{p.intro}</p></header><div className="trust-sections">{p.sections.map((section, i) => <section key={section.title}><span>{String(i + 1).padStart(2, "0")}</span><div><h2>{section.title}</h2><p>{section.text}</p></div></section>)}</div>{route === "contact" && <a className="trust-contact" href={WHATSAPP} target="_blank" rel="noopener">WhatsApp →</a>}</article>;
}

function ArticlePage({ lang, slug }: { lang: Lang; slug: ArticleSlug }) {
  const a = localizedArticles[lang][slug]; const l = localizedContent[lang];
  return <article className="article-page"><header><a href={localizedPath(lang, "articles")}>← {copy[lang].nav[6]}</a><span>{l.pageInfo.articles.eyebrow} · {copy[lang].updated}</span><h1>{a.title}</h1><p>{a.excerpt}</p></header><section className="article-sources"><b>{l.common.sourcesMethodology}</b><p>{a.sourceNote} {l.common.researchSuffix}</p><ul>{a.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.name} ↗</a><span>{l.common.checked}: 28 August 2026 · {source.supports[lang]}</span></li>)}</ul></section><figure className="article-figure"><img src={a.image} alt={a.imageAlt} width="800" height="800"/><figcaption>{a.imageCaption}</figcaption></figure><div className="article-body">{a.sections.map(([title, text], i) => <section key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}</div><aside className="article-cta"><span>{l.common.nextStep}</span><h2>{l.common.testWorkflow}</h2><a href={localizedPath(lang, "spreadsheet")}>{copy[lang].nav[1]} →</a></aside></article>;
}

function Schemas({ lang, route, articleSlug }: { lang: Lang; route: RouteKey | "article"; articleSlug?: ArticleSlug }) {
  const path = route === "article" ? `articles/${articleSlug}` : route; const url = `${DOMAIN}${localizedPath(lang, path)}`;
  const la = articleSlug ? localizedArticles[lang][articleSlug] : null; const l = localizedContent[lang];
  const pageTitle = route === "article" ? la!.title : route === "" ? decisionCopy[lang].heroTitle : isTrustRoute(route) ? trustContent[lang][route].title : l.pageInfo[route].title;
  const graph: object[] = [{ "@type": "WebSite", "@id": `${DOMAIN}/#website`, name: "Hacoo VIP", url: DOMAIN, inLanguage: lang }, { "@type": "Organization", "@id": `${DOMAIN}/#publisher`, name: "Hacoo VIP Research", url: DOMAIN, logo: { "@type": "ImageObject", url: `${DOMAIN}/hacoo.png` } }, { "@type": "WebPage", name: pageTitle, url, inLanguage: lang, isPartOf: { "@id": `${DOMAIN}/#website` } }];
  if (route === "" || route === "finds") graph.push({ "@type": "ItemList", name: "Matched Hacoo product finds", numberOfItems: products.length, itemListElement: products.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.title, image: `${DOMAIN}${p.image}`, url: `https://cnfanssp.com/AllProducts/${p.id}.html` })) });
  if (route === "" || route === "spreadsheet") graph.push({ "@type": "ItemList", name: "Hacoo spreadsheet categories", numberOfItems: categories.length, itemListElement: categories.map(([name, destination], i) => ({ "@type": "ListItem", position: i + 1, name, url: destination })) });
  if (route === "faq") graph.push({ "@type": "FAQPage", mainEntity: l.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });
  if (route === "article") graph.push({ "@type": "Article", headline: la!.title, description: la!.excerpt, image: `${DOMAIN}${la!.image}`, datePublished: "2026-08-28", dateModified: "2026-08-28", mainEntityOfPage: url, inLanguage: lang, author: { "@type": "Organization", name: "Hacoo VIP Research", url: `${DOMAIN}${localizedPath(lang, "about")}` }, publisher: { "@id": `${DOMAIN}/#publisher` }, keywords: [la!.keyword, "Hacoo product comparison", "Hacoo decision guide"], about: [{ "@type": "Thing", name: "Hacoo product comparison" }, { "@type": "Thing", name: la!.keyword }] });
  if (route !== "") graph.push({ "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: l.common.home, item: `${DOMAIN}${localizedPath(lang)}` }, { "@type": "ListItem", position: 2, name: pageTitle, item: url }] });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}/>;
}

function Footer({ lang }: { lang: Lang }) { const l = localizedContent[lang]; return <footer><a className="logo inverse" href={localizedPath(lang)}><img src="/hacoo.png" alt="Hacoo" width="200" height="64"/></a><p>{copy[lang].disclaimer}</p><nav className="footer-links" aria-label="Editorial and legal">{trustRouteKeys.map(route => <a key={route} href={localizedPath(lang, route)}>{trustNav[lang][route]}</a>)}</nav><div><a href={localizedPath(lang, "shipping")}>{l.common.shippingFacts}</a><a href={localizedPath(lang, "returns")}>{l.common.returnsFacts}</a><span>hacoovip.com · 2026</span></div></footer>; }

export default function Site({ lang, route, articleSlug, routePath }: { lang: Lang; route: RouteKey | "article"; articleSlug?: ArticleSlug; routePath: string }) {
  const l = localizedContent[lang]; return <main lang={lang}><Schemas lang={lang} route={route} articleSlug={articleSlug}/><Header lang={lang} routePath={routePath}/>{route === "" ? <Home lang={lang}/> : route === "article" ? <ArticlePage lang={lang} slug={articleSlug!}/> : isTrustRoute(route) ? <TrustPage lang={lang} route={route}/> : <BasicPage lang={lang} route={route}/>}<Footer lang={lang}/><a className="whatsapp" href={WHATSAPP} target="_blank" rel="noopener" aria-label={l.common.whatsapp}><span>WA</span><b>WhatsApp</b></a></main>;
}
