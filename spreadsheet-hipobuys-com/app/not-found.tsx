import {headers} from "next/headers";
import {isLang,localPath,t} from "./i18n";
export default async function NotFound() {
  const value=(await headers()).get('x-hipo-language')||'en';
  const lang=isLang(value)?value:'en';
  return <main className="not-found"><span>404</span><h1>{t("This product route is not in the index.",lang)}</h1><p>{t("Return to the spreadsheet or search the complete product catalog.",lang)}</p><div><a href={localPath('/',lang)}>{t("Back to Hipo Index",lang)}</a><a href="https://cnfanssp.com/AllProducts/">{t("Search catalog ↗",lang)}</a></div></main>;
}
