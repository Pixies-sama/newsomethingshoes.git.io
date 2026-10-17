import { CONFIG } from "./config.js";
const get = async (url) => { const r = await fetch(url); if (!r.ok) throw new Error(url); return r.json(); };
let cache;
/** products = what section pages show (max per section). gallery = products + gallery.json items + any overflow. */
export async function loadAll() {
  if (cache) return cache;
  const [pj, gj] = await Promise.all([get(CONFIG.paths.products), get(CONFIG.paths.gallery).catch(() => ({ items: [] }))]);
  const sizes = (pj.defaults && pj.defaults.sizes) || {};
  const norm = (p) => ({ gender: "unisex", subCategory: "casual", sizes: sizes[p.category] || [], colours: [], isNew: false, premium: false, description: "", ...p, images: p.images || (p.image ? [p.image] : []) });
  const valid = (p) => p.id && p.images.length;
  const count = {}, products = [], overflow = [];
  pj.products.map(norm).filter(valid).forEach((p) => {
    count[p.category] = (count[p.category] || 0) + 1;
    (count[p.category] <= CONFIG.maxPerSection ? products : overflow).push(p);
  });
  const seen = new Set(products.map((p) => p.id));
  const extras = [...overflow, ...(gj.items || []).map(norm).filter(valid)].filter((p) => !seen.has(p.id) && seen.add(p.id));
  return (cache = { products, gallery: [...products, ...extras] });
}
