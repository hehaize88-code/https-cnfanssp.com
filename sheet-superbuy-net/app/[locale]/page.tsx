import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryExplorer } from "../components/CategoryExplorer";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const pages = {
  zh: { name: "简体中文", market: "中国及全球华语用户", eyebrow: "独立产品索引", title: "Superbuy 产品表格 2026", intro: "用更清晰的方式查找产品、对比美元参考价，并在下单前保留必要的质检步骤。搜索会直接跳转主站的对应结果。", guide: "查看英文购买指南", countries: "Superbuy 官方网站目前提供简体中文和英文界面，并面向 200 多个国家和地区提供服务。" },
  de: { name: "Deutsch", market: "Deutschland · Österreich · Schweiz", eyebrow: "Unabhängiger Produktindex", title: "Superbuy Produktliste 2026", intro: "Produkte übersichtlich finden, USD-Richtpreise vergleichen und wichtige QC-Prüfungen vor dem Versand festhalten. Die Suche führt direkt zu den Ergebnissen der Hauptseite.", guide: "Englische Einkaufsanleitung", countries: "Deutschland, Österreich und die Schweiz gehören zu den wichtigen europäischen Versandzielen auf der offiziellen Superbuy-Liste." },
  fr: { name: "Français", market: "France · Belgique · Suisse", eyebrow: "Index produit indépendant", title: "Tableau Superbuy 2026", intro: "Trouvez des produits plus clairement, comparez les prix indicatifs en USD et conservez les contrôles QC essentiels. La recherche ouvre directement les résultats du site principal.", guide: "Guide d’achat en anglais", countries: "La France, la Belgique et la Suisse figurent parmi les destinations européennes populaires indiquées par Superbuy." },
  es: { name: "Español", market: "España", eyebrow: "Índice independiente de productos", title: "Lista Superbuy 2026", intro: "Encuentra productos de forma clara, compara precios orientativos en USD y conserva las comprobaciones de control de calidad. La búsqueda abre los resultados del sitio principal.", guide: "Guía de compra en inglés", countries: "España aparece entre los destinos europeos populares del calculador oficial de envíos de Superbuy." },
  it: { name: "Italiano", market: "Italia", eyebrow: "Indice prodotti indipendente", title: "Elenco Superbuy 2026", intro: "Trova prodotti in modo ordinato, confronta prezzi indicativi in USD e conserva i controlli QC essenziali. La ricerca apre direttamente i risultati del sito principale.", guide: "Guida all’acquisto in inglese", countries: "L’Italia è inclusa tra le destinazioni europee popolari mostrate da Superbuy." },
  pt: { name: "Português", market: "Portugal", eyebrow: "Índice independente de produtos", title: "Lista Superbuy 2026", intro: "Encontre produtos com mais clareza, compare preços de referência em USD e mantenha as verificações de qualidade essenciais. A pesquisa abre os resultados do site principal.", guide: "Guia de compra em inglês", countries: "Portugal aparece entre os destinos europeus populares no calculador oficial de envios da Superbuy." },
  pl: { name: "Polski", market: "Polska", eyebrow: "Niezależny indeks produktów", title: "Lista Superbuy 2026", intro: "Wyszukuj produkty przejrzyście, porównuj orientacyjne ceny w USD i zachowuj najważniejsze kontrole QC. Wyszukiwanie otwiera wyniki bezpośrednio w witrynie głównej.", guide: "Poradnik zakupowy po angielsku", countries: "Polska znajduje się wśród popularnych europejskich kierunków w oficjalnym kalkulatorze wysyłki Superbuy." },
  nl: { name: "Nederlands", market: "Nederland · België", eyebrow: "Onafhankelijke productindex", title: "Superbuy productlijst 2026", intro: "Vind producten overzichtelijk, vergelijk USD-richtprijzen en bewaar belangrijke QC-controles. De zoekfunctie opent direct de resultaten op de hoofdsite.", guide: "Engelse koopgids", countries: "Nederland en België staan bij de populaire Europese bestemmingen in de officiële verzendcalculator van Superbuy." },
} as const;

type Locale = keyof typeof pages;

export function generateStaticParams() { return Object.keys(pages).map((locale) => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const page = pages[locale as Locale];
  if (!page) return {};
  return { title: page.title, description: page.intro, alternates: { canonical: `/${locale}` } };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const page = pages[locale as Locale];
  if (!page) notFound();
  return <>
    <SiteHeader locale={locale} />
    <main>
      <section className="resource-hero language-hero">
        <p className="eyebrow">{page.eyebrow} · {page.market}</p>
        <h1>{page.title}</h1>
        <p className="resource-intro">{page.intro}</p>
        <div className="resource-actions"><a className="button button-primary" href="#finds">{page.name}</a><Link className="button button-outline" href="/spreadsheet">{page.guide}</Link></div>
      </section>
      <section className="language-note"><b>{page.market}</b><p>{page.countries}</p></section>
      <CategoryExplorer locale={locale} />
    </main>
    <SiteFooter />
  </>;
}
