"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { localPath, t, type Lang } from "../i18n";
import { hashImage, type ImageSignature } from "../catalog/image-hash";
import { usePrices } from "./Currency";

type Item = {
  id: string | number; name: string; image: string; priceCny: number | null;
  category: string; buyUrl: string | null;
};
declare const __CATALOG_HOME__: Item[];
type Result = { items: Item[]; page: number; pages: number; total: number };
type Gallery = { images: string[]; qc: string[] };
const categories: Record<string, string> = {
  shoes:"Shoes", hoodies:"Hoodies", tshirts:"T-Shirts", jackets:"Jackets", pants:"Pants", headwear:"Headwear",
  accessories:"Accessories", sets:"Sets", electronics:"Electronics", other:"Other", jerseys:"Jerseys"
};
const sorts: Record<string, string> = {new:"Newest", popular:"Popular", "price-asc":"Price: low to high", "price-desc":"Price: high to low"};
const defaultQuery = { q:"", category:"", sort:"new", page:1, hash:"", sha:"", qc:"" };
type Query = typeof defaultQuery;
function readQuery(): Query {
  const params = new URLSearchParams(window.location.search);
  const sort = params.get("sort") || "new";
  const category = params.get("category") || "";
  const hash = params.get("hash") || "";
  const sha = params.get("sha") || "";
  const page = Number(params.get("page"));
  return {
    q:params.get("q") || "", category:category in categories ? category : "",
    sort:sort in sorts ? sort : "new", page:Number.isSafeInteger(page) && page > 0 ? page : 1,
    hash:/^[a-f0-9]{16}$/i.test(hash) ? hash : "", sha: /^[a-f0-9]{64}$/i.test(sha) ? sha : "", qc: params.get("qc") === "1" ? "1" : ""
  };
}
function encode(query: Query) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) if (value !== defaultQuery[key as keyof Query]) params.set(key,String(value));
  return params;
}

export function ImageUpload({ lang, onHash }: { lang:Lang; onHash:(signature:ImageSignature)=>void }) {
  const [state, setState] = useState("");
  const sequence = useRef(0);
  async function upload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = "";
    const current = ++sequence.current;
    setState("Reading image…");
    try {
      const signature = await hashImage(file);
      if (current === sequence.current) { setState(""); onHash(signature); }
    } catch { if (current === sequence.current) setState("Choose a readable JPG, PNG or WebP image."); }
  }
  return <span className="catalog-upload">
    <label className="catalog-upload-button" title={t("Search by image",lang)}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 7.5h4l1.7-3h6.6l1.7 3h4a1 1 0 0 1 1 1v10a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-10a1 1 0 0 1 1-1Z"/>
        <circle cx="12" cy="13.5" r="3.7"/>
      </svg>
      <input type="file" aria-label={t("Search by image",lang)} accept="image/jpeg,image/png,image/webp,image/avif,image/gif" onChange={upload}/>
    </label>{state && <span role="status">{t(state,lang)}</span>}
  </span>;
}

export function HomeSearch({ lang }: {lang:Lang}) {
  return <div className="clean-search-card"><p className="search-label">{t("Search the spreadsheet",lang)}</p>
    <form action={localPath("/spreadsheet",lang)} className="clean-search">
      <input name="q" type="search" placeholder={t("Product name or item ID",lang)} aria-label={t("Search product finds",lang)}/>
      <ImageUpload lang={lang} onHash={signature => window.location.assign(localPath("/spreadsheet",lang) + "?" + encode({...defaultQuery,...signature}))}/>
      <button aria-label={t("Search",lang)} type="submit">→</button>
    </form>
    <div className="catalog-hero-actions"><a href={localPath("/spreadsheet",lang)}>{t("View complete catalog",lang)} →</a></div>
  </div>;
}

