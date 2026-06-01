# ENJOYHITO Website — GitHub Pages Setup Guide

## 📁 File Structure

```
enjoyhito/
├── index.html          ← Home page
├── shop.html           ← All products
├── about.html          ← Your story
├── contact.html        ← Contact form
├── css/
│   └── style.css       ← All styles (edit colors/fonts here)
├── js/
│   └── products.js     ← ✅ ADD YOUR PRODUCTS HERE
└── images/
    └── (put your product photos here)
```

---

## ✏️ How to Edit Products (Most Important File)

Open `js/products.js` — this is the only file you need to edit to add or change products.

Each product looks like this:

```js
{
  name: "Signature Structured Hat",
  category: "Hats",          // "Hats" | "Apparel" | "Accessories"
  price: "34.99",
  image: "images/hat-1.jpg", // put image in /images/ folder
  buyLink: "https://your-printful-link-here",
  featured: true             // true = shows on homepage
},
```

---

## 🖼️ How to Add Product Images

1. Export your product mockup from Printful (click "Download mockup")
2. Rename it something simple like `hat-1.jpg`
3. Drop it into the `/images/` folder
4. Set `image: "images/hat-1.jpg"` in products.js

---

## 🛒 How to Get Your Printful Buy Link

**Option A — Direct Printful Checkout (Easiest):**
1. In Printful dashboard → go to your product template
2. Click "Share" or copy the store product URL
3. Paste that URL as the `buyLink`

**Option B — Connect to a Free Store (Recommended for real sales):**
- Connect Printful to a free **Big Cartel** store (bigcartel.com)
- Or use **Printful's own checkout** (available on paid plan)
- Then link to each product in your store

---

## 🚀 How to Publish on GitHub Pages

1. Create a GitHub repo named `yourusername.github.io`  
   (or any name, e.g. `enjoyhito`)

2. Upload all these files to the repo (drag & drop in GitHub web interface)

3. Go to repo **Settings → Pages**

4. Under "Source", select **Deploy from a branch → main → / (root)**

5. Click Save — your site will be live at:  
   `https://yourusername.github.io/` (or `/enjoyhito/`)

---

## 📬 How to Set Up the Contact Form (Free)

1. Go to **formspree.io** and sign up (free)
2. Create a new form — you'll get a URL like `https://formspree.io/f/xabc1234`
3. Open `contact.html` and replace `YOUR_FORM_ID` with your actual ID

---

## 🎨 How to Change Colors

Open `css/style.css` and find the `:root` section at the top:

```css
:root {
  --black:   #0a0a0a;   /* Dark background */
  --white:   #fafaf7;   /* Page background */
  --gold:    #c9a96e;   /* Accent color */
  --gold-lt: #e8d5b0;   /* Light accent */
  --gray:    #888;      /* Body text */
  --gray-lt: #f2f0eb;   /* Light section bg */
}
```

Change any of those hex codes to customize the palette.

---

## ✍️ How to Edit Your Story (About page)

Open `about.html` and find the section marked `✏️ EDIT THIS SECTION`.
Just change the text directly in the `<p>` tags.
