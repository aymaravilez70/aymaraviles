import { useState } from 'react'
import { PORTFOLIO } from '../../config/portfolio'
import { AnimatedStat } from '../ui/AnimatedStat'
import { SectionTitle } from '../ui/SectionTitle'

/** Sobre mí — layout grande con experiencia colapsable */
export function About() {
  const [expOpen, setExpOpen] = useState(false)

  return (
    <section id="about" className="scroll-section-grow relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionTitle label="04 — Sobre mí" title={PORTFOLIO.about.heading} />

        <div className="scroll-grow glass-panel neon-border rounded-2xl p-8 md:p-12">
          <div className="reveal-stagger space-y-6">
            {PORTFOLIO.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="reveal-item font-body text-base leading-relaxed text-white/70 md:text-lg"
              >
                {p}
              </p>
            ))}
          </div>

          <p className="mt-6 text-center font-body text-sm text-accent-soft">
            📍 {PORTFOLIO.location}
          </p>

          <div className="reveal-stagger mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {PORTFOLIO.stats.map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setExpOpen(!expOpen)}
            className="mt-8 flex w-full items-center justify-between rounded-xl border border-white/12 px-6 py-4 font-body text-base text-white/65 transition-colors hover:border-accent-soft/40 hover:text-white/85"
            data-cursor="hover"
          >
            <span>Experiencia laboral</span>
            <span className={`text-xl transition-transform ${expOpen ? 'rotate-180' : ''}`}>
              ▾
            </span>
          </button>

          {expOpen && (
            <div className="mt-4 space-y-3">
              {PORTFOLIO.experience.map((job) => (
                <div
                  key={job.company}
                  className="rounded-xl border border-white/8 bg-cosmic-deep/50 px-6 py-4"
                >
                  <p className="font-display text-lg font-semibold text-accent-soft">
                    {job.role}
                  </p>
                  <p className="font-body text-sm text-white/50">
                    {job.company} · {job.period}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
