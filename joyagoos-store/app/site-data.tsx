import type { ReactNode } from "react";
import { FooterLanguages, LanguageMenu } from "./language-menu";
import { commonUi } from "./full-translations";
import { withLanguage, type SiteLanguage } from "./i18n";

export const MAIN = "https://www.cnfanssp.com";

export const sectionOrder = ["spreadsheet", "finds", "guide", "qc", "shipping", "faq", "articles"] as const;
export type Section = typeof sectionOrder[number];

export const pageContent: Record<Section, {
  kicker: string;
  title: string;
  intro: string;
  blocks: { number: string; title: string; text: string; bullets?: string[] }[];
}> = {
  spreadsheet: {
    kicker: "JOYAGOO SPREADSHEET / START HERE",
    title: "Use the sheet to narrow choices—not to skip checks.",
    intro: "A spreadsheet is most useful as a discovery layer. The product page, selected option, current listing and later warehouse photos are what turn a promising row into a decision.",
    blocks: [
      { number: "01", title: "Choose a category first", text: "Broad feeds create weak clicks. Start with shoes, clothing, accessories or electronics, then compare products inside one direction.", bullets: ["Reduce unrelated results", "Compare similar product pages", "Keep the next step purposeful"] },
      { number: "02", title: "Open the matched page", text: "Use the product card that carries the same name, image and destination. Re-check the current listing because sellers can update options or remove pages." },
      { number: "03", title: "Record the exact option", text: "Color, size and version matter. A good preview cannot compensate for submitting the wrong option in the order flow." },
      { number: "04", title: "Keep proof in the right order", text: "Spreadsheet images help shortlist. Listing images explain the offer. Warehouse QC photos should decide whether the exact received item is acceptable." },
    ],
  },
  finds: {
    kicker: "CURATED FINDS / MATCHED ROUTES",
    title: "Product discovery with a clearer next click.",
    intro: "Each featured route pairs a readable product name with its current detail page. Browse visually, then verify the live page before relying on any saved price or option.",
    blocks: [
      { number: "01", title: "Shoes", text: "Compare silhouette, material, size options and whether original packaging is likely to increase parcel volume.", bullets: ["Autry Shoes", "AMIRI MA-1 Sneakers", "More footwear in the catalog"] },
      { number: "02", title: "Clothing", text: "Check garment measurements, color references and whether the seller provides enough detail images for comparison.", bullets: ["Represent Hoodie", "Corteiz Mohair Sweater", "Hoodies and layered pieces"] },
      { number: "03", title: "Accessories", text: "Small items can still require close inspection. Check face, clasp, finish, labels and all included pieces.", bullets: ["Tissot Watch", "Bags and caps", "Jewelry and small accessories"] },
      { number: "04", title: "Electronics", text: "Confirm plug, voltage, battery, compatibility and current shipping eligibility before adding electronics to a parcel." },
    ],
  },
  guide: {
    kicker: "JOYAGOO BUYING GUIDE / OFFICIAL FLOW",
    title: "From product link to warehouse, QC and parcel.",
    intro: "Joyagoo's published shopping flow starts with a product link, continues through purchasing and seller delivery, then moves to warehouse QC, storage and international parcel submission. Use the live account status at every step.",
    blocks: [
      { number: "01", title: "Submit the current product link", text: "Joyagoo says users can place a shopping-agent order with a product link. Reopen the listing first, then record the exact color, size, version and quantity before payment." },
      { number: "02", title: "Follow the order status", text: "The official guide separates Purchased, Seller Sent, Stock Arrived and QC Completed. Seller dispatch speed is controlled by the seller, so an order can remain Purchased while the agent follows up." },
      { number: "03", title: "Review QC within the live window", text: "Joyagoo says the warehouse takes several product photos after arrival. Its return policy currently describes a five-day window after QC completion, subject to return eligibility and the live return button." },
      { number: "04", title: "Store, consolidate and submit", text: "The official help center lists 90 days of free item storage. When acceptable items are stored, select them for a parcel, compare the routes shown for that destination and product mix, then choose packaging and insurance options." },
    ],
  },
  qc: {
    kicker: "QC CHECKLIST / EXACT ITEM",
    title: "Review the received item—not the spreadsheet preview.",
    intro: "Joyagoo says it checks items after warehouse arrival and provides several product photos. Those photos help with visible review; they are not a durability, fit or authenticity guarantee.",
    blocks: [
      { number: "01", title: "Confirm identity", text: "Check product type, color, size tag, version and quantity. Start with order accuracy before evaluating finer details.", bullets: ["Correct option", "Correct size", "Correct quantity"] },
      { number: "02", title: "Inspect visible construction", text: "Use front, back, side and close-up views. Look for asymmetry, stains, damage, loose stitching and missing pieces." },
      { number: "03", title: "Compare measurements", text: "A printed size label is not enough. Use available garment or insole measurements and compare them with something that already fits." },
      { number: "04", title: "Use the five-day window", text: "Joyagoo's current return policy says eligible requests must be submitted within 120 hours after status changes to QC Completed. Confirm that the return button is available and review seller-specific eligibility before acting." },
    ],
  },
  shipping: {
    kicker: "SHIPPING / WEIGHT + VOLUME",
    title: "Estimate the parcel, not only the product price.",
    intro: "Joyagoo states that international freight varies by destination, route, actual packed weight and parcel dimensions. For some routes, the greater of actual and volumetric weight becomes the chargeable weight.",
    blocks: [
      { number: "01", title: "Actual weight", text: "Count the item, seller packaging and final parcel materials. Dense products usually add cost through physical weight." },
      { number: "02", title: "Volumetric weight", text: "Joyagoo publishes the general formula length × width × height in centimeters divided by 5,000, 6,000, 7,000 or 8,000, depending on the logistics provider and route. Always use the divisor shown for the live route." },
      { number: "03", title: "Estimated vs actual billing", text: "The warehouse weighs and measures the parcel after packing; the logistics provider may later adjust the billing weight. Joyagoo describes the first parcel amount as an estimate rather than a guaranteed final charge." },
      { number: "04", title: "Route and packaging fit", text: "Compare product eligibility, tracking, insurance, dimension limits and compensation rules. Rehearsal packing is currently listed as a paid service that updates parcel weight and shipping cost before dispatch.", bullets: ["Check live route availability", "Review restricted items", "Leave room for final adjustment"] },
    ],
  },
  faq: {
    kicker: "CLEAR ANSWERS / SITE SCOPE",
    title: "Know what this guide does—and what it does not do.",
    intro: "Joyagoos Store is an independent discovery and education site. It does not operate user accounts, accept payments, perform warehouse QC or ship parcels.",
    blocks: [
      { number: "01", title: "Is this the official Joyagoo site?", text: "No. This is an independent product-discovery and educational guide. Use the real account flow for current order, warehouse and parcel actions." },
      { number: "02", title: "Where do product cards open?", text: "Cards open matched product detail pages on the selected catalog destination. The product name, preview and target are kept together." },
      { number: "03", title: "How long is free warehouse storage?", text: "Joyagoo's official help center currently states 90 days for stored items and 30 days for an unpaid submitted parcel. Extension terms and fees can change, so confirm them in the live account." },
      { number: "04", title: "What does the return policy say?", text: "The published policy currently describes a five-day, 120-hour request window after QC Completed for eligible products. Seller agreement, the return button, shipping and service fees still matter." },
    ],
  },
  articles: {
    kicker: "EDITORIAL DESK / SOURCE-BACKED",
    title: "Guides for decisions after the first product click.",
    intro: "The editorial lane focuses on operational questions: how to read QC evidence, how parcel weight changes cost, and how to keep product routes traceable.",
    blocks: [
      { number: "01", title: "QC photo checklist", text: "A practical sequence for checking identity, size, construction, visible defects and the exact option ordered." },
      { number: "02", title: "Actual vs volumetric weight", text: "Why parcel dimensions can change the chargeable weight and how to plan bulky products before submission." },
      { number: "03", title: "Product route verification", text: "A repeatable process for checking listing status, product identity, option clarity and destination accuracy." },
      { number: "04", title: "Editorial standard", text: "Separate platform rules from community experiences, keep dates visible and avoid presenting estimates as guarantees." },
    ],
  },
};

