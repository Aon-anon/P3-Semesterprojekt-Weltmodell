

import { Separator } from "radix-ui";

function Imprint() {
  return (
    <div className="legal-page imprint">
      <header className="legal-header">
        <h1>Impressum</h1>
      </header>

      <main className="legal-main">
        <section className="legal-section">
          <h2>Angaben zum Anbieter</h2>
          <Separator.Root className="legal-separator" />
          <p><strong>Weltmodell</strong> – studentisches Projekt (h_da, Interactive Media Design)</p>
          {/* EXTRA: fill in a reasonable name and an adress if hosting/sharing */}
          <address>
            Projektgruppe Weltmodell<br />
            Hochschule Darmstadt<br />
            64295 Darmstadt<br />
            Deutschland
          </address>
          {/* EXTRA: change to actual email if hosting/sharing */}
          <ul>
            <li>E-Mail:<a href="mailto:kontakt@weltmodell.de">kontakt@weltmodell.de</a></li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Projektkontext</h2>
          <Separator.Root className="legal-separator" />
          <p>
            Weltmodell ist ein nicht-kommerzielles, unabhängiges Studienprojekt; keine offizielle Plattform des Futuriums. Es handelt sich nicht um ein reales
            Workshopangebot oder eine Sharing-Plattform.
          </p>
        </section>

        <section className="legal-section">
          <h2>Bildnachweise</h2>
          <Separator.Root className="legal-separator" />
          <p>
            Das Tutorial-Video und das darin zu sehende 3D-Modell wurden von uns erstellt.
            Die Bilder auf dieser Website sind Platzhalter um Testern ein Gefühl vom Workshop und Tool zu geben. Sie sind nicht im Rahmen des Projekts entstanden.
          </p>
          <ul>
            <li>Platzhalter Legomodelle, Gruppen- und Nutzer-Avatare: Pixabay (Pixabay License).</li>
            <li>Modellbilder Weltmodell Sammlung: KI-generiert, basierend auf einem von uns erstellten 3D-Modell.</li>
            <li>Teaser-Video eingebettet von Futurium (YouTube).</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Haftung</h2>
          <Separator.Root className="legal-separator" />
          <p>
            Wir erstellen die Inhalte mit Sorgfalt, übernehmen aber keine Gewähr für Richtigkeit,
            Vollständigkeit und Aktualität.
          </p>
        </section>

        <section className="legal-section">
          <h2>Urheberrecht</h2>
          <Separator.Root className="legal-separator" />
          <p>
            Inhalte und Werke auf dieser Website unterliegen dem Urheberrecht. Eine Verwendung außerhalb
            der gesetzlichen Grenzen ist nur mit vorheriger Zustimmung möglich.
          </p>
        </section>
      </main>
    </div>
  )
}

export default Imprint