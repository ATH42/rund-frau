import Image from 'next/image'
import { Contact } from './components/Contact'
import Hero from './components/Hero'
import { Intro } from './components/Intro'
import Offers from './components/Offers'
import SocialProof from './components/Social-Proof'
import { Schedule } from './components/Schedule'
import { CONTACT_FORM_QUERY } from '@/sanity/queries'
import { sanityFetch } from '@/sanity/live'

export default async function Home() {
  const { data: reasons } = await sanityFetch({
    query: CONTACT_FORM_QUERY,
  })

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-white">
      <Hero reasons={reasons} />

      <Intro />

      <Offers />

      <Contact imageUrl="/woman-preg.jpeg" buttonVariant="default" reasons={reasons} />

      <div id="schedule" className="w-full">
        <Schedule reasons={reasons} />
      </div>

      <div className="relative flex w-full bg-primary-darker items-center justify-center self-stretch pb-0 pt-[125px]">
        <Image
          className="h-[202px] w-[290px] object-cover"
          alt="Logo"
          src="/logo.png"
          width={290}
          height={202}
        />
      </div>

      <SocialProof
        cardBackgroundColor="bg-primary"
        textColor="text-primary-darker"
        backgroundColor="bg-primary-darker"
      />
    </main>
  )
}
