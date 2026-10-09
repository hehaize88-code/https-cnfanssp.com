import es from "./priorityTranslations/es.json";
import fr from "./priorityTranslations/fr.json";
import de from "./priorityTranslations/de.json";
import it from "./priorityTranslations/it.json";
import pt from "./priorityTranslations/pt.json";

const translations = { es, fr, de, it, pt };

export function priorityTranslation(locale, slug) {
  return translations[locale]?.[slug] || null;
}

export function priorityMetadata(locale, slug) {
  const article = priorityTranslation(locale, slug);
  return article ? {
    title: article.title,
    short: article.short,
    seoTitle: article.seoTitle,
    seoDescription: article.short,
  } : null;
}
