import { PORTFOLIO } from '../../config/portfolio'
import { SectionTitle } from '../ui/SectionTitle'
import { ProjectCard } from '../ui/ProjectCard'

/** Grid grande de proyectos — cada tarjeta abre su página */
export function Projects() {
  return (
    <section id="projects" className="scroll-section-grow relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="02 — Misiones"
          title="Proyectos en Órbita"
          subtitle="Selecciona una misión para ver galería, detalles técnicos y enlaces"
        />

        <div className="reveal-stagger grid gap-8 md:grid-cols-2">
          {PORTFOLIO.projects.map((project, i) => (
            <div key={project.id} className="reveal-item">
              <ProjectCard project={project} missionNumber={i + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
