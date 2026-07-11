import React from 'react'

type SectionProps = {
  id?: string
  children: React.ReactNode
  className?: string
}

const Section = ({ id, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="section-container">{children}</div>
    </section>
  )
}

export default Section
