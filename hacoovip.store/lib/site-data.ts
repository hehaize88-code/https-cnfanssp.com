export type Locale = "en" | "de" | "es" | "fr" | "it";

export const locales: Locale[] = ["en", "de", "es", "fr", "it"];

export const languageNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
};

export const navRouteNames = [
  "spreadsheet",
  "finds",
  "guide",
  "qc",
  "shipping",
  "faq",
  "articles",
] as const;

export const trustRouteNames = [
  "about",
  "editorial-policy",
  "sources",
  "corrections",
  "contact",
  "privacy",
  "terms",
] as const;

export const routeNames = [...navRouteNames, ...trustRouteNames] as const;

export type NavRouteName = (typeof navRouteNames)[number];
export type TrustRouteName = (typeof trustRouteNames)[number];
export type RouteName = (typeof routeNames)[number];

export const copy: Record<Locale, Record<string, string>> = {
  en: {
    spreadsheet: "Spreadsheet",
    finds: "Finds",
    guide: "Guide",
    qc: "QC",
    shipping: "Shipping",
    faq: "FAQ",
    articles: "Articles",
    searchPlaceholder: "Search shoes, hoodies, jerseys…",
    search: "Search live catalog",
    eyebrow: "Independent Hacoo research · facts checked 29 Aug 2026",
    heroTitle: "Plan what to check before you browse Hacoo product routes.",
    heroBody:
      "Define your use case, must-haves, variant needs and evidence threshold first. Then use our independent index and source-checked app facts without confusing either one with an official Hacoo spreadsheet.",
    browse: "Browse the spreadsheet",
    learn: "Read the buying guide",
    verified: "Route checked",
    categories: "10 live categories",
    products: "Featured Hacoo finds",
    productsBody:
      "Every card uses the same lead image as its destination page. Prices are approximate USD guide values; verify the live page before buying.",
    open: "Open live product",
    all: "View full spreadsheet",
    workflow: "A clearer route from search to product",
    step1: "Choose a category",
    step1b: "Start with the closest product type instead of scrolling an unfiltered sheet.",
    step2: "Review the listing",
    step2b: "Compare the lead image, size details and current price on the destination page.",
    step3: "Open the live route",
    step3b: "Complete your decision on the live product page; this guide never processes orders.",
    note: "Independent guide. We do not represent Hacoo, process payments or guarantee third-party listings.",
  },
  de: {
    spreadsheet: "Tabelle",
    finds: "Entdeckungen",
    guide: "Anleitung",
    qc: "Qualitätscheck",
    shipping: "Versand",
    faq: "FAQ",
    articles: "Artikel",
    searchPlaceholder: "Schuhe, Hoodies, Trikots suchen…",
    search: "Live-Katalog durchsuchen",
    eyebrow: "Unabhängiger Hacoo-Entdeckungsleitfaden · 2026",
    heroTitle: "Lege zuerst fest, was du bei Hacoo-Produktrouten prüfen willst.",
    heroBody: "Definiere Einsatzzweck, Muss-Kriterien, Varianten und die nötige Beleglage. Nutze danach unseren unabhängigen Index und quellengeprüfte App-Fakten, ohne beides mit einer offiziellen Hacoo-Tabelle zu verwechseln.",
    browse: "Tabelle öffnen",
    learn: "Einkaufsleitfaden lesen",
    verified: "Route geprüft",
    categories: "10 Live-Kategorien",
    products: "Ausgewählte Hacoo-Funde",
    productsBody: "Jede Karte nutzt dasselbe Titelbild wie die Zielseite. USD-Preise sind Richtwerte – bitte live prüfen.",
    open: "Live-Produkt öffnen",
    all: "Ganze Tabelle ansehen",
    workflow: "Ein klarerer Weg von der Suche zum Produkt",
    step1: "Kategorie wählen",
    step1b: "Beginne mit dem passenden Produkttyp statt mit einer ungefilterten Tabelle.",
    step2: "Angebot prüfen",
    step2b: "Vergleiche Bild, Größenangaben und aktuellen Preis auf der Zielseite.",
    step3: "Live-Route öffnen",
    step3b: "Entscheide auf der Live-Produktseite; dieser Leitfaden verarbeitet keine Bestellungen.",
    note: "Unabhängiger Leitfaden. Keine Vertretung von Hacoo, keine Zahlungen und keine Garantie für Drittangebote.",
  },
  es: {
    spreadsheet: "Hoja de cálculo",
    finds: "Hallazgos",
    guide: "Guía",
    qc: "Control de calidad",
    shipping: "Envío",
    faq: "Preguntas",
    articles: "Artículos",
    searchPlaceholder: "Buscar zapatillas, sudaderas, camisetas…",
    search: "Buscar en el catálogo",
    eyebrow: "Guía independiente de descubrimiento Hacoo · 2026",
    heroTitle: "Define qué comprobar antes de explorar rutas de productos Hacoo.",
    heroBody: "Aclara el uso, los requisitos imprescindibles, las variantes y el nivel de evidencia que necesitas. Después usa nuestro índice independiente y los datos verificados de la app sin confundirlos con una hoja oficial de Hacoo.",
    browse: "Explorar la hoja",
    learn: "Leer la guía de compra",
    verified: "Ruta revisada",
    categories: "10 categorías activas",
    products: "Hallazgos Hacoo destacados",
    productsBody: "Cada tarjeta usa la misma imagen principal que su página de destino. Los precios en USD son orientativos; comprueba el anuncio.",
    open: "Abrir producto",
    all: "Ver hoja completa",
    workflow: "Una ruta más clara desde la búsqueda al producto",
    step1: "Elige una categoría",
    step1b: "Empieza por el tipo de producto correcto en vez de desplazarte por una hoja sin filtros.",
    step2: "Revisa el anuncio",
    step2b: "Compara imagen, talla y precio actual en la página de destino.",
    step3: "Abre la ruta activa",
    step3b: "Decide en la página del producto; esta guía no procesa pedidos.",
    note: "Guía independiente. No representamos a Hacoo, no procesamos pagos ni garantizamos anuncios de terceros.",
  },
  fr: {
    spreadsheet: "Tableur",
    finds: "Sélections",
    guide: "Guide",
    qc: "Contrôle qualité",
    shipping: "Livraison",
    faq: "FAQ",
    articles: "Articles",
    searchPlaceholder: "Rechercher chaussures, sweats, maillots…",
    search: "Rechercher dans le catalogue",
    eyebrow: "Guide indépendant de découverte Hacoo · 2026",
    heroTitle: "Définissez vos contrôles avant d’explorer les liens produits Hacoo.",
    heroBody: "Précisez l’usage, les critères indispensables, les variantes et le niveau de preuve attendu. Utilisez ensuite notre index indépendant et les faits vérifiés sur l’app sans les confondre avec un tableur officiel Hacoo.",
    browse: "Parcourir le tableur",
    learn: "Lire le guide d’achat",
    verified: "Lien vérifié",
    categories: "10 catégories actives",
    products: "Sélections Hacoo",
    productsBody: "Chaque carte reprend l’image principale de sa page cible. Les prix USD sont indicatifs ; vérifiez la fiche active.",
    open: "Ouvrir le produit",
    all: "Voir tout le tableur",
    workflow: "Un chemin plus clair de la recherche au produit",
    step1: "Choisir une catégorie",
    step1b: "Commencez par le bon type de produit plutôt que par une liste non filtrée.",
    step2: "Vérifier la fiche",
    step2b: "Comparez l’image, les tailles et le prix actuel sur la page cible.",
    step3: "Ouvrir le lien actif",
    step3b: "Décidez sur la fiche produit ; ce guide ne traite aucune commande.",
    note: "Guide indépendant. Nous ne représentons pas Hacoo, ne traitons aucun paiement et ne garantissons pas les offres tierces.",
  },
  it: {
    spreadsheet: "Foglio prodotti",
    finds: "Scoperte",
    guide: "Guida",
    qc: "Controllo qualità",
    shipping: "Spedizione",
    faq: "FAQ",
    articles: "Articoli",
    searchPlaceholder: "Cerca scarpe, felpe, maglie…",
    search: "Cerca nel catalogo",
    eyebrow: "Guida indipendente alla scoperta Hacoo · 2026",
    heroTitle: "Definisci cosa controllare prima di esplorare i percorsi prodotto Hacoo.",
    heroBody: "Chiarisci uso, requisiti essenziali, varianti e livello di prova necessario. Poi usa il nostro indice indipendente e i dati verificati sull’app senza confonderli con un foglio ufficiale Hacoo.",
    browse: "Sfoglia il foglio",
    learn: "Leggi la guida acquisti",
    verified: "Percorso verificato",
    categories: "10 categorie live",
    products: "Scoperte Hacoo in evidenza",
    productsBody: "Ogni scheda usa la stessa immagine principale della pagina di destinazione. I prezzi USD sono indicativi: verifica la pagina live.",
    open: "Apri il prodotto",
    all: "Vedi tutto il foglio",
    workflow: "Un percorso più chiaro dalla ricerca al prodotto",
    step1: "Scegli una categoria",
    step1b: "Parti dal tipo di prodotto corretto invece di scorrere un elenco senza filtri.",
    step2: "Controlla l’inserzione",
    step2b: "Confronta immagine, taglie e prezzo attuale sulla pagina di destinazione.",
    step3: "Apri il percorso live",
    step3b: "Decidi sulla pagina prodotto; questa guida non gestisce ordini.",
    note: "Guida indipendente. Non rappresentiamo Hacoo, non gestiamo pagamenti e non garantiamo inserzioni di terzi.",
  },
};

