import type {ReactNode} from "react";
import {languages,type Lang} from "../site-data";

export default async function LanguageLayout({children,params}:{children:ReactNode;params:Promise<{lang:string}>}){
  const {lang:rawLang}=await params;
  const lang=(languages.includes(rawLang as Lang)?rawLang:"en") as Lang;
  return <><script dangerouslySetInnerHTML={{__html:`document.documentElement.lang=${JSON.stringify(lang)}`}}/><div lang={lang}>{children}</div></>;
}
