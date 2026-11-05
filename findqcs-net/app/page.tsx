"use client";

import { catalogueSearch, identifyListing } from "./catalogueLookup";
import { FormEvent, useState } from "react";
import Link from "next/link";
import LanguageLinks from "./components/LanguageLinks";
import { LocalizedContent } from "./components/LocalizedContent";
import { trackEvent, trackCatalogueOpen } from "./components/AnalyticsEvents";
import { changeLanguage, type Lang, useLanguage } from "./components/language";

const copy = {
  en: {
    nav: ["Search", "Categories", "QC Guide", "FAQ"], eyebrow: "Independent product research workspace",
    heading: "QC Photo Finder", intro: "Paste a Weidian, Taobao or 1688 product link, or search by name. Match the seller and selected size before comparing warehouse photos.",
    link: "Product link", keyword: "Keyword", placeholder: "Paste a product link or search shoes, jersey, hoodie…", search: "Search now", helper: "Catalogue pages open in a new tab. If a link returns no photos, try the product name.", matchNote: "Several catalogue cards use this Weidian link. Choose the design that matches your order.",
    updated: "Research-first", free: "Free to browse", sources: "10 categories", catTitle: "Browse by category", catSub: "Go straight to the matching product collection.",
    freshTitle: "Fresh listings to inspect", freshSub: "Current product pages from the connected catalogue. Listing images are references—not QC approval.", open: "Open listing", listing: "Listing preview",
    method: "A better QC routine", methodSub: "The same three checks, every time. Fast enough for daily use; strict enough to catch obvious problems.",
    steps: [["01", "Match the listing", "Confirm the product link, colorway, size option and seller photos before comparing anything else."], ["02", "Inspect the evidence", "Zoom in on shape, seams, alignment, material texture, labels and any visible defects."], ["03", "Decide with context", "Compare more than one angle. Treat warehouse lighting and camera distortion as variables, not defects."]],
    guideCta: "Open the complete QC guide", faqTitle: "Questions worth asking", faqSub: "Clear answers, without pretending a photo can guarantee quality.",
    faqs: [["What is a QC photo?", "A quality-check photo is usually taken after an item reaches a warehouse. It helps you inspect the received item before the next shipping step."], ["Can photos prove authenticity?", "No. Photos can help identify visible inconsistencies and defects, but they cannot certify authenticity, materials or long-term durability."], ["What should I check first?", "Start with the selected size and color, then overall shape, symmetry, seams, logos, labels and visible damage. Use multiple angles whenever available."], ["Does FindQCs sell products?", "No. FindQCs is an independent research and navigation resource. Product pages open on the connected catalogue."]],
    footer: "Independent QC research and product discovery.",
  },
  de: {
    nav: ["Suche", "Kategorien", "QC-Ratgeber", "FAQ"], eyebrow: "Unabhängiger Arbeitsbereich zur Produktrecherche",
    heading: "QC-Fotos finden", intro: "Gib einen Produktlink von Weidian, Taobao oder 1688 ein oder suche nach dem Namen. Prüfe Anbieter und gewählte Größe, bevor du Lagerfotos vergleichst.",
    link: "Produktlink", keyword: "Suchbegriff", placeholder: "Produktlink einfügen oder Schuhe, Trikot, Hoodie suchen…", search: "Jetzt suchen", helper: "Katalogseiten öffnen sich in einem neuen Tab. Fehlen Fotos, suche nach dem Produktnamen.", matchNote: "Mehrere Katalogeinträge verwenden diesen Weidian-Link. Wähle das Design aus deiner Bestellung.",
    updated: "Recherche zuerst", free: "Kostenlos", sources: "10 Kategorien", catTitle: "Nach Kategorie suchen", catSub: "Direkt zur passenden Produktkollektion.",
    freshTitle: "Aktuelle Artikel zum Prüfen", freshSub: "Aktuelle Produktseiten aus dem verbundenen Katalog. Artikelbilder sind Referenzen – keine QC-Freigabe.", open: "Artikel öffnen", listing: "Artikelvorschau",
    method: "Eine bessere QC-Routine", methodSub: "Immer dieselben drei Prüfungen: schnell im Alltag und streng genug für offensichtliche Probleme.",
    steps: [["01", "Artikel abgleichen", "Produktlink, Farbe, Größe und Verkäuferfotos zuerst bestätigen."], ["02", "Belege prüfen", "Form, Nähte, Ausrichtung, Material, Etiketten und sichtbare Mängel vergrößern."], ["03", "Im Kontext entscheiden", "Mehrere Perspektiven vergleichen und Licht sowie Kameraverzerrung berücksichtigen."]],
    guideCta: "Vollständigen QC-Ratgeber öffnen", faqTitle: "Wichtige Fragen", faqSub: "Klare Antworten, ohne falsche Qualitätsversprechen.",
    faqs: [["Was ist ein QC-Foto?", "Ein Qualitätskontrollfoto wird meist nach Ankunft im Lager aufgenommen und zeigt den erhaltenen Artikel."], ["Beweisen Fotos die Echtheit?", "Nein. Sie zeigen sichtbare Abweichungen, bestätigen aber weder Echtheit noch Haltbarkeit."], ["Was sollte ich zuerst prüfen?", "Größe und Farbe, dann Form, Symmetrie, Nähte, Logos, Etiketten und Schäden."], ["Verkauft FindQCs Produkte?", "Nein. FindQCs ist eine unabhängige Recherche- und Navigationshilfe."]], footer: "Unabhängige QC-Recherche und Produktsuche.",
  },
  fr: {
    nav: ["Recherche", "Catégories", "Guide QC", "FAQ"], eyebrow: "Espace indépendant de recherche produit",
    heading: "Recherche de photos QC", intro: "Collez le lien d’un article Weidian, Taobao ou 1688 ou cherchez-le par son nom. Vérifiez le vendeur et la taille choisie avant de comparer les photos d’entrepôt.",
    link: "Lien produit", keyword: "Mot-clé", placeholder: "Collez un lien ou recherchez chaussures, maillot, hoodie…", search: "Rechercher", helper: "Les fiches du catalogue s’ouvrent dans un nouvel onglet. Si le lien ne donne aucune photo, essayez le nom de l’article.", matchNote: "Plusieurs fiches renvoient à ce lien Weidian. Choisissez le modèle de votre commande.",
    updated: "Recherche d’abord", free: "Accès gratuit", sources: "10 catégories", catTitle: "Explorer par catégorie", catSub: "Accédez directement à la collection correspondante.",
    freshTitle: "Fiches récentes à inspecter", freshSub: "Pages actuelles du catalogue connecté. Les images sont des références, pas une validation QC.", open: "Ouvrir la fiche", listing: "Aperçu de fiche",
    method: "Une meilleure routine QC", methodSub: "Toujours les trois mêmes contrôles : assez rapides au quotidien et assez stricts pour repérer les problèmes visibles.",
    steps: [["01", "Vérifier la fiche", "Confirmez le lien, la couleur, la taille et les photos du vendeur."], ["02", "Inspecter les preuves", "Zoomez sur la forme, les coutures, l’alignement, la matière, les étiquettes et les défauts."], ["03", "Décider avec contexte", "Comparez plusieurs angles et tenez compte de l’éclairage et de la distorsion de l’objectif."]],
    guideCta: "Ouvrir le guide QC complet", faqTitle: "Questions utiles", faqSub: "Des réponses claires, sans prétendre qu’une photo garantit la qualité.",
    faqs: [["Qu’est-ce qu’une photo QC ?", "Une photo de contrôle qualité est généralement prise à l’arrivée de l’article en entrepôt."], ["Les photos prouvent-elles l’authenticité ?", "Non. Elles révèlent certains écarts visibles mais ne certifient ni l’authenticité ni la durabilité."], ["Que vérifier en premier ?", "La taille et la couleur, puis la forme, la symétrie, les coutures, logos, étiquettes et dommages."], ["FindQCs vend-il des produits ?", "Non. FindQCs est une ressource indépendante de recherche et de navigation."]], footer: "Recherche QC et découverte produit indépendantes.",
  },
  es: {
    nav: ["Buscar", "Categorías", "Guía QC", "FAQ"], eyebrow: "Espacio independiente de investigación de productos",
    heading: "Buscador de fotos QC", intro: "Pega un enlace de Weidian, Taobao o 1688, o busca por nombre. Comprueba el vendedor y la talla elegida antes de comparar las fotos de almacén.",
    link: "Enlace del producto", keyword: "Palabra clave", placeholder: "Pega un enlace o busca zapatillas, camiseta, sudadera…", search: "Buscar ahora", helper: "Las fichas se abren en otra pestaña. Si el enlace no muestra fotos, prueba con el nombre del producto.", matchNote: "Varias fichas comparten este enlace de Weidian. Elige el diseño que pediste.",
    updated: "Primero investigar", free: "Acceso gratuito", sources: "10 categorías", catTitle: "Explorar por categoría", catSub: "Accede directamente a la colección correspondiente.",
    freshTitle: "Productos recientes para revisar", freshSub: "Páginas actuales del catálogo conectado. Las imágenes son referencias, no una aprobación QC.", open: "Abrir producto", listing: "Vista previa",
    method: "Una rutina QC mejor", methodSub: "Las mismas tres comprobaciones cada vez: rápidas para el uso diario y estrictas con los problemas visibles.",
    steps: [["01", "Comprueba el anuncio", "Confirma el enlace, color, talla y fotos del vendedor."], ["02", "Revisa la evidencia", "Amplía forma, costuras, alineación, textura, etiquetas y defectos visibles."], ["03", "Decide con contexto", "Compara varios ángulos y considera la luz del almacén y la distorsión de cámara."]],
    guideCta: "Abrir la guía QC completa", faqTitle: "Preguntas importantes", faqSub: "Respuestas claras, sin fingir que una foto garantiza la calidad.",
    faqs: [["¿Qué es una foto QC?", "Una foto de control de calidad suele tomarse cuando el artículo llega al almacén."], ["¿Las fotos prueban la autenticidad?", "No. Ayudan a detectar problemas visibles, pero no certifican autenticidad ni durabilidad."], ["¿Qué debo revisar primero?", "Talla y color, después forma, simetría, costuras, logotipos, etiquetas y daños."], ["¿FindQCs vende productos?", "No. FindQCs es un recurso independiente de investigación y navegación."]], footer: "Investigación QC y descubrimiento de productos independientes.",
  },
  it: {
    nav: ["Cerca", "Categorie", "Guida QC", "FAQ"], eyebrow: "Spazio indipendente per la ricerca dei prodotti",
    heading: "Cerca foto QC", intro: "Incolla il link di un articolo Weidian, Taobao o 1688 oppure cercalo per nome. Verifica il venditore e la taglia scelta prima di confrontare le foto di magazzino.",
    link: "Link prodotto", keyword: "Parola chiave", placeholder: "Incolla un link o cerca scarpe, maglia, felpa…", search: "Cerca ora", helper: "Le schede si aprono in una nuova scheda del browser. Se il link non restituisce foto, prova il nome del prodotto.", matchNote: "Più schede usano questo link Weidian. Scegli il modello che hai ordinato.",
    updated: "Prima la ricerca", free: "Accesso gratuito", sources: "10 categorie", catTitle: "Esplora per categoria", catSub: "Vai direttamente alla collezione corrispondente.",
    freshTitle: "Articoli recenti da controllare", freshSub: "Pagine attuali del catalogo collegato. Le immagini sono riferimenti, non un’approvazione QC.", open: "Apri articolo", listing: "Anteprima articolo",
    method: "Una routine QC migliore", methodSub: "Sempre gli stessi tre controlli: rapidi ogni giorno e rigorosi sui problemi visibili.",
    steps: [["01", "Verifica l’inserzione", "Conferma link, colore, taglia e foto del venditore."], ["02", "Controlla le prove", "Ingrandisci forma, cuciture, allineamento, materiale, etichette e difetti."], ["03", "Decidi con il contesto", "Confronta più angoli e considera luce del magazzino e distorsione della fotocamera."]],
    guideCta: "Apri la guida QC completa", faqTitle: "Domande utili", faqSub: "Risposte chiare, senza fingere che una foto garantisca la qualità.",
    faqs: [["Cos’è una foto QC?", "Una foto di controllo qualità viene solitamente scattata quando l’articolo arriva in magazzino."], ["Le foto provano l’autenticità?", "No. Aiutano a trovare problemi visibili, ma non certificano autenticità o durata."], ["Cosa controllo per primo?", "Taglia e colore, poi forma, simmetria, cuciture, loghi, etichette e danni."], ["FindQCs vende prodotti?", "No. FindQCs è una risorsa indipendente di ricerca e navigazione."]], footer: "Ricerca QC indipendente e scoperta prodotti.",
  },
} as const;

