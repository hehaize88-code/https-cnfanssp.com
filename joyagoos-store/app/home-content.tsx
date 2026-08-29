"use client";

import { articles, type ArticleSlug } from "./article-data";
import { completeTranslations } from "./generated-translations";
import { Footer, Header, locales, localizedSections, pageContent, type Locale } from "./site-data";
import { pageDetails } from "./full-translations";
import { withLanguage, type SiteLanguage } from "./i18n";
import { useLanguage } from "./use-language";
import { getArticleCopy } from "./article-content";

type HomeLocale = SiteLanguage;

const products = [
  { name: "Autry Shoes", category: "Shoes", price: "$69.40", href: "https://www.cnfanssp.com/AllProducts/4276.html", image: "https://www.cnfanssp.com/uploads/allimg/20251225/1-251225144612B9.gif" },
  { name: "Represent Hoodie", category: "Sweatshirts", price: "$17.35", href: "https://www.cnfanssp.com/AllProducts/5214.html", image: "https://www.cnfanssp.com/uploads/allimg/20260120/1-26012014115XI.webp" },
  { name: "Tissot Watch", category: "Accessories", price: "$66.10", href: "https://www.cnfanssp.com/AllProducts/399.html", image: "https://www.cnfanssp.com/uploads/allimg/20251022/1-2510221P552526.webp" },
  { name: "Corteiz Mohair Sweater", category: "Clothing", price: "$25.60", href: "https://www.cnfanssp.com/AllProducts/2504.html", image: "https://www.cnfanssp.com/uploads/allimg/20251126/1-251126164405a5.webp" },
  { name: "AMIRI MA-1 Sneakers", category: "Shoes", price: "$53.90", href: "https://www.cnfanssp.com/AllProducts/3842.html", image: "https://www.cnfanssp.com/uploads/allimg/20251219/1-2512191533513J.webp" },
];

const categories = [
  ["Shoes", "https://www.cnfanssp.com/shoes/"],
  ["Sweatshirts / Hoodies", "https://www.cnfanssp.com/hoodies-sweaters/"],
  ["Accessories", "https://www.cnfanssp.com/accessories/"],
  ["Electronics", "https://www.cnfanssp.com/electronics/"],
] as const;

const english = {
  heroKicker:"JOYAGOO PRODUCT DIRECTORY / 2026", title:"Find the product.", accent:"Check the path.", lead:"A maintained directory for checking product destinations, image matches, available options and reference prices before the next click.",
  searchPlaceholder:"Search shoes, hoodies, watches...", searchButton:"Search products ↗", trust:["Matched listing routes","Image + option checks","Checked destinations"],
  ticker:["PRODUCT DIRECTORY","LISTING STATUS","OPTION MATCH","CATEGORY ROUTES"], findsKicker:"MAINTAINED ENTRY POINTS", findsTitle:"Five product routes worth checking", findsIntro:"Every card keeps its product name, preview and destination together, with a visible review date for route maintenance.", cardCta:"View matched page ↗", cardNotes:["Route checked 2026-08-29","Route checked 2026-08-29","Route checked 2026-08-29","Route checked 2026-08-29","Route checked 2026-08-29"],
  categoryKicker:"START BROAD, THEN NARROW", categoryTitle:"Browse by product direction.", categoryIntro:"Use a category when you know the type of item but not the exact product yet.", categoryNotes:["Sneakers, loafers and everyday pairs","Sweatshirts, knits and layered pieces","Watches, bags, caps and details","Devices, wearables and small tech"],
  decisionKicker:"A MAINTAINED DIRECTORY", decisionTitle:"The directory is the start—not the proof.", decisionBlocks:["Open","Match","Check options","Record status"], decisionText:["Open the current destination and confirm that it still returns the expected product.","Compare the name, first image and category so a working link never hides a mismatched item.","Confirm the selected style, size, version, quantity and option-specific price on the live page.","Save the check date and remove a route when its destination, image or options no longer match."],
  categoryNames:["Shoes","Sweatshirts / Hoodies","Accessories","Electronics"], productCategories:["Shoes","Sweatshirts","Accessories","Clothing","Shoes"],
};

