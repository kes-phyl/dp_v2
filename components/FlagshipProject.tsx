import Image from 'next/image'
import Link from 'next/link'
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
    role = 'Brand site',
    year,
  } = project

  return (
    <article className="w-full">
      <div className="mb-10 max-w-2xl md:mb-14">
        <p className="mb-4 text-[0.65rem] uppercase tracking-[0.18em] text-body/70">
          <span className="mr-1.5 text-accent" aria-hidden>
            •
          </span>
          {role}
          {year ? ` · ${year}` : null}
        </p>

        <h3 className="mb-3 font-mono text-3xl text-[#c8cdd3] sm:text-4xl">{title}</h3>
        <p className="max-w-xl text-sm leading-relaxed text-body sm:text-base">{description}</p>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-3">
          {liveUrl ? (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent transition-colors hover:underline"
            >
              View live
              <span aria-hidden className="ml-1.5 text-accent/70">
                →
              </span>
            </Link>
          ) : null}
          <p className="text-xs leading-relaxed text-body/80">{tags.join(' · ')}</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        <Link
          href={liveUrl ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-2xl border border-white/[0.08]"
          aria-label={`Open ${title} live site`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1920}
            height={995}
            className="h-auto w-full object-cover transition-opacity duration-500 ease-out group-hover:opacity-95"
            priority
          />
        </Link>

        {secondaryImageSrc ? (
          <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
            <Image
              src={secondaryImageSrc}
              alt={secondaryImageAlt ?? `${title} detail`}
              width={1920}
              height={995}
              className="h-auto w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default FlagshipProject
