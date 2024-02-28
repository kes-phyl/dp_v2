import Link from 'next/link'

const AnimatedButton = () => {
  return (
  <Link className="button-animated mt-10" data-text="Awesome" target='_blank' href='/DanPhylbertCv.pdf'>
    {/* <button className="button-animated mt-10" data-text="Awesome"> */}
    <span className="actual-text">&nbsp;Resume?&nbsp;</span><span aria-hidden="true" className="hover-text">&nbsp;Resume?&nbsp;</span>
    {/* <span aria-hidden="true" className="hover-text">&nbsp;Resume?&nbsp;</span> */}
    {/* </button> */}
</Link>
  )
}

export default AnimatedButton