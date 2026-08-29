import type { Locale } from "./site-data";

export type SiteLanguage = Locale | "en";

export const languageLabels: Record<SiteLanguage, string> = {
  en: "English",
  zh: "中文（中国）",
  de: "Deutsch",
  pl: "Polski",
  es: "Español",
  it: "Italiano",
  fr: "Français",
  pt: "Português",
  ro: "Română",
  sv: "Svenska",
};

export const languageChoices = Object.keys(languageLabels) as SiteLanguage[];

export function isSiteLanguage(value: unknown): value is SiteLanguage {
  return typeof value === "string" && value in languageLabels;
}

export function resolveLanguage(value: unknown, fallback: SiteLanguage = "en"): SiteLanguage {
  const raw = Array.isArray(value) ? value[0] : value;
  return isSiteLanguage(raw) ? raw : fallback;
}

export function withLanguage(path: string, language: SiteLanguage): string {
  const joiner = path.includes("?") ? "&" : "?";
  return `${path}${joiner}lang=${language}`;
}
