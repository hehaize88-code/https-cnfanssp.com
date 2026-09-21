"use client";

import {useEffect} from "react";

declare global {
  interface Window { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void; }
}

export function AnalyticsEvents(){
  useEffect(()=>{
    const click=(event:MouseEvent)=>{
      const anchor=(event.target as HTMLElement|null)?.closest("a") as HTMLAnchorElement|null;
      if(!anchor)return;
      const url=new URL(anchor.href,window.location.href);
      if(url.hostname==="cnfanssp.com"){
        const eventName=url.pathname.startsWith("/AllProducts/")?"product_click":url.pathname==="/search.html"?"search_click":url.pathname.split("/").filter(Boolean).length===1?"category_click":"main_site_click";
        window.gtag?.("event",eventName,{link_url:url.href,link_text:(anchor.textContent??"").trim().slice(0,100),source_page:window.location.pathname});
      }else if(url.origin===window.location.origin&&url.pathname.includes("/articles/")){
        window.gtag?.("event","article_click",{link_url:url.href,link_text:(anchor.textContent??"").trim().slice(0,100),source_page:window.location.pathname});
      }
    };
    const submit=(event:SubmitEvent)=>{
      const form=event.target as HTMLFormElement|null;
      if(!form||!form.action.includes("cnfanssp.com/search.html"))return;
      const term=String(new FormData(form).get("keywords")??"").trim();
      window.gtag?.("event","search",{search_term:term,source_page:window.location.pathname});
    };
    document.addEventListener("click",click);
    document.addEventListener("submit",submit);
    return()=>{document.removeEventListener("click",click);document.removeEventListener("submit",submit);};
  },[]);
  return null;
}
