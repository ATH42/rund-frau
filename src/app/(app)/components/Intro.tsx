import { Instagram, Facebook } from 'lucide-react'

import Link from 'next/link'
import { INTRO_QUERY } from '@/sanity/queries'
import { sanityFetch } from '@/sanity/live'

export async function Intro() {
  const { data } = await sanityFetch({ query: INTRO_QUERY })

  return (
    <section className=" flex w-full bg-primary-dark flex-col text-white items-start self-stretch">
      <div className="flex w-full justify-center gap-4 px-4 md:px-[125px] pt-12 md:pt-[125px] pb-6 ">
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" passHref>
          <Instagram className="h-10 w-10 text-accent" />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" passHref>
          <Facebook className="h-10 w-10 text-accent" />
        </Link>
      </div>

      <div className=" flex w-full flex-col items-center gap-6 self-stretch bg-variable-collection-middle-dark-purple px-4 md:px-[125px] pb-12 md:pb-[125px] pt-6 md:pt-0">
        <div className="flex flex-col items-center gap-6 px-4 text-center">
          <h2 className="w-full md:w-[500px] font-ink-blossoms text-header ">{data?.title}</h2>
          <p className="w-full md:w-[500px] font-text text-[length:var(--text-font-size)] leading-[var(--text-line-height)] tracking-[var(--text-letter-spacing)] text-variable-collection-white">
            {data?.description}
          </p>
        </div>
      </div>
    </section>
  )
}