const homeTerms: Record<Locale, { categoryNames:string[]; productCategories:string[] }> = {
  zh:{categoryNames:["鞋类","卫衣 / 连帽衫","配饰","电子产品"],productCategories:["鞋类","卫衣","配饰","服装","鞋类"]},
  de:{categoryNames:["Schuhe","Sweatshirts / Hoodies","Accessoires","Elektronik"],productCategories:["Schuhe","Sweatshirts","Accessoires","Kleidung","Schuhe"]},
  pl:{categoryNames:["Buty","Bluzy / Hoodies","Akcesoria","Elektronika"],productCategories:["Buty","Bluzy","Akcesoria","Odzież","Buty"]},
  es:{categoryNames:["Calzado","Sudaderas / Hoodies","Accesorios","Electrónica"],productCategories:["Calzado","Sudaderas","Accesorios","Ropa","Calzado"]},
  it:{categoryNames:["Scarpe","Felpe / Hoodie","Accessori","Elettronica"],productCategories:["Scarpe","Felpe","Accessori","Abbigliamento","Scarpe"]},
  fr:{categoryNames:["Chaussures","Sweats / Hoodies","Accessoires","Électronique"],productCategories:["Chaussures","Sweats","Accessoires","Vêtements","Chaussures"]},
  pt:{categoryNames:["Calçado","Sweatshirts / Hoodies","Acessórios","Eletrónica"],productCategories:["Calçado","Sweatshirts","Acessórios","Roupa","Calçado"]},
  ro:{categoryNames:["Încălțăminte","Hanorace","Accesorii","Electronice"],productCategories:["Încălțăminte","Hanorace","Accesorii","Îmbrăcăminte","Încălțăminte"]},
  sv:{categoryNames:["Skor","Tröjor / Hoodies","Accessoarer","Elektronik"],productCategories:["Skor","Tröjor","Accessoarer","Kläder","Skor"]},
};

const directoryTerms: Record<Locale, { kicker:string; title:string; accent:string; lead:string; route:string; categoryTitle:string; decisionTitle:string; checked:string }> = {
  zh:{kicker:"JOYAGOO 商品目录 / 2026",title:"找到商品。",accent:"核对路径。",lead:"一个持续维护的目录，用于在点击前核对商品目标页、图片、选项和参考价格。",route:"商品路径",categoryTitle:"先按商品方向浏览。",decisionTitle:"目录是起点，不是最终证据。",checked:"路径检查于 2026-08-29"},
  de:{kicker:"JOYAGOO PRODUKTVERZEICHNIS / 2026",title:"Produkt finden.",accent:"Route prüfen.",lead:"Ein gepflegtes Verzeichnis zum Prüfen von Zielseite, Bild, Optionen und Referenzpreis vor dem nächsten Klick.",route:"PRODUKTROUTEN",categoryTitle:"Nach Produktrichtung browsen.",decisionTitle:"Das Verzeichnis ist der Start – nicht der Beweis.",checked:"Route geprüft am 29.08.2026"},
  pl:{kicker:"KATALOG PRODUKTÓW JOYAGOO / 2026",title:"Znajdź produkt.",accent:"Sprawdź trasę.",lead:"Aktualizowany katalog do kontroli strony docelowej, zdjęcia, opcji i ceny referencyjnej przed kliknięciem.",route:"TRASY PRODUKTÓW",categoryTitle:"Przeglądaj według kierunku produktu.",decisionTitle:"Katalog jest początkiem, a nie dowodem.",checked:"Trasa sprawdzona 29.08.2026"},
  es:{kicker:"DIRECTORIO DE PRODUCTOS JOYAGOO / 2026",title:"Encuentra el producto.",accent:"Comprueba la ruta.",lead:"Un directorio mantenido para verificar destino, imagen, opciones y precio de referencia antes del siguiente clic.",route:"RUTAS DE PRODUCTO",categoryTitle:"Explora por tipo de producto.",decisionTitle:"El directorio es el inicio, no la prueba.",checked:"Ruta revisada el 29-08-2026"},
  it:{kicker:"DIRECTORY PRODOTTI JOYAGOO / 2026",title:"Trova il prodotto.",accent:"Controlla la rotta.",lead:"Un directory mantenuto per verificare destinazione, immagine, opzioni e prezzo di riferimento prima del clic.",route:"ROTTE PRODOTTO",categoryTitle:"Sfoglia per direzione di prodotto.",decisionTitle:"Il directory è il punto di partenza, non la prova.",checked:"Rotta verificata il 29/08/2026"},
  fr:{kicker:"RÉPERTOIRE PRODUITS JOYAGOO / 2026",title:"Trouvez le produit.",accent:"Vérifiez la route.",lead:"Un répertoire maintenu pour vérifier destination, image, options et prix indicatif avant le prochain clic.",route:"ROUTES PRODUIT",categoryTitle:"Parcourir par type de produit.",decisionTitle:"Le répertoire est le départ, pas la preuve.",checked:"Route vérifiée le 29/08/2026"},
  pt:{kicker:"DIRETÓRIO DE PRODUTOS JOYAGOO / 2026",title:"Encontre o produto.",accent:"Verifique a rota.",lead:"Um diretório mantido para confirmar destino, imagem, opções e preço de referência antes do clique seguinte.",route:"ROTAS DE PRODUTO",categoryTitle:"Explore por tipo de produto.",decisionTitle:"O diretório é o início, não a prova.",checked:"Rota verificada em 29/08/2026"},
  ro:{kicker:"DIRECTOR PRODUSE JOYAGOO / 2026",title:"Găsește produsul.",accent:"Verifică ruta.",lead:"Un director întreținut pentru verificarea destinației, imaginii, opțiunilor și prețului de referință înainte de clic.",route:"RUTE DE PRODUS",categoryTitle:"Răsfoiește după tipul produsului.",decisionTitle:"Directorul este începutul, nu dovada.",checked:"Rută verificată la 29.08.2026"},
  sv:{kicker:"JOYAGOO PRODUKTKATALOG / 2026",title:"Hitta produkten.",accent:"Kontrollera rutten.",lead:"En underhållen katalog för att kontrollera destination, bild, alternativ och referenspris före nästa klick.",route:"PRODUKT RUTTER",categoryTitle:"Bläddra efter produktriktning.",decisionTitle:"Katalogen är starten – inte beviset.",checked:"Rutt kontrollerad 2026-08-29"},
};

