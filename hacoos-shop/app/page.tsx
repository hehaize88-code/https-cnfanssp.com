import { HomeContent } from "./home-content";
import { resolveLanguage } from "./i18n";

export default async function Home({ searchParams }:{ searchParams:Promise<{lang?:string|string[]}> }) {
  const query = await searchParams;
  return <HomeContent locale={resolveLanguage(query.lang)} />;
}
