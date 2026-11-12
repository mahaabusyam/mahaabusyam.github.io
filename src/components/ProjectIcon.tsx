import type { ReactNode } from 'react'
import type { ProjectIcon as IconName } from '../types'

// One small SVG per icon name. Record<IconName, ReactNode> makes TypeScript
// complain if a name from types.ts has no drawing here (exhaustive check).
const drawings: Record<IconName, ReactNode> = {
  prompt: (
    <>
      <rect x="-11" y="-13" width="22" height="26" rx="4" />
      <path d="M-5 -4h10M-5 2h10M-5 8h6" />
    </>
  ),
  map: (
    <>
      <path d="M0 14C-9 3 -12 -2 -12 -6A12 12 0 0 1 12 -6C12 -2 9 3 0 14Z" />
      <circle cx="0" cy="-6" r="4" />
    </>
  ),
  chart: (
    <>
      <path d="M-13 9L-4 -1L3 5L13 -9" />
      <path d="M6 -9H13V-2" />
    </>
  ),
  bag: (
    <>
      <path d="M-11 -6H11L9 12H-9Z" />
      <path d="M-5 -6V-9A5 5 0 0 1 5 -9V-6" />
    </>
  ),
}

export default function ProjectIcon({ name }: { name: IconName }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="-14 -16 28 32"
      fill="none"
      stroke="#fff"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {drawings[name]}
    </svg>
  )
}