export const categories = [
  { name: "Shoes", slug: "shoes", mark: "01" },
  { name: "Hoodies", slug: "hoodies-sweaters", mark: "02" },
  { name: "T-Shirts", slug: "t-shirts", mark: "03" },
  { name: "Jackets", slug: "jackets", mark: "04" },
  { name: "Pants", slug: "pants-shorts", mark: "05" },
  { name: "Headwear", slug: "headwear", mark: "06" },
  { name: "Accessories", slug: "accessories", mark: "07" },
  { name: "Jerseys", slug: "Jersey", mark: "08" },
  { name: "Electronics", slug: "electronics", mark: "09" },
  { name: "Other", slug: "other-stuff", mark: "10" },
] as const;

export const products = [
  { id: 6050, name: "Slate Runner", category: "Shoes", price: "$34.70", image: "https://cnfanssp.com/uploads/allimg/20260416/1-260416213T1S9.jpg" },
  { id: 6127, name: "Archive Pullover", category: "Hoodies", price: "$16.40", image: "https://cnfanssp.com/uploads/allimg/20260429/1-2604291534502K.jpg" },
  { id: 6187, name: "Graphic Tee No. 60", category: "T-Shirts", price: "$15.00", image: "https://cnfanssp.com/uploads/allimg/20260429/1-260429162000554.jpg" },
  { id: 6247, name: "Field Jacket", category: "Jackets", price: "$40.10", image: "https://cnfanssp.com/uploads/allimg/20260429/1-2604291F305238.jpg" },
  { id: 6307, name: "Relaxed Utility Pants", category: "Pants", price: "$38.90", image: "https://cnfanssp.com/uploads/allimg/20260429/1-260429210FTJ.jpg" },
  { id: 6367, name: "Everyday Cap", category: "Headwear", price: "$20.30", image: "https://cnfanssp.com/uploads/allimg/20260429/1-26042921502VA.jpg" },
  { id: 6427, name: "Statement Carryall", category: "Accessories", price: "$51.10", image: "https://cnfanssp.com/uploads/allimg/20260430/1-260430161230537.jpg" },
  { id: 6667, name: "Match Jersey No. 60", category: "Jerseys", price: "$13.80", image: "https://cnfanssp.com/uploads/allimg/20260430/1-26043021142K50.jpg" },
] as const;

export function hrefFor(locale: Locale, path = "") {
  const clean = path.replace(/^\//, "");
  if (locale === "en") return clean ? `/${clean}` : "/";
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

export function languageAlternates(path = "") {
  const clean = path.replace(/^\//, "");
  return {
    en: hrefFor("en", clean),
    de: hrefFor("de", clean),
    es: hrefFor("es", clean),
    fr: hrefFor("fr", clean),
    it: hrefFor("it", clean),
    "x-default": hrefFor("en", clean),
  };
}

export function liveProduct(id: number) {
  return `https://cnfanssp.com/AllProducts/${id}.html`;
}

export function liveCategory(slug: string) {
  return `https://cnfanssp.com/${slug}/`;
}

export function liveSearch(query: string) {
  const value = query.trim();
  return value
    ? `https://cnfanssp.com/search.html?channelid=2&keywords=${encodeURIComponent(value)}`
    : "https://cnfanssp.com/AllProducts/";
}
