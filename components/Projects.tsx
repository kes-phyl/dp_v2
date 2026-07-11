import FeaturedProject from './FeaturedProject'
import Section from './Section'
import SectionHeading from './SectionHeading'
import { featuredProjects } from '@/utils/projectsData'

const Projects = () => {
  return (
    <Section id="project" className="pb-20 md:pb-24">
      <SectionHeading number="03" title="Projects" />
      <div className="flex flex-col gap-12 md:gap-24">
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.title} {...project} />
        ))}
      </div>
    </Section>
  )
}

export default Projects
