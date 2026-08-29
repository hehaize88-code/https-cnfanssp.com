import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hacoo QC Photos, Reviews & Product Checks", description: "A source-led Hacoo product checklist covering photos, review patterns, listing consistency and the official intellectual-property reporting route.", alternates: { canonical: "/qc", languages: languageAlternates("qc") } };
export default function Page(){ return <ContentView page="qc" />; }
