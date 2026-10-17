export const WA_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z"/></svg>';

import { CONFIG } from "./config.js";
/** Absolute URL of the item's shareable page (WhatsApp turns it into a photo preview card). */
export const productUrl = (p) => new URL(`products/${p.id}.html`, document.baseURI).href;
const productMessage = (p) => {
  const money = p.price ? `${CONFIG.currency}${p.price.toLocaleString("en-NG")}` : "";
  const lines = [`Hello ${CONFIG.brandName}, I'm interested in this ${p.name ? "product" : "design"}:`, ""];
  const head = [p.name && `*${p.name}*`, money].filter(Boolean).join(" - ");
  if (head) lines.push(head);
  if (p.description) lines.push(p.description);
  const facts = [p.sizes && p.sizes.length && `Sizes: ${p.sizes[0]}-${p.sizes[p.sizes.length - 1]}`, p.colours && p.colours.length && `Colours: ${p.colours.join(", ")}`].filter(Boolean).join(" | ");
  if (facts) lines.push(facts);
  lines.push("", `Photo & details: ${productUrl(p)}`, "", "Is it available?");
  return lines.join("\n");
};
/** Builds a wa.me URL. Pass an item for its details, or nothing for a general enquiry. */
export function buildWhatsAppLink(product = null) {
  const message = product ? productMessage(product) : `Hello ${CONFIG.brandName}, I'd like to make an enquiry.`;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}
