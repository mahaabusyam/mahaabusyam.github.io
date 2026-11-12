import type { CSSProperties } from 'react'
import { experience } from '../data/experience'
import './Experience.css'

const accentVar = (color: string) => ({ '--ac': color }) as CSSProperties

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="sr sr-up">
        <div className="eyebrow">Experience</div>
        <h2 className="section-title">Where I&apos;ve worked</h2>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <div key={`${item.company}-${item.period}`} className="timeline-row">
            {/* left rail: a dot that pops in, and a line that grows downward */}
            <div className="timeline-rail" aria-hidden="true">
              <span className="timeline-dot sr sr-pop" />
              <span className="timeline-line sr sr-grow" />
            </div>

            <article className="xpcard sr sr-focus">
              <div className="xp-head">
                <div className="xp-who">
                  <div className="xp-icon">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="7" width="18" height="13" rx="2.5" />
                      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="xp-role">{item.role}</h3>
                    <div className="xp-company">{item.company}</div>
                  </div>
                </div>
                <span className="xp-period">{item.period}</span>
              </div>

              <p className="xp-summary">{item.summary}</p>

              <div className="xp-projects">
                {item.projects.map((project) => {
                  const content = (
                    <>
                      <span className="xp-dot" />
                      <span className="xp-name">{project.name}</span>
                      {project.url && <span className="xp-arrow">↗</span>}
                    </>
                  )
                  // a link when we have a URL, a plain tile when we don't
                  return project.url ? (
                    <a
                      key={project.name}
                      className="xpproj"
                      style={accentVar(project.accent)}
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={project.name} className="xpproj" style={accentVar(project.accent)}>
                      {content}
                    </div>
                  )
                })}
              </div>

              <div className="xp-foot">
                {item.stack.map((skill) => (
                  <span key={skill.name} className="skill" style={{ '--dot': skill.dot } as CSSProperties}>
                    <i />
                    {skill.name}
                  </span>
                ))}
                {item.certificate && (
                  <span className="xp-badge">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="9" r="6" />
                      <path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5" />
                    </svg>
                    {item.certificate}
                  </span>
                )}
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}