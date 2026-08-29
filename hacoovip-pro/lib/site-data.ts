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
    eyebrow: "Quick reference", title: "The essential checks in one place.", intro: "A concise reference page for the most common spreadsheet, product-route and shipping decisions.",
    sections: [
      { title: "Spreadsheet", body: "Use the index to discover and organize. Use the current destination page to verify. A saved card is not a promise of stock, price or seller performance." },
      { title: "Product routes", body: "Match the first image, title and destination before continuing. If any signal differs, return to the category page and search again." },
      { title: "QC", body: "Review overall shape before details, compare both sides where possible, and treat photos as partial evidence rather than proof of authenticity or durability." },
      { title: "Shipping", body: "Check current destination support, quote inputs, after-sales terms and non-refundable costs at the time you intend to act." },
    ],
  },
};

const base: Omit<Copy, "pages"> = {
  nav: { home: "Home", spreadsheet: "Spreadsheet", finds: "Finds", guide: "Guide", qc: "QC", shipping: "Shipping", articles: "Articles", faq: "FAQ" },
  badge: "Independent Hacoo discovery guide", hero: "The Hacoo product atlas,", heroAccent: "edited for real decisions.",
  intro: "Search live product references, browse focused categories and follow a clear image-to-destination check before you open any route.",
  search: "Search shoes, hoodie, jersey…", searchButton: "Search finds", updated: "Routes checked · Aug 2026", independent: "Independent · Not affiliated with Hacoo",
  categoryTitle: "Start with a category", categorySub: "Six direct routes. No carousel. Everything visible at once.", productTitle: "Current editor picks", productSub: "Each card opens the matching live reference page.",
  open: "Open route", viewAll: "View all finds", guideTitle: "A better spreadsheet has a method", guideSub: "Three checks keep a large list useful.",
  disclaimer: "Independent guide. We do not sell products, process payments, handle shipping, verify sellers or represent Hacoo. Recheck live product, price and policy information before acting.", whatsapp: "WhatsApp",
  cats: { shoes: "Shoes", hoodies: "Hoodies", tshirts: "T-Shirts", jerseys: "Jerseys", accessories: "Accessories", all: "All products" },
  cards: [{ title: "01 · Find", body: "Use one specific phrase or open the closest category." }, { title: "02 · Match", body: "Compare the card image and title with the destination." }, { title: "03 · Verify", body: "Recheck the current price, options and policy details." }],
};

