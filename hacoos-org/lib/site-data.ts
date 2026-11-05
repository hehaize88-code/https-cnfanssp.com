export const locales = ["en", "de", "fr", "es", "it", "pt"] as const;
export type Locale = (typeof locales)[number];

export const sections = [
  "spreadsheet",
  "finds",
  "articles",
  "guides",
  "qc",
  "shipping",
  "faq",
] as const;
export type Section = (typeof sections)[number];

type Copy = {
  nav: Record<Section, string>;
  eyebrow: string;
  homeMetaTitle: string;
  title: string;
  tagline: string;
  intro: string;
  searchPlaceholder: string;
  searchButton: string;
  browse: string;
  latest: string;
  latestIntro: string;
  categories: string;
  categoriesIntro: string;
  method: string;
  methodIntro: string;
  guides: string;
  guidesIntro: string;
  faqTitle: string;
  disclaimer: string;
  openReference: string;
  allFinds: string;
  readGuide: string;
  language: string;
  menu: string;
  footerLine: string;
  sectionTitles: Record<Section, string>;
  sectionIntros: Record<Section, string>;
};

export const copy: Record<Locale, Copy> = {
  en: {
    nav: { spreadsheet: "Spreadsheet", finds: "Finds", articles: "Articles", guides: "Guides", qc: "QC", shipping: "Shipping", faq: "FAQ" },
    eyebrow: "Independent Hacoo product research",
    homeMetaTitle: "Hacoo Product Links & Independent Finds | Hacoos.org",
    title: "Independent Hacoo Product Link Library",
    tagline: "A quieter way to find what is worth opening.",
    intro: "Hacoo references, product pages and quality checks arranged as a calm, searchable field library — built for decisions, not endless scrolling.",
    searchPlaceholder: "Search a product, category or style",
    searchButton: "Search the library",
    browse: "Browse the index",
    latest: "Recently catalogued",
    latestIntro: "Six live references selected to show the range of the source catalogue. Product availability and details can change.",
    categories: "The collection, by use",
    categoriesIntro: "Start broad, then judge the individual listing. Every category opens the live source catalogue.",
    method: "A useful index needs a method",
    methodIntro: "The library separates discovery from judgement. A listing can be interesting without being a safe decision.",
    guides: "Field notes, not filler",
    guidesIntro: "Practical reading on search, QC, sizing and shipping — written to answer the questions that appear after a product catches your eye.",
    faqTitle: "Hacoo FAQ: product links, reviews, QC and shipping",
    disclaimer: "Hacoos.org is an independent informational index. It is not Hacoo, does not sell products, and is not affiliated with the platforms or sellers referenced.",
    openReference: "View product details",
    allFinds: "View all finds",
    readGuide: "Read field note",
    language: "Language",
    menu: "Menu",
    footerLine: "Independent product research for careful browsers.",
    sectionTitles: {
      spreadsheet: "Hacoo Spreadsheet 2026: a live product-link index",
      finds: "Hacoo Finds – Shoes, Hoodies and Accessories",
      articles: "Hacoo guides and reviews, researched before writing",
      guides: "How to use Hacoo references with a verification method",
      qc: "Hacoo QC without guesswork",
      shipping: "Hacoo shipping checks before checkout",
      faq: "Hacoo FAQ: product links, reviews, QC and shipping",
    },
    sectionIntros: {
      spreadsheet: "Browse Hacoo spreadsheet links for shoes, hoodies and accessories. Open an independent product listing, compare the exact size and colour, or follow the guide to order in the Hacoo app.",
      finds: "Explore six product listings with photos. Open the catalogue to check the selected style, measurements and available colours.",
      articles: "Find product links, check a first order or get help with a parcel. Choose a guide for the step you are on.",
      guides: "Long-form notes that turn a promising reference into a considered decision.",
      qc: "A repeatable photo-review system for identity, proportions, measurements, material and construction — without claiming that every link includes warehouse QC.",
      shipping: "No universal Hacoo rate or delivery time is presented as fact. Compare the current destination quote, tracking terms and total delivered cost.",
      faq: "The important distinctions: what this site is, where links lead, and what you still need to verify yourself.",
    },
  },
  de: {
    nav: { spreadsheet: "Index", finds: "Funde", articles: "Artikel", guides: "Ratgeber", qc: "QC", shipping: "Versand", faq: "FAQ" },
    eyebrow: "Unabhängige Hacoo-Produktrecherche",
    homeMetaTitle: "Hacoo-Produktlinks & unabhängige Funde | Hacoos.org",
    title: "Unabhängige Hacoo-Produktlink-Bibliothek",
    tagline: "Ruhiger finden, was einen genaueren Blick verdient.",
    intro: "Hacoo-Referenzen, Produktseiten und Qualitätsprüfungen als ruhige, durchsuchbare Bibliothek — für Entscheidungen statt endloses Scrollen.",
    searchPlaceholder: "Produkt, Kategorie oder Stil suchen",
    searchButton: "Bibliothek durchsuchen",
    browse: "Index öffnen",
    latest: "Neu katalogisiert",
    latestIntro: "Sechs Live-Referenzen zeigen die Bandbreite des Quellkatalogs. Verfügbarkeit und Details können sich ändern.",
    categories: "Kollektion nach Nutzung",
    categoriesIntro: "Breit beginnen, dann den einzelnen Eintrag prüfen. Jede Kategorie öffnet den Live-Quellkatalog.",
    method: "Ein nützlicher Index braucht Methode",
    methodIntro: "Die Bibliothek trennt Entdeckung und Bewertung. Interessant bedeutet noch nicht sicher.",
    guides: "Feldnotizen statt Fülltext",
    guidesIntro: "Praktische Hinweise zu Suche, QC, Größen und Versand.",
    faqTitle: "Hacoo FAQ: Produktlinks, Bewertungen, QC und Versand",
    disclaimer: "Hacoos.org ist ein unabhängiger Informationsindex. Die Seite ist nicht Hacoo, verkauft nichts und ist mit den genannten Plattformen oder Verkäufern nicht verbunden.",
    openReference: "Produktdetails ansehen", allFinds: "Alle Funde", readGuide: "Feldnotiz lesen", language: "Sprache", menu: "Menü", footerLine: "Unabhängige Produktrecherche für sorgfältige Nutzer.",
    sectionTitles: { spreadsheet: "Hacoo Spreadsheet – Schuhe, Hoodies und Accessoires", finds: "Hacoo Finds – Schuhe, Hoodies und Accessoires", articles: "Recherchierte Hacoo-Ratgeber und Erfahrungen", guides: "Hacoo-Referenzen mit Prüfmethode nutzen", qc: "Hacoo QC ohne Rätselraten", shipping: "Hacoo-Versand vor dem Kauf prüfen", faq: "Hacoo FAQ: Produktlinks, Bewertungen, QC und Versand" },
    sectionIntros: { spreadsheet: "Durchsuche die Hacoo-Tabelle nach Schuhen, Hoodies und Accessoires. Öffne das Angebot im unabhängigen Katalog oder lies, wie du über die Hacoo-App bestellst.", finds: "Sechs Produktlinks mit Fotos. Prüfe Farbe, Größe und Ausführung auf der jeweiligen Katalogseite.", articles: "Finde Produktlinks, prüfe deine erste Bestellung oder lies nach, wie du ein Paket verfolgst.", guides: "Ausführliche Notizen für überlegte Entscheidungen.", qc: "Ein wiederholbares System für Identität, Proportion, Maße, Material und Verarbeitung, ohne QC-Fotos für jeden Link zu versprechen.", shipping: "Keine Universalrate oder Lieferfrist wird als Fakt behauptet. Vergleiche aktuelles Angebot, Tracking und Gesamtkosten.", faq: "Was diese Seite ist, wohin Links führen und was du selbst prüfen musst." },
  },
  fr: {
    nav: { spreadsheet: "Index", finds: "Sélection", articles: "Articles", guides: "Guides", qc: "QC", shipping: "Livraison", faq: "FAQ" },
    eyebrow: "Recherche indépendante autour de Hacoo",
    homeMetaTitle: "Liens produits Hacoo et sélections indépendantes | Hacoos.org",
    title: "Bibliothèque indépendante de liens produits Hacoo",
    tagline: "Une façon plus calme de trouver ce qui mérite d’être ouvert.",
    intro: "Références Hacoo, fiches produit et contrôles qualité réunis dans une bibliothèque claire et consultable — pensée pour décider, pas pour défiler.",
    searchPlaceholder: "Rechercher un produit, une catégorie ou un style", searchButton: "Rechercher", browse: "Parcourir l’index",
    latest: "Ajouts récents", latestIntro: "Six références actives illustrent la variété du catalogue source. Disponibilité et détails peuvent changer.",
    categories: "La collection, par usage", categoriesIntro: "Commencez large, puis évaluez chaque fiche. Chaque catégorie ouvre le catalogue source actif.",
    method: "Un bon index a besoin d’une méthode", methodIntro: "La bibliothèque sépare découverte et jugement. Intéressant ne veut pas dire fiable.",
    guides: "Des notes de terrain utiles", guidesIntro: "Recherche, QC, tailles et expédition expliqués sans remplissage.", faqTitle: "FAQ Hacoo : liens produits, avis, QC et livraison",
    disclaimer: "Hacoos.org est un index informatif indépendant. Il ne représente pas Hacoo, ne vend aucun produit et n’est affilié à aucune plateforme ou vendeur cité.",
    openReference: "Voir la fiche produit", allFinds: "Voir la sélection", readGuide: "Lire la note", language: "Langue", menu: "Menu", footerLine: "Recherche produit indépendante pour lecteurs attentifs.",
    sectionTitles: { spreadsheet: "Tableur Hacoo – Liens pour baskets, sweats et accessoires", finds: "Sélection Hacoo – Baskets, sweats et accessoires", articles: "Guides et avis Hacoo documentés", guides: "Utiliser les références Hacoo avec méthode", qc: "QC Hacoo sans deviner", shipping: "Vérifier la livraison Hacoo avant l’achat", faq: "FAQ Hacoo : liens produits, avis, QC et livraison" },
    sectionIntros: { spreadsheet: "Parcourez les liens Hacoo par catégorie : baskets, sweats à capuche et accessoires. Ouvrez une fiche du catalogue indépendant ou consultez le guide pour commander dans l’application Hacoo.", finds: "Six fiches produit avec photos pour comparer les modèles. Consultez le catalogue pour la pointure, les mesures et le coloris disponibles.", articles: "Retrouvez un lien produit, préparez votre première commande ou suivez un colis. Choisissez le guide adapté à votre situation.", guides: "Des notes longues pour transformer une piste en décision réfléchie.", qc: "Une méthode répétable pour identité, proportions, mesures, matière et fabrication, sans promettre des photos QC pour chaque lien.", shipping: "Aucun tarif ou délai universel n’est présenté comme fait. Comparez devis actuel, tracking et coût livré.", faq: "Ce qu’est ce site, où mènent les liens et ce qu’il reste à vérifier." },
  },
  es: {
    nav: { spreadsheet: "Índice", finds: "Hallazgos", articles: "Artículos", guides: "Guías", qc: "QC", shipping: "Envío", faq: "FAQ" },
    eyebrow: "Investigación independiente sobre Hacoo", homeMetaTitle: "Enlaces de productos Hacoo y hallazgos independientes | Hacoos.org", title: "Biblioteca independiente de enlaces de productos Hacoo", tagline: "Una forma más tranquila de encontrar lo que merece abrirse.",
    intro: "Referencias de Hacoo, páginas de producto y controles de calidad ordenados como una biblioteca serena y buscable.",
    searchPlaceholder: "Buscar producto, categoría o estilo", searchButton: "Buscar en la biblioteca", browse: "Explorar el índice",
    latest: "Catalogado recientemente", latestIntro: "Seis referencias activas muestran la variedad del catálogo fuente. La disponibilidad puede cambiar.",
    categories: "La colección, por uso", categoriesIntro: "Empieza por una categoría y evalúa cada ficha. Los enlaces abren el catálogo fuente en vivo.",
    method: "Un índice útil necesita método", methodIntro: "Descubrir y evaluar son tareas distintas. Algo interesante todavía puede ser una mala decisión.",
    guides: "Notas de campo, sin relleno", guidesIntro: "Consejos prácticos sobre búsqueda, QC, tallas y envío.", faqTitle: "Preguntas Hacoo: enlaces, opiniones, QC y envío",
    disclaimer: "Hacoos.org es un índice informativo independiente. No es Hacoo, no vende productos y no está afiliado con las plataformas o vendedores citados.",
    openReference: "Ver ficha del producto", allFinds: "Ver hallazgos", readGuide: "Leer la nota", language: "Idioma", menu: "Menú", footerLine: "Investigación independiente para compradores cuidadosos.",
    sectionTitles: { spreadsheet: "Hoja de Hacoo – Enlaces de zapatillas, sudaderas y accesorios", finds: "Selección Hacoo – Zapatillas, sudaderas y accesorios", articles: "Guías y opiniones Hacoo investigadas", guides: "Usar referencias Hacoo con un método", qc: "QC Hacoo sin adivinar", shipping: "Revisar el envío Hacoo antes de pagar", faq: "Preguntas Hacoo: enlaces, opiniones, QC y envío" },
    sectionIntros: { spreadsheet: "Busca enlaces de Hacoo por categoría: zapatillas, sudaderas y accesorios. Abre la ficha del catálogo independiente o consulta cómo comprar en la aplicación de Hacoo.", finds: "Compara seis fichas de producto con fotos. Abre el catálogo para comprobar el modelo, las medidas y el color disponible.", articles: "Encuentra enlaces de productos, prepara tu primer pedido o consulta qué hacer si hay un problema con la entrega.", guides: "Notas extensas para convertir una referencia en una decisión meditada.", qc: "Sistema para identidad, proporción, medidas, material y confección, sin prometer fotos QC en todos los enlaces.", shipping: "No se presenta una tarifa o plazo universal como hecho. Compara presupuesto actual, tracking y coste entregado.", faq: "Qué es esta web, adónde van los enlaces y qué debes comprobar." },
  },
  it: {
    nav: { spreadsheet: "Indice", finds: "Selezione", articles: "Articoli", guides: "Guide", qc: "QC", shipping: "Spedizione", faq: "FAQ" },
    eyebrow: "Ricerca indipendente sui prodotti Hacoo", homeMetaTitle: "Link prodotto Hacoo e selezioni indipendenti | Hacoos.org", title: "Biblioteca indipendente di link prodotto Hacoo", tagline: "Un modo più calmo per trovare ciò che vale la pena aprire.",
    intro: "Riferimenti Hacoo, pagine prodotto e controlli qualità organizzati in una biblioteca ordinata e ricercabile.",
    searchPlaceholder: "Cerca prodotto, categoria o stile", searchButton: "Cerca nella biblioteca", browse: "Sfoglia l’indice",
    latest: "Catalogati di recente", latestIntro: "Sei riferimenti attivi mostrano la varietà del catalogo sorgente. Disponibilità e dettagli possono cambiare.",
    categories: "La collezione, per uso", categoriesIntro: "Parti da una categoria, poi valuta la singola scheda. Ogni link apre il catalogo sorgente attivo.",
    method: "Un indice utile richiede un metodo", methodIntro: "Scoperta e giudizio restano separati. Interessante non significa automaticamente sicuro.",
    guides: "Note sul campo, senza riempitivi", guidesIntro: "Indicazioni pratiche su ricerca, QC, taglie e spedizione.", faqTitle: "FAQ Hacoo: link prodotto, recensioni, QC e spedizione",
    disclaimer: "Hacoos.org è un indice informativo indipendente. Non è Hacoo, non vende prodotti e non è affiliato alle piattaforme o ai venditori citati.",
    openReference: "Vedi la scheda prodotto", allFinds: "Vedi la selezione", readGuide: "Leggi la nota", language: "Lingua", menu: "Menu", footerLine: "Ricerca indipendente per chi naviga con attenzione.",
    sectionTitles: { spreadsheet: "Hacoo Spreadsheet – Link per scarpe, felpe e accessori", finds: "Selezione Hacoo – Scarpe, felpe e accessori", articles: "Guide e recensioni Hacoo documentate", guides: "Usare riferimenti Hacoo con metodo", qc: "Hacoo QC senza supposizioni", shipping: "Controllare la spedizione Hacoo prima dell’acquisto", faq: "FAQ Hacoo: link prodotto, recensioni, QC e spedizione" },
    sectionIntros: { spreadsheet: "Sfoglia i link Hacoo per categoria: scarpe, felpe e accessori. Apri una scheda nel catalogo indipendente o leggi come ordinare con l’app Hacoo.", finds: "Confronta sei schede prodotto con foto. Apri il catalogo per verificare la variante, le misure e il colore disponibile.", articles: "Trova il link di un prodotto, prepara il primo ordine o cerca indicazioni sulla consegna.", guides: "Note approfondite per trasformare una pista in una decisione ponderata.", qc: "Metodo per identità, proporzioni, misure, materiale e costruzione, senza promettere foto QC per ogni link.", shipping: "Nessuna tariffa o tempistica universale è presentata come fatto. Confronta preventivo, tracking e costo totale.", faq: "Cos’è questo sito, dove portano i link e cosa devi verificare." },
  },
  pt: {
    nav: { spreadsheet: "Índice", finds: "Achados", articles: "Artigos", guides: "Guias", qc: "QC", shipping: "Envio", faq: "FAQ" },
    eyebrow: "Pesquisa independente sobre produtos Hacoo", homeMetaTitle: "Links de produtos Hacoo e achados independentes | Hacoos.org", title: "Biblioteca independente de links de produtos Hacoo", tagline: "Uma forma mais calma de encontrar o que vale a pena abrir.",
    intro: "Referências Hacoo, páginas de produto e verificações de qualidade organizadas numa biblioteca clara e pesquisável.",
    searchPlaceholder: "Pesquisar produto, categoria ou estilo", searchButton: "Pesquisar na biblioteca", browse: "Explorar o índice",
    latest: "Catalogados recentemente", latestIntro: "Seis referências ativas mostram a variedade do catálogo de origem. Disponibilidade e detalhes podem mudar.",
    categories: "A coleção, por uso", categoriesIntro: "Comece por uma categoria e avalie cada ficha. Os links abrem o catálogo ativo.",
    method: "Um bom índice precisa de método", methodIntro: "Descoberta e avaliação são etapas diferentes. Interessante ainda não significa seguro.",
    guides: "Notas de campo, sem enchimento", guidesIntro: "Orientação prática sobre pesquisa, QC, tamanhos e envio.", faqTitle: "FAQ Hacoo: links de produtos, avaliações, QC e envio",
    disclaimer: "Hacoos.org é um índice informativo independente. Não é Hacoo, não vende produtos e não é afiliado às plataformas ou vendedores citados.",
    openReference: "Ver ficha do produto", allFinds: "Ver achados", readGuide: "Ler a nota", language: "Idioma", menu: "Menu", footerLine: "Pesquisa independente para quem navega com cuidado.",
    sectionTitles: { spreadsheet: "Folha de cálculo Hacoo – Ligações para sapatilhas, sweatshirts e acessórios", finds: "Seleção Hacoo – Sapatilhas, sweatshirts e acessórios", articles: "Guias e avaliações Hacoo pesquisados", guides: "Usar referências Hacoo com método", qc: "Hacoo QC sem adivinhação", shipping: "Verificar o envio Hacoo antes de pagar", faq: "FAQ Hacoo: links de produtos, avaliações, QC e envio" },
    sectionIntros: { spreadsheet: "Explore ligações Hacoo por categoria: sapatilhas, sweatshirts e acessórios. Abra a ficha no catálogo independente ou veja como encomendar na aplicação Hacoo.", finds: "Compare seis fichas de produto com fotografias. Abra o catálogo para confirmar o modelo, as medidas e a cor disponível.", articles: "Encontre a ligação de um produto, prepare a primeira encomenda ou consulte os passos para acompanhar uma entrega.", guides: "Notas extensas para transformar uma referência numa decisão pensada.", qc: "Sistema para identidade, proporções, medidas, material e construção, sem prometer fotos QC em todas as ligações.", shipping: "Nenhuma tarifa ou prazo universal é apresentado como facto. Compare orçamento atual, tracking e custo entregue.", faq: "O que é este site, onde levam os links e o que ainda deve verificar." },
  },
};

