import { useState, useEffect, useRef } from 'react';
import { Box, X, Maximize, Earth, Map, Zap, Users } from "lucide-react";
import { BOARD_DATA } from '../../data/boardData';

function Board({ boardClass = "board-01" }) {

    // null = closed, number = which icon is open
    const [selected, setSelected] = useState(null);
    const closeButtonRef = useRef(null);

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
        <button
          key={i}
          className="board-icon"
          aria-label={`Model ${i + 1}`}
          onClick={() => setSelected(i)}
        >
          <Box size={32} />
        </button>
      ))}

      {selected !== null && (
        <div className="popup-overlay" onClick={() => setSelected(null)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button 
              ref={closeButtonRef}
              className="popup-close" 
              onClick={() => setSelected(null)} 
              aria-label="Close popup"
              autoFocus
            >
              <X size={18} />
            </button>

            {(() => {
              const modelIndex = selected % BOARD_DATA.length;
              const data = BOARD_DATA[modelIndex];
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
