import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/** Orbes flotantes decorativos para más vida en la página */
export function FloatingOrbs() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const orbs = containerRef.current?.querySelectorAll('.float-orb')
    if (!orbs) return

    orbs.forEach((orb, i) => {
      gsap.to(orb, {
        y: `random(-30, 30)`,
        x: `random(-20, 20)`,
        duration: `random(3, 6)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.4,
      })
    })
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="float-orb absolute top-[20%] left-[10%] h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      <div className="float-orb absolute top-[60%] right-[8%] h-48 w-48 rounded-full bg-accent-soft/5 blur-3xl" />
      <div className="float-orb absolute bottom-[15%] left-[30%] h-56 w-56 rounded-full bg-white/3 blur-3xl" />
    </div>
  )
}
