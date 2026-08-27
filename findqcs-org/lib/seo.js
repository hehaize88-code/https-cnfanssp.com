import { BUILD_LANGUAGE, SITE_LANGUAGES, languageUrl } from "./routing";
import { translate } from "./i18n";

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
  "/": "FindQC Product Index & QC Photo Guide 2026 | FindQCS",
  "/products": "FindQC Finds & Product Index: 108 Source Listings | FindQCS",
  "/categories": "FindQC Product Categories: Shoes, Hoodies & More | FindQCS",
  "/shipping": "FindQC Shipping Cost Checklist: Weight, Volume & Fees",
  "/faq": "FindQC FAQ: Product Search, QC Photos & Shipping",
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

  const translatedTitle = BUILD_LANGUAGE === "en" && ENGLISH_SEARCH_TITLES[pathname]
    ? ENGLISH_SEARCH_TITLES[pathname]
    : keys.title.map((key) => translate(BUILD_LANGUAGE, key)).join(" ");
  const title = BUILD_LANGUAGE === "en" && ENGLISH_SEARCH_TITLES[pathname]
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
  const englishOnly = [
    "/articles/warehouse-measurement-guide",
    "/articles/shipping-cost-checklist",
  ].includes(pathname);
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
