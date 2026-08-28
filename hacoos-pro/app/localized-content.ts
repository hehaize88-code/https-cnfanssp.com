import { locales, type Locale, type PageKey } from "./site-data";

export type ArticleKey = Extract<PageKey, `articles/${string}`>;

type LocalizedUi = {
  primaryNav: string;
  language: string;
  liveIndex: string;
  matchedFinds: string;
  languages: string;
  buyerGuides: string;
  explore: string;
  matched: string;
  route: string;
  seoLibrary: string;
  quickAnswers: string;
  deepReads: string;
  answers: string;
  practicalChecklist: string;
  evidenceTitle: string;
  evidenceChecked: string;
  keyTakeaways: string;
  articleSources: string;
  readingTime: string;
  minutes: string;
  lastReviewed: string;
  relatedReading: string;
  exampleImage: string;
  figureCaption: string;
  categoryNames: Record<string, string>;
  productCategories: Record<string, string>;
  productNames: Record<string, string>;
};

export const ui: Record<Locale, LocalizedUi> = {
  en: {
    primaryNav: "Primary navigation", language: "Language", liveIndex: "LIVE INDEX", matchedFinds: "source-matched finds", languages: "languages", buyerGuides: "buyer guides", explore: "EXPLORE", matched: "MATCHED", route: "ROUTE", seoLibrary: "SEO LIBRARY", quickAnswers: "QUICK ANSWERS", deepReads: "DEEP READS", answers: "ANSWERS", practicalChecklist: "PRACTICAL CHECKLIST", evidenceTitle: "Verified Hacoo facts", evidenceChecked: "Evidence checked 27 August 2026", keyTakeaways: "Key takeaways", articleSources: "Research basis", readingTime: "Reading time", minutes: "min", lastReviewed: "Last reviewed", relatedReading: "Related reading", exampleImage: "Source-matched listing example", figureCaption: "The first image helps confirm listing identity, but the current variant, measurements and recent reviews still need checking.",
    categoryNames: { shoes: "Shoes", hoodies: "Sweatshirts", "t-shirts": "T-Shirts", jackets: "Jackets", pants: "Pants / Shorts", headwear: "Headwear", accessories: "Accessories", jersey: "Jersey" },
    productCategories: { shoes: "shoes", sets: "sets", hoodies: "hoodies", bags: "bags", "t-shirts": "t-shirts" },
    productNames: { "7638942248": "AMIRI MA-1 Sneakers — 9 styles", "7656214053": "World T-shirt & Hoodie Set — 40+ styles", "7622957753": "Celine Hoodie", "7666359522": "Neverfull Tote Bag — 39 styles", "7588924374": "Omerta 47 T-shirt", "7572947321": "6PM Hoodie Set", "7582900895": "Trapstar Bag", "7645681448": "Autry Shoes" },
  },
  de: {
    primaryNav: "Hauptnavigation", language: "Sprache", liveIndex: "LIVE-INDEX", matchedFinds: "abgeglichene Funde", languages: "Sprachen", buyerGuides: "Kaufratgeber", explore: "ENTDECKEN", matched: "ABGEGLICHEN", route: "ABLAUF", seoLibrary: "SEO-BIBLIOTHEK", quickAnswers: "SCHNELLE ANTWORTEN", deepReads: "AUSFÜHRLICHE ARTIKEL", answers: "ANTWORTEN", practicalChecklist: "PRAKTISCHE CHECKLISTE", evidenceTitle: "Geprüfte Fakten zu Hacoo", evidenceChecked: "Quellen geprüft am 27. August 2026", keyTakeaways: "Wichtigste Erkenntnisse", articleSources: "Recherchegrundlage", readingTime: "Lesezeit", minutes: "Min.", lastReviewed: "Zuletzt geprüft", relatedReading: "Weiterführende Artikel", exampleImage: "Beispiel eines abgeglichenen Eintrags", figureCaption: "Das erste Bild bestätigt die Identität, doch Variante, Maße und aktuelle Bewertungen müssen weiterhin geprüft werden.",
    categoryNames: { shoes: "Schuhe", hoodies: "Sweatshirts", "t-shirts": "T-Shirts", jackets: "Jacken", pants: "Hosen / Shorts", headwear: "Kopfbedeckungen", accessories: "Accessoires", jersey: "Trikots" },
    productCategories: { shoes: "Schuhe", sets: "Sets", hoodies: "Hoodies", bags: "Taschen", "t-shirts": "T-Shirts" },
    productNames: { "7638942248": "AMIRI MA-1 Sneaker — 9 Varianten", "7656214053": "World T-Shirt- & Hoodie-Set — über 40 Varianten", "7622957753": "Celine Hoodie", "7666359522": "Neverfull Tragetasche — 39 Varianten", "7588924374": "Omerta 47 T-Shirt", "7572947321": "6PM Hoodie-Set", "7582900895": "Trapstar Tasche", "7645681448": "Autry Schuhe" },
  },
  fr: {
    primaryNav: "Navigation principale", language: "Langue", liveIndex: "INDEX ACTUEL", matchedFinds: "fiches vérifiées", languages: "langues", buyerGuides: "guides d’achat", explore: "EXPLORER", matched: "VÉRIFIÉ", route: "PARCOURS", seoLibrary: "BIBLIOTHÈQUE SEO", quickAnswers: "RÉPONSES RAPIDES", deepReads: "ARTICLES APPROFONDIS", answers: "RÉPONSES", practicalChecklist: "LISTE DE CONTRÔLE", evidenceTitle: "Faits vérifiés sur Hacoo", evidenceChecked: "Sources vérifiées le 27 août 2026", keyTakeaways: "À retenir", articleSources: "Base documentaire", readingTime: "Temps de lecture", minutes: "min", lastReviewed: "Dernière vérification", relatedReading: "À lire aussi", exampleImage: "Exemple de fiche rapprochée", figureCaption: "La première image aide à confirmer l’identité, mais il faut encore vérifier variante, mesures et avis récents.",
    categoryNames: { shoes: "Chaussures", hoodies: "Sweats", "t-shirts": "T-shirts", jackets: "Vestes", pants: "Pantalons / Shorts", headwear: "Couvre-chefs", accessories: "Accessoires", jersey: "Maillots" },
    productCategories: { shoes: "chaussures", sets: "ensembles", hoodies: "sweats", bags: "sacs", "t-shirts": "t-shirts" },
    productNames: { "7638942248": "Sneakers AMIRI MA-1 — 9 modèles", "7656214053": "Ensemble T-shirt et sweat World — plus de 40 modèles", "7622957753": "Sweat Celine", "7666359522": "Sac cabas Neverfull — 39 modèles", "7588924374": "T-shirt Omerta 47", "7572947321": "Ensemble sweat 6PM", "7582900895": "Sac Trapstar", "7645681448": "Chaussures Autry" },
  },
  es: {
    primaryNav: "Navegación principal", language: "Idioma", liveIndex: "ÍNDICE ACTUAL", matchedFinds: "hallazgos verificados", languages: "idiomas", buyerGuides: "guías de compra", explore: "EXPLORAR", matched: "VERIFICADO", route: "RUTA", seoLibrary: "BIBLIOTECA SEO", quickAnswers: "RESPUESTAS RÁPIDAS", deepReads: "ARTÍCULOS EN PROFUNDIDAD", answers: "RESPUESTAS", practicalChecklist: "LISTA DE CONTROL", evidenceTitle: "Datos verificados sobre Hacoo", evidenceChecked: "Fuentes revisadas el 27 de agosto de 2026", keyTakeaways: "Puntos clave", articleSources: "Base de la investigación", readingTime: "Tiempo de lectura", minutes: "min", lastReviewed: "Última revisión", relatedReading: "Lecturas relacionadas", exampleImage: "Ejemplo de ficha comprobada", figureCaption: "La primera imagen ayuda a confirmar la identidad, pero aún deben revisarse variante, medidas y opiniones recientes.",
    categoryNames: { shoes: "Zapatillas", hoodies: "Sudaderas", "t-shirts": "Camisetas", jackets: "Chaquetas", pants: "Pantalones / Shorts", headwear: "Gorras y gorros", accessories: "Accesorios", jersey: "Camisetas deportivas" },
    productCategories: { shoes: "zapatillas", sets: "conjuntos", hoodies: "sudaderas", bags: "bolsos", "t-shirts": "camisetas" },
    productNames: { "7638942248": "Zapatillas AMIRI MA-1 — 9 modelos", "7656214053": "Conjunto de camiseta y sudadera World — más de 40 modelos", "7622957753": "Sudadera Celine", "7666359522": "Bolso Neverfull — 39 modelos", "7588924374": "Camiseta Omerta 47", "7572947321": "Conjunto de sudadera 6PM", "7582900895": "Bolso Trapstar", "7645681448": "Zapatillas Autry" },
  },
  it: {
    primaryNav: "Navigazione principale", language: "Lingua", liveIndex: "INDICE AGGIORNATO", matchedFinds: "prodotti verificati", languages: "lingue", buyerGuides: "guide all’acquisto", explore: "ESPLORA", matched: "VERIFICATO", route: "PERCORSO", seoLibrary: "RACCOLTA SEO", quickAnswers: "RISPOSTE RAPIDE", deepReads: "ARTICOLI APPROFONDITI", answers: "RISPOSTE", practicalChecklist: "LISTA DI CONTROLLO", evidenceTitle: "Dati verificati su Hacoo", evidenceChecked: "Fonti verificate il 27 agosto 2026", keyTakeaways: "Punti chiave", articleSources: "Base della ricerca", readingTime: "Tempo di lettura", minutes: "min", lastReviewed: "Ultima verifica", relatedReading: "Letture correlate", exampleImage: "Esempio di scheda verificata", figureCaption: "La prima immagine aiuta a confermare l’identità, ma variante, misure e recensioni recenti vanno ancora controllate.",
    categoryNames: { shoes: "Scarpe", hoodies: "Felpe", "t-shirts": "T-shirt", jackets: "Giacche", pants: "Pantaloni / Shorts", headwear: "Cappelli", accessories: "Accessori", jersey: "Maglie sportive" },
    productCategories: { shoes: "scarpe", sets: "completi", hoodies: "felpe", bags: "borse", "t-shirts": "t-shirt" },
    productNames: { "7638942248": "Sneaker AMIRI MA-1 — 9 modelli", "7656214053": "Completo T-shirt e felpa World — oltre 40 modelli", "7622957753": "Felpa Celine", "7666359522": "Borsa Neverfull — 39 modelli", "7588924374": "T-shirt Omerta 47", "7572947321": "Completo felpa 6PM", "7582900895": "Borsa Trapstar", "7645681448": "Scarpe Autry" },
  },
};

