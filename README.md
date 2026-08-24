# lukeacoleman.dev

Personal site for Luke Coleman — web & app developer. Built with [Astro](https://astro.build) as a static site.

## Local development

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Privacy policy

One shared policy lives at `/privacy` (`src/pages/privacy/index.astro`). Use that URL for any App Store listing. Update the page (and the “Last updated” date) when your practices change.

## Deploy to GitHub Pages

1. Push this repo to GitHub (default branch `main`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually). The workflow builds with `astro build` and publishes `dist/`.

### Custom domain

`public/CNAME` is set to `lukeacoleman.dev`. In your DNS provider, point the domain at GitHub Pages (A/ALIAS or CNAME per [GitHub’s docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)). Enable **Enforce HTTPS** after DNS propagates.

`astro.config.mjs` uses `site: 'https://lukeacoleman.dev'` and `base: '/'` for the custom domain.

## Vercel (optional)

The site is fully static. You can also import the repo in [Vercel](https://vercel.com) with framework preset **Astro**; no code changes required.
