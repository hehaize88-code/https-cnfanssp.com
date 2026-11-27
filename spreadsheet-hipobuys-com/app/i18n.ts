import { dictionaries } from "./ui-translations";
import additions from "./content/ui.json";
import extended from "./content/extended-ui.json";
import { isLang, languageTag, languages, legacyColumns, type Lang } from "./languages";
export { isLang, languages, languageNames, languageTag, type Lang } from "./languages";
export const baseUrl = "https://spreadsheet-hipobuys.com";

export function localPath(path: string, lang: Lang): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const first = path.slice(1).split(/[/?#]/, 1)[0];
  if (isLang(first)) return path;
  return lang === "en" ? path : `/${lang}${path === "/" ? "" : path}`;
}
const uiIndexes = new Map(extended.keys.map((key, i) => [key, i]));
const uiText: Partial<Record<Lang, string[]>> = extended.locales;
export function t(text: string, lang: Lang): string {
  if (lang === "en") return text;
  const key = text.trim();
  const column = legacyColumns[lang];
  const index = uiIndexes.get(key);
  const translated = (column === undefined ? undefined : (additions as Record<string, string[]>)[key]?.[column])
    || dictionaries[lang]?.[key] || (index === undefined ? undefined : uiText[lang]?.[index]);
  return translated ? text.replace(key, () => translated) : text;
}
export function languageAlternates(path: string) {
  return Object.fromEntries([...languages.map(lang => [languageTag(lang), baseUrl + localPath(path, lang)]), ["x-default", baseUrl + path]]);
}
