/*
  CATALOGUE DATA
  --------------------------------------------------------------
  Edit this file to change what appears in the catalogue.

  - brand:      "Estivaneli" or "Croppsy" (must match a name in BRANDS)
  - name:       product title shown under the photo
  - colorways:  list of colours; the customer picks one when adding to cart
  - sizes:      sizes in the pre-pack, in order
  - ratio:      units per size in one pack, same order as sizes
                e.g. sizes ["S","M","L","XL"] + ratio [1,2,2,1] = 6-piece pack
  - moq:        minimum order quantity in pieces, per colorway
                (falls back to defaultMoq below). Orders are rounded up
                to whole packs, so the real minimum is the first pack
                count that reaches the MOQ.
  - photos:     at least 3 model shots per SKU, e.g. front, back, detail.
                The first one is the cover in the grid; the second shows on hover.
                Use portrait shots (3:4 or 4:5) on a light grey backdrop.
                Leave [] to show a placeholder.
  - colorPhotos: optional shots per colourway, keyed by colour name, used
                instead of `photos` when that colour is selected
                e.g. { "Washed Black": ["images/rdj-black-1.jpg", ...] }
*/

window.CATALOGUE_CONFIG = {
  title: "Estivaneli × Croppsy",
  season: "Collection 01",
  // Minimum pieces per style, per colorway, unless a product sets its own moq.
  defaultMoq: 12,
  // Where the "Send request" button emails the customer's selection.
  requestEmail: "",
};

window.BRANDS = ["Estivaneli", "Croppsy"];

window.PRODUCTS = [
  {
    id: "raw-denim-jacket",
    brand: "Estivaneli",
    name: "Raw Denim Jacket",
    colorways: ["Washed Blue", "Washed Black"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    photos: [
      "images/raw-denim-jacket.jpg",
      "images/raw-denim-jacket-back.jpg",
      "images/raw-denim-jacket-detail.jpg",
    ],
  },
  {
    id: "rhinestone-denim",
    brand: "Estivaneli",
    name: "Rhinestone Denim",
    colorways: ["Washed Blue", "Washed Black"],
    sizes: ["28", "30", "32", "34", "36"],
    ratio: [1, 3, 4, 3, 1],
    moq: 12,
    photos: [
      "images/rhinestone-denim.jpg",
      "images/rhinestone-denim-back.jpg",
      "images/rhinestone-denim-detail.jpg",
    ],
  },
  {
    id: "thermal-long-sleeve",
    brand: "Croppsy",
    name: "Thermal Long Sleeve",
    colorways: ["White", "Vintage Green"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    photos: [
      "images/thermal-long-sleeve.jpg",
      "images/thermal-long-sleeve-back.jpg",
      "images/thermal-long-sleeve-detail.jpg",
    ],
  },
  {
    id: "cropped-zip-hoodie",
    brand: "Croppsy",
    name: "Cropped Zip Hoodie",
    colorways: ["Sunfaded Black"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    photos: [
      "images/cropped-zip-hoodie.jpg",
      "images/cropped-zip-hoodie-back.jpg",
      "images/cropped-zip-hoodie-detail.jpg",
    ],
  },
  {
    id: "workwear-jacket",
    brand: "Estivaneli",
    name: "Workwear Jacket",
    colorways: ["Washed Blue", "Washed Grey"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    photos: [
      "images/workwear-jacket.jpg",
      "images/workwear-jacket-back.jpg",
      "images/workwear-jacket-detail.jpg",
    ],
  },
  {
    id: "baggy-denim-pants",
    brand: "Estivaneli",
    name: "Baggy Denim Pants",
    colorways: ["Washed Black", "Washed Blue"],
    sizes: ["28", "30", "32", "34", "36"],
    ratio: [1, 3, 4, 3, 1],
    moq: 12,
    photos: [
      "images/baggy-denim-pants.jpg",
      "images/baggy-denim-pants-back.jpg",
      "images/baggy-denim-pants-detail.jpg",
    ],
  },
  {
    id: "drop-shoulder-hoodie",
    brand: "Croppsy",
    name: "Drop Shoulder Hoodie",
    colorways: ["Grey", "Black", "Espresso", "Charcoal", "Navy", "Cream"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    photos: [
      "images/drop-shoulder-hoodie.jpg",
      "images/drop-shoulder-hoodie-back.jpg",
      "images/drop-shoulder-hoodie-detail.jpg",
    ],
  },
  {
    id: "quarter-zip",
    brand: "Croppsy",
    name: "1/4 Zip",
    colorways: ["Black", "Espresso", "Grey", "Charcoal", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    photos: [
      "images/quarter-zip.jpg",
      "images/quarter-zip-back.jpg",
      "images/quarter-zip-detail.jpg",
    ],
  },
  {
    id: "plaid-quarter-zip",
    brand: "Croppsy",
    name: "Plaid 1/4 Zip",
    colorways: ["Grey", "Black"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    photos: [
      "images/plaid-quarter-zip.jpg",
      "images/plaid-quarter-zip-back.jpg",
      "images/plaid-quarter-zip-detail.jpg",
    ],
  },
];
