import Link from 'next/link'
import Section from './Section'
import SectionHeading from './SectionHeading'

const Contact = () => {
  return (
    <Section id="contact" className="scroll-mt-28 pt-20 text-center md:pt-24">
      <SectionHeading number="04" title="What's Next?" centered />
      <h3 className="mb-3 text-2xl text-body sm:text-3xl">Get In Touch</h3>
      <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-body sm:text-base">
        My inbox is always open. Whether you have a question, an opportunity or just want to say hi,
        I&apos;ll try my best to get back to you!
      </p>
      <Link href="mailto:danphylbert@gmail.com">
        <button type="button" className="say_hello !mt-0">
          Say Hello
        </button>
      </Link>
    </Section>
  )
}

export default Contact
