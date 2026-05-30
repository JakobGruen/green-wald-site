import type { Content } from './types';

export const de: Content = {
  meta: {
    title: 'Freelance AI Engineer — Voice-KI, Agenten & Full-Stack-KI | Jakob Grünwald',
    description:
      'Freelance AI Engineer für Full-Stack-KI-Produkte und produktive Voice- & Chat-Agenten — ausgeliefert mit Tests, Evals und CI. Hintergrund in Mathematik und Computational Neuroscience, evidenzbasiertes Engineering. Kunden in Deutschland, den VAE und Saudi-Arabien. Privacy-first, kein Tracking.',
  },
  nav: {
    services: 'Leistungen',
    work: 'Projekte',
    process: 'Arbeitsweise',
    contact: 'Kontakt',
    cta: 'Projekt anfragen',
  },
  hero: {
    eyebrow: 'Freelance AI Engineer',
    name: 'Jakob Grünwald',
    role: 'Full-Stack-KI-Engineering',
    tagline:
      'Freelance-KI-Engineer für produktive Voice- & Chat-Agenten, agentische Systeme und Full-Stack-KI-Produkte — ausgeliefert mit Tests, Evals und CI, keine Demos.',
    location: 'Braunschweig, Deutschland — für Kunden weltweit',
    lede:
      'Ich konzipiere und liefere Full-Stack-KI-Produkte sowie Voice- & Chat-Agenten von Anfang bis Ende — vom Modell- und Prompt-Layer bis zu einer durchdachten UI und der Infrastruktur, die alles am Laufen hält. Meine produktiven Voice- und Chat-Agenten sind für Kunden in den VAE, Saudi-Arabien und Deutschland im Einsatz, auf einer wiederverwendbaren Infrastruktur, die rund 90% von einem Projekt zum nächsten überträgt — und ich baue eigene Full-Stack-KI-Produkte, etwa einen chat-first Lebenslauf-Agenten mit ~500 Tests. Mathematik und Computational Neuroscience haben mich gelehrt, dort präzise zu sein, wo es zählt — und es zu beweisen.',
    ctaPrimary: 'Projekt anfragen',
    ctaSecondary: 'So arbeite ich',
  },
  metrics: [
    { value: '5+', label: 'Produktive Voice- & Chat-Agenten in Betrieb' },
    { value: '3', label: 'Länder mit Agenten in Produktion — VAE, Saudi-Arabien, Deutschland' },
    { value: '~90%', label: 'Infrastruktur von Projekt zu Projekt wiederverwendet' },
    { value: '1.200+', label: 'Automatisierte Tests in der größten Agenten-Suite' },
  ],
  services: {
    label: 'Leistungen',
    intro:
      'Eine Audit-first-Staffelung — und Sie arbeiten direkt mit dem Engineer, der baut, nicht mit einem Projektmanager. Wir starten klein und risikoarm, belegen den Nutzen und bauen dann. Jedes Projekt geht mit Tests, Evals und CI in Betrieb, und der gesamte Code gehört Ihnen.',
    tiers: [
      {
        name: 'KI-Audit & Roadmap',
        forWho:
          'Teams mit einer KI-Idee oder einem bestehenden System, die einen klaren, risikoarmen ersten Schritt wollen, bevor Budget gebunden wird.',
        deliverables: [
          'Eine schriftliche Einschätzung, wo KI passt, was machbar ist und was nicht',
          'Eine priorisierte Roadmap mit abgegrenzten Phasen, Risiken und Aufwandsspannen',
          'Ein funktionierender Proof-of-Concept für den riskantesten Teil',
        ],
        engagement: 'Fester Umfang, 1–2 Wochen, Festpreis vorab vereinbart',
        outcome:
          'Sie gehen mit einem konkreten Plan und Belegen — und der Freiheit, ihn mit mir oder anderen umzusetzen.',
      },
      {
        name: 'Build-Engagement',
        forWho:
          'Kunden, die ein Full-Stack-KI-Produkt oder -Feature gebaut und ausgeliefert brauchen — eine agentische Web-App, ein RAG-System oder einen produktiven Voice- oder Chat-Agenten — integriert in die Systeme, die sie bereits betreiben.',
        deliverables: [
          'Ein produktives KI-Produkt oder -Feature — vom Frontend bis zur Infrastruktur — integriert in Ihr CRM, Ihre Telefonie oder Ihren Messaging-Stack',
          'Eine automatisierte Test-Suite, Evals und CI/CD-Pipeline von Grund auf',
          'Dokumentation und eine saubere Übergabe, damit Ihr Team es betreiben und erweitern kann',
        ],
        engagement: 'Abgegrenztes Projekt, typisch 4–6 Wochen, fester Umfang und Festpreis',
        outcome:
          'Ein laufendes System in Produktion — mit dem Sicherheitsnetz, es selbstbewusst zu verändern, und ohne Vendor-Lock-in.',
      },
      {
        name: 'Advisory & Retainer',
        forWho:
          'Teams, die bereits ausgeliefert haben und laufendes Engineering, Evals und Architektur-Beratung brauchen — oder eine verlässliche Hand für die schwierigen Teile.',
        deliverables: [
          'Laufende Entwicklung, Code-Review und Architektur-Input',
          'Eval- und Monitoring-Setup, das das Modellverhalten über die Zeit messbar hält',
          'Bevorzugter Zugang für Fixes, Iterationen und neue Features',
        ],
        engagement: 'Monatlicher Retainer, Kapazität vorab vereinbart',
        outcome:
          'Ein Senior AI Engineer auf Abruf — mit Kontinuität über Ihre Roadmap statt einmaliger Übergaben.',
      },
    ],
  },
  process: {
    label: 'Arbeitsweise',
    intro:
      'Ich bin lieber messbar als beeindruckend. Das sind Zusagen, an denen Sie mich festhalten können — keine Adjektive.',
    promises: [
      {
        title: 'Ein Senior Engineer, von Anfang bis Ende',
        detail:
          'Sie arbeiten direkt mit mir, von der Abgrenzung bis zur Übergabe — keine Account-Manager, keine Übergaben, kein Overhead zwischen Ihnen und dem Code.',
      },
      {
        title: 'Wöchentliche schriftliche Updates',
        detail:
          'Jede Woche ein kurzes schriftliches Update zu dem, was ausgeliefert wurde, was als Nächstes kommt und welche Entscheidungen offen sind — damit Sie nie über den Status rätseln.',
      },
      {
        title: 'Geht mit Tests und CI in Betrieb',
        detail:
          'Code kommt mit automatisierter Test-Suite und funktionierender CI-Pipeline, damit Änderungen lange nach dem Projekt sicher bleiben.',
      },
      {
        title: 'Antwort innerhalb eines Werktags',
        detail:
          'E-Mails erhalten innerhalb eines Werktags eine inhaltliche Antwort — auch wenn die vollständige Lösung länger dauert.',
      },
      {
        title: 'Code und IP gehören Ihnen',
        detail:
          'Der Code gehört Ihnen — dokumentiert, frei von Lock-in, auf Ihrer Infrastruktur lauffähig, ohne Abhängigkeit von mir.',
      },
      {
        title: 'KI geht mit Evals live, nicht mit Bauchgefühl',
        detail:
          'Modellverhalten wird vor Produktion mit Evals und strukturierten Tests gemessen, sodass Qualität eine nachvollziehbare Zahl ist — kein Gefühl.',
      },
      {
        title: 'Forschungsreife Sorgfalt bei den schwierigen Teilen',
        detail:
          'Wenn ein Problem wirklich schwierig ist, wende ich die Disziplin hinter meiner begutachteten Forschung an: präzise definieren, Annahmen testen, dann bauen.',
      },
    ],
  },
  estimates: {
    label: 'Typische Projektformen',
    intro:
      'Jedes Projekt wird einzeln abgegrenzt, aber die meisten fallen in eine von drei Formen. Das sind Ausgangspunkte für ein Gespräch, keine Angebote.',
    shapes: [
      {
        duration: '~1–2 Wochen Sprint',
        outcome:
          'Ein Audit und eine Roadmap oder ein fokussierter Proof-of-Concept für den riskantesten Teil einer Idee — genug, um sicher zu entscheiden.',
      },
      {
        duration: '~4–6 Wochen Build',
        outcome:
          'Ein produktives KI-Feature oder MVP, ausgeliefert mit Tests, Evals und CI — ein Full-Stack-KI-Produkt, eine agentische Web-App, ein RAG-System oder ein Voice- bzw. Chat-Agent im echten Einsatz.',
      },
      {
        duration: 'Laufender Retainer',
        outcome:
          'Kontinuierliche Entwicklung, Evals und Architektur-Unterstützung über Ihre Roadmap, mit vereinbarter monatlicher Kapazität.',
      },
    ],
    note:
      'Es gibt keinen veröffentlichten Tagessatz. Umfang und Preis werden gemeinsam in einem kurzen Erstgespräch festgelegt, sodass Sie die Zahl kennen, bevor die Arbeit beginnt.',
  },
  projects: {
    label: 'Ausgewählte Projekte',
    clientLabel: 'Kundenprojekte · Referenzen auf Anfrage',
    personalLabel: 'Open-Source- & eigene Projekte',
    client: [
      {
        title: 'Bot-Suite für Immobilien & Hypotheken — VAE',
        sub: 'Kundenprojekt · Conversational & Voice AI',
        body:
          'Vier produktive Bots: Inbound über WhatsApp und Sprache plus Outbound-Anrufe, zweisprachig Englisch/Arabisch. Integriert in ein CRM mit 200+ Feldern und WhatsApp Business, mit BANT-Lead-Qualifizierung und regulatorischer Do-not-call-Sperre. Eine Multi-Modell-Pipeline trennt Dialog, QA, Extraktion und Formatierung — und 1.200+ automatisierte Tests halten die gesamte Suite zusammen.',
      },
      {
        title: 'Bots für Terminbuchung & Qualifizierung im Autohaus — Deutschland & Saudi-Arabien',
        sub: 'Kundenprojekt · Conversational & Voice AI',
        body:
          'Inbound-Servicetermin-Buchung und Outbound-Lead-Qualifizierung für Premium-Händlernetze, bis zu drei Sprachen pro Bot (DE/EN/FR und AR/EN). Live-Bestand und Echtzeit-Terminsuche-APIs lassen Anrufer wirklich buchen — nicht nur weiterleiten — mit CRM-Lead-Routing dahinter und 180+ automatisierten Tests pro Deployment.',
      },
      {
        title: 'B2B-Telekom-Outbound-Qualifizierung — Deutschland',
        sub: 'Kundenprojekt · Conversational & Voice AI',
        body:
          'Ein Outbound-Qualifizierungs-Bot für 350+ Zielstädte, der 27 strukturierte Felder pro Anruf extrahiert. Ein PostgreSQL-Namens-Disambiguierungsdienst gleicht Kontakte gegen eine 34.000-Namen-Datenbank ab, sodass jeder Anruf die richtige Person erreicht und saubere, strukturierte Daten hinterlässt.',
      },
    ],
    personal: [
      {
        title: 'ResumeTailor',
        sub: 'Open-Source · Full-Stack-KI-Produkt',
        body:
          'Ein Full-Stack-KI-Produkt, das ich von Anfang bis Ende gebaut habe: ein chat-first Agent, der beim Erstellen und Zuschneiden von Lebensläufen hilft. Die aktuelle Version läuft auf Next.js, dem Vercel AI SDK und Drizzle ORM mit ~500 Tests; eine frühere Full-Stack-v1 verband ein React-Frontend mit einem FastAPI-/LangGraph-Backend und einer selbstgebauten PDF/DOCX-Pipeline — und ist Open Source.',
        link: 'https://github.com/JakobGruen/ResumeTailor',
        linkLabel: 'v1 auf GitHub →',
      },
      {
        title: 'Happy Coder — Voice- & UX-Erweiterungen',
        sub: 'Open-Source · Voice AI & Developer-UX',
        body:
          'Ein Open-Source-Fork mit ~480 Commits über rund sieben Monate. Ich habe eine vollständige Voice-Schicht von Grund auf auf LiveKit/Pipecat gebaut, die Permission-UX neu gestaltet und CI/CD von null aufgesetzt. React Native/Expo im Frontend, Fastify und Python dahinter.',
        link: 'https://github.com/JakobGruen/happy',
        linkLabel: 'Auf GitHub ansehen →',
      },
      {
        title: 'Developer Tooling',
        sub: 'Persönlich · wie ich Lieferung schnell & verlässlich halte',
        body:
          'Kein Produkt, das ich verkaufe — der Motor hinter ~90% Infrastruktur-Wiederverwendung und ein Einblick in meine Arbeitsweise: eigene MCP-Server (einer mit 73 Tools, abgesichert durch 452 Tests), eine 3-stufige TypeScript-Test-Bibliothek (902 Self-Tests), ein ~8.800-LOC typsicheres Workflow-Framework und ein Claude-Code-Plugin, das den gesamten Projekt-Lebenszyklus als 20 aufrufbare Skills abbildet.',
      },
    ],
  },
  diagram: {
    label: 'Wie ein produktiver Voice-Agent zusammenpasst',
    caption:
      'Eine typische produktive Voice-AI-Pipeline: Telefonie und Messaging rein, Speech-to-Text, eine Orchestrierungsschicht mit Dialogmodell plus Tools und CRM-Abfragen, dann Text-to-Speech zurück zum Anrufer — eingebettet in Evals, Observability und CI.',
    a11yDesc:
      'Ablaufdiagramm: Ein Anrufer über Telefonie oder WhatsApp gelangt zu Speech-to-Text, dann zu einer Orchestrierungsschicht (das Dialogmodell mit Tools), dann zu Text-to-Speech und schließlich als Audio-Antwort zurück zum Anrufer. Die Orchestrierungsschicht greift auf eine Wissensdatenbank, CRM und Tools sowie Qualitätskontrollen zu.',
    nodes: {
      caller: 'Anrufer', callerSub: 'Telefonie / WhatsApp',
      stt: 'Speech-to-Text', sttSub: 'Audio → Text',
      orchestration: 'Orchestrierung', orchestrationSub: 'Dialogmodell + Tools',
      tts: 'Text-to-Speech', ttsSub: 'Text → Audio',
      reply: 'Audio-Antwort', replySub: 'zurück zum Anrufer',
      kb: 'Wissensdatenbank', kbSub: 'RAG / Vektoren',
      crm: 'CRM & Tools', crmSub: 'Buchungen, Abfragen',
      quality: 'Qualitätskontrollen', qualitySub: 'Evals + Tests',
    },
  },
  background: {
    label: 'Hintergrund',
    body:
      'Ich bin auf Umwegen zum AI Engineering gekommen: ein Mathematikstudium, dann Forschung in Computational Neuroscience, dann produktives Engineering. Dieser Weg hat mich gelehrt, mit schwierigen, mehrdeutigen Problemen zu arbeiten und mich systematisch herauszutesten — genau das verlangt zuverlässige KI. Ich lese die Forschung, aber ich werde dafür bezahlt, dass Dinge in Produktion funktionieren.',
    bullets: [
      "MSc, Modeling of Neuronal & Cognitive Systems — Université Côte d'Azur (16,3/20, <em>magna cum laude</em>)",
      'BSc, Mathematik — Freie Universität Berlin',
      'Microsoft Certified: <a href="https://learn.microsoft.com/en-gb/users/jakobgrnwald-5514/credentials/89f0adb5379ed51f" target="_blank" rel="noopener">Azure AI Engineer Associate</a>',
      'Forschung in Computational Neuroscience mit drei Arbeiten — eine im <em>Journal of Vision</em> veröffentlicht (2023, Co-Autor) und zwei Erstautoren-Manuskripte in Vorbereitung (2026)',
      "Forschungsstationen an der TU Berlin, Université Côte d'Azur, CNRS und McGill",
    ],
  },
  toolbox: {
    label: 'Toolbox',
    groups: [
      { label: 'Sprachen', chips: ['Python', 'TypeScript', 'R', 'C', 'MATLAB', 'Mathematica'] },
      {
        label: 'AI & ML',
        chips: ['Agentic AI', 'Conversational & Voice AI', 'LLMs', 'RAG', 'MCP', 'Pipecat', 'LiveKit', 'Deepgram', 'PyTorch', 'TensorFlow', 'Spiking Neural Networks'],
      },
      {
        label: 'Frameworks & Stack',
        chips: ['FastAPI', 'Next.js', 'React', 'LangChain', 'LangGraph', 'Vercel AI SDK', 'SQLAlchemy 2.0', 'Pydantic', 'Zod', 'Supabase'],
      },
      { label: 'Cloud & DevOps', chips: ['Docker', 'Kubernetes', 'Azure', 'GitHub Actions', 'Coolify', 'HPC'] },
    ],
  },
  sectors: {
    label: 'Branchen',
    intro: 'Bei den meisten Kundenprojekten an NDAs gebunden — beschrieben nach Branche und Region. Referenzen auf Anfrage.',
    tiles: [
      { sector: 'Immobilien & Hypotheken', region: 'VAE' },
      { sector: 'Autohaus-Netze', region: 'Deutschland & Saudi-Arabien' },
      { sector: 'B2B-Telekommunikation', region: 'Deutschland' },
      { sector: 'Coaching & Training', region: 'Deutschland' },
      { sector: 'Autoglas / Abrechnung', region: 'Deutschland' },
    ],
  },
  languages: {
    label: 'Sprachen',
    items: [
      { name: 'Deutsch', level: 'Muttersprache' },
      { name: 'Englisch', level: 'Fließend' },
      { name: 'Thai', level: 'Mittelstufe' },
      { name: 'Spanisch', level: 'Mittelstufe' },
      { name: 'Französisch', level: 'Grundkenntnisse' },
      { name: 'Russisch', level: 'Grundkenntnisse' },
    ],
  },
  contact: {
    label: 'Lassen Sie uns etwas Zuverlässiges bauen',
    body:
      'Sie haben ein Full-Stack-KI-Produkt, einen Voice- oder Chat-Agenten oder ein kniffliges Tooling-Problem, das sauber gelöst werden soll — mit Tests, Evals und einer sauberen Übergabe? Sagen Sie mir, woran Sie arbeiten und wie ein gutes Ergebnis aussieht, und ich antworte innerhalb eines Werktags.',
    availability: 'Aktuell offen für ausgewählte neue Projekte',
    emailLabel: 'Projekt anfragen',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
    copyLabel: 'Kopieren',
    copiedLabel: 'Kopiert ✓',
    request: {
      subject: 'Neues Projekt — [Ihr Unternehmen / Ihr Vorhaben]',
      body: `Guten Tag Herr Grünwald,

ich bin auf Ihre Website gestoßen und würde gern über ein Projekt sprechen. Ein paar Eckpunkte unten — bitte füllen Sie aus, was relevant ist, und lassen Sie den Rest gern weg.

WAS WIR BAUEN MÖCHTEN
(z. B. ein Voice- oder Chat-Agent, ein Full-Stack-KI-Produkt, ein RAG-System, eine Integration — und grob, was es leisten soll)


PROBLEM / ZIEL
(was heute fehlt oder hakt, und wie ein gutes Ergebnis aussieht)


ZEITRAHMEN & GROBES BUDGET
(eine Deadline, auf die Sie hinarbeiten, und ggf. eine ungefähre Budgetspanne)


ÜBER UNS
(Unternehmen, Branche, Standort und die Systeme, die wir integrieren würden — CRM, Telefonie, Messaging usw.)


SONSTIGES
(Links, Unterlagen, Rahmenbedingungen oder Fragen)


Vielen Dank und beste Grüße,
[Ihr Name]`,
    },
  },
  footer: {
    rights: 'Jakob Grünwald',
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    privacyLine: 'Keine Cookies, kein Tracking, keine Dienste von Dritten — Schriften lokal geladen.',
  },
};
