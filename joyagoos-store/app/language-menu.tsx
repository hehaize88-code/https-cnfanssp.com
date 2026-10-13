import { languageChoices, languageLabels, withLanguage, type SiteLanguage } from "./i18n";

export function LanguageMenu({ language = "en", path = "/" }: { language?: SiteLanguage; path?: string }) {
  const label = language === "en" ? "EN / Language" : languageLabels[language];
  return <details className="language-menu"><summary>{label}</summary><div>{languageChoices.map(item => <a href={withLanguage(path,item)} hrefLang={item} lang={item} key={item} aria-current={language === item ? "true" : undefined}>{languageLabels[item]}</a>)}</div></details>;
}

export function FooterLanguages({ language = "en", path = "/" }: { language?: SiteLanguage; path?: string }) {
  return <>{languageChoices.map(item => <a href={withLanguage(path,item)} hrefLang={item} lang={item} key={item} aria-current={language === item ? "true" : undefined}>{item === "zh" ? "中文" : item.toUpperCase()}</a>)}</>;
}
