import type { CategoryKey, Lang, TrustPageKey } from "./site-data";

type SupportPage = {
  kicker: string;
  title: string;
  description: string;
  sections: { heading: string; body: string }[];
};

const categoryNames: Record<Lang, Record<CategoryKey, string>> = {
  en: { shoes: "Shoes", hoodies: "Hoodies and sweatshirts", "t-shirts": "T-shirts", jackets: "Jackets", pants: "Pants and shorts", accessories: "Accessories" },
  de: { shoes: "Schuhe", hoodies: "Hoodies und Sweatshirts", "t-shirts": "T-Shirts", jackets: "Jacken", pants: "Hosen und Shorts", accessories: "Accessoires" },
  es: { shoes: "Zapatillas", hoodies: "Sudaderas", "t-shirts": "Camisetas", jackets: "Chaquetas", pants: "Pantalones y shorts", accessories: "Accesorios" },
  fr: { shoes: "Chaussures", hoodies: "Sweats et hoodies", "t-shirts": "T-shirts", jackets: "Vestes", pants: "Pantalons et shorts", accessories: "Accessoires" },
  it: { shoes: "Scarpe", hoodies: "Felpe e hoodie", "t-shirts": "T-shirt", jackets: "Giacche", pants: "Pantaloni e shorts", accessories: "Accessori" },
};

