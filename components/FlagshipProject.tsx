import Image from 'next/image'
import Link from 'next/link'
import { TbExternalLink } from 'react-icons/tb'
import TechTag from './TechTag'
import type { Project } from '@/utils/projectsData'

type FlagshipProjectProps = {
  project: Project
}

const FlagshipProject = ({ project }: FlagshipProjectProps) => {
  const {
    title,
    description,
    imageSrc,
    imageAlt,
    secondaryImageSrc,
    secondaryImageAlt,
    tags,
    liveUrl,
    role = 'Commercial product',
    year,
  } = project

  return (
    <article className="w-full">
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="mb-3 text-xs tracking-wide text-accent">
          {role}
          {year ? <span className="text-body/60"> · {year} · Solo</span> : null}
        </p>
        <h3 className="mb-4 font-mono text-3xl text-[#A9A9A9] sm:text-4xl">{title}</h3>
        <p className="text-sm leading-relaxed text-body sm:text-base">{description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {liveUrl ? (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-4 py-2 text-xs text-accent transition-colors hover:border-accent hover:bg-accent/20"
            >
              View live site
              <TbExternalLink size={16} aria-hidden />
            </Link>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechTag key={tag} label={tag} variant="maroon" />
          ))}
        </div>
      </div>

      <div className="relative">
        <Link
          href={liveUrl ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-black/30"
          aria-label={`Open ${title} live site`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1920}
            height={995}
            className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            priority
          />
        </Link>

        {secondaryImageSrc ? (
          <div className="mt-4 md:-mt-16 md:ml-auto md:w-[72%] md:pr-0">
            <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl shadow-black/40 md:ring-1 md:ring-white/5">
              <Image
                src={secondaryImageSrc}
                alt={secondaryImageAlt ?? `${title} detail`}
                width={1920}
                height={995}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default FlagshipProject
