import type { Content } from './types';

export const en: Content = {
  meta: {
    title: 'Freelance AI Engineer — Voice AI, Agents & Full-Stack AI | Jakob Grünwald',
    description:
      'Freelance AI engineer building full-stack AI products and production voice & chat agents — shipped with tests, evals and CI. Mathematics and computational-neuroscience background; evidence-driven engineering. Clients across Germany, the UAE and Saudi Arabia. Privacy-first, no tracking.',
  },
  nav: {
    services: 'Services',
    work: 'Work',
    process: 'How I work',
    contact: 'Contact',
    cta: 'Request project',
  },
  hero: {
    eyebrow: 'Freelance AI Engineer',
    name: 'Jakob Grünwald',
    role: 'Full-Stack AI Engineering',
    tagline:
      'Freelance AI engineer building production voice & chat agents, agentic systems, and full-stack AI products — shipped with tests, evals and CI, not demos.',
    location: 'Braunschweig, Germany — working with clients worldwide',
    lede:
      'I design and ship full-stack AI products and voice & chat agents end to end — from the model and prompt layer up to a polished UI and the infrastructure that keeps it running. My production voice and chat agents serve clients across the UAE, Saudi Arabia and Germany, on reusable infrastructure that carries roughly 90% from one engagement to the next — and I build full-stack AI products of my own, like a chat-first résumé agent backed by ~500 tests. Mathematics and computational neuroscience taught me to be precise where it matters — and to prove it.',
    ctaPrimary: 'Request project',
    ctaSecondary: 'See how I work',
  },
  metrics: [
    { value: '5+', label: 'Production voice & chat agents shipped' },
    { value: '3', label: 'Countries where agents run in production — UAE, Saudi Arabia, Germany' },
    { value: '~90%', label: 'Infrastructure reused engagement to engagement' },
    { value: '1,200+', label: 'Automated tests in the largest agent suite' },
  ],
  services: {
    label: 'Services',
    intro:
      'An audit-first ladder — and you work directly with the engineer who builds it, not a project manager. We start small and low-risk, prove value, then build. Every engagement ships with tests, evals and CI, and you own all the code.',
    tiers: [
      {
        name: 'AI Audit & Roadmap',
        forWho:
          'Teams with an AI idea or an existing system who want a clear, low-risk first step before committing budget.',
        deliverables: [
          'A written assessment of where AI fits, what is feasible, and what is not',
          'A prioritised roadmap with scoped phases, risks and effort ranges',
          'A working proof-of-concept on the riskiest part',
        ],
        engagement: 'Fixed scope, 1–2 weeks, fixed price agreed up front',
        outcome:
          'You leave with a concrete plan and evidence — and the freedom to build it with me or anyone else.',
      },
      {
        name: 'Build Engagement',
        forWho:
          'Clients who need a full-stack AI product or feature built and shipped — an agentic web app, a RAG system, or a production voice or chat agent — integrated with the systems they already run.',
        deliverables: [
          'A production AI product or feature — front end to infrastructure — integrated with your CRM, telephony or messaging stack',
          'An automated test suite, evals and CI/CD pipeline built from zero',
          'Documentation and a clean handover so your team can run and extend it',
        ],
        engagement: 'Scoped project, typically 4–6 weeks, fixed scope and price',
        outcome:
          'A working system in production with the safety net to change it confidently — and no vendor lock-in.',
      },
      {
        name: 'Handover & Enablement',
        forWho:
          'Teams who want to own what gets built — with their own developers or IT able to run, maintain and extend it, instead of depending on one outside person.',
        deliverables: [
          'Complete documentation — architecture, runbooks, and the reasoning behind the design',
          'Hands-on training for your developers or IT to run, debug and extend the system themselves',
          'Eval and monitoring setup so model behaviour stays measurable after I step back',
        ],
        engagement: 'Built into every project — ongoing advisory available on request',
        outcome:
          'Your team owns the system and can maintain it without me — with the option to keep a senior hand on call if you want one.',
      },
    ],
  },
  process: {
    label: 'How I work',
    intro:
      'I would rather be measured than impressive. These are commitments you can hold me to — not adjectives.',
    promises: [
      {
        title: 'One senior engineer, start to finish',
        detail:
          'You work with me directly from scoping to handover — no account managers, no hand-offs, no overhead between you and the code.',
      },
      {
        title: 'Weekly written updates',
        detail:
          'Every week, a short written update on what shipped, what is next, and any open decisions — so you are never guessing about status.',
      },
      {
        title: 'Ships with tests and CI',
        detail:
          'Code arrives with an automated test suite and a working CI pipeline, so changes stay safe long after the engagement ends.',
      },
      {
        title: 'Reply within one business day',
        detail:
          'Emails get a substantive reply within one business day, even when the full answer takes longer.',
      },
      {
        title: 'You own all code and IP',
        detail:
          'You own the code — documented and handed over, free of lock-in, on your own infrastructure. I would rather train your team to run and extend it than leave you a black box only I can touch.',
      },
      {
        title: 'AI ships with evals, not vibes',
        detail:
          'Model behaviour is measured with evals and structured tests before it reaches production, so quality is a number you can track — not a feeling.',
      },
      {
        title: 'Research-grade rigor on the hard parts',
        detail:
          'When a problem is genuinely difficult, I apply the discipline behind my peer-reviewed research: define it precisely, test the assumptions, then build.',
      },
    ],
  },
  estimates: {
    label: 'Typical project shapes',
    intro:
      'Every project is scoped individually, but most engagements fall into one of three shapes. These are starting points for a conversation, not quotes.',
    shapes: [
      {
        duration: '~1–2 week sprint',
        outcome:
          'An audit and roadmap, or a focused proof-of-concept on the riskiest part of an idea — enough to decide with confidence.',
      },
      {
        duration: '~4–6 week build',
        outcome:
          'A production AI feature or MVP shipped with tests, evals and CI — a full-stack AI product, agentic web app, RAG system, or a voice or chat agent in real use.',
      },
      {
        duration: 'Handover, then optional support',
        outcome:
          'Every build ends with complete docs and training, so your team owns and maintains it. A senior hand stays available afterwards if you want one — never the default.',
      },
    ],
    note:
      'There is no published day rate. Scope and price are fixed together in a short discovery call, so you know the number before any work begins.',
  },
  projects: {
    label: 'Selected work',
    clientLabel: 'Client engagements · references on request',
    personalLabel: 'Open-source & personal projects',
    client: [
      {
        title: 'Real-estate & mortgage bot suite — UAE',
        sub: 'Client engagement · Conversational & Voice AI',
        body:
          'Four production bots: inbound WhatsApp and voice plus outbound calling, bilingual English/Arabic. Integrated with a 200+ field CRM and WhatsApp Business, with BANT lead qualification and regulatory do-not-call gating built in. A multi-model pipeline separates dialogue, QA, extraction and formatting — and 1,200+ automated tests hold the whole suite in place.',
      },
      {
        title: 'Dealership booking & qualification bots — Germany & Saudi Arabia',
        sub: 'Client engagement · Conversational & Voice AI',
        body:
          'Inbound service-appointment booking and outbound lead qualification for premium dealer networks, up to three languages per bot (DE/EN/FR and AR/EN). Live inventory and real-time slot-search APIs let callers actually book — not just get transferred — with CRM lead routing behind it and 180+ automated tests per deployment.',
      },
      {
        title: 'B2B telecom outbound qualification — Germany',
        sub: 'Client engagement · Conversational & Voice AI',
        body:
          'An outbound qualification bot covering 350+ target cities, extracting 27 structured fields per call. A PostgreSQL name-disambiguation service resolves contacts against a 34,000-name database, so each call reaches the right person and leaves clean, structured data behind.',
      },
    ],
    personal: [
      {
        title: 'ResumeTailor',
        sub: 'Open-source · Full-stack AI product',
        body:
          'A full-stack AI product I built end to end: a chat-first agent that helps people create and tailor résumés. The current version runs on Next.js, the Vercel AI SDK and Drizzle ORM with ~500 tests; an earlier full-stack v1 paired a React front end with a FastAPI / LangGraph backend and a self-built PDF/DOCX generation pipeline — and it is open source.',
        link: 'https://github.com/JakobGruen/ResumeTailor',
        linkLabel: 'v1 on GitHub →',
      },
      {
        title: 'Happy Coder — voice & UX extensions',
        sub: 'Open-source · Voice AI & developer UX',
        body:
          'An open-source fork with ~480 commits over roughly seven months. I built a full voice layer from scratch on LiveKit/Pipecat, redesigned the permission UX, and set up CI/CD from zero. React Native/Expo on the front, Fastify and Python behind.',
        link: 'https://github.com/JakobGruen/happy',
        linkLabel: 'View on GitHub →',
      },
      {
        title: 'green-wald.de',
        sub: 'Open-source · This very site',
        body:
          'This very site: a bilingual, privacy-first static build on Astro 5 — no cookies, no analytics, no third-party requests, self-hosted fonts. Hardened with a strict Content-Security-Policy, a typed EN/DE content layer that keeps the two languages from drifting, and accessible progressive enhancement throughout. Open source, end to end.',
        link: 'https://github.com/JakobGruen/green-wald-site',
        linkLabel: 'View on GitHub →',
      },
      {
        title: 'Developer tooling',
        sub: 'Personal · how I keep delivery fast & reliable',
        body:
          'Not a product I sell — the engine behind ~90% infrastructure reuse, and a window into how I work: custom MCP servers (one exposing 73 tools, backed by 452 tests), a 3-tier TypeScript testing library (902 self-tests), a ~8,800-LOC type-safe workflow framework, and a Claude Code plugin that encodes the full project lifecycle as 20 invokable skills.',
      },
    ],
  },
  diagram: {
    label: 'How a production voice agent fits together',
    caption:
      'A typical production voice-AI pipeline: telephony and messaging in, speech-to-text, an orchestration layer running the dialogue model plus tools and CRM lookups, then text-to-speech back to the caller — wrapped in evals, observability and CI.',
    a11yDesc:
      'Flow diagram: a caller on telephony or WhatsApp goes to speech-to-text, then to an orchestration layer (the dialogue model with tools), then text-to-speech, then an audio reply back to the caller. The orchestration layer draws on a knowledge base, CRM and tools, and quality gates.',
    nodes: {
      caller: 'Caller', callerSub: 'Telephony / WhatsApp',
      stt: 'Speech-to-Text', sttSub: 'audio → text',
      orchestration: 'Orchestration', orchestrationSub: 'dialogue model + tools',
      tts: 'Text-to-Speech', ttsSub: 'text → audio',
      reply: 'Audio reply', replySub: 'back to caller',
      kb: 'Knowledge base', kbSub: 'RAG / vectors',
      crm: 'CRM & tools', crmSub: 'bookings, lookups',
      quality: 'Quality gates', qualitySub: 'evals + tests',
    },
  },
  background: {
    label: 'Background',
    body:
      'I came to AI engineering the long way around: a mathematics degree, then computational neuroscience research, then production engineering. That path taught me to sit with hard, ambiguous problems and test my way out of them — which is exactly what shipping reliable AI demands. I read the research, but I am paid to make things work in production.',
    bullets: [
      "MSc, Modeling of Neuronal & Cognitive Systems — Université Côte d'Azur (16.3/20, <em>magna cum laude</em>)",
      'BSc, Mathematics — Freie Universität Berlin',
      'Microsoft Certified: <a href="https://learn.microsoft.com/en-gb/users/jakobgrnwald-5514/credentials/89f0adb5379ed51f" target="_blank" rel="noopener">Azure AI Engineer Associate</a>',
      'Computational-neuroscience research with three papers — one published in the <em>Journal of Vision</em> (2023, co-author) and two first-author manuscripts in preparation (2026)',
      "Research roles spanning TU Berlin, Université Côte d'Azur, CNRS and McGill",
    ],
  },
  toolbox: {
    label: 'Toolbox',
    groups: [
      { label: 'Languages', chips: ['Python', 'TypeScript', 'R', 'C', 'MATLAB', 'Mathematica'] },
      {
        label: 'AI & ML',
        chips: ['Agentic AI', 'Conversational & Voice AI', 'LLMs', 'RAG', 'MCP', 'Pipecat', 'LiveKit', 'Deepgram', 'PyTorch', 'TensorFlow', 'Spiking Neural Networks'],
      },
      {
        label: 'Frameworks & stack',
        chips: ['FastAPI', 'Next.js', 'React', 'LangChain', 'LangGraph', 'Vercel AI SDK', 'SQLAlchemy 2.0', 'Pydantic', 'Zod', 'Supabase'],
      },
      { label: 'Cloud & DevOps', chips: ['Docker', 'Kubernetes', 'Azure', 'GitHub Actions', 'Coolify', 'HPC'] },
    ],
  },
  sectors: {
    label: 'Sectors',
    intro: 'NDA-bound on most client work — described by sector and region. References on request.',
    tiles: [
      { sector: 'Real-estate & mortgage', region: 'UAE' },
      { sector: 'Automotive dealerships', region: 'Germany & Saudi Arabia' },
      { sector: 'B2B telecom', region: 'Germany' },
      { sector: 'Coaching & training', region: 'Germany' },
      { sector: 'Automotive glass / billing', region: 'Germany' },
    ],
  },
  languages: {
    label: 'Languages',
    items: [
      { name: 'German', level: 'Native' },
      { name: 'English', level: 'Fluent' },
      { name: 'Thai', level: 'Intermediate' },
      { name: 'Spanish', level: 'Intermediate' },
      { name: 'French', level: 'Beginner' },
      { name: 'Russian', level: 'Beginner' },
    ],
  },
  contact: {
    label: "Let's build something reliable",
    body:
      'Have a full-stack AI product, a voice or chat agent, or a hard tooling problem you want done properly — with tests, evals and a clean handover? Tell me what you are working on and what a good outcome looks like, and I will reply within one business day.',
    availability: 'Currently taking selective new projects',
    emailLabel: 'Request project',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
    copyLabel: 'Copy',
    copiedLabel: 'Copied ✓',
    request: {
      subject: "New project — [your company / what you're building]",
      body: `Hi Jakob,

I came across your site and would like to talk about a project. A few quick details below — fill in whatever's relevant and feel free to skip the rest.

WHAT WE'RE BUILDING
(e.g. a voice or chat agent, a full-stack AI product, a RAG system, an integration — and roughly what it should do)


PROBLEM / GOAL
(what's broken or missing today, and what a good outcome looks like)


TIMELINE & ROUGH BUDGET
(any deadline you're working toward, and a ballpark budget range if you have one)


ABOUT US
(company, sector, where you're based, and the systems we'd integrate with — CRM, telephony, messaging, etc.)


ANYTHING ELSE
(links, docs, constraints, or questions)


Thanks,
[Your name]`,
    },
  },
  footer: {
    rights: 'Jakob Grünwald',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    privacyLine: 'No cookies, no tracking, no third-party services — fonts served locally.',
  },
};
