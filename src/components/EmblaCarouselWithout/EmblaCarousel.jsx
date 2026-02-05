import React, { useEffect, useState} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { Maximize, Box, Earth, Map, Zap, Users, Timer } from 'lucide-react';

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const SLIDE_CONTENT = [
    {
      modelTitle: "Über unser Modell",
      modelText:
        "„Der Schredder schreddert in der apokalyptischen Endzeit durch Müllberge um ans Ziel zu kommen und die Berge zu ebnen und doch nichts zu verbessern.“",
      aboutTitle: "Über uns",
      aboutText:
        "„Wir haben uns im Futurium beim Workshop kennengelernt.“",
      names: "Björn, Alex, Leah, Ben & Anna",
      zones: "1",
      seats: "1",
      future: "Müll",
      terrain: "extrem",
      energy: "solar",
      target: "Alltag",
    },
    {
      modelTitle: "Über unser Modell",
      modelText: "„Nach dem zweiten Klimawandel sind die reichen Leute auf dem zugeschneiten Mond mit Arctic Ices unterwegs.“",
      aboutTitle: "Über uns",
      aboutText: "„Wir sind Literatur Professorinnen aus Berlin, die gemeinsam den Workshop besucht haben.“",
      names: "Ingrid, Gabriela & Sabine",
      zones: "01",
      seats: "04",
      future: "post-apokalyptisch",
      terrain: "Schnee / Eis / Arktis",
      energy: "Synthetische E-Fuels",
      target: "Freizeit",
    },
    {
      modelTitle: "Über unser Modell",
      modelText: "„In der Zukunft will man mehr von seinem Fahrzeug. Dein Robotor Haustier führt nun dich aus. “",
      aboutTitle: "Über uns",
      aboutText: "„Befreundete Studentinnen aus verschiedenen Bereichen.“",
      names: "Samia, Abiya, Suleika, Kaya & Souad",
      zones: "01",
      seats: "01",
      future: "Cyberpunk",
      terrain: "Luft",
      energy: "Wind",
      target: "Freizeit",
    },{
      modelTitle: "Über unser Modell",
      modelText: "„In der Zukunft haben wir keine biologischen Körper mehr, dass macht aber auch Fahrzeuge redundant. Man fährt auf Autopilot und lässt im Hirn Filme abspielen.“",
      aboutTitle: "Über uns",
      aboutText: "„Die Denker“",
      names: "Anonymous",
      zones: "01",
      seats: "01",
      future: "Cyberpunk",
      terrain: "Land",
      energy: "Solar",
      target: "Alltag",
    },{
      modelTitle: "Über unser Modell",
      modelText: "„Es gibt keine Technik mehr. Indigene Völker gehen Verbindungen mit Delphinen ein um zwischen Inseln zu reisen.“",
      aboutTitle: "Über uns",
      aboutText: "„Wir machen als Familie 2 Wochen Urlaub in Berlin.“",
      names: "Abiramy, Natrada, Anong & Dalika",
      zones: "01",
      seats: "02",
      future: "post-apokalyptisch",
      terrain: "Wasser",
      energy: "Muskelkraft",
      target: "Alltag",
    },
  ];


  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => {
            const content = SLIDE_CONTENT[index] ?? SLIDE_CONTENT[0];

            return (
              <div className="embla__slide" key={index}>
                <div className="card-carousel">
                  <div className='carousel-img'>
                    <img
                      className="embla__slide__img"
                      src={`/lego-0${index}.jpg`}
                      alt="Legomodell der Gruppe"
                    />
                    <div className='tag-wrap'>
                      <div className='tags'>
                        <Maximize aria-label='zones' className='tag-icon' />
                        <p className='tag-text'>{content.zones}</p>
                      </div>
                      <div className='tags'>
                        <Box aria-label='seats' className='tag-icon' />
                        <p className='tag-text'>{content.seats}</p>
                      </div>
                      <div className='tags'>
                        <Earth aria-label='future' className='tag-icon' /> 
                        <p className='tag-text'>{content.future}</p>
                      </div>
                      <div className='tags'>
                        <Map aria-label='terrain' className='tag-icon' />
                        <p className='tag-text'>{content.terrain}</p>
                      </div>
                      <div className='tags'>
                        <Zap aria-label='energy source' className='tag-icon' />
                        <p className='tag-text'>{content.energy}</p>
                      </div>
                      <div className='tags'>
                        <Users aria-label='target group' className='tag-icon' />
                        <p className='tag-text'>{content.target}</p>
                      </div>
                    </div>
                  </div>

                  <div className="group-info">
                    <div className="group-text">
                      <h4 className="card-title">{content.modelTitle}</h4>
                      <p className="card-paragraph">{content.modelText}</p>

                      <h4 className="card-title">{content.aboutTitle}</h4>
                      <p className="card-paragraph">{content.aboutText}</p>

                      <p className="groupnames">{content.names}</p>
                    </div>

                    <img
                      src={`/group-0${index}.jpg`}
                      alt="Foto der Workshop-Gruppe"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
