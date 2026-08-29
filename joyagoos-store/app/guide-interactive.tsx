"use client";

import { Footer, Header, MAIN, locales, localizedSections, pageContent, type Locale, type Section } from "./site-data";
import { withLanguage, type SiteLanguage } from "./i18n";
import { useLanguage } from "./use-language";
import { completeTranslations } from "./generated-translations";
import { localizedPath, SITE_URL } from "./seo";

const interfaceCopy: Record<SiteLanguage, { latest: string; next: string; connect: string; catalog: string; sources:string; checked:string }> = {
  en:{latest:"Read latest guides",next:"NEXT STEP",connect:"Keep the product, evidence and destination connected.",catalog:"Open the product catalog ↗",sources:"Official sources",checked:"Facts checked against Joyagoo's published help center"},
  zh:{latest:"阅读最新指南",next:"下一步",connect:"让商品、核查证据和目标页面始终保持对应。",catalog:"打开商品目录 ↗",sources:"官方资料来源",checked:"事实已对照 Joyagoo 已发布的帮助中心核查"},
  de:{latest:"Neueste Guides lesen",next:"NÄCHSTER SCHRITT",connect:"Produkt, Nachweise und Zielseite zusammenhalten.",catalog:"Produktkatalog öffnen ↗",sources:"Offizielle Quellen",checked:"Fakten mit dem veröffentlichten Joyagoo-Hilfecenter geprüft"},
  pl:{latest:"Czytaj najnowsze poradniki",next:"NASTĘPNY KROK",connect:"Zachowaj połączenie produktu, dowodów i strony docelowej.",catalog:"Otwórz katalog produktów ↗",sources:"Oficjalne źródła",checked:"Fakty sprawdzone w opublikowanym centrum pomocy Joyagoo"},
  es:{latest:"Leer las últimas guías",next:"SIGUIENTE PASO",connect:"Mantén conectados el producto, las pruebas y el destino.",catalog:"Abrir el catálogo ↗",sources:"Fuentes oficiales",checked:"Datos contrastados con el centro de ayuda publicado por Joyagoo"},
  it:{latest:"Leggi le ultime guide",next:"PASSO SUCCESSIVO",connect:"Mantieni collegati prodotto, prove e destinazione.",catalog:"Apri il catalogo ↗",sources:"Fonti ufficiali",checked:"Fatti verificati nel centro assistenza pubblicato da Joyagoo"},
  fr:{latest:"Lire les derniers guides",next:"ÉTAPE SUIVANTE",connect:"Gardez le produit, les preuves et la destination liés.",catalog:"Ouvrir le catalogue ↗",sources:"Sources officielles",checked:"Informations vérifiées dans le centre d'aide publié par Joyagoo"},
  pt:{latest:"Ler os guias mais recentes",next:"PRÓXIMO PASSO",connect:"Mantenha o produto, as provas e o destino ligados.",catalog:"Abrir o catálogo ↗",sources:"Fontes oficiais",checked:"Factos verificados no centro de ajuda publicado pela Joyagoo"},
  ro:{latest:"Citește cele mai noi ghiduri",next:"PASUL URMĂTOR",connect:"Păstrează produsul, dovezile și destinația conectate.",catalog:"Deschide catalogul ↗",sources:"Surse oficiale",checked:"Fapte verificate în centrul de ajutor publicat de Joyagoo"},
  sv:{latest:"Läs de senaste guiderna",next:"NÄSTA STEG",connect:"Håll ihop produkten, underlagen och destinationen.",catalog:"Öppna produktkatalogen ↗",sources:"Officiella källor",checked:"Fakta kontrollerade mot Joyagoos publicerade hjälpcenter"},
};

