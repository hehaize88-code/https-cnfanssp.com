import { SitePage } from "./site-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://hacoos.store/",
    languages: {
      en: "https://hacoos.store/",
      de: "https://hacoos.store/de",
      fr: "https://hacoos.store/fr",
      es: "https://hacoos.store/es",
      it: "https://hacoos.store/it",
      "x-default": "https://hacoos.store/",
    },
  },
};

export default function Home() {
  return <SitePage locale="en" pageKey="home" />;
}
