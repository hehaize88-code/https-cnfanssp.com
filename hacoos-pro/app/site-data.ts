export const locales = ["en", "de", "fr", "es", "it"] as const;
export type Locale = (typeof locales)[number];
export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
};

export const pageKeys = [
  "home",
  "spreadsheet",
  "finds",
  "categories",
  "qc-guide",
  "shipping",
  "guide",
  "faq",
  "articles",
  "articles/find-product-links",
  "articles/read-qc-photos",
  "articles/size-before-you-buy",
] as const;
export type PageKey = (typeof pageKeys)[number];

export function routeFor(locale: Locale, page: PageKey) {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return page === "home" ? `${prefix}/` : `${prefix}/${page}/`;
}

export const products = [
  {
    name: "AMIRI MA-1 Sneakers — 9 styles",
    category: "shoes",
    price: "$53.44",
    sourcePrice: "¥388",
    id: "7638942248",
    href: "https://www.cnfanssp.com/AllProducts/3842.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20251219/1-2512191533513J.webp",
  },
  {
    name: "World T-shirt & Hoodie Set — 40+ styles",
    category: "sets",
    price: "$21.07",
    sourcePrice: "¥153",
    id: "7656214053",
    href: "https://www.cnfanssp.com/AllProducts/4643.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20260109/1-2601091G60V91.webp",
  },
  {
    name: "Celine Hoodie",
    category: "hoodies",
    price: "$10.88",
    sourcePrice: "¥79",
    id: "7622957753",
    href: "https://www.cnfanssp.com/AllProducts/2822.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20251202/1-2512021250461D.webp",
  },
  {
    name: "Neverfull Tote Bag — 39 styles",
    category: "bags",
    price: "$39.26",
    sourcePrice: "¥285",
    id: "7666359522",
    href: "https://www.cnfanssp.com/AllProducts/5030.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20260116/1-26011615050CE.webp",
  },
  {
    name: "Omerta 47 T-shirt",
    category: "t-shirts",
    price: "$9.50",
    sourcePrice: "¥69",
    id: "7588924374",
    href: "https://www.cnfanssp.com/AllProducts/882.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20251030/1-251030160U1b0.webp",
  },
  {
    name: "6PM Hoodie Set",
    category: "hoodies",
    price: "$27.41",
    sourcePrice: "¥199",
    id: "7572947321",
    href: "https://www.cnfanssp.com/AllProducts/24.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20251016/1-251016161633357.jpg",
  },
  {
    name: "Trapstar Bag",
    category: "bags",
    price: "$13.64",
    sourcePrice: "¥99",
    id: "7582900895",
    href: "https://www.cnfanssp.com/AllProducts/525.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20251025/1-251025115303421.webp",
  },
  {
    name: "Autry Shoes",
    category: "shoes",
    price: "$68.87",
    sourcePrice: "¥500",
    id: "7645681448",
    href: "https://www.cnfanssp.com/AllProducts/4276.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20251225/1-251225144612B9.gif",
  },
] as const;

export const categories = [
  { key: "shoes", href: "https://www.cnfanssp.com/shoes/", count: "Shoes" },
  { key: "hoodies", href: "https://www.cnfanssp.com/hoodies-sweaters/", count: "Sweatshirts" },
  { key: "t-shirts", href: "https://www.cnfanssp.com/t-shirts/", count: "T-Shirts" },
  { key: "jackets", href: "https://www.cnfanssp.com/jackets/", count: "Jackets" },
  { key: "pants", href: "https://www.cnfanssp.com/pants-shorts/", count: "Pants / Shorts" },
  { key: "headwear", href: "https://www.cnfanssp.com/headwear/", count: "Headwear" },
  { key: "accessories", href: "https://www.cnfanssp.com/accessories/", count: "Accessories" },
  { key: "jersey", href: "https://www.cnfanssp.com/jersey/", count: "Jersey" },
] as const;

type Copy = {
  nav: Record<string, string>;
  badge: string;
  heroTitle: string;
  heroText: string;
  searchPlaceholder: string;
  searchButton: string;
  categoriesTitle: string;
  findsTitle: string;
  findsText: string;
  openListing: string;
  sourceChecked: string;
  sourceNote: string;
  workflowTitle: string;
  workflow: [string, string, string];
  readGuides: string;
  independent: string;
  updated: string;
  menu: string;
  close: string;
  viewAll: string;
  fieldNotes: string;
  pageLabels: Record<PageKey, { title: string; intro: string }>;
  sectionLabels: [string, string, string];
  sectionText: [string, string, string];
  faq: Array<[string, string]>;
};

