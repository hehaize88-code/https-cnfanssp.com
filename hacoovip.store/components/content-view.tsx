"use client";

import Link from "next/link";
import { useState } from "react";
import { hrefFor, liveProduct, products, type Locale, type RouteName } from "@/lib/site-data";
import { localizedCopy, translate } from "@/lib/i18n";
import { useSiteLocale } from "@/lib/use-site-locale";
import { ProductCard } from "./home-view";
import { SiteShell } from "./site-shell";

const pageMeta: Record<RouteName, { kicker: string; title: string; intro: string }> = {
  spreadsheet: { kicker: "SEARCH INTENT / SOURCE-CHECKED 28 AUG 2026", title: "Hacoo Spreadsheet: a visual index, not an official Hacoo feature", intro: "Hacoo's official website and app-store descriptions present a content-sharing community and marketplace. They do not describe a native spreadsheet. This independent index answers the separate search need for organised product routes without pretending otherwise." },
  finds: { kicker: "CURATED / IMAGE-MATCHED 28 AUG 2026", title: "Hacoo finds selected for a checkable product trail", intro: "A deliberately small set of products. Each card shows the same lead image as its destination route, a category and an approximate USD guide price—so the next click is clear and easy to recheck." },
  guide: { kicker: "OFFICIAL APP FACTS / PRACTICAL WORKFLOW", title: "How Hacoo works: what the official sources actually say", intro: "Hacoo describes itself as an open content-sharing community where people can share, review products, discover services and connect with others. Here is the practical version of that promise, separated from independent product-link browsing." },
  qc: { kicker: "REVIEWS / PHOTOS / REPORTING", title: "Hacoo product checks: evidence before assumptions", intro: "Official Hacoo materials say users can rate products, brands and services, and provide routes for reporting suspected intellectual-property violations. Neither statement guarantees that any individual listing is accurate, authentic or suitable." },
  shipping: { kicker: "OFFICIAL POLICY / CHECKED 28 AUG 2026", title: "Hacoo shipping times, after-sales support and refund facts", intro: "This page uses Hacoo's published Shipping & Delivery and help-centre information. The figures are official estimates, not promises, and the final order screen remains the place to confirm price and delivery options." },
  faq: { kicker: "FACT CHECK / INDEPENDENT PUBLISHER", title: "Hacoo facts worth checking before you use a product link", intro: "Concise answers based on Hacoo's website, Google Play listing, published policies and clearly labelled third-party review data. No invented guarantees and no copied customer-service script." },
  articles: { kicker: "EVIDENCE DESK / 1,200–1,800 WORD GUIDES", title: "Independent Hacoo research and shopping guides", intro: "Long-form articles built around one search intent at a time. Every article distinguishes official claims, app-store data, customer-review patterns and our own practical interpretation." },
};

const guideSteps = [
  ["01", "Understand the official product", "Hacoo's official About page and store listings call it a content-sharing community. The platform says users can share everyday life, rate products, brands and services, and connect with other users and businesses."],
  ["02", "Use the official app for platform features", "Google Play lists Hacoo under package com.saramart.android, with 10M+ downloads and a Lifestyle classification when checked on 28 August 2026. Account, order and platform-support actions belong inside the app."],
  ["03", "Treat spreadsheets as independent indexes", "The phrase 'Hacoo spreadsheet' is a web-search convention, not a feature named in the official Hacoo pages we reviewed. Use any spreadsheet as a discovery map and verify its destination before relying on it."],
  ["04", "Check region and live availability", "Recent Google Play reviews show that some users report region-selection or visibility problems. A review is an individual experience, not proof of a platform-wide rule, but it is a reason to confirm your device region and current listing state."],
  ["05", "Separate community reviews from guarantees", "Hacoo says users can rate products, brands and services. That can provide useful evidence, but a rating does not independently verify authenticity, fit, material or delivery outcome."],
  ["06", "Use the correct support route", "Hacoo's Contact page directs account, app and community questions to in-app support or service@hacoo.app. Its shipping page asks buyers to contact support immediately when an address was entered incorrectly."],
];

