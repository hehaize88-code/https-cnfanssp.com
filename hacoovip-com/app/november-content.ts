import type { Lang } from "./site-data";
import type { ArticleSource } from "./article-content";

export const novemberCopy = {
  en: {
    shippingTitle: "Hacoo Shipping Cost & Delivery Times by Country",
    shippingDescription: "How much is Hacoo shipping? Check the checkout cost, processing time and delivery ranges for the UK, US, Germany, France, Italy and Spain before ordering.",
    returnsDescription: "Check Hacoo’s 15-day eligible request window, evidence requirements, return instructions and card or PayPal refund timing before submitting your case.",
    tableTitle: "How long does Hacoo take to deliver?", columns: ["Destination", "Published delivery range"],
    countries: ["United Kingdom", "France", "Germany", "Italy", "Spain", "Other destinations (including the US)"], days: "days",
    tableNote: "The official page lists these broad ranges and separately describes 3–5 business days for processing. Do not add estimates from different pages together. Your order estimate and actual address determine what is available; these ranges are not guaranteed arrival dates.",
    costLabel: "Cost at checkout", costText: "Select the exact item, quantity and delivery address to see the shipping charge. There is no single published fee that applies to every order.",
    processing: "Processing reference, in business days", quickTitle: "Before requesting a return", quick: [["15 days", "General window after receipt for eligible requests. Check the order deadline and product exclusions."], ["Get the instruction", "Your case may require a return or allow you to keep the item. Confirm the address and postage before sending it."], ["After processing", "Published payment references: card 8–15 working days; PayPal 5–7. Approval and money received are separate stages."]],
    sourceLabel: "Official sources · checked 6 November 2026", shippingSource: "Shipping and delivery", refundSource: "Return and refund policy", helpSource: "Evidence requirements",
    qcAside: "Start with the selected variant, then request the missing angle or measurement. The sneaker guide below includes a six-view photo list and a clearly labelled sizing example; the general checklist covers other product types.",
    qcNote: "Photo-review guidance. Catalogue illustrations are labelled; a photograph alone cannot confirm authenticity, material composition or fit.",
    researchNote: "Follow the current instructions in your own order; the examples and checklists here are independent editorial guidance.",
  },
  de: {
    shippingTitle: "Hacoo Versandkosten & Lieferzeiten nach Land",
    shippingDescription: "Wie teuer ist Hacoo-Versand? Prüfe Kosten im Checkout, Bearbeitung und Lieferzeiten für Deutschland, UK, USA, Frankreich, Italien und Spanien.",
    returnsDescription: "Prüfe die allgemeine Hacoo-Antragsfrist von 15 Tagen, Nachweise, Rücksendeanweisung und Erstattungszeiten für Kreditkarte oder PayPal vor deiner Anfrage.",
    tableTitle: "Wie lange dauert die Hacoo-Lieferung?", columns: ["Zielland", "Veröffentlichter Lieferzeitraum"],
    countries: ["Vereinigtes Königreich", "Frankreich", "Deutschland", "Italien", "Spanien", "Andere Ziele (einschließlich USA)"], days: "Tage",
    tableNote: "Die offizielle Seite nennt diese groben Zeiträume und separat 3–5 Arbeitstage Bearbeitung. Addiere keine Schätzungen verschiedener Seiten. Bestellprognose und tatsächliche Adresse bestimmen die Verfügbarkeit; die Angaben sind keine garantierten Ankunftstermine.",
    costLabel: "Kosten im Checkout", costText: "Wähle genauen Artikel, Menge und Lieferadresse, um die Versandkosten zu sehen. Es gibt keinen veröffentlichten Einheitspreis für jede Bestellung.",
    processing: "Bearbeitungsrichtwert in Arbeitstagen", quickTitle: "Vor dem Retourenantrag", quick: [["15 Tage", "Allgemeine Frist ab Erhalt für berechtigte Anträge. Prüfe Bestellfrist und Produktausnahmen."], ["Anweisung klären", "Je nach Fall musst du zurücksenden oder darfst den Artikel behalten. Bestätige Adresse und Porto vor dem Versand."], ["Nach Bearbeitung", "Zahlungsrichtwerte: Kreditkarte 8–15 Arbeitstage, PayPal 5–7. Genehmigung und Geldeingang sind getrennte Phasen."]],
    sourceLabel: "Offizielle Quellen · geprüft am 6. November 2026", shippingSource: "Versand und Lieferung", refundSource: "Retouren- und Erstattungsrichtlinie", helpSource: "Erforderliche Nachweise",
    qcAside: "Beginne mit der gewählten Variante und frage gezielt nach fehlendem Winkel oder Maß. Der Sneaker-Ratgeber bietet sechs Bildgruppen und ein gekennzeichnetes Größenbeispiel; die allgemeine Checkliste behandelt weitere Produktarten.",
    qcNote: "Anleitung zur Fotoprüfung. Katalogbilder sind gekennzeichnet; Fotos allein bestätigen weder Echtheit noch Zusammensetzung oder Passform.",
    researchNote: "Befolge die aktuellen Anweisungen deiner Bestellung; Beispiele und Checklisten sind unabhängige redaktionelle Hilfen.",
  },
  es: {
    shippingTitle: "Envío Hacoo: gastos y plazos por país",
    shippingDescription: "¿Cuánto cuesta el envío Hacoo? Comprueba el precio al pagar, la preparación y los plazos para España, Reino Unido, EE. UU., Alemania, Francia e Italia.",
    returnsDescription: "Consulta el plazo general Hacoo de 15 días, las pruebas necesarias, las instrucciones de devolución y los tiempos de reembolso por tarjeta o PayPal.",
    tableTitle: "¿Cuánto tarda Hacoo en entregar?", columns: ["Destino", "Plazo de entrega publicado"],
    countries: ["Reino Unido", "Francia", "Alemania", "Italia", "España", "Otros destinos (incluido EE. UU.)"], days: "días",
    tableNote: "La página oficial indica estos rangos generales y describe por separado 3–5 días laborables de preparación. No sumes estimaciones de páginas distintas. Consulta previsión del pedido y dirección real; estos rangos no garantizan una fecha de llegada.",
    costLabel: "Coste al pagar", costText: "Selecciona artículo, cantidad y dirección exactos para ver el porte. No hay una tarifa pública única aplicable a todos los pedidos.",
    processing: "Referencia de preparación, días laborables", quickTitle: "Antes de solicitar una devolución", quick: [["15 días", "Plazo general desde la recepción para solicitudes admisibles. Revisa fecha del pedido y exclusiones."], ["Confirma la instrucción", "Tu caso puede exigir devolución o permitir conservar el artículo. Confirma dirección y porte antes de enviarlo."], ["Tras la tramitación", "Referencias de abono: tarjeta 8–15 días laborables; PayPal 5–7. Aprobación y recepción del dinero son fases distintas."]],
    sourceLabel: "Fuentes oficiales · revisadas el 6 de noviembre de 2026", shippingSource: "Envío y entrega", refundSource: "Política de devolución y reembolso", helpSource: "Pruebas necesarias",
    qcAside: "Empieza por la variante elegida y solicita el ángulo o medida que falte. La guía de zapatillas ofrece seis grupos de fotos y un ejemplo de talla identificado; la lista general cubre otros productos.",
    qcNote: "Método de revisión fotográfica. Las imágenes de catálogo se identifican; una foto sola no confirma autenticidad, composición ni ajuste.",
    researchNote: "Sigue las instrucciones actuales de tu pedido; ejemplos y listas son orientación editorial independiente.",
  },
  fr: {
    shippingTitle: "Livraison Hacoo : frais et délais par pays",
    shippingDescription: "Combien coûte la livraison Hacoo ? Vérifiez frais au paiement, préparation et délais pour France, Royaume-Uni, États-Unis, Allemagne, Italie et Espagne.",
    returnsDescription: "Vérifiez le délai général Hacoo de 15 jours, les preuves requises, les consignes de retour et les délais de remboursement par carte ou PayPal.",
    tableTitle: "Combien de temps prend la livraison Hacoo ?", columns: ["Destination", "Délai de livraison publié"],
    countries: ["Royaume-Uni", "France", "Allemagne", "Italie", "Espagne", "Autres destinations (dont États-Unis)"], days: "jours",
    tableNote: "La page officielle indique ces fourchettes générales et décrit séparément 3–5 jours ouvrés de préparation. N’additionnez pas les estimations de pages différentes. Consultez votre commande et votre adresse réelle ; ces repères ne garantissent pas une date d’arrivée.",
    costLabel: "Frais au paiement", costText: "Sélectionnez article, quantité et adresse exacts pour afficher les frais. Il n’existe pas de tarif public unique pour toutes les commandes.",
    processing: "Repère de préparation, en jours ouvrés", quickTitle: "Avant une demande de retour", quick: [["15 jours", "Délai général après réception pour les demandes admissibles. Vérifiez l’échéance et les exclusions."], ["Confirmer la consigne", "Votre dossier peut exiger un retour ou autoriser la conservation. Confirmez adresse et frais avant l’envoi."], ["Après traitement", "Repères de paiement : carte 8–15 jours ouvrés ; PayPal 5–7. Accord et réception des fonds sont deux étapes."]],
    sourceLabel: "Sources officielles · vérifiées le 6 novembre 2026", shippingSource: "Expédition et livraison", refundSource: "Politique de retour et remboursement", helpSource: "Preuves nécessaires",
    qcAside: "Commencez par la variante choisie, puis demandez l’angle ou la mesure manquante. Le guide baskets fournit six groupes de vues et un exemple de taille identifié ; la liste générale couvre les autres produits.",
    qcNote: "Méthode de lecture des photos. Les illustrations de catalogue sont identifiées ; une photo seule ne confirme ni authenticité, ni composition, ni ajustement.",
    researchNote: "Suivez les instructions actuelles de votre commande ; exemples et listes constituent une aide éditoriale indépendante.",
  },
  it: {
    shippingTitle: "Spedizione Hacoo: costi e tempi per paese",
    shippingDescription: "Quanto costa la spedizione Hacoo? Controlla prezzo al checkout, preparazione e tempi per Italia, Regno Unito, USA, Germania, Francia e Spagna.",
    returnsDescription: "Verifica il termine generale Hacoo di 15 giorni, le prove richieste, le istruzioni di reso e i tempi di rimborso con carta o PayPal prima della domanda.",
    tableTitle: "Quanto impiega Hacoo a consegnare?", columns: ["Destinazione", "Intervallo di consegna pubblicato"],
    countries: ["Regno Unito", "Francia", "Germania", "Italia", "Spagna", "Altre destinazioni (inclusi USA)"], days: "giorni",
    tableNote: "La pagina ufficiale indica questi intervalli generali e separatamente 3–5 giorni lavorativi di preparazione. Non sommare stime di pagine diverse. Consulta ordine e indirizzo effettivo; i valori non garantiscono una data di arrivo.",
    costLabel: "Costo al checkout", costText: "Seleziona articolo, quantità e indirizzo esatti per vedere la spedizione. Non esiste una tariffa pubblica unica per ogni ordine.",
    processing: "Riferimento di preparazione, giorni lavorativi", quickTitle: "Prima di richiedere un reso", quick: [["15 giorni", "Termine generale dal ricevimento per richieste ammissibili. Controlla scadenza ed esclusioni."], ["Conferma l’istruzione", "Il caso può richiedere restituzione o consentire di tenere l’articolo. Conferma indirizzo e spese prima dell’invio."], ["Dopo l’elaborazione", "Riferimenti di accredito: carta 8–15 giorni lavorativi; PayPal 5–7. Approvazione e ricezione sono fasi distinte."]],
    sourceLabel: "Fonti ufficiali · verificate il 6 novembre 2026", shippingSource: "Spedizione e consegna", refundSource: "Politica di reso e rimborso", helpSource: "Prove necessarie",
    qcAside: "Parti dalla variante scelta e chiedi l’angolo o la misura mancante. La guida sneaker offre sei gruppi di foto e un esempio di taglia identificato; la checklist generale copre altri prodotti.",
    qcNote: "Metodo di esame fotografico. Le immagini di catalogo sono identificate; una foto sola non conferma autenticità, composizione o calzata.",
    researchNote: "Segui le istruzioni attuali del tuo ordine; esempi e checklist sono indicazioni editoriali indipendenti.",
  },
} as const;

export const officialUrls = {
  shipping: "https://www.hacoo.app/en-GB/pages/shipping-info",
  refund: "https://act.hacoo.app/refund-policy",
  help: "https://act.hacoo.app/act/sara/helpcenter/home/qa3",
} as const;

export function evidenceSources(keys: (keyof typeof officialUrls)[]): ArticleSource[] {
  return keys.map(key => ({
    name: `Hacoo — ${key === "shipping" ? "Shipping & Delivery" : key === "refund" ? "Return & Refund Policy" : "Help Centre"}`,
    url: officialUrls[key], checked: "2026-11-06",
    supports: Object.fromEntries((Object.keys(novemberCopy) as Lang[]).map(lang => [lang, novemberCopy[lang][key === "shipping" ? "shippingSource" : key === "refund" ? "refundSource" : "helpSource"]])) as Record<Lang,string>,
  }));
}
