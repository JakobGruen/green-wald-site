import type { LegalDoc } from './types';

// ===================== IMPRESSUM (German-authoritative) =====================
// Address confirmed by Jakob: Echternstr. 28, 38100 Braunschweig.

export const impressumDe: LegalDoc = {
  title: 'Impressum',
  sections: [
    {
      heading: 'Angaben gemäß § 5 DDG',
      paragraphs: ['Jakob Grünwald<br>Echternstr. 28<br>38100 Braunschweig<br>Deutschland'],
    },
    {
      heading: 'Kontakt',
      paragraphs: ['E-Mail: <a href="mailto:jakob@gruenwald-bs.de">jakob@gruenwald-bs.de</a>'],
    },
    {
      heading: 'Umsatzsteuer-Identifikationsnummer',
      paragraphs: [
        'Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br>DE458328769',
      ],
    },
    {
      heading: 'Redaktionell verantwortlich',
      paragraphs: [
        'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:<br>Jakob Grünwald (Anschrift wie oben)',
      ],
    },
    {
      heading: 'Verbraucherstreitbeilegung',
      paragraphs: [
        'Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      ],
    },
    {
      heading: 'Haftung für Inhalte',
      paragraphs: [
        'Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.',
      ],
    },
    {
      heading: 'Haftung für Links',
      paragraphs: [
        'Mein Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
      ],
    },
    {
      heading: 'Urheberrecht',
      paragraphs: [
        'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
      ],
    },
  ],
};

export const impressumEn: LegalDoc = {
  title: 'Impressum',
  sections: [
    {
      heading: 'Information pursuant to § 5 DDG',
      paragraphs: ['Jakob Grünwald<br>Echternstr. 28<br>38100 Braunschweig<br>Germany'],
    },
    {
      heading: 'Contact',
      paragraphs: ['Email: <a href="mailto:jakob@gruenwald-bs.de">jakob@gruenwald-bs.de</a>'],
    },
    {
      heading: 'VAT identification number',
      paragraphs: [
        'VAT identification number pursuant to § 27a German VAT Act (UStG):<br>DE458328769',
      ],
    },
    {
      heading: 'Responsible for content',
      paragraphs: [
        'Responsible for the content pursuant to § 18 (2) MStV:<br>Jakob Grünwald (address as above)',
      ],
    },
    {
      heading: 'Consumer dispute resolution',
      paragraphs: [
        'I am neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.',
      ],
    },
    {
      heading: 'Liability for content',
      paragraphs: [
        'As a service provider, I am responsible for my own content on these pages in accordance with § 7 (1) DDG and general law. However, pursuant to §§ 8 to 10 DDG, I am not obliged to monitor transmitted or stored third-party information, or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected.',
      ],
    },
    {
      heading: 'Liability for links',
      paragraphs: [
        'This site may contain links to external third-party websites over whose content I have no influence. I therefore cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.',
      ],
    },
    {
      heading: 'Copyright',
      paragraphs: [
        'The content and works created by the site operator on these pages are subject to German copyright law. Contributions by third parties are marked as such. Reproduction, adaptation, distribution, and any kind of use beyond the limits of copyright require the written consent of the respective author or creator.',
      ],
    },
  ],
};

// ===================== DATENSCHUTZ (German-authoritative) =====================

export const datenschutzDe: LegalDoc = {
  title: 'Datenschutzerklärung',
  intro:
    'Diese Datenschutzerklärung informiert Sie über die Verarbeitung personenbezogener Daten beim Besuch dieser Website (green-wald.de). Diese Website ist ein statischer, selbst gehosteter Internetauftritt ohne Cookies, ohne Analyse- oder Tracking-Dienste und ohne Dienste von Dritten.',
  sections: [
    {
      heading: '1. Verantwortlicher',
      paragraphs: [
        'Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:',
        'Jakob Grünwald<br>Echternstr. 28<br>38100 Braunschweig<br>Deutschland<br>E-Mail: <a href="mailto:jakob@gruenwald-bs.de">jakob@gruenwald-bs.de</a><br>USt-IdNr.: DE458328769',
        'Weitere Angaben finden Sie im <a href="/impressum">Impressum</a>.',
      ],
    },
    {
      heading: '2. Hosting und Server-Logfiles',
      paragraphs: [
        'Diese Website wird auf einem privaten Server in Deutschland gehostet. Beim Aufruf der Website verarbeitet der Webserver technisch notwendige Verbindungsdaten (einschließlich Ihrer IP-Adresse), um die Seite auszuliefern und die Sicherheit und Stabilität des Systems zu gewährleisten.',
        'Auf dem Anwendungsserver ist die dauerhafte Speicherung dieser Zugriffe (Access-Logging) deaktiviert; es findet keine Analyse, kein Tracking und keine Profilbildung statt. Rechtsgrundlage für die technisch notwendige Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und funktionsfähigen Bereitstellung der Website).',
      ],
    },
    {
      heading: '3. Cookies und Tracking',
      paragraphs: [
        'Diese Website verwendet keine Cookies, kein Tracking, keine Webanalyse und keine Dienste von Dritten (keine externen Schriftarten, CDNs, Karten oder Social-Media-Plugins). Schriften werden lokal vom eigenen Server ausgeliefert.',
      ],
    },
    {
      heading: '4. Kontaktaufnahme per E-Mail',
      paragraphs: [
        'Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten (Ihre E-Mail-Adresse, Ihr Name sowie der Inhalt Ihrer Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen bzw. Vertragserfüllung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).',
        'Ihre Daten werden gelöscht, sobald sie für die Erreichung des Zwecks nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
      ],
    },
    {
      heading: '5. Ihre Rechte',
      paragraphs: [
        'Sie haben nach der DSGVO das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) sowie ein Widerspruchsrecht gegen die Verarbeitung (Art. 21).',
        'Soweit die Verarbeitung auf einem berechtigten Interesse beruht, können Sie dieser aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen.',
      ],
    },
    {
      heading: '6. Beschwerderecht bei der Aufsichtsbehörde',
      paragraphs: [
        'Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die für mich zuständige Behörde ist:',
        'Die Landesbeauftragte für den Datenschutz Niedersachsen<br>Prinzenstraße 5, 30159 Hannover<br><a href="https://www.lfd.niedersachsen.de" target="_blank" rel="noopener">www.lfd.niedersachsen.de</a>',
      ],
    },
    {
      heading: '7. Datenverarbeitung in Deutschland / EU',
      paragraphs: [
        'Die Verarbeitung der über diese Website anfallenden Daten erfolgt in Deutschland bzw. der Europäischen Union. Eine Übermittlung in Drittländer findet über diese Website nicht statt.',
      ],
    },
  ],
};

export const datenschutzEn: LegalDoc = {
  title: 'Privacy Policy',
  intro:
    'This privacy policy explains how personal data is processed when you visit this website (green-wald.de). This is a static, self-hosted website with no cookies, no analytics or tracking services, and no third-party services.',
  sections: [
    {
      heading: '1. Controller',
      paragraphs: [
        'The controller within the meaning of the General Data Protection Regulation (GDPR) is:',
        'Jakob Grünwald<br>Echternstr. 28<br>38100 Braunschweig<br>Germany<br>Email: <a href="mailto:jakob@gruenwald-bs.de">jakob@gruenwald-bs.de</a><br>VAT ID: DE458328769',
        'Further details can be found in the <a href="/impressum">Impressum</a> (legal notice).',
      ],
    },
    {
      heading: '2. Hosting and server log files',
      paragraphs: [
        'This website is hosted on a private server in Germany. When you access the website, the web server processes technically necessary connection data (including your IP address) in order to deliver the page and ensure the security and stability of the system.',
        'Persistent storage of these requests (access logging) is disabled on the application server; no analysis, tracking or profiling takes place. The legal basis for this technically necessary processing is Art. 6(1)(f) GDPR (legitimate interest in securely and reliably providing the website).',
      ],
    },
    {
      heading: '3. Cookies and tracking',
      paragraphs: [
        'This website uses no cookies, no tracking, no web analytics and no third-party services (no external fonts, CDNs, maps or social media plugins). Fonts are served locally from the website\'s own server.',
      ],
    },
    {
      heading: '4. Contact by email',
      paragraphs: [
        'If you contact me by email, the data you provide (your email address, your name, and the content of your message) will be processed to handle your enquiry. The legal basis is Art. 6(1)(b) GDPR (pre-contractual measures or performance of a contract) or Art. 6(1)(f) GDPR (legitimate interest in responding to your enquiry).',
        'Your data will be deleted as soon as it is no longer required for the purpose and no statutory retention obligations apply.',
      ],
    },
    {
      heading: '5. Your rights',
      paragraphs: [
        'Under the GDPR you have the right to access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), and the right to object to processing (Art. 21).',
        'Where processing is based on a legitimate interest, you may object at any time on grounds relating to your particular situation.',
      ],
    },
    {
      heading: '6. Right to lodge a complaint',
      paragraphs: [
        'You have the right to lodge a complaint with a data protection supervisory authority. The authority responsible for me is:',
        'Die Landesbeauftragte für den Datenschutz Niedersachsen<br>Prinzenstraße 5, 30159 Hannover, Germany<br><a href="https://www.lfd.niedersachsen.de" target="_blank" rel="noopener">www.lfd.niedersachsen.de</a>',
      ],
    },
    {
      heading: '7. Data processing in Germany / EU',
      paragraphs: [
        'Any data arising via this website is processed in Germany or the European Union. No transfer to third countries takes place via this website.',
      ],
    },
  ],
};
