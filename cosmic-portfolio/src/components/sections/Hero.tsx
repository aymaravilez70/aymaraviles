import { useCallback, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import type { MutableRefObject } from 'react'
import { PORTFOLIO } from '../../config/portfolio'
import { CosmicScene } from '../three/CosmicScene'
import type { PlanetConfig } from '../three/planetConfig'
import { PlanetNavHint } from '../ui/PlanetNavHint'
import { RocketNameReveal } from '../ui/RocketNameReveal'
import { useMagnetic } from '../../hooks/useMagnetic'
import { scrollToSection } from '../../utils/scrollToSection'

interface HeroProps {
  mouse: MutableRefObject<{ x: number; y: number }>
  loaded: boolean
  onIntroComplete?: () => void
}

const WARP_LINES = 20

/** Hero grande con botones magnéticos y escena 3D */
export function Hero({ mouse, loaded, onIntroComplete }: HeroProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const warpRef = useRef<HTMLDivElement>(null)
  const btnProjectsRef = useRef<HTMLAnchorElement>(null)
  const btnContactRef = useRef<HTMLAnchorElement>(null)
  const hintRef = useRef<HTMLParagraphElement>(null)
  const [hoveredPlanet, setHoveredPlanet] = useState<PlanetConfig | null>(null)
  const [nameRevealDone, setNameRevealDone] = useState(false)
  const navigatingRef = useRef(false)

  useMagnetic(btnProjectsRef, 0.4)
  useMagnetic(btnContactRef, 0.35)

  const handlePlanetHover = useCallback((planet: PlanetConfig) => {
    setHoveredPlanet(planet)
  }, [])

  const handlePlanetHoverEnd = useCallback(() => {
    setHoveredPlanet(null)
  }, [])

  const handlePlanetSelect = useCallback((planet: PlanetConfig) => {
    if (navigatingRef.current) return
    navigatingRef.current = true
    setHoveredPlanet(null)

    const warp = warpRef.current
    const jump = () => {
      scrollToSection(planet.destination.sectionId)
      setTimeout(() => {
        navigatingRef.current = false
      }, 900)
    }

    if (!warp) {
      jump()
      return
    }

    gsap
      .timeline({ onComplete: jump })
      .to(warp, { opacity: 0.85, duration: 0.18, ease: 'power2.out' })
      .to('.hero-warp-line', { scaleX: 2.2, duration: 0.35, ease: 'power2.in' }, 0)
      .to(warp, { opacity: 0, duration: 0.25, ease: 'power2.in' }, 0.35)
      .set('.hero-warp-line', { scaleX: 1 }, 0.6)
  }, [])

  const handleNameRevealComplete = useCallback(() => {
    setNameRevealDone(true)
    onIntroComplete?.()
  }, [onIntroComplete])

  useEffect(() => {
    if (!loaded || !nameRevealDone || !contentRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        '.hero-animate',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out' }
      )

      if (hintRef.current) {
        tl.to(hintRef.current, { opacity: 0.65, duration: 1, ease: 'power2.out' }, '-=0.3')
        gsap.to(hintRef.current, {
          y: -4,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5,
        })
      }
    }, contentRef)

    return () => ctx.revert()
  }, [loaded, nameRevealDone])

  useEffect(() => {
    if (!loaded || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-welcome',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: 'power2.out' }
      )
    }, contentRef)

    return () => ctx.revert()
  }, [loaded])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="hero-scene-wrap absolute inset-0 z-[1] will-change-transform">
        <CosmicScene
          mouse={mouse}
          onPlanetSelect={handlePlanetSelect}
          onPlanetHover={handlePlanetHover}
          onPlanetHoverEnd={handlePlanetHoverEnd}
        />
      </div>

      <div
        ref={warpRef}
        className="hero-warp pointer-events-none absolute inset-0 z-[5] opacity-0"
      >
        {Array.from({ length: WARP_LINES }).map((_, i) => (
          <div
            key={i}
            className="hero-warp-line absolute top-1/2 left-1/2 h-px origin-left bg-gradient-to-r from-transparent via-white/50 to-transparent"
            style={{
              width: '55vw',
              transform: `rotate(${(360 / WARP_LINES) * i}deg)`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0e17_75%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cosmic-void/40 via-transparent to-cosmic-void/90" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cosmic-void/60 via-transparent to-cosmic-void/60" />

      <PlanetNavHint planet={hoveredPlanet} />

      <p
        ref={hintRef}
        className={`pointer-events-none absolute bottom-24 left-1/2 z-20 -translate-x-1/2 font-body text-xs tracking-[0.35em] text-accent-soft uppercase opacity-0 transition-opacity duration-300 md:bottom-28 md:text-sm ${hoveredPlanet ? '!opacity-0' : ''}`}
      >
        ✦ Viaja a un planeta ✦
      </p>

      <div
        ref={contentRef}
        className="hero-content pointer-events-none relative z-10 mx-auto max-w-5xl px-6 text-center will-change-transform"
      >
        <p className="hero-welcome mb-4 font-body text-sm tracking-[0.4em] text-accent-soft uppercase opacity-0 md:text-base">
          Bienvenido a mi universo
        </p>

        <RocketNameReveal
          name={PORTFOLIO.name}
          loaded={loaded}
          onComplete={handleNameRevealComplete}
        />

        <p className="hero-animate mt-5 font-display text-xl font-semibold text-white/80 opacity-0 md:text-2xl lg:text-3xl">
          {PORTFOLIO.title}
        </p>

        <p className="hero-animate mx-auto mt-6 max-w-2xl font-body text-base text-white/50 opacity-0 md:text-lg lg:text-xl">
          {PORTFOLIO.tagline}
        </p>

        <div className="hero-animate mt-12 flex flex-wrap items-center justify-center gap-5 opacity-0">
          <a
            ref={btnProjectsRef}
            href="#projects"
            className="pointer-events-auto inline-block rounded-full bg-accent px-10 py-4 font-body text-base font-semibold text-white shadow-lg shadow-accent/20 transition-shadow hover:shadow-accent/40"
            data-cursor="hover"
          >
            Ver Misiones
          </a>

          <a
            ref={btnContactRef}
            href="#contact"
            className="pointer-events-auto inline-block rounded-full border-2 border-white/25 px-10 py-4 font-body text-base font-semibold text-white/80 transition-colors hover:border-accent-soft hover:text-white"
            data-cursor="hover"
          >
            Contáctame
          </a>
        </div>

        <div className="hero-animate absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0">
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-xs tracking-widest text-white/30 uppercase">
              Scroll
            </span>
            <div className="h-10 w-6 rounded-full border-2 border-white/20 p-1.5">
              <div
                className="mx-auto h-2.5 w-1.5 animate-bounce rounded-full bg-accent-soft"
                style={{ animationDuration: '2s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
