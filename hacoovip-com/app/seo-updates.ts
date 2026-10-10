import type { Lang } from "./site-data";
import type { LocaleContent } from "./localized-content";

const titles = {
  en: ["Hacoo Spreadsheet: Product Links and Checking Guides", "Hacoo Finds: Compare Product Images and Options", "Hacoo QC Guide: Photos, Measurements and Visible Defects", "Hacoo Shipping Cost and Delivery Time", "Hacoo Returns and Refunds: Eligibility, Evidence and Timing", "Hacoo Guides: Tracking, Sizes, Links and QC", "Hacoo FAQ: Links, Delivery and Returns"],
  de: ["Hacoo-Tabelle: Produktlinks und Prüfanleitungen", "Hacoo-Funde: Produktbilder und Varianten vergleichen", "Hacoo QC: Fotos, Maße und sichtbare Fehler prüfen", "Hacoo Versandkosten und Lieferzeit", "Hacoo Retouren und Erstattung: Fristen und Nachweise", "Hacoo-Ratgeber: Tracking, Größen, Links und QC", "Hacoo FAQ: Links, Lieferung und Retouren"],
  es: ["Hoja Hacoo: enlaces de productos y guías de revisión", "Hallazgos Hacoo: compara imágenes y opciones", "Guía QC Hacoo: fotos, medidas y defectos visibles", "Gastos de envío y plazo de entrega Hacoo", "Devoluciones Hacoo: requisitos, pruebas y reembolsos", "Guías Hacoo: seguimiento, tallas, enlaces y QC", "Hacoo FAQ: enlaces, entrega y devoluciones"],
  fr: ["Tableur Hacoo : liens produits et guides de vérification", "Sélections Hacoo : comparer images et variantes", "Guide QC Hacoo : photos, mesures et défauts visibles", "Frais de livraison Hacoo et délais de réception", "Retours Hacoo : conditions, preuves et remboursement", "Guides Hacoo : suivi, tailles, liens et QC", "FAQ Hacoo : liens, livraison et retours"],
  it: ["Foglio Hacoo: link prodotti e guide di verifica", "Prodotti Hacoo: confronta immagini e varianti", "Guida QC Hacoo: foto, misure e difetti visibili", "Costi di spedizione Hacoo e tempi di consegna", "Resi Hacoo: condizioni, prove e rimborsi", "Guide Hacoo: tracking, taglie, link e QC", "FAQ Hacoo: link, consegna e resi"],
};
export const seoDetails = {
  en: {
    shipping: "Check Hacoo shipping cost at checkout for the exact item and address. Published delivery ranges are guidance; follow your current order estimate for tracking and delays.",
    returns: "Check whether your item is eligible, submit evidence within the applicable deadline, and follow the return or keep-item instructions issued for your case.",
    cost: ["Calculate the payable total", "Record item price, selected-option charges, shipping and any taxes or payment conversion shown at checkout. Hacoo does not provide one universal shipping price on the public pages reviewed. Do not treat a product-card price as a delivered total."],
    timing: "The public shipping page lists 15–25 days for the UK, France, Germany and Italy, 15–30 for Spain and 25–65 for other destinations. These are broad guidelines, not confirmation of address eligibility or a delivery promise. Do not add overlapping stages from different help pages.",
    refund: ["Distinguish approval from money received", "The public refund page describes review normally within 24 hours, with possible holiday or promotion extensions, then 8–15 working days for credit cards or 5–7 for PayPal. These are published references, not a promise for every order; check the approved refund and payment method."],
    instructions: ["Follow the instructions for your case", "One shipping page describes refunds without return, while the refund policy says some items must be returned and others kept. Get the order-specific instruction before sending anything. Eligibility, product exclusions and return costs must be checked separately."],
    region: "Enter your actual address in the current order flow. Public country lists and broad worldwide wording do not confirm availability for an individual item, island or remote territory.",
    qc: "Inspect identity, measurements and visible condition in relevant images. A catalogue image is not proof of your unit's condition, and this guide does not imply a universal warehouse photo service.",
    reference: "Sources: Hacoo public Shipping & Delivery and Return & Refund Policy · reviewed 10 October 2026. Order-specific terms take priority.",
    facts: ["Published overall reference, in days", "Check the exact order and address", "Confirm approval and required action"],
    boundary: "The catalogue is a separate destination. Hacoo policy descriptions do not automatically apply to products or purchases made through another service.",
  },
  de: {
    shipping: "Prüfe Hacoo-Versandkosten im Checkout für den genauen Artikel und die Adresse. Veröffentlichte Lieferzeiten sind Richtwerte; für Tracking und Verzögerungen zählt die aktuelle Bestellprognose.",
    returns: "Prüfe die Berechtigung, reiche Belege innerhalb der geltenden Frist ein und befolge die Anweisung zur Rücksendung oder zum Behalten des Artikels für deinen Fall.",
    cost: ["Den Zahlbetrag vollständig berechnen", "Notiere Artikelpreis, Optionsaufschläge, Versand sowie angezeigte Steuern und Zahlungsumrechnung. Die geprüften öffentlichen Hacoo-Seiten nennen keinen universellen Versandpreis. Der Preis einer Produktkarte ist kein Gesamtpreis inklusive Lieferung."],
    timing: "Die öffentliche Versandseite nennt 15–25 Tage für UK, Frankreich, Deutschland und Italien, 15–30 für Spanien und 25–65 für andere Ziele. Das sind grobe Richtwerte, weder Lieferbarkeitsbestätigung noch Terminzusage. Addiere keine sich überlappenden Phasen verschiedener Hilfeseiten.",
    refund: ["Genehmigung und Geldeingang unterscheiden", "Die öffentliche Erstattungsseite nennt normalerweise 24 Stunden Prüfung, mögliche Verlängerungen an Feiertagen oder bei Aktionen und anschließend 8–15 Arbeitstage für Kreditkarten beziehungsweise 5–7 für PayPal. Das sind veröffentlichte Hinweise, keine Garantie für jede Bestellung. Prüfe Genehmigung und Zahlungsweg."],
    instructions: ["Die fallbezogene Anweisung befolgen", "Eine Versandseite beschreibt Erstattungen ohne Rücksendung; die Erstattungsrichtlinie nennt sowohl Rücksendung als auch Behalten. Kläre die konkrete Anweisung vor dem Versand. Berechtigung, Produktausnahmen und Kosten sind getrennt zu prüfen."],
    region: "Gib deine tatsächliche Adresse im aktuellen Bestellablauf ein. Öffentliche Länderlisten oder weltweite Versandangaben bestätigen nicht die Verfügbarkeit für einen Artikel, eine Insel oder ein abgelegenes Gebiet.",
    qc: "Prüfe Identität, Maße und sichtbaren Zustand anhand passender Bilder. Ein Katalogfoto beweist nicht den Zustand deines Exemplars; ein allgemeiner Lagerfotoservice wird hier nicht vorausgesetzt.",
    reference: "Quellen: öffentliche Hacoo-Seiten Shipping & Delivery und Return & Refund Policy · geprüft am 10. Oktober 2026. Maßgeblich sind die konkreten Bestellbedingungen.",
    facts: ["Veröffentlichter Gesamtzeitraum in Tagen", "Konkrete Bestellung und Adresse prüfen", "Genehmigung und notwendige Schritte bestätigen"],
    boundary: "Der Katalog ist ein separates Ziel. Beschriebene Hacoo-Regeln gelten nicht automatisch für Produkte oder Käufe bei einem anderen Dienst.",
  },
  es: {
    shipping: "Consulta los gastos Hacoo al pagar para el artículo y dirección exactos. Los plazos publicados son orientativos; utiliza la previsión del pedido para seguimiento y retrasos.",
    returns: "Comprueba la elegibilidad, presenta pruebas dentro del plazo aplicable y sigue la instrucción de devolver o conservar el artículo emitida para tu caso.",
    cost: ["Calcula el importe total", "Registra precio, suplementos de opción, envío e impuestos o conversión mostrados al pagar. Las páginas públicas Hacoo revisadas no ofrecen un precio universal de transporte. El precio de una tarjeta no equivale al total entregado."],
    timing: "La página pública indica 15–25 días para Reino Unido, Francia, Alemania e Italia; 15–30 para España y 25–65 para otros destinos. Son referencias amplias, no confirmación de cobertura ni fecha garantizada. No sumes etapas solapadas de páginas diferentes.",
    refund: ["Distingue aprobación y recepción del dinero", "La política pública describe una revisión normalmente en 24 horas, ampliable en festivos o promociones, seguida de 8–15 días laborables para tarjeta o 5–7 para PayPal. Son referencias publicadas, no promesas para todos los pedidos. Comprueba aprobación y medio de pago."],
    instructions: ["Sigue las instrucciones de tu caso", "Una página de envíos describe reembolsos sin retorno; la política de reembolso contempla devolver algunos artículos y conservar otros. Confirma la instrucción del pedido antes de enviar nada. Requisitos, exclusiones y gastos se verifican por separado."],
    region: "Introduce tu dirección real en el proceso actual. Una lista de países o la expresión envío mundial no confirma disponibilidad para un artículo, una isla o un territorio remoto.",
    qc: "Revisa identidad, medidas y estado visible en imágenes pertinentes. Una foto de catálogo no prueba el estado de tu unidad y esta guía no presupone un servicio universal de fotos de almacén.",
    reference: "Fuentes: Shipping & Delivery y Return & Refund Policy públicas de Hacoo · revisadas el 10 de octubre de 2026. Prevalecen las condiciones del pedido concreto.",
    facts: ["Referencia general publicada, en días", "Comprueba pedido y dirección exactos", "Confirma aprobación y pasos necesarios"],
    boundary: "El catálogo es un destino separado. Las políticas Hacoo descritas no se aplican automáticamente a productos o compras de otro servicio.",
  },
  fr: {
    shipping: "Vérifiez les frais Hacoo au paiement pour l’article et l’adresse exacts. Les délais publiés sont indicatifs ; utilisez l’estimation de votre commande pour le suivi et les retards.",
    returns: "Vérifiez l’admissibilité, transmettez les preuves dans le délai applicable et suivez l’instruction de renvoi ou de conservation donnée pour votre dossier.",
    cost: ["Calculer le montant total", "Notez prix, supplément de variante, livraison et taxes ou conversion affichées au paiement. Les pages publiques Hacoo consultées ne donnent pas de tarif universel. Le prix d’une carte produit n’est pas un total livré."],
    timing: "La page publique indique 15–25 jours pour Royaume-Uni, France, Allemagne et Italie, 15–30 pour Espagne et 25–65 pour les autres destinations. Ces repères ne confirment ni couverture de l’adresse ni date garantie. N’additionnez pas les étapes qui se chevauchent entre plusieurs pages.",
    refund: ["Distinguer accord et réception des fonds", "La politique publique décrit un examen normalement sous 24 heures, prolongeable pendant fêtes ou promotions, puis 8–15 jours ouvrés pour carte bancaire ou 5–7 pour PayPal. Ce sont des repères publiés, pas une promesse universelle. Vérifiez accord et moyen de paiement."],
    instructions: ["Suivre la consigne propre au dossier", "Une page de livraison décrit des remboursements sans retour ; la politique de remboursement prévoit soit renvoi, soit conservation. Obtenez l’instruction de votre commande avant tout envoi. Admissibilité, exclusions et frais doivent être vérifiés séparément."],
    region: "Saisissez votre adresse réelle dans le parcours actuel. Une liste de pays ou une mention de livraison mondiale ne confirme pas la disponibilité pour un article, une île ou un territoire isolé.",
    qc: "Examinez identité, mesures et état visible dans des images pertinentes. Une photo de catalogue ne prouve pas l’état de votre exemplaire et ce guide ne suppose pas un service universel de photos en entrepôt.",
    reference: "Sources : pages publiques Hacoo Shipping & Delivery et Return & Refund Policy · consultées le 10 octobre 2026. Les conditions de la commande précise restent déterminantes.",
    facts: ["Repère global publié, en jours", "Vérifiez commande et adresse exactes", "Confirmez l’accord et les étapes requises"],
    boundary: "Le catalogue est une destination distincte. Les politiques Hacoo décrites ne s’appliquent pas automatiquement aux achats effectués auprès d’un autre service.",
  },
  it: {
    shipping: "Controlla i costi Hacoo al pagamento per articolo e indirizzo esatti. I tempi pubblicati sono indicativi; usa la previsione dell’ordine per tracking e ritardi.",
    returns: "Verifica l’idoneità, presenta le prove entro il termine applicabile e segui l’istruzione di restituire o conservare l’articolo relativa al tuo caso.",
    cost: ["Calcolare il totale da pagare", "Registra prezzo, supplementi della variante, spedizione e tasse o conversione mostrate al checkout. Le pagine pubbliche Hacoo consultate non danno un costo universale. Il prezzo di una scheda non è il totale consegnato."],
    timing: "La pagina pubblica indica 15–25 giorni per Regno Unito, Francia, Germania e Italia, 15–30 per Spagna e 25–65 per altre destinazioni. Sono riferimenti ampi, non conferme di copertura o date garantite. Non sommare fasi sovrapposte di pagine diverse.",
    refund: ["Distinguere approvazione e accredito", "La politica pubblica descrive una revisione normalmente entro 24 ore, estendibile durante festività o promozioni, e poi 8–15 giorni lavorativi per carta o 5–7 per PayPal. Sono riferimenti pubblicati, non promesse universali. Verifica approvazione e metodo di pagamento."],
    instructions: ["Seguire le istruzioni del caso", "Una pagina spedizioni descrive rimborsi senza restituzione; la politica rimborsi prevede sia reso sia conservazione. Ottieni l’istruzione dell’ordine prima di spedire. Idoneità, esclusioni e costi vanno verificati separatamente."],
    region: "Inserisci l’indirizzo reale nel processo attuale. Un elenco di paesi o la dicitura spedizione mondiale non conferma disponibilità per articolo, isola o territorio remoto.",
    qc: "Esamina identità, misure e condizioni visibili nelle immagini pertinenti. Una foto di catalogo non prova lo stato del tuo esemplare e la guida non presume un servizio universale di foto in magazzino.",
    reference: "Fonti: pagine pubbliche Hacoo Shipping & Delivery e Return & Refund Policy · consultate il 10 ottobre 2026. Fanno fede le condizioni dell’ordine specifico.",
    facts: ["Riferimento complessivo pubblicato, in giorni", "Verifica ordine e indirizzo esatti", "Conferma approvazione e azioni richieste"],
    boundary: "Il catalogo è una destinazione separata. Le politiche Hacoo descritte non si applicano automaticamente ai prodotti o acquisti presso un altro servizio.",
  },
} as const;

