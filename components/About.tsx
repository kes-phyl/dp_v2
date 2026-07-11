import { LiaCaretRightSolid } from 'react-icons/lia'
import Image from 'next/image'
import Link from 'next/link'
import Section from './Section'
import SectionHeading from './SectionHeading'

const technologies = [
  'JavaScript',
  'TypeScript',
  'Next.js',
  'React',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'Lightning.js',
  'Jest',
]

const About = () => {
  return (
    <Section id="about">
      <SectionHeading number="01" title="About Me" />

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_12rem]">
        <div className="notification w-full max-w-none">
          <div className="notibody prose-width w-full text-sm leading-relaxed">
            <p>
              Hi, I&apos;m Dan. My path into web development started in 2015 with a
              &lsquo;coding-dictionary&rsquo; that turned out to be an HTML &amp; CSS textbook
              — I&apos;ve been building ever since.
            </p>
            <br />
            <p>
              Aside from technology, I&apos;m driven by work that makes people&apos;s lives
              easier. I explored nursing before finding where I&apos;m most at home: software
              that solves real user needs.
            </p>
            <br />
            <p>
              I hold a Master&apos;s in Computer Science from Coventry University and have
              worked across a{' '}
              <Link target="_blank" className="text-accent" href="https://signapse.ai">
                start-up
              </Link>
              , a{' '}
              <Link target="_blank" className="text-accent" href="https://conigital.org">
                scale-up
              </Link>
              , and enterprise at <span className="text-accent">Oasis Group</span> — from video
              platforms and microservices to secure, public-facing web products.
            </p>
          </div>
        </div>

        <div className="mx-auto lg:mx-0">
          <Image
            src="/kes.jpg"
            alt="Dan Phylbert"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <div id="stack" className="prose-width mt-8 w-full scroll-mt-28">
        <p className="mb-3 text-xs text-[#99999d]">I work primarily with:</p>
        <ul className="grid list-none grid-cols-3 gap-x-3 gap-y-3 text-xs text-[#99999d] sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          {technologies.map((tech) => (
            <li key={tech} className="flex min-w-0 items-start gap-1 sm:items-center sm:gap-1.5">
              <LiaCaretRightSolid className="mt-0.5 shrink-0 text-sm text-divider/70 sm:mt-0" />
              <span className="leading-snug">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default About
