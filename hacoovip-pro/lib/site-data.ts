import { localizedPages } from "@/lib/page-translations";
import { pageParitySupplements } from "@/lib/page-parity-supplements";

export const languages = ["en", "de", "es", "fr", "it"] as const;
export type Lang = (typeof languages)[number];
export const routes = ["", "spreadsheet", "finds", "guide", "qc", "shipping", "articles", "faq"] as const;

export const products = [
  { name: "AMIRI MA-1 Sneakers", category: "shoes", price: "$53.44", image: "/products/amiri-ma1.webp", href: "https://cnfanssp.com/AllProducts/3842.html" },
  { name: "Represent Hoodie", category: "hoodies", price: "$17.25", image: "/products/represent-hoodie.webp", href: "https://cnfanssp.com/AllProducts/5214.html" },
  { name: "C-Star Mohair Sweater", category: "hoodies", price: "$25.43", image: "/products/corteiz-sweater.webp", href: "https://cnfanssp.com/AllProducts/2504.html" },
  { name: "Jersey 60", category: "jerseys", price: "$13.64", image: "/products/jersey-60.jpg", href: "https://cnfanssp.com/AllProducts/6667.html" },
  { name: "Graphic Phone Case", category: "accessories", price: "$3.45", image: "/products/phone-case.jpg", href: "https://cnfanssp.com/AllProducts/948.html" },
  { name: "Utility Shoulder Bag", category: "accessories", price: "$17.90", image: "/products/trapstar-bag.webp", href: "https://cnfanssp.com/AllProducts/525.html" },
] as const;

export const categories = [
  { key: "shoes", href: "https://cnfanssp.com/shoes/", icon: "01" },
  { key: "hoodies", href: "https://cnfanssp.com/hoodies-sweaters/", icon: "02" },
  { key: "tshirts", href: "https://cnfanssp.com/t-shirts/", icon: "03" },
  { key: "jerseys", href: "https://cnfanssp.com/jersey/", icon: "04" },
  { key: "accessories", href: "https://cnfanssp.com/accessories/", icon: "05" },
  { key: "all", href: "https://cnfanssp.com/AllProducts/", icon: "06" },
] as const;

export type PageCopy = { eyebrow: string; title: string; intro: string; sections: { title: string; body: string }[] };
export type Copy = {
  nav: Record<string, string>; badge: string; hero: string; heroAccent: string; intro: string; search: string; searchButton: string;
  updated: string; independent: string; categoryTitle: string; categorySub: string; productTitle: string; productSub: string;
  open: string; viewAll: string; guideTitle: string; guideSub: string; disclaimer: string; whatsapp: string;
  cats: Record<string, string>; cards: { title: string; body: string }[]; pages: Record<string, PageCopy>;
};

