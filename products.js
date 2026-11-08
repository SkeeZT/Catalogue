/*
  CATALOGUE DATA
  --------------------------------------------------------------
  Edit this file to change what appears in the catalogue.

  - brand:      "Estivaneli" or "Croppsy" (must match a name in BRANDS)
  - name:       product title shown under the photo
  - colorways:  list of colours; the customer picks one when adding to cart
  - sizes:      list of sizes; leave as [] for one-size items
  - image:      path to the model shot, e.g. "images/raw-denim-jacket.jpg"
                Use portrait shots (4:5 works best) on a light grey
                backdrop to match the look. Leave "" to show a placeholder.
  - images:     optional extra shots, one per colourway, keyed by colour name
                e.g. { "Washed Black": "images/raw-denim-jacket-black.jpg" }
*/

window.CATALOGUE_CONFIG = {
  title: "Estivaneli × Croppsy",
  season: "Collection 01",
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
    image: "",
  },
  {
    id: "rhinestone-denim",
    brand: "Estivaneli",
    name: "Rhinestone Denim",
    colorways: ["Washed Blue", "Washed Black"],
    sizes: ["28", "30", "32", "34", "36"],
    image: "",
  },
  {
    id: "thermal-long-sleeve",
    brand: "Croppsy",
    name: "Thermal Long Sleeve",
    colorways: ["White", "Vintage Green"],
    sizes: ["S", "M", "L", "XL"],
    image: "",
  },
  {
    id: "cropped-zip-hoodie",
    brand: "Croppsy",
    name: "Cropped Zip Hoodie",
    colorways: ["Sunfaded Black"],
    sizes: ["S", "M", "L", "XL"],
    image: "",
  },
  {
    id: "workwear-jacket",
    brand: "Estivaneli",
    name: "Workwear Jacket",
    colorways: ["Washed Blue", "Washed Grey"],
    sizes: ["S", "M", "L", "XL"],
    image: "",
  },
  {
    id: "baggy-denim-pants",
    brand: "Estivaneli",
    name: "Baggy Denim Pants",
    colorways: ["Washed Black", "Washed Blue"],
    sizes: ["28", "30", "32", "34", "36"],
    image: "",
  },
  {
    id: "drop-shoulder-hoodie",
    brand: "Croppsy",
    name: "Drop Shoulder Hoodie",
    colorways: ["Grey", "Black", "Espresso", "Charcoal", "Navy", "Cream"],
    sizes: ["S", "M", "L", "XL"],
    image: "",
  },
  {
    id: "quarter-zip",
    brand: "Croppsy",
    name: "1/4 Zip",
    colorways: ["Black", "Espresso", "Grey", "Charcoal", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    image: "",
  },
  {
    id: "plaid-quarter-zip",
    brand: "Croppsy",
    name: "Plaid 1/4 Zip",
    colorways: ["Grey", "Black"],
    sizes: ["S", "M", "L", "XL"],
    image: "",
  },
];
