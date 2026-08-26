import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div><div className="brand footer-brand"><img src="/allchinabuy-logo.png" alt="AllChinaBuy" className="footer-logo" /></div><p>An independent product discovery and shopping education resource. We do not sell products or process payments.</p></div>
        <div><strong>Explore</strong><Link href="/spreadsheet">Spreadsheet</Link><Link href="/finds">Product finds</Link><Link href="/articles">SEO articles</Link></div>
        <div><strong>Learn</strong><Link href="/guides/qc-checks">QC checks</Link><Link href="/guides/shipping">Shipping</Link><Link href="/faq">FAQ</Link></div>
        <div><strong>Live catalog</strong><a href="https://www.cnfanssp.com/shoes/" target="_blank" rel="noopener noreferrer">Shoes</a><a href="https://www.cnfanssp.com/hoodies-sweaters/" target="_blank" rel="noopener noreferrer">Hoodies</a><a href="https://www.cnfanssp.com/accessories/" target="_blank" rel="noopener noreferrer">Accessories</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 AllChinaBuy Spreadsheet</span><span>Product availability, prices and shipping estimates can change. Verify before ordering.</span></div>
    </footer>
  );
}
