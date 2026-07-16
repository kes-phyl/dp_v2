import FlagshipProject from './FlagshipProject'
import Section from './Section'
import SectionHeading from './SectionHeading'
import { flagshipProject } from '@/utils/projectsData'

const Projects = () => {
  return (
    <Section id="project" className="pb-24 md:pb-32">
      <SectionHeading number="03" title="Work" />
      {flagshipProject ? <FlagshipProject project={flagshipProject} /> : null}
    </Section>
  )
}

export default Projects
