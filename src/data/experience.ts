import type { ExperienceItem } from '../types'

export const experience: ExperienceItem[] = [
  {
    role: 'Front-End Intern',
    company: 'Webura Company',
    period: 'Apr 2026 – Jun 2026',
    summary:
      'Built four responsive multi-page websites with HTML, CSS and JavaScript, each deployed on GitHub Pages.',
    projects: [
      { name: 'Dental Clinic', accent: '#8b9bff', url: 'https://mahaabusyam.github.io/Dental-clinic/' },
      { name: 'XTRA', accent: '#5fd0c5', url: 'https://mahaabusyam.github.io/XTRA/' },
      { name: 'Turpotic', accent: '#ffc16b', url: 'https://mahaabusyam.github.io/turpoticProject/' },
      { name: 'Lilia', accent: '#ff8fab', url: 'https://mahaabusyam.github.io/Lilia-project/' },
    ],
    stack: [
      { name: 'HTML', dot: '#e34f26' },
      { name: 'CSS', dot: '#1572b6' },
      { name: 'JavaScript', dot: '#f7df1e' },
      { name: 'GitHub Pages', dot: '#ffffff' },
    ],
    certificate: 'Training Completion Certificate',
  },
]