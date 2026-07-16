export type Project = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  secondaryImageSrc?: string
  secondaryImageAlt?: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  flagship?: boolean
  role?: string
  year?: string
  reversed?: boolean
}

export const projectsData: Project[] = [
  {
    title: 'Nexum',
    description:
      'Commercial website for Nexum, a software consulting practice. Designed in collaboration with a design partner; I led the engineering and production delivery.',
    imageSrc: '/nexum1.jpeg',
    imageAlt: 'Nexum hero, software that grows with your business',
    secondaryImageSrc: '/nexum2.jpeg',
    secondaryImageAlt: 'Nexum contact, speak with an architect',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Resend'],
    liveUrl: 'https://nexum-sepia.vercel.app/',
    featured: true,
    flagship: true,
    role: 'Brand site',
    year: '2026',
  },
  {
    title: 'CarHub',
    description:
      'A car discovery app with year-based filtering and detailed vehicle specs — clean interface, fast search.',
    imageSrc: '/hub.jpg',
    imageAlt: 'CarHub project screenshot',
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Firebase', 'RapidAPI'],
    githubUrl: 'https://github.com/kes-phyl/car_showcase',
    featured: false,
  },
  {
    title: 'Keeper',
    description:
      'A task board for organizing work and tracking progress — simple, focused, built for day-to-day productivity.',
    imageSrc: '/keeper.jpg',
    imageAlt: 'Keeper project screenshot',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    githubUrl: 'https://github.com/kes-phyl/car_showcase',
    featured: false,
    reversed: true,
  },
]

export const flagshipProject = projectsData.find((project) => project.flagship)
export const featuredProjects = projectsData.filter(
  (project) => project.featured && !project.flagship
)
