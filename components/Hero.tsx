import { AnimatedButton } from '.'
import Section from './Section'

const Hero = () => {
  return (
    <Section className="flex min-h-[calc(100vh-5rem)] items-center pt-8 md:pt-12">
      <div className="max-w-2xl">
        <p className="mb-6 text-lg text-body sm:mb-8 sm:text-2xl">
          {'{Hi'} <span className="waving">🖐🏿</span>
          {'}'}, <span className="text-accent">I&apos;m</span>
        </p>
        <h1 className="font-mono text-3xl text-body sm:text-5xl xl:text-7xl">Dan Phylbert</h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-body sm:text-base">
          I&apos;m a software engineer specializing in building (and occasionally designing) exceptional
          digital experiences. Currently, I&apos;m focused on building accessible, human-centered products
          at <span className="text-accent">Oasis Group</span>.
        </p>
        <AnimatedButton />
      </div>
    </Section>
  )
}

export default Hero
