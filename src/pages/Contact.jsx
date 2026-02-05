import { Separator } from "radix-ui";

function Contact() {
  return (
    <div className="legal-page contact">
      <header className="legal-header">
        <h1>Kontakt</h1>
      </header>

      <main className="legal-main">
        <section className="legal-section">
          <h2>Schreib uns!</h2>
          <Separator.Root className="legal-separator" />
          <p>Weltmodell ist ein studentisches Semesterprojekt. Wir freuen uns über Feedback,
            Fragen und Austausch – egal ob du das Tool getestet hast oder einfach Ideen teilen willst.</p>
          {/* EXTRA: change to actual email if hosting/sharing */}
          <ul>
            <li>E-Mail:<a href="mailto:kontakt@weltmodell.de">kontakt@weltmodell.de</a></li>
          </ul>

          <p className="legal-notice">
            Hinweis: Wir sind ein Studienprojekt und kein Kundenservice – Antworten können je nach
            Semesterphase etwas dauern.
          </p>
        </section>

        <section className="legal-section">
          <h2>Über das Projekt</h2>
          <Separator.Root className="legal-separator" />
          <p>
            Das Projekt entstand im Rahmen eines Semesters und wurde im Austausch mit dem Futurium Berlin diskutiert (z. B. Feedback zu Konzept und Prototyp).
            Weltmodell soll einen Raum schaffen, um Mobilitätsvisionen gemeinsam zu diskutieren – spielerisch, zugänglich und offen.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Contact