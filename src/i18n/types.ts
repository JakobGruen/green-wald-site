// Shared content shape for both locales. Because en.ts and de.ts both satisfy
// `Content`, a missing or mistyped key in either language is a compile error —
// which keeps the two languages from drifting apart.

export interface Metric {
  value: string;
  label: string;
}

export interface ServiceTier {
  name: string;
  forWho: string;
  deliverables: string[];
  engagement: string;
  outcome: string;
}

export interface Promise {
  title: string;
  detail: string;
}

export interface ProjectShape {
  duration: string;
  outcome: string;
}

export interface Project {
  title: string;
  sub: string;
  body: string;
  link?: string;
  linkLabel?: string;
}

export interface SkillGroup {
  label: string;
  chips: string[];
}

export interface SectorTile {
  sector: string;
  region: string;
}

export interface LangItem {
  name: string;
  level: string;
}

export interface Content {
  meta: { title: string; description: string };
  nav: { services: string; work: string; process: string; contact: string; cta: string };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    tagline: string;
    location: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  metrics: Metric[];
  services: { label: string; intro: string; tiers: ServiceTier[] };
  process: { label: string; intro: string; promises: Promise[] };
  estimates: { label: string; intro: string; shapes: ProjectShape[]; note: string };
  projects: {
    label: string;
    clientLabel: string;
    personalLabel: string;
    client: Project[];
    personal: Project[];
  };
  diagram: {
    label: string;
    caption: string;
    a11yDesc: string;
    nodes: {
      caller: string; callerSub: string;
      stt: string; sttSub: string;
      orchestration: string; orchestrationSub: string;
      tts: string; ttsSub: string;
      reply: string; replySub: string;
      kb: string; kbSub: string;
      crm: string; crmSub: string;
      quality: string; qualitySub: string;
    };
  };
  background: { label: string; body: string; bullets: string[] };
  toolbox: { label: string; groups: SkillGroup[] };
  sectors: { label: string; intro: string; tiles: SectorTile[] };
  languages: { label: string; items: LangItem[] };
  contact: {
    label: string;
    body: string;
    availability: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
    copyLabel: string;
    copiedLabel: string;
    // Prefilled "Request project" email (subject + body skeleton).
    request: { subject: string; body: string };
  };
  footer: { rights: string; impressum: string; datenschutz: string; privacyLine: string };
}

// ---- Legal pages (German-authoritative, English courtesy translation) ----
export interface LegalSection {
  heading: string;
  // paragraphs may contain limited inline HTML (links/<br>) — rendered with set:html
  paragraphs: string[];
}

export interface LegalDoc {
  title: string;
  intro?: string;
  sections: LegalSection[];
}
