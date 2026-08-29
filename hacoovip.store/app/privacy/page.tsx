import { EnglishTrustPage, trustMetadata } from "@/components/english-trust-page";
export const metadata = trustMetadata("privacy");
export default function Page() { return <EnglishTrustPage route="privacy" />; }
