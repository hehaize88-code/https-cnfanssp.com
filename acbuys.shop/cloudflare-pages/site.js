/* Progressive enhancement for the pretranslated static production pages. */
(() => {
  const languages = ['en', 'de', 'fr', 'es', 'it', 'pl'];
  const lang = document.documentElement.lang;
  const track = (name, data = {}) => window.gtag?.('event', name, {page_language: lang, ...data});
  document.querySelectorAll('.language-switcher select').forEach(select => {
    select.value = lang;
    select.addEventListener('change', () => {
      const next = select.value;
      if (!languages.includes(next)) return;
      try { localStorage.setItem('acbuy-language', next); } catch {}
      const path = location.pathname.replace(/^\/(de|fr|es|it|pl)(?=\/|$)/, '') || '/';
      location.assign((next === 'en' ? '' : '/' + next) + path + location.search + location.hash);
    });
  });
  const grid = document.querySelector('.product-grid');
  const cards = grid ? [...grid.querySelectorAll('.product')] : [];
  const form = document.querySelector('form.search');
  const search = form?.querySelector('input');
  const sort = document.querySelector('.toolbar select');
  let category = 'All';
  function filter() {
    if (!grid) return;
    const q = (search?.value || '').trim().toLocaleLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const match = (category === 'All' || card.dataset.category === category) && (!q || (card.dataset.search + ' ' + card.textContent.toLocaleLowerCase()).includes(q));
      card.hidden = !match;
      if (match) shown++;
    });
    const ordered = [...cards];
    if (sort?.value === 'low') ordered.sort((a,b) => Number(a.dataset.price)-Number(b.dataset.price));
    if (sort?.value === 'high') ordered.sort((a,b) => Number(b.dataset.price)-Number(a.dataset.price));
    ordered.forEach(card => grid.append(card));
    document.querySelector('.empty').hidden = shown > 0;
  }
  document.querySelectorAll('.filters button').forEach(button => button.addEventListener('click', () => {
    category = button.dataset.category;
    document.querySelectorAll('.filters button').forEach(b => b.classList.toggle('active', b === button));
    track('category_filter', {category}); filter();
  }));
  search?.addEventListener('input', filter);
  sort?.addEventListener('change', filter);
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const term = search.value.trim();
    track('catalog_search', {search_term: term || 'all products'});
    const url = term ? 'https://www.cnfanssp.com/index.php?m=home&c=Search&a=lists&keywords=' + encodeURIComponent(term) : 'https://www.cnfanssp.com/AllProducts/';
    window.open(url, '_blank', 'noopener');
  });
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem('acbuy-saved') || '[]'); if (!Array.isArray(saved)) saved = []; } catch {}
  document.querySelectorAll('[data-product]').forEach(button => {
    const apply = () => { const yes = saved.includes(button.dataset.product); button.textContent = yes ? '♥' : '♡'; button.classList.toggle('saved', yes); button.setAttribute('aria-pressed', String(yes)); };
    apply();
    button.addEventListener('click', () => {
      const id = button.dataset.product;
      saved = saved.includes(id) ? saved.filter(x => x !== id) : [...saved, id];
      try { localStorage.setItem('acbuy-saved', JSON.stringify(saved)); } catch {}
      apply();
    });
  });
  document.addEventListener('click', event => {
    const a = event.target.closest('a[href]');
    if (!a) return;
    const u = new URL(a.href, location.href);
    if (u.hostname === 'www.cnfanssp.com') {
      const name = /^\/AllProducts\/\d+\.html$/.test(u.pathname) ? 'product_click' : /^\/AllProducts\/?$/.test(u.pathname) ? 'catalog_click' : 'category_click';
      track(name, {link_url: u.href, link_text: a.textContent.trim().slice(0,100)});
    } else if (u.hostname === location.hostname && /\/articles\//.test(u.pathname)) {
      track('article_click', {link_url:u.href, link_text:a.textContent.trim().slice(0,100)});
    }
  });
})();
