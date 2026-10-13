import { dictionaries } from "./ui-translations";
import additions from "./content/ui.json";
export const languages = ["en", "de", "es", "fr", "it"] as const;
export type Lang = typeof languages[number];
export const baseUrl = "https://spreadsheet-hipobuys.com";
export const languageNames = { en:"English", de:"Deutsch", es:"Español", fr:"Français", it:"Italiano" };
export function isLang(value: string): value is Lang { return languages.includes(value as Lang); }
export function localPath(path: string, lang: Lang): string {
  if (!path.startsWith("/") || path.startsWith("//") || /^\/(de|es|fr|it)(\/|$)/.test(path)) return path;
  return lang === "en" ? path : `/${lang}${path === "/" ? "" : path}`;
}
export function t(text: string, lang: Lang): string {
  if (lang === "en") return text;
  const key = text.trim();
  const extra = additions as Record<string, string[]>;
  const translated = extra[key]?.[languages.indexOf(lang)] || dictionaries[lang][key];
  return translated ? text.replace(key, translated) : text;
}
export function languageAlternates(path: string) {
  return Object.fromEntries([...languages.map(lang => [lang, baseUrl + localPath(path, lang)]), ["x-default", baseUrl + path]]);
}
