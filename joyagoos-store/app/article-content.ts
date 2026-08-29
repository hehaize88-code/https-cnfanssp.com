import { articles, type ArticleSlug } from "./article-data";
import { completeTranslations } from "./generated-translations";
import type { SiteLanguage } from "./i18n";

const routeVerificationCopy: Record<SiteLanguage, { title: string; description: string }> = {
  en: { title: "Joyagoo Product Route Verification: Keep Every Click Traceable", description: "Verify Joyagoo product routes by checking live status, product identity, options, preview consistency and destination before ordering." },
  zh: { title: "Joyagoo 商品路径核验：让每次点击都可追踪", description: "下单前核对 Joyagoo 商品路径的在线状态、商品身份、选项、预览图和最终目标页。" },
  de: { title: "Joyagoo-Produktrouten prüfen: Jeden Klick nachvollziehbar halten", description: "Prüfen Sie Live-Status, Produktidentität, Optionen, Vorschaubild und Zielseite einer Joyagoo-Produktroute vor der Bestellung." },
  pl: { title: "Weryfikacja tras produktów Joyagoo: kontroluj każdy klik", description: "Przed zamówieniem sprawdź status strony, tożsamość produktu, opcje, zgodność podglądu i miejsce docelowe." },
  es: { title: "Verificación de rutas de producto Joyagoo: cada clic bajo control", description: "Comprueba el estado, la identidad, las opciones, la vista previa y el destino de una ruta de producto antes de comprar." },
  it: { title: "Verifica delle rotte prodotto Joyagoo: ogni clic tracciabile", description: "Prima dell’ordine verifica stato, identità del prodotto, opzioni, coerenza dell’anteprima e destinazione." },
  fr: { title: "Vérification des routes produit Joyagoo : chaque clic reste traçable", description: "Avant l’achat, vérifiez l’état, l’identité, les options, l’aperçu et la destination de chaque route produit." },
  pt: { title: "Verificação de rotas de produto Joyagoo: cada clique rastreável", description: "Antes de encomendar, confirme o estado, a identidade, as opções, a pré-visualização e o destino da rota de produto." },
  ro: { title: "Verificarea rutelor de produs Joyagoo: fiecare clic rămâne trasabil", description: "Înainte de comandă, verifică starea, identitatea, opțiunile, imaginea și destinația fiecărei rute de produs." },
  sv: { title: "Verifiera Joyagoo-produktrutter: gör varje klick spårbart", description: "Kontrollera aktuell status, produktidentitet, alternativ, förhandsbild och destination före beställning." },
};

const buyerFacingReplacements: Record<Exclude<SiteLanguage, "en">, [RegExp, string][]> = {
  zh: [[/SEO/gi, "买家信息"], [/搜索引擎/g, "访客"], [/关键词/g, "重复表述"]],
  de: [[/SEO/gi, "Käuferinformation"], [/Suchmaschinen/gi, "Besucher"], [/Schlüsselw(?:ort|örter|örtern)/gi, "Wiederholungen"]],
  pl: [[/SEO/gi, "informacja dla kupującego"], [/wyszukiwar(?:ek|ki)/gi, "odwiedzających"], [/słow(?:o|a|em) kluczow(?:e|ym)/gi, "powtórzenia"]],
  es: [[/SEO/gi, "información para compradores"], [/motores? de búsqueda/gi, "visitantes"], [/palabras? clave/gi, "repeticiones"]],
  it: [[/SEO/gi, "informazioni per l’acquirente"], [/motori? di ricerca/gi, "visitatori"], [/parol[ae] chiave/gi, "ripetizioni"]],
  fr: [[/SEO/gi, "information acheteur"], [/moteurs? de recherche/gi, "visiteurs"], [/mots?-clés?/gi, "répétitions"]],
  pt: [[/SEO/gi, "informação para compradores"], [/(?:motores?|mecanismos?) de pesquisa/gi, "visitantes"], [/palavras?-chave/gi, "repetições"]],
  ro: [[/SEO/gi, "informații pentru cumpărători"], [/motoarele? de căutare/gi, "vizitatori"], [/cuvinte? cheie/gi, "repetări"]],
  sv: [[/SEO/gi, "köparinformation"], [/sökmotor(?:er|erna)?/gi, "besökare"], [/nyckelord/gi, "upprepningar"]],
};

export function buyerFacingText(text: string, language: SiteLanguage): string {
  if (language === "en") return text;
  return buyerFacingReplacements[language].reduce((value, [pattern, replacement]) => value.replace(pattern, replacement), text);
}

export function getArticleCopy(slug: ArticleSlug, language: SiteLanguage) {
  const source = language === "en" ? articles[slug] : completeTranslations[language].articles[slug];
  const override = slug === "joyagoo-link-verification-guide" ? routeVerificationCopy[language] : null;
  return {
    ...source,
    title: override?.title || source.title,
    description: override?.description || source.description,
  };
}
