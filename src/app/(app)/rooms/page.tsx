import { Separator } from '@/components/ui/separator'
import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import { ContactForm } from '../components/ContactForm'
import Link from 'next/link'
import { sanityFetch } from '@/sanity/live'
import { ROOMS_QUERY } from '@/sanity/queries'
import { RoomImage } from '@/sanity/types'
import { urlFor } from '@/sanity/imageUrlBuilder'

function Header() {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center gap-6 py-20">
        <>
          <h1 className=" text-center text-white font-ink-blossoms text-header">Unsere Räume</h1>
          <p className="w-1/2 text-center text-white text-content leading-loose pb-12">
            Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme,
            die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir
            Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck.
          </p>
        </>
        <Separator className="bg-primary px-20" />
      </section>
    </>
  )
}

async function ImageGrid() {
  const { data: roomsImageData } = await sanityFetch({ query: ROOMS_QUERY })

  // TODO:  const imageCount = images.length
  return (
    <div className="md:px-20 py-10 p-6">
      <div className="grid grid-cols-3 gap-4">
        {roomsImageData.map((roomImage: RoomImage, index: number) => (
          <Link
            key={index}
            href={roomImage.image ? urlFor(roomImage.image).url() : '/default-image.jpg'}
            target="_blank"
            rel="noopener noreferrer"
            title={roomImage.description}
            className={`relative ${index % 2 === 0 ? 'col-span-2' : 'col-span-1'}`}
          >
            <Image
              className="h-60 object-cover rounded-lg"
              src={roomImage.image ? urlFor(roomImage.image).url() : '/default-image.jpg'}
              alt={roomImage.description || 'Raum'}
              width={1000}
              height={500}
            />
            <div className="absolute inset-0 bg-primary/40 rounded-lg"></div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const Rooms: NextPage = () => {
  return (
    <main className="w-full bg-primary-darker flex-col overflow-hidden">
      <Header />
      <ImageGrid />
      <section className="flex flex-col justify-center items-center gap-4 px-30 w-full py-20">
        <p className="text-subheader text-center text-white w-120 self-center">
          Lernt uns in einem persönlichen Gespräch kennen und besprecht mit uns eure Wünsche zur
          Geburtsbegleitung.
        </p>
        <ContactForm buttonVariant="whiteLight" />
        <h1 className="text-header text-white font-ink-blossoms text-center pt-30">
          Räume anmieten?
        </h1>
        <p className="text-subheader text-center text-white w-120 self-center">
          Kontaktiere uns, wenn du Räume für Kurse anmieten möchtest. Egal ob Yoga, Massagen oder
          Therapie - wir freuen uns, dich bei uns als externe Partner:in begrüßen zu dürfen.
        </p>
      </section>
      <Footer />
    </main>
  )
}

export default Rooms
