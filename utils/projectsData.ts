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
      'A commercial site for software architecture and intelligent systems consulting. Designed and built end to end — brand positioning, messaging, and a conversion-led experience that reads senior without looking agency-generic.',
    imageSrc: '/nexum1.jpeg',
    imageAlt: 'Nexum hero — software architecture landing page',
    secondaryImageSrc: '/nexum2.jpeg',
    secondaryImageAlt: 'Nexum services grid — eight engagement entry points',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Resend'],
    liveUrl: 'https://nexum-sepia.vercel.app/',
    featured: true,
    flagship: true,
    role: 'Commercial brand site',
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
