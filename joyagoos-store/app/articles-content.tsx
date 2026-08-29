"use client";

import { articles } from "./article-data";
import { Footer, Header, locales, localizedSections, type Locale } from "./site-data";
import { withLanguage, type SiteLanguage } from "./i18n";
import { commonUi } from "./full-translations";
import { useLanguage } from "./use-language";
import { getArticleCopy } from "./article-content";
import { localizedPath, SITE_URL } from "./seo";

const english = { kicker:"EDITORIAL DESK / SOURCE-BACKED", title:"Guides for decisions after the first click.", intro:"Long-form guides for QC evidence, parcel weight and keeping product routes traceable.", read:"Read guide" };

export function ArticlesContent({ initialLocale = "en", prefix = "" }: { initialLocale?: SiteLanguage; prefix?: string }) {
  const { language, setLanguage } = useLanguage(initialLocale);
  const active = language === "en" ? undefined : language as Locale;
  const local = active ? localizedSections[active].articles : null;
  const articleEntries = Object.entries(articles);
  const breadcrumb = {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[
    {"@type":"ListItem",position:1,name:"Home",item:`${SITE_URL}${localizedPath("/",initialLocale)}`},
    {"@type":"ListItem",position:2,name:initialLocale === "en" ? "Articles" : localizedSections[initialLocale as Locale].articles.title,item:`${SITE_URL}${localizedPath("/articles",initialLocale)}`},
  ]};
  return <main>
    <Header prefix={prefix} locale={active} language={language} onLanguageChange={setLanguage} section="articles" />
    <section className="inner-hero"><p className="eyebrow">{local?.kicker || english.kicker}</p><h1>{local?.title || english.title}</h1><p>{local?.intro || english.intro}</p></section>
    <section className="article-list">{articleEntries.map(([slug, article], index) => { const translated=getArticleCopy(slug as keyof typeof articles,language); return <a href={withLanguage(`/articles/${slug}`, language)} key={slug}><span>0{index + 1} / {active ? commonUi[active].guideLabel : "GUIDE"}</span><h2>{translated.title}</h2><p>{translated.description}</p><b>{active ? `${article.read.match(/\d+/)?.[0]} ${commonUi[active].minutes}` : article.read} · {active ? locales[active].read : english.read} ↗</b></a>; })}</section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb).replace(/</g,"\\u003c")}} />
    <Footer prefix={prefix} language={language} onLanguageChange={setLanguage} section="articles" />
  </main>;
}