const sourceGroups: Record<string,string> = {
  shoes:"Shoes", jersey:"Jerseys", hoodie:"Hoodies", "other stuff":"Other", electronics:"Electronics",
  "short sets":"Sets", accessories:"Accessories", headwear:"Headwear", "pants/shorts":"Pants",
  jackets:"Jackets", "t-shirts":"T-Shirts",
};
function productName(item:Item, lang:Lang) {
  const translated = t(item.name,lang);
  if (translated !== item.name || lang === "en") return translated;
  const match = /^(.+?)(\s*[-·#]\s*\d+)$/.exec(item.name);
  if (!match) return item.name;
  const group = match[1].trim();
  return t(sourceGroups[group.toLowerCase()] || group,lang) + match[2];
}
function translateQuery(term:string,lang:Lang) {
  if (!term || lang === "en") return term;
  for (const [source,label] of Object.entries(sourceGroups)) {
    const local = t(label,lang).toLocaleLowerCase(lang);
    const query = term.toLocaleLowerCase(lang);
    if (query === local) return Object.keys(categories).find(key => categories[key] === label) || source;
    if (query.startsWith(local) && /^\s*[-·#]\s*\d+$/.test(query.slice(local.length))) return source + query.slice(local.length);
  }
  return term;
}

function Photos({item, lang}: {item:Item; lang:Lang}) {
  const [open,setOpen] = useState(false);
  const [gallery,setGallery] = useState<Gallery | null>(null);
  const [error,setError] = useState(false);
  useEffect(() => {
    if (!open || gallery) return;
    const controller = new AbortController();
    setError(false);
    fetch("/api/gallery/" + encodeURIComponent(item.id), {signal:controller.signal})
      .then(async response => {
        if (!response.ok) throw new Error();
        const data = await response.json();
        if (!Array.isArray(data.images) || !Array.isArray(data.qc)) throw new Error();
        if (!controller.signal.aborted) setGallery(data);
      }).catch(() => { if (!controller.signal.aborted) setError(true); });
    return () => controller.abort();
  }, [open, gallery, item.id]);
  const groups = gallery && [
    {title:t("QC photos",lang), images:gallery.qc},
    {title:t("Product photos",lang), images:gallery.images.filter(url => !gallery.qc.includes(url))},
  ];
  return <details className="catalog-photos" open={open} onToggle={e => setOpen(e.currentTarget.open)}>
    <summary>{t("Product & QC photos",lang)}</summary>
    {open && (gallery ? <>
      {groups?.filter(group => group.images.length).map(group => <div key={group.title}>
        <p>{group.title}</p><div className="catalog-thumbs">{group.images.map((url,index) =>
          <a href={url} key={url} target="_blank" rel="noreferrer">
            <img loading="lazy" src={url} alt={group.title+" "+(index+1)} width="80" height="80"/>
          </a>)}</div></div>)}
      {!gallery.qc.length && <p>{t("No QC photos for this listing.",lang)}</p>}
    </> : <p role="status">{t(error ? "Photos could not be loaded." : "Loading…",lang)}</p>)}
  </details>;
}

export default function Catalog({lang,mode="full"}:{lang:Lang;mode?:"home"|"full"|"qc"}) {
  const [query,setQuery] = useState<Query>(defaultQuery);
  const [input,setInput] = useState("");
  const [jump,setJump] = useState("1");
  const [ready,setReady] = useState(false);
  const [result,setResult] = useState<Result | null>(() => mode === "home"
    ? {items:__CATALOG_HOME__, page:1, pages:1, total:__CATALOG_HOME__.length} : null);
  const [error,setError] = useState(false);
  const [retry,setRetry] = useState(0);
  const {price,updated} = usePrices(lang);
  const preview = mode === "home";
  useEffect(() => {
    const update = () => {
      const current = preview ? defaultQuery : readQuery();
      setQuery(current); setInput(current.q); setReady(true);
    };
    update();
    window.addEventListener("popstate",update);
    return () => window.removeEventListener("popstate",update);
  }, [preview]);
  useEffect(() => {
    if (!ready) return;
    const controller = new AbortController();
    setError(false);
    if (!preview) setResult(null);
    setJump(String(query.page));
    const params = encode(query);
    if (query.q) params.set("q",translateQuery(query.q,lang));
    params.set("limit", preview ? "4" : "12");
    params.set("lang",lang);
    if (mode !== "qc") params.delete("qc");
    const path = query.hash ? "/api/image-search?" : "/api/catalog?";
    fetch(path + params, {signal:controller.signal}).then(async response => {
      if (!response.ok) throw new Error();
      const data = await response.json();
      if (!Array.isArray(data.items) || !Number.isFinite(data.total) || !Number.isFinite(data.pages)) throw new Error();
      if (!controller.signal.aborted) { setResult(data); setJump(String(data.page)); }
    }).catch(() => { if (!controller.signal.aborted) setError(true); });
    return () => controller.abort();
  }, [query, ready, preview, mode, lang, retry]);
  function change(values:Partial<Query>) {
    const next = {...query,page:1,...values};
    setQuery(next);
    if (!preview) {
      const search = encode(next).toString();
      window.history.pushState(null,"",window.location.pathname + (search ? "?"+search : ""));
    }
  }
  function search(e:FormEvent) { e.preventDefault(); change({q:input.trim(), hash:"",sha:""}); }
  return <section className="catalog-live" aria-label={t(mode === "qc" ? "QC photos" : "Product index",lang)}>
    {!preview && <>
      <div className="catalog-search-line"><form className="clean-search" onSubmit={search}>
        <input type="search" value={input} placeholder={t("Product name or item ID",lang)} aria-label={t("Search product finds",lang)} onChange={e=>setInput(e.target.value)}/>
        <ImageUpload lang={lang} onHash={signature => {
          if (mode === "qc") {
            window.location.assign(localPath("/spreadsheet",lang) + "?" + encode({...defaultQuery,...signature}));
          } else {
            setInput("");
            change({...defaultQuery,...signature});
          }
        }}/>
        <button type="submit" aria-label={t("Search",lang)}>→</button>
      </form></div>
      <div className="catalog-selects">{query.hash ? <button type="button" onClick={()=>change({...defaultQuery})}>{t("Clear image search",lang)} ×</button> : <>
        <label>{t("Category",lang)} <select value={query.category} onChange={e=>change({category:e.target.value})}><option value="">{t("All",lang)}</option>{Object.entries(categories).map(([key,label])=><option key={key} value={key}>{t(label,lang)}</option>)}</select></label>
        <label>{t("Sort",lang)} <select value={query.sort} onChange={e=>change({sort:e.target.value})}>{Object.entries(sorts).map(([key,label])=><option key={key} value={key}>{t(label,lang)}</option>)}</select></label></>}
        {mode === "qc" && <label><input type="checkbox" checked={query.qc === "1"} onChange={e=>change({qc:e.target.checked ? "1" : ""})}/> {t("Only listings with QC photos",lang)}</label>}
      </div></>}
    {!result ? <div role="status" className="catalog-status">{t(error ? "The catalog could not be loaded." : "Loading…",lang)} {error && <button onClick={()=>setRetry(retry+1)}>{t("Retry",lang)}</button>}</div> : <>
      {!preview && <p role="status" className="catalog-result-count">{new Intl.NumberFormat(lang).format(result.total)} {t("results",lang)}</p>}
      {result.items.length === 0 ? <p className="catalog-status">{t(mode==="qc" && query.qc ? "No matching QC photos." : "No matching products.",lang)}</p> :
      <div className="clean-product-grid">{result.items.map(item => {
        const name = productName(item,lang);
        const image = item.image && <img src={item.image} alt={name} width="400" height="400" loading="lazy"/>;
        return <article key={item.id} className="clean-product-card">{item.buyUrl ? <a className="clean-product-image" href={item.buyUrl}>{image}</a> : <div className="clean-product-image">{image}</div>}
          <div className="clean-product-copy"><p>{t(categories[item.category] || item.category,lang)}</p><h3>{item.buyUrl ? <a href={item.buyUrl}>{name}</a> : name}</h3>
          {typeof item.priceCny === "number" && <strong className="catalog-price">{price(item.priceCny)}</strong>}
          {item.buyUrl && <a className="clean-product-link" href={item.buyUrl}>{t("Open on Hipobuy",lang)} <span aria-hidden="true">↗</span></a>}
          {!preview && <Photos item={item} lang={lang}/>}</div></article>;
      })}</div>}
      {!preview && result.pages > 1 && <form className="catalog-pagination" onSubmit={e=>{e.preventDefault();const page=Number(jump);if(Number.isInteger(page)&&page>=1&&page<=result.pages)change({page});}}>
        <button type="button" aria-label={t("Previous page",lang)} disabled={result.page<=1} onClick={()=>change({page:result.page-1})}>←</button>
        <label>{t("Page",lang)} <input aria-label={t("Page",lang)} type="number" value={jump} min={1} max={result.pages} required onChange={e=>setJump(e.target.value)}/> / {result.pages}</label>
        <button type="submit">{t("Go",lang)}</button>
        <button type="button" aria-label={t("Next page",lang)} disabled={result.page>=result.pages} onClick={()=>change({page:result.page+1})}>→</button>
      </form>}
      <div className="catalog-footer"><small><a href="https://www.exchangerate-api.com/" rel="external">{t("Exchange rates",lang)}</a> · {updated}</small>{preview && <a href={localPath("/spreadsheet",lang)}>{t("View complete catalog",lang)} →</a>}</div>
    </>}
  </section>;
}