const qcChecks = [
  ["Identity", "Match the selected variant, title, lead image and checkout choice. A working URL is not enough if the destination now shows a different product."],
  ["Construction", "Use multiple photos to compare seams, panel alignment, hardware and repeated details. One flattering image cannot establish consistency."],
  ["Colour", "Compare photos taken under different lighting and remember that displays vary. Large colour conflicts matter more than minor shade shifts."],
  ["Material", "Treat fibre or material text as a claim and close-up photos as supporting evidence. Neither shows long-term wear, so avoid turning texture guesses into facts."],
  ["Review pattern", "Look for repeated, specific observations across recent reviews. Hacoo says reviews may cover products, brands and services; that mix means you must identify what each review actually evaluates."],
  ["IP reporting", "Hacoo publishes an intellectual-property reporting process and says suspected counterfeit or unauthorised content can be reported. Use that route when the concern is infringement, not a general quality complaint."],
];

const faqItems = [
  ["What does Hacoo officially say it is?", "Hacoo's About page and Google Play listing describe an open content-sharing community for sharing life, discovering content, rating products, brands and services, and connecting with people and businesses."],
  ["Is a Hacoo spreadsheet an official Hacoo feature?", "We found no native spreadsheet described in the official homepage, About page or Google Play description reviewed on 28 August 2026. The term is used by independent websites and social communities for organised product-link collections."],
  ["How large is the Android app?", "Google Play showed 10M+ downloads, roughly 59K reviews and a rating around 4.1 stars when checked on 28 August 2026. These live figures change, so the store listing is the current source."],
  ["What shipping times does Hacoo publish?", "Its Shipping & Delivery page says receiving time is usually about 15–28 days, with published destination ranges of 15–25 days for the UK, France, Germany and Italy; 15–30 for Spain; and 25–65 for other countries. It also says dates are guidelines, not guarantees."],
  ["How long is the published after-sales window?", "Hacoo's Shipping & Delivery page states that after-sales support can be requested within 15 days of delivery. A separate help-centre return page also says allowed returns must be initiated within 15 days and handled through app customer service."],
  ["What do customer reviews show?", "They show mixed experiences, not one universal result. On 28 August 2026 Trustpilot displayed a 3.6 rating across about 3,279 reviews and a strongly split distribution: 50% five-star and 34% one-star. Google Play reviews also included both platform-level ratings and recent complaints."],
  ["What data does the Android listing disclose?", "Google Play says the developer may collect location, personal information and five other data types, may share personal information, photos/videos and three others, encrypts data in transit, and lets users request deletion. Open the store's Data safety section for the current declaration."],
  ["Is this an official Hacoo site?", "No. HacooVIP is an independent research and product-discovery publisher. It does not represent Hacoo, process Hacoo orders or provide Hacoo customer service."],
];

const articleCards = [
  { slug: "what-is-hacoo-app", tag: "APP EXPLAINER", title: "What Is Hacoo? The Official App, Features and Facts Explained", excerpt: "What Hacoo says it is, what the app-store data confirms, and where independent spreadsheets fit." },
  { slug: "hacoo-shipping-returns-refunds", tag: "POLICY CHECK", title: "Hacoo Shipping, Returns and Refunds: What the Published Policies Say", excerpt: "Official time ranges, the 15-day after-sales window, address changes and lost-package wording." },
  { slug: "hacoo-reviews-2026", tag: "REVIEW ANALYSIS", title: "Hacoo Reviews 2026: Ratings, Recurring Themes and How to Read Them", excerpt: "A balanced reading of Google Play, App Store and Trustpilot signals without cherry-picking." },
  { slug: "how-to-use-hacoo-spreadsheet", tag: "BEGINNER GUIDE", title: "How to Use a Hacoo Spreadsheet Without Losing the Product Trail", excerpt: "A complete workflow from the first search to the final live-listing check." },
  { slug: "hacoo-qc-photo-checklist", tag: "QC GUIDE", title: "Reading Hacoo Product Photos: A Repeatable Quality Checklist", excerpt: "How to compare shape, materials, construction, sizing and listing consistency." },
  { slug: "hacoo-size-shipping-planning", tag: "PLANNING", title: "Hacoo Size and Shipping Planning Before You Commit", excerpt: "A practical way to reduce sizing mistakes and understand delivery variables." },
];

