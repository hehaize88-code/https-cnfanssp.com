import { Header, Footer } from "./site-data";
import Link from "next/link";
export default function NotFound(){return <main><Header/><section className="inner-hero"><p className="eyebrow">404 / ROUTE NOT FOUND</p><h1>This product path moved.</h1><p>Return to the Joyagoo spreadsheet hub or open the live product catalog to choose another route.</p><div className="inner-actions"><Link href="/">Return home</Link><a href="https://www.cnfanssp.com/AllProducts/">Browse products ↗</a></div></section><Footer/></main>}
