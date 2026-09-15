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
  "/": "FindQC QC Finder 2026: Product Search & QC Photos | FindQCS",
  "/products": "FindQC Finds & Product Index: 108 Source Listings | FindQCS",
  "/categories": "FindQC Product Categories: Shoes, Hoodies & More | FindQCS",
  "/shipping": "FindQC Shipping Cost Checklist: Weight, Volume & Fees",
  "/faq": "FindQC FAQ: Product Search, QC Photos & Shipping",
  "/guides": "FindQC Search Guide: Links, IDs, Image Search & QC Photos",
  "/articles": "FindQC Guides & QC Finder Articles 2026 | FindQCS",
};

const LOCALIZED_SEARCH_TITLES = {
  pl: {
    "/": "FindQC QC Finder 2026: wyszukiwanie produktów i zdjęcia QC | FindQCS",
    "/guides": "Poradnik FindQC: linki, ID, wyszukiwanie obrazem i zdjęcia QC",
    "/articles": "Poradniki FindQC i artykuły QC Finder 2026 | FindQCS",
  },
  es: {
    "/": "FindQC QC Finder 2026: búsqueda de productos y fotos QC | FindQCS",
    "/guides": "Guía FindQC: enlaces, ID, búsqueda por imagen y fotos QC",
    "/articles": "Guías FindQC y artículos de QC Finder 2026 | FindQCS",
  },
  de: {
    "/": "FindQC QC Finder 2026: Produktsuche und QC-Fotos | FindQCS",
    "/guides": "FindQC-Anleitung: Links, IDs, Bildsuche und QC-Fotos",
    "/articles": "FindQC-Ratgeber und QC-Finder-Artikel 2026 | FindQCS",
  },
  ro: {
    "/": "FindQC QC Finder 2026: căutare produse și fotografii QC | FindQCS",
    "/guides": "Ghid FindQC: linkuri, ID-uri, căutare prin imagini și poze QC",
    "/articles": "Ghiduri FindQC și articole QC Finder 2026 | FindQCS",
  },
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
    description: translate(BUILD_LANGUAGE, keys.description),
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
