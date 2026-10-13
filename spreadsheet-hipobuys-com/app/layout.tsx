import type { Metadata } from "next";
import Script from "next/script";
import { headers } from "next/headers";
import "./globals.css";
import AnalyticsEvents from "./components/AnalyticsEvents";
import { baseUrl,isLang,localPath,t } from "./i18n";
export const metadata:Metadata={metadataBase:new URL(baseUrl),robots:{index:true,follow:true},icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default async function RootLayout({children}:Readonly<{children:React.ReactNode}>) {
  const value=(await headers()).get("x-hipo-language")||"en";
  const lang=isLang(value)?value:"en";
  const schema={"@context":"https://schema.org","@type":"WebSite",name:"Hipo Index",url:baseUrl+localPath("/",lang),inLanguage:lang,description:t("Independent Hipobuy spreadsheet guide.",lang)};
  return <html lang={lang}><body data-language={lang}><Script src="https://www.googletagmanager.com/gtag/js?id=G-VWLN1VNXX0" strategy="afterInteractive"/><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VWLN1VNXX0');`}</Script><AnalyticsEvents/>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></body></html>;
}
