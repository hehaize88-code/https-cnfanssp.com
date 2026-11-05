import type { Locale } from "@/lib/site-data";
import type { SeoArticle } from "@/lib/seo-articles";
import en from "./articles/en.json";
import de from "./articles/de.json";
import fr from "./articles/fr.json";
import es from "./articles/es.json";
import it from "./articles/it.json";
import pt from "./articles/pt.json";
import improvements from "./articles/improvements.json";

export const articleLabels = {
  en: { reviewed: "Reviewed 9 October 2026", evidence: "Independent practical guidance. Official help is linked below; the instructions attached to your own order determine the next transaction step.", sources: "Sources and scope", related: "Continue with a related guide", sourceNames: ["Hacoo: shipping and after-sales information", "Hacoo: official contact and app support", "Hacoo: official website"], fields: ["FOCUS", "CHECKED", "ROLE"], role: "Independent guide" },
  de: { reviewed: "Geprüft am 9. Oktober 2026", evidence: "Unabhängige praktische Hinweise. Offizielle Hilfe ist unten verlinkt; für den nächsten Bestellschritt sind die Anweisungen deiner konkreten Bestellung maßgeblich.", sources: "Quellen und Einordnung", related: "Mit einem passenden Ratgeber weiterlesen", sourceNames: ["Hacoo: Versand und Kundendienst", "Hacoo: offizieller Kontakt und App-Support", "Hacoo: offizielle Website"], fields: ["THEMA", "GEPRÜFT", "ROLLE"], role: "Unabhängiger Ratgeber" },
  fr: { reviewed: "Vérifié le 9 octobre 2026", evidence: "Conseils pratiques indépendants. L’aide officielle est liée ci-dessous ; les instructions de votre propre commande déterminent la prochaine étape de la transaction.", sources: "Sources et contexte", related: "Poursuivre avec un guide associé", sourceNames: ["Hacoo : livraison et service après-vente", "Hacoo : contact officiel et support de l’application", "Hacoo : site officiel"], fields: ["SUJET", "VÉRIFIÉ", "RÔLE"], role: "Guide indépendant" },
  es: { reviewed: "Revisado el 9 de octubre de 2026", evidence: "Orientación práctica independiente. La ayuda oficial aparece abajo; las instrucciones de tu propio pedido determinan el siguiente paso de la transacción.", sources: "Fuentes y alcance", related: "Continúa con una guía relacionada", sourceNames: ["Hacoo: envío y servicio posventa", "Hacoo: contacto oficial y soporte de la app", "Hacoo: web oficial"], fields: ["TEMA", "REVISADO", "FUNCIÓN"], role: "Guía independiente" },
  it: { reviewed: "Verificato il 9 ottobre 2026", evidence: "Indicazioni pratiche indipendenti. L’assistenza ufficiale è collegata sotto; le istruzioni del tuo ordine determinano il prossimo passo della transazione.", sources: "Fonti e contesto", related: "Continua con una guida collegata", sourceNames: ["Hacoo: spedizione e assistenza post-vendita", "Hacoo: contatto ufficiale e supporto app", "Hacoo: sito ufficiale"], fields: ["TEMA", "VERIFICATO", "RUOLO"], role: "Guida indipendente" },
  pt: { reviewed: "Verificado em 9 de outubro de 2026", evidence: "Orientação prática independente. A ajuda oficial está ligada abaixo; as instruções da própria encomenda determinam o próximo passo da transação.", sources: "Fontes e contexto", related: "Continuar com um guia relacionado", sourceNames: ["Hacoo: envio e apoio pós-venda", "Hacoo: contacto oficial e suporte da app", "Hacoo: website oficial"], fields: ["TEMA", "VERIFICADO", "FUNÇÃO"], role: "Guia independente" },
} satisfies Record<Locale, unknown>;

const packs = { en, de, fr, es, it, pt };
const novemberLabels = {
  en: ["Reviewed 5 November 2026", "Placing an order", "Cancelling an order", "Changing items", "Changing an address"],
  de: ["Geprüft am 5. November 2026", "Bestellung aufgeben", "Bestellung stornieren", "Artikel ändern", "Lieferadresse ändern"],
  fr: ["Vérifié le 5 novembre 2026", "Passer commande", "Annuler une commande", "Modifier les articles", "Modifier une adresse"],
  es: ["Revisado el 5 de noviembre de 2026", "Hacer un pedido", "Cancelar un pedido", "Modificar los artículos", "Cambiar la dirección"],
  it: ["Verificato il 5 novembre 2026", "Effettuare un ordine", "Annullare un ordine", "Modificare gli articoli", "Cambiare indirizzo"],
  pt: ["Verificado a 5 de novembro de 2026", "Fazer uma encomenda", "Cancelar uma encomenda", "Alterar os artigos", "Alterar a morada"],
} satisfies Record<Locale, string[]>;

