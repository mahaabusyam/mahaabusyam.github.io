// The "M" mark. Layers, from back to front:
//   svg        the dark disc and the gradient M (drawn on load)
//   logo-orbit a ring whose color fades out behind it, like a comet tail
//   logo-spark a small bright dot that sits at the head of that ring
// The orbit and the spark spin together (see Header.css).
export default function Logo() {
  return (
    <span className="logo" aria-hidden="true">
      <svg width="52" height="52" viewBox="0 0 48 48">
        <defs>
          <linearGradient id="logoM" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5fd0c5" />
            <stop offset="1" stopColor="#8b9bff" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="22" fill="#0f1d33" stroke="rgba(255,255,255,.14)" strokeWidth="1" />
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
      <span className="logo-orbit" />
      <span className="logo-spark" />
    </span>
  )
}