const categoryTemplates: Record<Lang, (name: string) => SupportPage> = {
  en: (name) => ({
    kicker: "JOYAGOO PRODUCT CATEGORY",
    title: `Verified Joyagoo ${name} product links`,
    description: `A practical ${name.toLowerCase()} discovery route: browse the live category, compare the current listing, and record the evidence you need before ordering through Joyagoo.`,
    sections: [
      { heading: "Start from the live category", body: "The category button opens the matching section of the main product index. Treat that page as a changing catalogue, not a frozen spreadsheet. Stock, options, seller pages and prices can move, so the live detail page is the final discovery record." },
      { heading: "Match image, title and option", body: "A usable find should connect the visible product image with the exact detail page and selected option. Check the category, colour, size label, quantity and seller notes together. A similar thumbnail is not enough when the target page or variant differs." },
      { heading: "Write category-specific QC notes", body: `${name} need their own evidence checklist. Record the measurements, surfaces, fasteners, symmetry, accessories or packaging that could change a keep-or-return decision. Ask for an extra photo only when it resolves a specific uncertainty.` },
      { heading: "Recheck before payment", body: "The published Joyagoo workflow supports product-link and name or photo search, but it does not guarantee a third-party listing. Reopen the live page immediately before payment and check the current variant, domestic delivery, return eligibility and any shipping restriction." },
    ],
  }),
  de: (name) => ({
    kicker: "JOYAGOO PRODUKTKATEGORIE",
    title: `Geprüfte Joyagoo-Produktlinks für ${name}`,
    description: `Eine praktische Route für ${name}: Live-Kategorie öffnen, aktuelles Angebot vergleichen und Belege vor der Joyagoo-Bestellung sichern.`,
    sections: [
      { heading: "Mit der Live-Kategorie beginnen", body: "Der Kategorie-Button öffnet den passenden Bereich des Hauptindex. Diese Seite ist ein veränderlicher Katalog, keine eingefrorene Tabelle. Bestand, Optionen, Verkäuferseite und Preis müssen auf der aktuellen Detailseite geprüft werden." },
      { heading: "Bild, Titel und Option abgleichen", body: "Ein brauchbarer Fund verbindet das sichtbare Produktbild mit der exakten Detailseite und Variante. Prüfe Kategorie, Farbe, Größe, Menge und Verkäuferhinweise zusammen; ein ähnliches Vorschaubild reicht nicht." },
      { heading: "Kategoriebezogene QC-Notizen", body: `Für ${name} sollte feststehen, welche Maße, Oberflächen, Verschlüsse, Symmetrie, Teile oder Verpackungen die Entscheidung ändern. Zusätzliche Fotos sind dann sinnvoll, wenn sie eine konkrete Unsicherheit klären.` },
      { heading: "Vor der Zahlung erneut prüfen", body: "Joyagoo unterstützt die Suche per Link, Name oder Foto, garantiert aber kein Angebot eines Drittverkäufers. Prüfe unmittelbar vor der Zahlung Variante, Inlandsversand, Rückgabefähigkeit und Versandbeschränkung." },
    ],
  }),
  es: (name) => ({
    kicker: "CATEGORÍA DE PRODUCTOS JOYAGOO",
    title: `Enlaces verificados de ${name} para Joyagoo`,
    description: `Una ruta práctica para descubrir ${name.toLowerCase()}: abre la categoría activa, compara el anuncio y guarda las pruebas antes de pedir con Joyagoo.`,
    sections: [
      { heading: "Empieza por la categoría activa", body: "El botón abre la sección correspondiente del índice principal. Es un catálogo cambiante, no una hoja congelada. Existencias, opciones, vendedor y precio deben comprobarse en la página de detalle actual." },
      { heading: "Compara imagen, título y opción", body: "Un hallazgo útil conecta la imagen visible con la página y la variante exactas. Revisa categoría, color, talla, cantidad y notas del vendedor; una miniatura parecida no basta." },
      { heading: "Anota el QC de la categoría", body: `Para ${name} define qué medidas, superficies, cierres, simetría, piezas o embalaje cambiarían tu decisión. Pide una foto adicional solo si resuelve una duda concreta.` },
      { heading: "Comprueba otra vez antes de pagar", body: "Joyagoo admite búsqueda por enlace, nombre o foto, pero no garantiza el anuncio de un tercero. Revisa variante, envío nacional, devolución y restricciones justo antes del pago." },
    ],
  }),
  fr: (name) => ({
    kicker: "CATÉGORIE PRODUITS JOYAGOO",
    title: `Liens Joyagoo vérifiés pour ${name}`,
    description: `Un parcours pratique pour découvrir les ${name.toLowerCase()} : ouvrez la catégorie active, comparez l’annonce et conservez les preuves avant de commander via Joyagoo.`,
    sections: [
      { heading: "Commencer par la catégorie active", body: "Le bouton ouvre la bonne section de l’index principal. Il s’agit d’un catalogue évolutif, pas d’un tableur figé. Stock, options, vendeur et prix doivent être vérifiés sur la fiche actuelle." },
      { heading: "Comparer image, titre et option", body: "Une sélection utile relie l’image visible à la fiche et à la variante exactes. Vérifiez catégorie, couleur, taille, quantité et notes du vendeur ; une vignette similaire ne suffit pas." },
      { heading: "Préparer les notes QC de la catégorie", body: `Pour ${name}, définissez les mesures, surfaces, fermetures, symétrie, pièces ou emballages qui changeraient la décision. Demandez une photo seulement si elle résout une incertitude précise.` },
      { heading: "Revérifier avant paiement", body: "Joyagoo accepte la recherche par lien, nom ou photo, mais ne garantit pas l’annonce d’un vendeur tiers. Contrôlez variante, livraison locale, retour et restrictions juste avant de payer." },
    ],
  }),
  it: (name) => ({
    kicker: "CATEGORIA PRODOTTI JOYAGOO",
    title: `Link Joyagoo verificati per ${name}`,
    description: `Un percorso pratico per trovare ${name.toLowerCase()}: apri la categoria attiva, confronta l’inserzione e salva le prove prima di ordinare con Joyagoo.`,
    sections: [
      { heading: "Parti dalla categoria attiva", body: "Il pulsante apre la sezione corretta dell’indice principale. È un catalogo che cambia, non un foglio congelato. Disponibilità, opzioni, venditore e prezzo vanno verificati sulla scheda attuale." },
      { heading: "Confronta immagine, titolo e opzione", body: "Una selezione utile collega l’immagine visibile alla pagina e alla variante esatte. Controlla categoria, colore, taglia, quantità e note del venditore; una miniatura simile non basta." },
      { heading: "Prepara note QC per la categoria", body: `Per ${name} definisci misure, superfici, chiusure, simmetria, parti o imballaggi che cambiano la scelta. Chiedi una foto aggiuntiva solo se risolve un dubbio preciso.` },
      { heading: "Ricontrolla prima del pagamento", body: "Joyagoo consente ricerca per link, nome o foto, ma non garantisce l’inserzione di terzi. Controlla variante, consegna nazionale, reso e restrizioni subito prima di pagare." },
    ],
  }),
};