function Spreadsheet({ locale }: { locale: Locale }) {
  const tx = (value: string) => translate(locale, value);
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? products : products.filter((product) => product.category === filter);
  return <>
    <div className="filter-row"><button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>{tx("All")}</button>{[...new Set(products.map((p) => p.category))].map((name) => <button key={name} className={filter === name ? "active" : ""} onClick={() => setFilter(name)}>{tx(name)}</button>)}</div>
    <div className="sheet-table">
      <div className="sheet-head"><span>{tx("ITEM")}</span><span>{tx("CATEGORY")}</span><span>{tx("GUIDE PRICE")}</span><span>{tx("LIVE ROUTE")}</span></div>
      {visible.map((p, index) => <div className="sheet-row" key={p.id}>
        <span className="sheet-item"><small>{String(index + 1).padStart(2, "0")}</small><img src={p.image} alt="" width="72" height="72" /><strong>{tx(p.name)}</strong></span>
        <span>{tx(p.category)}</span><span>{p.price}</span><a href={liveProduct(p.id)} target="_blank" rel="noreferrer">{tx("OPEN")} ↗</a>
      </div>)}
    </div>
    <p className="data-note">{tx("Guide prices are approximate USD conversions. Product price, availability and delivery eligibility must be confirmed on the live destination page.")}</p><SourceBand locale={locale} />
  </>;
}

function ShippingFacts({ locale }: { locale: Locale }) {
  const tx = (value: string) => translate(locale, value);
  return <><div className="policy-grid">
    <article><span>{tx("USUAL RECEIVING TIME")}</span><strong>{tx("15–28 days")}</strong><p>{tx("Published by Hacoo as a usual overall receiving-time range. It is not a guaranteed delivery date.")}</p></article>
    <article><span>UK · FR · DE · IT</span><strong>{tx("15–25 days")}</strong><p>{tx("Hacoo's destination range when the policy page was checked on 28 August 2026.")}</p></article>
    <article><span>{tx("SPAIN")}</span><strong>{tx("15–30 days")}</strong><p>{tx("The official page lists a wider upper range for Spain than for the four countries above.")}</p></article>
    <article><span>{tx("OTHER COUNTRIES")}</span><strong>{tx("25–65 days")}</strong><p>{tx("A broad published range. Live availability and the order estimate matter more than a midpoint guess.")}</p></article>
  </div><div className="shipping-grid">
    <div className="calculator-panel"><span className="section-kicker">{tx("WHAT THE POLICY ADDS")}</span><h2>{tx("Processing, split parcels and delays")}</h2><p className="policy-copy">{tx("Hacoo says order processing normally takes 3–5 business days and that its fastest express shipping time is 5–7 working days. It defines receiving time as processing time plus shipping time. The page also says pre-order or back-order items may ship separately from available items, and that delays can occur because some products ship from overseas vendors.")}</p><p className="data-note">{tx("Do not add the fastest express figure to every order. It is a best-case shipping statement, not the default estimate.")}</p></div>
    <div className="shipping-factors"><h2>{tx("After the order")}</h2>{[["01", "Wrong address", "The official page tells buyers to contact Hacoo immediately because there may be only a small correction window."], ["02", "After-sales window", "Hacoo states that support can be requested within 15 days of delivery; eligibility still depends on following its instructions."], ["03", "Lost or stolen", "The policy says a parcel marked delivered but not received should first be reported to the relevant carrier, with Hacoo support available for further questions."], ["04", "Support route", "Hacoo's Contact page directs account and app questions to in-app chat or service@hacoo.app."]].map(([n,t,b]) => <article key={n}><span>{n}</span><div><h3>{tx(t)}</h3><p>{tx(b)}</p></div></article>)}</div>
  </div><SourceBand locale={locale} /> </>;
}

