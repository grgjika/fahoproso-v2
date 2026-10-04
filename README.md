# Fahoproso

Marketing site for Fahoproso (www.fahoproso.com), built with Next.js (static export) and Tailwind CSS. Pages are available in English, Spanish (`/es`), Greek (`/el`) and Albanian (`/sq`).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export to ./out
```

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`, which lints, builds and publishes `./out` to GitHub Pages.

## Notes

- Keep images in `public/images` under ~1920px wide and compressed; `next/image` optimization is disabled for static export.
- When adding a page, add it to `app/sitemap.ts`.