const evidenceUi: Record<Locale, Pick<LocalizedUi, "liveIndex" | "matchedFinds" | "buyerGuides">> = {
  en: { liveIndex: "EVIDENCE DESK", matchedFinds: "source-checked records", buyerGuides: "verification guides" },
  de: { liveIndex: "EVIDENZ-DESK", matchedFinds: "quellengeprüfte Datensätze", buyerGuides: "Prüfratgeber" },
  fr: { liveIndex: "BUREAU DE PREUVES", matchedFinds: "dossiers vérifiés", buyerGuides: "guides de vérification" },
  es: { liveIndex: "MESA DE PRUEBAS", matchedFinds: "registros verificados", buyerGuides: "guías de verificación" },
  it: { liveIndex: "DESK DELLE PROVE", matchedFinds: "record verificati", buyerGuides: "guide di verifica" },
};

for (const locale of locales) Object.assign(ui[locale], evidenceUi[locale]);

export type EvidenceFact = { value: string; label: string; note: string };

export const evidenceFacts: Record<Locale, EvidenceFact[]> = {
  en: [
    { value: "10M+", label: "Google Play downloads", note: "Google Play listed Hacoo at more than ten million downloads when checked." },
    { value: "15–28 days", label: "general receiving estimate", note: "Hacoo says processing normally takes 3–5 business days and publishes separate destination-specific receiving ranges." },
    { value: "15 days", label: "general return window", note: "The official policy lists exclusions and says exchanges are not currently supported." },
    { value: "3.6 / 5", label: "Trustpilot snapshot", note: "3,267 reviews showed sharply mixed experiences; this is context, not a quality guarantee." },
  ],
  de: [
    { value: "10 Mio.+", label: "Downloads bei Google Play", note: "Google Play führte Hacoo bei der Prüfung mit mehr als zehn Millionen Downloads." },
    { value: "15–28 Tage", label: "allgemeine Empfangsprognose", note: "Hacoo nennt gewöhnlich 3–5 Werktage Bearbeitung und veröffentlicht eigene Empfangszeiten je Zielregion." },
    { value: "15 Tage", label: "allgemeine Rückgabefrist", note: "Die offizielle Regel nennt Ausnahmen und erklärt, dass derzeit kein Umtausch angeboten wird." },
    { value: "3,6 / 5", label: "Trustpilot-Momentaufnahme", note: "3.267 Bewertungen zeigten stark gemischte Erfahrungen; das ist Kontext, keine Qualitätsgarantie." },
  ],
  fr: [
    { value: "10 M+", label: "téléchargements Google Play", note: "Google Play affichait plus de dix millions de téléchargements lors de notre vérification." },
    { value: "15–28 jours", label: "estimation générale de réception", note: "Hacoo indique normalement 3–5 jours ouvrés de traitement et publie des délais de réception distincts selon la destination." },
    { value: "15 jours", label: "délai général de retour", note: "La politique officielle prévoit des exclusions et indique que les échanges ne sont pas proposés actuellement." },
    { value: "3,6 / 5", label: "instantané Trustpilot", note: "3 267 avis montraient des expériences très partagées; ce chiffre ne garantit pas la qualité." },
  ],
  es: [
    { value: "10 M+", label: "descargas en Google Play", note: "Google Play mostraba más de diez millones de descargas en la fecha de revisión." },
    { value: "15–28 días", label: "estimación general de recepción", note: "Hacoo indica normalmente 3–5 días laborables de procesamiento y publica plazos de recepción distintos según el destino." },
    { value: "15 días", label: "plazo general de devolución", note: "La política oficial incluye excepciones e indica que actualmente no hay cambios." },
    { value: "3,6 / 5", label: "captura de Trustpilot", note: "3.267 reseñas mostraban experiencias muy divididas; es contexto, no una garantía de calidad." },
  ],
  it: [
    { value: "10 M+", label: "download su Google Play", note: "Google Play indicava oltre dieci milioni di download alla data della verifica." },
    { value: "15–28 giorni", label: "stima generale di ricezione", note: "Hacoo indica normalmente 3–5 giorni lavorativi di elaborazione e pubblica tempi di ricezione distinti per destinazione." },
    { value: "15 giorni", label: "termine generale di reso", note: "La politica ufficiale prevede esclusioni e precisa che al momento non sono disponibili cambi." },
    { value: "3,6 / 5", label: "istantanea Trustpilot", note: "3.267 recensioni mostravano esperienze molto contrastanti; è un contesto, non una garanzia." },
  ],
};

