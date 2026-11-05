import { BUILD_LANGUAGE, SITE_LANGUAGES, languageUrl } from "./routing";
import { translate } from "./i18n";
import { ENGLISH_ONLY_ARTICLE_ROUTES } from "./englishOnlyArticles.js";

const OPEN_GRAPH_LOCALES = {
  en: "en_US",
  pl: "pl_PL",
  es: "es_ES",
  de: "de_DE",
  ro: "ro_RO",
};

const PAGE_SEO_KEYS = {
  "/": { title: ["home.titleLine1", "home.titleLine2"], description: "home.intro" },
  "/products": { title: ["products.title1", "products.title2"], description: "products.intro" },
  "/categories": { title: ["categories.title1", "categories.title2"], description: "categories.intro" },
  "/guides": { title: ["guides.title1", "guides.title2"], description: "guides.intro" },
  "/guides/qc-photo-checklist": { title: ["checklist.title1", "checklist.title2"], description: "checklist.intro" },
  "/guides/how-to-buy": { title: ["howBuy.title1", "howBuy.title2"], description: "howBuy.intro" },
  "/shipping": { title: ["shipping.title1", "shipping.title2"], description: "shipping.intro" },
  "/articles": { title: ["articles.title1", "articles.title2"], description: "articles.intro" },
  "/faq": { title: ["faq.title1", "faq.title2"], description: "faq.intro" },
  "/about": { title: ["about.title1", "about.title2"], description: "about.intro" },
  "/contact": { title: ["contact.title1", "contact.title2"], description: "contact.intro" },
  "/privacy": { title: ["privacy.title"], description: "privacy.s1Text" },
  "/terms": { title: ["terms.title"], description: "terms.s1Text" },
};

const ENGLISH_SEARCH_TITLES = {
  "/": "FindQCS – Find QC Photos for Weidian, Taobao & 1688",
  "/products": "FindQC Finds & Product Index: 108 Source Listings | FindQCS",
  "/categories": "FindQC Product Categories: Shoes, Hoodies & More | FindQCS",
  "/shipping": "FindQC Shipping Cost Checklist: Weight, Volume & Fees",
  "/faq": "FindQC FAQ: Product Search, QC Photos & Shipping",
  "/guides": "FindQC Search Guide: Links, IDs, Image Search & QC Photos",
  "/articles": "QC Finder Guides: Search, Photo Checks & Shipping | FindQCS",
};

const LOCALIZED_SEARCH_TITLES = {
  pl: {
    "/": "FindQCS – Jak znaleźć zdjęcia QC z Weidian i Taobao",
    "/guides": "Poradnik FindQC: linki, ID, wyszukiwanie obrazem i zdjęcia QC",
    "/articles": "Poradniki QC Finder: zdjęcia, pomiary i zakup | FindQCS",
  },
  es: {
    "/": "FindQCS – Cómo encontrar fotos QC de ropa",
    "/guides": "Guía FindQC: enlaces, ID, búsqueda por imagen y fotos QC",
    "/articles": "Guías QC Finder: fotos, medidas y compras | FindQCS",
  },
  de: {
    "/": "FindQCS – QC-Fotos für Weidian und Taobao finden",
    "/guides": "FindQC-Anleitung: Links, IDs, Bildsuche und QC-Fotos",
    "/articles": "QC-Finder-Ratgeber: Fotos, Maße und Kauf | FindQCS",
  },
  ro: {
    "/": "FindQCS – Cum găsești poze QC din Weidian și Taobao",
    "/guides": "Ghid FindQC: linkuri, ID-uri, căutare prin imagini și poze QC",
    "/articles": "Ghiduri QC Finder: fotografii, măsurători și cumpărături | FindQCS",
  },
};

