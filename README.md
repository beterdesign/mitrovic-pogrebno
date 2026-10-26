# Pogrebno Mitrović

Homepage za https://pogrebnomitrovic.com, prebačen 1:1 iz Webflow exporta u Astro.

- `src/pages/index.astro` — stranica (Webflow markup, skripte su `is:inline`)
- `public/` — Webflow CSS, JS, fontovi i slike

```bash
npm install
npm run dev
npm run build   # izlaz u dist/
```

Hosting: Cloudflare Workers (`wrangler.jsonc`), build komanda `npm run build`.
