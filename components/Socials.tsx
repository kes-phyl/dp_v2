import Link from 'next/link'
import { VscGithubAlt } from 'react-icons/vsc'
import { CiInstagram } from 'react-icons/ci'
import { FiLinkedin } from 'react-icons/fi'
import { socialLinks } from '@/utils/navLinks'

const iconMap = {
  GitHub: VscGithubAlt,
  LinkedIn: FiLinkedin,
  Instagram: CiInstagram,
} as const

const Socials = () => {
  return (
    <div className="fixed bottom-0 left-6 z-30 hidden flex-col gap-4 text-accent lg:flex">
      {socialLinks.map(({ href, label }) => {
        const Icon = iconMap[label]
        return (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon
              size={28}
              className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-accent"
            />
          </Link>
        )
      })}
      <div className="ml-3 mt-2 h-24 border-l-2 border-divider" />
    </div>
  )
}

export default Socials
