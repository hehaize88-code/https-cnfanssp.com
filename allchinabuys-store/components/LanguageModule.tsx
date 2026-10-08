"use client";
const languages = [["en", "English"], ["de", "Deutsch"], ["fr", "Français"], ["es", "Español"], ["it", "Italiano"], ["pl", "Polski"]];
export function LanguageProvider({ children }: { children: React.ReactNode }) { return children; }
export function LanguageSwitcher() {
  return <label className="language-select"><span className="sr-only">Language</span><select id="site-language" defaultValue="en" aria-label="Language" onChange={(event) => {
    const language = event.target.value;
    const path = window.location.pathname.replace(/^\/(de|fr|es|it|pl)(?=\/|$)/, "") || "/";
    window.location.assign((language === "en" ? path : `/${language}${path === "/" ? "/" : path}`) + window.location.search + window.location.hash);
  }}>{languages.map(([code, label]) => <option key={code} value={code}>{label}</option>)}</select></label>;
}
