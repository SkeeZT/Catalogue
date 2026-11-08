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
  - image:      path to the model shot, e.g. "images/raw-denim-jacket.jpg"
                Use portrait shots (3:4 or 4:5) on a light grey
                backdrop to match the look. Leave "" to show a placeholder.
  - images:     optional extra shots, one per colourway, keyed by colour name
                e.g. { "Washed Black": "images/raw-denim-jacket-black.jpg" }
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
    image: "images/raw-denim-jacket.jpg",
  },
  {
    id: "rhinestone-denim",
    brand: "Estivaneli",
    name: "Rhinestone Denim",
    colorways: ["Washed Blue", "Washed Black"],
    sizes: ["28", "30", "32", "34", "36"],
    ratio: [1, 3, 4, 3, 1],
    moq: 12,
    image: "images/rhinestone-denim.jpg",
  },
  {
    id: "thermal-long-sleeve",
    brand: "Croppsy",
    name: "Thermal Long Sleeve",
    colorways: ["White", "Vintage Green"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    image: "images/thermal-long-sleeve.jpg",
  },
  {
    id: "cropped-zip-hoodie",
    brand: "Croppsy",
    name: "Cropped Zip Hoodie",
    colorways: ["Sunfaded Black"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    image: "images/cropped-zip-hoodie.jpg",
  },
  {
    id: "workwear-jacket",
    brand: "Estivaneli",
    name: "Workwear Jacket",
    colorways: ["Washed Blue", "Washed Grey"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    image: "images/workwear-jacket.jpg",
  },
  {
    id: "baggy-denim-pants",
    brand: "Estivaneli",
    name: "Baggy Denim Pants",
    colorways: ["Washed Black", "Washed Blue"],
    sizes: ["28", "30", "32", "34", "36"],
    ratio: [1, 3, 4, 3, 1],
    moq: 12,
    image: "images/baggy-denim-pants.jpg",
  },
  {
    id: "drop-shoulder-hoodie",
    brand: "Croppsy",
    name: "Drop Shoulder Hoodie",
    colorways: ["Grey", "Black", "Espresso", "Charcoal", "Navy", "Cream"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    image: "images/drop-shoulder-hoodie.jpg",
  },
  {
    id: "quarter-zip",
    brand: "Croppsy",
    name: "1/4 Zip",
    colorways: ["Black", "Espresso", "Grey", "Charcoal", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    image: "images/quarter-zip.jpg",
  },
  {
    id: "plaid-quarter-zip",
    brand: "Croppsy",
    name: "Plaid 1/4 Zip",
    colorways: ["Grey", "Black"],
    sizes: ["S", "M", "L", "XL"],
    ratio: [1, 2, 2, 1],
    moq: 12,
    image: "images/plaid-quarter-zip.jpg",
  },
];
