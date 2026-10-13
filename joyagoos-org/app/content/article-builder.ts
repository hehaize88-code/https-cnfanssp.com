import type { SeoArticle } from "../seo-articles";

// Content is authored in every language. No English fallback or generated filler.
export function article(slug: string, title: string, description: string, quickFacts: string[], body: string, sourceNote: string): SeoArticle {
  const sections = body.trim().split(/\n## /).map(block => {
    const [heading, ...lines] = block.replace(/^## /, "").split("\n");
    return { heading: heading.trim(), paragraphs: lines.join("\n").trim().split(/\n\s*\n/).map(p => p.replace(/\s*\n\s*/g, " ").trim()).filter(Boolean) };
  });
  return { slug, title, description, quickFacts, sections, sourceNote, meta: "JOYAGOO" };
}

export const orderSlug = "joyagoo-order-status-stock-arrived-qc-completed";
export const trackingSlug = "joyagoo-tracking-not-updating-shipping-stages";
export const newArticleSlugs = [orderSlug, trackingSlug];
export const translationNotes = {
  de: "Grundlage: offizielle Joyagoo-Kaufanleitung und Einkaufsbedingungen. Sprachfassung vom 13. Oktober 2026. Eine unabhängige Tabelle ersetzt weder das aktuelle Verkäuferangebot noch die Angaben der aktiven Bestellung.",
  es: "Base: guía oficial de compra e instrucciones de Joyagoo. Versión localizada del 13 de octubre de 2026. Una tabla independiente no sustituye la oferta actual del vendedor ni los datos del pedido activo.",
  fr: "Base : guide d’achat et instructions officiels Joyagoo. Version française du 13 octobre 2026. Un tableau indépendant ne remplace ni l’offre actuelle du vendeur ni les détails de la commande active.",
  it: "Base: guida e istruzioni ufficiali di acquisto Joyagoo. Versione localizzata del 13 ottobre 2026. Una tabella indipendente non sostituisce l’offerta attuale del venditore o i dati dell’ordine attivo."
};
