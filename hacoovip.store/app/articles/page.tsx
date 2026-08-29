import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hacoo Research, Reviews & Shopping Guides 2026", description: "Six source-led Hacoo articles covering the official app, reviews, shipping, returns, spreadsheets, QC photos and sizing.", alternates: { canonical: "/articles", languages: languageAlternates("articles") } };
export default function Page(){ return <ContentView page="articles" />; }