const pagesEn: Record<string, PageCopy> = {
  spreadsheet: {
    eyebrow: "The organized route",
    title: "A Hacoo spreadsheet built for decisions, not endless scrolling.",
    intro: "Use category routes, live product references and a repeatable inspection sequence. This independent guide does not claim to be Hacoo and does not process orders.",
    sections: [
      { title: "What the spreadsheet means", body: "“Hacoo spreadsheet” is the phrase shoppers commonly use for an organized collection of product routes, images, prices and buying notes. It is not necessarily a literal Google Sheet. Here the term describes a browsable index designed for phones, with each listing connected to one current reference page." },
      { title: "How this index stays useful", body: "Products are grouped by the job the shopper needs to complete: discover a category, compare a short list, open the matching product reference, then verify current details. Prices are shown in USD as a quick reference, but the live destination remains the source to recheck before acting." },
      { title: "The three-check rule", body: "Before using any route, compare the product image, title and destination. If one of those signals does not match, stop and return to the category index. This simple rule prevents most wrong-item clicks and makes a curated list more useful than a large, unverified sheet." },
      { title: "Independent by design", body: "HacooVIP Pro is an independent discovery guide. It does not sell products, take payments, handle shipping, verify sellers or represent Hacoo. Product availability, platform rules and prices can change, so every listing is a starting point for your own checks." },
    ],
  },
  finds: {
    eyebrow: "Curated product atlas", title: "Find a category first. Open a product second.",
    intro: "A compact catalogue of visual routes connected to matching reference pages—no fake stock counters and no invented review scores.",
    sections: [
      { title: "Browse by intent", body: "Start with shoes, hoodies, T-shirts, jerseys or accessories. Category-first browsing reduces irrelevant results and makes it easier to compare similar products before opening a live route." },
      { title: "Treat every listing as time-sensitive", body: "A visible card confirms what was selected for this guide, not permanent availability. Open the destination to check the current image, price and details. If the destination changes, rely on the live page rather than the cached card." },
    ],
  },
  guide: {
    eyebrow: "Buyer field guide", title: "A clean route from discovery to a final check.", intro: "The strongest buying workflow is short enough to repeat and strict enough to catch mismatches.",
    sections: [
      { title: "1 — Start narrow", body: "Choose one category or enter a specific product phrase. Broad searches produce more noise; a clear product type, color or model creates a smaller and more comparable result set." },
      { title: "2 — Match the destination", body: "Open a product card and compare the first image and title with the destination page. Do not continue because a page merely loads. A successful response is not proof that it is the same product." },
      { title: "3 — Review the live facts", body: "Check the current price, variant information, available images and any platform-specific notes on the destination. Screenshots and copied prices become stale quickly." },
      { title: "4 — Keep your own record", body: "Save the route, date and the exact option you reviewed. This makes it easier to notice when a listing changes and gives you a clear reference if you return later." },
    ],
  },
  qc: {
    eyebrow: "Visual inspection desk", title: "QC is a checklist, not a quality promise.", intro: "Use a consistent visual review to identify obvious differences before relying on a product route.",
    sections: [
      { title: "Start with the silhouette", body: "Compare the overall shape, proportions and color blocking before inspecting small details. A mismatch in silhouette is more important than a tiny stitching variation." },
      { title: "Move to construction", body: "Check seams, edge finishing, panel alignment, hardware placement and repeated patterns. Look for symmetry across paired items and consistent spacing around logos or graphic elements." },
      { title: "Check labels and sizing", body: "Read the visible size label and compare measurements with a garment you own. Tagged size alone is not a reliable fit guarantee across different listings." },
      { title: "Know the limit", body: "Images cannot prove material composition, long-term durability, authenticity or seller reliability. QC photos reduce uncertainty; they do not remove it." },
    ],
  },
  shipping: {
    eyebrow: "Shipping preparation", title: "Estimate with current inputs, never copied promises.", intro: "Hacoo rules, available destinations and delivery information can change. Use this page as a preparation checklist and verify current terms in the relevant app or live destination.",
    sections: [
      { title: "Separate product and delivery cost", body: "A product price is not a delivered total. Build your estimate from item cost, possible service charges, delivery cost, payment conversion and any local import obligations that may apply." },
      { title: "Weight is only one input", body: "Packaging size, route availability, destination and carrier rules can affect the final quote. Do not reuse another shopper’s total as a guaranteed rate for a different parcel." },
      { title: "Returns are policy-specific", body: "Review the current after-sales window, eligible categories, evidence requirements and non-refundable charges before ordering. Promotional posts and old screenshots are not reliable policy sources." },
      { title: "Record the quote date", body: "When comparing delivery options, save the date and the assumptions used. A dated estimate is easier to evaluate than a number with no destination, weight or context." },
    ],
  },
  articles: {
    eyebrow: "Independent research library", title: "Fact-checked Hacoo guides for one task at a time.", intro: "Long-form guides built from dated Hacoo policy pages, current app-store information and clearly labelled customer-review evidence.",
    sections: [
      { title: "How to use a Hacoo spreadsheet without losing the live source", body: "A practical method for moving from a curated visual index to the current reference page while keeping image, title and price checks aligned." },
      { title: "The mobile QC photo checklist", body: "A repeatable top-to-bottom inspection order for silhouettes, construction, labels, measurements and the limits of image-based review." },
      { title: "Shipping estimates that remain honest", body: "A framework for recording destination, parcel assumptions, current quotes and policy dates without turning estimates into promises." },
    ],
  },
  faq: {
    eyebrow: "Received-item reference", title: "Record what arrived before you judge it.", intro: "A concise, privacy-safe workflow for checking a delivered Hacoo item, measuring it and writing a useful review.",
    sections: [
      { title: "How should I record a received Hacoo item?", body: "Photograph the item, packaging, size label and included parts in neutral light. Keep order numbers, addresses, faces and other personal information outside the frame, and note the delivery and inspection dates." },
      { title: "What should I compare with the saved details?", body: "Compare the received color, selected size, quantity, included parts and visible construction with the product information you saved when ordering. Record differences separately instead of turning one mismatch into a general verdict." },
      { title: "What can photos and measurements prove?", body: "Photos and consistent measurements document visible condition, dimensions and fit at one point in time. They cannot prove material composition, authenticity, long-term durability or how every buyer will experience the item." },
      { title: "How should I structure a useful review?", body: "Separate the product itself, delivery experience and customer service into distinct observations. Add country, relevant dates, selected size and measurement method so another reader can understand the context without seeing private order data." },
    ],
  },
};

