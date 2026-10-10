import { SitePage } from "./site-page";
import { pageMeta, locales, routeFor } from "./site-data";
import type { Metadata } from "next";
const meta = pageMeta.home.en;
export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: {
    canonical: "https://hacoos.uk/",
    languages: Object.fromEntries([...locales.map((locale) => [locale, `https://hacoos.uk${routeFor(locale, "home")}`]), ["x-default", "https://hacoos.uk/"]]),
  },
  openGraph: { type: "website", siteName: "Hacoos UK", title: meta.title, description: meta.description, url: "https://hacoos.uk/", images: ["/hacoo-logo.png"] },
  twitter: { card: "summary", title: meta.title, description: meta.description, images: ["/hacoo-logo.png"] },
};
export default function Home() { return <SitePage locale="en" pageKey="home" />; }