export const copy: Record<Locale, Copy> = {
  en: {
    nav: { spreadsheet: "Spreadsheet", finds: "Finds", categories: "Categories", "qc-guide": "QC", shipping: "Shipping", guide: "Guide", articles: "SEO Articles", faq: "FAQ" },
    badge: "Independent link desk · checked 27 Aug 2026",
    heroTitle: "Find the Hacoo link you actually meant to open.",
    heroText: "A fast, independent product index with source-matched images, direct category routes and practical QC notes — built for people who do not want to hunt through reposted spreadsheets.",
    searchPlaceholder: "Search shoes, hoodies, bags…",
    searchButton: "Search live index",
    categoriesTitle: "Start with a category",
    findsTitle: "Checked finds, not mystery redirects",
    findsText: "Every card uses the current first image and opens the matching source listing. Prices are shown in USD with the source CNY price beside them.",
    openListing: "Open matching listing",
    sourceChecked: "Source matched",
    sourceNote: "Price and availability can change on the source listing.",
    workflowTitle: "A cleaner three-step route",
    workflow: ["Choose a category or search term.", "Open the exact listing and compare its current options.", "Check QC, sizing and shipping before deciding."],
    readGuides: "Read the buyer guides",
    independent: "Independent guide. Not affiliated with Hacoo or any marketplace. No orders, payments or seller guarantees are handled here.",
    updated: "Link check: 27 August 2026",
    menu: "Menu",
    close: "Close",
    viewAll: "View all checked finds",
    fieldNotes: "Field notes",
    pageLabels: {
      home: { title: "Hacoos Spreadsheet 2026", intro: "Checked product routes, QC help and buying context in one independent index." },
      spreadsheet: { title: "Hacoo Spreadsheet", intro: "Use a searchable product index instead of scrolling through duplicated or expired rows." },
      finds: { title: "Latest Hacoo Finds", intro: "A compact set of source-matched listings across shoes, hoodies, tees, bags and sets." },
      categories: { title: "Hacoo Categories", intro: "Open the closest live category first, then narrow the product on the source index." },
      "qc-guide": { title: "Hacoo QC Photo Guide", intro: "A practical inspection sequence for shape, materials, stitching, logos and measurements." },
      shipping: { title: "Hacoo Shipping Guide", intro: "Separate product price from delivery cost, destination restrictions, tracking and import charges." },
      guide: { title: "How to Use Hacoo Product Links", intro: "A step-by-step route from discovery to listing verification without treating a repost as proof." },
      faq: { title: "Hacoo Spreadsheet FAQ", intro: "Straight answers about links, prices, QC photos, sizing and the limits of an independent guide." },
      articles: { title: "Hacoo SEO Articles & Research Notes", intro: "Longer, practical reading for finding links, judging photos and reducing sizing mistakes." },
      "articles/find-product-links": { title: "How to Find Current Hacoo Product Links", intro: "Why direct listing verification matters more than the date printed on a spreadsheet." },
      "articles/read-qc-photos": { title: "Hacoo Reviews & QC Photos: An Evidence Guide", intro: "How to balance current reviews, inspect construction and keep the photos Hacoo's support process may require." },
      "articles/size-before-you-buy": { title: "Hacoo Size Guide: Measure Before You Buy", intro: "A repeatable garment and shoe measurement method built around the exact selected variant." },
    },
    sectionLabels: ["What to verify", "What can go wrong", "Best next step"],
    sectionText: ["Confirm that the title, first image, selected option, source price and product ID still agree. A working URL alone does not prove that the item is the one shown on the card.", "Listings change, variants disappear and reposted sheets can keep an old image after the destination changes. Treat every outbound page as current third-party information.", "Save the product ID, compare measurements, inspect recent feedback and keep screenshots of the selected option before paying on any external service."],
    faq: [["Is this the official Hacoo website?", "No. Hacoos is an independent product-link and research guide and does not represent Hacoo."], ["What is Hacoo today?", "Hacoo's current official website and app-store descriptions present it as a content-sharing and discovery community with ratings, reviews and connections between users."], ["Are products sold here?", "No. Product cards open the matching external listing; this site does not process orders or payments."], ["Why can a Hacoo link look different in another country?", "Catalog visibility and delivery coverage can vary. Confirm the real region, destination and current app version before deciding that a link is dead."], ["How long does Hacoo delivery take?", "The official Help Center gives a total estimate of 15–28 days: 3–7 days preparation, 7–15 days shipping and 5–10 days final delivery. Delays can extend it."], ["What is Hacoo's return window?", "The detailed official help article states a general 15-day window after receipt, lists excluded categories and says exchanges are not currently supported. Follow the instructions attached to the actual order."], ["Why show USD and CNY?", "USD makes comparison easier, while the source CNY amount helps you confirm the listing has not silently changed."], ["Does a checked link guarantee quality?", "No. A matched link confirms the route and first image at the check date; quality and delivery still require current evidence."], ["What should I inspect first?", "Confirm identity and variant first, then shape, stitching, labels, measurements and visible defects."], ["Are public reviews consistently positive?", "No. Google Play and Trustpilot showed different averages and mixed recent themes when checked. Use item-level photos and repeated observations rather than one platform score."]],
  },
  de: {
    nav: { spreadsheet: "Tabelle", finds: "Funde", categories: "Kategorien", "qc-guide": "QC", shipping: "Versand", guide: "Anleitung", articles: "SEO-Artikel", faq: "FAQ" },
    badge: "Unabhängiger Link-Desk · geprüft am 27.08.2026",
    heroTitle: "Finde genau den Hacoo-Link, den du öffnen wolltest.",
    heroText: "Ein schneller, unabhängiger Produktindex mit passenden Titelbildern, direkten Kategorien und praktischen QC-Hinweisen — ohne endlos durch kopierte Tabellen zu scrollen.",
    searchPlaceholder: "Schuhe, Hoodies, Taschen suchen…", searchButton: "Live-Index durchsuchen", categoriesTitle: "Mit einer Kategorie starten", findsTitle: "Geprüfte Funde statt falscher Weiterleitungen", findsText: "Jede Karte verwendet das aktuelle Titelbild und öffnet den passenden Eintrag. Preise stehen in USD und zusätzlich im ursprünglichen CNY-Betrag.", openListing: "Passenden Eintrag öffnen", sourceChecked: "Quelle abgeglichen", sourceNote: "Preis und Verfügbarkeit können sich auf der Quellseite ändern.", workflowTitle: "Der klare Weg in drei Schritten", workflow: ["Kategorie oder Suchbegriff wählen.", "Exakten Eintrag öffnen und aktuelle Optionen vergleichen.", "QC, Größe und Versand vor der Entscheidung prüfen."], readGuides: "Kaufratgeber lesen", independent: "Unabhängiger Ratgeber. Keine Verbindung zu Hacoo oder einem Marktplatz. Keine Bestellungen, Zahlungen oder Verkäufergarantien.", updated: "Linkprüfung: 27. August 2026", menu: "Menü", close: "Schließen", viewAll: "Alle geprüften Funde", fieldNotes: "Praxisnotizen",
    pageLabels: {} as Copy["pageLabels"], sectionLabels: ["Was prüfen?", "Was kann schiefgehen?", "Bester nächster Schritt"], sectionText: ["Prüfe Titel, erstes Bild, gewählte Variante, Quellpreis und Produkt-ID. Eine funktionierende URL beweist nicht, dass das gezeigte Produkt noch dasselbe ist.", "Angebote ändern sich, Varianten verschwinden und kopierte Tabellen behalten oft alte Bilder. Jede Zielseite ist aktuelle Information eines Dritten.", "Produkt-ID speichern, Maße vergleichen, neue Bewertungen prüfen und die gewählte Variante vor der Zahlung dokumentieren."], faq: [["Ist dies die offizielle Hacoo-Seite?", "Nein. Hacoos ist ein unabhängiger Link- und Recherche-Ratgeber und vertritt Hacoo nicht."], ["Was ist Hacoo heute?", "Die aktuelle offizielle Website und die App-Store-Texte beschreiben Hacoo als Community zum Teilen und Entdecken von Inhalten mit Bewertungen und Verbindungen zwischen Nutzern."], ["Werden hier Produkte verkauft?", "Nein. Karten öffnen externe Einträge; Bestellungen und Zahlungen werden hier nicht verarbeitet."], ["Warum sieht ein Link in einem anderen Land anders aus?", "Katalogsichtbarkeit und Lieferabdeckung können variieren. Prüfe echte Region, Zieladresse und App-Version."], ["Wie lange dauert die Lieferung?", "Das offizielle Help Center nennt insgesamt 15–28 Tage: 3–7 Vorbereitung, 7–15 Versand und 5–10 Zustellung. Verzögerungen sind möglich."], ["Wie lang ist die Rückgabefrist?", "Die ausführliche offizielle Hilfe nennt allgemein 15 Tage nach Erhalt, Ausnahmen und derzeit keinen Umtausch. Entscheidend sind die Hinweise im konkreten Auftrag."], ["Warum USD und CNY?", "USD erleichtert den Vergleich, CNY hilft bei der Kontrolle des Quellpreises."], ["Garantiert ein geprüfter Link Qualität?", "Nein. Er bestätigt Route und Titelbild zum Prüfdatum, nicht Qualität oder Lieferung."], ["Was zuerst prüfen?", "Zuerst Produkt und Variante, dann Form, Nähte, Etiketten und Maße."], ["Sind öffentliche Bewertungen einheitlich positiv?", "Nein. Google Play und Trustpilot zeigten unterschiedliche Mittelwerte und gemischte aktuelle Themen. Nutze Artikelbilder und wiederkehrende konkrete Beobachtungen."]],
  },
  fr: {
    nav: { spreadsheet: "Tableur", finds: "Sélection", categories: "Catégories", "qc-guide": "QC", shipping: "Livraison", guide: "Guide", articles: "Articles SEO", faq: "FAQ" },
    badge: "Guide indépendant · vérifié le 27 août 2026", heroTitle: "Trouvez le lien Hacoo que vous vouliez vraiment ouvrir.", heroText: "Un index indépendant et rapide avec images correspondantes, catégories directes et conseils QC pratiques — sans parcourir des tableurs recopiés.", searchPlaceholder: "Chaussures, sweats, sacs…", searchButton: "Rechercher dans l’index", categoriesTitle: "Commencer par une catégorie", findsTitle: "Des trouvailles vérifiées, pas des redirections surprises", findsText: "Chaque carte reprend la première image actuelle et ouvre la fiche correspondante. Le prix est affiché en USD avec le montant source en CNY.", openListing: "Ouvrir la fiche correspondante", sourceChecked: "Source vérifiée", sourceNote: "Prix et disponibilité peuvent changer sur la fiche source.", workflowTitle: "Un parcours clair en trois étapes", workflow: ["Choisir une catégorie ou un mot-clé.", "Ouvrir la fiche exacte et comparer les options.", "Vérifier QC, taille et livraison avant de décider."], readGuides: "Lire les guides d’achat", independent: "Guide indépendant, sans affiliation avec Hacoo ni une place de marché. Aucune commande, paiement ou garantie vendeur n’est traité ici.", updated: "Liens vérifiés le 27 août 2026", menu: "Menu", close: "Fermer", viewAll: "Voir toutes les trouvailles", fieldNotes: "Notes pratiques",
    pageLabels: {} as Copy["pageLabels"], sectionLabels: ["Points à vérifier", "Risques fréquents", "Étape suivante"], sectionText: ["Vérifiez le titre, la première image, l’option, le prix source et l’identifiant. Une URL active ne prouve pas que l’article est toujours le même.", "Les fiches et variantes changent, alors que les tableurs recopiés conservent parfois une ancienne image. Traitez chaque destination comme une information tierce actuelle.", "Enregistrez l’identifiant, comparez les mesures, consultez les avis récents et gardez une capture de l’option choisie."], faq: [["Est-ce le site officiel Hacoo ?", "Non. Hacoos est un guide indépendant et ne représente pas Hacoo."], ["Qu’est-ce que Hacoo aujourd’hui ?", "Le site officiel et les boutiques d’applications le présentent comme une communauté de partage et de découverte avec notes et avis."], ["Les produits sont-ils vendus ici ?", "Non. Les cartes ouvrent des fiches externes; aucune commande ni paiement n’est traité ici."], ["Pourquoi un lien varie-t-il selon le pays ?", "Le catalogue et la livraison peuvent varier. Vérifiez région réelle, destination et version de l’application."], ["Quel est le délai de livraison ?", "Le centre d’aide officiel estime 15–28 jours au total: 3–7 de préparation, 7–15 d’expédition et 5–10 de livraison finale."], ["Quel est le délai de retour ?", "L’aide officielle détaillée indique généralement 15 jours après réception, des exclusions et pas d’échange actuellement. Suivez le dossier de commande."], ["Pourquoi USD et CNY ?", "L’USD facilite la comparaison et le CNY permet de contrôler le prix source."], ["Un lien vérifié garantit-il la qualité ?", "Non. Il confirme route et image à la date du contrôle, pas la qualité ni la livraison."], ["Que vérifier en premier ?", "D’abord l’identité et la variante, puis la forme, les coutures, étiquettes et mesures."], ["Les avis publics sont-ils uniformément positifs ?", "Non. Google Play et Trustpilot affichaient des moyennes différentes et des thèmes récents partagés. Privilégiez les preuves liées à l’article."]],
  },
  es: {
    nav: { spreadsheet: "Hoja", finds: "Hallazgos", categories: "Categorías", "qc-guide": "QC", shipping: "Envío", guide: "Guía", articles: "Artículos SEO", faq: "FAQ" },
    badge: "Guía independiente · revisada el 27 ago 2026", heroTitle: "Encuentra el enlace de Hacoo que realmente querías abrir.", heroText: "Un índice independiente con imágenes coincidentes, categorías directas y notas QC útiles, sin perder tiempo en hojas copiadas.", searchPlaceholder: "Buscar zapatillas, sudaderas, bolsos…", searchButton: "Buscar en el índice", categoriesTitle: "Empieza por una categoría", findsTitle: "Hallazgos revisados, no redirecciones sorpresa", findsText: "Cada tarjeta usa la primera imagen actual y abre la ficha correspondiente. El precio aparece en USD junto al importe original en CNY.", openListing: "Abrir ficha correspondiente", sourceChecked: "Fuente comprobada", sourceNote: "El precio y la disponibilidad pueden cambiar en la ficha original.", workflowTitle: "Una ruta clara en tres pasos", workflow: ["Elige una categoría o búsqueda.", "Abre la ficha exacta y compara sus opciones actuales.", "Revisa QC, talla y envío antes de decidir."], readGuides: "Leer guías de compra", independent: "Guía independiente, sin afiliación con Hacoo ni mercados. Aquí no se procesan pedidos, pagos ni garantías.", updated: "Enlaces revisados: 27 de agosto de 2026", menu: "Menú", close: "Cerrar", viewAll: "Ver todos los hallazgos", fieldNotes: "Notas prácticas",
    pageLabels: {} as Copy["pageLabels"], sectionLabels: ["Qué comprobar", "Qué puede fallar", "Siguiente paso"], sectionText: ["Comprueba título, primera imagen, variante, precio original e ID. Que una URL funcione no demuestra que el artículo siga siendo el mostrado.", "Las fichas cambian, desaparecen variantes y las hojas copiadas pueden conservar imágenes antiguas. Considera cada destino información actual de terceros.", "Guarda el ID, compara medidas, revisa opiniones recientes y conserva capturas de la opción elegida antes de pagar."], faq: [["¿Es la web oficial de Hacoo?", "No. Hacoos es una guía independiente y no representa a Hacoo."], ["¿Qué es Hacoo actualmente?", "La web oficial y las tiendas de aplicaciones lo presentan como una comunidad para compartir y descubrir contenido con valoraciones y reseñas."], ["¿Se venden productos aquí?", "No. Las tarjetas abren fichas externas y aquí no se procesan pedidos ni pagos."], ["¿Por qué cambia un enlace según el país?", "El catálogo y la cobertura pueden variar. Comprueba región real, destino y versión de la aplicación."], ["¿Cuánto tarda la entrega?", "El centro de ayuda oficial estima 15–28 días: 3–7 de preparación, 7–15 de envío y 5–10 de entrega final."], ["¿Cuál es el plazo de devolución?", "La ayuda oficial detallada indica 15 días generales desde la recepción, excepciones y que actualmente no hay cambios. Sigue el caso del pedido."], ["¿Por qué USD y CNY?", "USD facilita comparar y CNY ayuda a confirmar el precio original."], ["¿Un enlace revisado garantiza calidad?", "No. Confirma ruta e imagen en la fecha de revisión, no calidad ni entrega."], ["¿Qué reviso primero?", "Primero identidad y variante; después forma, costuras, etiquetas y medidas."], ["¿Las reseñas públicas son uniformemente positivas?", "No. Google Play y Trustpilot mostraban medias diferentes y temas recientes mixtos. Usa pruebas del artículo concreto."]],
  },
  it: {
    nav: { spreadsheet: "Foglio", finds: "Scoperte", categories: "Categorie", "qc-guide": "QC", shipping: "Spedizione", guide: "Guida", articles: "Articoli SEO", faq: "FAQ" },
    badge: "Guida indipendente · verificata il 27 ago 2026", heroTitle: "Trova il link Hacoo che volevi davvero aprire.", heroText: "Un indice indipendente con immagini corrispondenti, categorie dirette e note QC pratiche, senza scorrere fogli duplicati.", searchPlaceholder: "Cerca scarpe, felpe, borse…", searchButton: "Cerca nell’indice", categoriesTitle: "Inizia da una categoria", findsTitle: "Scoperte verificate, non reindirizzamenti casuali", findsText: "Ogni scheda usa la prima immagine attuale e apre l’inserzione corrispondente. Il prezzo è in USD con l’importo originale in CNY.", openListing: "Apri inserzione corrispondente", sourceChecked: "Fonte verificata", sourceNote: "Prezzo e disponibilità possono cambiare nella pagina originale.", workflowTitle: "Un percorso chiaro in tre passaggi", workflow: ["Scegli una categoria o una ricerca.", "Apri l’inserzione esatta e confronta le opzioni.", "Controlla QC, taglia e spedizione prima di decidere."], readGuides: "Leggi le guide all’acquisto", independent: "Guida indipendente, non affiliata a Hacoo o marketplace. Non gestisce ordini, pagamenti o garanzie.", updated: "Link verificati: 27 agosto 2026", menu: "Menu", close: "Chiudi", viewAll: "Vedi tutte le scoperte", fieldNotes: "Note pratiche",
    pageLabels: {} as Copy["pageLabels"], sectionLabels: ["Cosa verificare", "Cosa può cambiare", "Passo successivo"], sectionText: ["Controlla titolo, prima immagine, variante, prezzo originale e ID. Un URL attivo non dimostra che l’articolo sia ancora quello mostrato.", "Le inserzioni cambiano, le varianti spariscono e i fogli copiati possono mantenere vecchie immagini. Considera ogni destinazione informazione corrente di terzi.", "Salva l’ID, confronta le misure, leggi feedback recenti e conserva schermate della variante prima del pagamento."], faq: [["È il sito ufficiale Hacoo?", "No. Hacoos è una guida indipendente e non rappresenta Hacoo."], ["Che cos’è Hacoo oggi?", "Il sito ufficiale e gli app store lo presentano come comunità di condivisione e scoperta con valutazioni e recensioni."], ["I prodotti sono venduti qui?", "No. Le schede aprono pagine esterne; qui non si elaborano ordini o pagamenti."], ["Perché un link cambia in base al paese?", "Catalogo e copertura possono variare. Controlla regione reale, destinazione e versione dell’app."], ["Quanto richiede la consegna?", "Il centro assistenza ufficiale stima 15–28 giorni: 3–7 di preparazione, 7–15 di spedizione e 5–10 di consegna finale."], ["Qual è il termine di reso?", "L’assistenza ufficiale dettagliata indica in generale 15 giorni dalla ricezione, esclusioni e nessun cambio attuale. Segui il caso dell’ordine."], ["Perché USD e CNY?", "USD facilita il confronto e CNY aiuta a controllare il prezzo originale."], ["Un link verificato garantisce qualità?", "No. Conferma percorso e immagine alla data del controllo, non qualità o consegna."], ["Cosa controllo prima?", "Prima identità e variante, poi forma, cuciture, etichette e misure."], ["Le recensioni pubbliche sono tutte positive?", "No. Google Play e Trustpilot mostravano medie diverse e temi recenti contrastanti. Usa prove del singolo articolo."]],
  },
};

