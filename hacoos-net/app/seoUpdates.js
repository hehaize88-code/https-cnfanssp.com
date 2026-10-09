import en from "./seoArticles/en.json";
import es from "./seoArticles/es.json";
import fr from "./seoArticles/fr.json";
import de from "./seoArticles/de.json";
import it from "./seoArticles/it.json";
import pt from "./seoArticles/pt.json";
import refresh from "./seoArticles/refresh.json";

export const SEO_REVIEW_DATE = "2026-10-09";
const articles = { en, es, fr, de, it, pt };
export const NEW_GUIDE_SLUGS = Object.keys(en);
const refreshKeys = {
  "hacoo-returns-refunds": "returns",
  "shipping-planning": "shipping",
  "hacoo-reviews-explained": "reviews",
};
export const UPDATED_GUIDE_SLUGS = [...NEW_GUIDE_SLUGS, ...Object.keys(refreshKeys)];
export const HOME_GUIDE_SLUGS = [...NEW_GUIDE_SLUGS, "hacoo-returns-refunds"];

export function seoCopy(locale = "en") { return refresh[locale] || refresh.en; }

export function guideSeo(slug, locale = "en") {
  const content = articles[locale]?.[slug] || refresh[locale]?.[refreshKeys[slug]];
  if (!content) return null;
  return { title: content.title, short: content.short, seoTitle: content.seoTitle, seoDescription: content.short, dateModified: SEO_REVIEW_DATE };
}

export const newGuideDefinitions = NEW_GUIDE_SLUGS.map((slug) => ({
  slug, ...guideSeo(slug), read: "7 min", translated: true,
  primaryKeyword: en[slug].seoTitle.split(":")[0],
  datePublished: SEO_REVIEW_DATE,
}));

const headings = {
  en: ["Request help through the order", "Check a delivered-but-missing parcel", "Read dated customer experiences", "Recognize a useful customer account", "Interpret review photographs carefully", "Separate legitimacy from a guaranteed outcome"],
  es: ["Solicita ayuda desde el pedido", "Comprueba un paquete entregado pero ausente", "Lee experiencias con fecha", "Reconoce un testimonio útil", "Interpreta las fotos con cuidado", "Separa legitimidad y resultado garantizado"],
  fr: ["Demandez de l’aide depuis la commande", "Vérifiez un colis livré mais introuvable", "Lisez des expériences datées", "Reconnaissez un témoignage utile", "Interprétez les photos avec prudence", "Distinguez légitimité et résultat garanti"],
  de: ["Fordere Hilfe zur Bestellung an", "Prüfe ein zugestelltes, fehlendes Paket", "Lies zeitlich eingeordnete Erfahrungen", "Erkenne einen hilfreichen Erfahrungsbericht", "Ordne Bewertungsfotos vorsichtig ein", "Trenne Seriosität und garantierten Erfolg"],
  it: ["Richiedi assistenza dall’ordine", "Verifica un pacco consegnato ma assente", "Leggi esperienze datate", "Riconosci una testimonianza utile", "Interpreta le foto con attenzione", "Separa legittimità e risultato garantito"],
  pt: ["Peça apoio através da encomenda", "Verifique um pacote entregue mas ausente", "Leia experiências datadas", "Reconheça um relato útil", "Interprete fotografias com cuidado", "Separe legitimidade e resultado garantido"],
};

export function updatedGuideContent(slug, locale, original) {
  const added = articles[locale]?.[slug];
  const update = refresh[locale]?.[refreshKeys[slug]];
  if (!added && !update) return original;
  const content = structuredClone(added || original);
  content.dateLabel = seoCopy(locale).reviewed;
  content.dateModified = SEO_REVIEW_DATE;
  if (added) {
    content.datePublished = SEO_REVIEW_DATE;
    content.sources = [["Hacoos", added.sourceNote, SEO_REVIEW_DATE]];
    return content;
  }
  content.intro = update.intro;
  content.factBox = update.facts;
  const labels = headings[locale];
  if (slug === "hacoo-returns-refunds") {
    content.sections[0][1][1] = update.eligibility;
    content.sections[2] = [labels[0], update.application];
    content.sections[3][1][1] = update.remedy;
    content.steps = [update.facts[0][1], original.steps[1], labels[0], original.steps[3]];
    content.sources = [["Hacoo", "act.hacoo.app/returnrefundpolicy", SEO_REVIEW_DATE]];
  }
  if (slug === "shipping-planning") {
    content.sections[1][1][0] = update.variation;
    content.sections[6] = [labels[1], update.delivered];
    content.sources = [["Hacoo", "act.hacoo.app/eu/help-center/shipping/1", SEO_REVIEW_DATE], ["Hacoo", "act.hacoo.app/eu/help-center/shipping/6", SEO_REVIEW_DATE]];
  }
  if (slug === "hacoo-reviews-explained") {
    content.sections[2][0] = labels[2];
    content.sections[3][0] = labels[3];
    content.sections[5][0] = labels[4];
    content.sections[6][0] = labels[5];
  }
  if (content.sources) content.sourceNote = seoCopy(locale).currentSourceNote;
  content.sections.unshift(update.extra);
  return content;
}

export function relatedGuideSlugs(slug) {
  if (["hacoo-order-tracking", "shipping-planning", "hacoo-returns-refunds"].includes(slug)) {
    return ["hacoo-order-tracking", "shipping-planning", "hacoo-returns-refunds", "hacoo-reviews-explained"].filter((item) => item !== slug);
  }
  return ["hacoo-product-links-not-working", "find-hacoo-product-old-link-screenshot", "size-guide", "qc-photo-checklist"].filter((item) => item !== slug).slice(0, 3);
}
