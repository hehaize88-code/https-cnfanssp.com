import { returnEvidence } from "./return-evidence";
import { evidenceSources, novemberCopy } from "./november-content";
import type { Lang, ArticleSlug } from "./site-data";
import type { LocalizedArticle } from "./localized-articles";

const titles = {
  en: ["Hacoo Shipping and Returns: Costs, Deadlines and Evidence", "How to Read Hacoo Reviews: Ratings, Context and Limits"],
  de: ["Hacoo Versand und Retouren: Kosten, Fristen und Belege", "Hacoo-Bewertungen verstehen: Sterne, Kontext und Grenzen"],
  es: ["Envíos y devoluciones Hacoo: costes, plazos y pruebas", "Cómo leer reseñas Hacoo: notas, contexto y límites"],
  fr: ["Livraison et retours Hacoo : frais, délais et preuves", "Lire les avis Hacoo : notes, contexte et limites"],
  it: ["Spedizione e resi Hacoo: costi, scadenze e prove", "Leggere recensioni Hacoo: voti, contesto e limiti"],
};
export function updateExistingArticles(all: Record<Lang, Record<ArticleSlug, LocalizedArticle>>) {
  for (const lang of Object.keys(all) as Lang[]) {
    const a = all[lang]["hacoo-shipping-and-returns-guide"];
    Object.assign(a, returnEvidence[lang], { sourceNote: novemberCopy[lang].sourceLabel, sources: evidenceSources(["help", "refund"]), modified: "2026-11-06", published: "2026-08-28" });
    all[lang]["hacoo-sneaker-qc-insole-measurements"].sources = evidenceSources(["help", "refund"]);
    all[lang]["hacoo-missing-item-split-shipment"].sources = evidenceSources(["shipping", "help", "refund"]);
    const reviews = all[lang]["hacoo-reviews-what-users-report"];
    reviews.title = titles[lang][1];
    reviews.sourceNote = ({en:"Ratings and review counts in this article are historical observations from 28 August 2026, not current ratings. Use the method below and recheck the date, region and source before relying on any score.",de:"Bewertungen und Anzahlen dieses Artikels sind historische Beobachtungen vom 28. August 2026, keine aktuellen Werte. Prüfe Datum, Region und Quelle erneut, bevor du einen Wert verwendest.",es:"Las notas y cantidades de reseñas son observaciones históricas del 28 de agosto de 2026, no valores actuales. Revisa fecha, región y fuente antes de utilizar una puntuación.",fr:"Les notes et nombres d’avis sont des observations historiques du 28 août 2026, pas des valeurs actuelles. Revérifiez date, région et source avant de vous appuyer sur un score.",it:"Voti e quantità di recensioni sono osservazioni storiche del 28 agosto 2026, non valori attuali. Ricontrolla data, regione e fonte prima di usare un punteggio."})[lang];
    reviews.modified = "2026-10-10";
  }
}
