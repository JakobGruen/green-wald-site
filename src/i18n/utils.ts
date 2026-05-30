import type { Content } from './types';
import { en } from './en';
import { de } from './de';

export const languages = { en: 'English', de: 'Deutsch' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

const dict: Record<Lang, Content> = { en, de };

export function useTranslations(lang: Lang): Content {
  return dict[lang];
}

/** Derive the active language from a URL pathname (/de/... -> 'de'). */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'de') return 'de';
  return 'en';
}

/**
 * Given the current pathname, return the equivalent path in `target` language.
 * EN lives at the apex (/foo); DE lives under /de/foo.
 */
export function alternatePath(pathname: string, target: Lang): string {
  // strip trailing slash (except root)
  let p = pathname.replace(/\/+$/, '');
  if (p === '') p = '/';

  const isDe = p === '/de' || p.startsWith('/de/');
  // canonical path without locale prefix
  let base = isDe ? p.replace(/^\/de/, '') : p;
  if (base === '') base = '/';

  if (target === 'de') {
    return base === '/' ? '/de/' : `/de${base}`;
  }
  return base === '/' ? '/' : base;
}

/** Build a locale-correct internal href from a locale-agnostic path like "/impressum". */
export function localizedHref(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'de') return clean === '/' ? '/de/' : `/de${clean}`;
  return clean;
}

const EMAIL = 'jakob@gruenwald-bs.de';

/**
 * Build a "Request project" mailto with a prefilled subject + body skeleton.
 * encodeURIComponent preserves newlines (%0A) and the section headers across
 * mail clients. The visible address remains a fallback for webmail users.
 */
export function requestMailto(lang: Lang): string {
  const c = dict[lang].contact.request;
  return `mailto:${EMAIL}?subject=${encodeURIComponent(c.subject)}&body=${encodeURIComponent(c.body)}`;
}
