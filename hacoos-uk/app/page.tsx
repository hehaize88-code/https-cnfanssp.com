import { SitePage } from "./site-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hacoo UK Product Links, Shipping & Buying Guide",
  description: "Find current Hacoo product links with matching images, then check QC, sizing, UK shipping and returns before you decide.",
  alternates: {
    canonical: "https://hacoos.uk/",
    languages: {
      en: "https://hacoos.uk/",
      de: "https://hacoos.uk/de/",
      fr: "https://hacoos.uk/fr/",
      es: "https://hacoos.uk/es/",
      it: "https://hacoos.uk/it/",
      "x-default": "https://hacoos.uk/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Hacoo UK Guide",
    title: "Hacoo UK Product Links, Shipping & Buying Guide",
    description: "Find current product links with matching images, QC, sizing, UK shipping and returns guidance.",
    url: "https://hacoos.uk/",
    images: ["/hacoo-logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Hacoo UK Product Links, Shipping & Buying Guide",
    description: "Find current product links with matching images, QC, sizing, UK shipping and returns guidance.",
    images: ["/hacoo-logo.png"],
  },
};

export default function Home() {
  return <SitePage locale="en" pageKey="home" />;
}