const verificationCopy: Record<SiteLanguage, { kicker:string; title:string; reviewed:string; coverage:string; fields:string; rule:string; count:string; maintenance:string }> = {
  en:{kicker:"VERIFICATION RECORD",title:"Useful checks, with a visible maintenance date.",reviewed:"Last reviewed",coverage:"Page coverage",fields:"Check fields",rule:"Maintenance rule",count:"decision checks",maintenance:"Reopen the live destination. If its title, image, option structure or target changes, pause the saved route until it is checked again."},
  zh:{kicker:"核验记录",title:"保留实用检查项，并显示维护日期。",reviewed:"最后检查",coverage:"页面覆盖",fields:"检查字段",rule:"维护规则",count:"项决策检查",maintenance:"重新打开实时目标页；若标题、图片、选项结构或目标发生变化，暂停使用该路径，直至重新核验。"},
  de:{kicker:"PRÜFPROTOKOLL",title:"Nützliche Prüfungen mit sichtbarem Wartungsdatum.",reviewed:"Zuletzt geprüft",coverage:"Seitenumfang",fields:"Prüffelder",rule:"Wartungsregel",count:"Entscheidungsprüfungen",maintenance:"Live-Ziel erneut öffnen. Bei Änderungen an Titel, Bild, Optionen oder Ziel die gespeicherte Route bis zur erneuten Prüfung pausieren."},
  pl:{kicker:"REJESTR WERYFIKACJI",title:"Praktyczne kontrole z widoczną datą przeglądu.",reviewed:"Ostatni przegląd",coverage:"Zakres strony",fields:"Pola kontroli",rule:"Zasada utrzymania",count:"kontrole decyzyjne",maintenance:"Otwórz ponownie stronę docelową. Jeśli zmieniły się tytuł, obraz, opcje lub cel, wstrzymaj trasę do ponownej kontroli."},
  es:{kicker:"REGISTRO DE VERIFICACIÓN",title:"Comprobaciones útiles con fecha de mantenimiento visible.",reviewed:"Última revisión",coverage:"Cobertura",fields:"Campos de control",rule:"Regla de mantenimiento",count:"comprobaciones",maintenance:"Reabre el destino en vivo. Si cambian título, imagen, opciones o destino, pausa la ruta hasta volver a comprobarla."},
  it:{kicker:"REGISTRO DI VERIFICA",title:"Controlli utili con data di manutenzione visibile.",reviewed:"Ultima verifica",coverage:"Copertura",fields:"Campi di controllo",rule:"Regola di manutenzione",count:"controlli decisionali",maintenance:"Riapri la destinazione live. Se cambiano titolo, immagine, opzioni o destinazione, sospendi la rotta fino a nuova verifica."},
  fr:{kicker:"REGISTRE DE VÉRIFICATION",title:"Des contrôles utiles avec une date de maintenance visible.",reviewed:"Dernière vérification",coverage:"Couverture",fields:"Champs contrôlés",rule:"Règle de maintenance",count:"contrôles de décision",maintenance:"Rouvrez la destination. Si le titre, l’image, les options ou la cible changent, suspendez la route jusqu’à une nouvelle vérification."},
  pt:{kicker:"REGISTO DE VERIFICAÇÃO",title:"Verificações úteis com data de manutenção visível.",reviewed:"Última verificação",coverage:"Cobertura",fields:"Campos verificados",rule:"Regra de manutenção",count:"verificações",maintenance:"Reabra o destino atual. Se título, imagem, opções ou destino mudarem, suspenda a rota até nova verificação."},
  ro:{kicker:"REGISTRU DE VERIFICARE",title:"Verificări utile, cu data întreținerii vizibilă.",reviewed:"Ultima verificare",coverage:"Acoperire",fields:"Câmpuri verificate",rule:"Regulă de întreținere",count:"verificări",maintenance:"Redeschide destinația live. Dacă titlul, imaginea, opțiunile sau ținta se schimbă, oprește ruta până la reverificare."},
  sv:{kicker:"VERIFIERINGSPROTOKOLL",title:"Praktiska kontroller med synligt granskningsdatum.",reviewed:"Senast granskad",coverage:"Sidans omfattning",fields:"Kontrollfält",rule:"Underhållsregel",count:"beslutskontroller",maintenance:"Öppna live-destinationen igen. Om titel, bild, alternativ eller mål ändras, pausa rutten tills den har kontrollerats på nytt."},
};

const researchSources: Partial<Record<Section,{title:string;href:string}[]>> = {
  spreadsheet:[
    {title:"Joyagoo Official Shopping Flow",href:"https://mgt.joyagoo.com/help-center/shopping-assistant-guidance/"},
    {title:"Joyagoo Official Homepage",href:"https://joyagoo.com/"},
  ],
  finds:[
    {title:"Joyagoo Official Shopping Flow",href:"https://mgt.joyagoo.com/help-center/shopping-assistant-guidance/"},
    {title:"Joyagoo Official Homepage",href:"https://joyagoo.com/"},
  ],
  guide:[
    {title:"Joyagoo Shopping Guidance",href:"https://mgt.joyagoo.com/help-center/shopping-assistant-guidance/"},
    {title:"Joyagoo Warehouse Storage Period",href:"https://mgt.joyagoo.com/help-center/how-long-can-the-goods-be-stored-in-the-joyagoo-warehouse/"},
  ],
  qc:[
    {title:"Joyagoo Return Policy",href:"https://mgt.joyagoo.com/help-center/terms-of-promised-returns-with-no-reasons/"},
    {title:"Joyagoo Shopping Guidance",href:"https://mgt.joyagoo.com/help-center/shopping-assistant-guidance/"},
  ],
  shipping:[
    {title:"Actual Weight and Volumetric Weight",href:"https://mgt.joyagoo.com/help-center/actual-weight-and-volumetric-weight/"},
    {title:"Estimated and Actual Billing Weight",href:"https://mgt.joyagoo.com/help-center/estimated-billing-weight-and-actual-billing-weight-when-will-the-overcharged-postage-be-refunded/"},
    {title:"Joyagoo Rehearsal Packing",href:"https://mgt.joyagoo.com/help-center/joyabuy-rehearsal-packing/"},
  ],
  faq:[
    {title:"Joyagoo Warehouse Storage Period",href:"https://mgt.joyagoo.com/help-center/how-long-can-the-goods-be-stored-in-the-joyagoo-warehouse/"},
    {title:"Joyagoo Return Policy",href:"https://mgt.joyagoo.com/help-center/terms-of-promised-returns-with-no-reasons/"},
  ],
};

