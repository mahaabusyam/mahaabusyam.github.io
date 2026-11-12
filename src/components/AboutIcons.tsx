import type { ReactNode } from 'react'
import type { SkillGroupIcon } from '../types'

export type FactIconName = 'education' | 'location' | 'focus' | 'status'

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const facts: Record<FactIconName, ReactNode> = {
  education: (
    <>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  focus: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  status: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
    </>
  ),
}

const groups: Record<SkillGroupIcon, ReactNode> = {
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />,
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  tools: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />,
}

export function FactIcon({ name }: { name: FactIconName }) {
  return <Svg>{facts[name]}</Svg>
}

export function GroupIcon({ name }: { name: SkillGroupIcon }) {
  return <Svg>{groups[name]}</Svg>
}