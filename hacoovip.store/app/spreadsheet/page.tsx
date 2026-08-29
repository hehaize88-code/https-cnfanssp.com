import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hacoo Spreadsheet 2026 — Visual Product Links", description: "An independent visual Hacoo spreadsheet with image-matched product links, exact destination routes and a clear explanation that it is not an official Hacoo feature.", alternates: { canonical: "/spreadsheet", languages: languageAlternates("spreadsheet") } };
export default function Page(){ return <ContentView page="spreadsheet" />; }
