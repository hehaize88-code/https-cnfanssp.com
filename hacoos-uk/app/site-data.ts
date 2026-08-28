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
  "methodology",
  "articles/find-product-links",
  "articles/read-qc-photos",
  "articles/size-before-you-buy",
] as const;
export type PageKey = (typeof pageKeys)[number];

export function routeFor(locale: Locale, page: PageKey) {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return page === "home" ? (prefix || "/") : `${prefix}/${page}`;
}

export const products = [
  {
    name: "AMIRI MA-1 Sneakers — 9 styles",
    category: "shoes",
    price: "$53.44",
    gbp: "£39.33",
    sourcePrice: "¥388",
    id: "7638942248",
    href: "https://www.cnfanssp.com/AllProducts/3842.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20251219/1-2512191533513J.webp",
  },
  {
    name: "World T-shirt & Hoodie Set — 40+ styles",
    category: "sets",
    price: "$21.07",
    gbp: "£15.51",
    sourcePrice: "¥153",
    id: "7656214053",
    href: "https://www.cnfanssp.com/AllProducts/4643.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20260109/1-2601091G60V91.webp",
  },
  {
    name: "Celine Hoodie",
    category: "hoodies",
    price: "$10.88",
    gbp: "£8.01",
    sourcePrice: "¥79",
    id: "7622957753",
    href: "https://www.cnfanssp.com/AllProducts/2822.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20251202/1-2512021250461D.webp",
  },
  {
    name: "Neverfull Tote Bag — 39 styles",
    category: "bags",
    price: "$39.26",
    gbp: "£28.89",
    sourcePrice: "¥285",
    id: "7666359522",
    href: "https://www.cnfanssp.com/AllProducts/5030.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20260116/1-26011615050CE.webp",
  },
  {
    name: "Omerta 47 T-shirt",
    category: "t-shirts",
    price: "$9.50",
    gbp: "£6.99",
    sourcePrice: "¥69",
    id: "7588924374",
    href: "https://www.cnfanssp.com/AllProducts/882.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20251030/1-251030160U1b0.webp",
  },
  {
    name: "6PM Hoodie Set",
    category: "hoodies",
    price: "$27.41",
    gbp: "£20.17",
    sourcePrice: "¥199",
    id: "7572947321",
    href: "https://www.cnfanssp.com/AllProducts/24.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20251016/1-251016161633357.jpg",
  },
  {
    name: "Trapstar Bag",
    category: "bags",
    price: "$13.64",
    gbp: "£10.04",
    sourcePrice: "¥99",
    id: "7582900895",
    href: "https://www.cnfanssp.com/AllProducts/525.html",
    image: "https://www.cnfanssp.com/uploads/allimg/20251025/1-251025115303421.webp",
  },
  {
    name: "Autry Shoes",
    category: "shoes",
    price: "$68.87",
    gbp: "£50.68",
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
    nav: { spreadsheet: "UK Link Index", finds: "External Routes", categories: "Categories", "qc-guide": "UK Photo Checks", shipping: "UK Delivery", guide: "UK Guide", articles: "Articles", faq: "UK FAQ", methodology: "Methodology" },
    badge: "Independent UK link desk · checked 28 Aug 2026",
    heroTitle: "A Hacoo UK guide built around evidence, not assumptions.",
    heroText: "Check independently matched external product routes, first-image identity, UK delivery evidence, UK/EU sizing and return records before you decide.",
    searchPlaceholder: "Search shoes, hoodies, bags…",
    searchButton: "Search live index",
    categoriesTitle: "Start with a category",
    findsTitle: "Checked external routes, not mystery redirects",
    findsText: "Every card uses the current first image and opens an independently matched external catalogue listing. Prices stay in USD with the source CNY price beside them; the destination is not an official Hacoo product page.",
    openListing: "Open external catalogue listing",
    sourceChecked: "External source matched",
    sourceNote: "These cards open an external product catalogue, not Hacoo official product pages. GBP figures are approximate references using £1 = $1.3588 (Bank of England, 26 Aug 2026); checkout rates and availability can change.",
    workflowTitle: "A safer three-step route",
    workflow: ["Choose a UK buying question, category or search term.", "Open the external listing and match its image, source listing ID and current options.", "Check UK/EU sizing, delivery evidence and return conditions before deciding."],
    readGuides: "Read the buyer guides",
    independent: "Hacoos.uk is an independent UK research guide. It is not affiliated with Hacoo and does not handle orders, payments or seller guarantees.",
    updated: "Link check: 28 August 2026",
    menu: "Menu",
    close: "Close",
    viewAll: "View all checked finds",
    fieldNotes: "Field notes",
    pageLabels: {
      home: { title: "Hacoo UK Guide: Delivery, Sizing & External Routes", intro: "An independent UK guide to delivery evidence, UK/EU sizing, review-photo checks and externally matched catalogue routes." },
      spreadsheet: { title: "Hacoo UK Link Verification Index", intro: "Use a dated source-listing index to compare destination, first image, option and source price; these are external catalogue routes, not official Hacoo product URLs." },
      finds: { title: "Hacoo UK External Product Routes", intro: "Independently matched external catalogue routes with a current first image, source listing ID, source price and exact destination." },
      categories: { title: "Hacoo UK Category Routes & Source ID Checks", intro: "Choose an external catalogue category, then verify the source listing ID and identity fields before opening the destination." },
      "qc-guide": { title: "Hacoo UK Review Photo Checklist", intro: "A UK shopper's evidence sequence for identity, shape, materials, stitching, labels and ruler-based measurements." },
      shipping: { title: "Hacoo UK Shipping & Returns Guide", intro: "Understand the official UK estimate, delivery stages, tracking evidence and the general after-sales window." },
      guide: { title: "How to Use Hacoo in the UK", intro: "A UK-specific route from region and address checks to external listing verification, UK/EU sizing, review evidence and delivery records." },
      faq: { title: "Hacoo UK Delivery, Region & Returns FAQ", intro: "Straight answers for UK users about region settings, external routes, delivery evidence, returns and the limits of independent checks." },
      articles: { title: "Hacoo UK Buyer Research Notes", intro: "Long-form UK research on external route identity, review-photo evidence, UK/EU sizing and delivery decisions." },
      methodology: { title: "Hacoos UK Research Methodology & Corrections", intro: "See the named sources, check date, first-image matching rule, destination-status rule and correction policy behind this independent UK guide." },
      "articles/find-product-links": { title: "How UK Users Can Verify Hacoo-Related Product Routes", intro: "Why checking an external destination and source listing ID matters more than a date printed on a copied spreadsheet." },
      "articles/read-qc-photos": { title: "Hacoo Reviews UK: A Photo-Evidence Checklist", intro: "How UK users can balance current reviews, inspect construction and keep the photos a support process may require." },
      "articles/size-before-you-buy": { title: "Hacoo UK Size Guide: UK/EU Conversion & Measurements", intro: "A repeatable UK/EU garment and shoe measurement method built around the exact selected variant." },
    },
    sectionLabels: ["What to verify", "What can go wrong", "Best next step"],
    sectionText: ["Confirm that the title, first image, selected option, source price and source listing ID still agree. A working URL alone does not prove that the item is the one shown on the card.", "Listings change, variants disappear and reposted sheets can keep an old image after the destination changes. Treat every outbound page as current third-party information, not an official Hacoo product page.", "Save the source listing ID, compare UK/EU measurements, inspect recent feedback and keep screenshots of the selected option before paying on any external service."],
    faq: [["Is this the official Hacoo website?", "No. Hacoos.uk is an independent UK product-link and research guide and does not represent Hacoo."], ["What is Hacoo today?", "Hacoo's current official website and app-store descriptions present it as a content-sharing and discovery community with ratings, reviews and connections between users."], ["Are products sold here?", "No. Product cards open the matching external listing; this site does not process orders or payments."], ["Why can a Hacoo link look different in another country?", "Catalog visibility and delivery coverage can vary. Confirm the real region, destination and current app version before deciding that a link is dead."], ["How long does Hacoo delivery take in the UK?", "Hacoo's official shipping guidance lists 15–25 days for the UK. Treat it as an estimate and keep tracking evidence because delays can occur."], ["What is Hacoo's return window?", "The detailed official help article states a general 15-day window after receipt, lists excluded categories and says exchanges are not currently supported. Follow the instructions attached to the actual order."], ["Why show USD and CNY?", "USD makes comparison easier, while the source CNY amount helps you confirm the listing has not silently changed."], ["Does a checked link guarantee quality?", "No. A matched link confirms the route and first image at the check date; quality and delivery still require current evidence."], ["What should I inspect first?", "Confirm identity and variant first, then shape, stitching, labels, measurements and visible defects."], ["Are public reviews consistently positive?", "No. Google Play and Trustpilot showed different averages and mixed recent themes when checked. Use item-level photos and repeated observations rather than one platform score."]],
  },
  de: {
    nav: { spreadsheet: "UK-Linkindex", finds: "Externe Routen", categories: "Kategorien", "qc-guide": "UK-Fotocheck", shipping: "UK-Versand", guide: "UK-Anleitung", articles: "Artikel", faq: "UK-FAQ", methodology: "Methodik" },
    badge: "Unabhängiger Link-Desk · geprüft am 27.08.2026",
    heroTitle: "Finde genau den Hacoo-Link, den du öffnen wolltest.",
    heroText: "Ein schneller, unabhängiger Produktindex mit passenden Titelbildern, direkten Kategorien und praktischen QC-Hinweisen — ohne endlos durch kopierte Tabellen zu scrollen.",
    searchPlaceholder: "Schuhe, Hoodies, Taschen suchen…", searchButton: "Live-Index durchsuchen", categoriesTitle: "Mit einer Kategorie starten", findsTitle: "Geprüfte Funde statt falscher Weiterleitungen", findsText: "Jede Karte verwendet das aktuelle Titelbild und öffnet den passenden Eintrag. Preise stehen in USD und zusätzlich im ursprünglichen CNY-Betrag.", openListing: "Passenden Eintrag öffnen", sourceChecked: "Quelle abgeglichen", sourceNote: "Preis und Verfügbarkeit können sich auf der Quellseite ändern.", workflowTitle: "Der klare Weg in drei Schritten", workflow: ["Kategorie oder Suchbegriff wählen.", "Exakten Eintrag öffnen und aktuelle Optionen vergleichen.", "QC, Größe und Versand vor der Entscheidung prüfen."], readGuides: "Kaufratgeber lesen", independent: "Unabhängiger Ratgeber. Keine Verbindung zu Hacoo oder einem Marktplatz. Keine Bestellungen, Zahlungen oder Verkäufergarantien.", updated: "Linkprüfung: 27. August 2026", menu: "Menü", close: "Schließen", viewAll: "Alle geprüften Funde", fieldNotes: "Praxisnotizen",
    pageLabels: {} as Copy["pageLabels"], sectionLabels: ["Was prüfen?", "Was kann schiefgehen?", "Bester nächster Schritt"], sectionText: ["Prüfe Titel, erstes Bild, gewählte Variante, Quellpreis und Produkt-ID. Eine funktionierende URL beweist nicht, dass das gezeigte Produkt noch dasselbe ist.", "Angebote ändern sich, Varianten verschwinden und kopierte Tabellen behalten oft alte Bilder. Jede Zielseite ist aktuelle Information eines Dritten.", "Produkt-ID speichern, Maße vergleichen, neue Bewertungen prüfen und die gewählte Variante vor der Zahlung dokumentieren."], faq: [["Ist dies die offizielle Hacoo-Seite?", "Nein. Hacoos ist ein unabhängiger Link- und Recherche-Ratgeber und vertritt Hacoo nicht."], ["Was ist Hacoo heute?", "Die aktuelle offizielle Website und die App-Store-Texte beschreiben Hacoo als Community zum Teilen und Entdecken von Inhalten mit Bewertungen und Verbindungen zwischen Nutzern."], ["Werden hier Produkte verkauft?", "Nein. Karten öffnen externe Einträge; Bestellungen und Zahlungen werden hier nicht verarbeitet."], ["Warum sieht ein Link in einem anderen Land anders aus?", "Katalogsichtbarkeit und Lieferabdeckung können variieren. Prüfe echte Region, Zieladresse und App-Version."], ["Wie lange dauert die Lieferung?", "Das offizielle Help Center nennt insgesamt 15–28 Tage: 3–7 Vorbereitung, 7–15 Versand und 5–10 Zustellung. Verzögerungen sind möglich."], ["Wie lang ist die Rückgabefrist?", "Die ausführliche offizielle Hilfe nennt allgemein 15 Tage nach Erhalt, Ausnahmen und derzeit keinen Umtausch. Entscheidend sind die Hinweise im konkreten Auftrag."], ["Warum USD und CNY?", "USD erleichtert den Vergleich, CNY hilft bei der Kontrolle des Quellpreises."], ["Garantiert ein geprüfter Link Qualität?", "Nein. Er bestätigt Route und Titelbild zum Prüfdatum, nicht Qualität oder Lieferung."], ["Was zuerst prüfen?", "Zuerst Produkt und Variante, dann Form, Nähte, Etiketten und Maße."], ["Sind öffentliche Bewertungen einheitlich positiv?", "Nein. Google Play und Trustpilot zeigten unterschiedliche Mittelwerte und gemischte aktuelle Themen. Nutze Artikelbilder und wiederkehrende konkrete Beobachtungen."]],
  },
  fr: {
    nav: { spreadsheet: "Index UK", finds: "Routes externes", categories: "Catégories", "qc-guide": "Photos UK", shipping: "Livraison UK", guide: "Guide UK", articles: "Articles", faq: "FAQ UK", methodology: "Méthode" },
    badge: "Guide indépendant · vérifié le 27 août 2026", heroTitle: "Trouvez le lien Hacoo que vous vouliez vraiment ouvrir.", heroText: "Un index indépendant et rapide avec images correspondantes, catégories directes et conseils QC pratiques — sans parcourir des tableurs recopiés.", searchPlaceholder: "Chaussures, sweats, sacs…", searchButton: "Rechercher dans l’index", categoriesTitle: "Commencer par une catégorie", findsTitle: "Des trouvailles vérifiées, pas des redirections surprises", findsText: "Chaque carte reprend la première image actuelle et ouvre la fiche correspondante. Le prix est affiché en USD avec le montant source en CNY.", openListing: "Ouvrir la fiche correspondante", sourceChecked: "Source vérifiée", sourceNote: "Prix et disponibilité peuvent changer sur la fiche source.", workflowTitle: "Un parcours clair en trois étapes", workflow: ["Choisir une catégorie ou un mot-clé.", "Ouvrir la fiche exacte et comparer les options.", "Vérifier QC, taille et livraison avant de décider."], readGuides: "Lire les guides d’achat", independent: "Guide indépendant, sans affiliation avec Hacoo ni une place de marché. Aucune commande, paiement ou garantie vendeur n’est traité ici.", updated: "Liens vérifiés le 27 août 2026", menu: "Menu", close: "Fermer", viewAll: "Voir toutes les trouvailles", fieldNotes: "Notes pratiques",
    pageLabels: {} as Copy["pageLabels"], sectionLabels: ["Points à vérifier", "Risques fréquents", "Étape suivante"], sectionText: ["Vérifiez le titre, la première image, l’option, le prix source et l’identifiant. Une URL active ne prouve pas que l’article est toujours le même.", "Les fiches et variantes changent, alors que les tableurs recopiés conservent parfois une ancienne image. Traitez chaque destination comme une information tierce actuelle.", "Enregistrez l’identifiant, comparez les mesures, consultez les avis récents et gardez une capture de l’option choisie."], faq: [["Est-ce le site officiel Hacoo ?", "Non. Hacoos est un guide indépendant et ne représente pas Hacoo."], ["Qu’est-ce que Hacoo aujourd’hui ?", "Le site officiel et les boutiques d’applications le présentent comme une communauté de partage et de découverte avec notes et avis."], ["Les produits sont-ils vendus ici ?", "Non. Les cartes ouvrent des fiches externes; aucune commande ni paiement n’est traité ici."], ["Pourquoi un lien varie-t-il selon le pays ?", "Le catalogue et la livraison peuvent varier. Vérifiez région réelle, destination et version de l’application."], ["Quel est le délai de livraison ?", "Le centre d’aide officiel estime 15–28 jours au total: 3–7 de préparation, 7–15 d’expédition et 5–10 de livraison finale."], ["Quel est le délai de retour ?", "L’aide officielle détaillée indique généralement 15 jours après réception, des exclusions et pas d’échange actuellement. Suivez le dossier de commande."], ["Pourquoi USD et CNY ?", "L’USD facilite la comparaison et le CNY permet de contrôler le prix source."], ["Un lien vérifié garantit-il la qualité ?", "Non. Il confirme route et image à la date du contrôle, pas la qualité ni la livraison."], ["Que vérifier en premier ?", "D’abord l’identité et la variante, puis la forme, les coutures, étiquettes et mesures."], ["Les avis publics sont-ils uniformément positifs ?", "Non. Google Play et Trustpilot affichaient des moyennes différentes et des thèmes récents partagés. Privilégiez les preuves liées à l’article."]],
  },
  es: {
    nav: { spreadsheet: "Índice UK", finds: "Rutas externas", categories: "Categorías", "qc-guide": "Fotos UK", shipping: "Envío UK", guide: "Guía UK", articles: "Artículos", faq: "FAQ UK", methodology: "Método" },
    badge: "Guía independiente · revisada el 27 ago 2026", heroTitle: "Encuentra el enlace de Hacoo que realmente querías abrir.", heroText: "Un índice independiente con imágenes coincidentes, categorías directas y notas QC útiles, sin perder tiempo en hojas copiadas.", searchPlaceholder: "Buscar zapatillas, sudaderas, bolsos…", searchButton: "Buscar en el índice", categoriesTitle: "Empieza por una categoría", findsTitle: "Hallazgos revisados, no redirecciones sorpresa", findsText: "Cada tarjeta usa la primera imagen actual y abre la ficha correspondiente. El precio aparece en USD junto al importe original en CNY.", openListing: "Abrir ficha correspondiente", sourceChecked: "Fuente comprobada", sourceNote: "El precio y la disponibilidad pueden cambiar en la ficha original.", workflowTitle: "Una ruta clara en tres pasos", workflow: ["Elige una categoría o búsqueda.", "Abre la ficha exacta y compara sus opciones actuales.", "Revisa QC, talla y envío antes de decidir."], readGuides: "Leer guías de compra", independent: "Guía independiente, sin afiliación con Hacoo ni mercados. Aquí no se procesan pedidos, pagos ni garantías.", updated: "Enlaces revisados: 27 de agosto de 2026", menu: "Menú", close: "Cerrar", viewAll: "Ver todos los hallazgos", fieldNotes: "Notas prácticas",
    pageLabels: {} as Copy["pageLabels"], sectionLabels: ["Qué comprobar", "Qué puede fallar", "Siguiente paso"], sectionText: ["Comprueba título, primera imagen, variante, precio original e ID. Que una URL funcione no demuestra que el artículo siga siendo el mostrado.", "Las fichas cambian, desaparecen variantes y las hojas copiadas pueden conservar imágenes antiguas. Considera cada destino información actual de terceros.", "Guarda el ID, compara medidas, revisa opiniones recientes y conserva capturas de la opción elegida antes de pagar."], faq: [["¿Es la web oficial de Hacoo?", "No. Hacoos es una guía independiente y no representa a Hacoo."], ["¿Qué es Hacoo actualmente?", "La web oficial y las tiendas de aplicaciones lo presentan como una comunidad para compartir y descubrir contenido con valoraciones y reseñas."], ["¿Se venden productos aquí?", "No. Las tarjetas abren fichas externas y aquí no se procesan pedidos ni pagos."], ["¿Por qué cambia un enlace según el país?", "El catálogo y la cobertura pueden variar. Comprueba región real, destino y versión de la aplicación."], ["¿Cuánto tarda la entrega?", "El centro de ayuda oficial estima 15–28 días: 3–7 de preparación, 7–15 de envío y 5–10 de entrega final."], ["¿Cuál es el plazo de devolución?", "La ayuda oficial detallada indica 15 días generales desde la recepción, excepciones y que actualmente no hay cambios. Sigue el caso del pedido."], ["¿Por qué USD y CNY?", "USD facilita comparar y CNY ayuda a confirmar el precio original."], ["¿Un enlace revisado garantiza calidad?", "No. Confirma ruta e imagen en la fecha de revisión, no calidad ni entrega."], ["¿Qué reviso primero?", "Primero identidad y variante; después forma, costuras, etiquetas y medidas."], ["¿Las reseñas públicas son uniformemente positivas?", "No. Google Play y Trustpilot mostraban medias diferentes y temas recientes mixtos. Usa pruebas del artículo concreto."]],
  },
  it: {
    nav: { spreadsheet: "Indice UK", finds: "Percorsi esterni", categories: "Categorie", "qc-guide": "Foto UK", shipping: "Spedizione UK", guide: "Guida UK", articles: "Articoli", faq: "FAQ UK", methodology: "Metodo" },
    badge: "Guida indipendente · verificata il 27 ago 2026", heroTitle: "Trova il link Hacoo che volevi davvero aprire.", heroText: "Un indice indipendente con immagini corrispondenti, categorie dirette e note QC pratiche, senza scorrere fogli duplicati.", searchPlaceholder: "Cerca scarpe, felpe, borse…", searchButton: "Cerca nell’indice", categoriesTitle: "Inizia da una categoria", findsTitle: "Scoperte verificate, non reindirizzamenti casuali", findsText: "Ogni scheda usa la prima immagine attuale e apre l’inserzione corrispondente. Il prezzo è in USD con l’importo originale in CNY.", openListing: "Apri inserzione corrispondente", sourceChecked: "Fonte verificata", sourceNote: "Prezzo e disponibilità possono cambiare nella pagina originale.", workflowTitle: "Un percorso chiaro in tre passaggi", workflow: ["Scegli una categoria o una ricerca.", "Apri l’inserzione esatta e confronta le opzioni.", "Controlla QC, taglia e spedizione prima di decidere."], readGuides: "Leggi le guide all’acquisto", independent: "Guida indipendente, non affiliata a Hacoo o marketplace. Non gestisce ordini, pagamenti o garanzie.", updated: "Link verificati: 27 agosto 2026", menu: "Menu", close: "Chiudi", viewAll: "Vedi tutte le scoperte", fieldNotes: "Note pratiche",
    pageLabels: {} as Copy["pageLabels"], sectionLabels: ["Cosa verificare", "Cosa può cambiare", "Passo successivo"], sectionText: ["Controlla titolo, prima immagine, variante, prezzo originale e ID. Un URL attivo non dimostra che l’articolo sia ancora quello mostrato.", "Le inserzioni cambiano, le varianti spariscono e i fogli copiati possono mantenere vecchie immagini. Considera ogni destinazione informazione corrente di terzi.", "Salva l’ID, confronta le misure, leggi feedback recenti e conserva schermate della variante prima del pagamento."], faq: [["È il sito ufficiale Hacoo?", "No. Hacoos è una guida indipendente e non rappresenta Hacoo."], ["Che cos’è Hacoo oggi?", "Il sito ufficiale e gli app store lo presentano come comunità di condivisione e scoperta con valutazioni e recensioni."], ["I prodotti sono venduti qui?", "No. Le schede aprono pagine esterne; qui non si elaborano ordini o pagamenti."], ["Perché un link cambia in base al paese?", "Catalogo e copertura possono variare. Controlla regione reale, destinazione e versione dell’app."], ["Quanto richiede la consegna?", "Il centro assistenza ufficiale stima 15–28 giorni: 3–7 di preparazione, 7–15 di spedizione e 5–10 di consegna finale."], ["Qual è il termine di reso?", "L’assistenza ufficiale dettagliata indica in generale 15 giorni dalla ricezione, esclusioni e nessun cambio attuale. Segui il caso dell’ordine."], ["Perché USD e CNY?", "USD facilita il confronto e CNY aiuta a controllare il prezzo originale."], ["Un link verificato garantisce qualità?", "No. Conferma percorso e immagine alla data del controllo, non qualità o consegna."], ["Cosa controllo prima?", "Prima identità e variante, poi forma, cuciture, etichette e misure."], ["Le recensioni pubbliche sono tutte positive?", "No. Google Play e Trustpilot mostravano medie diverse e temi recenti contrastanti. Usa prove del singolo articolo."]],
  },
};

