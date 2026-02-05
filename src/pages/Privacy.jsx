

import { Separator } from "radix-ui";

function Privacy() {
  return (
    <div className="legal-page privacy">
      <header className="legal-header">
        <h1>Datenschutz</h1>
      </header>

      <main className="legal-main">
        <section className="legal-section" >
          <h2>Überblick</h2>
          <Separator.Root className="legal-separator" />
          <p>
            Diese Website ist ein nicht-kommerzielles Studienprojekt. Wir verwenden kein Marketing-Tracking
            und setzen keine eigenen Cookies. Trotzdem fallen bei der Nutzung technisch notwendige Daten an
            (z. B. Server-Logdaten des Hosters) und Daten, wenn du uns kontaktierst.
          </p>
        </section>

        <section className="legal-section">
          <h2>Verantwortliche Stelle</h2>
          <Separator.Root className="legal-separator" />
          <p>
            Verantwortlich für die Datenverarbeitung ist das Projektteam Weltmodell (Kontaktdaten siehe Impressum).
          </p>
        </section>

        <section className="legal-section">
          <h2>Hosting & Server-Logdaten</h2>
          <Separator.Root className="legal-separator" />
          <p>
            Beim Aufruf der Website verarbeitet unser Hosting-Anbieter technische Daten (z. B. IP-Adresse, Zeitpunkt
            des Zugriffs, aufgerufene Seite, User-Agent), um die Website bereitzustellen und abzusichern.
            Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren und stabilen Betrieb
            (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            Speicherfristen richten sich nach den Einstellungen des Hosters bzw. werden auf das notwendige Maß begrenzt.
          </p>
          {/* EXTRA: if private hosting is used, add:
          <ul>
            <li>Hosting-Anbieter: [Name des Hosters ergänzen]</li>
          </ul>*/}
        </section>

        <section className="legal-section">
          <h2>Kontaktaufnahme per E-Mail</h2>
          <Separator.Root className="legal-separator" />
          <p>
            Wenn du uns per E-Mail kontaktierst, verarbeiten wir deine Angaben (z. B. E-Mail-Adresse und Nachricht),
            um deine Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anfrage/Kommunikation)
            bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Kommunikation).
          </p>
          <p>
            Wir speichern die Kommunikation nur so lange, wie es für die Bearbeitung erforderlich ist.
          </p>
        </section>

        <section className="legal-section">
          <h2>Eingebetteter Figma-Klickdummy (Drittanbieter)</h2>
          <Separator.Root className="legal-separator" />
          <p>
            Das Tool von Weltmodell ist als ein Figma-Prototyp eingebettet. Beim Laden des Embeds werden Daten
            (z. B. IP-Adresse und technische Informationen) an Figma übertragen. Weitere Informationen findest du in der
            Datenschutzerklärung von Figma.
          </p>
        </section>

        <section className="legal-section">
          <h2>Eingebettetes YouTube-Video (Drittanbieter)</h2>
          <Separator.Root className="legal-separator" />
          <p>
            In der Workshop-Sektion ist ein YouTube-Video eingebettet. Beim Laden des Videos können Daten
            (z. B. IP-Adresse und technische Informationen) an YouTube/Google übertragen werden.
          </p>
        </section>

        <section className="legal-section">
          <h2>Cookies</h2>
          <Separator.Root className="legal-separator" />
          <p>
            Wir setzen keine eigenen Cookies. Drittanbieter-Inhalte (z. B. das Figma-Embed) können technisch
            notwendige Cookies verwenden.
          </p>
        </section>

        <section className="legal-section">
          <h2>Deine Rechte</h2>
          <Separator.Root className="legal-separator" />
          <p>
            Du hast – je nach Voraussetzungen – das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit sowie Widerspruch gegen bestimmte Verarbeitungen. Außerdem kannst du dich bei einer
            Datenschutzaufsichtsbehörde beschweren.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Privacy