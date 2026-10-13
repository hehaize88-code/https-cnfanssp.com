import { pageMetadata,renderPage } from "./site-pages";
export const metadata=pageMetadata("/","en");
export default function Page(){return renderPage("/","en");}
