import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joyagoos.store"),
  title: "Joyagoo Spreadsheet 2026 | Verified Finds & Product Routes",
  description: "Browse Joyagoo spreadsheet finds, matched product pages, category paths, QC preparation and shipping guides in one independent discovery hub.",
  alternates: { canonical: "/", languages: { en: "/", zh: "/zh", de: "/de", pl: "/pl", es: "/es", it: "/it", fr: "/fr", pt: "/pt", ro: "/ro", sv: "/sv", "x-default": "/" } },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context":"https://schema.org", "@graph":[{ "@type":"WebSite", name:"Joyagoos Store", url:"https://joyagoos.store/", description:"Independent Joyagoo spreadsheet, finds, QC and shipping guide." },{ "@type":"Organization", name:"Joyagoos Store", url:"https://joyagoos.store/" }] };
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>;
}
