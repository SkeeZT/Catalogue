# Estivaneli × Croppsy — Catalogue

A static sales catalogue: a 3-column editorial grid (2 on tablet, 2 compact on phone),
model shots, and a cart with no prices and no checkout.

Open `index.html` in a browser, or host the folder anywhere static (GitHub Pages, Vercel, Netlify).

## Adding products and photos

Everything lives in `products.js`:

1. Put model shots in `images/` — portrait (4:5), shot on a white or light grey backdrop.
   Images are blended onto the page so a light backdrop melts into the grey, like the reference layout.
2. Set each product's `image` to the file path, e.g. `"images/raw-denim-jacket.jpg"`.
3. Optional: `images: { "Washed Black": "images/raw-denim-jacket-black.jpg" }` swaps the photo per colorway.
4. Set `brand` to `"Estivaneli"` or `"Croppsy"` — the header filter uses it.

## Cart

- Customers pick colorway, size and quantity, then add to cart. The cart is saved in their browser.
- **Send request** opens an email with the full list. Set `requestEmail` in `products.js` to receive it.
- **Copy list** copies the selection as plain text (handy for DMs / WhatsApp).