export function getCategoryPage(lang: Lang, key: CategoryKey): SupportPage {
  return categoryTemplates[lang](categoryNames[lang][key]);
}

const trustPages: Record<Lang, Record<TrustPageKey, SupportPage>> = {
  en: {
    about: { kicker: "ABOUT JOYAGOOS", title: "An independent Joyagoo product research index", description: "Joyagoos helps buyers discover product categories, verify destination links and prepare better questions before using Joyagoo.", sections: [
      { heading: "What this site does", body: "We organize discovery routes, exact sample links and buyer checklists. Product and platform facts are separated from editorial judgment so a changing listing is never presented as a permanent guarantee." },
      { heading: "What this site is not", body: "Joyagoos is not Joyagoo, a seller, a carrier or a customs adviser. We do not control stock, price, seller dispatch, warehouse decisions, shipping lines or destination charges." },
      { heading: "Where links lead", body: "Product, category, search and primary action links lead to the associated main product index. Official documentation appears only as clearly labelled research sources." },
    ] },
    "editorial-policy": { kicker: "EDITORIAL POLICY", title: "How Joyagoos writes and updates product research", description: "Our editorial rules for source checking, corrections, product-link verification and independent buyer guidance.", sections: [
      { heading: "Use first-party facts for platform rules", body: "Claims about ordering, QC, return windows, storage, packing and shipping begin with current Joyagoo pages. We state uncertainty when two official pages conflict or when a rule depends on seller, item, route or destination." },
      { heading: "Keep observation separate from fact", body: "A matching first image, a working destination URL or a visible option is an observation made at a specific time. Buyer advice is labelled as a decision method, not a platform promise." },
      { heading: "Correct rather than conceal", body: "If a source changes, a link dies or a product mapping is wrong, we update the page and its checked date. Material changes receive a new modified date; unrelated deployments do not refresh every sitemap entry." },
    ] },
    "how-we-verify-links": { kicker: "LINK VERIFICATION", title: "How we verify Joyagoo product links", description: "The repeatable checks used before a product appears as a verified sample on Joyagoos.", sections: [
      { heading: "Resolve the final destination", body: "We open the saved URL, follow permitted redirects and require a usable destination rather than an error, parked page or unrelated category." },
      { heading: "Match the visible product", body: "We compare the first visible image, product type and detail-page context. A working URL is not marked verified when it lands on a different item." },
      { heading: "Record scope and date", body: "Verification covers the link and visible mapping at the checked time. It does not certify authenticity, seller performance, stock, price, size accuracy, return eligibility or future route availability." },
      { heading: "Retest and replace", body: "Dead or mismatched links are removed from verified samples and replaced only after the same checks pass. Category and search links remain discovery routes rather than product guarantees." },
    ] },
  },
  de: {
    about: { kicker: "ÜBER JOYAGOOS", title: "Unabhängiger Joyagoo-Index für Produktrecherche", description: "Joyagoos hilft bei Kategorien, Zielseiten und besseren Prüffragen vor der Nutzung von Joyagoo.", sections: [{heading:"Aufgabe",body:"Wir ordnen Suchwege, exakte Beispiellinks und Käufer-Checklisten. Plattformfakten und redaktionelle Einschätzung bleiben getrennt."},{heading:"Unabhängigkeit",body:"Joyagoos ist weder Joyagoo noch Verkäufer, Transporteur oder Zollberater und kontrolliert keine Preise, Bestände oder Routen."},{heading:"Linkziele",body:"Produkt-, Kategorie-, Such- und Hauptaktionen führen zum zugehörigen Hauptindex. Offizielle Dokumente erscheinen nur als gekennzeichnete Quellen."}] },
    "editorial-policy": { kicker: "REDAKTIONSRICHTLINIE", title: "Wie Joyagoos Produktrecherche erstellt", description: "Regeln für Quellen, Korrekturen, Linkprüfung und unabhängige Käuferhinweise.", sections: [{heading:"Primärquellen",body:"Regeln zu Kauf, QC, Rückgabe, Lager und Versand beginnen bei aktuellen Joyagoo-Seiten; Abhängigkeiten und Widersprüche werden genannt."},{heading:"Beobachtung und Fakt",body:"Bildabgleich oder funktionierender Link ist eine zeitgebundene Beobachtung, keine Garantie für Verkäufer oder Produkt."},{heading:"Korrekturen",body:"Geänderte Quellen und fehlerhafte Links werden korrigiert. Nur echte Inhaltsänderungen erhalten ein neues Änderungsdatum."}] },
    "how-we-verify-links": { kicker: "LINKPRÜFUNG", title: "So prüfen wir Joyagoo-Produktlinks", description: "Wiederholbare Prüfungen vor der Aufnahme eines verifizierten Beispiels.", sections: [{heading:"Ziel auflösen",body:"Die gespeicherte URL muss eine nutzbare Detailseite erreichen, keine Fehler- oder Parkseite."},{heading:"Produkt abgleichen",body:"Erstes Bild, Produkttyp und Seitenkontext müssen zusammenpassen."},{heading:"Umfang festhalten",body:"Die Prüfung gilt für Link und sichtbare Zuordnung zum Prüfzeitpunkt, nicht für Echtheit, Bestand, Preis oder Versand."},{heading:"Erneut prüfen",body:"Tote oder falsche Links verlieren den verifizierten Status und werden nur nach erneuter Prüfung ersetzt."}] },
  },
  es: {
    about: { kicker: "SOBRE JOYAGOOS", title: "Índice independiente de investigación de productos Joyagoo", description: "Joyagoos ayuda a descubrir categorías, comprobar destinos y preparar preguntas antes de usar Joyagoo.", sections: [{heading:"Qué hacemos",body:"Organizamos rutas, muestras exactas y listas de comprobación, separando hechos de plataforma y criterio editorial."},{heading:"Independencia",body:"Joyagoos no es Joyagoo, vendedor, transportista ni asesor de aduanas y no controla precios, stock o rutas."},{heading:"Destino de los enlaces",body:"Productos, categorías, búsqueda y acciones principales llevan al índice asociado; la documentación oficial aparece como fuente identificada."}] },
    "editorial-policy": { kicker: "POLÍTICA EDITORIAL", title: "Cómo escribe y actualiza Joyagoos", description: "Reglas sobre fuentes, correcciones, verificación de enlaces y orientación independiente.", sections: [{heading:"Fuentes primarias",body:"Las reglas de compra, QC, devolución, almacén y envío parten de páginas actuales de Joyagoo; se indican condiciones y conflictos."},{heading:"Observación y hecho",body:"Una imagen coincidente o un enlace activo es una observación con fecha, no una promesa sobre el vendedor."},{heading:"Correcciones",body:"Corregimos fuentes y enlaces; solo un cambio real de contenido actualiza la fecha del Sitemap."}] },
    "how-we-verify-links": { kicker: "VERIFICACIÓN DE ENLACES", title: "Cómo verificamos enlaces de productos Joyagoo", description: "Comprobaciones repetibles antes de mostrar una muestra verificada.", sections: [{heading:"Resolver el destino",body:"La URL debe llegar a una página útil, no a un error, aparcamiento o categoría no relacionada."},{heading:"Comparar el producto",body:"Primera imagen, tipo de producto y contexto de la ficha deben coincidir."},{heading:"Registrar alcance",body:"La comprobación cubre enlace y relación visible en esa fecha, no autenticidad, stock, precio o envío."},{heading:"Volver a probar",body:"Los enlaces muertos o incorrectos pierden la etiqueta y solo se sustituyen tras superar las mismas pruebas."}] },
  },
  fr: {
    about: { kicker: "À PROPOS DE JOYAGOOS", title: "Index indépendant de recherche produits Joyagoo", description: "Joyagoos aide à trouver des catégories, vérifier les destinations et préparer les contrôles avant Joyagoo.", sections: [{heading:"Notre rôle",body:"Nous organisons parcours, exemples exacts et listes de contrôle, en séparant faits de plateforme et jugement éditorial."},{heading:"Indépendance",body:"Joyagoos n’est ni Joyagoo, ni vendeur, transporteur ou conseiller douanier et ne contrôle pas prix, stock ou lignes."},{heading:"Destination des liens",body:"Produits, catégories, recherche et actions principales mènent à l’index associé ; la documentation officielle reste une source identifiée."}] },
    "editorial-policy": { kicker: "POLITIQUE ÉDITORIALE", title: "Comment Joyagoos rédige et actualise ses recherches", description: "Règles de sources, correction, vérification des liens et conseil indépendant.", sections: [{heading:"Sources primaires",body:"Les règles d’achat, QC, retour, entrepôt et livraison partent des pages Joyagoo actuelles ; conditions et contradictions sont signalées."},{heading:"Observation et fait",body:"Une image correspondante ou un lien actif est une observation datée, pas une garantie vendeur."},{heading:"Corrections",body:"Nous corrigeons sources et liens ; seule une modification réelle actualise la date du Sitemap."}] },
    "how-we-verify-links": { kicker: "VÉRIFICATION DES LIENS", title: "Comment nous vérifions les liens produits Joyagoo", description: "Contrôles reproductibles avant d’afficher un exemple vérifié.", sections: [{heading:"Résoudre la destination",body:"L’URL doit atteindre une fiche utilisable, pas une erreur, une page garée ou une catégorie sans rapport."},{heading:"Faire correspondre le produit",body:"Première image, type et contexte de la fiche doivent correspondre."},{heading:"Noter la portée",body:"La vérification couvre le lien et l’association visible à la date donnée, pas authenticité, stock, prix ou livraison."},{heading:"Retester",body:"Les liens morts ou erronés perdent leur statut et ne sont remplacés qu’après les mêmes contrôles."}] },
  },
  it: {
    about: { kicker: "CHI È JOYAGOOS", title: "Indice indipendente di ricerca prodotti Joyagoo", description: "Joyagoos aiuta a scoprire categorie, verificare destinazioni e preparare controlli prima di usare Joyagoo.", sections: [{heading:"Cosa facciamo",body:"Organizziamo percorsi, esempi esatti e checklist, separando fatti della piattaforma e giudizio editoriale."},{heading:"Indipendenza",body:"Joyagoos non è Joyagoo, venditore, corriere o consulente doganale e non controlla prezzo, stock o rotte."},{heading:"Dove portano i link",body:"Prodotti, categorie, ricerca e azioni principali portano all’indice associato; i documenti ufficiali restano fonti identificate."}] },
    "editorial-policy": { kicker: "POLITICA EDITORIALE", title: "Come Joyagoos scrive e aggiorna la ricerca", description: "Regole su fonti, correzioni, verifica dei link e guida indipendente.", sections: [{heading:"Fonti primarie",body:"Regole su acquisto, QC, reso, magazzino e spedizione partono dalle pagine Joyagoo attuali; condizioni e conflitti sono indicati."},{heading:"Osservazione e fatto",body:"Immagine corrispondente o link attivo è un’osservazione datata, non una promessa sul venditore."},{heading:"Correzioni",body:"Correggiamo fonti e link; solo una modifica reale aggiorna la data della Sitemap."}] },
    "how-we-verify-links": { kicker: "VERIFICA DEI LINK", title: "Come verifichiamo i link prodotto Joyagoo", description: "Controlli ripetibili prima di mostrare un esempio verificato.", sections: [{heading:"Risolvere la destinazione",body:"L’URL deve arrivare a una pagina utile, non a un errore, parcheggio o categoria diversa."},{heading:"Abbinare il prodotto",body:"Prima immagine, tipo e contesto della scheda devono corrispondere."},{heading:"Registrare l’ambito",body:"La verifica copre link e associazione visibile alla data, non autenticità, stock, prezzo o spedizione."},{heading:"Ripetere il test",body:"I link morti o errati perdono lo stato e vengono sostituiti solo dopo gli stessi controlli."}] },
  },
};

