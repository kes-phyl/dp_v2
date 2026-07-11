import Link from 'next/link'

const AnimatedButton = () => {
  return (
    <Link
      href="/DanPhylbertCv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="button-animated mt-10 inline-block"
    >
      <span className="actual-text">&nbsp;Resume?&nbsp;</span>
      <span aria-hidden="true" className="hover-text">&nbsp;Resume?&nbsp;</span>
    </Link>
  )
}

export default AnimatedButton