export const locales = {
  zh: { label: "中文（中国）", title: "更快找到 Joyagoo 商品", intro: "独立的商品发现、分类浏览、QC 准备与国际运输决策指南。", find: "查看商品", read: "阅读指南" },
  de: { label: "Deutsch", title: "Joyagoo Produkte schneller finden", intro: "Eine unabhängige Übersicht für Produktfunde, Kategorien, QC-Vorbereitung und Versandentscheidungen.", find: "Produkte ansehen", read: "Guide lesen" },
  pl: { label: "Polski", title: "Znajdź produkty Joyagoo szybciej", intro: "Niezależny przewodnik po produktach, kategoriach, kontroli QC i wysyłce międzynarodowej.", find: "Zobacz produkty", read: "Czytaj poradnik" },
  es: { label: "Español", title: "Encuentra productos Joyagoo más rápido", intro: "Una guía independiente para productos, categorías, preparación de QC y decisiones de envío.", find: "Ver productos", read: "Leer la guía" },
  fr: { label: "Français", title: "Trouvez les produits Joyagoo plus vite", intro: "Un guide indépendant pour les produits, les catégories, la préparation QC et les décisions d’expédition.", find: "Voir les produits", read: "Lire le guide" },
  it: { label: "Italiano", title: "Trova i prodotti Joyagoo più velocemente", intro: "Una guida indipendente per prodotti, categorie, preparazione QC e decisioni di spedizione.", find: "Vedi prodotti", read: "Leggi la guida" },
  pt: { label: "Português", title: "Encontre produtos Joyagoo mais depressa", intro: "Um guia independente para produtos, categorias, preparação de QC e decisões de envio.", find: "Ver produtos", read: "Ler o guia" },
  ro: { label: "Română", title: "Găsește mai rapid produse Joyagoo", intro: "Un ghid independent pentru produse, categorii, verificarea QC și decizii de expediere.", find: "Vezi produsele", read: "Citește ghidul" },
  sv: { label: "Svenska", title: "Hitta Joyagoo-produkter snabbare", intro: "En oberoende guide för produkter, kategorier, QC-kontroll och leveransbeslut.", find: "Visa produkter", read: "Läs guiden" },
} as const;

export type Locale = keyof typeof locales;

