import Link from 'next/link'
import Section from './Section'
import SectionHeading from './SectionHeading'

const Contact = () => {
  return (
    <Section id="contact" className="scroll-mt-28 pt-20 md:pt-24">
      <SectionHeading number="04" title="Contact" />
      <div className="prose-width">
        <p className="mb-6 text-sm leading-relaxed text-body sm:text-base">
          Currently open to roles and collaborations where product craft and delivery matter. Prefer
          email.
        </p>
        <Link
          href="mailto:danphylbert@gmail.com"
          className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:underline"
        >
          danphylbert@gmail.com
          <span aria-hidden className="text-accent/70">
            →
          </span>
        </Link>
      </div>
    </Section>
  )
}

export default Contact