export const categories = [
  { name: "Shoes", note: "Court, running and everyday silhouettes", href: "https://www.cnfansge.com/shoes/", mark: "01" },
  { name: "Hoodies", note: "Weight, shape and fabric references", href: "https://www.cnfansge.com/hoodies-sweaters/", mark: "02" },
  { name: "T-shirts", note: "Print, blank and seasonal layers", href: "https://www.cnfansge.com/t-shirts/", mark: "03" },
  { name: "Jackets", note: "Outer layers and technical shapes", href: "https://www.cnfansge.com/jackets/", mark: "04" },
  { name: "Pants & shorts", note: "Fit-led bottoms and sets", href: "https://www.cnfansge.com/pants-shorts/", mark: "05" },
  { name: "Headwear", note: "Caps, knits and finishing pieces", href: "https://www.cnfansge.com/headwear/", mark: "06" },
  { name: "Accessories", note: "Bags, cases, jewellery and watches", href: "https://www.cnfansge.com/accessories/", mark: "07" },
  { name: "Electronics", note: "Small devices and everyday utility", href: "https://www.cnfansge.com/electronics/", mark: "08" },
];

export const products = [
  {
    "title": "Legacy 312 low-top trainers",
    "category": "Shoes",
    "href": "https://www.cnfansge.com/AllProducts/2586.html",
    "image": "https://www.cnfansge.com/uploads/allimg/20251124/1-25112410262D60.webp",
    "imageSmall": "https://www.cnfansge.com/uploads/allimg/20251124/1-25112410262D60.webp",
    "imageWidth": 750,
    "imageHeight": 750,
    "note": "Compare the exact colour and size"
  },
  {
    "title": "4tune zip-up hoodie",
    "category": "Hoodies",
    "href": "https://www.cnfansge.com/AllProducts/2580.html",
    "image": "https://www.cnfansge.com/uploads/allimg/20251124/1-251124101G0435.webp",
    "imageSmall": "https://www.cnfansge.com/uploads/allimg/20251124/1-251124101G0435.webp",
    "imageWidth": 750,
    "imageHeight": 750,
    "note": "Check measurements and the selected design"
  },
  {
    "title": "Samba low-top trainers",
    "category": "Shoes",
    "href": "https://www.cnfansge.com/AllProducts/1443.html",
    "image": "https://www.cnfansge.com/uploads/allimg/20251104/1-2511041546349B.webp",
    "imageSmall": "https://www.cnfansge.com/uploads/allimg/20251104/1-2511041546349B.webp",
    "imageWidth": 750,
    "imageHeight": 750,
    "note": "Verify the current colour option"
  },
  {
    "title": "Short-sleeved polo shirt",
    "category": "Polo shirts",
    "href": "https://www.cnfansge.com/AllProducts/302.html",
    "image": "https://www.cnfansge.com/uploads/allimg/20251016/1-251016142A2415.webp",
    "imageSmall": "https://www.cnfansge.com/uploads/allimg/20251016/1-251016142A2415.webp",
    "imageWidth": 750,
    "imageHeight": 750,
    "note": "Compare collar, sleeve and chest measurements"
  },
  {
    "title": "FF canvas belt",
    "category": "Accessories",
    "href": "https://www.cnfansge.com/AllProducts/3300.html",
    "image": "https://www.cnfansge.com/uploads/allimg/20251204/1-2512041152124B.webp",
    "imageSmall": "https://www.cnfansge.com/uploads/allimg/20251204/1-2512041152124B.webp",
    "imageWidth": 750,
    "imageHeight": 750,
    "note": "Confirm length, width and buckle option"
  },
  {
    "title": "Gel-Kayano running shoes",
    "category": "Shoes",
    "href": "https://www.cnfansge.com/AllProducts/1360.html",
    "image": "https://www.cnfansge.com/uploads/allimg/20251102/1-251102114343Y1.webp",
    "imageSmall": "https://www.cnfansge.com/uploads/allimg/20251102/1-251102114343Y1.webp",
    "imageWidth": 750,
    "imageHeight": 750,
    "note": "Check the current variant and detail photos"
  }
];

