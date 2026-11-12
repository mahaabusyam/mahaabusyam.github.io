import type { CSSProperties } from 'react'
import type { Project } from '../types'
import ProjectIcon from './ProjectIcon'

interface Props {
  project: Project
  reveal: string // scroll effect class, e.g. "sr-left"
}

export default function ProjectCard({ project, reveal }: Props) {
  // The card reads its two colors from CSS variables, so the CSS file
  // stays generic and each project only passes its own colors.
  const colors = { '--c1': project.accent, '--c2': project.accent2 } as CSSProperties

  return (
    <div className={`card-wrap sr ${reveal}`}>
      <article className="card" style={colors}>
        <div className="card-spin" />
        <div className="card-inner">
          <div className="card-top">
            <div className="card-icon">
              <ProjectIcon name={project.icon} />
            </div>
            <span className="card-label">{project.label}</span>
          </div>

          <h3 className="card-title">{project.title}</h3>
          <p className="card-desc">{project.description}</p>

          <div className="card-stack">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="card-links">
            <a href={project.live} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
            <a href={project.code} target="_blank" rel="noreferrer">
              Code ↗
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}