const enChecklists: Partial<Record<PageKey, string[]>> = {
  "qc-guide": ["Confirm the exact item, colour and variant before examining quality.", "Compare proportions, symmetry, stitching, edge paint, hardware and printed details.", "Use ruler photos for dimensions rather than judging scale by eye.", "Keep packaging and photograph defects: Hacoo's return guidance asks for different evidence for quality, damage, wrong-item and missing-item claims.", "Judge one item from its current evidence; neither a link nor an average rating guarantees the unit you receive."],
  shipping: ["Budget for Hacoo's general 15–28 day receiving estimate, not a best-case social-media delivery story.", "Keep the official 3–5 business-day processing statement separate from destination-specific receiving estimates.", "Confirm the destination and address before payment; region and availability can affect what appears in the app.", "Keep tracking, the outer package and shipping label until the order is complete.", "Open after-sales promptly: the official general window is 15 days after receipt, with exclusions."],
  guide: ["Set the correct country or region before searching because catalog visibility can vary.", "Match the title, first image, variant, product ID and current price at the destination.", "Read recent item-level reviews and inspect user photos rather than relying on a spreadsheet label.", "Check measurements and the official delivery/return conditions before paying.", "Save the selected option and product ID so you can document what you intended to open."],
};

export const pageChecklists: Record<Locale, Partial<Record<PageKey, string[]>>> = {
  en: enChecklists,
  de: {
    "qc-guide": ["Zuerst Artikel, Farbe und Variante eindeutig bestätigen.", "Proportionen, Symmetrie, Nähte, Kanten, Beschläge und Druckdetails vergleichen.", "Für Maße Linealbilder nutzen, statt Größenverhältnisse zu schätzen.", "Verpackung aufbewahren und Mängel fotografieren; Hacoos Rückgabehinweise verlangen je nach Problem unterschiedliche Nachweise.", "Jeden Artikel anhand aktueller Belege beurteilen; weder Link noch Durchschnittsbewertung garantieren das erhaltene Exemplar."],
    shipping: ["Mit Hacoos allgemeiner Empfangsspanne von 15–28 Tagen planen, nicht mit einem Best-Case-Bericht aus sozialen Medien.", "Die offiziellen 3–5 Werktage Bearbeitung von den zielabhängigen Empfangszeiten getrennt halten.", "Zielland und Adresse vor der Zahlung prüfen; Region und Verfügbarkeit können die Anzeige im App-Katalog verändern.", "Tracking, Außenverpackung und Versandetikett bis zum Abschluss aufbewahren.", "After-Sales zügig starten: Die allgemeine offizielle Frist beträgt 15 Tage nach Erhalt, mit Ausnahmen."],
    guide: ["Vor der Suche Land oder Region korrekt einstellen, da der sichtbare Katalog variieren kann.", "Titel, erstes Bild, Variante, Produkt-ID und aktuellen Zielpreis abgleichen.", "Neue artikelbezogene Bewertungen und Nutzerfotos lesen, nicht nur einer Tabellenzeile vertrauen.", "Maße sowie offizielle Liefer- und Rückgabebedingungen vor der Zahlung prüfen.", "Gewählte Option und Produkt-ID speichern, um die beabsichtigte Auswahl zu dokumentieren."],
  },
  fr: {
    "qc-guide": ["Confirmer l’article exact, la couleur et la variante avant d’évaluer la qualité.", "Comparer proportions, symétrie, coutures, bords, pièces métalliques et impressions.", "Utiliser des photos avec règle pour les dimensions au lieu d’estimer à l’œil.", "Conserver l’emballage et photographier les défauts; les consignes Hacoo demandent des preuves différentes selon le problème.", "Évaluer chaque article avec des preuves récentes; ni un lien ni une moyenne d’avis ne garantissent l’exemplaire reçu."],
    shipping: ["Prévoir l’estimation générale de réception Hacoo de 15–28 jours, pas seulement un témoignage très rapide.", "Distinguer les 3–5 jours ouvrés de traitement des délais de réception propres à chaque destination.", "Confirmer pays et adresse avant paiement; région et disponibilité peuvent modifier le catalogue visible.", "Garder le suivi, l’emballage extérieur et l’étiquette jusqu’à la fin.", "Ouvrir rapidement le dossier après-vente: le délai général officiel est de 15 jours après réception, avec exclusions."],
    guide: ["Régler correctement le pays ou la région avant la recherche, car le catalogue visible peut varier.", "Comparer titre, première image, variante, identifiant et prix actuel de la destination.", "Lire les avis récents sur l’article et examiner les photos d’utilisateurs.", "Vérifier mesures, livraison officielle et conditions de retour avant de payer.", "Enregistrer l’option choisie et l’identifiant produit pour garder une preuve claire."],
  },
  es: {
    "qc-guide": ["Confirma el artículo, color y variante exactos antes de evaluar la calidad.", "Compara proporciones, simetría, costuras, bordes, herrajes e impresiones.", "Usa fotos con regla para las medidas en vez de calcular la escala a ojo.", "Conserva el embalaje y fotografía los defectos; la guía de devoluciones de Hacoo pide pruebas distintas según el problema.", "Evalúa cada unidad con pruebas actuales; ni un enlace ni una nota media garantizan lo que recibirás."],
    shipping: ["Planifica con la estimación general de recepción de Hacoo de 15–28 días, no con el mejor caso visto en redes.", "Separa los 3–5 días laborables de procesamiento de los plazos de recepción específicos del destino.", "Confirma destino y dirección antes de pagar; la región puede cambiar el catálogo visible.", "Guarda seguimiento, paquete exterior y etiqueta hasta completar el pedido.", "Abre la posventa pronto: el plazo general oficial es de 15 días desde la recepción, con excepciones."],
    guide: ["Configura bien país o región antes de buscar porque el catálogo visible puede variar.", "Comprueba título, primera imagen, variante, ID y precio actual de la página de destino.", "Lee reseñas recientes del artículo y revisa fotos de usuarios.", "Verifica medidas y condiciones oficiales de entrega y devolución antes de pagar.", "Guarda la opción elegida y el ID para documentar lo que pretendías abrir."],
  },
  it: {
    "qc-guide": ["Conferma articolo, colore e variante esatti prima di valutare la qualità.", "Confronta proporzioni, simmetria, cuciture, bordi, minuteria e stampe.", "Usa foto con righello per le misure invece di stimare a occhio.", "Conserva l’imballaggio e fotografa i difetti; le istruzioni Hacoo richiedono prove diverse a seconda del problema.", "Valuta ogni unità con prove attuali; né un link né una media recensioni garantiscono ciò che riceverai."],
    shipping: ["Pianifica sulla stima generale di ricezione Hacoo di 15–28 giorni, non sul caso migliore raccontato sui social.", "Separa i 3–5 giorni lavorativi di elaborazione dai tempi di ricezione specifici della destinazione.", "Conferma destinazione e indirizzo prima del pagamento; la regione può cambiare il catalogo visibile.", "Conserva tracking, imballaggio esterno ed etichetta fino alla conclusione.", "Apri presto l’assistenza post-vendita: il termine generale ufficiale è 15 giorni dalla ricezione, con esclusioni."],
    guide: ["Imposta correttamente paese o regione prima della ricerca perché il catalogo può variare.", "Confronta titolo, prima immagine, variante, ID e prezzo attuale della destinazione.", "Leggi recensioni recenti del singolo articolo e controlla le foto degli utenti.", "Verifica misure e condizioni ufficiali di consegna e reso prima di pagare.", "Salva opzione scelta e ID prodotto per documentare chiaramente la selezione."],
  },
};

export const researchBasis: Record<Locale, string[]> = {
  en: ["Hacoo official website, Trust Center and Help Center", "Google Play listing for com.saramart.android", "Apple App Store listing for Hacoo", "Trustpilot review profile and recent review themes"],
  de: ["Offizielle Hacoo-Website, Trust Center und Help Center", "Google-Play-Eintrag für com.saramart.android", "Apple-App-Store-Eintrag für Hacoo", "Trustpilot-Profil und Themen aktueller Bewertungen"],
  fr: ["Site officiel Hacoo, Trust Center et centre d’aide", "Fiche Google Play com.saramart.android", "Fiche Hacoo de l’Apple App Store", "Profil Trustpilot et tendances des avis récents"],
  es: ["Web oficial de Hacoo, Trust Center y centro de ayuda", "Ficha de Google Play com.saramart.android", "Ficha de Hacoo en Apple App Store", "Perfil de Trustpilot y temas de reseñas recientes"],
  it: ["Sito ufficiale Hacoo, Trust Center e centro assistenza", "Scheda Google Play com.saramart.android", "Scheda Hacoo su Apple App Store", "Profilo Trustpilot e temi delle recensioni recenti"],
};