function localizedPageCopy(lang: "de" | "es" | "fr" | "it"): Record<string, PageCopy> {
  return Object.fromEntries(Object.entries(localizedPages[lang]).map(([route, page]) => {
    const supplement = pageParitySupplements[lang][route as keyof typeof pageParitySupplements[typeof lang]];
    const sentences = supplement.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((sentence) => sentence.trim()) ?? [];
    const additions = page.sections.map(() => [] as string[]);
    sentences.forEach((sentence, index) => additions[index % page.sections.length].push(sentence));

    return [route, {
      ...page,
      sections: page.sections.map((section, index) => ({
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
    badge: "Unabhängiger Hacoo-Produktguide", hero: "Der Hacoo Produktatlas,", heroAccent: "für klare Entscheidungen.", intro: "Durchsuche aktuelle Produktreferenzen, öffne fokussierte Kategorien und prüfe Bild, Titel und Zielseite. Vergleiche eine kleine Auswahl, kontrolliere Variante und USD-Referenzpreis und öffne erst dann den passenden Live-Weg. Verfügbarkeit und Plattformdaten werden vor jeder Entscheidung erneut geprüft. Das Prüfdatum bleibt sichtbar und nachvollziehbar.", search: "Schuhe, Hoodie, Trikot suchen…", searchButton: "Funde suchen", updated: "Routen geprüft · Aug. 2026", independent: "Unabhängig · Nicht mit Hacoo verbunden", categoryTitle: "Mit einer Kategorie starten", categorySub: "Sechs direkte Wege. Alles auf einen Blick.", productTitle: "Aktuelle Auswahl", productSub: "Jede Karte öffnet die passende Produktreferenz.", open: "Route öffnen", viewAll: "Alle Funde", guideTitle: "Eine bessere Tabelle hat eine Methode", guideSub: "Drei Prüfungen machen große Listen brauchbar.", disclaimer: "Unabhängiger Guide. Wir verkaufen nichts, wickeln keine Zahlungen oder Lieferungen ab und vertreten Hacoo nicht. Live-Daten vor jeder Entscheidung erneut prüfen.",
    cats: { shoes: "Schuhe", hoodies: "Hoodies", tshirts: "T-Shirts", jerseys: "Trikots", accessories: "Accessoires", all: "Alle Produkte" }, cards: [{ title: "01 · Finden", body: "Nutze einen klaren Suchbegriff oder eine Kategorie." }, { title: "02 · Abgleichen", body: "Vergleiche Kartenbild und Titel mit der Zielseite." }, { title: "03 · Prüfen", body: "Preis, Optionen und Regeln live kontrollieren." }], pages: localizedPageCopy("de"),
  },
  es: { ...base,
    nav: { home: "Inicio", spreadsheet: "Hoja", finds: "Hallazgos", guide: "Guía", qc: "QC", shipping: "Envío", articles: "Artículos", faq: "Info" },
    badge: "Guía independiente de Hacoo", hero: "El atlas de productos Hacoo,", heroAccent: "editado para decidir mejor.", intro: "Busca referencias actuales, explora categorías claras y compara imagen, título y destino antes de abrir una ruta. Revisa una selección pequeña, confirma variante y precio USD de referencia y vuelve a comprobar disponibilidad y datos actuales antes de decidir.", search: "Buscar zapatillas, sudadera…", searchButton: "Buscar", updated: "Rutas revisadas · ago. 2026", independent: "Independiente · Sin afiliación con Hacoo", categoryTitle: "Empieza por una categoría", categorySub: "Seis rutas directas. Todo visible de una vez.", productTitle: "Selección actual", productSub: "Cada tarjeta abre la referencia correspondiente.", open: "Abrir ruta", viewAll: "Ver todos", guideTitle: "Una hoja mejor necesita un método", guideSub: "Tres comprobaciones mantienen útil una lista grande.", disclaimer: "Guía independiente. No vendemos, cobramos, enviamos, verificamos vendedores ni representamos a Hacoo. Comprueba siempre la información en vivo.",
    cats: { shoes: "Zapatillas", hoodies: "Sudaderas", tshirts: "Camisetas", jerseys: "Camisetas fútbol", accessories: "Accesorios", all: "Todos" }, cards: [{ title: "01 · Buscar", body: "Usa una frase concreta o la categoría más cercana." }, { title: "02 · Comparar", body: "Compara la imagen y el título con el destino." }, { title: "03 · Verificar", body: "Revisa precio, opciones y políticas actuales." }], pages: localizedPageCopy("es"),
  },
  fr: { ...base,
    nav: { home: "Accueil", spreadsheet: "Tableau", finds: "Sélection", guide: "Guide", qc: "QC", shipping: "Livraison", articles: "Articles", faq: "Info" },
    badge: "Guide Hacoo indépendant", hero: "L’atlas produits Hacoo,", heroAccent: "pensé pour mieux décider.", intro: "Recherchez des références actuelles, parcourez des catégories claires et comparez image, titre et destination. Examinez une courte sélection, confirmez variante et prix USD indicatif, puis vérifiez de nouveau disponibilité et données en direct avant toute décision.", search: "Rechercher chaussures, sweat…", searchButton: "Rechercher", updated: "Liens vérifiés · août 2026", independent: "Indépendant · Non affilié à Hacoo", categoryTitle: "Commencez par une catégorie", categorySub: "Six accès directs. Tout est visible immédiatement.", productTitle: "Sélection actuelle", productSub: "Chaque carte ouvre la référence correspondante.", open: "Ouvrir", viewAll: "Tout voir", guideTitle: "Un meilleur tableau suit une méthode", guideSub: "Trois contrôles rendent une grande liste utile.", disclaimer: "Guide indépendant. Nous ne vendons rien, ne traitons ni paiements ni livraisons et ne représentons pas Hacoo. Vérifiez toujours les informations en direct.",
    cats: { shoes: "Chaussures", hoodies: "Sweats", tshirts: "T-Shirts", jerseys: "Maillots", accessories: "Accessoires", all: "Tous les produits" }, cards: [{ title: "01 · Trouver", body: "Utilisez un terme précis ou une catégorie." }, { title: "02 · Comparer", body: "Comparez image et titre avec la destination." }, { title: "03 · Vérifier", body: "Contrôlez prix, options et règles actuelles." }], pages: localizedPageCopy("fr"),
  },
  it: { ...base,
    nav: { home: "Home", spreadsheet: "Foglio", finds: "Prodotti", guide: "Guida", qc: "QC", shipping: "Spedizione", articles: "Articoli", faq: "Info" },
    badge: "Guida Hacoo indipendente", hero: "L’atlante prodotti Hacoo,", heroAccent: "curato per decidere meglio.", intro: "Cerca riferimenti aggiornati, sfoglia categorie chiare e confronta immagine, titolo e destinazione. Esamina una selezione breve, conferma variante e prezzo USD indicativo, quindi ricontrolla disponibilità e dati live prima di ogni decisione. Data di controllo e fonte restano sempre visibili e verificabili.", search: "Cerca scarpe, felpa, maglia…", searchButton: "Cerca", updated: "Percorsi verificati · ago. 2026", independent: "Indipendente · Non affiliato a Hacoo", categoryTitle: "Inizia da una categoria", categorySub: "Sei percorsi diretti. Tutto visibile subito.", productTitle: "Selezione attuale", productSub: "Ogni scheda apre il riferimento corrispondente.", open: "Apri percorso", viewAll: "Vedi tutti", guideTitle: "Un foglio migliore ha un metodo", guideSub: "Tre controlli rendono utile una grande lista.", disclaimer: "Guida indipendente. Non vendiamo, gestiamo pagamenti o spedizioni, verifichiamo venditori né rappresentiamo Hacoo. Ricontrolla sempre i dati live.",
    cats: { shoes: "Scarpe", hoodies: "Felpe", tshirts: "T-Shirt", jerseys: "Maglie", accessories: "Accessori", all: "Tutti i prodotti" }, cards: [{ title: "01 · Trova", body: "Usa una frase precisa o la categoria più vicina." }, { title: "02 · Confronta", body: "Confronta immagine e titolo con la destinazione." }, { title: "03 · Verifica", body: "Controlla prezzo, opzioni e regole aggiornate." }], pages: localizedPageCopy("it"),
  },
};
