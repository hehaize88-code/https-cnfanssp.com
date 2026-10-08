export const REVIEW_DATE = '2026-10-08';
export const localeUi = {
  en: { category:'QC research', read:'min read', next:'Next step', cta:'Browse the product index', ctaTitle:'Find candidates, then verify the source listing and your own QC photos.', source:'FindQC: search and QC documentation', sourceNote:'Reference for the service’s search methods and QC scope. The examples and worksheets in this guide are independent editorial guidance.', updated:'Updated', quick:'Quick answer', count:'practical guides', groups:['Find QC photos','Review an item','Plan the purchase'], note:'Choose a guide for the question you have: find the original listing, review warehouse evidence, or prepare an order. The same topics are available in all five languages.' },
  de: { category:'QC-Ratgeber', read:'Min. Lesezeit', next:'Nächster Schritt', cta:'Produktindex öffnen', ctaTitle:'Kandidaten finden, dann das Originalangebot und die eigenen QC-Fotos prüfen.', source:'FindQC: Dokumentation zu Suche und QC', sourceNote:'Referenz zu Suchmethoden und Umfang des Dienstes. Beispiele und Arbeitsblätter sind unabhängige redaktionelle Hilfen.', updated:'Aktualisiert', quick:'Kurzantwort', count:'praktische Ratgeber', groups:['QC-Fotos finden','Artikel prüfen','Kauf planen'], note:'Wähle den Ratgeber zu deiner Frage: Originalangebot finden, Lagerfotos prüfen oder eine Bestellung vorbereiten. Alle Themen sind in fünf Sprachen verfügbar.' },
  es: { category:'Guía de QC', read:'min de lectura', next:'Siguiente paso', cta:'Explorar el índice de productos', ctaTitle:'Encuentra candidatos y verifica la publicación original y las fotos QC de tu pedido.', source:'FindQC: documentación de búsqueda y QC', sourceNote:'Referencia sobre los métodos de búsqueda y el alcance del servicio. Los ejemplos y las hojas de trabajo son orientación editorial independiente.', updated:'Actualizado', quick:'Respuesta breve', count:'guías prácticas', groups:['Encontrar fotos QC','Revisar un artículo','Planificar la compra'], note:'Elige una guía según tu pregunta: localizar la publicación original, revisar pruebas del almacén o preparar un pedido. Todos los temas están disponibles en cinco idiomas.' },
  pl: { category:'Poradnik QC', read:'min czytania', next:'Następny krok', cta:'Otwórz indeks produktów', ctaTitle:'Znajdź kandydatów, a następnie sprawdź ofertę źródłową i zdjęcia QC własnego zamówienia.', source:'FindQC: dokumentacja wyszukiwania i QC', sourceNote:'Źródło dotyczące metod wyszukiwania i zakresu usługi. Przykłady i arkusze w poradniku to niezależne wskazówki redakcyjne.', updated:'Aktualizacja', quick:'Krótka odpowiedź', count:'praktycznych poradników', groups:['Znajdź zdjęcia QC','Sprawdź produkt','Zaplanuj zakup'], note:'Wybierz poradnik odpowiadający na Twoje pytanie: znajdź ofertę źródłową, oceń zdjęcia z magazynu lub przygotuj zamówienie. Wszystkie tematy są dostępne w pięciu językach.' },
  ro: { category:'Ghid QC', read:'min de lectură', next:'Pasul următor', cta:'Deschide indexul de produse', ctaTitle:'Găsește produse candidate, apoi verifică oferta originală și fotografiile QC ale comenzii tale.', source:'FindQC: documentație despre căutare și QC', sourceNote:'Referință pentru metodele de căutare și limitele serviciului. Exemplele și fișele sunt îndrumări editoriale independente.', updated:'Actualizat', quick:'Răspuns pe scurt', count:'ghiduri practice', groups:['Găsește fotografii QC','Verifică un articol','Planifică achiziția'], note:'Alege ghidul potrivit întrebării tale: găsește oferta originală, verifică dovezile din depozit sau pregătește o comandă. Toate subiectele sunt disponibile în cinci limbi.' },
};
export const topicConfig = {
  'taobao-qc-finder-item-id-link-checks': ['search','/products/shoes-60.jpg',['product-search-link-id-keyword','qc-finder-no-photos-dead-link-recovery','findqc-image-search-reference-photo-checks']],
  'weidian-qc-finder-item-id-original-listing': ['search','/products/hoodie.webp',['taobao-qc-finder-item-id-link-checks','qc-finder-no-photos-dead-link-recovery','compare-qc-photos-same-item']],
  '1688-qc-finder-supplier-variant-batch-checks': ['search','/products/tshirt.webp',['warehouse-measurement-guide','clothing-qc-photos-measurements-print-stitching','compare-qc-photos-same-item']],
  'qc-finder-no-photos-dead-link-recovery': ['search','/products/jacket.webp',['taobao-qc-finder-item-id-link-checks','weidian-qc-finder-item-id-original-listing','findqc-image-search-reference-photo-checks']],
  'findqc-image-search-reference-photo-checks': ['search','/products/shoes-60.jpg',['qc-finder-no-photos-dead-link-recovery','compare-qc-photos-same-item','product-search-link-id-keyword']],
  'qc-photos-vs-qc-videos-evidence-guide': ['review','/products/hoodie.webp',['what-qc-photos-can-prove','request-extra-qc-photos-templates','qc-checker-review-decision-guide']],
  'sneaker-qc-photo-checklist-shape-tags-soles-box': ['review','/products/shoes-60.jpg',['warehouse-measurement-guide','request-extra-qc-photos-templates','qc-checker-review-decision-guide']],
  'clothing-qc-photos-measurements-print-stitching': ['review','/products/tshirt.webp',['warehouse-measurement-guide','request-extra-qc-photos-templates','qc-checker-review-decision-guide']],
  'warehouse-measurement-guide': ['review','/products/hoodie.webp',['clothing-qc-photos-measurements-print-stitching','sneaker-qc-photo-checklist-shape-tags-soles-box','request-extra-qc-photos-templates']],
  'shipping-cost-checklist': ['plan','/products/jacket.webp',['findqc-shopping-agent-workflow','warehouse-measurement-guide','before-you-buy-qc-guide']],
  'findqc-product-signals': ['search','/products/watch.webp',['compare-qc-photos-same-item','what-qc-photos-can-prove','mapped-findqc-product-index-without-recommendation']],
  'findqc-shopping-agent-workflow': ['plan','/products/jacket.webp',['product-search-link-id-keyword','before-you-buy-qc-guide','shipping-cost-checklist']],
  'qc-checker-review-decision-guide': ['review','/products/shoes-60.jpg',['before-you-buy-qc-guide','request-extra-qc-photos-templates','compare-qc-photos-same-item']],
  'request-extra-qc-photos-templates': ['review','/products/hoodie.webp',['warehouse-measurement-guide','qc-photos-vs-qc-videos-evidence-guide','qc-checker-review-decision-guide']],
  'compare-qc-photos-same-item': ['review','/products/shoes-60.jpg',['findqc-image-search-reference-photo-checks','1688-qc-finder-supplier-variant-batch-checks','qc-checker-review-decision-guide']],
};
export function makeGuide(slug, language, content) {
  const ui=localeUi[language];
  const [topic, heroImage, related]=topicConfig[slug];
  const {sections,...copy}=content;
  const result={...copy, slug, topic, shortTitle:copy.shortTitle||copy.title, excerpt:copy.excerpt||copy.description, category:ui.category,
    heroImage, heroAlt:copy.heroAlt||copy.title, dateISO:REVIEW_DATE, dateModified:REVIEW_DATE,
    date:new Intl.DateTimeFormat(language,{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(REVIEW_DATE+'T00:00:00Z')),
    sections: sections.map((s,i)=>({id:s.id||`step-${i+1}`,title:s.title,blocks:s.blocks||[
      ...(s.paragraphs||[]).map(text=>({type:'p',text})),
      ...(s.items?[{type:'list',items:s.items}]:[]),
      ...(s.table?[{type:'table',headers:s.table[0],rows:s.table.slice(1)}]:[]),
    ]})),
    related, sources:[{href:'https://findqc.com/how-findqc-works',label:ui.source,note:ui.sourceNote}],
    cta:{eyebrow:ui.next,title:ui.ctaTitle,label:ui.cta,href:'/products'},
  };
  const text=JSON.stringify([result.intro,result.sections]);
  result.readTime=`${Math.max(3,Math.ceil(text.split(/\s+/).length/190))} ${ui.read}`;
  return result;
}