export const priorityArticles = Object.fromEntries(Object.entries(packs).map(([locale, pack]) => {
  const labels = articleLabels[locale as Locale];
  return [locale, pack.map((article): SeoArticle => {
    const date = article.publishedAt ?? "2026-10-09";
    return {
      id: article.id, tag: article.tag, title: article.title, summary: article.description,
      standfirst: article.intro, targetKeyword: article.tag,
      reviewedAt: article.publishedAt ? novemberLabels[locale as Locale][0] : labels.reviewed, publishedAt: date, modifiedAt: date,
      evidenceNote: labels.evidence,
      facts: [[labels.fields[0], article.tag], [labels.fields[1], date], [labels.fields[2], labels.role]],
      sections: article.sections.map(([heading, ...paragraphs], index) => ({ id: `step-${index + 1}`, heading, paragraphs })),
    };
  })];
})) as Record<Locale, SeoArticle[]>;

export function improveArticle(article: SeoArticle, locale: Locale): SeoArticle {
  const update = improvements[locale].find((item) => item.id === article.id);
  if (!update) return article;
  return { ...article, title: update.title, targetKeyword: update.keyword, summary: update.description,
    modifiedAt: article.id === "hacoo-spreadsheet-guide" ? "2026-11-05" : "2026-10-09",
    // Preserve earlier source-review dates; this date concerns the added practical section.
    reviewedAt: article.reviewedAt,
    sections: [...article.sections, { id: "practical-comparison", heading: update.heading,
      paragraphs: update.paragraphs, table: update.table }],
  };
}

export const relatedArticles: Record<string, string[]> = {
  "how-to-buy-on-hacoo": ["hacoo-spreadsheet-guide", "hacoo-size-evidence", "cancel-hacoo-order-before-shipping"],
  "cancel-hacoo-order-before-shipping": ["hacoo-order-tracking", "hacoo-returns-refunds", "how-to-buy-on-hacoo"],
  "hacoo-reviews": ["how-to-buy-on-hacoo", "hacoo-returns-refunds", "hacoo-shipping-guide"],
  "hacoo-dead-link-recovery": ["hacoo-links-not-opening", "hacoo-product-shortlist", "how-to-buy-on-hacoo"],
  "hacoo-links-not-opening": ["hacoo-link-verification", "hacoo-dead-link-recovery", "hacoo-spreadsheet-guide"],
  "hacoo-order-tracking": ["hacoo-shipping-guide", "hacoo-returns-refunds", "hacoo-size-evidence"],
  "hacoo-returns-refunds": ["cancel-hacoo-order-before-shipping", "hacoo-order-tracking", "hacoo-size-evidence", "hacoo-qc-guide"],
  "hacoo-shipping-guide": ["hacoo-order-tracking", "hacoo-returns-refunds", "hacoo-spreadsheet-guide"],
  "hacoo-size-evidence": ["hacoo-qc-guide", "hacoo-returns-refunds", "hacoo-product-shortlist"],
  "hacoo-spreadsheet-guide": ["how-to-buy-on-hacoo", "hacoo-links-not-opening", "hacoo-size-evidence", "hacoo-shipping-guide"],
};

export function articleSources(id: string, locale: Locale) {
  const labels = articleLabels[locale];
  const sources = [
    { label: labels.sourceNames[0], url: "https://www.hacoo.app/en-US/pages/shipping-info" },
    { label: labels.sourceNames[1], url: "https://www.hacoo.app/en-US/pages/contact-us" },
    { label: labels.sourceNames[2], url: "https://www.hacoo.app/" },
  ];
  const [, order, cancel, items, address] = novemberLabels[locale];
  if (id === "how-to-buy-on-hacoo") return [
    { label: order, url: "https://act.hacoo.app/act/sara/helpcenter/order1" }, sources[1],
  ];
  if (id === "cancel-hacoo-order-before-shipping") return [
    { label: cancel, url: "https://act.hacoo.app/eu/help-center/order/2" },
    { label: items, url: "https://act.hacoo.app/act/sara/helpcenter/order3" },
    { label: address, url: "https://act.hacoo.app/act/helpcenter/order4" }, sources[1],
  ];
  if (id === "hacoo-reviews") return [
    sources[2], { label: "Trustpilot · Hacoo", url: "https://www.trustpilot.com/review/www.hacoo.app" },
  ];
  if (/shipping|tracking|returns/.test(id)) return sources.slice(0, 2);
  if (id === "hacoo-links-not-opening") return sources.slice(1);
  return sources.slice(2);
}
