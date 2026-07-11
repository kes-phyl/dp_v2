import React from 'react'

type SectionHeadingProps = {
  number: string
  title: string
  centered?: boolean
}

const SectionHeading = ({ number, title, centered = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-10 flex items-center gap-4 ${centered ? 'justify-center' : ''}`}>
      <h2 className={`shrink-0 text-2xl text-[#708090] sm:text-3xl ${centered ? 'text-center' : ''}`}>
        <span className="text-[#00c1f5]">{number}.</span> {title}
      </h2>
      {!centered && <div className="h-px min-w-[4rem] flex-1 border-b border-[#610000]" />}
    </div>
  )
}

export default SectionHeading
