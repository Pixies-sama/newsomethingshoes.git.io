import { CONFIG } from "./config.js";
export const price = (p) => (p.price ? `${CONFIG.currency}${p.price.toLocaleString("en-NG")}` : "");
const label = (slug) => slug.replace(/-/g, " ").toUpperCase();

export function productCardHTML(p) {
  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-card__media">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy" width="600" height="600">
        ${p.isNew ? '<span class="badge">NEW</span>' : ""}
      </div>
      <div class="product-card__body">
        <p class="eyebrow">${label(p.category)}</p>
        <h3 class="product-card__name">${p.name}</h3>
        <div class="product-card__row">
          <span>${price(p)}</span>
          <button class="link-btn" data-action="view" data-id="${p.id}">VIEW PRODUCT →</button>
        </div>
      </div>
    </article>`;
}
export const galleryItemHTML = (p) =>
  `<button class="gal-item" data-action="view" data-id="${p.id}" aria-label="View ${p.name || "design"}"><img src="${p.images[0]}" alt="${p.name || "Design"}" loading="lazy" width="600" height="600"></button>`;

export function renderGrid(el, list, tpl = productCardHTML) {
  el.innerHTML = list.length
    ? list.map(tpl).join("")
    : '<p class="empty">No designs match that yet. Try another word, or ask us on WhatsApp.</p>';
}
