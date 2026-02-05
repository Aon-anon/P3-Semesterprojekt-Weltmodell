import React, { useEffect, useState} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { Maximize, Box, Earth, Map, Zap, Users, Timer } from 'lucide-react';
import { SLIDE_CONTENT } from '../../data/carouselData';

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

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