copy.de.badge = "Unabhängiger Link-Desk · geprüft am 28.08.2026";
copy.de.updated = "Linkprüfung: 28. August 2026";
copy.fr.badge = "Guide indépendant · vérifié le 28 août 2026";
copy.fr.updated = "Liens vérifiés le 28 août 2026";
copy.es.badge = "Guía independiente · revisada el 28 ago 2026";
copy.es.updated = "Enlaces revisados: 28 de agosto de 2026";
copy.it.badge = "Guida indipendente · verificata il 28 ago 2026";
copy.it.updated = "Link verificati: 28 agosto 2026";

const englishLabels = copy.en.pageLabels;
for (const locale of ["de", "fr", "es", "it"] as const) {
  const titles: Record<Locale, Record<PageKey, string>> = {
    en: Object.fromEntries(pageKeys.map((k) => [k, englishLabels[k].title])) as Record<PageKey, string>,
    de: { home: "Hacoo UK: Lieferung, Größen und externe Routen", spreadsheet: "Hacoo UK Link-Prüfindex", finds: "Externe Hacoo-Routen für UK-Nutzer", categories: "Hacoo UK Kategorien und Quellen-IDs", "qc-guide": "Hacoo UK Checkliste für Bewertungsfotos", shipping: "Hacoo Versand nach Großbritannien", guide: "Hacoo in Großbritannien verwenden", faq: "Hacoo UK FAQ zu Region, Lieferung und Rückgabe", articles: "Hacoo UK Käufer-Recherchen", methodology: "Hacoos UK Methodik und Korrekturen", "articles/find-product-links": "Hacoo-bezogene externe Routen in UK prüfen", "articles/read-qc-photos": "Hacoo Bewertungen UK: Foto-Checkliste", "articles/size-before-you-buy": "Hacoo UK Größenguide: UK/EU-Maße" },
    fr: { home: "Hacoo UK : livraison, tailles et routes externes", spreadsheet: "Index de vérification des liens Hacoo UK", finds: "Routes externes Hacoo pour le Royaume-Uni", categories: "Catégories Hacoo UK et identifiants source", "qc-guide": "Liste photo des avis Hacoo UK", shipping: "Livraison Hacoo au Royaume-Uni", guide: "Utiliser Hacoo au Royaume-Uni", faq: "FAQ Hacoo UK : région, livraison et retours", articles: "Recherches Hacoo UK pour acheteurs", methodology: "Méthode et corrections Hacoos UK", "articles/find-product-links": "Vérifier des routes externes liées à Hacoo au Royaume-Uni", "articles/read-qc-photos": "Avis Hacoo UK : liste de preuves photo", "articles/size-before-you-buy": "Guide des tailles Hacoo UK : conversion UK/UE" },
    es: { home: "Hacoo UK: entrega, tallas y rutas externas", spreadsheet: "Índice de verificación de enlaces Hacoo UK", finds: "Rutas externas Hacoo para usuarios de UK", categories: "Categorías Hacoo UK e ID de fuente", "qc-guide": "Lista de fotos de reseñas Hacoo UK", shipping: "Envío de Hacoo al Reino Unido", guide: "Cómo usar Hacoo en el Reino Unido", faq: "FAQ Hacoo UK: región, entrega y devoluciones", articles: "Investigación Hacoo UK para compradores", methodology: "Método y correcciones de Hacoos UK", "articles/find-product-links": "Verificar rutas externas relacionadas con Hacoo en UK", "articles/read-qc-photos": "Reseñas Hacoo UK: lista de pruebas fotográficas", "articles/size-before-you-buy": "Guía de tallas Hacoo UK: conversión UK/UE" },
    it: { home: "Hacoo UK: consegna, taglie e percorsi esterni", spreadsheet: "Indice di verifica link Hacoo UK", finds: "Percorsi esterni Hacoo per utenti UK", categories: "Categorie Hacoo UK e ID fonte", "qc-guide": "Lista foto recensioni Hacoo UK", shipping: "Spedizione Hacoo nel Regno Unito", guide: "Come usare Hacoo nel Regno Unito", faq: "FAQ Hacoo UK: regione, consegna e resi", articles: "Ricerca Hacoo UK per acquirenti", methodology: "Metodo e correzioni Hacoos UK", "articles/find-product-links": "Verificare percorsi esterni legati a Hacoo in UK", "articles/read-qc-photos": "Recensioni Hacoo UK: lista prove fotografiche", "articles/size-before-you-buy": "Guida taglie Hacoo UK: conversione UK/UE" },
  };
  const intros: Record<Exclude<Locale, "en">, Record<PageKey, string>> = {
    de: { home: "Unabhängiger UK-Ratgeber zu Lieferung, UK/EU-Größen, Bewertungsfotos und externen Katalogrouten.", spreadsheet: "Prüfe datierte externe Katalogrouten statt kopierte oder abgelaufene Tabellenzeilen.", finds: "Unabhängig abgeglichene externe Einträge mit aktuellem Bild, Quellen-ID und Preis.", categories: "Öffne zuerst eine externe Kategorie und grenze danach den Artikel ein.", "qc-guide": "Ein UK-orientierter Ablauf für Identität, Form, Verarbeitung, Maße und Reklamationsfotos.", shipping: "Offizielle UK-Zeitspanne, Tracking, Rückgabefrist und Nachweise verständlich eingeordnet.", guide: "Von Region und UK-Adresse bis Größen-, Routen- und Lieferprüfung.", faq: "Fakten für UK-Nutzer zu Region, Lieferung, Rückgabe, externen Routen und Größe.", articles: "Ausführliche UK-Käuferartikel zu externen Routen, Fotos, Bewertungen und Größenwahl.", methodology: "Benannte Quellen, Prüfdatum, Bildabgleich, Statuscodes und Korrekturregeln dieses unabhängigen UK-Ratgebers.", "articles/find-product-links": "Warum die Prüfung externer Ziele wichtiger ist als das Datum einer kopierten Tabelle.", "articles/read-qc-photos": "UK-Bewertungen ausbalancieren, Konstruktion prüfen und brauchbare Nachweise sichern.", "articles/size-before-you-buy": "UK/EU-Kleidungs- und Schuhmaße mit einer passenden Referenz vergleichen." },
    fr: { home: "Guide UK indépendant sur livraison, tailles UK/UE, photos d’avis et routes de catalogue externes.", spreadsheet: "Vérifier des routes externes datées plutôt que des lignes copiées ou périmées.", finds: "Fiches externes rapprochées avec image, identifiant source et prix actuels.", categories: "Ouvrir d’abord une catégorie externe pertinente, puis préciser l’article.", "qc-guide": "Une méthode UK fondée sur des preuves pour identité, fabrication, mesures et photos.", shipping: "Délai officiel UK, suivi, retour et preuves expliqués clairement.", guide: "De la région et l’adresse UK aux contrôles de taille, route et livraison.", faq: "Réponses UK sur région, livraison, retour, routes externes, avis et tailles.", articles: "Articles UK approfondis sur routes externes, photos, avis et tailles.", methodology: "Sources nommées, date, rapprochement d’image, statut et politique de correction du guide.", "articles/find-product-links": "Pourquoi vérifier une destination externe compte davantage que la date d’un tableur.", "articles/read-qc-photos": "Équilibrer les avis UK, inspecter la fabrication et garder des preuves utiles.", "articles/size-before-you-buy": "Comparer tailles UK/UE et mesures à une référence qui vous va." },
    es: { home: "Guía UK independiente sobre entrega, tallas UK/UE, fotos de reseñas y rutas externas.", spreadsheet: "Comprueba rutas externas fechadas en vez de filas copiadas o caducadas.", finds: "Fichas externas comprobadas con imagen, ID de fuente y precio actuales.", categories: "Abre primero una categoría externa y después concreta el artículo.", "qc-guide": "Un proceso UK con pruebas para identidad, construcción, medidas y fotos.", shipping: "Plazo oficial UK, seguimiento, devolución y pruebas explicados con claridad.", guide: "Desde región y dirección UK hasta controles de talla, ruta y entrega.", faq: "Respuestas UK sobre región, entrega, devolución, rutas externas y talla.", articles: "Artículos UK basados en fuentes sobre rutas externas, fotos, reseñas y tallas.", methodology: "Fuentes, fecha, cotejo de imagen, estado de destino y política de corrección del sitio.", "articles/find-product-links": "Por qué verificar un destino externo importa más que la fecha de una hoja.", "articles/read-qc-photos": "Equilibra reseñas UK, inspecciona construcción y conserva pruebas útiles.", "articles/size-before-you-buy": "Compara tallas UK/UE y medidas con una referencia que te queda bien." },
    it: { home: "Guida UK indipendente su consegna, taglie UK/UE, foto recensioni e percorsi esterni.", spreadsheet: "Controlla percorsi esterni datati invece di righe copiate o scadute.", finds: "Schede esterne verificate con immagine, ID fonte e prezzo aggiornati.", categories: "Apri prima una categoria esterna e poi restringi la ricerca.", "qc-guide": "Un metodo UK basato su prove per identità, costruzione, misure e foto.", shipping: "Tempi ufficiali UK, tracking, resi e prove spiegati con chiarezza.", guide: "Da regione e indirizzo UK ai controlli di taglia, percorso e consegna.", faq: "Risposte UK su regione, consegna, reso, percorsi esterni e taglia.", articles: "Articoli UK basati su fonti su percorsi esterni, foto, recensioni e taglie.", methodology: "Fonti, data, confronto immagini, stato destinazione e politica di correzione del sito.", "articles/find-product-links": "Perché verificare una destinazione esterna conta più della data di un foglio.", "articles/read-qc-photos": "Bilanciare recensioni UK, controllare la costruzione e conservare prove utili.", "articles/size-before-you-buy": "Confrontare taglie UK/UE e misure con un riferimento che veste bene." },
  };
  copy[locale].pageLabels = Object.fromEntries(pageKeys.map((key) => [key, { title: titles[locale][key], intro: intros[locale][key] }])) as Copy["pageLabels"];
}

export const pageMeta = Object.fromEntries(
  pageKeys.map((page) => [page, Object.fromEntries(locales.map((locale) => [locale, { title: copy[locale].pageLabels[page].title, description: copy[locale].pageLabels[page].intro }]))]),
) as Record<PageKey, Record<Locale, { title: string; description: string }>>;