const categories = [
  ["Shoes", "Footwear shape & stitching", "shoes"], ["Hoodies", "Print, fabric & sizing", "hoodies-sweaters"], ["T-Shirts", "Print placement & seams", "t-shirts"], ["Jackets", "Panels, hardware & fill", "jackets"],
  ["Pants", "Cut, length & construction", "pants-shorts"], ["Headwear", "Shape, patches & embroidery", "headwear"], ["Accessories", "Finish, hardware & details", "accessories"], ["Jerseys", "Badges, print & alignment", "Jersey"],
];

const extra = {
  en:{connected:"Catalogue connected",languages:"Interface languages",account:"Account required",popular:"Popular",reading:"Reading room",readingTitle:"Learn what photos can—and cannot—prove.",fullTitle:"How to read QC photos before you buy",fullDesc:"A complete inspection sequence for shape, stitching, measurements, color and visible defects.",read:"Read the guide",light:"Match QC photos to a product link",size:"Size charts and measurement photos",open:"Open",all:"View all questions",independent:"Independent",railNote:"Product research before purchase.",index:"QC research index",inspect:"Inspect",directory:"Directory",current:"Current index",method:"Field method",reference:"Reference",item:"Item",type:"Type",price:"Price",action:"Action",productType:"Jersey",menu:"Menu"},
  de:{connected:"Katalog verbunden",languages:"Sprachen",account:"Konto erforderlich",popular:"Beliebt",reading:"Leseraum",readingTitle:"Was Fotos zeigen können – und was nicht.",fullTitle:"QC-Fotos vor dem Kauf richtig lesen",fullDesc:"Eine vollständige Prüfreihenfolge für Form, Nähte, Maße, Farbe und sichtbare Mängel.",read:"Ratgeber lesen",light:"QC-Fotos einem Produktlink zuordnen",size:"Größentabellen und Messfotos",open:"Öffnen",all:"Alle Fragen anzeigen",independent:"Unabhängig",railNote:"Produktrecherche vor dem Kauf.",index:"QC-Rechercheindex",inspect:"Prüfen",directory:"Verzeichnis",current:"Aktueller Index",method:"Prüfmethode",reference:"Referenz",item:"Artikel",type:"Typ",price:"Preis",action:"Aktion",productType:"Trikot",menu:"Menü"},
  fr:{connected:"Catalogue connecté",languages:"Langues",account:"Compte requis",popular:"Populaire",reading:"Bibliothèque",readingTitle:"Ce que les photos peuvent prouver — et leurs limites.",fullTitle:"Bien lire les photos QC avant l’achat",fullDesc:"Une méthode complète pour la forme, les coutures, les mesures, la couleur et les défauts visibles.",read:"Lire le guide",light:"Associer les photos QC au lien produit",size:"Tailles et photos de mesure",open:"Ouvrir",all:"Voir toutes les questions",independent:"Indépendant",railNote:"Recherche produit avant achat.",index:"Index de recherche QC",inspect:"Inspecter",directory:"Répertoire",current:"Index actuel",method:"Méthode terrain",reference:"Référence",item:"Article",type:"Type",price:"Prix",action:"Action",productType:"Maillot",menu:"Menu"},
  es:{connected:"Catálogo conectado",languages:"Idiomas",account:"Cuenta necesaria",popular:"Popular",reading:"Sala de lectura",readingTitle:"Lo que las fotos pueden demostrar y lo que no.",fullTitle:"Cómo leer fotos QC antes de comprar",fullDesc:"Una secuencia completa para revisar forma, costuras, medidas, color y defectos visibles.",read:"Leer la guía",light:"Relacionar fotos QC con el enlace",size:"Tallas y fotos de medidas",open:"Abrir",all:"Ver todas las preguntas",independent:"Independiente",railNote:"Investigación antes de comprar.",index:"Índice de investigación QC",inspect:"Revisar",directory:"Directorio",current:"Índice actual",method:"Método de campo",reference:"Referencia",item:"Artículo",type:"Tipo",price:"Precio",action:"Acción",productType:"Camiseta",menu:"Menú"},
  it:{connected:"Catalogo collegato",languages:"Lingue",account:"Account richiesto",popular:"Popolare",reading:"Sala lettura",readingTitle:"Cosa possono dimostrare le foto — e cosa no.",fullTitle:"Come leggere le foto QC prima dell’acquisto",fullDesc:"Una sequenza completa per forma, cuciture, misure, colore e difetti visibili.",read:"Leggi la guida",light:"Associare le foto QC al link prodotto",size:"Taglie e foto delle misure",open:"Apri",all:"Vedi tutte le domande",independent:"Indipendente",railNote:"Ricerca prodotto prima dell’acquisto.",index:"Indice di ricerca QC",inspect:"Controlla",directory:"Elenco",current:"Indice attuale",method:"Metodo pratico",reference:"Riferimento",item:"Articolo",type:"Tipo",price:"Prezzo",action:"Azione",productType:"Maglia",menu:"Menu"},
} as const;