const englishLabels = copy.en.pageLabels;
for (const locale of ["de", "fr", "es", "it"] as const) {
  const titles: Record<Locale, Record<PageKey, string>> = {
    en: Object.fromEntries(pageKeys.map((k) => [k, englishLabels[k].title])) as Record<PageKey, string>,
    de: { home: "Hacoos Tabelle 2026", spreadsheet: "Hacoo Tabelle", finds: "Aktuelle Hacoo-Funde", categories: "Hacoo Kategorien", "qc-guide": "Hacoo QC-Fotoguide", shipping: "Hacoo Versandguide", guide: "Hacoo-Produktlinks verwenden", faq: "Hacoo Tabellen-FAQ", articles: "Hacoo SEO-Artikel & Recherchen", "articles/find-product-links": "Aktuelle Hacoo-Produktlinks finden", "articles/read-qc-photos": "Hacoo-Bewertungen & QC-Fotos prüfen", "articles/size-before-you-buy": "Hacoo-Größenguide: vor dem Kauf messen" },
    fr: { home: "Tableur Hacoos 2026", spreadsheet: "Tableur Hacoo", finds: "Sélection Hacoo actuelle", categories: "Catégories Hacoo", "qc-guide": "Guide photo QC Hacoo", shipping: "Guide livraison Hacoo", guide: "Utiliser les liens produit Hacoo", faq: "FAQ Tableur Hacoo", articles: "Articles SEO et recherches Hacoo", "articles/find-product-links": "Trouver des liens Hacoo actuels", "articles/read-qc-photos": "Avis Hacoo et photos QC: guide de vérification", "articles/size-before-you-buy": "Guide des tailles Hacoo: mesurer avant d’acheter" },
    es: { home: "Hoja Hacoos 2026", spreadsheet: "Hoja Hacoo", finds: "Hallazgos Hacoo actuales", categories: "Categorías Hacoo", "qc-guide": "Guía de fotos QC Hacoo", shipping: "Guía de envío Hacoo", guide: "Cómo usar enlaces Hacoo", faq: "FAQ de la hoja Hacoo", articles: "Artículos SEO e investigación de Hacoo", "articles/find-product-links": "Cómo encontrar enlaces Hacoo actuales", "articles/read-qc-photos": "Reseñas Hacoo y fotos QC: guía de pruebas", "articles/size-before-you-buy": "Guía de tallas Hacoo: mide antes de comprar" },
    it: { home: "Foglio Hacoos 2026", spreadsheet: "Foglio Hacoo", finds: "Scoperte Hacoo attuali", categories: "Categorie Hacoo", "qc-guide": "Guida foto QC Hacoo", shipping: "Guida spedizione Hacoo", guide: "Come usare i link Hacoo", faq: "FAQ foglio Hacoo", articles: "Articoli SEO e ricerche Hacoo", "articles/find-product-links": "Trovare link Hacoo aggiornati", "articles/read-qc-photos": "Recensioni Hacoo e foto QC: guida alle prove", "articles/size-before-you-buy": "Guida taglie Hacoo: misura prima di acquistare" },
  };
  const intros: Record<Exclude<Locale, "en">, Record<PageKey, string>> = {
    de: { home: "Geprüfte Produktwege, QC-Hilfe und Hacoo-Recherche in einem unabhängigen Index.", spreadsheet: "Durchsuche aktuelle Einträge statt kopierte oder abgelaufene Tabellenzeilen.", finds: "Abgeglichene Einträge mit aktuellem Bild, ID und Quellpreis.", categories: "Öffne zuerst die passende Kategorie und grenze danach den Artikel ein.", "qc-guide": "Ein belegbarer Ablauf für Identität, Form, Verarbeitung, Maße und Reklamationsfotos.", shipping: "Offizielle Zeitspannen, Tracking, Rückgabefrist und Nachweise verständlich eingeordnet.", guide: "Vom Fund bis zur Variantenprüfung, ohne einen alten Link als Beweis zu behandeln.", faq: "Fakten zu Links, Region, Lieferung, Rückgabe, Bewertungen, Preis und Größe.", articles: "Ausführliche, quellengestützte Artikel zu Links, QC, Bewertungen und Größenwahl.", "articles/find-product-links": "Warum Zielprüfung wichtiger ist als das Datum einer kopierten Tabelle.", "articles/read-qc-photos": "Bewertungen ausbalancieren, Konstruktion prüfen und brauchbare Nachweise sichern.", "articles/size-before-you-buy": "Kleidungs- und Schuhmaße mit einer passenden eigenen Referenz vergleichen." },
    fr: { home: "Liens vérifiés, aide QC et recherche Hacoo dans un index indépendant.", spreadsheet: "Rechercher des fiches actuelles au lieu de parcourir des lignes copiées ou périmées.", finds: "Fiches rapprochées avec image, identifiant et prix source actuels.", categories: "Ouvrir d’abord la catégorie pertinente, puis préciser l’article.", "qc-guide": "Une méthode fondée sur des preuves pour identité, forme, fabrication, mesures et photos de réclamation.", shipping: "Délais officiels, suivi, retour et preuves expliqués clairement.", guide: "Du premier lien à la vérification de variante sans prendre une ancienne publication pour preuve.", faq: "Réponses documentées sur liens, région, livraison, retour, avis, prix et tailles.", articles: "Articles approfondis et sourcés sur les liens, le QC, les avis et les tailles.", "articles/find-product-links": "Pourquoi vérifier la destination compte davantage que la date d’un tableur recopié.", "articles/read-qc-photos": "Équilibrer les avis, inspecter la fabrication et garder des preuves utiles.", "articles/size-before-you-buy": "Comparer les mesures du vêtement ou de la chaussure à une référence qui vous va." },
    es: { home: "Rutas verificadas, ayuda QC e investigación de Hacoo en un índice independiente.", spreadsheet: "Busca fichas actuales en vez de recorrer filas copiadas o caducadas.", finds: "Fichas comprobadas con imagen, ID y precio original actuales.", categories: "Abre primero la categoría adecuada y después concreta el artículo.", "qc-guide": "Un proceso con pruebas para identidad, forma, construcción, medidas y fotos de reclamación.", shipping: "Plazos oficiales, seguimiento, devolución y pruebas explicados con claridad.", guide: "Desde el enlace inicial hasta la variante exacta sin tratar una publicación antigua como prueba.", faq: "Respuestas documentadas sobre enlaces, región, entrega, devolución, opiniones, precio y talla.", articles: "Artículos extensos y basados en fuentes sobre enlaces, QC, reseñas y tallas.", "articles/find-product-links": "Por qué verificar el destino importa más que la fecha de una hoja copiada.", "articles/read-qc-photos": "Equilibra reseñas, inspecciona construcción y conserva pruebas útiles.", "articles/size-before-you-buy": "Compara medidas de prenda o calzado con una referencia que ya te queda bien." },
    it: { home: "Percorsi verificati, aiuto QC e ricerca Hacoo in un indice indipendente.", spreadsheet: "Cerca schede attuali invece di scorrere righe copiate o scadute.", finds: "Schede verificate con immagine, ID e prezzo originale aggiornati.", categories: "Apri prima la categoria corretta e poi restringi la ricerca.", "qc-guide": "Un metodo basato su prove per identità, forma, costruzione, misure e foto di reclamo.", shipping: "Tempi ufficiali, tracking, resi e prove spiegati con chiarezza.", guide: "Dal primo link alla verifica della variante senza usare un vecchio post come prova.", faq: "Risposte documentate su link, regione, consegna, reso, recensioni, prezzo e taglia.", articles: "Articoli approfonditi e basati su fonti su link, QC, recensioni e taglie.", "articles/find-product-links": "Perché verificare la destinazione conta più della data di un foglio copiato.", "articles/read-qc-photos": "Bilanciare recensioni, controllare la costruzione e conservare prove utili.", "articles/size-before-you-buy": "Confrontare misure di capi o scarpe con un riferimento che veste bene." },
  };
  copy[locale].pageLabels = Object.fromEntries(pageKeys.map((key) => [key, { title: titles[locale][key], intro: intros[locale][key] }])) as Copy["pageLabels"];
}

