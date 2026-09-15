import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedStatProps {
  value: string
  label: string
}

/** Stat con count-up o reveal al entrar en viewport */
export function AnimatedStat({ value, label }: AnimatedStatProps) {
  const valueRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = valueRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      const numeric = value.match(/^(\d+)(.*)$/)

      if (numeric) {
        const target = parseInt(numeric[1], 10)
        const suffix = numeric[2]
        const counter = { n: 0 }

        gsap.to(counter, {
          n: target,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.n)}${suffix}`
          },
        })
      } else {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.6, filter: 'blur(8px)' },
          {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, el)

    return () => ctx.revert()
  }, [value])

  return (
    <div className="reveal-item text-center">
      <span
        ref={valueRef}
        className="font-display text-3xl font-bold text-gradient-cosmic md:text-4xl"
      >
        {value}
      </span>
      <p className="mt-1 font-body text-xs tracking-wider text-white/40 uppercase">{label}</p>
    </div>
  )
}