const localeNav: Record<Locale, Record<Section, string>> = {
  zh: { spreadsheet:"商品表格", finds:"精选商品", guide:"购买指南", qc:"QC 检查", shipping:"运输", faq:"常见问题", articles:"文章" },
  de: { spreadsheet:"Tabelle", finds:"Funde", guide:"Kaufguide", qc:"QC-Guide", shipping:"Versand", faq:"Fragen", articles:"Artikel" },
  pl: { spreadsheet:"Arkusz", finds:"Znaleziska", guide:"Poradnik", qc:"Kontrola QC", shipping:"Wysyłka", faq:"Pytania", articles:"Artykuły" },
  es: { spreadsheet:"Hoja", finds:"Hallazgos", guide:"Guía", qc:"Control QC", shipping:"Envío", faq:"Preguntas", articles:"Artículos" },
  fr: { spreadsheet:"Tableau", finds:"Sélections", guide:"Guide", qc:"Contrôle QC", shipping:"Expédition", faq:"Questions", articles:"Articles" },
  it: { spreadsheet:"Tabella", finds:"Selezioni", guide:"Guida", qc:"Controllo QC", shipping:"Spedizione", faq:"Domande", articles:"Articoli" },
  pt: { spreadsheet:"Planilha", finds:"Seleções", guide:"Guia", qc:"Controlo QC", shipping:"Envio", faq:"Perguntas", articles:"Artigos" },
  ro: { spreadsheet:"Tabel", finds:"Selecții", guide:"Ghid", qc:"Control QC", shipping:"Expediere", faq:"Întrebări", articles:"Articole" },
  sv: { spreadsheet:"Kalkylblad", finds:"Utvalda fynd", guide:"Köpguide", qc:"QC-kontroll", shipping:"Frakt", faq:"Frågor", articles:"Artiklar" },
};