export function GuideInteractive({ section, initialLocale = "en", prefix = "" }: { section: Section; initialLocale?: SiteLanguage; prefix?: string }) {
  const { language, setLanguage } = useLanguage(initialLocale);
  const translated = language === "en" ? null : localizedSections[language][section];
  const source = pageContent[section];
  const ui = interfaceCopy[language];
  const activeLocale = language === "en" ? undefined : language as Locale;
  const translatedPage = activeLocale ? completeTranslations[activeLocale].pageContent[section] : null;
  const verification = verificationCopy[language];
  const blocks = source.blocks.map((block, index) => ({
    ...block,
    title: translated?.blocks[index] || block.title,
    text: translatedPage?.blocks[index]?.text || block.text,
    bullets: translatedPage?.blocks[index]?.bullets || block.bullets,
  }));
  const initialActive = initialLocale === "en" ? null : completeTranslations[initialLocale as Locale].pageContent[section];
  const initialSource = initialActive || source;
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
    {"@type":"ListItem",position:1,name:"Home",item:`${SITE_URL}${localizedPath("/",initialLocale)}`},
    {"@type":"ListItem",position:2,name:initialSource.title,item:`${SITE_URL}${localizedPath(`/${section}`,initialLocale)}`},
  ]};
  const faqSchema = section === "faq" ? {"@context":"https://schema.org","@type":"FAQPage",mainEntity:initialSource.blocks.map((block)=>({"@type":"Question",name:block.title,acceptedAnswer:{"@type":"Answer",text:block.text}}))} : null;

  return <main>
    <Header prefix={prefix} locale={activeLocale} language={language} onLanguageChange={setLanguage} section={section} />
    <section className="inner-hero"><p className="eyebrow">{translated?.kicker || source.kicker}</p><h1>{translated?.title || source.title}</h1><p>{translated?.intro || source.intro}</p>
      <div className="inner-actions"><a href={MAIN + "/AllProducts/"} target="_blank" rel="noreferrer">{activeLocale ? locales[activeLocale].find : "Browse matched products"} ↗</a><a href={withLanguage((prefix || "") + "/articles", language)}>{ui.latest}</a></div>
    </section>
    <section className="inner-grid">{blocks.map((block) => <article key={block.number}><span>{block.number}</span><h2>{block.title}</h2><p>{block.text}</p>{block.bullets && <ul>{block.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</article>)}</section>
    <section className="verification-panel" data-last-reviewed="2026-08-29"><div className="verification-heading"><p className="eyebrow">{verification.kicker}</p><h2>{verification.title}</h2></div><div className="verification-grid"><article><strong>{verification.reviewed}</strong><p>2026-08-29</p></article><article><strong>{verification.coverage}</strong><p>{blocks.length} {verification.count}</p></article><article><strong>{verification.fields}</strong><p>{blocks.map((block)=>block.title).join(" · ")}</p></article><article><strong>{verification.rule}</strong><p>{verification.maintenance}</p></article></div></section>
    {researchSources[section] && <section className="source-strip"><div><p className="eyebrow">{ui.sources}</p><h2>{ui.checked}</h2></div><div>{researchSources[section]!.map((source)=><div className="source-reference" key={source.href}><strong>{source.title}</strong><span>{source.href}</span><small>Accessed 2026-08-29</small></div>)}</div></section>}
    <section className="inner-cta"><p className="eyebrow">{ui.next}</p><h2>{ui.connect}</h2><a href={MAIN + "/AllProducts/"} target="_blank" rel="noreferrer">{ui.catalog}</a></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb).replace(/</g,"\\u003c")}} />
    {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema).replace(/</g,"\\u003c")}} />}
    <Footer prefix={prefix} language={language} onLanguageChange={setLanguage} section={section} />
  </main>;
}
