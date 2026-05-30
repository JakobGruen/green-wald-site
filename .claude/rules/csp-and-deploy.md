# 🔒 CSP, Client JS & Deploy

## ⚠️ Strict CSP — client JS must be external

nginx serves `script-src 'self'` with **no `'unsafe-inline'`**. Astro inlines its
hoisted `<script>` blocks → the browser **blocks every one in production** (this
killed all client JS once: sticky nav, scroll-reveal, mobile menu, lang memory).

- **All client JS lives in `public/site.js`** (same-origin → allowed by `'self'`).
  Referenced once from `src/layouts/Base.astro` as `<script type="module" src="/site.js">`.
- **Do NOT** add Astro `<script>` blocks or `is:inline` executable scripts. (JSON-LD
  `application/ld+json` is data, not script — that one is fine.)
- `style-src` keeps `'unsafe-inline'` for Astro's tiny `:root` variables block — acceptable on a no-third-party site.
- Any new interactivity → extend `public/site.js`, keep it dependency-free.

## ⚠️ Progressive-enhancement guard

`<html class="no-js">`; `site.js` swaps it to `.js`. In `global.css`, only hide-for-
animation (`.reveal`) and collapse the mobile nav **under `.js`**. Never gate content
visibility on JS unconditionally — a blocked/failed script must still show everything.

## ⚠️ nginx add_header does NOT inherit

Once a `location` block sets any `add_header`, it stops inheriting server-level ones.
Every cache `location` in `nginx.conf` (`/_astro/`, fonts/media) therefore **re-declares
the full security-header set**. If you add a `location`, copy the headers in too, then
verify: `docker exec green-wald-site sh -c 'wget -qS -O /dev/null http://127.0.0.1/_astro/<file> 2>&1' | grep -i content-security`.

## Verify on the live origin

After any change: `npm run build`, then drive **Playwright** against `https://green-wald.de/?v=N`
(cache-bust) and assert **0 console errors**. A file-only review cannot catch the CSP
breakage — the live console can. Also check mobile nav (390px), EN+DE, no horizontal overflow.

## Privacy invariants (don't break)

No cookies, no analytics, no third-party origins (fonts self-hosted via `@fontsource-variable/inter`).
nginx has `access_log off`. The Datenschutz page asserts all of this — keep it true.
