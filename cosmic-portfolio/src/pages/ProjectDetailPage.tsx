import { useEffect, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import gsap from 'gsap'
import { getProjectById } from '../config/portfolio'

/** Página completa de detalle del proyecto con galería */
export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!project) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-enter',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      )
    })

    return () => ctx.revert()
  }, [project])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setLightbox(null)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightbox])

  if (!project) return <Navigate to="/" replace />

  return (
    <article className="min-h-screen pb-20 pt-24">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          to="/#projects"
          className="project-enter mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-body text-sm text-white/60 transition-all hover:border-accent-soft hover:text-white"
          data-cursor="hover"
        >
          ← Volver a proyectos
        </Link>

        <header className="project-enter mb-10">
          <span className="font-body text-sm tracking-wider text-accent-soft uppercase">
            {project.category}
          </span>
          <h1
            className="mt-2 font-display text-4xl font-bold md:text-6xl"
            style={{ color: project.color }}
          >
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-white/65 md:text-xl">
            {project.details}
          </p>
        </header>

        {/* Imagen principal */}
        <div className="project-enter mb-12 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <button
            type="button"
            className="group relative block w-full cursor-zoom-in"
            onClick={() => setLightbox(project.featured)}
            data-cursor="hover"
          >
            <img
              src={project.featured}
              alt={project.title}
              className="max-h-[520px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 font-body text-xs text-white/70 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              Ampliar
            </span>
          </button>
        </div>

        <div className="project-enter grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 font-display text-2xl font-bold text-white/85">
              Características
            </h2>
            <ul className="space-y-3">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-xl border border-white/8 bg-cosmic-deep/40 px-5 py-4 font-body text-base text-white/65"
                >
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: project.color }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-white/85">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/12 px-4 py-2 font-body text-sm text-white/55"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full py-3.5 text-center font-body text-sm font-semibold text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: project.color }}
                  data-cursor="hover"
                >
                  Ver demo en vivo →
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 py-3.5 text-center font-body text-sm text-white/70 transition-colors hover:border-white/40 hover:text-white"
                  data-cursor="hover"
                >
                  Ver en GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Galería */}
        {project.gallery.length > 1 && (
          <div className="project-enter mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold text-white/85">
              Galería
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((img) => (
                <button
                  key={img}
                  type="button"
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-cosmic-deep"
                  onClick={() => setLightbox(img)}
                  data-cursor="hover"
                >
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
          role="presentation"
        >
          <button
            type="button"
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </article>
  )
}
