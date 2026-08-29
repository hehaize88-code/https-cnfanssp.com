import type { Metadata } from "next";
import { languageAlternates, type TrustRouteName } from "@/lib/site-data";
import { getTrustPage } from "@/lib/trust-pages";
import { ContentView } from "./content-view";

export function trustMetadata(route: TrustRouteName): Metadata {
  const content = getTrustPage("en", route);
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: `/${route}`, languages: languageAlternates(route) },
    openGraph: { title: content.title, description: content.description, type: "website" },
  };
}

export function EnglishTrustPage({ route }: { route: TrustRouteName }) {
  return <ContentView page={route} />;
}
