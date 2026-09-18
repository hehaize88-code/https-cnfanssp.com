import { SitePage } from "./site-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Hacoo UK: Delivery, Sizing, Reviews & App Guide" },
  description: "Independent Hacoo UK guide to delivery times, tracking, returns, UK/EU sizing, the app and verified product links. Updated for 2026.",
  alternates: {
    canonical: "https://hacoos.uk/",
    languages: {
      en: "https://hacoos.uk/",
      de: "https://hacoos.uk/de",
      fr: "https://hacoos.uk/fr",
      es: "https://hacoos.uk/es",
      it: "https://hacoos.uk/it",
      "x-default": "https://hacoos.uk/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Hacoo UK Guide",
    title: "Hacoo UK: Delivery, Sizing, Reviews & App Guide",
    description: "UK delivery times, tracking, returns, sizing, app guidance and verified product-link research in one independent guide.",
    url: "https://hacoos.uk/",
    images: ["/hacoo-logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Hacoo UK: Delivery, Sizing, Reviews & App Guide",
    description: "UK delivery times, tracking, returns, sizing, app guidance and verified product-link research.",
    images: ["/hacoo-logo.png"],
  },
};

export default function Home() {
  return <SitePage locale="en" pageKey="home" />;
}
