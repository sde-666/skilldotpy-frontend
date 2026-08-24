# Skilldotpy - Pure Astro + MDX + React Islands Architecture

This repository contains the ultra-fast **Pure Astro + Markdown / MDX** stack designed for **#1 Google Search Ranking** and **100/100 Core Web Vitals** for NIELIT O Level & CCC examination content.

---

## 🚀 Key Advantages of this Architecture

1. **Zero JavaScript Shipped on Content Pages**:
   - Homepage (`/`), O Level Hub (`/o-level`), CCC Hub (`/ccc`), and all Chapter Notes (`/notes/...`) render as **100% Pure HTML + CSS**.
   - Ultra-fast download on mobile networks (< 0.5s).

2. **Astro Content Collections (MDX)**:
   - Chapter notes live in `src/content/notes/*.mdx`.
   - Adding a new chapter is as easy as adding a `.mdx` file with frontmatter metadata.
   - Built-in schema validation via Zod in `src/content/config.ts`.

3. **React Islands**:
   - Interactive features (CBT Mock Test timer, Python Practical Code Editor, and AI Assistant) run as isolated React components (`client:load` / `client:only="react"`).

4. **Zero-Error SEO Engine**:
   - Every page outputs exactly **1 Title Tag**, **1 Meta Description**, **1 Canonical URL**, and rich Schema.org `WebSite`, `EducationalOrganization`, and `Course` JSON-LD graphs.

---

## 📦 How to Run Locally

```bash
# Navigate to the astro folder
cd astro

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🌐 How to Deploy to Vercel

1. Push the contents of the `astro/` directory to your GitHub repository (e.g. `sde-666/skilldotpy-astro`).
2. Go to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Astro**.
5. Click **Deploy**. Vercel will automatically build and serve your static pages globally with edge caching!

---

## ⚡ Connecting with Render Backend (API)

Your existing Node.js / Express backend on **Render** requires **no changes**.
In your React components or client-side fetch calls, configure:
```ts
const API_URL = import.meta.env.PUBLIC_API_URL || 'https://your-api-on-render.onrender.com';
```
And add `PUBLIC_API_URL` to your Vercel Environment Variables.
