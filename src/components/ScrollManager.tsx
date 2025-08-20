import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export function ScrollManager() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      const tag = target.getAttribute('data-scroll-to')
      const duration = Number(target.getAttribute('data-scroll-to-duration') || 1)

      if (!tag) return
      const section = document.querySelector(`[data-scroll-section="${tag}"]`)
      if (!section) return

      e.preventDefault()
      ScrollTrigger.refresh()
      gsap.to(window, { duration, scrollTo: { y: section, offsetY: 0, autoKill: false }, ease: 'power2.inOut' })
    }

    const links = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-to]'))
    links.forEach((link) => link.addEventListener('click', handleClick))

    // Handle hash on initial load
    if (window.location.hash) {
      const tag = window.location.hash.slice(1)
      const section = document.querySelector(`[data-scroll-section="${tag}"]`)
      if (section) {
        gsap.to(window, { duration: 1, scrollTo: { y: section, offsetY: 0, autoKill: false } })
      }
    }

    return () => links.forEach((link) => link.removeEventListener('click', handleClick))
  }, [])

  return null
}