import { ContentView } from "@/components/content-view";
import { languageAlternates } from "@/lib/site-data";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Hacoo App Facts FAQ", description: "Concise, dated answers about Hacoo app identity, public policies, independent product routes and evidence limits.", alternates: { canonical: "/faq", languages: languageAlternates("faq") } };
export default function Page(){ return <ContentView page="faq" />; }
