import CatalogHome from "./ui/CatalogHome";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://acbuys.shop/#organization", name: "ACBuy Finds", url: "https://acbuys.shop/", logo: { "@type": "ImageObject", url: "https://acbuys.shop/acbuy-logo.png" } },
      { "@type": "WebSite", "@id": "https://acbuys.shop/#website", name: "ACBuy Finds & QC Guide", url: "https://acbuys.shop/", publisher: { "@id": "https://acbuys.shop/#organization" }, inLanguage: "en" },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><CatalogHome /></>;
}
