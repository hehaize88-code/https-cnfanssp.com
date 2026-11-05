(function () {
  const catalogue = "www.cnfanssp.com";
  function track(name, details) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, { ...details, page_language: document.documentElement.lang, transport_type: "beacon" });
    }
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest && event.target.closest("a");
    if (!link) return;
    if (link.hasAttribute("data-language-link")) {
      try { localStorage.setItem("acb-language", link.hreflang); } catch (e) {}
      return;
    }
    if (link.hostname !== catalogue) return;
    const product = /^\/AllProducts\/(\d+)\.html$/.exec(link.pathname);
    const kind = link.dataset.clickType || (product ? "product" : link.pathname === "/search.html" ? "search_shortcut" : "category");
    const details = { link_url: link.href, link_domain: link.hostname, click_type: kind };
    track("outbound_click", details);
    if (product) track("product_click", { ...details, item_id: product[1] });
    if (kind === "category") track("category_click", details);
  });

  document.addEventListener("submit", function (event) {
    const form = event.target;
    if (!form.matches("form.search")) return;
    const input = form.querySelector('[name="keywords"]');
    if (!input || !input.value.trim()) {
      event.preventDefault();
      if (input) input.focus();
      return;
    }
    input.value = input.value.trim();
    track("product_search", { search_term: input.value, destination_domain: new URL(form.action).hostname });
  });
})();