const categoryText: Record<Lang, readonly (readonly [string, string])[]> = {
  en: categories.map(([name, note]) => [name, note]),
  de: [["Schuhe","Form und Nähte"],["Hoodies","Druck, Stoff und Größe"],["T-Shirts","Druckposition und Nähte"],["Jacken","Elemente, Beschläge und Füllung"],["Hosen","Schnitt, Länge und Verarbeitung"],["Kopfbedeckung","Form, Aufnäher und Stickerei"],["Accessoires","Finish, Beschläge und Details"],["Trikots","Abzeichen, Druck und Ausrichtung"]],
  fr: [["Chaussures","Forme et coutures"],["Hoodies","Impression, tissu et taille"],["T-shirts","Placement et coutures"],["Vestes","Panneaux, finitions et rembourrage"],["Pantalons","Coupe, longueur et construction"],["Couvre-chefs","Forme, écussons et broderie"],["Accessoires","Finition et détails"],["Maillots","Badges, impression et alignement"]],
  es: [["Zapatillas","Forma y costuras"],["Sudaderas","Estampado, tejido y talla"],["Camisetas","Posición del estampado y costuras"],["Chaquetas","Paneles, herrajes y relleno"],["Pantalones","Corte, largo y confección"],["Gorras","Forma, parches y bordado"],["Accesorios","Acabado, herrajes y detalles"],["Camisetas deportivas","Escudos, estampado y alineación"]],
  it: [["Scarpe","Forma e cuciture"],["Felpe","Stampa, tessuto e taglia"],["T-shirt","Posizione stampa e cuciture"],["Giacche","Pannelli, finiture e imbottitura"],["Pantaloni","Taglio, lunghezza e costruzione"],["Copricapi","Forma, patch e ricamo"],["Accessori","Finitura e dettagli"],["Maglie","Stemmi, stampa e allineamento"]],
};

