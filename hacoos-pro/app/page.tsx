import { SitePage } from "./site-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://hacoos.pro/",
    languages: {
      en: "https://hacoos.pro/",
      de: "https://hacoos.pro/de/",
      fr: "https://hacoos.pro/fr/",
      es: "https://hacoos.pro/es/",
      it: "https://hacoos.pro/it/",
      "x-default": "https://hacoos.pro/",
    },
  },
};

export default function Home() {
  return <SitePage locale="en" pageKey="home" />;
}
