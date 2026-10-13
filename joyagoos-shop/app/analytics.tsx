"use client";

import {useEffect} from "react";

declare global {
  interface Window { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void; }
}

export function AnalyticsEvents(){
  useEffect(()=>{
    const pageLanguage=window.location.pathname.split("/")[1];
    const click=(event:MouseEvent)=>{
      const anchor=(event.target as HTMLElement|null)?.closest("a") as HTMLAnchorElement|null;
      if(!anchor)return;
      const url=new URL(anchor.href,window.location.href);
      const context={page_language:pageLanguage,source_page:window.location.pathname,link_url:url.href,link_text:(anchor.textContent??"").trim().slice(0,100),placement:anchor.dataset.placement??(anchor.closest("header,nav")?"navigation":anchor.closest("footer")?"footer":"content"),transport_type:"beacon"};
      if(url.hostname.replace(/^www\./,"")==="cnfanssp.com"){
        const eventName=url.pathname.startsWith("/AllProducts/")?"product_click":url.pathname==="/search.html"?"search_click":url.pathname.split("/").filter(Boolean).length===1?"category_click":"main_site_click";
        window.gtag?.("event",eventName,context);
      }else if(url.origin===window.location.origin&&url.pathname.includes("/articles/")){
        const articleSlug=url.pathname.match(/^\/(?:en|de|es|fr|it)\/articles\/([^/]+)\/?$/)?.[1];
        if(url.pathname!==window.location.pathname)window.gtag?.("event",articleSlug?"article_click":"article_index_click",{...context,...(articleSlug?{article_slug:articleSlug}:{}),destination_language:url.pathname.split("/")[1]});
      }
    };
    const submit=(event:SubmitEvent)=>{
      const form=event.target as HTMLFormElement|null;
      if(!form||!form.action.includes("cnfanssp.com/search.html"))return;
      const term=String(new FormData(form).get("keywords")??"").trim();
      window.gtag?.("event","search",{search_term:term.slice(0,100),source_page:window.location.pathname,page_language:pageLanguage,transport_type:"beacon"});
    };
    document.addEventListener("click",click);
    document.addEventListener("submit",submit);
    return()=>{document.removeEventListener("click",click);document.removeEventListener("submit",submit);};
  },[]);
  return null;
}
