export const languages = ["en", "de", "fr", "es", "it"] as const;
export type Lang = typeof languages[number];
export const origin = "https://findqcs.net";
export function basePath(path: string) {
  return path.replace(/^\/(?:en|de|fr|es|it)(?=\/|$)/, "") || "/";
}
export function localizedPath(path: string, lang: Lang) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const base = basePath(path);
  return lang === "en" ? base : `/${lang}${base}`;
}
export function languageAlternates(path: string) {
  return Object.fromEntries([...languages.map(lang => [lang, origin + localizedPath(path, lang)]), ["x-default", origin + basePath(path)]]);
}
export function translateText(value: string, messages: Record<string, string>) {
  const key = value.trim().replace(/\s+/g, " ");
  const translation = messages[key];
  if (!translation) return value;
  return (value.match(/^\s*/)?.[0] || "") + translation + (value.match(/\s*$/)?.[0] || "");
}