function SourceBand({ locale }: { locale: Locale }) {
  const tx = (value: string) => translate(locale, value);
  return <aside className="source-band"><strong>{tx("PRIMARY SOURCES")}</strong><div><span>{tx("Hacoo About Us")}</span><span>{tx("Google Play listing")}</span><span>{tx("Hacoo Shipping & Delivery")}</span><span>{tx("Hacoo IP reporting")}</span></div><p>{tx("Facts checked 28 August 2026. Sources are named for reproducibility; official policies, ratings and app features can change.")}</p></aside>;
}

export function ContentView({ page, locale = "en" }: { page: RouteName; locale?: Locale }) {
  const { locale: activeLocale } = useSiteLocale(locale);
  const c = localizedCopy(activeLocale);
  const tx = (value: string) => translate(activeLocale, value);
  const meta = pageMeta[page];
  return <SiteShell locale={locale}><main className="inner-main">
    <header className="inner-hero"><span className="section-kicker">{tx(meta.kicker)}</span><h1>{tx(meta.title)}</h1><p>{tx(meta.intro)}</p></header>
    {page === "spreadsheet" && <Spreadsheet locale={activeLocale} />}
    {page === "finds" && <><div className="product-grid finds-grid">{products.map((product) => <ProductCard key={product.id} product={product} c={c} locale={activeLocale} />)}</div><section className="editorial-note"><span>{tx("SELECTION STANDARD")}</span><h2>{tx("Image match first. Useful category second. Hype last.")}</h2><p>{tx("We keep the featured collection intentionally small. A listing must have a stable live destination, a lead image that matches the card and enough detail for a visitor to continue their own review. Inclusion is not an endorsement or a quality guarantee.")}</p></section><SourceBand locale={activeLocale} /></>}
    {page === "guide" && <div className="step-list">{guideSteps.map(([n,t,b]) => <article key={n}><span>{n}</span><div><h2>{tx(t)}</h2><p>{tx(b)}</p></div></article>)}</div>}
    {page === "guide" && <SourceBand locale={activeLocale} />}
    {page === "qc" && <><div className="qc-grid">{qcChecks.map(([t,b], index) => <article key={t}><span>{String(index + 1).padStart(2,"0")}</span><h2>{tx(t)}</h2><p>{tx(b)}</p></article>)}</div><aside className="decision-band"><span>{tx("STOP SIGNAL")}</span><strong>{tx("If the title, selected variant and product images conflict, do not assume which one is correct.")}</strong><p>{tx("For intellectual-property concerns, use Hacoo's published infringement route. For order or account issues, use in-app support or the official service address.")}</p></aside><SourceBand locale={activeLocale} /></>}
    {page === "shipping" && <ShippingFacts locale={activeLocale} />}
    {page === "faq" && <><div className="faq-list">{faqItems.map(([q,a], index) => <details key={q} open={index === 0}><summary><span>{String(index + 1).padStart(2,"0")}</span>{tx(q)}<b>+</b></summary><p>{tx(a)}</p></details>)}</div><SourceBand locale={activeLocale} /></>}
    {page === "articles" && <><div className="research-note"><strong>{tx("Editorial order")}</strong><span>{tx("Start with entity clarity, then answer policy and trust questions, then publish use-case guides. This sequence creates a connected topic cluster instead of isolated keyword pages.")}</span></div><div className="article-cards">{articleCards.map((article, index) => <Link key={article.slug} href={hrefFor(activeLocale, `articles/${article.slug}`)}><span>{tx(article.tag)}</span><small>{String(index + 1).padStart(2,"0")}</small><h2>{tx(article.title)}</h2><p>{tx(article.excerpt)}</p><b>{tx("READ ARTICLE")} ↗</b></Link>)}</div></>}
    <section className="route-cta"><div><span className="section-kicker">{tx("LIVE CATALOG")}</span><h2>{tx("Ready to continue with a current product route?")}</h2></div><a className="button primary" href="https://cnfanssp.com/AllProducts/" target="_blank" rel="noreferrer">{tx("Open live catalog")} ↗</a></section>
  </main></SiteShell>;
}
