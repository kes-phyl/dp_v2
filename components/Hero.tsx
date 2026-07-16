import { AnimatedButton } from '.'
import Section from './Section'

const Hero = () => {
  return (
    <Section className="flex min-h-[calc(100dvh-5rem)] items-center pt-4 md:pt-8">
      <div className="prose-width">
        <p className="mb-6 text-lg text-body sm:mb-8 sm:text-2xl">
          {'{Hi'} <span className="waving">🖐🏿</span>
          {'}'}, <span className="text-accent">I&apos;m</span>
        </p>
        <h1 className="font-mono text-3xl text-body sm:text-5xl xl:text-7xl">Dan Phylbert</h1>
        <p className="mt-5 text-sm leading-relaxed text-body sm:text-base">
          Software engineer building connected-TV products at{' '}
          <span className="text-accent">FX Digital</span>. TypeScript and Lightning.js in
          production.
        </p>
        <AnimatedButton />
      </div>
    </Section>
  )
}

export default Hero