const SEARCH_DESCRIPTIONS = {
  "en": {
    "/": "Learn how to find QC photos from Weidian, Taobao and 1688 links. Check a photo match, clothing measurements and the original listing before buying.",
    "/articles": "Choose a QC guide for product links, image search, spreadsheet finds, football jerseys and garment measurements. Follow practical examples before shipping."
  },
  "es": {
    "/": "Aprende a encontrar fotos QC de ropa con enlaces Weidian, Taobao y 1688. Comprueba la publicación, las tallas y las medidas antes de comprar.",
    "/articles": "Guías de enlaces, búsqueda por imagen, productos de hojas de cálculo, camisetas de fútbol y medidas. Resuelve cada paso con ejemplos prácticos."
  },
  "de": {
    "/": "Finde QC-Fotos mit Links von Weidian, Taobao und 1688. Prüfe Bildtreffer, das Originalangebot und Kleidungsmaße vor dem Kauf.",
    "/articles": "QC-Anleitungen für Produktlinks, Bildsuche, Spreadsheet-Funde, Fußballtrikots und Kleidungsmaße. Arbeite die Schritte mit konkreten Beispielen durch."
  },
  "pl": {
    "/": "Dowiedz się, jak znaleźć zdjęcia QC przez linki Weidian, Taobao i 1688. Sprawdź ofertę źródłową, dopasowanie zdjęcia i wymiary odzieży przed zakupem.",
    "/articles": "Poradniki QC o linkach, wyszukiwaniu obrazem, produktach z arkuszy, koszulkach piłkarskich i wymiarach odzieży. Sprawdź konkretne przykłady krok po kroku."
  },
  "ro": {
    "/": "Află cum găsești poze QC prin linkuri Weidian, Taobao și 1688. Verifică oferta originală, potrivirea imaginii și măsurile hainelor înainte de cumpărare.",
    "/articles": "Ghiduri QC pentru linkuri, căutare după imagine, produse din tabele, tricouri de fotbal și măsuri. Urmează pașii și exemplele practice înainte de expediere."
  }
};

function translatedSeo(metadata, pathname) {
  let keys = PAGE_SEO_KEYS[pathname];
  const categoryMatch = pathname.match(/^\/categories\/([^/]+)$/);
  if (categoryMatch) {
    const slug = categoryMatch[1];
    keys = {
      title: [`category.${slug}.name`, "categoryDetail.title2"],
      description: `category.${slug}.description`,
    };
  }

  if (!keys) return metadata;

  const searchTitle = BUILD_LANGUAGE === "en"
    ? ENGLISH_SEARCH_TITLES[pathname]
    : LOCALIZED_SEARCH_TITLES[BUILD_LANGUAGE]?.[pathname];
  const translatedTitle = searchTitle || keys.title.map((key) => translate(BUILD_LANGUAGE, key)).join(" ");
  const title = searchTitle
    ? { absolute: translatedTitle }
    : typeof metadata.title === "object" && metadata.title !== null
    ? { ...metadata.title, default: translatedTitle }
    : translatedTitle;

  return {
    ...metadata,
    title,
    description: SEARCH_DESCRIPTIONS[BUILD_LANGUAGE]?.[pathname] || translate(BUILD_LANGUAGE, keys.description),
  };
}

export function localizedAlternates(pathname) {
  const englishOnly = ENGLISH_ONLY_ARTICLE_ROUTES.includes(pathname);
  const alternateLanguages = englishOnly ? ["en"] : SITE_LANGUAGES;
  return {
    canonical: languageUrl(pathname, BUILD_LANGUAGE),
    languages: {
      ...Object.fromEntries(alternateLanguages.map((language) => [language, languageUrl(pathname, language)])),
      "x-default": languageUrl(pathname, "en"),
    },
  };
}

export function localizedMetadata(metadata, pathname) {
  metadata = translatedSeo(metadata, pathname);
  const alternates = localizedAlternates(pathname);
  const openGraph = metadata.openGraph
    ? {
        ...metadata.openGraph,
        url: alternates.canonical,
        locale: OPEN_GRAPH_LOCALES[BUILD_LANGUAGE],
        alternateLocale: SITE_LANGUAGES
          .filter((language) => language !== BUILD_LANGUAGE)
          .map((language) => OPEN_GRAPH_LOCALES[language]),
      }
    : undefined;

  return {
    ...metadata,
    alternates,
    ...(openGraph ? { openGraph } : {}),
  };
}
