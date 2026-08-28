import { SitePage } from "./site-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hacoo UK Guide: Delivery, Sizing & External Routes",
  description: "Independent Hacoo UK guide to delivery estimates, UK/EU sizing, externally matched product routes, review-photo evidence and returns.",
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
    title: "Hacoo UK Guide: Delivery, Sizing & External Routes",
    description: "UK delivery, UK/EU sizing, review-photo evidence and externally matched catalogue routes in one independent guide.",
    url: "https://hacoos.uk/",
    images: ["/hacoo-logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Hacoo UK Guide: Delivery, Sizing & External Routes",
    description: "UK delivery, UK/EU sizing, review-photo evidence and externally matched catalogue routes in one independent guide.",
    images: ["/hacoo-logo.png"],
  },
};

export default function Home() {
  return <SitePage locale="en" pageKey="home" />;
}
