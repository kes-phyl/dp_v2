import Image from 'next/image'
import Link from 'next/link'
import { VscGithubAlt } from 'react-icons/vsc'
import { TbExternalLink } from 'react-icons/tb'
import TechTag from './TechTag'

type FeaturedProjectProps = {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  reversed?: boolean
}

const FeaturedProject = ({
  title,
  description,
  imageSrc,
  imageAlt,
  tags,
  githubUrl,
  liveUrl = githubUrl,
  reversed = false,
}: FeaturedProjectProps) => {
  const textAlign = reversed ? 'md:text-left' : 'md:text-right'
  const linkJustify = reversed ? 'md:justify-start' : 'md:justify-end'
  const tagJustify = reversed ? 'md:justify-start' : 'md:justify-end'

  return (
    <article className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
      <div
        className={`mx-auto w-full max-w-xs sm:max-w-sm md:mx-0 md:max-w-md ${
          reversed ? 'md:order-2' : ''
        }`}
      >
        <div className="overflow-hidden rounded-xl border border-white/10 shadow-md shadow-black/10 md:shadow-lg md:shadow-black/20">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={340}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      <div className={`text-body ${textAlign} ${reversed ? 'md:order-1' : ''}`}>
        <p className="mb-2 text-xs text-accent">Featured Project</p>
        <h3 className="mb-4 text-xl font-semibold text-[#A9A9A9]">{title}</h3>
        <div className="rounded bg-card-bg p-4 text-sm leading-relaxed shadow-lg md:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]">
          <p>{description}</p>
        </div>
        <div className={`mt-4 flex flex-wrap gap-2 ${tagJustify}`}>
          {tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
        <div className={`mt-4 flex gap-3 ${linkJustify}`}>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub`}>
            <VscGithubAlt
              size={28}
              className="cursor-pointer transition-colors duration-300 hover:text-accent"
            />
          </Link>
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} external link`}>
            <TbExternalLink
              size={28}
              className="cursor-pointer transition-colors duration-300 hover:text-accent"
            />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default FeaturedProject
