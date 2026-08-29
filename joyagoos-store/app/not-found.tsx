import { Header, Footer } from "./site-data";
import Link from "next/link";
export const metadata = { title:"Page Not Found | Joyagoos Store", robots:{index:false,follow:true} };
export default function NotFound(){return <main><Header/><section className="inner-hero"><p className="eyebrow">404 / ROUTE NOT FOUND</p><h1>This product path moved.</h1><p>Return to the Joyagoo product directory or open the live product catalog to choose another route.</p><div className="inner-actions"><Link href="/">Return home</Link><a href="https://www.cnfanssp.com/AllProducts/" target="_blank" rel="noreferrer">Browse products ↗</a></div></section><Footer/></main>}
