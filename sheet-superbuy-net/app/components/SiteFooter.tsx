import Link from "next/link";
import { navItems } from "../data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <div className="brand footer-brand"><img className="brand-logo" src="/superbuy-logo.png" alt="Superbuy" width="180" height="35" /><small>Independent index</small></div>
          <p>An independent product research resource. We do not sell products, process payments or represent the official platform.</p>
        </div>
        <div className="footer-links">
          {navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Superbuy Spreadsheet Research</span>
        <span>Verify price, availability, seller details and shipping eligibility before ordering.</span>
      </div>
    </footer>
  );
}