const evidencePositioning: Record<Locale, {
  badge: string;
  heroTitle: string;
  heroText: string;
  pages: Partial<Record<PageKey, { title: string; intro: string }>>;
  shippingAnswer: string;
}> = {
  en: {
    badge: "Independent evidence desk · checked 27 Aug 2026",
    heroTitle: "Verify Hacoo claims before you rely on them.",
    heroText: "An independent buyer-evidence desk for checking official policy dates, regional visibility, listing changes and the records worth saving before and after an order.",
    pages: {
      home: { title: "Hacoo Evidence & Buyer Verification", intro: "Independent checks for official policy dates, listing changes, regional visibility and buyer evidence." },
      spreadsheet: { title: "Hacoo Evidence Tracker", intro: "Use a dated verification record to separate current source evidence from copied or expired spreadsheet claims." },
      finds: { title: "Hacoo Listing Change Records", intro: "Source-matched examples showing which identifiers, variants, dates and destination details should be rechecked." },
      categories: { title: "Hacoo Category Evidence Checks", intro: "Category-specific verification points for size, materials, variants and missing listing evidence." },
      "qc-guide": { title: "Hacoo Buyer Evidence Photo Guide", intro: "Document identity, construction, measurements and defects without treating a photo as a guarantee." },
      shipping: { title: "Hacoo Shipping Evidence Guide", intro: "Current official receiving ranges, processing wording, destination differences and the records to preserve." },
      guide: { title: "Hacoo Listing Verification Workflow", intro: "Check source, date, region, product ID and selected variant before relying on a shared claim." },
      faq: { title: "Hacoo Buyer Evidence FAQ", intro: "Verified answers about official statements, changing listings, regional visibility, delivery and buyer records." },
      articles: { title: "Hacoo Evidence & Verification Research", intro: "Long-form analysis for checking claims, preserving context and making buyer evidence easier to audit." },
    },
    shippingAnswer: "Hacoo says receiving time is usually 15–28 days and processing normally takes 3–5 business days. Its current destination estimates are 15–25 days for the UK, France, Germany and Italy; 15–30 days for Spain; and 25–65 days for other countries.",
  },
  de: {
    badge: "Unabhängiger Evidenz-Desk · geprüft am 27.08.2026",
    heroTitle: "Prüfe Hacoo-Aussagen, bevor du dich darauf verlässt.",
    heroText: "Ein unabhängiger Evidenz-Desk für offizielle Richtlinienstände, regionale Sichtbarkeit, Listing-Änderungen und Unterlagen vor und nach einer Bestellung.",
    pages: {
      home: { title: "Hacoo Evidenz & Käuferprüfung", intro: "Unabhängige Prüfungen zu Richtlinienständen, Listing-Änderungen, regionaler Sichtbarkeit und Käuferbelegen." },
      spreadsheet: { title: "Hacoo Evidenz-Tracker", intro: "Trenne aktuelle Quellenbelege mit Datum von kopierten oder veralteten Tabellenangaben." },
      finds: { title: "Hacoo Listing-Änderungsprotokoll", intro: "Abgeglichene Beispiele zeigen, welche IDs, Varianten, Daten und Zielangaben erneut geprüft werden müssen." },
      categories: { title: "Hacoo Kategorie-Evidenzprüfungen", intro: "Kategoriespezifische Prüfungen für Maße, Materialien, Varianten und fehlende Listing-Belege." },
      "qc-guide": { title: "Hacoo Foto-Evidenzguide", intro: "Identität, Verarbeitung, Maße und Mängel dokumentieren, ohne Fotos als Garantie zu behandeln." },
      shipping: { title: "Hacoo Versand-Evidenzguide", intro: "Aktuelle offizielle Empfangszeiten, Bearbeitung, Zielunterschiede und aufzubewahrende Nachweise." },
      guide: { title: "Hacoo Listing-Prüfablauf", intro: "Quelle, Datum, Region, Produkt-ID und Variante prüfen, bevor eine geteilte Aussage verwendet wird." },
      faq: { title: "Hacoo Käufer-Evidenz FAQ", intro: "Geprüfte Antworten zu offiziellen Aussagen, Listing-Änderungen, Region, Lieferung und Käuferunterlagen." },
      articles: { title: "Hacoo Evidenz- & Verifikationsrecherche", intro: "Ausführliche Analysen zum Prüfen von Aussagen, Sichern von Kontext und nachvollziehbaren Belegen." },
    },
    shippingAnswer: "Hacoo nennt gewöhnlich 15–28 Tage Empfangszeit und 3–5 Werktage Bearbeitung. Aktuell gelten 15–25 Tage für UK, Frankreich, Deutschland und Italien, 15–30 Tage für Spanien und 25–65 Tage für andere Länder.",
  },
  fr: {
    badge: "Bureau de preuves indépendant · vérifié le 27 août 2026",
    heroTitle: "Vérifiez les affirmations Hacoo avant de vous y fier.",
    heroText: "Un bureau indépendant pour vérifier la date des politiques, la visibilité régionale, les changements de fiche et les preuves à conserver avant et après une commande.",
    pages: {
      home: { title: "Preuves Hacoo & vérification acheteur", intro: "Contrôles indépendants des politiques, changements de fiche, visibilité régionale et preuves d’achat." },
      spreadsheet: { title: "Suivi des preuves Hacoo", intro: "Distinguez les sources actuelles et datées des affirmations copiées ou périmées d’un tableur." },
      finds: { title: "Registre des changements de fiches Hacoo", intro: "Des exemples rapprochés montrent quels identifiants, variantes, dates et destinations revérifier." },
      categories: { title: "Contrôles de preuves Hacoo par catégorie", intro: "Points propres à chaque catégorie: taille, matière, variante et informations manquantes." },
      "qc-guide": { title: "Guide photo des preuves acheteur Hacoo", intro: "Documentez identité, fabrication, mesures et défauts sans transformer une photo en garantie." },
      shipping: { title: "Guide des preuves de livraison Hacoo", intro: "Délais officiels actuels, traitement, différences par destination et pièces à conserver." },
      guide: { title: "Méthode de vérification des fiches Hacoo", intro: "Vérifiez source, date, région, identifiant et variante avant de reprendre une affirmation partagée." },
      faq: { title: "FAQ des preuves acheteur Hacoo", intro: "Réponses vérifiées sur déclarations officielles, changements, région, livraison et justificatifs." },
      articles: { title: "Recherche Hacoo sur les preuves et la vérification", intro: "Analyses approfondies pour contrôler les affirmations et préserver un contexte vérifiable." },
    },
    shippingAnswer: "Hacoo indique généralement 15–28 jours de réception et 3–5 jours ouvrés de traitement. Les estimations actuelles sont de 15–25 jours pour le Royaume-Uni, la France, l’Allemagne et l’Italie, 15–30 jours pour l’Espagne et 25–65 jours pour les autres pays.",
  },
  es: {
    badge: "Mesa independiente de pruebas · revisada el 27 ago 2026",
    heroTitle: "Verifica las afirmaciones de Hacoo antes de confiar en ellas.",
    heroText: "Una mesa independiente para comprobar fechas de políticas, visibilidad regional, cambios de ficha y las pruebas que conviene conservar antes y después de un pedido.",
    pages: {
      home: { title: "Pruebas Hacoo y verificación del comprador", intro: "Comprobaciones independientes de políticas, cambios de ficha, visibilidad regional y pruebas del comprador." },
      spreadsheet: { title: "Registro de pruebas Hacoo", intro: "Separa fuentes actuales y fechadas de afirmaciones copiadas o caducadas en una hoja." },
      finds: { title: "Registro de cambios de fichas Hacoo", intro: "Ejemplos cotejados indican qué ID, variantes, fechas y destinos deben revisarse de nuevo." },
      categories: { title: "Pruebas Hacoo por categoría", intro: "Comprobaciones específicas de talla, material, variante y datos ausentes según la categoría." },
      "qc-guide": { title: "Guía fotográfica de pruebas Hacoo", intro: "Documenta identidad, construcción, medidas y defectos sin tratar una foto como garantía." },
      shipping: { title: "Guía de pruebas de envío Hacoo", intro: "Plazos oficiales actuales, procesamiento, diferencias por destino y documentos que conservar." },
      guide: { title: "Flujo de verificación de fichas Hacoo", intro: "Comprueba fuente, fecha, región, ID y variante antes de usar una afirmación compartida." },
      faq: { title: "FAQ de pruebas del comprador Hacoo", intro: "Respuestas verificadas sobre declaraciones oficiales, cambios, región, entrega y documentación." },
      articles: { title: "Investigación Hacoo de pruebas y verificación", intro: "Análisis detallados para comprobar afirmaciones y conservar un contexto auditable." },
    },
    shippingAnswer: "Hacoo indica que la recepción suele tardar 15–28 días y el procesamiento normalmente 3–5 días laborables. Sus estimaciones actuales son 15–25 días para Reino Unido, Francia, Alemania e Italia; 15–30 para España; y 25–65 para otros países.",
  },
  it: {
    badge: "Desk indipendente delle prove · verificato il 27 ago 2026",
    heroTitle: "Verifica le affermazioni Hacoo prima di farvi affidamento.",
    heroText: "Un desk indipendente per controllare date delle politiche, visibilità regionale, modifiche alle schede e prove da conservare prima e dopo un ordine.",
    pages: {
      home: { title: "Prove Hacoo e verifica dell’acquirente", intro: "Controlli indipendenti su politiche, modifiche alle schede, visibilità regionale e prove d’acquisto." },
      spreadsheet: { title: "Registro delle prove Hacoo", intro: "Separa fonti attuali e datate dalle affermazioni copiate o scadute in un foglio." },
      finds: { title: "Registro modifiche delle schede Hacoo", intro: "Esempi abbinati mostrano quali ID, varianti, date e destinazioni ricontrollare." },
      categories: { title: "Controlli delle prove Hacoo per categoria", intro: "Verifiche specifiche per taglia, materiale, variante e informazioni mancanti." },
      "qc-guide": { title: "Guida fotografica alle prove Hacoo", intro: "Documenta identità, costruzione, misure e difetti senza considerare una foto una garanzia." },
      shipping: { title: "Guida alle prove di spedizione Hacoo", intro: "Tempi ufficiali attuali, elaborazione, differenze per destinazione e documenti da conservare." },
      guide: { title: "Flusso di verifica delle schede Hacoo", intro: "Controlla fonte, data, regione, ID e variante prima di usare un’affermazione condivisa." },
      faq: { title: "FAQ sulle prove dell’acquirente Hacoo", intro: "Risposte verificate su dichiarazioni ufficiali, modifiche, regione, consegna e documenti." },
      articles: { title: "Ricerca Hacoo su prove e verifica", intro: "Analisi approfondite per verificare le affermazioni e conservare un contesto controllabile." },
    },
    shippingAnswer: "Hacoo indica che la ricezione richiede di solito 15–28 giorni e l’elaborazione normalmente 3–5 giorni lavorativi. Le stime attuali sono 15–25 giorni per Regno Unito, Francia, Germania e Italia, 15–30 per la Spagna e 25–65 per gli altri paesi.",
  },
};