const base: Omit<Copy, "pages"> = {
  nav: { home: "Home", spreadsheet: "Spreadsheet", finds: "Finds", guide: "Guide", qc: "QC", shipping: "Shipping", articles: "Articles", faq: "FAQ" },
  badge: "Independent Hacoo received-item guide", hero: "Your Hacoo item arrived,", heroAccent: "now check what you received.",
  intro: "Confirm color, size, quantity, included parts, measurements and fit. Keep a privacy-safe record that separates the product, delivery and service experience before you write a review.",
  search: "Find the matching item or category…", searchButton: "Open reference", updated: "Item-check method reviewed · Aug 2026", independent: "Independent · Not affiliated with Hacoo",
  categoryTitle: "Match the received item to a category", categorySub: "Six direct reference routes. Every original category remains available.", productTitle: "Examples for receiving checks", productSub: "Each card opens the same matching live reference page for comparison.",
  open: "Open reference", viewAll: "View all references", guideTitle: "A useful product review starts with a record", guideSub: "Three checks turn an arrival into evidence with context.",
  disclaimer: "Independent guide. We do not sell products, process payments, handle shipping, verify sellers or represent Hacoo. Recheck live product, price and policy information before acting.", whatsapp: "WhatsApp",
  cats: { shoes: "Shoes", hoodies: "Hoodies", tshirts: "T-Shirts", jerseys: "Jerseys", accessories: "Accessories", all: "All products" },
  cards: [{ title: "01 · Receive", body: "Record condition, color, size, quantity and included parts." }, { title: "02 · Measure", body: "Use a consistent method and compare with the saved details." }, { title: "03 · Review", body: "Separate product, delivery and service with dates and country." }],
};

function localizedPageCopy(lang: "de" | "es" | "fr" | "it"): Record<string, PageCopy> {
  return Object.fromEntries(Object.entries(localizedPages[lang]).map(([route, page]) => {
    const supplement = pageParitySupplements[lang][route as keyof typeof pageParitySupplements[typeof lang]];
    const sentences = supplement.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((sentence) => sentence.trim()) ?? [];
    const additions = page.sections.map(() => [] as string[]);
    sentences.forEach((sentence, index) => additions[index % page.sections.length].push(sentence));

    return [route, {
      ...page,
      sections: page.sections.map((section: { title: string; body: string }, index: number) => ({
        ...section,
        body: `${section.body} ${additions[index].join(" ")}`.trim(),
      })),
    }];
  })) as Record<string, PageCopy>;
}

