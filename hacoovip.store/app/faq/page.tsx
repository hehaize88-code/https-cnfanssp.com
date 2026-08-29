import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hacoo Facts 2026 — App, Shipping, Reviews & Links", description: "Source-checked facts about the Hacoo app, spreadsheet term, Android downloads, shipping ranges, reviews, data safety and independence.", alternates: { canonical: "/faq", languages: languageAlternates("faq") } };
export default function Page(){ return <ContentView page="faq" />; }
