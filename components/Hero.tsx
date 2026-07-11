import { AnimatedButton } from '.'
import Section from './Section'

const Hero = () => {
  return (
    <Section className="flex min-h-[calc(100vh-5rem)] items-center pt-8 md:pt-12">
      <div className="prose-width">
        <p className="mb-6 text-lg text-body sm:mb-8 sm:text-2xl">
          {'{Hi'} <span className="waving">🖐🏿</span>
          {'}'}, <span className="text-accent">I&apos;m</span>
        </p>
        <h1 className="font-mono text-3xl text-body sm:text-5xl xl:text-7xl">Dan Phylbert</h1>
        <p className="mt-5 text-sm leading-relaxed text-body sm:text-base">
          I&apos;m a software engineer focused on connected TV platforms. At{' '}
          <span className="text-accent">FX Digital</span>, I build TypeScript and Lightning.js
          experiences for streaming applications — authentication, subscriptions, and platform
          integrations in production.
        </p>
        <AnimatedButton />
      </div>
    </Section>
  )
}

export default Hero
