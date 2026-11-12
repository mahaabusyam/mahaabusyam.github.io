// Shapes of the data that fills the page.
// The sections only read these types, so adding a project later
// means adding one object, not touching the design.

export type ProjectIcon = 'prompt' | 'map' | 'chart' | 'bag'

export interface Project {
  id: string
  title: string
  label: string // small tag at the corner of the card, e.g. "FEATURED"
  description: string
  stack: string[]
  live: string // live demo URL
  code: string // GitHub URL
  accent: string // main color of the card
  accent2: string // second color of the running border light
  icon: ProjectIcon
}

export interface Skill {
  name: string
  dot: string // brand-like color for the dot
}

export type SkillGroupIcon = 'code' | 'layers' | 'tools'

export interface SkillGroup {
  title: string
  accent: string
  icon: SkillGroupIcon
  skills: Skill[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  summary: string
  projects: { name: string; accent: string; url?: string }[]
  stack: Skill[]
  certificate?: string
}

export interface Profile {
  name: string
  fullName: string
  title: string
  location: string
  email: string
  github: string
  linkedin: string
  cvUrl: string
  about: string[]
}