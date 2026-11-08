# Estivaneli × Croppsy — Catalogue

A static wholesale catalogue: a 3-column editorial grid (2 on tablet, 2 compact on phone),
model shots, and a cart with no prices and no checkout.

Open `index.html` in a browser, or host the folder anywhere static (GitHub Pages, Vercel, Netlify).

## Adding products and photos

Everything lives in `products.js`:

1. Put model shots in `images/` — portrait (3:4 or 4:5), shot on a white or light grey backdrop.
   Images are blended onto the page so a light backdrop melts into the grey, like the reference layout.
2. List at least 3 shots per SKU in `photos` (e.g. front, back, detail). The first is the grid cover,
   the second shows when hovering a style, and all of them appear in the product panel.
3. Optional: `colorPhotos: { "Washed Black": [...] }` swaps the shots when that colorway is selected.
4. Set `brand` to `"Estivaneli"` or `"Croppsy"` — the header filter uses it.

## Wholesale ordering

- Each style is sold in pre-packs: `sizes` + `ratio` in `products.js` define one pack
  (e.g. S·M·L·XL at 1·2·2·1 = a 6-piece pack).
- `moq` is the minimum pieces per style per colorway (default 12, set by `defaultMoq`).
  Buyers order whole packs, starting at the first pack count that reaches the MOQ.
- The grid shows the MOQ and ratio under each style; the product panel shows the
  size breakdown for the chosen number of packs.

## Cart

- Buyers pick a colorway and number of packs, then add to cart. The cart is saved in their browser.
- **Send request** opens an email with the full list. Set `requestEmail` in `products.js` to receive it.
- **Copy list** copies the selection as plain text (handy for DMs / WhatsApp).
