import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { languages, type Lang } from "@/lib/site-data";

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

const validLang = (value: string): value is Lang => languages.includes(value as Lang);

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoovip.pro"),
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LanguageLayout({ children, params }: Props) {
  const { lang } = await params;
  if (!validLang(lang)) notFound();

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
