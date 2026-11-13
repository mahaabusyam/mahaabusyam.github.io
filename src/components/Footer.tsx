import { profile } from '../data/profile'
import SocialIcon from './SocialIcon'
import Logo from './Logo'
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
          <Logo size={40} animate={false} />

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
          <a
            className="soc"
            href={profile.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon name="github" size={20} />
          </a>

          <a
            className="soc"
            href={profile.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <SocialIcon name="linkedin" size={20} />
          </a>

          <a
            className="soc"
            href={`mailto:${profile.email}`}
            aria-label="Email"
          >
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