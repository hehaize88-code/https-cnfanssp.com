"use client";

import { useEffect } from "react";

// The server sets the initial language; this keeps it accurate after client navigation.
export function LocaleLanguage({ locale }: { locale: string }) {
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  return null;
}
