import { profile } from '../data/profile'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

// A different entrance for each card, repeating if there are more than four.
const reveals = ['sr-left', 'sr-right', 'sr-flip', 'sr-zoom']

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-head sr sr-wipe">
        <div>
          <div className="eyebrow">Selected work</div>
          <h2 className="section-title">Projects</h2>
        </div>
        <a className="projects-all" href={`${profile.github}?tab=repositories`}>
          All repositories on GitHub →
        </a>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} reveal={reveals[i % reveals.length]} />
        ))}
      </div>
    </section>
  )
}