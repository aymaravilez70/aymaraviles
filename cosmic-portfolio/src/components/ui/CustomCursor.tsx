import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/** Cursor minimalista con tonos apagados */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const moveCursor = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' })
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out' })
    }

    const handleEnter = () => {
      gsap.to(ring, { scale: 1.6, borderColor: '#8899b0', duration: 0.3 })
      gsap.to(dot, { scale: 0.6, duration: 0.3 })
    }

    const handleLeave = () => {
      gsap.to(ring, { scale: 1, borderColor: '#4a5568', duration: 0.3 })
      gsap.to(dot, { scale: 1, duration: 0.3 })
    }

    window.addEventListener('mousemove', moveCursor)

    const interactives = document.querySelectorAll('a, button, [data-cursor="hover"]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-muted/60"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
