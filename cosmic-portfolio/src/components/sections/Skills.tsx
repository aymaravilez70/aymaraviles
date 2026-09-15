import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { PORTFOLIO } from '../../config/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

/** Habilidades flotando como satélites */
export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tags = containerRef.current?.querySelectorAll('.skill-orbit')
    if (!tags?.length) return

    tags.forEach((tag, i) => {
      gsap.to(tag, {
        y: `random(-12, 12)`,
        x: `random(-8, 8)`,
        rotation: `random(-3, 3)`,
        duration: `random(2.5, 4.5)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.15,
      })
    })
  }, [])

  return (
    <section id="skills" className="scroll-section-grow relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          label="03 — Habilidades"
          title="Stack Tecnológico"
          subtitle="Satélites en órbita — herramientas que impulsan cada misión"
        />

        <div
          ref={containerRef}
          className="reveal-stagger relative flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {/* Anillo decorativo */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10 md:h-64 md:w-64"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/5 md:h-44 md:w-44"
            aria-hidden
          />

          {PORTFOLIO.skills.map((skill) => (
            <span
              key={skill.name}
              className="skill-orbit scroll-grow reveal-item rounded-full border px-5 py-2.5 font-body text-sm text-white/80 md:text-base"
              style={{
                borderColor: `${skill.color}44`,
                backgroundColor: `${skill.color}15`,
                boxShadow: `0 0 20px ${skill.color}11`,
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