export const localizedSections: Record<Locale, Record<Section, { kicker:string; title:string; intro:string; blocks:[string,string,string,string] }>> = {
  zh: {
    spreadsheet:{ kicker:"JOYAGOO 商品表格 / 从这里开始", title:"用表格缩小选择，而不是跳过核查。", intro:"商品表格只负责发现。当前商品页、所选规格和后续仓库照片，才会把一个链接变成可判断的商品。", blocks:["先选择商品分类","打开对应的当前页面","记录准确规格","按顺序核对证据"] },
    finds:{ kicker:"精选商品 / 对应路径", title:"让每次商品发现都有清楚的下一步。", intro:"每个精选商品都把名称、预览和对应详情页放在一起。继续前请重新检查当前页面。", blocks:["比较鞋类","核对服装与尺寸","检查配饰细节","确认电子产品运输限制"] },
    guide:{ kicker:"购买指南 / 决策顺序", title:"从一个商品链接走到经过核查的商品。", intro:"把发现商品、选择规格、仓库 QC 和包裹规划分开处理。独立预览不代表仓库实际收到的商品。", blocks:["发现并比较","准确提交规格","等待仓库照片","规划合适包裹"] },
    qc:{ kicker:"QC 检查清单", title:"检查实际收到的商品，而不是表格预览。", intro:"在仍可处理问题的时间内，将仓库照片与当前商品页和所选规格逐项对比。", blocks:["确认商品身份","检查可见做工","比较实际尺寸","及时作出决定"] },
    shipping:{ kicker:"运输 / 重量与体积", title:"估算整个包裹，而不只是商品价格。", intro:"目的地、路线、重量、尺寸和限制都会影响国际运费。轻但体积大的商品可能按体积重量计费。", blocks:["实际重量","体积重量","包装选择","比较合适路线"] },
    faq:{ kicker:"清楚回答", title:"了解本指南能做什么、不能做什么。", intro:"Joyagoos Store 是独立的商品发现与教育网站，不处理账户、付款、仓库 QC 或国际运输。", blocks:["这是官网吗？","商品卡片跳到哪里？","价格有保证吗？","QC 照片保证质量吗？"] },
    articles:{ kicker:"编辑中心 / 有据可查", title:"第一次点击商品后的实用指南。", intro:"独立文章重点讲解购买流程、QC 证据、包裹重量和商品链接核验。", blocks:["Joyagoo 完整购买指南","QC 照片检查清单","实际重量与体积重量","核验商品链接"] },
  },
  de: {
    spreadsheet:{ kicker:"JOYAGOO SPREADSHEET / START", title:"Nutze die Tabelle zum Eingrenzen, nicht als Ersatz für Prüfungen.", intro:"Eine Spreadsheet ist eine Entdeckungshilfe. Erst die aktuelle Produktseite, die gewählte Option und spätere Lagerfotos machen aus einem Fund eine Entscheidung.", blocks:["Kategorie zuerst wählen","Aktuelle Produktseite öffnen","Exakte Option notieren","Belege in der richtigen Reihenfolge prüfen"] },
    finds:{ kicker:"AUSGEWÄHLTE FUNDE", title:"Produkte mit einem klareren nächsten Klick.", intro:"Jede Auswahl verbindet einen verständlichen Produktnamen mit der passenden Detailseite. Prüfe vor dem Kauf immer die aktuelle Seite.", blocks:["Schuhe vergleichen","Kleidung und Maße prüfen","Accessoires im Detail ansehen","Elektronik und Versandfähigkeit prüfen"] },
    guide:{ kicker:"KAUFGUIDE / ABLAUF", title:"Vom interessanten Link zum geprüften Artikel.", intro:"Trenne Produktsuche, Bestelloption, Lager-QC und Paketplanung. Eine Vorschau bestätigt niemals den Artikel, der tatsächlich im Lager ankommt.", blocks:["Finden und vergleichen","Option sorgfältig absenden","Auf Lagerfotos warten","Paket passend planen"] },
    qc:{ kicker:"QC-CHECKLISTE", title:"Prüfe den erhaltenen Artikel, nicht nur die Vorschau.", intro:"Vergleiche die Lagerfotos mit dem exakten Angebot und der bestellten Variante, solange noch eine Handlung möglich ist.", blocks:["Artikelidentität bestätigen","Sichtbare Verarbeitung prüfen","Maße vergleichen","Schnell und belegt entscheiden"] },
    shipping:{ kicker:"VERSAND / GEWICHT + VOLUMEN", title:"Schätze das Paket, nicht nur den Produktpreis.", intro:"Ziel, Route, Gewicht, Maße und Einschränkungen beeinflussen die internationalen Kosten. Leichte, sperrige Ware kann nach Volumengewicht berechnet werden.", blocks:["Tatsächliches Gewicht","Volumengewicht","Verpackung wählen","Passende Route vergleichen"] },
    faq:{ kicker:"KLARE ANTWORTEN", title:"Verstehe, was diese Seite macht und was nicht.", intro:"Joyagoos Store ist ein unabhängiger Entdeckungs- und Informationsguide. Konten, Zahlungen, Lager-QC und Paketversand finden nicht hier statt.", blocks:["Ist dies die offizielle Seite?","Wohin führen Produktkarten?","Sind Preise garantiert?","Garantieren QC-Fotos Qualität?"] },
    articles:{ kicker:"REDAKTION / QUELLENBASIERT", title:"Guides für Entscheidungen nach dem ersten Produktklick.", intro:"Die Artikel behandeln Kaufablauf, QC-Belege, Paketgewicht und die Prüfung gespeicherter Produktlinks.", blocks:["Joyagoo Kaufanleitung","QC-Foto-Checkliste","Gewicht gegen Volumengewicht","Produktlinks verifizieren"] },
  },
  pl: {
    spreadsheet:{ kicker:"ARKUSZ JOYAGOO / START", title:"Użyj arkusza do zawężania wyboru, nie do pomijania kontroli.", intro:"Arkusz pomaga odkrywać produkty. Dopiero aktualna strona, wybrany wariant i zdjęcia magazynowe pozwalają podjąć decyzję.", blocks:["Najpierw wybierz kategorię","Otwórz właściwą stronę","Zapisz dokładny wariant","Sprawdź dowody po kolei"] },
    finds:{ kicker:"WYBRANE ZNALEZISKA", title:"Produkty z jasnym kolejnym krokiem.", intro:"Każda pozycja łączy czytelną nazwę z właściwą stroną szczegółów. Przed zakupem sprawdź aktualną ofertę.", blocks:["Porównaj obuwie","Sprawdź ubrania i wymiary","Obejrzyj akcesoria","Potwierdź elektronikę i ograniczenia"] },
    guide:{ kicker:"PORADNIK ZAKUPOWY", title:"Od obiecującego linku do sprawdzonego produktu.", intro:"Oddziel wyszukiwanie, wybór wariantu, QC w magazynie i planowanie paczki. Podgląd nie potwierdza otrzymanego towaru.", blocks:["Znajdź i porównaj","Wybierz właściwy wariant","Poczekaj na zdjęcia magazynowe","Zaplanuj paczkę"] },
    qc:{ kicker:"LISTA KONTROLNA QC", title:"Sprawdź otrzymany produkt, nie tylko podgląd.", intro:"Porównaj zdjęcia magazynowe z ofertą i wybranym wariantem, gdy wciąż możesz zareagować.", blocks:["Potwierdź zgodność produktu","Sprawdź widoczne wykonanie","Porównaj wymiary","Podejmij szybką decyzję"] },
    shipping:{ kicker:"WYSYŁKA / WAGA + OBJĘTOŚĆ", title:"Oszacuj paczkę, nie tylko cenę produktu.", intro:"Kraj, trasa, waga, wymiary i ograniczenia wpływają na koszt. Lekki, duży produkt może być rozliczony wagą objętościową.", blocks:["Waga rzeczywista","Waga objętościowa","Wybór opakowania","Porównanie tras"] },
    faq:{ kicker:"JASNE ODPOWIEDZI", title:"Dowiedz się, co robi ten poradnik, a czego nie.", intro:"Joyagoos Store jest niezależnym przewodnikiem. Nie obsługuje kont, płatności, QC ani wysyłki paczek.", blocks:["Czy to oficjalna strona?","Gdzie prowadzą karty?","Czy ceny są gwarantowane?","Czy QC gwarantuje jakość?"] },
    articles:{ kicker:"REDAKCJA / ŹRÓDŁA", title:"Poradniki na etap po pierwszym kliknięciu.", intro:"Artykuły dotyczą zakupu, zdjęć QC, wagi paczki i weryfikacji zapisanych linków.", blocks:["Jak kupować na Joyagoo","Lista zdjęć QC","Waga rzeczywista i objętościowa","Weryfikacja linków"] },
  },
  es: {
    spreadsheet:{ kicker:"JOYAGOO SPREADSHEET / INICIO", title:"Usa la hoja para reducir opciones, no para saltarte controles.", intro:"Una spreadsheet sirve para descubrir. La página actual, la opción elegida y las fotos posteriores del almacén convierten un enlace en una decisión.", blocks:["Elegir primero la categoría","Abrir la página correspondiente","Registrar la opción exacta","Revisar pruebas en orden"] },
    finds:{ kicker:"HALLAZGOS SELECCIONADOS", title:"Descubre productos con un siguiente clic más claro.", intro:"Cada selección conecta un nombre legible con su página de detalle. Comprueba siempre el contenido actual antes de continuar.", blocks:["Comparar calzado","Revisar ropa y medidas","Inspeccionar accesorios","Confirmar electrónica y restricciones"] },
    guide:{ kicker:"GUÍA DE COMPRA", title:"De un enlace prometedor a un artículo comprobado.", intro:"Separa descubrimiento, opción de pedido, QC de almacén y preparación del paquete. Una vista previa independiente no confirma lo recibido.", blocks:["Buscar y comparar","Enviar la opción correcta","Esperar pruebas del almacén","Preparar el paquete"] },
    qc:{ kicker:"LISTA DE CONTROL QC", title:"Revisa el artículo recibido, no solo la vista previa.", intro:"Compara las fotos del almacén con el anuncio y la opción exacta mientras siga abierta la posibilidad de actuar.", blocks:["Confirmar identidad","Revisar construcción visible","Comparar medidas","Decidir con rapidez"] },
    shipping:{ kicker:"ENVÍO / PESO + VOLUMEN", title:"Calcula el paquete, no solo el precio del producto.", intro:"Destino, ruta, peso, dimensiones y restricciones cambian el coste. Un producto ligero y voluminoso puede cobrarse por peso volumétrico.", blocks:["Peso real","Peso volumétrico","Opciones de embalaje","Comparar la ruta adecuada"] },
    faq:{ kicker:"RESPUESTAS CLARAS", title:"Qué hace esta guía y qué no hace.", intro:"Joyagoos Store es una guía independiente. No gestiona cuentas, pagos, QC de almacén ni envíos internacionales.", blocks:["¿Es el sitio oficial?","¿Dónde abren las tarjetas?","¿Los precios están garantizados?","¿El QC garantiza la calidad?"] },
    articles:{ kicker:"EDITORIAL / CON FUENTES", title:"Guías para después del primer clic.", intro:"Los artículos se centran en compra, pruebas QC, peso del paquete y verificación de enlaces.", blocks:["Cómo comprar en Joyagoo","Lista QC","Peso real y volumétrico","Verificación de enlaces"] },
  },
  fr: {
    spreadsheet:{ kicker:"JOYAGOO SPREADSHEET / DÉPART", title:"Utilisez le tableau pour trier, pas pour éviter les vérifications.", intro:"Une spreadsheet aide à découvrir. La page actuelle, l’option choisie et les photos d’entrepôt transforment ensuite un lien en décision.", blocks:["Choisir une catégorie","Ouvrir la page correspondante","Noter l’option exacte","Vérifier les preuves dans l’ordre"] },
    finds:{ kicker:"SÉLECTIONS ASSOCIÉES", title:"Découvrez des produits avec une prochaine étape claire.", intro:"Chaque sélection associe un nom lisible à la bonne page détaillée. Vérifiez toujours la page actuelle avant de continuer.", blocks:["Comparer les chaussures","Vérifier vêtements et mesures","Inspecter les accessoires","Confirmer électronique et restrictions"] },
    guide:{ kicker:"GUIDE D’ACHAT", title:"D’un lien intéressant à un article vérifié.", intro:"Séparez découverte, option commandée, QC d’entrepôt et préparation du colis. Un aperçu indépendant ne confirme pas l’article reçu.", blocks:["Trouver et comparer","Choisir la bonne option","Attendre les photos d’entrepôt","Préparer le colis"] },
    qc:{ kicker:"CHECKLIST QC", title:"Examinez l’article reçu, pas seulement l’aperçu.", intro:"Comparez les photos d’entrepôt à l’annonce et à l’option exacte tant qu’une action reste possible.", blocks:["Confirmer l’identité","Examiner la fabrication visible","Comparer les mesures","Décider rapidement"] },
    shipping:{ kicker:"EXPÉDITION / POIDS + VOLUME", title:"Estimez le colis, pas uniquement le prix du produit.", intro:"Destination, route, poids, dimensions et restrictions influencent le coût. Un article léger mais volumineux peut être facturé au poids volumétrique.", blocks:["Poids réel","Poids volumétrique","Choix d’emballage","Comparer la bonne route"] },
    faq:{ kicker:"RÉPONSES CLAIRES", title:"Ce que ce guide fait, et ce qu’il ne fait pas.", intro:"Joyagoos Store est un guide indépendant. Il ne gère ni compte, ni paiement, ni QC d’entrepôt, ni expédition.", blocks:["Est-ce le site officiel ?","Où ouvrent les cartes ?","Les prix sont-ils garantis ?","Le QC garantit-il la qualité ?"] },
    articles:{ kicker:"RÉDACTION / SOURCÉE", title:"Des guides pour l’étape après le premier clic.", intro:"Les articles traitent de l'achat, des preuves QC, du poids du colis et de la vérification des liens.", blocks:["Comment acheter sur Joyagoo","Checklist photos QC","Poids réel et volumétrique","Vérifier les liens"] },
  },
  it: {
    spreadsheet:{ kicker:"JOYAGOO SPREADSHEET / INIZIO", title:"Usa il foglio per restringere la scelta, non per saltare i controlli.", intro:"Una spreadsheet aiuta a scoprire. Pagina attuale, opzione scelta e foto del magazzino trasformano poi un link in una decisione.", blocks:["Scegliere la categoria","Aprire la pagina abbinata","Annotare l’opzione esatta","Controllare le prove in ordine"] },
    finds:{ kicker:"SELEZIONI ABBINATE", title:"Scopri prodotti con un passaggio successivo più chiaro.", intro:"Ogni selezione collega un nome leggibile alla pagina dettagliata corretta. Controlla sempre la pagina attuale prima di continuare.", blocks:["Confrontare le scarpe","Controllare capi e misure","Ispezionare gli accessori","Verificare elettronica e restrizioni"] },
    guide:{ kicker:"GUIDA ALL’ACQUISTO", title:"Da un link promettente a un articolo controllato.", intro:"Separa scoperta, opzione ordinata, QC del magazzino e preparazione del pacco. Un’anteprima indipendente non conferma ciò che arriva.", blocks:["Trovare e confrontare","Inviare l’opzione corretta","Attendere le foto del magazzino","Preparare il pacco"] },
    qc:{ kicker:"CHECKLIST QC", title:"Controlla l’articolo ricevuto, non solo l’anteprima.", intro:"Confronta le foto del magazzino con l’inserzione e l’opzione esatta finché è ancora possibile intervenire.", blocks:["Confermare l’identità","Esaminare la costruzione","Confrontare le misure","Decidere rapidamente"] },
    shipping:{ kicker:"SPEDIZIONE / PESO + VOLUME", title:"Stima il pacco, non soltanto il prezzo del prodotto.", intro:"Destinazione, rotta, peso, dimensioni e restrizioni cambiano il costo. Un articolo leggero ma voluminoso può usare il peso volumetrico.", blocks:["Peso reale","Peso volumetrico","Scelte d’imballaggio","Confrontare la rotta adatta"] },
    faq:{ kicker:"RISPOSTE CHIARE", title:"Cosa fa questa guida e cosa non fa.", intro:"Joyagoos Store è una guida indipendente. Non gestisce account, pagamenti, QC del magazzino o spedizioni.", blocks:["È il sito ufficiale?","Dove aprono le schede?","I prezzi sono garantiti?","Il QC garantisce la qualità?"] },
    articles:{ kicker:"EDITORIALE / CON FONTI", title:"Guide per il passaggio dopo il primo clic.", intro:"Gli articoli trattano acquisto, prove QC, peso del pacco e verifica dei link.", blocks:["Come acquistare su Joyagoo","Checklist foto QC","Peso reale e volumetrico","Verifica dei link"] },
  },
  pt: {
    spreadsheet:{ kicker:"PLANILHA JOYAGOO / INÍCIO", title:"Use a planilha para reduzir escolhas, não para saltar verificações.", intro:"A planilha serve para descobrir. A página atual, a opção escolhida e as fotos do armazém transformam depois um link numa decisão.", blocks:["Escolher primeiro a categoria","Abrir a página correspondente","Registar a opção exata","Verificar provas pela ordem certa"] },
    finds:{ kicker:"SELEÇÕES ASSOCIADAS", title:"Descubra produtos com um próximo clique mais claro.", intro:"Cada seleção liga um nome legível à página de detalhe correta. Verifique sempre a página atual antes de avançar.", blocks:["Comparar calçado","Verificar roupa e medidas","Inspecionar acessórios","Confirmar eletrónica e restrições"] },
    guide:{ kicker:"GUIA DE COMPRA", title:"De um link promissor a um artigo verificado.", intro:"Separe descoberta, opção encomendada, QC do armazém e preparação da encomenda. Uma pré-visualização independente não confirma o produto recebido.", blocks:["Encontrar e comparar","Escolher a opção correta","Aguardar fotos do armazém","Preparar a encomenda"] },
    qc:{ kicker:"CHECKLIST QC", title:"Verifique o artigo recebido, não apenas a pré-visualização.", intro:"Compare as fotos do armazém com o anúncio e a opção exata enquanto ainda for possível agir.", blocks:["Confirmar identidade","Examinar o acabamento visível","Comparar medidas","Decidir rapidamente"] },
    shipping:{ kicker:"ENVIO / PESO + VOLUME", title:"Calcule a encomenda, não apenas o preço do produto.", intro:"Destino, rota, peso, dimensões e restrições alteram o custo. Um artigo leve e volumoso pode ser cobrado pelo peso volumétrico.", blocks:["Peso real","Peso volumétrico","Opções de embalagem","Comparar a rota adequada"] },
    faq:{ kicker:"RESPOSTAS CLARAS", title:"Saiba o que este guia faz e o que não faz.", intro:"Joyagoos Store é um guia independente. Não gere contas, pagamentos, QC do armazém nem expedições.", blocks:["É o site oficial?","Onde abrem os cartões?","Os preços são garantidos?","O QC garante qualidade?"] },
    articles:{ kicker:"EDITORIAL / COM FONTES", title:"Guias para depois do primeiro clique.", intro:"Os artigos abordam compra, provas QC, peso da encomenda e verificação de links.", blocks:["Como comprar na Joyagoo","Checklist de fotos QC","Peso real e volumétrico","Verificar links"] },
  },
  ro: {
    spreadsheet:{ kicker:"TABEL JOYAGOO / START", title:"Folosește tabelul pentru a restrânge opțiunile, nu pentru a sări verificările.", intro:"Tabelul ajută la descoperire. Pagina actuală, opțiunea aleasă și fotografiile din depozit transformă legătura într-o decizie.", blocks:["Alege categoria","Deschide pagina corectă","Notează opțiunea exactă","Verifică dovezile în ordine"] },
    finds:{ kicker:"SELECȚII ASOCIATE", title:"Descoperă produse cu un pas următor clar.", intro:"Fiecare selecție leagă un nume clar de pagina sa de detalii. Verifică mereu oferta actuală înainte de a continua.", blocks:["Compară încălțămintea","Verifică hainele și măsurile","Inspectează accesoriile","Confirmă electronicele și restricțiile"] },
    guide:{ kicker:"GHID DE CUMPĂRARE", title:"De la o legătură promițătoare la un articol verificat.", intro:"Separă descoperirea, varianta comandată, QC-ul din depozit și pregătirea coletului. O previzualizare nu confirmă articolul primit.", blocks:["Găsește și compară","Trimite opțiunea corectă","Așteaptă pozele din depozit","Pregătește coletul"] },
    qc:{ kicker:"LISTĂ DE CONTROL QC", title:"Verifică articolul primit, nu doar previzualizarea.", intro:"Compară fotografiile din depozit cu oferta și opțiunea exactă cât timp mai poți interveni.", blocks:["Confirmă identitatea","Verifică execuția vizibilă","Compară măsurile","Decide rapid"] },
    shipping:{ kicker:"EXPEDIERE / GREUTATE + VOLUM", title:"Estimează coletul, nu doar prețul produsului.", intro:"Destinația, ruta, greutatea, dimensiunile și restricțiile schimbă costul. Un articol ușor și voluminos poate fi taxat volumetric.", blocks:["Greutate reală","Greutate volumetrică","Alegerea ambalajului","Compararea rutei"] },
    faq:{ kicker:"RĂSPUNSURI CLARE", title:"Înțelege ce face acest ghid și ce nu face.", intro:"Joyagoos Store este un ghid independent. Nu gestionează conturi, plăți, QC în depozit sau transport.", blocks:["Este site-ul oficial?","Unde duc cardurile?","Prețurile sunt garantate?","QC garantează calitatea?"] },
    articles:{ kicker:"EDITORIAL / CU SURSE", title:"Ghiduri pentru pasul de după primul clic.", intro:"Articolele tratează cumpărarea, dovezile QC, greutatea coletului și verificarea legăturilor.", blocks:["Cum cumperi pe Joyagoo","Checklist fotografii QC","Greutate reală și volumetrică","Verificarea legăturilor"] },
  },
  sv: {
    spreadsheet:{ kicker:"JOYAGOO KALKYLBLAD / START", title:"Använd kalkylbladet för att begränsa valet, inte för att hoppa över kontroller.", intro:"Kalkylbladet hjälper dig att hitta. Den aktuella sidan, vald variant och lagerbilder gör sedan länken till ett beslut.", blocks:["Välj kategori först","Öppna rätt produktsida","Spara exakt variant","Kontrollera underlagen i ordning"] },
    finds:{ kicker:"UTVALDA FYND", title:"Produktfynd med ett tydligare nästa klick.", intro:"Varje urval kopplar ett tydligt produktnamn till rätt detaljsida. Kontrollera alltid den aktuella sidan innan du fortsätter.", blocks:["Jämför skor","Kontrollera kläder och mått","Granska accessoarer","Bekräfta elektronik och begränsningar"] },
    guide:{ kicker:"KÖPGUIDE", title:"Från en lovande länk till en kontrollerad vara.", intro:"Håll isär upptäckt, beställd variant, lager-QC och paketplanering. En fristående förhandsvisning bekräftar inte mottagen vara.", blocks:["Hitta och jämför","Välj rätt variant","Vänta på lagerbilder","Planera paketet"] },
    qc:{ kicker:"QC-CHECKLISTA", title:"Kontrollera den mottagna varan, inte bara förhandsvisningen.", intro:"Jämför lagerbilderna med annonsen och den exakta varianten medan det fortfarande går att agera.", blocks:["Bekräfta identitet","Granska synligt utförande","Jämför mått","Besluta snabbt"] },
    shipping:{ kicker:"FRAKT / VIKT + VOLYM", title:"Beräkna paketet, inte bara produktpriset.", intro:"Destination, rutt, vikt, mått och begränsningar påverkar kostnaden. En lätt men skrymmande vara kan debiteras efter volymvikt.", blocks:["Faktisk vikt","Volymvikt","Förpackningsval","Jämför rätt rutt"] },
    faq:{ kicker:"TYDLIGA SVAR", title:"Förstå vad guiden gör och inte gör.", intro:"Joyagoos Store är en oberoende guide. Den hanterar inte konton, betalningar, lager-QC eller paketfrakt.", blocks:["Är detta den officiella sidan?","Vart leder produktkorten?","Är priser garanterade?","Garanterar QC kvalitet?"] },
    articles:{ kicker:"REDAKTION / KÄLLOR", title:"Guider för steget efter första klicket.", intro:"Artiklarna handlar om köpflöde, QC-underlag, paketvikt och verifiering av länkar.", blocks:["Så köper du på Joyagoo","QC-fotochecklista","Faktisk vikt och volymvikt","Verifiera länkar"] },
  },
};

