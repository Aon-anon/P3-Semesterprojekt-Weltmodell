import { useState, useEffect } from 'react';
import { Box, X, Maximize, Earth, Map, Zap, Users } from "lucide-react";

function Board({ boardClass = "board-01" }) {

    // null = closed, number = which icon is open
    const [selected, setSelected] = useState(null);

    // Group data for each model
    const groupData = [
      {
        name: "Shaila",
        description: "In der Zukunft ist Arbeit unterwegs gestaltet. Arbeitsweg und Raum verschwimmen und Arbeitsmoral wird auch durch Aussicht hoch gehalten.",
        avatar: "https://picsum.photos/150/150?v=111",
        zones: "02",
        seats: "14",
        future: "Solarpunk",
        terrain: "Wasser",
        energy: "Solar",
        target: "Arbeit",
      },
      {
        name: "Marcus",
        description: "Es wird Luftlinien zu wichtigen Knotenpunten geben und die letzte Meile filegen die Kapseln dann einzeln bis nach Hause.",
        avatar: "https://picsum.photos/150/150?v=222",
        zones: "01",
        seats: "07",
        future: "Cyberpunk",
        terrain: "Luft",
        energy: "Kinetik",
        target: "Pendeln",
      },
      {
        name: "Lisa",
        description: "Wir überwinden die Erdanziehung und haben endlich Hoverfahrzeuge. Jeder sein eigenes Bike mit dem man auch vertikal Hochhäuser hochfährt. Es lädt sich beim Fahren über Felder auf dem Boden auf.",
        avatar: "https://picsum.photos/150/150?v=333",
        zones: "01",
        seats: "02",
        future: "Retro-Futurismus",
        terrain: "Land",
        energy: "Induktiv",
        target: "Alltag",
      },
      {
        name: "Felix",
        description: "Nachdem Arbeit und Freizeit auch unterwegs gestaltet werden kann, gewinnt Entschleunigung der Fortbewegung wieder an Bedeutung. Gemeinsamkeit und Aussicht treten in den Vordergrund und der Weg wird zum neuen Verweilort.",
        avatar: "https://picsum.photos/150/150?v=444",
        zones: "04",
        seats: "28",
        future: "Lunarpunk",
        terrain: "Land",
        energy: "Induktiv",
        target: "Alltag",
      },
      {
        name: "Clara",
        description: "Es wird ganz normal sein, auch kurze Strecken zu fliegen und pro Haus oben einen Landeplatz zu haben. Man besitzt selber kein Gefährt sondern bestellt es zu sich.",
        avatar: "https://picsum.photos/150/150?v=555",
        zones: "02",
        seats: "06",
        future: "Cyberpunk",
        terrain: "Luft",
        energy: "Lunar",
        target: "Pendeln",
      },
      {
        name: "Daniel",
        description: "Autos werden nie ganz verschwinden, aber immer modaler und anpassbar. Für die Familien der Zukunft, die keinen festen Wohnort mehr haben, sind sie Transformer zwischen Schlafzimmer, Spaßzimmer und Transportmittel.",
        avatar: "https://picsum.photos/150/150?v=666",
        zones: "03",
        seats: "05",
        future: "Hopepunk",
        terrain: "Land",
        energy: "Biogas",
        target: "Reisen",
      },
      {
        name: "Sophie",
        description: "In der Zukunft kann man auch extreme Umgebungen bereisen und das Gefährt kommt über weit aus mehr Hindernisse hinweg. Der Inenenraum ist so ausgekoppelt, dass man nichts vom Wackeln mitbekommt.",
        avatar: "https://picsum.photos/150/150?v=777",
        zones: "03",
        seats: "05",
        future: "Klima-adaptiv",
        terrain: "Land",
        energy: "Wasserstoff",
        target: "Besorgungen",
      }
    ];

    // ESC to close
    useEffect(() => {
        const onKeyDown = (e) => {
          if (e.key === "Escape") setSelected(null);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

  return (
    <div className={`board-content ${boardClass}`}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Box
          key={i}
          className="board-icon"
          aria-label="Box Icon indicating Modell Placement on Board"
          onClick={() => setSelected(i)}
        />
      ))}

      {selected !== null && (
        <div className="popup-overlay" onClick={() => setSelected(null)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setSelected(null)} aria-label="Close popup">
              <X size={18} />
            </button>

            {(() => {
              const modelIndex = selected % 7;
              const data = groupData[modelIndex];
              return (
                <>
                  <div className="modell">
                    <img className="modell-image" src={`/modell-${String(modelIndex + 1).padStart(2, '0')}.jpg`} alt="Fahrzeugmodell" />
                    <div className='modell-tag-wrap'>
                      <div className='modell-tags'>
                        <Maximize aria-label='zones' className='modell-tag-icon' />
                        <p className='modell-tag-text'>{data.zones}</p>
                      </div>
                      <div className='modell-tags'>
                        <Box aria-label='seats' className='modell-tag-icon' />
                        <p className='modell-tag-text'>{data.seats}</p>
                      </div>
                      <div className='modell-tags'>
                        <Earth aria-label='future' className='modell-tag-icon' /> 
                        <p className='modell-tag-text'>{data.future}</p>
                      </div>
                      <div className='modell-tags'>
                        <Map aria-label='terrain' className='modell-tag-icon' />
                        <p className='modell-tag-text'>{data.terrain}</p>
                      </div>
                      <div className='modell-tags'>
                        <Zap aria-label='energy source' className='modell-tag-icon' />
                        <p className='modell-tag-text'>{data.energy}</p>
                      </div>
                      <div className='modell-tags'>
                        <Users aria-label='target group' className='modell-tag-icon' />
                        <p className='modell-tag-text'>{data.target}</p>
                      </div>
                    </div>
                  </div>
                  <div className="user-info">
                    <p className='small'>{data.description}</p>
                    <p className="groupnames">{data.name}</p>
                    <img
                      className="user-avatar"
                      src={data.avatar}
                      alt="Profilbild"
                    />
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}

export default Board;
