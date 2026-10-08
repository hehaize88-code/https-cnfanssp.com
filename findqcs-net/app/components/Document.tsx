"use client";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function Document({children}: {children: ReactNode}) {
  const pathname = usePathname() || "/";
  const lang = pathname.match(/^\/(de|fr|es|it)(?:\/|$)/)?.[1] || "en";
  return <html lang={lang}>{children}</html>;
}
