import type { CSSProperties } from 'react'
import { profile } from '../data/profile'
import { skillGroups } from '../data/skills'
import Avatar from './Avatar'
import { FactIcon, GroupIcon } from './AboutIcons'
import type { FactIconName } from './AboutIcons'
import './About.css'

interface Fact {
  icon: FactIconName
  label: string
  value: string
  accent: string
}

const facts: Fact[] = [
  { icon: 'education', label: 'EDUCATION', value: 'Al-Azhar University · 2027', accent: '#8b9bff' },
  { icon: 'location', label: 'LOCATION', value: profile.location, accent: '#5fd0c5' },
  { icon: 'focus', label: 'FOCUS', value: 'React & TypeScript', accent: '#ffc16b' },
  { icon: 'status', label: 'STATUS', value: 'Open to junior roles', accent: '#ff8fab' },
]

// Staggered entrance: each item starts a little later than the previous one.
const delays = ['', 'sr-d1', 'sr-d2', 'sr-d3']

const accentVar = (color: string) => ({ '--ac': color }) as CSSProperties

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-main">
        <div className="about-head sr sr-focus">
          <Avatar />
          <div>
            <div className="eyebrow">About</div>
            <h2 className="section-title">A bit about me</h2>
          </div>
        </div>

        {profile.about.map((paragraph, i) => (
          <p key={i} className={`about-text sr sr-focus ${delays[i + 1] ?? ''}`}>
            {paragraph}
          </p>
        ))}

        <div className="facts">
          {facts.map((fact, i) => (
            <div key={fact.label} className={`fact sr sr-up ${delays[i]}`} style={accentVar(fact.accent)}>
              <div className="icon-box">
                <FactIcon name={fact.icon} />
              </div>
              <div>
                <div className="fact-label">{fact.label}</div>
                <div className="fact-value">{fact.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills">
        {skillGroups.map((group, i) => (
          <div key={group.title} className={`skillcard sr sr-right ${delays[i]}`} style={accentVar(group.accent)}>
            <div className="skillcard-head">
              <div className="icon-box icon-box-lg">
                <GroupIcon name={group.icon} />
              </div>
              <h3>{group.title}</h3>
            </div>
            <div className="skillcard-list">
              {group.skills.map((skill) => (
                <span key={skill.name} className="skill" style={{ '--dot': skill.dot } as CSSProperties}>
                  <i />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}