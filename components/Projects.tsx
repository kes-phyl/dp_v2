import FeaturedProject from './FeaturedProject'
import Section from './Section'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'Car_Hub',
    description:
      'Explore the Carhub project, a sleek solution offering comprehensive car information filtered by year. Delve into specific car details effortlessly with our intuitive interface.',
    imageSrc: '/hub.jpg',
    imageAlt: 'Car Hub project screenshot',
    tags: ['Typescript', 'Next', 'Firebase'],
    githubUrl: 'https://github.com/kes-phyl/car_showcase',
  },
  {
    title: 'Keeper',
    description:
      "A task board for seamless organization. Streamline your tasks and boost productivity with Keeper's intuitive interface. Stay on top of your projects with ease, managing tasks efficiently.",
    imageSrc: '/keeper.jpg',
    imageAlt: 'Keeper project screenshot',
    tags: ['React', 'Express', 'Node'],
    githubUrl: 'https://github.com/kes-phyl/car_showcase',
    reversed: true,
  },
]

const Projects = () => {
  return (
    <Section id="project">
      <SectionHeading number="03" title="Projects" />
      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project) => (
          <FeaturedProject key={project.title} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
