# green-wald.de

Personal/freelance site for **Jakob Grünwald** — freelance AI engineer (Voice AI,
agents & full-stack AI products). Bilingual (EN default at `/`, DE at `/de/`), built
with [Astro](https://astro.build) 5, served as static files behind nginx + Traefik.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # -> ./dist (static)
npm run preview    # serve ./dist locally
```

## Deploy

Production serves `dist/` from an `nginx:alpine` container on the host's `coolify`
Docker network (Traefik resolves it by name; Let's Encrypt TLS). Two ways:

- **Live (current)** — manual container with a *directory* mount of `dist/` so a
  rebuild appears without recreating the container:
  ```bash
  npm run build
  # container already running as `green-wald-site`; dist/ is bind-mounted in.
  # nginx.conf change only → docker restart green-wald-site
  ```
- **Image** — `Dockerfile` is a multi-stage build (Node → nginx) for Coolify/CI later.

`nginx.conf` is hardened + privacy-first: no access logs, **strict `script-src 'self'`
CSP**, HSTS, no third-party requests. Full ops + rollback in `RESUME-DEPLOY.md`.

## Architecture

- **Content** lives in `src/i18n/en.ts` + `de.ts` — same typed shape (`types.ts`), so a
  missing key is a TypeScript error and the two languages can't drift. Legal pages
  (`legal.ts`) are **German-authoritative** with an English courtesy translation.
  SEO/JSON-LD in `seo.ts`; locale helpers + prefilled `mailto` in `utils.ts`.
- **Client JS** is `public/site.js` (scroll-reveal, sticky nav, progress bar, mobile
  menu, language memory, copy-email). It is **external on purpose** — see the CSP gotcha
  in `.claude/rules/`. Do not reintroduce Astro hoisted `<script>` blocks.
- **Portrait**: `public/portrait.{webp,jpg}` generated from a source photo by
  `scripts/proc-portrait.mjs` (uses sharp, bundled via Astro). Re-run after replacing the photo.
- **Palette**: emerald `--accent` + sky-blue + navy, derived from the portrait
  (see `.claude/memory/` / `.review/portrait-palette.md`).

`.review/` holds the planning artifacts (content brief, palette study, QA shots) — not shipped.

## Status

Live on green-wald.de, Playwright-verified (0 console errors, mobile nav, bilingual).
Source is public at [github.com/JakobGruen/green-wald-site](https://github.com/JakobGruen/green-wald-site)
(branch `main`). Served by a manual `nginx:alpine` container; not yet adopted into Coolify
(the `Dockerfile` is ready for it).
