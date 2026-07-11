import { LiaCaretRightSolid } from 'react-icons/lia'
import Image from 'next/image'
import Link from 'next/link'
import Section from './Section'
import SectionHeading from './SectionHeading'

const technologies = [
  'JavaScript (ES6+)',
  'React',
  'Node.js',
  'TypeScript',
  'Next',
]

const About = () => {
  return (
    <Section id="about">
      <SectionHeading number="01" title="About Me" />

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_12rem]">
        <div className="notification w-full max-w-none">
          <div className="notibody w-full text-sm leading-relaxed">
            <p>
              Hi there, my name is Dan and I enjoy creating impactful digital experiences. I have always
              been fascinated by gadgets, but my interest in web development started back in 2015 when I
              got a &lsquo;coding-dictionary&rsquo; that shows you how to make websites! Which in
              hindsight, was a textbook on HTML &amp; CSS.
            </p>
            <br />
            <p>
              Asides my passion for computers, I have even been more passionate about making easier the
              lives of persons around me. This passion led me to explore other areas like Nursing. Very
              quickly, I found out that I am much comfortable in the sweet spot where technology solves a
              user&apos;s needs.
            </p>
            <br />
            <p>
              Fast-forward to today, I&apos;ve completed a Masters in Comp Science from Coventry Uni, and
              I&apos;ve had the privilege of working for{' '}
              <Link target="_blank" className="text-accent" href="https://signapse.ai">
                a start-up,
              </Link>{' '}
              and{' '}
              <Link target="_blank" className="text-accent" href="https://conigital.org">
                a scale up
              </Link>{' '}
              organisation.
            </p>
            <br />
            <p>Here are a few technologies I am currently working with:</p>

            <ul className="mt-6 grid list-none gap-2 text-xs sm:grid-cols-2">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <LiaCaretRightSolid className="shrink-0 text-base text-divider" />
                  {tech}
                </li>
              ))}
            </ul>
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
    </Section>
  )
}

export default About
