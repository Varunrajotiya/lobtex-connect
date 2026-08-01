# The Lobtex Group — Digital Business Card (PWA)

A mobile-first digital business card for **The Lobtex Group** (waterproofing,
insulation & building hardware supplier, Bhiwani), built with React 19, Vite,
Tailwind CSS, and Framer Motion. No backend, no database — all content is
driven by local JS files in `src/data/`. Installable as a PWA, works offline
after the first visit.

> **Note on scope:** Sections that would need real source material — a photo
> gallery, video testimonials, client reviews, or bank/UPI payment details —
> were intentionally left out of this build rather than filled with invented
> placeholder content, since this is a live business card. See "Adding
> sections back" below if you'd like to re-introduce any of these once you
> have real content (photos, reviews, etc.) for them.

---

## 1. Getting Started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) on your phone (same
Wi-Fi network, using your computer's LAN IP) or in a browser's mobile device toolbar
to see the mobile-first layout.

### Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production build is output to `dist/`.

> **Note:** This project was assembled in a sandboxed environment without
> registry access, so `npm install` / `npm run build` could not be fully run
> end-to-end here. Every source file was checked individually with esbuild
> for syntax errors, and every import path was verified to resolve to a real
> file — but please run both commands after downloading, and let me know if
> you hit a dependency version mismatch so I can patch it.

---

## 2. Editing Content (No Code Changes Needed)

Everything user-facing lives in `src/data/`:

| File | Controls |
|---|---|
| `company.js` | Owner name, company name, tagline, both phone numbers, WhatsApp number, email, address, map link, about text |
| `services.js` | The 4 broad category cards (title, description, image, WhatsApp message) |
| `products.js` | The 6 clickable product cards → each opens WhatsApp with its own pre-filled message |

Replace the placeholder SVGs in `src/assets/images/` (product1–6.svg,
service1–4.svg) with real product photos when you have them — `.jpg`/`.webp`
recommended. `lobtex-logo.png` is your real logo, already wired up as both
the profile image and the PWA install icons.

### WhatsApp number
Update `whatsappNumber` and `phoneRaw` in `src/data/company.js`. Every
"Enquire Now" / product click / quick-action WhatsApp button reads from the
shared `sendWhatsApp()` helper in `src/utils/whatsapp.js`, so you only need to
change it in one place.

### Two phone numbers
Both numbers from your physical card are wired in: `phone`/`phoneRaw` (used
for WhatsApp + the primary "Call" button) and `phoneSecondary` (used for the
second "Call 2" quick-action, the Contact section, and included in the
downloaded vCard).

---

## 3. PWA / Icons

- Manifest, theme color, and icons are configured in `vite.config.js` under
  `VitePWA({ manifest: {...} })`.
- Icons are real PNGs generated from your logo at `public/icons/icon-192.png`
  and `icon-512.png` — no placeholder icons to swap out.
- `vite-plugin-pwa` auto-injects the manifest `<link>` and service worker
  registration into `index.html` at build time — no manual wiring needed.
- Test installability with Chrome DevTools → Application → Manifest, or
  Lighthouse's PWA audit, after running `npm run build && npm run preview`.

---

## 4. Deployment

### Vercel / Netlify
Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
No other configuration required — both platforms handle client-side routing
automatically for a single-page app.

### GitHub Pages
This is already set up for **zero-config, automatic deployment**:

1. Push this project to a new GitHub repository.
2. In the repo, go to **Settings → Pages → Source**, and select **GitHub Actions**.
3. Push (or re-push) to the `main` branch. `.github/workflows/deploy.yml` will
   automatically build the project and deploy it — no manual steps, no
   editing `vite.config.js`.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`
   within a minute or two. Check the **Actions** tab on GitHub to watch the
   build/deploy progress or debug a failure.

How this works under the hood, in case you want to tweak it:
- `vite.config.js`'s `base` path is set automatically from a
  `GITHUB_PAGES_BASE` environment variable that the workflow provides at
  build time (using the repo's own name) — so it adapts even if you rename
  the repo, with nothing to hand-edit.
- The app uses `HashRouter` (URLs look like `/#/section`) instead of
  `BrowserRouter`, so it works correctly on GitHub Pages without needing a
  `404.html` fallback trick for deep-link refreshes.

If you'd rather deploy manually instead of via Actions, run
`GITHUB_PAGES_BASE=/your-repo-name/ npm run build` and push the contents of
`dist/` to a `gh-pages` branch.

A placeholder domain (`thelobtexgroup.example.com`) is used in
`public/sitemap.xml` and the Open Graph tags — update this to your real
`github.io` URL (or a custom domain if you add one), or remove `og:url`/the
sitemap if you won't have one.

---

## 5. Project Structure

```
src/
  components/   → Hero, QuickActions, About, Services, Products, Contact, Footer, FloatingNav, SplashScreen
  pages/        → Home.jsx assembles all sections + SEO (Helmet) tags
  data/         → company.js, services.js, products.js — no hardcoded copy in components
  utils/        → sendWhatsApp, downloadVCard (Save Contact), shareSite (Web Share API)
  assets/images → lobtex-logo.png (real), cover.svg + product/service SVGs (placeholders — swap for real photos)
  index.css     → Tailwind base + reusable component classes (.card, .btn-primary, .glass)
public/
  icons/        → Real PWA icons generated from your logo (icon-192.png, icon-512.png)
  robots.txt, sitemap.xml, favicon.png
```

---

## 6. Customizing the Look

- Brand color scale (`brand-50`…`brand-950`) is set to navy/blue to match
  your logo, and fonts (`font-display`, `font-body`) are defined in
  `tailwind.config.js` — change these to reskin the site's palette and
  typography in one place.
- Reusable classes like `.card`, `.glass`, `.btn-primary`, `.ripple` live in
  `src/index.css` under `@layer components`.

---

## 7. What's Intentionally Not Included (and how to add it back)

This is **not** an e-commerce site: no cart, checkout, payment processing,
login, or admin panel — it's a static, informational business card.

The following sections were part of the original template but were removed
from this build because no real content was supplied for them. To bring any
back, you'd re-create a small `src/data/*.js` file for it, a component under
`src/components/`, and import it into `src/pages/Home.jsx`:

- **Gallery** — needs real project/product photos
- **Videos** — needs real YouTube video IDs
- **Testimonials** — needs real client reviews (fabricated reviews on a live
  business page would be misleading)
- **Payment / Bank Details** — needs your real UPI ID / bank account details
  (a placeholder-looking account number on a live page risks being mistaken
  for real payment info)
- **Social Media icons** — needs your real Instagram/Facebook/LinkedIn/YouTube
  handles

Just send over the real content for whichever of these you'd like, and I can
wire it back in.
