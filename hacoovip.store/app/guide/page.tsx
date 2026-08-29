import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hacoo App Facts & Research Guide", description: "Current Hacoo app identity and public facts, clearly separated from this independent product-route guide.", alternates: { canonical: "/guide", languages: languageAlternates("guide") } };
export default function Page(){ return <ContentView page="guide" />; }
