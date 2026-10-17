# New Something Shoes
Domain: https://newshoes.cv (set in `assets/data/products.json` -> `brand.site`).

## Run locally
`npx serve .` or `python3 -m http.server 8000`

## Add products (sections: Palm Slippers, Shoes, Sandals, Collections)
Add to `assets/data/products.json`. Minimum fields: `id` (letters/numbers/dashes, unique), `name`, `category` (`palm-slippers` | `shoes` | `sandals`), `price`, `images`.
Images: a URL (`https://...jpg`) or a saved file (`assets/images/products/name.jpg`).
Each section shows the first 40 per category. Extra ones go to the gallery only.

## Gallery-only items
Add to `assets/data/gallery.json` -> `items`. Minimum: `id`, `images`. Optional: `gender` (men/women/unisex), `name`, `price`, `description`.
The gallery shows all section products + gallery.json items.

## After ANY change to the JSON files
Run `node tools/build.js`. It regenerates `products/*.html` (needed for WhatsApp photo previews) and `sitemap.xml`.
On Netlify/Vercel set the build command to `node tools/build.js` and it runs on every deploy.

## WhatsApp
Number/message: `assets/js/config.js`, `assets/js/whatsapp.js`. WhatsApp previews need JPG/PNG images on a public https URL.