export function applySeoUpdates(content: Record<Lang, LocaleContent>) {
  const prices = {
    en: ["The four product cards were checked against their exact destination images and displayed USD prices on 10 October 2026.", "USD snapshot: 10 October 2026. Confirm the selected option and live price; delivery, taxes and payment conversion may change the final total.", "Dated USD reference"],
    de: ["Die vier Produktkarten wurden am 10. Oktober 2026 mit den genauen Zielbildern und angezeigten USD-Preisen abgeglichen.", "USD-Momentaufnahme: 10. Oktober 2026. Prüfe gewählte Option und Live-Preis; Versand, Steuern und Zahlungsumrechnung können den Endbetrag ändern.", "Datierter USD-Richtwert"],
    es: ["Las cuatro fichas se contrastaron con las imágenes exactas del destino y los precios mostrados en USD el 10 de octubre de 2026.", "Referencia USD: 10 de octubre de 2026. Confirma opción y precio actual; envío, impuestos y conversión pueden cambiar el total.", "Referencia USD fechada"],
    fr: ["Les quatre fiches ont été comparées aux images exactes de destination et aux prix affichés en USD le 10 octobre 2026.", "Repère USD : 10 octobre 2026. Confirmez option et prix actuel ; livraison, taxes et conversion peuvent modifier le total.", "Repère USD daté"],
    it: ["Le quattro schede sono state confrontate con le immagini esatte di destinazione e i prezzi mostrati in USD il 10 ottobre 2026.", "Riferimento USD: 10 ottobre 2026. Conferma opzione e prezzo attuale; spedizione, tasse e conversione possono cambiare il totale.", "Riferimento USD datato"],
  };
  for (const lang of Object.keys(content) as Lang[]) {
    const c = content[lang], d = seoDetails[lang];
    (["spreadsheet", "finds", "qc-guide", "shipping", "returns", "articles", "faq"] as const).forEach((route, i) => { c.pageInfo[route].title = titles[lang][i]; });
    c.pageInfo.shipping.text = d.shipping; c.pageInfo.returns.text = d.returns; c.pageInfo["qc-guide"].text = d.qc;
    c.shipping.asideText = d.timing;
    c.shipping.facts = [["15–28", d.facts[0]], ["✓", d.facts[1]]];
    c.shipping.items = [d.cost, ...c.shipping.items.filter((_, i) => i !== 3)];
    c.shipping.items[1] = [c.shipping.items[1][0], d.region];
    c.returns.facts = [["15", c.returns.facts[0][1]], ["✓", d.facts[2]]];
    c.returns.items = [d.instructions, d.refund, ...c.returns.items.filter((_, i) => i !== 1)];
    c.shipping.source = c.returns.source = c.qc.source = d.reference;
    c.qc.asideText = d.qc;
    c.faq[4] = [c.faq[4][0], d.region];
    c.spreadsheet.items[2] = [c.spreadsheet.items[2][0], d.region];
    c.spreadsheet.asideText = d.boundary;
    c.finds.headingText = prices[lang][0];
    c.finds.priceNote = `${prices[lang][1]} ${d.boundary}`;
    c.finds.items[2] = [prices[lang][2], prices[lang][1]];
    c.home.priceNote = c.finds.priceNote;
  }
}
