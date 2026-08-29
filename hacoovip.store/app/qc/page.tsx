import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hacoo Photo Evidence Checklist", description: "A practical checklist for reading product-photo evidence without turning images or reviews into guarantees.", alternates: { canonical: "/qc", languages: languageAlternates("qc") } };
export default function Page(){ return <ContentView page="qc" />; }