const articleEntries = Object.entries(articles) as [ArticleSlug, (typeof articles)[ArticleSlug]][];

const homepageUi: Record<SiteLanguage, { readArticle:string; openFaq:string }> = {
  en:{ readArticle:"Read article", openFaq:"Read the full answer" },
  zh:{ readArticle:"阅读文章", openFaq:"查看完整回答" },
  de:{ readArticle:"Artikel lesen", openFaq:"Vollständige Antwort lesen" },
  pl:{ readArticle:"Czytaj artykuł", openFaq:"Przeczytaj pełną odpowiedź" },
  es:{ readArticle:"Leer artículo", openFaq:"Leer la respuesta completa" },
  it:{ readArticle:"Leggi l’articolo", openFaq:"Leggi la risposta completa" },
  fr:{ readArticle:"Lire l’article", openFaq:"Lire la réponse complète" },
  pt:{ readArticle:"Ler o artigo", openFaq:"Ler a resposta completa" },
  ro:{ readArticle:"Citește articolul", openFaq:"Citește răspunsul complet" },
  sv:{ readArticle:"Läs artikeln", openFaq:"Läs hela svaret" },
};

function getCopy(locale: HomeLocale) {
  if (locale === "en") return english;
  const info = locales[locale];
  const finds = localizedSections[locale].finds;
  const directory = directoryTerms[locale];
  const guide = localizedSections[locale].guide;
  return {
    heroKicker:directory.kicker, title:directory.title, accent:directory.accent, lead:directory.lead,
    searchPlaceholder:info.find, searchButton:`${info.find} ↗`, trust:[finds.blocks[0], localizedSections[locale].qc.blocks[0], localizedSections[locale].shipping.blocks[0]],
    ticker:[finds.kicker, localizedSections[locale].qc.kicker, localizedSections[locale].shipping.kicker, directory.route], findsKicker:finds.kicker, findsTitle:finds.title, findsIntro:finds.intro, cardCta:`${info.find} ↗`, cardNotes:Array(5).fill(directory.checked),
    categoryKicker:directory.route, categoryTitle:directory.categoryTitle, categoryIntro:finds.intro, categoryNotes:pageDetails[locale].spreadsheet,
    decisionKicker:directory.kicker, decisionTitle:directory.decisionTitle, decisionBlocks:guide.blocks, decisionText:pageDetails[locale].guide,
    categoryNames:homeTerms[locale].categoryNames, productCategories:homeTerms[locale].productCategories,
  };
}

