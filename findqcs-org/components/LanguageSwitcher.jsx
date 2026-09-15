"use client";

import { GlobeIcon } from "./Icons";
import { LANGUAGE_OPTIONS } from "../lib/i18n";
import { useLanguage } from "./LanguageProvider";
import { usePathname } from "next/navigation";
import { NEW_ENGLISH_ONLY_ARTICLE_SLUGS } from "../lib/englishOnlyArticles";
import { sendAnalyticsEvent } from "./Analytics";

export default function LanguageSwitcher({ mobile = false }) {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const englishOnly = NEW_ENGLISH_ONLY_ARTICLE_SLUGS.some((slug) => pathname.endsWith(`/articles/${slug}`));
  const options = englishOnly ? LANGUAGE_OPTIONS.filter(({ code }) => code === "en") : LANGUAGE_OPTIONS;

  return (
    <label className={`language-switcher ${mobile ? "mobile" : ""}`}>
      <GlobeIcon size={16} />
      <span className="sr-only">{t("language.label")}</span>
      <select
        value={language}
        onChange={(event) => {
          sendAnalyticsEvent("language_change", { language_from: language, language_to: event.target.value });
          setLanguage(event.target.value);
        }}
        aria-label={t("language.label")}
      >
        {options.map((option) => (
          <option value={option.code} key={option.code}>{option.label}</option>
        ))}
      </select>
      <span className="language-chevron" aria-hidden="true" />
    </label>
  );
}
