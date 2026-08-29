"use client";

import { Footer, Header, MAIN, locales, localizedSections, pageContent, type Locale, type Section } from "./site-data";
import { withLanguage, type SiteLanguage } from "./i18n";
import { useLanguage } from "./use-language";
import { completeTranslations } from "./generated-translations";

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
  const blocks = source.blocks.map((block, index) => ({
    ...block,
    title: translated?.blocks[index] || block.title,
    text: translatedPage?.blocks[index]?.text || block.text,
    bullets: translatedPage?.blocks[index]?.bullets || block.bullets,
  }));

  return <main>
    <Header prefix={prefix} locale={activeLocale} language={language} onLanguageChange={setLanguage} section={section} />
    <section className="inner-hero"><p className="eyebrow">{translated?.kicker || source.kicker}</p><h1>{translated?.title || source.title}</h1><p>{translated?.intro || source.intro}</p>
      <div className="inner-actions"><a href={MAIN + "/AllProducts/"} target="_blank" rel="noreferrer">{activeLocale ? locales[activeLocale].find : "Browse matched products"} ↗</a><a href={withLanguage((prefix || "") + "/articles", language)}>{ui.latest}</a></div>
    </section>
    <section className="inner-grid">{blocks.map((block) => <article key={block.number}><span>{block.number}</span><h2>{block.title}</h2><p>{block.text}</p>{block.bullets && <ul>{block.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</article>)}</section>
    {researchSources[section] && <section className="source-strip"><div><p className="eyebrow">{ui.sources}</p><h2>{ui.checked}</h2></div><div>{researchSources[section]!.map((source,index)=><a href={source.href} target="_blank" rel="noreferrer" key={source.href}>{activeLocale ? `${ui.sources} 0${index + 1}` : source.title}<b>↗</b></a>)}</div></section>}
    <section className="inner-cta"><p className="eyebrow">{ui.next}</p><h2>{ui.connect}</h2><a href={MAIN + "/AllProducts/"} target="_blank" rel="noreferrer">{ui.catalog}</a></section>
    <Footer prefix={prefix} language={language} onLanguageChange={setLanguage} section={section} />
  </main>;
}
