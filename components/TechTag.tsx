type TechTagProps = {
  label: string
  variant?: 'accent' | 'maroon'
}

const variantClass = {
  accent: 'border border-white/10 bg-transparent text-[#708090] hover:border-white/15',
  maroon: 'border border-[#610000]/40 bg-transparent text-[#708090] hover:border-[#610000]/60',
} as const

const TechTag = ({ label, variant = 'accent' }: TechTagProps) => {
  return (
    <span
      className={`inline-block rounded px-3 py-1 text-xs transition-colors ${variantClass[variant]}`}
    >
      {label}
    </span>
  )
}

export default TechTag
