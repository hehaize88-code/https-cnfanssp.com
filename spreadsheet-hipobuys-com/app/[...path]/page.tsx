import { notFound } from "next/navigation";
import { resolvePage,pageMetadata,renderPage } from "../site-pages";
type Props={params:Promise<{path:string[]}>};
export async function generateMetadata({params}:Props) {
  const page=resolvePage((await params).path);
  return page?pageMetadata(page.path,page.lang):{title:"Page not found",robots:{index:false,follow:true}};
}
export default async function Page({params}:Props) {
  const page=resolvePage((await params).path);
  if(!page)notFound();
  return renderPage(page.path,page.lang);
}
