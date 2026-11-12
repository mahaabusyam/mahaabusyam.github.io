import { profile } from '../data/profile'
import SocialIcon from './SocialIcon'
import './Footer.css'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer sr sr-fade">
      <div className="footer-row">
        <div className="footer-brand">
          <svg width="40" height="40" viewBox="0 0 48 48" aria-hidden="true">
            <circle cx="24" cy="24" r="22" fill="#0f1d33" stroke="rgba(255,255,255,.18)" />
            <path
              d="M12 34V14L24 27L36 14V34"
              fill="none"
              stroke="#5fd0c5"
              strokeWidth="4.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="footer-name">
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
          </span>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} className="flink" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-social">
          <a className="soc" href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <SocialIcon name="github" size={20} />
          </a>
          <a className="soc" href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <SocialIcon name="linkedin" size={20} />
          </a>
          <a className="soc" href={`mailto:${profile.email}`} aria-label="Email">
            <SocialIcon name="mail" size={20} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.fullName} · {profile.location}
        </span>
        <a className="totop" href="#top">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          Back to top
        </a>
      </div>
    </footer>
  )
}