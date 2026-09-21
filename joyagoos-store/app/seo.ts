import type { Metadata } from "next";
import type { SiteLanguage } from "./i18n";

export const SITE_URL = "https://joyagoos.store";
export const SITE_NAME = "Joyagoos Store";
export const SOCIAL_IMAGE = "/joyagoo-logo.png";
export const allLanguages: SiteLanguage[] = ["en", "zh", "de", "pl", "es", "it", "fr", "pt", "ro", "sv"];

const openGraphLocales: Record<SiteLanguage, string> = {
  en: "en_US",
  zh: "zh_CN",
  de: "de_DE",
  pl: "pl_PL",
  es: "es_ES",
  it: "it_IT",
  fr: "fr_FR",
  pt: "pt_PT",
  ro: "ro_RO",
  sv: "sv_SE",
};

export function localizedPath(path: string, language: SiteLanguage): string {
  const cleanPath = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return language === "en" ? cleanPath || "/" : `/${language}${cleanPath}`;
}
export function languageAlternates(path: string, availableLanguages: SiteLanguage[] = allLanguages) {
  return Object.fromEntries([
    ...availableLanguages.map((language) => [language, localizedPath(path, language)]),
    ["x-default", localizedPath(path, "en")],
  ]);
}

export function buildPageMetadata({
  title,
  description,
  path,
  language = "en",
  article = false,
  availableLanguages = allLanguages,
}: {
  title: string;
  description: string;
  path: string;
  language?: SiteLanguage;
  article?: boolean;
  availableLanguages?: SiteLanguage[];
}): Metadata {
  const canonical = localizedPath(path, language);
  return {
    title,
    description,
    alternates: { canonical, languages: languageAlternates(path, availableLanguages) },
    openGraph: {
      type: article ? "article" : "website",
      siteName: SITE_NAME,
      title,
      description,
      url: canonical,
      locale: openGraphLocales[language],
      alternateLocale: availableLanguages.filter((item) => item !== language).map((item) => openGraphLocales[item]),
      images: [{ url: SOCIAL_IMAGE, width: 768, height: 235, alt: "JoyaGoo" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}
