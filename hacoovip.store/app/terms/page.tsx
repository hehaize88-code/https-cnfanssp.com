import { EnglishTrustPage, trustMetadata } from "@/components/english-trust-page";
export const metadata = trustMetadata("terms");
export default function Page() { return <EnglishTrustPage route="terms" />; }
