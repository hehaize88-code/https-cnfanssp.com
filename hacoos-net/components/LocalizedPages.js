import Link from "next/link";
import { Arrow, CheckIcon } from "./Icons";
import { CategoryCard, ProductCard } from "./Cards";
import HeroSearch from "./HeroSearch";
import StructuredData from "./StructuredData";
import { createPageMetadata } from "@/app/seo";
import { CATALOG_REVIEW, categories, guides, guideContent, DESTINATION, products, SITE_URL } from "@/app/data";
import { getLocalizedDepth } from "@/app/localizedDepth";
import { absoluteLocalizedUrl, getCopy, localizeGuides, localizePath } from "@/app/i18n";
import { getLocalizedResearch } from "@/app/localizedResearch";
import { wardrobeGapArticle } from "@/app/wardrobeGapArticle";

function getLocalizedCatalog(locale) {
  const research = getLocalizedResearch(locale);
  const localizedCategories = categories.map((category) => ({ ...category, ...research.categories[category.slug] }));
  const categoryNames = Object.fromEntries(localizedCategories.map((category) => [category.slug, category.name]));
  const localizedProducts = products.map((product) => ({ ...product, ...research.products[product.slug], category: categoryNames[product.categorySlug] }));
  return { research, localizedCategories, localizedProducts };
}

