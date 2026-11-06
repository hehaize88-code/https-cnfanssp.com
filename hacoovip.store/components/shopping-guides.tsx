import Link from "next/link";
import { translate } from "@/lib/i18n";
import { hrefFor, type Locale } from "@/lib/site-data";

const guides = [
  ["Shipping cost", "articles/hacoo-shipping-cost"],
  ["Football shirt sizes", "articles/hacoo-football-shirts-sizing"],
  ["Clothing measurements", "articles/hacoo-clothing-finds"],
  ["Delivery times", "shipping"],
] as const;

export function ShoppingGuides({ locale }: { locale: Locale }) {
  const tx = (value: string) => translate(locale, value);
  return <nav className="shopping-guides" aria-label={tx("Plan your next purchase")}>
    <strong>{tx("Plan your next purchase")}</strong>
    <div>{guides.map(([label, path]) => <Link key={path} href={hrefFor(locale, path)}>{tx(label)} <span aria-hidden="true">→</span></Link>)}</div>
  </nav>;
}
