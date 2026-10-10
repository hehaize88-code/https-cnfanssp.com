import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoovip.com"),
  title: "Hacoo Product Comparison & Decision Guides | Hacoo VIP",
  description: "Independent Hacoo product comparison hub with matched shortlists, decision criteria, QC evidence, delivery facts and returns guidance.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}<Script src="https://www.googletagmanager.com/gtag/js?id=G-TC65EF1C8T" strategy="afterInteractive"/><Script id="ga4-hacoovip" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-TC65EF1C8T');
document.addEventListener('click',function(event){
  var link=event.target instanceof Element?event.target.closest('a[href]'):null;
  if(!link)return;
  var target=new URL(link.href,location.origin);
  if(!['www.cnfanshp.com','cnfanshp.com'].includes(target.hostname))return;
  var placement=link.closest('.product-grid')?'product':link.closest('.category-grid')?'category':link.closest('.header')?'header':'article';
  gtag('event','main_outbound_click',{destination_path:target.pathname,placement:placement,page_language:document.documentElement.lang,transport_type:'beacon'});
});
document.addEventListener('submit',function(event){
  var form=event.target;
  if(!(form instanceof HTMLFormElement)||!form.matches('form.search'))return;
  gtag('event','catalog_search_submit',{placement:form.classList.contains('compact')?'spreadsheet':'home',page_language:document.documentElement.lang,transport_type:'beacon'});
});`}</Script></body></html>;
}
