import { SitePage } from "./site-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hacoo Product Link Atlas: IDs, Routes & Verification",
  description: "Check current Hacoo product IDs, matching first images, destination routes, variants and category paths before opening a listing.",
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
    title: "Hacoo Product Link Atlas: IDs, Routes & Verification",
    description: "Check current Hacoo product IDs, matching first images, destination routes, variants and category paths.",
    url: "https://hacoos.store/",
    images: ["/hacoo-logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Hacoo Product Link Atlas: IDs, Routes & Verification",
    description: "Check current Hacoo product IDs, matching first images, destination routes, variants and category paths.",
    images: ["/hacoo-logo.png"],
  },
};

export default function Home() {
  return <SitePage locale="en" pageKey="home" />;
}