const evidenceHomeCopy: Record<Locale, Pick<Copy,
  "categoriesTitle" | "findsTitle" | "findsText" | "sourceChecked" |
  "workflowTitle" | "workflow" | "viewAll" | "fieldNotes"
>> = {
  en: {
    categoriesTitle: "Verify evidence by product category",
    findsTitle: "Source-matched records with visible identifiers",
    findsText: "Each record keeps the current first image, product ID and a dated USD/CNY price snapshot. These fields help detect change; they do not guarantee availability or quality.",
    sourceChecked: "Source checked",
    workflowTitle: "A three-step evidence workflow",
    workflow: ["Record the claim, source date and real destination region.", "Open the exact listing and compare ID, image and selected variant.", "Save the final selection, official terms and any evidence needed later."],
    viewAll: "View all verification records",
    fieldNotes: "Verification notes",
  },
  de: {
    categoriesTitle: "Evidenz nach Produktkategorie prüfen",
    findsTitle: "Quellenabgleich mit sichtbaren Identifikatoren",
    findsText: "Jeder Datensatz zeigt aktuelles Titelbild, Produkt-ID und einen datierten USD/CNY-Preisschnappschuss. Das erkennt Änderungen, garantiert aber weder Verfügbarkeit noch Qualität.",
    sourceChecked: "Quelle geprüft",
    workflowTitle: "Evidenz in drei Schritten prüfen",
    workflow: ["Aussage, Quelldatum und echte Zielregion festhalten.", "Exaktes Listing öffnen und ID, Bild sowie Variante vergleichen.", "Endauswahl, offizielle Bedingungen und spätere Nachweise sichern."],
    viewAll: "Alle Prüfdatensätze ansehen",
    fieldNotes: "Prüfnotizen",
  },
  fr: {
    categoriesTitle: "Vérifier les preuves par catégorie",
    findsTitle: "Fiches rapprochées avec identifiants visibles",
    findsText: "Chaque fiche conserve première image, identifiant produit et instantané USD/CNY daté. Ces champs détectent le changement sans garantir disponibilité ni qualité.",
    sourceChecked: "Source contrôlée",
    workflowTitle: "Une vérification des preuves en trois étapes",
    workflow: ["Noter l’affirmation, la date source et la vraie région de destination.", "Ouvrir la fiche exacte et comparer identifiant, image et variante.", "Conserver sélection finale, conditions officielles et preuves utiles."],
    viewAll: "Voir tous les dossiers vérifiés",
    fieldNotes: "Notes de vérification",
  },
  es: {
    categoriesTitle: "Verifica pruebas por categoría",
    findsTitle: "Registros cotejados con identificadores visibles",
    findsText: "Cada registro conserva primera imagen, ID y una captura fechada del precio USD/CNY. Sirve para detectar cambios, no para garantizar disponibilidad o calidad.",
    sourceChecked: "Fuente verificada",
    workflowTitle: "Un flujo de pruebas en tres pasos",
    workflow: ["Anota la afirmación, fecha de la fuente y región real de destino.", "Abre la ficha exacta y compara ID, imagen y variante elegida.", "Guarda selección final, condiciones oficiales y pruebas necesarias."],
    viewAll: "Ver todos los registros verificados",
    fieldNotes: "Notas de verificación",
  },
  it: {
    categoriesTitle: "Verifica le prove per categoria",
    findsTitle: "Schede abbinate con identificatori visibili",
    findsText: "Ogni scheda conserva prima immagine, ID prodotto e istantanea datata del prezzo USD/CNY. Aiuta a rilevare modifiche, non garantisce disponibilità o qualità.",
    sourceChecked: "Fonte verificata",
    workflowTitle: "Un flusso di prove in tre passaggi",
    workflow: ["Registra affermazione, data della fonte e regione reale di destinazione.", "Apri la scheda esatta e confronta ID, immagine e variante.", "Conserva selezione finale, condizioni ufficiali e prove utili."],
    viewAll: "Vedi tutti i record verificati",
    fieldNotes: "Note di verifica",
  },
};

for (const locale of locales) {
  const positioning = evidencePositioning[locale];
  copy[locale].badge = positioning.badge;
  copy[locale].heroTitle = positioning.heroTitle;
  copy[locale].heroText = positioning.heroText;
  copy[locale].pageLabels = { ...copy[locale].pageLabels, ...positioning.pages };
  Object.assign(copy[locale], evidenceHomeCopy[locale]);
  // The fifth FAQ entry is the delivery-time answer in every locale.
  copy[locale].faq[4][1] = positioning.shippingAnswer;
}

export const pageMeta = Object.fromEntries(
  pageKeys.map((page) => [page, Object.fromEntries(locales.map((locale) => [locale, { title: copy[locale].pageLabels[page].title, description: copy[locale].pageLabels[page].intro }]))]),
) as Record<PageKey, Record<Locale, { title: string; description: string }>>;
