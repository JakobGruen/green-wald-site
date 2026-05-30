// Structured data + Open Graph metadata. JSON-LD is built from an object and
// serialized, so there are no escaping pitfalls.

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://green-wald.de/#jakob',
      name: 'Jakob Grünwald',
      jobTitle: 'Freelance AI Engineer',
      url: 'https://green-wald.de',
      sameAs: [
        'https://github.com/JakobGruen',
        'https://www.linkedin.com/in/jakob-gr%C3%BCnwald-452520245',
      ],
      knowsAbout: [
        'Conversational AI',
        'Voice AI',
        'Agentic AI',
        'Large Language Models',
        'Retrieval-Augmented Generation',
        'Model Context Protocol',
        'Full-stack development',
        'Developer tooling',
        'Computational neuroscience',
      ],
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: "Université Côte d'Azur" },
        { '@type': 'CollegeOrUniversity', name: 'Freie Universität Berlin' },
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Microsoft Certified: Azure AI Engineer Associate',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://green-wald.de/#service',
      name: 'Jakob Grünwald — AI Engineering',
      url: 'https://green-wald.de',
      provider: { '@id': 'https://green-wald.de/#jakob' },
      areaServed: 'Worldwide',
      serviceType: [
        'AI Audit and Roadmap',
        'AI Build Engagement',
        'AI Advisory and Retainer',
        'Voice AI development',
        'Conversational AI development',
        'Full-stack AI products',
        'Developer tooling',
      ],
      description:
        'Freelance AI engineering: production voice and chat AI, full-stack AI products, and developer tooling — shipped with tests, evals and CI.',
    },
  ],
};

export const seo = {
  jsonLd: JSON.stringify(jsonLdGraph),
  ogTitleEn: 'Jakob Grünwald — Freelance AI Engineer',
  ogTitleDe: 'Jakob Grünwald — Freelance AI Engineer',
  ogDescEn:
    'Production voice & chat AI, full-stack AI products, and the developer tooling that keeps them reliable. Shipped with tests, evals and CI.',
  ogDescDe:
    'Produktive Voice- & Chat-KI, Full-Stack-KI-Produkte und das Developer-Tooling, das sie zuverlässig hält. Mit Tests, Evals und CI ausgeliefert.',
  keywordsEn:
    'AI engineer, freelance, voice AI, conversational AI, LLM, RAG, agentic AI, MCP, full-stack, Germany',
  keywordsDe:
    'AI Engineer, Freelancer, Voice AI, Conversational AI, LLM, RAG, Agentic AI, MCP, Full-Stack, Deutschland',
  notFoundEn: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist or has moved.',
    backLabel: 'Back to home',
  },
  notFoundDe: {
    title: 'Seite nicht gefunden',
    body: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    backLabel: 'Zur Startseite',
  },
};
