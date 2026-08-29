import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hacoo Finds 2026 — Image-Matched Product Links", description: "Browse selected Hacoo finds with matching lead images, transparent categories, approximate USD guide prices and exact live product routes.", alternates: { canonical: "/finds", languages: languageAlternates("finds") } };
export default function Page(){ return <ContentView page="finds" />; }
