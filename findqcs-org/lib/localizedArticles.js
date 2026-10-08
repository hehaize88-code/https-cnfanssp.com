import { articles as englishArticles } from './articles.js';
import { ARTICLE_LOCALES, ARTICLE_SOURCE_LOCALES, ARTICLE_UI_LOCALES } from './articleLocales/index.js';
import { articleSearchTitles } from './editorial/searchTitles.js';
import { localeUi, REVIEW_DATE, topicConfig } from './editorial/shared.js';

const ENGLISH_UI = {
  journalMetadataTitle:'FindQC Guides: QC Finder, Photo Checks & Shipping | FindQCS',
  journalMetadataDescription:'Find the right QC guide: Taobao, Weidian and 1688 links, image search, photo review, measurements and shipping preparation.',
  journalSchemaName:'FindQCS practical guides',
  editorialDesk:'FindQCS Editorial Team',
  heroCaption:'Editorial product image illustrating the subject. It is not a warehouse photo of your order.',
  contents:'In this article', researchNotes:'References', officialSources:'Source documentation',
  sourceIntro:'Sources describe the services referenced. Examples and worksheets are independent editorial guidance; check current details with the provider.',
  independentNote:'FindQCS is an independent discovery and education site. It does not sell products or perform warehouse inspections.',
  continueResearch:'Continue the research', relatedNotes:'Related guides', allArticles:'All articles', readArticle:'Read article', home:'Home', journal:'Articles',
};

export function getArticleUi(language='en') {
  const ui=localeUi[language];
  return {...ENGLISH_UI,...(ARTICLE_UI_LOCALES[language]||{}),
    journalCount:`${englishArticles.length} ${ui.count}`, journalNote:ui.note,
    updated:ui.updated, quickAnswer:ui.quick, groups:ui.groups, openCatalog:catalogCopy[language][2],
    sourceIntro:language==='en'?ENGLISH_UI.sourceIntro:ui.sourceNote,
  };
}

const catalogCopy={
 en:["Main product catalog", "Open the current listing to confirm the product, options and destination.","Open the main catalog"],
 de:["Hauptkatalog", "Das aktuelle Angebot öffnen und Produkt, Optionen sowie Ziel prüfen.","Hauptkatalog öffnen"],
 es:["Catálogo principal", "Abre la publicación actual para verificar producto, opciones y destino.","Abrir el catálogo principal"],
 pl:["Główny katalog", "Otwórz aktualną ofertę i sprawdź produkt, opcje oraz cel linku.","Otwórz główny katalog"],
 ro:["Catalogul principal", "Deschide oferta actuală pentru a verifica produsul, opțiunile și destinația.","Deschide catalogul principal"],
};

const topicOverrides={
  'before-you-buy-qc-guide':'review', 'what-qc-photos-can-prove':'review',
  'product-search-link-id-keyword':'search', 'mapped-findqc-product-index-without-recommendation':'search',
};
const relatedOverrides={
  'before-you-buy-qc-guide':['qc-checker-review-decision-guide','sneaker-qc-photo-checklist-shape-tags-soles-box','clothing-qc-photos-measurements-print-stitching'],
  'what-qc-photos-can-prove':['qc-photos-vs-qc-videos-evidence-guide','request-extra-qc-photos-templates','qc-checker-review-decision-guide'],
};
function localizeArticle(article, language) {
  if (!article) return undefined;
  let result={...article};
  if (language!=='en') {
    // Only the search-methods key is an equivalent legacy translation.
    // Product signals and agent workflow now retain their own distinct routes.
    const key=article.slug==='product-search-link-id-keyword'?'findqc-search-methods':article.slug;
    const localized=ARTICLE_LOCALES[language]?.[key];
    if (!localized) throw new Error(`Missing ${language} article: ${article.slug}`);
    const sourceLocales=ARTICLE_SOURCE_LOCALES[language]||{};
    const sources=(localized.sources||article.sources||[]).map(source=>({
      ...source,...(sourceLocales[source.href]||{label:localeUi[language].source,note:localeUi[language].sourceNote}),
    }));
    result={...article,...localized,slug:article.slug,sources,
      heroImage:localized.heroImage||article.heroImage,
      // Existing translations provide CTA copy, but inherit the destination.
      cta:{...article.cta,...localized.cta},
    };
  }
  if(!result.sources.length) result.sources=[{href:"https://www.cnfanssp.com/AllProducts/",label:catalogCopy[language][0],note:catalogCopy[language][1]}];
  result.dateISO=article.dateISO;
  result.dateModified=REVIEW_DATE;
  result.date=new Intl.DateTimeFormat(language,{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'})
    .format(new Date(article.dateISO+'T00:00:00Z'));
  result.updatedDate=new Intl.DateTimeFormat(language,{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'})
    .format(new Date(REVIEW_DATE+'T00:00:00Z'));
  result.topic=topicConfig[article.slug]?.[0]||topicOverrides[article.slug];
  result.related=relatedOverrides[article.slug]||topicConfig[article.slug]?.[2]||article.related;
  // A concise answer precedes the detailed workflow in every edition.
  result.quickAnswer=result.description;
  result.seoTitle=articleSearchTitles[language][article.slug];
  // Correct a legacy illustration path; it never denoted a real QC record.
  result.sections=result.sections.map(section=>({...section,blocks:section.blocks.map(block=>
    block.type==='figure'&&block.image==='/products/accessories.webp'?{...block,image:'/products/watch.webp'}:block)}));
  return result;
}
export function getLocalizedArticles(language='en') {
  if(!localeUi[language]) throw new Error(`Unsupported article language: ${language}`);
  return englishArticles.map(article=>localizeArticle(article,language));
}
export function getLocalizedArticle(slug,language='en') {
  return localizeArticle(englishArticles.find(article=>article.slug===slug),language);
}
