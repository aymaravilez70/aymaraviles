import { useEffect, useId, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

interface RocketNameRevealProps {
  name: string
  loaded: boolean
  onComplete?: () => void
}

function resetIntroElements(
  clip: HTMLElement,
  rocket: HTMLElement,
  trail: HTMLElement,
  flame: HTMLElement,
  spark: HTMLElement | null
) {
  gsap.killTweensOf([clip, rocket, trail, flame, spark].filter(Boolean))

  gsap.set(clip, { width: '0%', clearProps: 'transform' })
  gsap.set(rocket, { left: '-48px', opacity: 0, rotate: -12, clearProps: 'transform' })
  gsap.set(trail, { opacity: 0, scaleX: 0.3, clearProps: 'transform' })
  gsap.set(flame, { scaleY: 0.6, clearProps: 'transform' })
  if (spark) gsap.set(spark, { opacity: 0, scale: 0.8, clearProps: 'transform' })
}

/** Cohete que revela el nombre con clip suave — sin animar letras sueltas */
export function RocketNameReveal({ name, loaded, onComplete }: RocketNameRevealProps) {
  const uid = useId().replace(/:/g, '')
  const wrapRef = useRef<HTMLDivElement>(null)
  const clipRef = useRef<HTMLDivElement>(null)
  const rocketRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const flameRef = useRef<HTMLDivElement>(null)
  const sparkRef = useRef<HTMLDivElement>(null)
  const playedRef = useRef(false)

  useLayoutEffect(() => {
    const clip = clipRef.current
    const rocket = rocketRef.current
    const trail = trailRef.current
    const flame = flameRef.current
    const spark = sparkRef.current
    if (!clip || !rocket || !trail || !flame) return

    resetIntroElements(clip, rocket, trail, flame, spark)
    playedRef.current = false
  }, [name])

  useEffect(() => {
    if (!loaded || playedRef.current) return

    const wrap = wrapRef.current
    const clip = clipRef.current
    const rocket = rocketRef.current
    const trail = trailRef.current
    const flame = flameRef.current
    const spark = sparkRef.current
    if (!wrap || !clip || !rocket || !trail || !flame) return

    playedRef.current = true

    const ctx = gsap.context(() => {
      resetIntroElements(clip, rocket, trail, flame, spark)

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reducedMotion) {
        gsap.set(clip, { width: '100%' })
        gsap.set(rocket, { opacity: 0 })
        gsap.set(trail, { opacity: 0 })
        onComplete?.()
        return
      }

      const finishIntro = () => {
        gsap.set(rocket, { opacity: 0 })
        gsap.set(trail, { opacity: 0 })
        gsap.set(spark, { opacity: 0 })
        clip.style.willChange = 'auto'
        rocket.style.willChange = 'auto'
        onComplete?.()
      }

      const tl = gsap.timeline({ delay: 0.55, onComplete: finishIntro })

      tl.to(trail, { opacity: 0.85, scaleX: 1, duration: 0.35, ease: 'power2.out' }, 0)
        .to(rocket, { opacity: 1, duration: 0.25, ease: 'power2.out' }, 0)
        .to(clip, { width: '100%', duration: 2.6, ease: 'power2.inOut' }, 0)
        .to(
          rocket,
          { left: 'calc(100% + 12px)', rotate: 6, duration: 2.6, ease: 'power2.inOut' },
          0
        )
        .to(
          flame,
          { scaleY: 1, duration: 0.2, repeat: 12, yoyo: true, ease: 'sine.inOut' },
          0
        )
        .to([rocket, trail], { opacity: 0, duration: 0.45, ease: 'power2.in' }, 2.35)

      if (spark) {
        tl.to(spark, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' }, 2.3).to(
          spark,
          { opacity: 0, duration: 0.6, ease: 'power2.in' },
          3.1
        )
      }
    }, wrap)

    return () => {
      playedRef.current = false
      ctx.revert()
      if (clip && rocket && trail && flame) {
        resetIntroElements(clip, rocket, trail, flame, spark)
      }
    }
  }, [loaded, onComplete, name])

  return (
    <div ref={wrapRef} className="hero-name-reveal relative inline-block max-w-full">
      <h1
        aria-hidden
        className="invisible font-display text-5xl leading-tight font-extrabold whitespace-nowrap md:text-7xl lg:text-8xl"
      >
        {name}
      </h1>

      <div
        ref={clipRef}
        className="hero-name-clip absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: 0 }}
      >
        <h1 className="font-display text-5xl leading-tight font-extrabold whitespace-nowrap md:text-7xl lg:text-8xl">
          <span className="text-gradient-cosmic glow-text">{name}</span>
        </h1>
      </div>

      <div
        ref={sparkRef}
        className="hero-name-spark pointer-events-none absolute inset-0 opacity-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(107,140,174,0.35) 0%, transparent 70%)',
        }}
      />

      <div
        ref={rocketRef}
        className="hero-rocket pointer-events-none absolute top-1/2 z-10 -translate-y-1/2 opacity-0"
        style={{ left: '-48px' }}
        aria-hidden
      >
        <div
          ref={trailRef}
          className="rocket-trail absolute top-1/2 right-full -translate-y-1/2 origin-right opacity-0"
        />
        <div ref={flameRef} className="rocket-flame absolute top-1/2 right-[88%] -translate-y-1/2" />
        <svg
          className="rocket-body relative block h-11 w-11 md:h-14 md:w-14"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`rocket-body-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="50%" stopColor="#8899b0" />
              <stop offset="100%" stopColor="#6b8cae" />
            </linearGradient>
            <linearGradient id={`rocket-nose-${uid}`} x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>
          <path d="M8 32 L28 14 L28 50 Z" fill={`url(#rocket-nose-${uid})`} />
          <ellipse cx="38" cy="32" rx="16" ry="14" fill={`url(#rocket-body-${uid})`} />
          <path d="M28 18 L22 8 L28 14 Z" fill="#5b6b80" opacity="0.9" />
          <path d="M28 50 L22 56 L28 46 Z" fill="#5b6b80" opacity="0.9" />
          <circle cx="42" cy="32" r="5" fill="#0a0e17" opacity="0.55" />
          <circle cx="43" cy="31" r="2.5" fill="#6b8cae" opacity="0.8" />
          <path d="M52 32 L58 26 L58 38 Z" fill="#4a5568" />
        </svg>
      </div>
    </div>
  )
}
