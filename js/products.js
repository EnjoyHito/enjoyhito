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
 *     - buyLink:  The Printful product link
 *     - featured: true = shows on homepage, false = only on shop page
 *
 *  HOW TO GET YOUR PRINTFUL BUY LINK:
 *  1. Go to enjoyhito.printful.me in your browser
 *  2. Click any product
 *  3. Copy the URL and paste it as buyLink below
 *
 *  HOW TO ADD A PRODUCT IMAGE:
 *  - Save your image inside the /images/ folder
 *  - Set image: "images/your-file.png"
 *
 * ============================================================
 */

const PRODUCTS = [

  {
    name: "Trucker Cap",
    category: "Hats",
    price: "34.99",
    image: "images/hat-1-angle.png",
    buyLink: "https://enjoyhito.printful.me/product/trucker-cap",
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
