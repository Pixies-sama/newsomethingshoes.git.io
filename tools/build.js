// Run after editing products.json / gallery.json:  node tools/build.js
// Regenerates products/*.html (share pages with Open Graph tags for WhatsApp previews) and sitemap.xml
const fs = require("fs"),
  path = require("path");
const root = path.join(__dirname, "..");
const read = (f) => JSON.parse(fs.readFileSync(path.join(root, f), "utf8"));
const pj = read("assets/data/products.json");
const SITE = pj.brand.site.replace(/\/$/, "");
let extras = [];
try {
  extras = read("assets/data/gallery.json").items || [];
} catch {}
const tpl = fs.readFileSync(
  path.join(__dirname, "product-template.html"),
  "utf8",
);
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
const abs = (u) => (/^https?:/.test(u) ? u : `${SITE}/${u.replace(/^\//, "")}`);
const pills = (l) =>
  `<ul class="pills">${l.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
const dir = path.join(root, "products");
fs.mkdirSync(dir, { recursive: true });
fs.readdirSync(dir)
  .filter((f) => f.endsWith(".html"))
  .forEach((f) => fs.unlinkSync(path.join(dir, f)));
const seen = new Set(),
  ids = [];
for (const p of [...pj.products, ...extras]) {
  if (!p.id || seen.has(p.id)) continue;
  if (!/^[a-z0-9-]+$/i.test(p.id)) {
    console.warn("Skipped (id: letters, numbers, dashes only):", p.id);
    continue;
  }
  seen.add(p.id);
  ids.push(p.id);
  const imgs = p.images || (p.image ? [p.image] : []);
  const img = imgs[0] || "assets/images/og-default.jpg";
  const name = p.name || "Gallery design";
  const sizes = p.sizes || ((pj.defaults || {}).sizes || {})[p.category] || [];
  const cols = p.colours || [];
  const meta = [
    p.category && p.category.replace(/-/g, " "),
    p.subCategory,
    p.gender || "unisex",
  ]
    .filter(Boolean)
    .join(" · ");
  const info =
    `<p class="eyebrow">${esc(meta)}</p><h1>${esc(name)}</h1>` +
    (p.price
      ? `<p class="modal__price">₦${p.price.toLocaleString("en-NG")}</p>`
      : "") +
    (p.description ? `<p>${esc(p.description)}</p>` : "") +
    (sizes.length
      ? `<h2 class="label">Available sizes</h2>${pills(sizes)}`
      : "") +
    (cols.length ? `<h2 class="label">Colours</h2>${pills(cols)}` : "") +
    (p.price
      ? '<p class="note">Price and availability may vary. Contact us on WhatsApp for confirmation.</p>'
      : "");
  const v = {
    TITLE: esc(name),
    DESC: esc(p.description || `${name} - handmade by New Something Shoes.`),
    OG: esc(abs(img)),
    ID: esc(p.id),
    IMG: esc(img),
    NAME: esc(name),
    INFO: info,
  };
  fs.writeFileSync(
    path.join(dir, `${p.id}.html`),
    tpl.replace(/{{([A-Z]+)}}/g, (_, k) => v[k] ?? ""),
  );
}
const pages = [
  "",
  "collections.html",
  "gallery.html",
  "shoes.html",
  "palm-slippers.html",
  "sandals.html",
  "about.html",
  "contact.html",
];
const urls = [...pages, ...ids.map((i) => `products/${i}.html`)];
fs.writeFileSync(
  path.join(root, "sitemap.xml"),
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((u) => `<url><loc>${SITE}/${u}</loc></url>`),
    "</urlset>",
  ].join("\n") + "\n",
);
console.log(`Built ${ids.length} product pages + sitemap.xml for ${SITE}`);
