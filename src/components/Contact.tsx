import type { CSSProperties } from 'react'
import { profile } from '../data/profile'
import SocialIcon from './SocialIcon'
import type { SocialIconName } from './SocialIcon'
import './Contact.css'

interface Tile {
  icon: SocialIconName
  label: string
  value: string
  href: string
  accent: string
}

const tiles: Tile[] = [
  { icon: 'mail', label: 'EMAIL', value: profile.email, href: `mailto:${profile.email}`, accent: '#5fd0c5' },
  { icon: 'linkedin', label: 'LINKEDIN', value: profile.fullName, href: profile.linkedin, accent: '#8b9bff' },
  { icon: 'github', label: 'GITHUB', value: 'github.com/mahaabusyam', href: profile.github, accent: '#ff8fab' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact sr sr-zoom">
      <div className="contact-card">
        {/* the running border light, same trick as the project cards */}
        <div className="contact-spin" />
        <div className="contact-inner">
          <div className="contact-glow" />
          <div className="contact-content">
            <div className="eyebrow">Contact</div>
            <h2 className="contact-title">Let&apos;s work together</h2>
            <p className="contact-text">
              I&apos;m looking for a Frontend junior role. The fastest way to reach me is by email, and
              I&apos;m happy to share more about any project.
            </p>

            <div className="contact-cta">
              <a className="btn btn-primary contact-btn" href={`mailto:${profile.email}`}>
                <SocialIcon name="mail" size={20} />
                Say hello
              </a>
            </div>

            <div className="ctiles">
              {tiles.map((tile) => (
                <a
                  key={tile.label}
                  className="ctile"
                  style={{ '--ac': tile.accent } as CSSProperties}
                  href={tile.href}
                  {...(tile.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="ctile-icon">
                    <SocialIcon name={tile.icon} />
                  </span>
                  <span className="ctile-text">
                    <span className="ctile-label">{tile.label}</span>
                    <span className="ctile-value">{tile.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}