import { loadAll } from "./data.js";
import { renderGrid, galleryItemHTML } from "./render.js";
import { initFilters } from "./filters.js";
import { initModal } from "./modal.js";
import { initNav } from "./nav.js";
import { buildWhatsAppLink } from "./whatsapp.js";

const $ = (id) => document.getElementById(id);
const STEP = 12; // items revealed per "Show more" click

(async function init() {
  initNav();
  const pid = document.body.dataset.productId; // product detail page
  const grid = $("product-grid"), featured = $("featured-grid"), gallery = $("gallery-grid");
  const target = grid || featured || gallery;
  if (!pid && !target) return;

  let data;
  try { data = await loadAll(); }
  catch { if (target) target.innerHTML = '<p class="empty">Products could not load. If you opened the file directly, run a local server (see README).</p>'; return; }

  if (pid) {
    const p = data.gallery.find((x) => x.id === pid);
    if (p) {
      document.querySelectorAll("[data-wa-product]").forEach((a) => (a.href = buildWhatsAppLink(p)));
      const img = document.querySelector(".pdp__media img");
      if (img && p.images[0]) img.src = p.images[0];
    }
    return;
  }

  const items = gallery ? data.gallery : data.products;
  initModal(items, { compact: !!gallery });

  if (featured) {
    renderGrid(featured, featured.dataset.ids.split(",").map((id) => data.products.find((p) => p.id === id)).filter(Boolean));
    return;
  }

  const params = new URLSearchParams(location.search);
  const input = $("search");
  if (input) {
    if (params.get("q")) input.value = params.get("q");
    if (params.get("focus") === "search") input.focus();
  }

  let limit = STEP;
  const more = $("show-more");
  const draw = (list) => {
    const show = list.slice(0, limit);
    gallery ? renderGrid(gallery, show, galleryItemHTML) : renderGrid(grid, show);
    more.hidden = list.length <= limit;
    more.onclick = () => { limit += STEP; draw(list); };
  };
  initFilters(items, {
    base: { category: document.body.dataset.category || "all" },
    onChange: (list) => { limit = STEP; draw(list); }
  });

  const key = params.get("f");
  const chip = key && document.querySelector(`.chip[data-key="${CSS.escape(key)}"]`);
  if (chip) chip.click();
})();
