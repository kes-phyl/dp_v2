export type Project = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  featured: boolean
  reversed?: boolean
}

export const projectsData: Project[] = [
  {
    title: 'Car_Hub',
    description:
      'A car discovery app with year-based filtering and detailed vehicle specs — clean interface, fast search.',
    imageSrc: '/hub.jpg',
    imageAlt: 'Car Hub project screenshot',
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Firebase', 'RapidAPI'],
    githubUrl: 'https://github.com/kes-phyl/car_showcase',
    featured: true,
  },
  {
    title: 'Keeper',
    description:
      'A task board for organizing work and tracking progress — simple, focused, built for day-to-day productivity.',
    imageSrc: '/keeper.jpg',
    imageAlt: 'Keeper project screenshot',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    githubUrl: 'https://github.com/kes-phyl/car_showcase',
    featured: true,
    reversed: true,
  },
]

export const featuredProjects = projectsData.filter((project) => project.featured)
