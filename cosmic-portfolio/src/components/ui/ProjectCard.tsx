import { useRef } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../../config/portfolio'
import { useTilt } from '../../hooks/useTilt'

interface ProjectCardProps {
  project: Project
  missionNumber: number
}

/** Tarjeta estilo misión espacial con tilt 3D */
export function ProjectCard({ project, missionNumber }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  useTilt(cardRef, 10)

  return (
    <Link
      ref={cardRef}
      to={`/proyecto/${project.id}`}
      className="mission-card scroll-grow group relative block overflow-hidden rounded-2xl transition-shadow duration-500 will-change-transform"
      style={{ transition: 'transform 0.15s ease-out, box-shadow 0.5s' }}
      data-cursor="hover"
    >
      <div
        className="glass-panel neon-border relative overflow-hidden"
        style={{ boxShadow: `0 0 0 1px ${project.color}15` }}
      >
        {/* HUD corners */}
        <span
          className="pointer-events-none absolute top-3 left-3 h-4 w-4 border-t border-l opacity-40 transition-opacity group-hover:opacity-80"
          style={{ borderColor: project.color }}
        />
        <span
          className="pointer-events-none absolute top-3 right-3 h-4 w-4 border-t border-r opacity-40 transition-opacity group-hover:opacity-80"
          style={{ borderColor: project.color }}
        />
        <span
          className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l opacity-40 transition-opacity group-hover:opacity-80"
          style={{ borderColor: project.color }}
        />
        <span
          className="pointer-events-none absolute right-3 bottom-3 h-4 w-4 border-r border-b opacity-40 transition-opacity group-hover:opacity-80"
          style={{ borderColor: project.color }}
        />

        {/* Scan line on hover */}
        <div className="mission-scan pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100" style={{ backgroundColor: `${project.color}88` }} />

        <div className="relative p-6 md:p-8">
          <div
            className="absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
            style={{ backgroundColor: project.color }}
          />

          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-body text-xs tracking-wider uppercase"
              style={{
                borderColor: `${project.color}44`,
                color: project.color,
                backgroundColor: `${project.color}12`,
              }}
            >
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full"
                style={{ backgroundColor: project.color }}
              />
              Misión {String(missionNumber).padStart(2, '0')}
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 font-body text-xs tracking-wider text-white/50 uppercase">
              {project.category}
            </span>
          </div>

          <h3
            className="mt-4 font-display text-2xl font-bold md:text-3xl"
            style={{ color: project.color }}
          >
            {project.title}
          </h3>

          <p className="mt-3 font-body text-base leading-relaxed text-white/60">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 font-body text-xs text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <span
            className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium transition-all group-hover:gap-3"
            style={{ color: project.color }}
          >
            Iniciar misión
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
