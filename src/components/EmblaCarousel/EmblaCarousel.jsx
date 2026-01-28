import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { useAccessibility } from './EmblaCarouselAccessibility'
import ClassNames from 'embla-carousel-class-names'
import Accessiblity from 'embla-carousel-accessibility'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    ClassNames(),

    Accessiblity({
      announceChanges: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement
    })
  ])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  useAccessibility(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
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

      <div className="embla__live-region" />
    </section>
  )
}

export default EmblaCarousel