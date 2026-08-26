"use client";

import { languagePath } from "../lib/routing";
import { useLanguage } from "./LanguageProvider";

export default function LocalizedLink({ href, children, ...props }) {
  const { language } = useLanguage();
  const destination = typeof href === "string" && href.startsWith("/")
    ? languagePath(href, language)
    : href;

  return <a href={destination} {...props}>{children}</a>;
}