const articleLabel: Record<Lang, string> = { en:"QC Articles", de:"QC-Artikel", fr:"Articles QC", es:"Artículos QC", it:"Articoli QC" };
const footerLabels: Record<Lang, readonly [string,string]> = {en:["Privacy","Disclaimer"],de:["Datenschutz","Hinweise"],fr:["Confidentialité","Avertissement"],es:["Privacidad","Aviso"],it:["Privacy","Avvertenze"]};
const popularTerms: Record<Lang, readonly string[]> = {en:["sneakers","jersey","hoodie","jacket"],de:["Sneaker","Trikot","Hoodie","Jacke"],fr:["baskets","maillot","hoodie","veste"],es:["zapatillas","camiseta","sudadera","chaqueta"],it:["sneaker","maglia","felpa","giacca"]};

const products = [
  { name: "Jersey 60", id: 6667, weidianId: "7632511460", price: "$13.80", image: "https://www.cnfanssp.com/uploads/allimg/20260430/1-26043021142K50.jpg" },
  { name: "Jersey 59", id: 6666, weidianId: "7632511460", price: "$13.80", image: "https://www.cnfanssp.com/uploads/allimg/20260430/1-260430211425539.jpg" },
  { name: "Jersey 58", id: 6665, weidianId: "7632511460", price: "$13.80", image: "https://www.cnfanssp.com/uploads/allimg/20260430/1-260430211423422.jpg" },
  { name: "Jersey 57", id: 6664, weidianId: "7632511460", price: "$13.80", image: "https://www.cnfanssp.com/uploads/allimg/20260430/1-2604302114224a.jpg" },
  { name: "Jersey 56", id: 6663, weidianId: "7632591132", price: "$25.10", image: "https://www.cnfanssp.com/uploads/allimg/20260430/1-260430211421Z1.jpg" },
  { name: "Jersey 55", id: 6662, weidianId: "7632591132", price: "$25.10", image: "https://www.cnfanssp.com/uploads/allimg/20260430/1-260430211420242.jpg" },
];

