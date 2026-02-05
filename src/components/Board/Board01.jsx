import { useState, useEffect } from 'react';
import { Box, X } from "lucide-react";

function Board01() {

    // null = closed, number = which icon is open
    const [selected, setSelected] = useState(null);

    // Group data for each model
    const groupData = [
      {
        name: "Shaila",
        description: "Eine Gruppe aus Berlin, die sich im Futurium zum Workshop traf und gemeinsam an Mobilitätsmodellen werkte – alltägliche Menschen, die ihre Hand an innovativen Konzepten versuchten.",
        avatar: "https://picsum.photos/150/150?v=111"
      },
      {
        name: "Marcus",
        description: "BLdkfhjvkinctbf54ruetco8g54engjvndfbgjndfgjndfgjndfgjndfgjndfbgjndfg",
        avatar: "https://picsum.photos/150/150?v=222"
      },
      {
        name: "Lisa",
        description: "Verkehrsplanerin aus Hamburg mit Leidenschaft für zukunftsorientierte Mobilität.",
        avatar: "https://picsum.photos/150/150?v=333"
      },
      {
        name: "Felix",
        description: "Ingenieur und Visionär, der an der Schnittstelle von Technik und Design arbeitet.",
        avatar: "https://picsum.photos/150/150?v=444"
      },
      {
        name: "Clara",
        description: "Architektin, die urbane Räume für neue Mobilitätskonzepte gestaltet.",
        avatar: "https://picsum.photos/150/150?v=555"
      },
      {
        name: "Daniel",
        description: "Nachhaltigkeitsexperte, der Mobilitätswende praktisch umsetzt.",
        avatar: "https://picsum.photos/150/150?v=666"
      },
      {
        name: "Sophie",
        description: "Designerin mit Fokus auf nutzerfreundliche Transportlösungen der Zukunft.",
        avatar: "https://picsum.photos/150/150?v=777"
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
    <div className="board-content board-01">
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
                  <img className="popup-image" src={`/modell-${String(modelIndex + 1).padStart(2, '0')}.jpg`} alt="Fahrzeugmodell" />
                  <div className="group-info">
                    <p>{data.description}</p>
                    <p className="groupnames">{data.name}</p>
                    <img
                      className="group-avatar"
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

export default Board01;