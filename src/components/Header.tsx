import { profile } from '../data/profile'
import Logo from './Logo'
import './Header.css'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="header">
      <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
        <Logo />
        <span className="brand-text">
          <span className="brand-name">
            Maha <span className="accent">Abu Syam</span>
          </span>
          <span className="brand-role">FRONTEND DEVELOPER</span>
        </span>
      </a>

      <nav className="nav" aria-label="Main">
        {links.map((link) => (
          <a key={link.href} className="nav-link" href={link.href}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-ghost btn-sm" href={profile.cvUrl} download>
          Download CV
        </a>
      </nav>
    </header>
  )
}