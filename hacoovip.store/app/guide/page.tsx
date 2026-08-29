import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "How Hacoo Works — Official App Facts & Guide", description: "Learn what Hacoo officially says the app does, what Google Play confirms, how independent spreadsheets differ, and where to get support.", alternates: { canonical: "/guide", languages: languageAlternates("guide") } };
export default function Page(){ return <ContentView page="guide" />; }
