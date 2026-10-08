"use client";
import { usePathname } from "next/navigation";
import { languages, localizedPath } from "../i18n/paths";
import { useLanguage } from "./language";
export default function LanguageLinks() {
  const path = usePathname() || "/";
  const current = useLanguage();
  return <nav className="language-links" aria-label="Language">
    {languages.map(lang => <a key={lang} href={localizedPath(path,lang)} hrefLang={lang} lang={lang} aria-current={lang===current?"page":undefined}>{lang.toUpperCase()}</a>)}
  </nav>;
}