export function Header({ prefix = "", locale, section, language = locale || "en", onLanguageChange }: { prefix?: string; locale?: Locale; section?: Section; language?: SiteLanguage; onLanguageChange?:(language:SiteLanguage)=>void }) {
  const path = (section: Section) => `${prefix}/${section}`.replace("//", "/");
  return (
    <header className="site-header inner-header">
      <a className="brand" href={withLanguage(prefix || "/", language)}><img className="brand-logo" src="/joyagoo-logo.png" alt="JoyaGoo" width="768" height="235" /></a>
      <nav aria-label="Primary navigation">{sectionOrder.slice(0, 6).map((item) => <a key={item} href={withLanguage(path(item), language)}>{language !== "en" ? localeNav[language][item] : item[0].toUpperCase() + item.slice(1)}</a>)}</nav>
      <div className="header-actions">
        <a className="seo-cta" href={withLanguage(path("articles"), language)}>{language !== "en" ? localeNav[language].articles : "Articles"}</a>
        <LanguageMenu language={language} onChange={onLanguageChange} />
        <a className="header-cta" href={MAIN + "/AllProducts/"} target="_blank" rel="noreferrer">{language !== "en" ? commonUi[language].catalog : "Open catalog ↗"}</a>
      </div>
    </header>
  );
}