export const faqs = [
  ["Is Hacoos.org the official Hacoo website?", "No. Hacoos.org is an independent informational index. Hacoo describes itself as a global content-sharing community; this library is a separate research and navigation project."],
  ["Does this website sell or fulfil products?", "No. It publishes editorial context and links to live reference pages. Any purchase, payment, seller communication, inspection or shipping happens elsewhere."],
  ["Why can a product page change after I save it?", "The source catalogue is live. Titles, images, availability, prices and outbound purchase options can change. Re-open the source page before making a decision."],
  ["What should I check before using a reference?", "Confirm the exact variant, size chart, material, seller history, current photos, return conditions and total delivered cost. A useful link is a starting point, not proof of quality."],
  ["Is a Hacoo spreadsheet an official Hacoo catalogue?", "Not automatically. Hacoo currently describes itself as a content-sharing community, while spreadsheet pages are commonly independent collections. Check ownership, update date and destination before relying on one."],
  ["Is Hacoo legit?", "Hacoo is a real, currently listed app with official pages and substantial public review histories. That does not guarantee a specific creator, product, delivery or refund outcome. Verify the exact transaction in your region."],
  ["Why do Hacoo review scores differ?", "Stores and review platforms cover different regions, users, periods and scoring systems. On 26 August 2026 the checked Apple Portugal, Google Play and Trustpilot pages displayed materially different scores, so always name the source and date."],
  ["Does every Hacoo link include QC photos or a fixed delivery price?", "No universal promise can be verified. Photo evidence, listing detail, delivery routes and prices vary. Use the current destination page and responsible service rather than an old spreadsheet claim."],
];

