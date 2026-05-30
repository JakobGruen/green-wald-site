// Client enhancements for green-wald.de.
// Served from /public as a same-origin file so it satisfies the strict CSP
// (script-src 'self') WITHOUT any inline-hash or 'unsafe-inline' — Astro would
// otherwise inline this as a hashless <script type="module"> and the CSP would
// block it (and with it: reveal, sticky nav, progress bar, language memory,
// and the mobile menu). Keep this file dependency-free and framework-free.

// Progressive-enhancement hook: mark that JS is alive so CSS can hide things
// for animation ONLY when we can guarantee we'll reveal them again. Without JS
// (or if this file ever fails to load) content stays fully visible.
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// --- Reveal on scroll (respects reduced-motion) ---
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}

// --- Sticky-nav state + scroll-progress bar (rAF-batched) ---
const nav = document.getElementById('nav');
const bar = document.getElementById('progress');
let rafPending = false;
const paint = () => {
  rafPending = false;
  const y = window.scrollY;
  if (nav) nav.classList.toggle('scrolled', y > 8);
  if (bar && !reduce) {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  }
};
const onScroll = () => {
  if (!rafPending) {
    rafPending = true;
    requestAnimationFrame(paint);
  }
};
paint();
window.addEventListener('scroll', onScroll, { passive: true });

// --- Mobile navigation (APG disclosure pattern) ---
// Button is the single source of truth via aria-expanded; CSS styles the open
// panel from [aria-expanded='true']. No focus trap (not a modal) — Tab flows
// from the button into the revealed links because the nav follows it in the DOM.
const navToggle = document.getElementById('nav-toggle');
const primaryNav = document.getElementById('primary-nav');
if (navToggle && primaryNav) {
  const setOpen = (open) => {
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    primaryNav.classList.toggle('open', open);
  };
  navToggle.addEventListener('click', () => {
    setOpen(navToggle.getAttribute('aria-expanded') !== 'true');
  });
  // Close on link click (single-page anchors).
  primaryNav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });
  // Escape closes and returns focus to the toggle.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      navToggle.focus();
    }
  });
  // Close when clicking outside the header.
  document.addEventListener('click', (e) => {
    if (
      navToggle.getAttribute('aria-expanded') === 'true' &&
      !e.target.closest('#primary-nav') &&
      !e.target.closest('#nav-toggle')
    ) {
      setOpen(false);
    }
  });
  // Reset the panel when resized up to desktop.
  window.matchMedia('(min-width: 841px)').addEventListener('change', (m) => {
    if (m.matches) setOpen(false);
  });
}

// --- Remember the user's manual language choice (no auto-redirect) ---
document.querySelectorAll('[data-setlang]').forEach((a) => {
  a.addEventListener('click', () => {
    try {
      localStorage.setItem('lang', a.dataset.setlang || 'en');
    } catch (_) {}
  });
});

// --- Copy-to-clipboard for the contact email (degrades to selectable text) ---
document.querySelectorAll('.copy-email').forEach((btn) => {
  const addr = btn.dataset.copy;
  const label = btn.dataset.copyLabel || 'Copy';
  const copied = btn.dataset.copiedLabel || 'Copied';
  if (!addr || !navigator.clipboard) return;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(addr);
      btn.textContent = copied;
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = label;
        btn.classList.remove('copied');
      }, 2000);
    } catch (_) {}
  });
});