export const copy: Record<Lang, Copy> = {
  en: { ...base, pages: pagesEn },
  de: { ...base,
    nav: { home: "Start", spreadsheet: "Tabelle", finds: "Funde", guide: "Anleitung", qc: "QC", shipping: "Versand", articles: "Artikel", faq: "Info" },
    badge: "Unabhängiger Hacoo-Wareneingangscheck", hero: "Dein Hacoo-Artikel ist da,", heroAccent: "jetzt prüfe, was angekommen ist.", intro: "Bestätige Farbe, Größe, Menge, Zubehör, Maße und Passform. Führe einen datenschutzfreundlichen Nachweis und trenne Produkt, Lieferung und Service, bevor du eine Bewertung schreibst.", search: "Passenden Artikel oder Kategorie finden…", searchButton: "Referenz öffnen", updated: "Prüfmethode aktualisiert · Aug. 2026", independent: "Unabhängig · Nicht mit Hacoo verbunden", categoryTitle: "Ordne den erhaltenen Artikel einer Kategorie zu", categorySub: "Sechs direkte Referenzwege. Alle ursprünglichen Kategorien bleiben erhalten.", productTitle: "Beispiele für den Wareneingangscheck", productSub: "Jede Karte öffnet dieselbe passende Live-Referenz zum Vergleich.", open: "Referenz öffnen", viewAll: "Alle Referenzen", guideTitle: "Eine hilfreiche Produktbewertung beginnt mit einem Protokoll", guideSub: "Drei Prüfungen machen aus einer Lieferung nachvollziehbare Hinweise.", disclaimer: "Unabhängiger Guide. Wir verkaufen nichts, wickeln keine Zahlungen oder Lieferungen ab und vertreten Hacoo nicht. Live-Daten vor jeder Entscheidung erneut prüfen.",
    cats: { shoes: "Schuhe", hoodies: "Hoodies", tshirts: "T-Shirts", jerseys: "Trikots", accessories: "Accessoires", all: "Alle Produkte" }, cards: [{ title: "01 · Empfangen", body: "Zustand, Farbe, Größe, Menge und Zubehör dokumentieren." }, { title: "02 · Messen", body: "Einheitlich messen und mit gespeicherten Angaben vergleichen." }, { title: "03 · Bewerten", body: "Produkt, Lieferung und Service mit Datum und Land trennen." }], pages: localizedPageCopy("de"),
  },
  es: { ...base,
    nav: { home: "Inicio", spreadsheet: "Hoja", finds: "Hallazgos", guide: "Guía", qc: "QC", shipping: "Envío", articles: "Artículos", faq: "Info" },
    badge: "Guía independiente para artículos Hacoo recibidos", hero: "Tu artículo Hacoo llegó,", heroAccent: "ahora comprueba qué recibiste.", intro: "Confirma color, talla, cantidad, piezas incluidas, medidas y ajuste. Conserva un registro sin datos privados y separa producto, entrega y servicio antes de escribir una reseña.", search: "Buscar artículo o categoría correspondiente…", searchButton: "Abrir referencia", updated: "Método de revisión actualizado · ago. 2026", independent: "Independiente · Sin afiliación con Hacoo", categoryTitle: "Relaciona el artículo recibido con una categoría", categorySub: "Seis referencias directas. Se conservan todas las categorías originales.", productTitle: "Ejemplos para revisar la recepción", productSub: "Cada tarjeta abre la misma referencia actual para comparar.", open: "Abrir referencia", viewAll: "Ver referencias", guideTitle: "Una reseña útil empieza con un registro", guideSub: "Tres comprobaciones convierten la llegada en evidencia con contexto.", disclaimer: "Guía independiente. No vendemos, cobramos, enviamos, verificamos vendedores ni representamos a Hacoo. Comprueba siempre la información en vivo.",
    cats: { shoes: "Zapatillas", hoodies: "Sudaderas", tshirts: "Camisetas", jerseys: "Camisetas fútbol", accessories: "Accesorios", all: "Todos" }, cards: [{ title: "01 · Recibir", body: "Registra estado, color, talla, cantidad y piezas incluidas." }, { title: "02 · Medir", body: "Usa un método constante y compara los datos guardados." }, { title: "03 · Reseñar", body: "Separa producto, entrega y servicio con fecha y país." }], pages: localizedPageCopy("es"),
  },
  fr: { ...base,
    nav: { home: "Accueil", spreadsheet: "Tableau", finds: "Sélection", guide: "Guide", qc: "QC", shipping: "Livraison", articles: "Articles", faq: "Info" },
    badge: "Guide indépendant des articles Hacoo reçus", hero: "Votre article Hacoo est arrivé,", heroAccent: "vérifiez maintenant ce que vous avez reçu.", intro: "Confirmez couleur, taille, quantité, pièces incluses, mesures et coupe. Gardez un relevé sans données privées et séparez produit, livraison et service avant de publier un avis.", search: "Trouver l’article ou la catégorie…", searchButton: "Ouvrir la référence", updated: "Méthode de contrôle revue · août 2026", independent: "Indépendant · Non affilié à Hacoo", categoryTitle: "Associez l’article reçu à une catégorie", categorySub: "Six références directes. Toutes les catégories d’origine sont conservées.", productTitle: "Exemples pour le contrôle à réception", productSub: "Chaque carte ouvre la même référence actuelle pour comparaison.", open: "Ouvrir la référence", viewAll: "Voir les références", guideTitle: "Un avis produit utile commence par un relevé", guideSub: "Trois contrôles transforment une réception en observations contextualisées.", disclaimer: "Guide indépendant. Nous ne vendons rien, ne traitons ni paiements ni livraisons et ne représentons pas Hacoo. Vérifiez toujours les informations en direct.",
    cats: { shoes: "Chaussures", hoodies: "Sweats", tshirts: "T-Shirts", jerseys: "Maillots", accessories: "Accessoires", all: "Tous les produits" }, cards: [{ title: "01 · Recevoir", body: "Notez état, couleur, taille, quantité et pièces incluses." }, { title: "02 · Mesurer", body: "Gardez la même méthode et comparez les détails sauvegardés." }, { title: "03 · Évaluer", body: "Séparez produit, livraison et service avec date et pays." }], pages: localizedPageCopy("fr"),
  },
  it: { ...base,
    nav: { home: "Home", spreadsheet: "Foglio", finds: "Prodotti", guide: "Guida", qc: "QC", shipping: "Spedizione", articles: "Articoli", faq: "Info" },
    badge: "Guida indipendente agli articoli Hacoo ricevuti", hero: "Il tuo articolo Hacoo è arrivato,", heroAccent: "ora controlla cosa hai ricevuto.", intro: "Conferma colore, taglia, quantità, parti incluse, misure e vestibilità. Conserva un registro senza dati privati e separa prodotto, consegna e assistenza prima di scrivere una recensione.", search: "Trova l’articolo o la categoria…", searchButton: "Apri riferimento", updated: "Metodo di controllo rivisto · ago. 2026", independent: "Indipendente · Non affiliato a Hacoo", categoryTitle: "Abbina l’articolo ricevuto a una categoria", categorySub: "Sei riferimenti diretti. Restano disponibili tutte le categorie originali.", productTitle: "Esempi per il controllo alla consegna", productSub: "Ogni scheda apre lo stesso riferimento aggiornato per il confronto.", open: "Apri riferimento", viewAll: "Vedi riferimenti", guideTitle: "Una recensione utile inizia da un registro", guideSub: "Tre controlli trasformano l’arrivo in osservazioni contestualizzate.", disclaimer: "Guida indipendente. Non vendiamo, gestiamo pagamenti o spedizioni, verifichiamo venditori né rappresentiamo Hacoo. Ricontrolla sempre i dati live.",
    cats: { shoes: "Scarpe", hoodies: "Felpe", tshirts: "T-Shirt", jerseys: "Maglie", accessories: "Accessori", all: "Tutti i prodotti" }, cards: [{ title: "01 · Ricevi", body: "Registra stato, colore, taglia, quantità e parti incluse." }, { title: "02 · Misura", body: "Usa un metodo coerente e confronta i dettagli salvati." }, { title: "03 · Recensisci", body: "Separa prodotto, consegna e servizio con data e Paese." }], pages: localizedPageCopy("it"),
  },
};
