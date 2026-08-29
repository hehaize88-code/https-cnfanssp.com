"use client";

import { languageChoices, languageLabels, type SiteLanguage } from "./i18n";

export function LanguageMenu({ language = "en", onChange }: { language?: SiteLanguage; onChange?: (language:SiteLanguage)=>void }) {
  const label = language === "en" ? "EN / Language" : languageLabels[language];
  const choose = (next:SiteLanguage,event:React.MouseEvent<HTMLButtonElement>) => {
    onChange?.(next);
    event.currentTarget.closest("details")?.removeAttribute("open");
  };
  return <details className="language-menu"><summary>{label}</summary><div>{languageChoices.map((item) => <button type="button" key={item} aria-current={language === item ? "true" : undefined} onClick={(event)=>choose(item,event)}>{languageLabels[item]}</button>)}</div></details>;
}

export function FooterLanguages({ language = "en", onChange }: { language?: SiteLanguage; onChange?: (language:SiteLanguage)=>void }) {
  return <>{languageChoices.map((item) => <button type="button" key={item} aria-current={language === item ? "true" : undefined} onClick={()=>onChange?.(item)}>{item === "zh" ? "中文" : item.toUpperCase()}</button>)}</>;
}
