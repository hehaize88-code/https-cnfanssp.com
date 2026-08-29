import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hacoo Product-Route Selection", description: "A compact selection with matching lead images, transparent categories and approximate USD guide prices to recheck on the live destination.", alternates: { canonical: "/finds", languages: languageAlternates("finds") } };
export default function Page(){ return <ContentView page="finds" />; }
