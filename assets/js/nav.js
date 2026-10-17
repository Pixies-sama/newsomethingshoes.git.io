import { buildWhatsAppLink } from "./whatsapp.js";

export function initNav() {
  const header = document.querySelector(".site-header");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => burger.setAttribute("aria-expanded", header.classList.toggle("nav-open")));
  document.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => header.classList.remove("nav-open")));
  // Every WhatsApp link on the site gets its URL from whatsapp.js (one source of truth)
  document.querySelectorAll("[data-wa]").forEach((a) => (a.href = buildWhatsAppLink()));
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