export function LocalizedHome({ locale }) {
  const copy = getCopy(locale);
  const depth = getLocalizedDepth(locale);
  const { localizedCategories, localizedProducts } = getLocalizedCatalog(locale);
  const localizedGuides = localizeGuides(guides, locale);
  const schema = { "@context": "https://schema.org", "@type": "WebPage", name: `Hacoos — ${copy.home.title.join(" ")}`, url: absoluteLocalizedUrl("/", locale), inLanguage: locale };
  return <div className="localized-shell home-page club-home" lang={locale}><StructuredData data={schema}/>
    <section className="club-hero"><div className="wrap club-hero-grid"><div className="club-hero-copy"><div className="club-kicker"><span>{copy.home.eyebrow}</span><b>{copy.home.trust[0]}</b></div><h1>{copy.home.title[0]}<br/><em>{copy.home.title[1]} {copy.home.title[2]}</em></h1><p>{copy.home.lead}</p><div className="hero-actions"><Link className="button primary" href={localizePath("/spreadsheet",locale)}>{copy.nav.spreadsheet} <Arrow/></Link><Link className="button quiet" href={localizePath("/categories",locale)}>{copy.home.browse}</Link></div><div className="club-mini-proof">{copy.home.trust.map((item)=><span key={item}>{item}</span>)}</div></div>
      <div className="club-collage"><figure className="club-photo club-photo-main"><img src="/products/shoe-performance.webp" alt={localizedCategories[0].name}/><figcaption>{localizedCategories[0].name} / 01</figcaption></figure><figure className="club-photo club-photo-small"><img src="/products/live-6427.jpg" alt={localizedCategories[6].name}/><figcaption>{localizedCategories[6].name} / 07</figcaption></figure><div className="club-burst"><strong>08</strong><span>{copy.nav.categories}</span></div><div className="club-note"><span>{copy.home.processLabel}</span><b>{copy.home.processText}</b></div></div></div>
      <div className="wrap club-search-dock"><HeroSearch locale={locale}/><div className="club-search-meta"><span>{copy.home.visit}</span><b>{copy.nav.live} ↗</b></div></div>
      <nav className="wrap club-shortcuts" aria-label={copy.home.guideLabel}><Link href={localizePath("/categories",locale)}><span>01</span>{copy.nav.categories}<Arrow size={16}/></Link><Link href={localizePath("/guides/qc-photo-checklist",locale)}><span>02</span>QC<Arrow size={16}/></Link><Link href={localizePath("/guides/size-guide",locale)}><span>03</span>{localizedGuides.find((guide)=>guide.slug==="size-guide")?.title}<Arrow size={16}/></Link><Link href={localizePath("/guides/shipping-planning",locale)}><span>04</span>{localizedGuides.find((guide)=>guide.slug==="shipping-planning")?.title}<Arrow size={16}/></Link></nav>
    </section>
    <section className="club-proof wrap"><div className="club-proof-heading"><span className="section-label">{copy.about.ruleLabel}</span><h2>{copy.about.ruleTitle}</h2><p>{copy.about.main}</p></div><div className="club-proof-cards">{depth.about.steps.map(([title,text],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="club-directory"><div className="wrap"><div className="section-heading"><div><span className="section-label">{copy.home.chooseLabel}</span><h2>{copy.home.chooseTitle}</h2></div><p>{copy.home.chooseText}</p></div><div className="category-grid">{localizedCategories.slice(0,6).map((category,index)=><CategoryCard category={category} index={index} locale={locale} key={category.slug}/>)}</div><div className="center-action"><Link className="button outline" href={localizePath("/categories",locale)}>{copy.home.allCategories} <Arrow/></Link></div></div></section>
    <section className="club-method"><div className="wrap club-method-grid"><div className="club-method-copy"><span className="section-label inverse">{copy.home.processLabel}</span><h2>{copy.home.processTitle}</h2><p>{copy.home.processText}</p><Link className="button light" href={localizePath("/guides/how-to-use-hacoo-spreadsheet",locale)}>{copy.home.read} <Arrow/></Link></div><ol className="club-method-list">{copy.home.processSteps.map(([title,text],index)=><li key={title}><span>{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>
    <section className="section wrap club-products"><div className="section-heading compact"><div><span className="section-label">{copy.nav.live}</span><h2>{copy.home.chooseTitle}</h2></div><a className="text-link large" href={DESTINATION+"/AllProducts/"} target="_blank" rel="noopener noreferrer">{copy.home.visit} <Arrow/></a></div><div className="product-grid">{localizedProducts.map((product)=><ProductCard product={product} locale={locale} key={product.slug}/>)}</div><p className="data-note">{copy.footer.disclaimer}</p></section>
    <section className="club-journal"><div className="wrap"><div className="section-heading"><div><span className="section-label">{copy.home.guideLabel}</span><h2>{copy.home.guideTitle}</h2></div><p>{copy.home.guideText}</p></div><div className="guide-grid">{localizedGuides.slice(0,4).map((guide,index)=><Link href={localizePath(`/guides/${guide.slug}`,locale)} className="guide-card" key={guide.slug}><span className="guide-number">0{index+1}</span><div><small>{guide.read}</small><h3>{guide.title}</h3><p>{guide.short}</p><span className="text-link">{copy.home.read}<Arrow size={16}/></span></div></Link>)}</div></div></section>
    <section className="section wrap club-faq"><div className="club-faq-intro"><span className="section-label">{copy.home.faqLabel}</span><h2>{copy.home.faqTitle}</h2><p>{copy.home.faqText}</p><Link className="button outline" href={localizePath("/faq",locale)}>{copy.home.faqLink}<Arrow/></Link></div><div className="faq-list">{copy.faqPage.items.slice(0,4).map(([q,a],index)=><details key={q} open={index===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
  </div>;
}

export function LocalizedSpreadsheet({ locale }) {
  const copy = getCopy(locale);
  const page = copy.spreadsheet;
  const { research, localizedCategories } = getLocalizedCatalog(locale);
  const extra = research.static.spreadsheet;
  const schema = { "@context": "https://schema.org", "@type": "WebPage", name: page.shortTitle, url: absoluteLocalizedUrl("/spreadsheet",locale), inLanguage: locale };
  return <div className="localized-shell" lang={locale}><StructuredData data={schema}/><section className="page-hero lime-hero"><div className="wrap narrow"><span className="section-label">{page.eyebrow}</span><h1>{page.title[0]}<br/>{page.title[1]}</h1><p>{page.lead}</p><div className="hero-actions"><Link className="button dark" href={localizePath("/categories",locale)}>{page.choose} <Arrow/></Link><Link className="button quiet-dark" href={localizePath("/guides/how-to-use-hacoo-spreadsheet",locale)}>{page.how}</Link></div></div></section>
    <section className="section wrap"><div className="split-copy"><div><span className="section-label">{page.shortLabel}</span><h2>{page.shortTitle}</h2></div><div><p className="large-copy">{page.shortCopy}</p><p>{page.shortNote}</p></div></div></section>
    <section className="soft-section"><div className="wrap"><div className="section-heading compact"><div><span className="section-label">{page.browseLabel}</span><h2>{page.browseTitle}</h2></div><p>{page.browseText}</p></div><div className="category-grid">{localizedCategories.map((category,index)=><CategoryCard category={category} index={index} locale={locale} key={category.slug}/>)}</div></div></section>
    <section className="section wrap"><div className="section-heading"><div><span className="section-label">{page.checksLabel}</span><h2>{page.checksTitle}</h2></div></div><div className="check-grid">{page.checks.map(([title,text])=><div className="check-card" key={title}><CheckIcon size={24}/><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section className="dark-section"><div className="wrap process-layout"><div className="process-intro"><span className="section-label inverse">{extra.contextLabel}</span><h2>{extra.contextTitle}</h2><p>{extra.contextIntro}</p><Link className="button light" href={localizePath("/guides/what-is-a-hacoo-spreadsheet",locale)}>{extra.definitionButton} <Arrow/></Link></div><ol className="process-list">{extra.contextPoints.map(([title,text],index)=><li key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></section>
    <section className="soft-section"><div className="wrap"><div className="section-heading"><div><span className="section-label">{extra.maintenanceLabel}</span><h2>{extra.maintenanceTitle}</h2></div><p>{extra.maintenanceIntro}</p></div><div className="research-grid">{extra.maintenancePoints.map(([title,text],index)=><article className="research-card" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section wrap category-faq"><div><span className="section-label">{extra.faqLabel}</span><h2>{extra.faqTitle}</h2></div><div className="faq-list">{extra.faqs.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section></div>;
}

export function LocalizedCategories({ locale }) {
  const copy = getCopy(locale);
  const depth = getLocalizedDepth(locale);
  const page = copy.categoriesPage;
  const { research, localizedCategories } = getLocalizedCatalog(locale);
  const extra = research.static.categories;
  return <div className="localized-shell" lang={locale}><section className="page-hero simple-hero"><div className="wrap"><span className="section-label">{page.eyebrow}</span><h1>{page.title[0]}<br/><em>{page.title[1]}</em></h1><p>{page.lead}</p></div></section><section className="section wrap"><div className="category-grid">{localizedCategories.map((category,index)=><CategoryCard category={category} index={index} locale={locale} key={category.slug}/>)}</div></section><section className="soft-section"><div className="wrap split-copy"><div><span className="section-label">{copy.nav.categories}</span><h2>{depth.indexes.categoriesTitle}</h2></div><div><p className="large-copy">{depth.indexes.categoriesText}</p><p>{copy.categoryDetail.note}</p><div className="complete-source-copy"><span>{extra.completeLabel}</span>{extra.detail.map((paragraph)=><p key={paragraph}>{paragraph}</p>)}</div></div></div></section>
    <section className="section wrap"><div className="section-heading"><div><span className="section-label">{copy.nav.categories}</span><h2>{depth.category.tableTitle}</h2></div><p>{depth.indexes.categoriesText}</p></div><div className="comparison-table-wrap"><table className="comparison-table"><thead><tr><th>{copy.nav.categories}</th><th>{extra.compareFirst}</th><th>{extra.verifyLive}</th></tr></thead><tbody>{localizedCategories.map((category)=><tr key={category.slug}><th><Link href={localizePath(`/categories/${category.slug}`,locale)}>{category.name}</Link></th><td>{research.categoryResearch[category.slug].primaryCheck}</td><td>{research.categoryResearch[category.slug].liveCheck}</td></tr>)}</tbody></table></div></section></div>;
}

export function LocalizedCategory({ locale, slug }) {
  const copy = getCopy(locale);
  const depth = getLocalizedDepth(locale);
  const { research, localizedCategories, localizedProducts } = getLocalizedCatalog(locale);
  const category = localizedCategories.find((item)=>item.slug===slug);
  if (!category) return null;
  const page = copy.categoryDetail;
  const originalResearch = research.categoryResearch[slug];
  const checks = category.checklist;
  const featuredProduct = localizedProducts.find((product)=>product.categorySlug===slug);
  const verifiedListing = `${DESTINATION}${featuredProduct.listingPath}`;
  const liveSearch = `${DESTINATION}/search.html?keywords=${encodeURIComponent(featuredProduct.query)}&channelid=2&method=1`;
  const categoryUi = research.static.category;
  const reviewed = research.guideContent["what-is-a-hacoo-spreadsheet"].factBox[2][1];
  const faqItems = originalResearch.faqs;
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "CollectionPage", name: category.name, description: category.description, url: absoluteLocalizedUrl(`/categories/${slug}`,locale), inLanguage: locale, dateModified: CATALOG_REVIEW.iso }, { "@type": "ItemList", name: `${category.name} — ${categoryUi.currentReference}`, itemListElement: [{ "@type": "ListItem", position: 1, name: featuredProduct.name, url: verifiedListing }] }, { "@type": "FAQPage", inLanguage: locale, mainEntity: faqItems.map(([question,answer])=>({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }] };
  return <div className="localized-shell" lang={locale}><StructuredData data={schema}/><section className="category-hero"><div className="category-hero-image"><img src={category.image} alt={category.name}/></div><div className="category-hero-copy"><span className="section-label">{category.eyebrow} / {page.label}</span><h1>{category.name}<br/><em>{copy.nav.spreadsheet}.</em></h1><p>{category.description}</p><a className="button primary" href={`${DESTINATION}${category.destination}`} target="_blank" rel="noopener noreferrer">{page.live} {category.name} <Arrow/></a></div></section>
    <section className="section wrap"><div className="story-grid"><div><span className="section-label">{page.why}</span><h2>{page.whyTitle}</h2></div><div><p className="large-copy">{page.whyCopy}</p><p>{page.note}</p><h3>{page.checksTitle}</h3><div className="stacked-checks">{checks.map((text,index)=><div key={text}><span>0{index+1}</span><p>{text}</p></div>)}</div></div></div></section>
    <section className="verified-product-section"><div className="wrap"><div className="section-heading compact"><div><span className="section-label">{depth.category.productLabel}</span><h2>{depth.category.productTitle}</h2></div><p>{depth.category.reviewed}</p></div><article className="verified-product"><div className="verified-product-image"><img src={featuredProduct.image} alt={featuredProduct.name}/><span>{reviewed}</span></div><div className="verified-product-copy"><div className="verified-product-status"><span></span>#{featuredProduct.listingId}</div><h3>{featuredProduct.name}</h3><p>{featuredProduct.focus}</p><dl><div><dt>{categoryUi.liveCatalog}</dt><dd>{featuredProduct.catalogLabel}</dd></div><div><dt>{depth.category.updateLabel}</dt><dd>{reviewed}</dd></div></dl><div className="hero-actions"><a className="button primary" href={verifiedListing} target="_blank" rel="noopener noreferrer">{depth.category.openListing} <Arrow/></a><a className="button quiet" href={liveSearch} target="_blank" rel="noopener noreferrer">{depth.category.fallback}</a><Link className="button quiet" href={localizePath(`/products/${featuredProduct.slug}`,locale)}>{categoryUi.researchPage}</Link></div><p className="verified-product-disclosure">{depth.category.disclosure}</p></div></article></div></section>
    <section className="soft-section"><div className="wrap"><div className="section-heading"><div><span className="section-label">{depth.category.label}</span><h2>{depth.category.title}</h2></div><p>{depth.category.intro(category.name)}</p></div><div className="research-grid">{checks.map((text,index)=><article className="research-card" key={text}><span>0{index+1}</span><h3>{category.name}</h3><p>{text}</p></article>)}</div><p className="verification-note">{depth.category.reviewed}</p></div></section>
    <section className="section wrap"><div className="section-heading"><div><span className="section-label">{depth.category.tableLabel}</span><h2>{depth.category.tableTitle}</h2></div></div><div className="research-table-wrap"><table className="research-table"><thead><tr>{depth.category.tableHeaders.map((header)=><th key={header}>{header}</th>)}</tr></thead><tbody>{originalResearch.reviewRows.map(([check,record,evidence])=><tr key={check}><th>{check}</th><td>{record}</td><td>{evidence}</td></tr>)}</tbody></table></div></section>
    <section className="section wrap"><div className="story-grid"><div><span className="section-label">{categoryUi.avoidLabel}</span><h2>{categoryUi.avoidTitle}</h2></div><div><p className="large-copy">{depth.guide.intro}</p><ul className="mistake-list">{originalResearch.mistakes.map((mistake)=><li key={mistake}><CheckIcon size={18}/><span>{mistake}</span></li>)}</ul><div className="inline-links"><Link href={localizePath("/guides/how-to-use-hacoo-spreadsheet",locale)}>{copy.home.read} <Arrow size={16}/></Link><Link href={localizePath("/guides/qc-photo-checklist",locale)}>{research.static.global.qc} <Arrow size={16}/></Link></div></div></div></section>
    <section className="update-section"><div className="wrap update-layout"><div><span className="section-label">{depth.category.updateLabel}</span><h2>{depth.category.updateTitle}</h2></div><ol className="update-log"><li><time dateTime={CATALOG_REVIEW.iso}>{reviewed}</time><div><h3>#{featuredProduct.listingId}</h3><p>{depth.category.updateText}</p></div></li></ol></div></section>
    <section className="soft-section"><div className="wrap category-faq"><div><span className="section-label">FAQ</span><h2>{depth.category.faqTitle}</h2></div><div className="faq-list">{faqItems.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section></div>;
}

export function LocalizedProduct({ locale, slug }) {
  const copy = getCopy(locale);
  const depth = getLocalizedDepth(locale);
  const { research, localizedCategories, localizedProducts } = getLocalizedCatalog(locale);
  const product = localizedProducts.find((item)=>item.slug===slug);
  if (!product) return null;
  const category = localizedCategories.find((item)=>item.slug===product.categorySlug);
  const verifiedListing = `${DESTINATION}${product.listingPath}`;
  const liveSearch = `${DESTINATION}/search.html?keywords=${encodeURIComponent(product.query)}&channelid=2&method=1`;
  const productUi = research.static.product;
  const reviewed = research.guideContent["what-is-a-hacoo-spreadsheet"].factBox[2][1];
  const schema = { "@context":"https://schema.org", "@type":"WebPage", name:product.name, url:absoluteLocalizedUrl(`/products/${slug}`,locale), inLanguage:locale, dateModified:CATALOG_REVIEW.iso };
  return <div className="localized-shell" lang={locale}><StructuredData data={schema}/><section className="product-reference-hero"><div className="product-reference-image"><img src={product.image} alt={product.name}/></div><div className="product-reference-copy"><span className="section-label">{category.name} / {productUi.visualReference}</span><h1>{product.name}</h1><p>{category.description}</p><p>{product.focus}</p><div className="hero-actions"><a className="button primary" href={verifiedListing} target="_blank" rel="noopener noreferrer">{depth.category.openListing} <Arrow/></a><a className="button quiet" href={liveSearch} target="_blank" rel="noopener noreferrer">{depth.category.fallback}</a><Link className="button quiet" href={localizePath(`/categories/${product.categorySlug}`,locale)}>{productUi.openGuide}</Link></div><span className="product-reference-note">#{product.listingId} · {productUi.checked} {reviewed}</span></div></section>
    <section className="section wrap"><div className="reference-grid"><div><span className="section-label">{depth.category.label}</span><h2>{depth.category.tableTitle}</h2></div><div className="reference-copy"><p className="large-copy">{depth.category.intro(category.name)}</p><p>{depth.category.reviewed}</p><div className="reference-checks">{category.checklist.map((check,index)=><div key={check}><span>0{index+1}</span><p>{check}</p></div>)}</div><div className="reference-disclosure">{depth.category.disclosure}</div><div className="inline-links"><a href={verifiedListing} target="_blank" rel="noopener noreferrer">#{product.listingId} <Arrow size={16}/></a><a href={liveSearch} target="_blank" rel="noopener noreferrer">{depth.category.fallback} <Arrow size={16}/></a><a href={`${DESTINATION}${category.destination}`} target="_blank" rel="noopener noreferrer">{copy.nav.live} <Arrow size={16}/></a></div></div></div></section></div>;
}

export function LocalizedGuides({ locale }) {
  const copy = getCopy(locale);
  const depth = getLocalizedDepth(locale);
  const page = copy.guidesPage;
  const localizedGuides = localizeGuides(guides,locale);
  return <div className="localized-shell" lang={locale}><section className="page-hero simple-hero"><div className="wrap"><span className="section-label">{page.eyebrow}</span><h1>{page.title[0]}<br/><em>{page.title[1]}</em></h1><p>{page.lead}</p></div></section><section className="section wrap"><div className="article-index">{localizedGuides.map((guide,index)=><Link href={localizePath(`/guides/${guide.slug}`,locale)} key={guide.slug}><span className="article-no">0{index+1}</span><div><small>{guide.read}</small><h2>{guide.title}</h2><p>{guide.short}</p></div><span className="article-arrow"><Arrow/></span></Link>)}</div></section><section className="soft-section"><div className="wrap split-copy"><div><span className="section-label">{copy.nav.guides}</span><h2>{depth.indexes.guidesTitle}</h2></div><div><p className="large-copy">{depth.indexes.guidesText}</p><p>{copy.guideDetail.sections[2][1]}</p></div></div></section></div>;
}

export function LocalizedGuide({ locale, slug }) {
  const copy = getCopy(locale);
  const depth = getLocalizedDepth(locale);
  const guide = localizeGuides(guides,locale).find((item)=>item.slug===slug);
  if (!guide) return null;
  const page = copy.guideDetail;
  const localized = getLocalizedResearch(locale);
  const sourceResearch = guideContent[slug];
  const translatedResearch = slug === "hacoo-finds-wardrobe-gap-shortlist" ? wardrobeGapArticle[locale] : localized.guideContent[slug];
  const research = { ...translatedResearch, image: sourceResearch.image ? { ...translatedResearch.image, src: sourceResearch.image.src } : undefined };
  const checks = depth.guideChecks[slug] || page.steps;
  const fullSections = research.sections.map(([title,paragraphs])=>[title,Array.isArray(paragraphs)?paragraphs:[paragraphs]]);
  const bodyText=[research.intro,...research.factBox.flat(),...fullSections.flatMap(([,paragraphs])=>paragraphs),...(research.matrix?.rows.flat()||[]),...(research.faqs?.flat()||[]),...research.steps,research.sourceNote].join(" ");
  const wordCount=bodyText.trim().split(/\s+/).length;
  const pageUrl = `${absoluteLocalizedUrl(`/guides/${slug}`,locale)}/`;
  const schema = research.faqs ? { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${pageUrl}#article`, headline: guide.title, description: guide.short, mainEntityOfPage: { "@id": `${pageUrl}#webpage` }, inLanguage: locale, wordCount, author: { "@type": "Organization", name: "Hacoos Editorial" }, datePublished: "2026-08-27", dateModified: "2026-08-27" },
    { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: guide.title, inLanguage: locale, breadcrumb: { "@id": `${pageUrl}#breadcrumb` } },
    { "@type": "BreadcrumbList", "@id": `${pageUrl}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Hacoos", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: copy.nav.guides, item: `${absoluteLocalizedUrl("/guides",locale)}/` }, { "@type": "ListItem", position: 3, name: guide.title, item: pageUrl }] },
    { "@type": "FAQPage", inLanguage: locale, mainEntity: research.faqs.map(([question,answer])=>({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ] } : { "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.short, mainEntityOfPage: absoluteLocalizedUrl(`/guides/${slug}`,locale), inLanguage: locale, wordCount, author: { "@type": "Organization", name: "Hacoos Editorial" }, datePublished: "2026-08-26", dateModified: "2026-08-26" };
  return <div className="localized-shell" lang={locale}><StructuredData data={schema}/><article className="article"><header className="article-hero"><div className="wrap article-head"><span className="section-label">{research.kicker}</span><h1>{guide.title}</h1><div className="article-meta"><span>{page.byline}</span><span>{guide.read}</span><span>{wordCount.toLocaleString(locale)} {localized.static.article.words}</span><span>{research.dateLabel||page.reviewed}</span></div><p>{guide.short}</p><p className="complete-article-intro">{research.intro}</p></div></header>
    <div className="wrap article-fact-box">{research.factBox.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
    <div className="wrap article-body"><aside><span>{copy.nav.guides}</span>{fullSections.map(([title],index)=><a href={`#section-${index}`} key={`${title}-${index}`}>{title}</a>)}<a href="#evidence-check">{depth.guide.label}</a><a href="#quick-process">{page.process}</a><a href="#research-note">{page.reviewed}</a></aside><div className="article-content">
      {research.image&&<figure className="article-figure"><img src={research.image.src} alt={guide.title}/><figcaption>{research.image.caption||guide.short}</figcaption></figure>}
      <div className="complete-source-banner"><strong>{page.label}</strong><span>{localized.static.article.complete} · {wordCount.toLocaleString(locale)} {localized.static.article.words}</span></div>
      {fullSections.map(([title,paragraphs],index)=><section id={`section-${index}`} key={`${title}-${index}`}><h2>{title}</h2>{paragraphs.map((text,pIndex)=><p key={`${index}-${pIndex}`}>{text}</p>)}</section>)}
      {research.matrix&&<section id="decision-matrix"><h2>{research.matrix.title}</h2><div className="comparison-table-wrap"><table className="comparison-table"><thead><tr>{research.matrix.headers.map((header)=><th key={header}>{header}</th>)}</tr></thead><tbody>{research.matrix.rows.map((row)=><tr key={row[0]}>{row.map((cell,index)=>index===0?<th key={cell}>{cell}</th>:<td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody></table></div></section>}
      {research.faqs&&<section id="wardrobe-faq"><h2>FAQ</h2><div className="faq-list">{research.faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>}
      <section id="evidence-check"><h2>{depth.guide.title}</h2><p>{depth.guide.intro}</p><ul className="mistake-list">{checks.map((text)=><li key={text}><CheckIcon size={18}/><span>{text}</span></li>)}</ul></section>
      <section id="quick-process"><h2>{page.process}</h2><ol>{research.steps.map((step,index)=><li key={step}><span>{index+1}</span>{step}</li>)}</ol></section>
      <section id="research-note" className="article-research-note"><span>{localized.static.article.researchNote}</span><p>{research.sourceNote}</p><p>{copy.footer.disclaimer}</p></section><div className="article-callout"><h2>{page.continue}</h2><p>{guide.short}</p><Link className="button primary" href={localizePath("/categories",locale)}>{page.browse} <Arrow/></Link></div></div></div></article></div>;
}

export function LocalizedFAQ({ locale }) {
  const copy = getCopy(locale);
  const page = copy.faqPage;
  const localized = getLocalizedResearch(locale);
  const items = localized.faqs;
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", inLanguage: locale, mainEntity: items.map(([question,answer])=>({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <div className="localized-shell" lang={locale}><StructuredData data={schema}/><section className="page-hero simple-hero"><div className="wrap"><span className="section-label">{page.eyebrow}</span><h1>{page.title[0]}<br/><em>{page.title[1]}</em></h1><p>{page.lead}</p></div></section><section className="section wrap faq-page"><span className="section-label">{localized.static.faq.completeLabel}</span><div className="faq-list">{items.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section></div>;
}

export function LocalizedAbout({ locale }) {
  const copy = getCopy(locale);
  const page = copy.about;
  const depth = getLocalizedDepth(locale);
  const extra = getLocalizedResearch(locale).static.about;
  return <div className="localized-shell" lang={locale}><section className="page-hero dark-hero"><div className="wrap narrow"><span className="section-label inverse">{page.eyebrow}</span><h1>{page.title[0]}<br/>{page.title[1]}</h1><p>{page.lead}</p></div></section><section className="section wrap"><div className="story-grid"><div><span className="section-label">{page.ruleLabel}</span><h2>{page.ruleTitle}</h2></div><div><p className="large-copy">{page.main}</p><p>{page.note}</p></div></div><div className="values-grid">{page.values.map(([title,text],index)=><div key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section><section className="soft-section"><div className="wrap"><div className="section-heading"><div><span className="section-label">Hacoos</span><h2>{depth.about.title}</h2></div><p>{depth.about.intro}</p></div><div className="research-grid">{depth.about.steps.map(([title,text],index)=><article className="research-card" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><p className="verification-note">{extra.latestReview}</p></div></section>
    <section className="section wrap"><div className="section-heading"><div><span className="section-label">{extra.hierarchyLabel}</span><h2>{extra.hierarchyTitle}</h2></div><p>{extra.hierarchyIntro}</p></div><div className="check-grid">{extra.hierarchy.map(([title,text])=><article className="check-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section wrap"><div className="story-grid"><div><span className="section-label">{extra.ownershipLabel}</span><h2>{extra.ownershipTitle}</h2></div><div><p className="large-copy">{extra.ownershipLead}</p><p>{extra.ownershipBody}</p><div className="inline-links"><Link href={localizePath("/contact",locale)}>{extra.correction} <Arrow size={16}/></Link><Link href={localizePath("/terms",locale)}>{extra.terms} <Arrow size={16}/></Link></div></div></div><div className="center-action"><Link className="button primary" href={localizePath("/spreadsheet",locale)}>{copy.nav.spreadsheet} <Arrow/></Link></div></section></div>;
}

export function localizedPageMetadata(locale, pathname, title, description) {
  const labels = {
    es: { home: "Guía Hacoo: categorías y enlaces", spreadsheet: "Directorio Hacoo 2026: enlaces y categorías", categories: "Categorías Hacoo: enlaces y comprobaciones", guides: "Guías Hacoo: tallas, QC y envíos", faq: "Preguntas frecuentes sobre Hacoo", about: "Sobre Hacoos: guía independiente", category: (name) => `${name} Hacoo: enlaces y guía`, guide: (name) => `${name} — Guía práctica` },
    fr: { home: "Guide Hacoo : catégories et liens", spreadsheet: "Répertoire Hacoo 2026 : liens et catégories", categories: "Catégories Hacoo : liens et vérifications", guides: "Guides Hacoo : tailles, QC et livraison", faq: "Questions fréquentes sur Hacoo", about: "À propos de Hacoos : guide indépendant", category: (name) => `${name} Hacoo : liens et guide`, guide: (name) => `${name} — Guide pratique` },
    de: { home: "Hacoo-Ratgeber: Kategorien und Links", spreadsheet: "Hacoo-Verzeichnis 2026: Links und Kategorien", categories: "Hacoo-Kategorien: Links und Prüfungen", guides: "Hacoo-Ratgeber: Größe, QC und Versand", faq: "Häufige Fragen zu Hacoo", about: "Über Hacoos: unabhängiger Ratgeber", category: (name) => `${name} Hacoo: Links und Ratgeber`, guide: (name) => `${name} — Praktischer Ratgeber` },
    it: { home: "Guida Hacoo: categorie e link", spreadsheet: "Elenco Hacoo 2026: link e categorie", categories: "Categorie Hacoo: link e controlli", guides: "Guide Hacoo: taglie, QC e spedizione", faq: "Domande frequenti su Hacoo", about: "Informazioni su Hacoos: guida indipendente", category: (name) => `${name} Hacoo: link e guida`, guide: (name) => `${name} — Guida pratica` },
    pt: { home: "Guia Hacoo: categorias e links", spreadsheet: "Diretório Hacoo 2026: links e categorias", categories: "Categorias Hacoo: links e verificações", guides: "Guias Hacoo: tamanhos, QC e envio", faq: "Perguntas frequentes sobre Hacoo", about: "Sobre o Hacoos: guia independente", category: (name) => `${name} Hacoo: links e guia`, guide: (name) => `${name} — Guia prático` },
  };
  const localeLabels = labels[locale] || labels.es;
  let seoTitle = title;
  if (pathname === "/") seoTitle = localeLabels.home;
  else if (pathname === "/spreadsheet") seoTitle = localeLabels.spreadsheet;
  else if (pathname === "/categories") seoTitle = localeLabels.categories;
  else if (pathname === "/guides") seoTitle = localeLabels.guides;
  else if (pathname === "/faq") seoTitle = localeLabels.faq;
  else if (pathname === "/about") seoTitle = localeLabels.about;
  else if (pathname.startsWith("/categories/")) seoTitle = localeLabels.category(title);
  else if (pathname.startsWith("/guides/")) seoTitle = localeLabels.guide(title);

  const suffixes = {
    es: "Incluye enlaces actuales, comprobaciones prácticas y datos que debes confirmar en el anuncio.",
    fr: "Avec des liens actuels, des vérifications pratiques et les informations à confirmer sur l’annonce.",
    de: "Mit aktuellen Links, praktischen Prüfungen und Angaben, die im Angebot bestätigt werden müssen.",
    it: "Con link attuali, controlli pratici e dati da confermare nell’inserzione.",
    pt: "Inclui links atuais, verificações práticas e dados a confirmar no anúncio.",
  };
  const expandedDescription = description.length < 90 ? `${description} ${suffixes[locale]}` : description;
  const seoDescription = expandedDescription.length > 160
    ? `${expandedDescription.slice(0, 157).replace(/\s+\S*$/, "")}.`
    : expandedDescription;
  const canonicalPath = localizePath(pathname, locale);
  const withSlash = (url) => url.endsWith("/") ? url : `${url}/`;
  const alternates = {
    canonical: withSlash(absoluteLocalizedUrl(pathname, locale)),
    languages: Object.fromEntries(
      ["en", "es", "fr", "de", "it", "pt"].map((code) => [code, withSlash(absoluteLocalizedUrl(pathname, code))]).concat([["x-default", withSlash(absoluteLocalizedUrl(pathname, "en"))]]),
    ),
  };
  return createPageMetadata({ title: seoTitle, description: seoDescription, path: canonicalPath, locale, alternates, type: pathname.startsWith("/guides/") ? "article" : "website" });
}
