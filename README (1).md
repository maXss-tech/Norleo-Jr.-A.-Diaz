# JR Portfolio - Norleo Jr. A. Diaz

> Web Developer · React & Tailwind enthusiast

Simple portfolio with **no build needed** - just 4 files.

### 📁 Your Current Structure (this is correct)
```
JR/
├── index.html   <- main page
├── jr.jpg       <- your profile photo (150x150 circle)
├── script.js    <- avatar logic + special FX
├── style.css    <- your styles
├── package.json <- (this file) for deployment
└── README.md    <- documentation
```

### 🖼️ How your photo works
Your HTML should have:
```html
<div id="avatar" class="avatar">ND</div>
<input type="file" id="photoInput" hidden accept="image/*">
<img id="avatarImg" src="jr.jpg" style="display:none">
```

Your `script.js` already does:
- Loads `jr.jpg` as default (no more 150x150 gray placeholder)
- Click circle to upload new photo -> saves to localStorage
- Double-click to reset to jr.jpg

**Fix the 150x150 issue:** In `script.js` change:
```js
// from:
const [src, setSrc] = useState(null)
// to:
const [src, setSrc] = useState("jr.jpg")
```
Or if you use the vanilla version I gave you:
```js
showPhoto("jr.jpg") // on load
```

### 🚀 Run it
No need to install anything, just double-click `index.html`.

If you want live reload:
```bash
npx live-server .
```

### ✏️ Edit Info
Open `index.html` and `script.js`:
- LINKS: GitHub, Facebook, Gmail
- PROJECTS, SKILLS, TOOLS arrays

### 📦 Deploy (for this simple folder)
- **Vercel/Netlify:** Drag & drop the whole `JR` folder - it will work instantly
- **GitHub Pages:** Push this folder, enable Pages from main branch

### ✨ Special FX added
- Animated gradient border
- Hover glow + shine sweep
- Ripple + confetti burst
- Double-click reset

© 2026 Norleo Jr. A. Diaz
