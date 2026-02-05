import { useState, useEffect } from 'react';
import { Box, X } from "lucide-react";

function Board03() {

    // null = closed, number = which icon is open
    const [selected, setSelected] = useState(null);

    // ESC to close
    useEffect(() => {
        const onKeyDown = (e) => {
          if (e.key === "Escape") setSelected(null);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

  return (
    <div className='board-content board-03'>
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

            <img className="popup-image" src="/vehicle.jpg" alt="Fahrzeugmodell" />

            <div className="group-info">
              <p>
                Eine Gruppe aus Berlin, die sich im Futurium zum Workshop traf und gemeinsam an Mobilitätsmodellen
                werkte – alltägliche Menschen, die ihre Hand an innovativen Konzepten versuchten.
              </p>
              <p className="groupnames">Shaila</p>
              <img
                className="group-avatar"
                src={`https://picsum.photos/150/150?v=333`}
                alt="Profilbild"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Board03;