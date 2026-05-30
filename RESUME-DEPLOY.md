# green-wald.de — deploy state & operations

> Updated 2026-05-30 (evening). The Astro rebuild is **LIVE** on the apex.

## Status: ✅ DEPLOYED & VERIFIED
The new Astro site serves on https://green-wald.de (EN) and /de/ (DE), verified
via Playwright on the live origin: 0 console errors, all client JS runs, mobile
nav works, bilingual diagram, prefilled "Request project" mailto.

## How it's served
- Container **`green-wald-site`** — `nginx:alpine` on the `coolify` Docker network.
  - `-v .../dist:/usr/share/nginx/html:ro`  (directory mount → rebuilds appear without recreating the container)
  - `-v .../nginx.conf:/etc/nginx/conf.d/default.conf:ro`  (single-file mount → `docker restart green-wald-site` after editing nginx.conf)
- Traefik route `/data/coolify/proxy/dynamic/green-wald.yaml` → `green-wald-service` → `http://green-wald-site:80`.
- Old `green-wald-static` container is the rollback (still has the old hand-written HTML at `/var/www/green-wald.de`).

## Redeploy after content/code changes
```bash
cd /home/jakob/projects/green-wald-site
npm run build            # → dist/  (directory mount picks it up live)
# nginx.conf change only: docker restart green-wald-site
```

## Verify (live)
```bash
# headers present on BOTH / and /_astro assets (the add_header-inheritance fix):
docker exec green-wald-site sh -c 'wget -qS -O /dev/null http://127.0.0.1/ 2>&1' | grep -i content-security
# Playwright: load https://green-wald.de/?v=N (cache-bust), assert 0 console errors.
```

## Rollback
Point `green-wald.yaml` service URL back to `http://green-wald-static:80` (Traefik
file-provider auto-reloads). `green-wald-static` is still running.

## Key implementation notes (so future-me doesn't relearn them)
- **CSP**: nginx header `script-src 'self'` (strict). Site JS lives in `public/site.js`
  (same-origin) — NOT inlined — so the strict CSP allows it. Do **not** reintroduce
  Astro hoisted `<script>` blocks; they get inlined and CSP-blocked. `style-src` keeps
  `'unsafe-inline'` for Astro's tiny `:root` variables block.
- **add_header inheritance**: every `location` block that sets a cache header MUST
  re-declare the full security-header set (nginx drops inherited add_headers once a
  block sets its own). nginx.conf does this inline.
- **no-JS guard**: `<html class="no-js">`; site.js swaps to `js`. CSS hides reveal/
  collapses nav only under `.js` → content never trapped behind JS.
- **Portrait**: `public/portrait.{webp,jpg}` (640², EXIF baked, ~21/28 KB) via
  `scripts/proc-portrait.mjs` (sharp). Source 1874² was at `public/portrait.jpg`.
- **Palette**: emerald `--accent #43c08c` + sky `--accent-sky #7badd2` + navy
  `--navy #27374f`, derived from the portrait (see `.review/portrait-palette.md`).
- **Content decisions** (see `.review/content-brief.md`): H1 = "Full-Stack AI
  Engineering" (name = kicker); 3 deployment countries (NOT Switzerland); papers =
  1 published + 2 in prep; no published price; ResumeTailor = open-source personal;
  CTA = "Request project"/"Projekt anfragen" with prefilled mailto; no recency framing.

## Open follow-ups
- **Coolify adoption**: still a manual container (app-creation not exposed via Coolify MCP).
  Repo is Coolify-ready (Dockerfile). To adopt: create an app in the UI pointing at this
  repo (needs a git remote + commit), git-push CI. TLS handled by Traefik either way.
- Repo is a fresh `git init` with NO commits yet (Jakob hasn't asked to commit).
- ResumeTailor public deploy is planned but unannounced — keep copy at "open source".
