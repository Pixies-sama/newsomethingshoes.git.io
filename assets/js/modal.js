import { buildWhatsAppLink, WA_ICON } from "./whatsapp.js";
import { price } from "./render.js";

export function initModal(products, { compact = false } = {}) {
  const el = document.createElement("div");
  el.className = "modal"; el.hidden = true;
  el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true");
  document.body.appendChild(el);
  let opener;

  const close = () => { el.hidden = true; document.body.classList.remove("no-scroll"); if (opener) opener.focus(); };
  const open = (id) => {
    const p = products.find((x) => x.id === id);
    if (!p) return;
    const meta = [p.category && p.category.replace(/-/g, " "), compact ? "" : p.subCategory, p.gender].filter(Boolean).join(" · ").toUpperCase();
    el.setAttribute("aria-label", p.name || "Design");
    el.innerHTML = `
      <div class="modal__box ${compact ? "is-compact" : ""}">
        <button class="modal__close" aria-label="Close">×</button>
        <div class="modal__media">
          <img class="modal__img" src="${p.images[0]}" alt="${p.name || "Design"}">
          ${p.images.length > 1 ? `<div class="thumbs">${p.images.map((s, i) =>
            `<button class="thumb ${i ? "" : "is-active"}" data-src="${s}" aria-label="Show image ${i + 1}"><img src="${s}" alt=""></button>`).join("")}</div>` : ""}
        </div>
        <div class="modal__info">
          <p class="eyebrow">${meta}</p>
          <h2>${p.name || ""}</h2>
          <p class="modal__price">${price(p)}</p>
          ${compact ? "" : `
            <p>${p.description}</p>
            <h3 class="label">Available sizes</h3><ul class="pills">${p.sizes.map((s) => `<li>${s}</li>`).join("")}</ul>
            <h3 class="label">Colours</h3><ul class="pills">${p.colours.map((c) => `<li>${c}</li>`).join("")}</ul>
            <p class="note">Price and availability may vary. Contact us on WhatsApp for confirmation.</p>`}
          <a class="btn btn--gold" href="${buildWhatsAppLink(p)}" target="_blank" rel="noopener">${WA_ICON} I'M INTERESTED — WHATSAPP</a>
          <a class="link-btn" href="products/${p.id}.html">VIEW FULL DETAILS →</a>
        </div>
      </div>`;
    el.hidden = false;
    document.body.classList.add("no-scroll");
    el.querySelector(".modal__close").focus();
  };

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='view']");
    if (btn) { opener = btn; open(btn.dataset.id); }
  });
  el.addEventListener("click", (e) => {
    if (e.target === el || e.target.closest(".modal__close")) return close();
    const t = e.target.closest(".thumb");
    if (t) {
      el.querySelector(".modal__img").src = t.dataset.src;
      el.querySelectorAll(".thumb").forEach((x) => x.classList.toggle("is-active", x === t));
    }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !el.hidden) close(); });
}
