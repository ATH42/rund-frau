import Image from 'next/image'
import { Contact } from './components/Contact'
import AboutFooterSection from './components/Footer'
import Hero from './components/Hero'
import { Intro } from './components/Intro'
import Offers from './components/Offers'
import SocialProof from './components/Social-Proof'
import { Schedule } from './components/Schedule'

import { sanityFetch } from '@/sanity/live'
import { TEAM_IMAGE_QUERY } from '@/sanity/queries'

export default async function Home() {
  const { data: teamImageData } = await sanityFetch({ query: TEAM_IMAGE_QUERY })

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-white">
      <Hero />

      <Intro />

      <Offers />

      <Contact imageUrl="/woman-preg.jpeg" buttonVariant="default" />

      <Schedule />

      <div className="relative flex w-full bg-primary-darker items-center justify-center self-stretch pb-0 pt-[125px]">
        <Image
          className="h-[202px] w-[290px] object-cover"
          alt="Logo"
          src="/logo.png"
          width={290}
          height={202}
        />
      </div>

      {/* TODO: not responsive on small screens */}
      <SocialProof
        cardBackgroundColor="bg-primary"
        textColor="text-primary-darker"
        backgroundColor="bg-primary-darker"
      />

      <AboutFooterSection teamImageData={teamImageData} showAboutSection />
    </main>
  )
}
