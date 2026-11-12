import type { SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    accent: '#8b9bff',
    icon: 'code',
    skills: [
      { name: 'JavaScript', dot: '#f7df1e' },
      { name: 'TypeScript', dot: '#3178c6' },
      { name: 'HTML5', dot: '#e34f26' },
      { name: 'CSS3', dot: '#1572b6' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    accent: '#5fd0c5',
    icon: 'layers',
    skills: [
      { name: 'React', dot: '#61dafb' },
      { name: 'Redux Toolkit', dot: '#764abc' },
      { name: 'Zustand', dot: '#b08968' },
      { name: 'React Router', dot: '#f44250' },
      { name: 'React Hook Form', dot: '#ec5990' },
      { name: 'Zod', dot: '#3e78d6' },
      { name: 'Material UI', dot: '#007fff' },
      { name: 'Tailwind CSS', dot: '#06b6d4' },
      { name: 'Bootstrap 5', dot: '#9b6dff' },
    ],
  },
  {
    title: 'Tools',
    accent: '#ffc16b',
    icon: 'tools',
    skills: [
      { name: 'Git & GitHub', dot: '#f05032' },
      { name: 'Vite', dot: '#646cff' },
      { name: 'Vitest', dot: '#8ac43c' },
      { name: 'Axios', dot: '#8a63f0' },
      { name: 'Vercel', dot: '#ffffff' },
    ],
  },
]