export function HomeContent({ locale, prefix = "" }: { locale: HomeLocale; prefix?: string }) {
  const { language, setLanguage } = useLanguage(locale);
  const copy = getCopy(language);
  const activeLocale = language === "en" ? undefined : language;
  const articleSection = language === "en" ? pageContent.articles : localizedSections[language].articles;
  const faqSection = language === "en" ? pageContent.faq : localizedSections[language].faq;
  const faqCards = language === "en" ? pageContent.faq.blocks : completeTranslations[language].pageContent.faq.blocks;
  return (
    <main>
      <Header prefix={prefix} locale={activeLocale} language={language} onLanguageChange={setLanguage} />
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{copy.heroKicker}</p>
          <h1>{copy.title}<br /><em>{copy.accent}</em></h1>
          <p className="hero-lead">{copy.lead}</p>
          <form className="search-bar" action="https://www.cnfanssp.com/search.html" method="get" target="_blank">
            <label className="sr-only" htmlFor="product-search">{copy.searchPlaceholder}</label>
            <input type="hidden" name="channelid" value="2" /><input type="hidden" name="method" value="1" />
            <input id="product-search" name="keywords" placeholder={copy.searchPlaceholder} />
            <button type="submit">{copy.searchButton}</button>
          </form>
          <div className="trust-row" aria-label="Site highlights">{copy.trust.map((item,index)=><span key={item}><b>0{index+1}</b> {item}</span>)}</div>
        </div>
        <div className="hero-stack" aria-label="Featured product preview">
          <a href={products[0].href} target="_blank" rel="noreferrer" className="hero-card hero-card-back"><span>{copy.productCategories[0].toUpperCase()} / 001</span></a>
          <a href={products[1].href} target="_blank" rel="noreferrer" className="hero-card hero-card-front"><img src={products[1].image} alt="Represent Hoodie product preview" width="520" height="650" /><div><span>{copy.findsKicker}</span><strong>Represent Hoodie</strong><small>{copy.cardCta}</small></div></a>
        </div>
      </section>
      <section className="ticker" aria-label="Browse topics">{copy.ticker.map((item,index)=><span key={item}>{index>0 && <i>✦</i>}{item}</span>)}</section>
      <section className="section" id="finds" data-last-checked="2026-08-29">
        <div className="section-head"><div><p className="eyebrow">{copy.findsKicker}</p><h2>{copy.findsTitle}</h2></div><p>{copy.findsIntro}</p></div>
        <div className="product-grid">{products.map((product,index)=><a className="product-card" href={product.href} target="_blank" rel="noreferrer" key={product.name}><div className="product-image"><span className="product-index">0{index+1}</span><img src={product.image} alt={`${product.name} product preview`} width={index === 0 ? 500 : 520} height={index === 0 ? 338 : 520} loading="lazy" /></div><div className="product-meta"><span>{copy.productCategories[index]}</span><span>{product.price}</span></div><h3>{product.name}</h3><p>{copy.cardNotes[index]}<b>{copy.cardCta}</b></p></a>)}</div>
      </section>
      <section className="category-section" id="categories">
        <div className="category-intro"><p className="eyebrow">{copy.categoryKicker}</p><h2>{copy.categoryTitle}</h2><p>{copy.categoryIntro}</p></div>
        <div className="category-list">{categories.map(([name,href],index)=><a href={href} target="_blank" rel="noreferrer" key={name}><span>0{index+1}</span><div><h3>{copy.categoryNames[index]}</h3><p>{copy.categoryNotes[index]}</p></div><b>↗</b></a>)}</div>
      </section>
      <section className="decision-section" id="checks"><div className="decision-title"><p className="eyebrow">{copy.decisionKicker}</p><h2>{copy.decisionTitle}</h2></div><div className="decision-cards">{copy.decisionBlocks.map((title,index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{copy.decisionText[index]}</p></article>)}</div></section>
      <section className="section home-editorial" id="articles">
        <div className="section-head"><div><p className="eyebrow">{articleSection.kicker}</p><h2>{articleSection.title}</h2></div><p>{articleSection.intro}</p></div>
        <div className="home-article-grid">
          {articleEntries.map(([slug,article],index)=>{
            const translated = getArticleCopy(slug,language);
            return <a href={withLanguage(`/articles/${slug}`,language)} key={slug} className="home-article-card"><span>ARTICLE / 0{index+1}</span><h3>{translated.title}</h3><p>{translated.description}</p><b>{homepageUi[language].readArticle} ↗</b></a>;
          })}
        </div>
      </section>
      <section className="home-faq" id="faq">
        <div className="home-faq-intro"><p className="eyebrow">{faqSection.kicker}</p><h2>{faqSection.title}</h2><p>{faqSection.intro}</p></div>
        <div className="home-faq-grid">
          {faqCards.map((item,index)=><a href={withLanguage("/faq",language)} key={`${item.number}-${item.title}`} className="home-faq-card"><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><b>{homepageUi[language].openFaq} ↗</b></a>)}
        </div>
      </section>
      <Footer prefix={prefix} language={language} onLanguageChange={setLanguage} />
    </main>
  );
}
