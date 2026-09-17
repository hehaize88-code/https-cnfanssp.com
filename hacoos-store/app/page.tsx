import { SitePage } from "./site-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Hacoo Product Links & Spreadsheet 2026 | Verified IDs" },
  description: "Browse current Hacoo product links by category, verify product IDs, compare source images and open the matching listing. Independent guide, updated for 2026.",
  alternates: {
    canonical: "https://hacoos.store/",
    languages: {
      en: "https://hacoos.store/",
      de: "https://hacoos.store/de/",
      fr: "https://hacoos.store/fr/",
      es: "https://hacoos.store/es/",
      it: "https://hacoos.store/it/",
      "x-default": "https://hacoos.store/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Hacoos Store",
    title: "Hacoo Product Links & Spreadsheet 2026 | Verified IDs",
    description: "Browse current Hacoo product links, verify product IDs and compare source images before opening a matching listing.",
    url: "https://hacoos.store/",
    images: ["/hacoo-logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Hacoo Product Links & Spreadsheet 2026 | Verified IDs",
    description: "Browse current Hacoo product links, verify product IDs and compare source images before opening a matching listing.",
    images: ["/hacoo-logo.png"],
  },
};

export default function Home() {
  return <SitePage locale="en" pageKey="home" />;
}
