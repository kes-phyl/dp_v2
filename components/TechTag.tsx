type TechTagProps = {
  label: string
  variant?: 'accent' | 'maroon'
}

const TechTag = ({ label, variant = 'accent' }: TechTagProps) => {
  return <span className={`tech-tag tech-tag--${variant}`}>{label}</span>
}

export default TechTag
