import React, { useCallback, useEffect, useState } from 'react'

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return
      emblaApi.goTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi) => {
    if (!emblaApi) return
    const snaps = emblaApi.snapList?.() || []
    setScrollSnaps(snaps)
  }, [])

  const onSelect = useCallback((emblaApi) => {
    if (!emblaApi) return
    const index = emblaApi.selectedSnap?.() ?? emblaApi.internalEngine?.()?.index ?? 0
    setSelectedIndex(index)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reinit', onInit).on('reinit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}

export const DotButton = (props) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}