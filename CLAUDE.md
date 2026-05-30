# green-wald.de — Project CLAUDE.md

Bilingual static **Astro 5** site — Jakob's freelance landing page. EN at `/`, DE at `/de/`.
Dark theme, emerald + sky + navy palette. Privacy-first (no cookies/tracking/third-party).

## Commands
- `npm run dev` (localhost:4321) · `npm run build` → `dist/` · `npm run preview`
- Node 20 + **npm** (pnpm needs Node 22 — don't use it here).
- Redeploy live: `npm run build` (the running `green-wald-site` container directory-mounts `dist/`, so it updates with no restart). nginx.conf change → `docker restart green-wald-site`. Full ops/rollback: `RESUME-DEPLOY.md`.

## Where things live
- **All copy**: `src/i18n/en.ts` + `de.ts`, typed by `types.ts` (missing key = compile error → no DE/EN drift). Legal = `legal.ts` (German-authoritative). SEO/JSON-LD = `seo.ts`. Locale + prefilled-mailto helpers = `utils.ts`.
- **Layout/sections**: `src/layouts/Base.astro` (head + external script tag), `src/components/{Nav,Home,Diagram,Footer,Head,Legal}.astro`. The whole homepage is `Home.astro`.
- **Client JS**: `public/site.js` (single external file). **Styles**: `src/styles/global.css` (CSS custom props at `:root`).
- **Pages**: `src/pages/{index,impressum,datenschutz,404}.astro` + `de/` mirrors.
- **Assets**: `public/` — `portrait.{webp,jpg}`, `favicon.{svg,ico}`, `og-image.png`, `site.js`, `robots.txt`.
- **Build/infra**: `astro.config.mjs`, `nginx.conf`, `Dockerfile`, `scripts/proc-portrait.mjs`.
- `.review/` = planning artifacts (content brief, palette study) — not shipped, safe to ignore at runtime.

## Critical gotchas (see `.claude/rules/` for the why)
- ⚠️ **Never reintroduce Astro hoisted `<script>` blocks.** nginx CSP is strict `script-src 'self'` (no `unsafe-inline`); Astro inlines such scripts → the browser blocks ALL client JS in prod. Client JS must stay in `public/site.js`.
- ⚠️ **`.no-js` → `.js` guard**: `<html class="no-js">`; `site.js` swaps to `.js`. CSS only hides reveal / collapses the mobile nav under `.js` — content is never trapped behind JS.
- ⚠️ **nginx `add_header` doesn't inherit** once a `location` sets its own — every cache `location` in `nginx.conf` re-declares the full security-header set on purpose.
- Verify changes with **Playwright on the live origin** (cache-bust `?v=N`), asserting **0 console errors** — a file-only review missed the CSP-blocks-all-JS bug; the live console caught it.

## Content rules (Jakob-approved — see `.review/content-brief.md`)
- H1 = "Full-Stack AI Engineering"; full-stack co-leads with Voice AI; name is the kicker.
- Dev tooling stays demoted (never a service/title). Client work NDA-safe: sector + region, "references on request" — never name clients.
- 3 deployment countries (UAE, Saudi Arabia, Germany) — NOT Switzerland. Papers: 1 published + 2 in prep.
- No published price. CTA = "Request project"/"Projekt anfragen" with prefilled `mailto` — email only, no forms/booking.
- **No recency framing** (don't spotlight how recently Jakob started; don't hedge it either).

## State & repo
Live + Playwright-verified. Git remote: **`github.com/JakobGruen/green-wald-site` — PUBLIC**, default branch `main` (SSH). Not yet in Coolify (manual container; repo is Dockerfile-ready).

⚠️ **This repo is PUBLIC.** Before committing: never add secrets, tokens, or the internal day-rate (`.review/` is gitignored — keep it that way). The Impressum address + VAT in `src/i18n/legal.ts` are intentionally public (§5 DDG, already on the live site). Anything you'd not put on the live site does not belong in a commit. Commit/PR only when Jakob explicitly asks (his standing rule); prefer new commits over amending pushed history.
