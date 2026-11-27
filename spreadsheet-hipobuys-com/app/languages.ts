export const languageNames = {
  en: "English", de: "Deutsch", fr: "Français", es: "Español", it: "Italiano",
  nl: "Nederlands", pt: "Português", pl: "Polski", ro: "Română", sv: "Svenska",
  zh: "简体中文", da: "Dansk", fi: "Suomi", el: "Ελληνικά", cs: "Čeština",
  hu: "Magyar", bg: "Български", sk: "Slovenčina", hr: "Hrvatski", ja: "日本語",
  ko: "한국어", vi: "Tiếng Việt", th: "ไทย", id: "Bahasa Indonesia",
} as const;

export type Lang = keyof typeof languageNames;
export const languages = Object.keys(languageNames) as Lang[];
export const languageTag = (lang: Lang) => lang === "zh" ? "zh-Hans" : lang;
export function isLang(value: string): value is Lang {
  return Object.prototype.hasOwnProperty.call(languageNames, value);
}

// Existing editorial arrays are in their original publication order.
export const legacyColumns: Partial<Record<Lang, number>> = { en: 0, de: 1, es: 2, fr: 3, it: 4 };
