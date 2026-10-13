"use client";
import { languages, languageNames, localPath, t, type Lang } from "../i18n";
export function LanguageSwitcher({lang,path}:{lang:Lang;path:string}) {
  return <label className="language-switcher"><span className="sr-only">{t("Language",lang)}</span><select value={lang} onChange={event => {
    window.location.assign(localPath(path,event.target.value as Lang) + window.location.search + window.location.hash);
  }} aria-label={t("Language",lang)}>{languages.map(code=><option key={code} value={code}>{code.toUpperCase()} · {languageNames[code]}</option>)}</select></label>;
}
