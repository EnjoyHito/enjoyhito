/**
 * ============================================================
 *  ENJOYHITO — PRODUCTS LIST
 *  ✏️  THIS IS THE FILE YOU EDIT TO ADD OR CHANGE PRODUCTS
 * ============================================================
 *
 *  HOW TO ADD A PRODUCT:
 *  1. Copy one of the product blocks below (from { to },)
 *  2. Paste it at the end of the list (before the last ] )
 *  3. Update the fields:
 *     - name:     Product name
 *     - category: "Hats" | "Apparel" | "Accessories"
 *     - price:    Number (e.g. 34.99)
 *     - image:    Path to your image file, or a full URL
 *     - buyLink:  The Printful product link (see HOW TO GET YOUR LINK below)
 *     - featured: true = shows on homepage, false = only on shop page
 *
 *  HOW TO GET YOUR PRINTFUL BUY LINK:
 *  1. Go to your Printful dashboard → Stores
 *  2. Connect Printful to your store (or use their checkout link)
 *  3. Copy the product's shareable/store URL and paste it as buyLink
 *
 *  HOW TO ADD A PRODUCT IMAGE:
 *  - Save your image inside the /images/ folder
 *  - Set image: "images/your-file.jpg"
 *  - Or paste a full URL: "https://..."
 *
 * ============================================================
 */

const PRODUCTS = [

  {
    name: "Signature Structured Hat",
    category: "Hats",
    price: "34.99",
    image: "images/hat-1.jpg",
    buyLink: "https://www.printful.com/dashboard/product-templates/103105022",
    featured: true
  },

  {
    name: "Classic Logo Tee",
    category: "Apparel",
    price: "29.99",
    image: "images/tee-1.jpg",
    buyLink: "#",
    featured: true
  },

  {
    name: "Premium Hoodie",
    category: "Apparel",
    price: "59.99",
    image: "images/hoodie-1.jpg",
    buyLink: "#",
    featured: true
  },

  {
    name: "Snapback Cap",
    category: "Hats",
    price: "27.99",
    image: "images/hat-2.jpg",
    buyLink: "#",
    featured: false
  },

  {
    name: "Logo Tote Bag",
    category: "Accessories",
    price: "22.99",
    image: "images/tote-1.jpg",
    buyLink: "#",
    featured: false
  },

  {
    name: "Embroidered Crewneck",
    category: "Apparel",
    price: "49.99",
    image: "images/crewneck-1.jpg",
    buyLink: "#",
    featured: false
  }

];