export function getTrustPage(lang: Lang, key: TrustPageKey): SupportPage {
  return trustPages[lang][key];
}

const findsMethod: Record<Lang, SupportPage> = {
  en: { kicker: "VERIFIED FINDS METHOD", title: "What makes a Joyagoo find usable", description: "A working product link is only the first check.", sections: [
    { heading: "Exact destination, not a look-alike", body: "We keep a sample only when its destination is usable and the first visible product image and type match the card. A URL that merely returns 200 is not enough: parked pages, unrelated categories and replacement products fail the mapping check." },
    { heading: "Checked date, not permanent status", body: "The checked marker describes one inspection point. Third-party sellers can change a price, option, image, stock status or return condition without preserving an old spreadsheet entry. Reopen the current detail page before importing or paying." },
    { heading: "Size notes must name the evidence", body: "A useful sizing note refers to a visible chart, garment measurement, shoe insole length or option label. Generic claims such as true to size are not treated as verified facts because seller batches and measurement methods can differ." },
    { heading: "Dead links leave the verified set", body: "When a saved URL fails, redirects elsewhere or no longer matches the product, it should be removed from verified samples. A replacement starts a new check; it does not inherit the old product’s status, image match or notes." },
  ] },
  de: { kicker:"METHODE FÜR GEPRÜFTE FINDS",title:"Was einen Joyagoo-Fund brauchbar macht",description:"Ein funktionierender Produktlink ist nur die erste Prüfung.",sections:[{heading:"Exaktes Ziel",body:"Ein Beispiel bleibt nur, wenn Zielseite, erstes sichtbares Bild und Produkttyp zusammenpassen. Status 200 allein reicht nicht."},{heading:"Prüfdatum",body:"Der Marker gilt für einen Zeitpunkt. Preis, Option, Bild, Bestand und Rückgabe können sich ändern; vor Import oder Zahlung erneut öffnen."},{heading:"Größenhinweise mit Beleg",body:"Brauchbare Hinweise nennen Tabelle, Kleidungsmaß, Innensohlenlänge oder sichtbare Option statt pauschal wahrheitsgetreuer Größe."},{heading:"Tote Links entfernen",body:"Fehlerhafte, umgeleitete oder nicht mehr passende URLs verlieren den Status. Ein Ersatz wird vollständig neu geprüft."}] },
  es: { kicker:"MÉTODO DE HALLAZGOS VERIFICADOS",title:"Qué hace útil un hallazgo Joyagoo",description:"Un enlace activo es solo la primera comprobación.",sections:[{heading:"Destino exacto",body:"La muestra se conserva cuando destino, primera imagen y tipo coinciden. Un código 200 sin relación no basta."},{heading:"Fecha de revisión",body:"La marca describe un momento. Precio, opción, imagen, stock y devolución pueden cambiar; vuelve a abrir antes de importar o pagar."},{heading:"Talla con pruebas",body:"Una nota útil cita tabla visible, medida de prenda, plantilla o etiqueta de opción, no una afirmación genérica."},{heading:"Retirar enlaces muertos",body:"Una URL rota, desviada o que ya no coincide sale del conjunto. El reemplazo se verifica desde cero."}] },
  fr: { kicker:"MÉTHODE DE SÉLECTION VÉRIFIÉE",title:"Ce qui rend une sélection Joyagoo utile",description:"Un lien actif n’est que le premier contrôle.",sections:[{heading:"Destination exacte",body:"L’exemple reste si destination, première image et type correspondent. Un simple statut 200 sans rapport ne suffit pas."},{heading:"Date de contrôle",body:"Le marqueur décrit un instant. Prix, option, image, stock et retour peuvent changer ; rouvrez avant import ou paiement."},{heading:"Taille avec preuve",body:"Une note utile cite tableau visible, mesure du vêtement, longueur de semelle ou option plutôt qu’une affirmation générale."},{heading:"Retirer les liens morts",body:"Une URL cassée, redirigée ailleurs ou non correspondante quitte la sélection. Son remplacement est contrôlé à neuf."}] },
  it: { kicker:"METODO PER SELEZIONI VERIFICATE",title:"Cosa rende utile una selezione Joyagoo",description:"Un link attivo è solo il primo controllo.",sections:[{heading:"Destinazione esatta",body:"Il campione resta quando destinazione, prima immagine e tipo coincidono. Un semplice stato 200 non basta."},{heading:"Data di controllo",body:"Il marcatore descrive un momento. Prezzo, opzione, immagine, stock e reso possono cambiare; riapri prima di importare o pagare."},{heading:"Taglia con prove",body:"Una nota utile cita tabella visibile, misura del capo, lunghezza soletta o opzione, non un’affermazione generica."},{heading:"Rimuovere link morti",body:"Un URL rotto, deviato o non più corrispondente esce dal gruppo. Il sostituto viene verificato da zero."}] },
};

export function getFindsMethod(lang: Lang): SupportPage {
  return findsMethod[lang];
}