export default function Home() {
  const lang = useLanguage();
  const [mode, setMode] = useState<"link" | "keyword">("link");
  const [query, setQuery] = useState("");
  const [submittedLink, setSubmittedLink] = useState("");
  const matches = products.filter(item => item.weidianId === submittedLink);
  const t = copy[lang];
  const x = extra[lang];

  function changeLang(next: Lang) { changeLanguage(next); }
  function submit(e: FormEvent) {
    e.preventDefault();
    const value = query.trim();
    const listing = mode === "link" ? identifyListing(value) : undefined;
    const sourceId = listing?.sourceId;
    const hasMatches = sourceId && products.some(item => item.weidianId === sourceId);
    const result = hasMatches ? "matching_cards" : listing?.catalogueUrl ? "catalogue_item" : "catalogue_search";
    trackEvent("catalogue_search", { search_mode: mode, query_present: value ? 1 : 0, search_outcome: result, page_language: lang });
    setSubmittedLink(hasMatches ? sourceId : "");
    if (hasMatches) return;
    const url = new URL(listing?.catalogueUrl || catalogueSearch(value));
    trackCatalogueOpen(url, listing?.catalogueUrl ? "product" : value ? "search" : "category");
    window.open(url.href, "_blank", "noopener,noreferrer");
  }

  const websiteSchema = { "@context":"https://schema.org", "@type":"WebSite", "@id":"https://findqcs.net/#website", url:"https://findqcs.net/", name:"FindQCs", description:"An independent QC finder and QC photo guide for product research, measurements and visible-detail inspection." };
  const organizationSchema = { "@context":"https://schema.org", "@type":"Organization", "@id":"https://findqcs.net/#organization", url:"https://findqcs.net/", name:"FindQCs", logo:{"@type":"ImageObject",url:"https://findqcs.net/findqc-logo.png",width:128,height:128} };

  return (
    <LocalizedContent><main className="workbench-site">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(websiteSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}} />
      <header className="workbench-header frame">
        <a className="workbench-brand brand-icon-only" href="#top" aria-label="FindQCs home"><img src="/findqc-logo.png" alt="FindQCs" width="128" height="128"/></a>
        <nav aria-label="Primary navigation"><a href="#finder">{t.nav[0]}</a><Link href="/categories/">{t.nav[1]}</Link><Link href="/articles/">{articleLabel[lang]}</Link><Link href="/guides/qc-photo-checklist/">{t.nav[2]}</Link><Link href="/faq/">{t.nav[3]}</Link></nav>
        <details className="mobile-menu"><summary aria-label="Open navigation">{x.menu}</summary><div><a href="#finder">{t.nav[0]}</a><Link href="/categories/">{t.nav[1]}</Link><Link href="/articles/">{articleLabel[lang]}</Link><Link href="/guides/qc-photo-checklist/">{t.nav[2]}</Link><Link href="/faq/">{t.nav[3]}</Link></div></details>
        <label className="workbench-language"><span>LANG</span><select value={lang} onChange={(e) => changeLang(e.target.value as Lang)} aria-label="Language"><option value="en">English</option><option value="de">Deutsch</option><option value="fr">Français</option><option value="es">Español</option><option value="it">Italiano</option></select></label>
      </header>

      <section id="top" className="command-area frame">
        <div className="command-copy"><span>{t.eyebrow}</span><h1>{t.heading}</h1><p>{t.intro}</p></div>
        <div id="finder" className="command-search">
          <div className="command-tabs"><button type="button" className={mode==="link"?"active":""} onClick={()=>{setMode("link");setSubmittedLink("");}}>{t.link}</button><button type="button" className={mode==="keyword"?"active":""} onClick={()=>{setMode("keyword");setSubmittedLink("");}}>{t.keyword}</button></div>
          <form onSubmit={submit}><b aria-hidden="true">⌕</b><input value={query} onChange={(e)=>{setQuery(e.target.value);setSubmittedLink("");}} placeholder={t.placeholder} aria-label={t.placeholder}/><button type="submit">{t.search}<span>↗</span></button></form>
          <div aria-live="polite">
            {matches.length > 0 && <div className="finder-matches">
              <p>{t.matchNote}</p>
              <ul>{matches.map(item => <li key={item.id}><a href={`https://cnfanssp.com/AllProducts/${item.id}.html`} target="_blank" rel="noopener noreferrer">{item.name} ↗</a></li>)}</ul>
            </div>}
          </div>
          <div className="quick-terms"><span>{x.popular}</span>{popularTerms[lang].map((item,index)=><button type="button" key={item} onClick={()=>{setMode("keyword");setSubmittedLink("");setQuery(["sneakers","jersey","hoodie","jacket"][index]);}}>{item}</button>)}<small>{t.helper}</small></div>
          <div className="finder-help"><Link href="/guides/warehouse-lighting/">How to find QC photos from a product link</Link></div>
        </div>
      </section>

      <section id="categories" className="category-filter frame"><span>{x.directory}</span><div>{categories.map(([, ,slug],index)=><a key={slug} href={`https://cnfanssp.com/${slug}/`} target="_blank" rel="noopener noreferrer"><i>0{index+1}</i>{categoryText[lang][index][0]}<b>↗</b></a>)}</div></section>

      <section className="catalog-frame frame">
        <aside className="qc-sidebar">
          <div className="sidebar-status"><span>● {x.connected}</span><b>{t.updated}</b><small>{t.free}</small></div>
          <div className="sidebar-title"><span>QC / 03</span><h2>{t.method}</h2><p>{t.methodSub}</p></div>
          <div className="sidebar-checks">{t.steps.map(([num,title,body])=><article key={num}><span>{num}</span><div><b>{title}</b><p>{body}</p></div></article>)}</div>
          <Link className="sidebar-cta" href="/guides/qc-photo-checklist/">{t.guideCta}<span>↗</span></Link>
          <div className="sidebar-stats"><div><b>10</b><span>{t.sources}</span></div><div><b>05</b><span>{x.languages}</span></div><div><b>0</b><span>{x.account}</span></div></div>
        </aside>

        <div className="catalog-results">
          <div className="results-head"><div><span>06 · {x.current}</span><h2>{t.freshTitle}</h2><p>{t.freshSub}</p></div><strong>6 <small>{x.item}</small></strong></div>
          <div className="work-product-grid">{products.map((product,index)=><a key={product.id} href={`https://cnfanssp.com/AllProducts/${product.id}.html`} target="_blank" rel="noopener noreferrer"><div className="work-photo"><img src={product.image} alt={`${product.name} ${t.listing}`} loading="lazy" decoding="async" width="800" height="800"/><span>0{index+1}</span><i>{x.inspect}</i></div><div className="work-product-meta"><span><small>ID · {product.id}</small><b>{product.name}</b></span><strong>{product.price}</strong></div><div className="work-product-action"><span>{x.productType}</span><b>{t.open} ↗</b></div></a>)}</div>
        </div>
      </section>

      <section className="knowledge-zone">
          <div className="frame knowledge-grid"><div className="knowledge-intro"><span>{articleLabel[lang]}</span><h2>{x.readingTitle}</h2><Link href="/articles/">{x.read} ↗</Link></div><Link href="/guides/qc-photo-checklist/" className="knowledge-feature"><span>12 MIN</span><h3>{x.fullTitle}</h3><p>{x.fullDesc}</p><b>{x.open} ↗</b></Link><div className="knowledge-stack"><Link href="/articles/football-shirt-qc-checklist/"><b>Football shirt QC checklist</b><i>↗</i></Link><Link href="/articles/qc-photo-shoe-weight-with-box/"><b>Does the QC weight include the shoe box?</b><i>↗</i></Link><Link href="/articles/no-qc-photos-found/"><span>12 MIN</span><b>No QC photos found? Check the link</b><i>↗</i></Link><Link href="/articles/qc-photo-lighting-color-difference/"><span>13 MIN</span><b>Lighting or product color difference?</b><i>↗</i></Link><Link href="/articles/sneaker-qc-photo-checklist/"><span>13 MIN</span><b>Sneaker QC photo checklist</b><i>↗</i></Link><Link href="/articles/seller-photos-vs-warehouse-qc/"><span>13 MIN</span><b>Seller photos vs warehouse QC photos</b><i>↗</i></Link></div></div>
      </section>

      <section id="faq" className="work-faq frame"><div className="work-faq-intro"><span>FAQ / 04</span><h2>{t.faqTitle}</h2><p>{t.faqSub}</p><Link href="/faq/">{x.all} ↗</Link></div><div className="work-faq-list">{t.faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>

      <footer className="workbench-footer frame"><a className="workbench-brand" href="#top"><img src="/findqc-logo.png" alt="FindQCs" width="128" height="128"/><span><b>FindQCs</b><small>{t.footer}</small></span></a><nav><Link href="/articles/">{articleLabel[lang]}</Link><Link href="/privacy/">{footerLabels[lang][0]}</Link><Link href="/disclaimer/">{footerLabels[lang][1]}</Link></nav><LanguageLinks/></footer>
    </main></LocalizedContent>
  );
}