export function Footer({ prefix = "", section, language = (prefix.replace("/", "") || "en") as SiteLanguage, onLanguageChange }: { prefix?: string; section?: Section; language?: SiteLanguage; onLanguageChange?:(language:SiteLanguage)=>void }) {
  const footerLocale = language === "en" ? undefined : language;
  const footerText = footerLocale ? localizedSections[footerLocale].faq.intro : "Independent product-discovery guide. Product availability, account actions, payment, warehouse QC and shipping remain in their respective live flows.";
  return (
    <footer>
      <a className="brand" href={withLanguage(prefix || "/", language)}><img className="brand-logo" src="/joyagoo-logo.png" alt="JoyaGoo" width="768" height="235" /></a>
      <p>{footerText}</p>
      <div><FooterLanguages language={language} onChange={onLanguageChange} /><a href={withLanguage((prefix || "") + "/faq", language)}>{footerLocale ? commonUi[footerLocale].faq : "FAQ"}</a></div>
    </footer>
  );
}

export function GuidePage({ section, prefix = "" }: { section: Section; prefix?: string }) {
  const content = pageContent[section];
  return (
    <main>
      <Header prefix={prefix} section={section} />
      <section className="inner-hero"><p className="eyebrow">{content.kicker}</p><h1>{content.title}</h1><p>{content.intro}</p>
        <div className="inner-actions"><a href={MAIN + "/AllProducts/"} target="_blank" rel="noreferrer">Browse matched products ↗</a><a href={(prefix || "") + "/articles"}>Read latest guides</a></div>
      </section>
      <section className="inner-grid">
        {content.blocks.map((block) => <article key={block.number}><span>{block.number}</span><h2>{block.title}</h2><p>{block.text}</p>{block.bullets && <ul>{block.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</article>)}
      </section>
      <section className="inner-cta"><p className="eyebrow">NEXT STEP</p><h2>Keep the product, evidence and destination connected.</h2><a href={MAIN + "/AllProducts/"} target="_blank" rel="noreferrer">Open the product catalog ↗</a></section>
      <Footer prefix={prefix} section={section} />
    </main>
  );
}

export function LocaleHome({ locale }: { locale: Locale }) {
  const t = locales[locale]; const prefix = `/${locale}`;
  return <main><Header prefix={prefix} locale={locale} /><section className="inner-hero locale-hero"><p className="eyebrow">JOYAGOO PRODUCT INDEX / 2026</p><h1>{t.title}</h1><p>{t.intro}</p><div className="inner-actions"><a href={MAIN + "/AllProducts/"} target="_blank" rel="noreferrer">{t.find} ↗</a><a href={prefix + "/spreadsheet"}>{t.read}</a></div></section><section className="locale-grid">{sectionOrder.map((section, index) => <a href={`${prefix}/${section}`} key={section}><span>0{index + 1}</span><h2>{localeNav[locale][section]}</h2><p>{localizedSections[locale][section].intro}</p><b>↗</b></a>)}</section><Footer prefix={prefix} /></main>;
}

export function LocaleGuidePage({ locale, section }: { locale: Locale; section: Section }) {
  const content = localizedSections[locale][section]; const prefix = `/${locale}`;
  return <main><Header prefix={prefix} locale={locale} section={section} /><section className="inner-hero"><p className="eyebrow">{content.kicker}</p><h1>{content.title}</h1><p>{content.intro}</p><div className="inner-actions"><a href={MAIN + "/AllProducts/"} target="_blank" rel="noreferrer">{locales[locale].find} ↗</a><a href={prefix + "/articles"}>{localeNav[locale].articles}</a></div></section><section className="inner-grid">{content.blocks.map((title,index) => <article key={title}><span>0{index+1}</span><h2>{title}</h2><p>{content.intro}</p></article>)}</section><Footer prefix={prefix} section={section} /></main>;
}

export function StructuredData({ children }: { children: ReactNode }) { return <>{children}</>; }
