export function applyFilters(products, { category, subCategory, gender, premium, isNew, query }) {
  return products.filter((p) => {
    if (category && category !== "all" && p.category !== category) return false;
    if (subCategory && p.subCategory !== subCategory) return false;
    if (gender && gender !== "all" && p.gender !== gender) return false;
    if (premium && !p.premium) return false;
    if (isNew && !p.isNew) return false;
    if (query) {
      const q = query.trim().toLowerCase();
      if (!`${p.name} ${p.category.replace(/-/g, " ")} ${p.subCategory}`.toLowerCase().includes(q)) return false;
    }
    return true;
  });
}

/** Wires filter chips + search box. `base` is the page's fixed filter (e.g. its category). */
export function initFilters(products, { base = {}, onChange }) {
  const chips = [...document.querySelectorAll(".chip")];
  const input = document.getElementById("search");
  let chipFilter = {};
  const run = () => onChange(applyFilters(products, { ...base, ...chipFilter, query: input ? input.value : "" }));
  chips.forEach((chip) =>
    chip.addEventListener("click", () => {
      chips.forEach((c) => { c.classList.toggle("is-active", c === chip); c.setAttribute("aria-pressed", c === chip); });
      chipFilter = JSON.parse(chip.dataset.filter || "{}");
      run();
    })
  );
  if (input) input.addEventListener("input", run);
  run();
}
