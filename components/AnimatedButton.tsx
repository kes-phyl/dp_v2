import React from 'react'

const AnimatedButton = () => {
  return (
    <button className="button-animated mt-10" data-text="Awesome">
    <span className="actual-text">&nbsp;Resume?&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Resume?&nbsp;</span>
</button>
  )
}

export default AnimatedButton