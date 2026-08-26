export function SearchBox({ compact = false }: { compact?: boolean }) {
  return (
    <form className={compact ? "search-box compact" : "search-box"} action="https://www.cnfanssp.com/search.html" method="get" target="_blank">
      <input type="hidden" name="channelid" value="2" /><label htmlFor={compact ? "product-search-compact" : "product-search"} className="sr-only">Search products</label><span aria-hidden="true" className="search-icon">⌕</span><input id={compact ? "product-search-compact" : "product-search"} type="search" name="keywords" placeholder="Search shoes, hoodies, product names…" required /><button type="submit">Search live catalog</button>
    </form>
  );
}
