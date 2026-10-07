(function(){
  document.addEventListener('click',function(event){
    var a=event.target.closest && event.target.closest('a');
    if(!a) return;
    if(a.hasAttribute('data-language-link')) {try{localStorage.setItem('acb-language',a.hreflang);}catch(e){} return;}
    if(a.hostname!==location.hostname && typeof window.gtag==='function') {
      var kind=a.dataset.clickType || (a.pathname.indexOf('/AllProducts/')===0 && /\.html$/.test(a.pathname)?'product':a.pathname.indexOf('/search.html')===0?'search_shortcut':'category');
      window.gtag('event','outbound_click',{link_url:a.href,link_domain:a.hostname,click_type:kind,page_language:document.documentElement.lang,transport_type:'beacon'});
    }
  });
  document.addEventListener('submit',function(event){
    var f=event.target;
    if(!f.matches('form.search'))return;
    var q=f.querySelector('[name="keywords"]');
    if(!q || !q.value.trim()){event.preventDefault();if(q)q.focus();return;}
    q.value=q.value.trim();
    if(typeof window.gtag==='function')window.gtag('event','product_search',{search_term:q.value,destination_domain:new URL(f.action).hostname,page_language:document.documentElement.lang,transport_type:'beacon'});
  });
})();
