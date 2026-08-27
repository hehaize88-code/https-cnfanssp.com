"use client";

import { useLanguage } from "./LanguageProvider";

export default function LocalizedText({ id, values, fallback }) {
  const { t } = useLanguage();
  const localizedValues = Object.fromEntries(
    Object.entries(values || {}).map(([name, value]) => [
      name,
      value && typeof value === "object" && value.id ? t(value.id) : value,
    ]),
  );
  const translated = t(id, localizedValues);
  return translated === id && fallback !== undefined ? fallback : translated;
}
