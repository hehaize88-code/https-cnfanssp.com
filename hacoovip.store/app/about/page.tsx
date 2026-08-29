import { EnglishTrustPage, trustMetadata } from "@/components/english-trust-page";
export const metadata = trustMetadata("about");
export default function Page() { return <EnglishTrustPage route="about" />; }
