"use client";

import { articles } from "./article-data";
import { Footer, Header, locales, localizedSections, type Locale } from "./site-data";
import { withLanguage, type SiteLanguage } from "./i18n";
import { commonUi } from "./full-translations";
import { useLanguage } from "./use-language";

const english = { kicker:"EDITORIAL DESK / SOURCE-BACKED", title:"Guides for decisions after the first click.", intro:"Long-form guides for QC evidence, parcel weight and keeping every spreadsheet route traceable.", read:"Read guide" };

export function ArticlesContent({ initialLocale = "en", prefix = "" }: { initialLocale?: SiteLanguage; prefix?: string }) {
  const { language, setLanguage } = useLanguage(initialLocale);
  const active = language === "en" ? undefined : language as Locale;
  const local = active ? localizedSections[active].articles : null;
  const articleEntries = Object.entries(articles);
  return <main>
    <Header prefix={prefix} locale={active} language={language} onLanguageChange={setLanguage} section="articles" />
    <section className="inner-hero"><p className="eyebrow">{local?.kicker || english.kicker}</p><h1>{local?.title || english.title}</h1><p>{local?.intro || english.intro}</p></section>
    <section className="article-list">{articleEntries.map(([slug, article], index) => <a href={withLanguage(`/articles/${slug}`, language)} key={slug}><span>0{index + 1} / {active ? commonUi[active].guideLabel : "GUIDE"}</span><h2>{local?.blocks[index] || article.title}</h2><p>{local?.intro || article.description}</p><b>{active ? `${article.read.match(/\d+/)?.[0]} ${commonUi[active].minutes}` : article.read} · {active ? locales[active].read : english.read} ↗</b></a>)}</section>
    <Footer prefix={prefix} language={language} onLanguageChange={setLanguage} section="articles" />
  </main>;
}
