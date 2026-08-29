import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hacoo Product-Route Index", description: "Independent visual product routes with image-matched destinations and a clear explanation that this is not an official Hacoo feature.", alternates: { canonical: "/spreadsheet", languages: languageAlternates("spreadsheet") } };
export default function Page(){ return <ContentView page="spreadsheet" />; }
