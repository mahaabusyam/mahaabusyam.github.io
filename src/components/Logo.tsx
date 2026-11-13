import { useId } from 'react'

interface Props {
  size?: number
  animate?: boolean
}

export default function Logo({ size = 52, animate = true }: Props) {
  // useId يرجع نص فيه ":" فنحذفها ليصلح كمعرّف داخل url(#...)
  const uid = useId().replace(/:/g, '')
  const grad = `logoV${uid}`

  return (
    <span className={`logo${animate ? ' logo-animate' : ''}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 48 48" width={size} height={size} role="img" aria-label="Maha Abu Syam">
        <defs>
          <linearGradient id={grad} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5fd0c5" />
            <stop offset="1" stopColor="#8b9bff" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="46" height="46" rx="13" fill="#0f1d33" stroke="rgba(255,255,255,.18)" />
        <g
          transform="translate(24 24) scale(.88) translate(-24 -24)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            className="logo-brace"
            pathLength={100}
            d="M14 11Q10 11 10 15V20Q10 24 6.5 24Q10 24 10 28V33Q10 37 14 37"
            stroke="#cfe9ff"
            strokeWidth="3.4"
          />
          <path
            className="logo-brace"
            pathLength={100}
            d="M34 11Q38 11 38 15V20Q38 24 41.5 24Q38 24 38 28V33Q38 37 34 37"
            stroke="#cfe9ff"
            strokeWidth="3.4"
          />
          <path
            className="logo-v"
            pathLength={100}
            d="M14.5 14L24 27L33.5 14"
            stroke={`url(#${grad})`}
            strokeWidth="4.4"
          />
        </g>
      </svg>
    </span>
  )
}