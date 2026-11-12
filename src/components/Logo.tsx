// The "M" mark: a gradient M drawn on a dark disc with a spinning color ring.
// The animations live in Header.css (.logo-ring and .logo-m).
export default function Logo() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="logoM" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5fd0c5" />
          <stop offset="1" stopColor="#8b9bff" />
        </linearGradient>
        <linearGradient id="logoRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5fd0c5" />
          <stop offset="0.5" stopColor="#8b9bff" />
          <stop offset="1" stopColor="#ff8fab" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="#0f1d33" stroke="rgba(255,255,255,.14)" strokeWidth="1" />
      <circle
        className="logo-ring"
        cx="24"
        cy="24"
        r="22"
        fill="none"
        stroke="url(#logoRing)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="46 92"
      />
      <path
        className="logo-m"
        d="M12 34V14L24 27L36 14V34"
        fill="none"
        stroke="url(#logoM)"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}