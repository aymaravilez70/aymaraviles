import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** Limpia scroll y GSAP en cada carga para evitar estados fantasmas */
export function usePageReset() {
  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    const hero = document.querySelector('#hero')
    if (hero) {
      gsap.set('.hero-scene-wrap', { opacity: 1, clearProps: 'transform' })
      gsap.set('.hero-content', { y: 0, scale: 1, opacity: 1, clearProps: 'all' })
      gsap.set('.hero-warp', { opacity: 0 })
      gsap.set('.hero-warp-line', { scaleX: 1, clearProps: 'transform' })
      gsap.set('.hero-name-clip', { width: '0%', clearProps: 'transform' })
      gsap.set('.hero-rocket', { opacity: 0, left: '-48px', clearProps: 'transform' })
      gsap.set('.rocket-trail', { opacity: 0, clearProps: 'transform' })
      gsap.set('.hero-name-spark', { opacity: 0, clearProps: 'transform' })
    }

    const handlePageShow = (event: PageTransitionEvent) => {
      if (!event.persisted) return
      window.scrollTo(0, 0)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }

    window.addEventListener('pageshow', handlePageShow)
    return () => window.removeEventListener('pageshow', handlePageShow)
  }, [])
}