export const guideCards = [
  { id: "search-with-intent", tag: "Discovery", title: "Search with intent, not with a screenshot pile", summary: "Build a short brief before you browse, use category language, and keep evidence attached to each reference." },
  { id: "qc-without-guesswork", tag: "Quality control", title: "QC without guesswork: a repeatable photo review", summary: "A practical sequence for silhouette, measurements, material, construction, symmetry and packaging." },
  { id: "size-before-style", tag: "Sizing", title: "Measure the garment you already own", summary: "Why body measurements alone are not enough, and how to compare a size chart against a real piece." },
  { id: "parcel-math", tag: "Shipping", title: "Parcel math before checkout", summary: "Estimate chargeable weight, protection and consolidation trade-offs before a bargain becomes expensive." },
];

export const longGuides = [
  {
    id: "search-with-intent",
    title: "Search with intent, not with a screenshot pile",
    standfirst: "The fastest way to waste an evening is to collect dozens of visually similar links without recording what made any of them useful.",
    paragraphs: [
      "Begin with a one-sentence brief: the object, the use, the non-negotiable detail and the acceptable compromise. ‘Dark everyday hoodie, mid-weight, quiet front, relaxed but not cropped’ is a searchable brief. ‘Nice hoodie’ is not. The brief gives you vocabulary for category filters and a reason to reject results early.",
      "Search in layers. Start with the category to understand the catalogue’s naming patterns. Then add the product type, silhouette, material or distinctive construction detail. Avoid beginning with a long string of marketing terms; catalogue titles are often inconsistent, translated or abbreviated. Two short searches usually reveal more than one over-specified query.",
      "For each promising reference, save the source URL, the date, the exact variant and one sentence explaining why it survived. Add the image that proves the relevant detail. A screenshot without its source page becomes an orphan: it cannot tell you whether the listing changed, whether the desired colour is selectable or whether the displayed price belongs to another option.",
      "Treat popularity as a signal to investigate, not a quality score. A heavily viewed item may be attractive, cheap, recently promoted or simply old. The evidence that matters remains product-specific: current photos, consistent measurements, construction details, seller history and the conditions that apply to the exact variant.",
      "End the search when you have three references that satisfy the brief. Compare them in a small table: price at source, expected weight, material claim, available measurements, photo evidence, unresolved questions and likely delivered cost. The goal is not to find every possible listing. It is to produce a short list that can survive verification.",
    ],
  },
  {
    id: "qc-without-guesswork",
    title: "QC without guesswork: a repeatable photo review",
    standfirst: "Quality-control photos become useful when you review them in the same order every time and separate visible facts from assumptions.",
    paragraphs: [
      "Start with identity. Confirm colour, model, size and variant before inspecting tiny details. Many costly mistakes are not defects; they are the wrong option photographed clearly. Ask for the label, order reference or size tag in the same frame when variants look similar.",
      "Move to silhouette and proportion. Use a straight, centred front view and a back view. Check overall width-to-height, shoulder position, toe shape, bag structure or case geometry before zooming in. A perfect stitch cannot rescue the wrong shape. If measurements matter, request a tape laid flat and visible from zero rather than trusting an unexplained number in a caption.",
      "Then inspect material and surface. Look for consistent grain, pile, sheen and colour under neutral light. Compression, plastic wrapping and a phone camera can distort texture, so compare several areas of the same item. A single bright close-up is weaker evidence than multiple ordinary views.",
      "Review construction in a fixed path: major seams, edge finishing, closures, hardware, attachment points and high-stress areas. For footwear, include outsole bonding and symmetry. For bags, include handle bases, zip ends and lining. For garments, include cuffs, hems, pocket alignment and the inside of prominent embroidery or print work.",
      "Finish with symmetry and contamination. Compare left and right where symmetry is expected, then scan for stains, glue, scratches, loose fibres or crushed structure. Record each issue with location and severity. ‘Looks off’ is difficult to act on; ‘right pocket sits approximately one centimetre lower in the flat front view’ is specific enough to verify.",
      "Decide against your brief, not against perfection. Classify findings as acceptable variation, correctable presentation, functional defect or wrong item. If evidence is missing, request one targeted photo rather than a new random set. The purpose of QC is to reduce uncertainty before the next irreversible step.",
    ],
  },
  {
    id: "size-before-style",
    title: "Measure the garment you already own",
    standfirst: "A labelled size is a name. A flat measurement is evidence you can compare.",
    paragraphs: [
      "Choose a garment that fits the way you want the new one to fit, not merely one you can wear. Lay it flat without stretching. Record chest width, shoulder width, body length and sleeve length using the same landmarks shown in the seller’s chart. For trousers, record waist across, rise, thigh, inseam and hem opening.",
      "Compare like with like. A chest circumference cannot be compared directly with a flat half-chest measurement. Raglan sleeves and dropped shoulders use different landmarks from set-in sleeves. If the chart does not explain its method, ask for a photograph of the item measured flat.",
      "Build in material behaviour. Knits, ribbed panels and elastic waists can stretch; dense woven fabric may not. Washing, pressing and manufacturing tolerance can also move a measurement. When you are between sizes, decide which dimension controls comfort and which can tolerate variation.",
      "Keep the measurement record with the source link and chosen variant. If the listing changes, your decision remains auditable. This simple habit is more reliable than collecting size recommendations from people whose preferred fit and body proportions you do not know.",
    ],
  },
  {
    id: "parcel-math",
    title: "Parcel math before checkout",
    standfirst: "The listed product price is only one component of the final decision.",
    paragraphs: [
      "Estimate actual weight and packed volume before placing multiple orders. Shipping may use actual or volumetric weight, whichever is greater. Shoes, structured bags and protective boxes can occupy more billable space than their mass suggests.",
      "Choose protection according to risk. Removing packaging may reduce volume, but a rigid box can protect a shaped product. Vacuum packing can help soft garments but is unsuitable for items that crease, deform or carry delicate surface details. Photographing the packed parcel can make the trade-off visible.",
      "Consolidation spreads a base shipping cost across several items, yet it also increases the value and complexity of one parcel. Compare a single large parcel with two smaller ones using the available route limits, insurance terms and tracking level. The cheapest quoted rate is not automatically the lowest-risk option.",
      "Finally, account for destination rules, taxes, prohibited materials and the consequences of an undeliverable parcel. These vary by route and destination and can change. Verify them with the responsible carrier or service immediately before shipment rather than relying on an old community post.",
    ],
  },
];
