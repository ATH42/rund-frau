import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import { ContactForm } from '../components/ContactForm'

function Header() {
  return (
    <>
      {/* TODO: create a page componnent */}
      <section className="w-full flex flex-col justify-center items-center gap-6 py-20">
        <>
          <h1 className=" text-center text-white font-ink-blossoms text-header">Unsere Räume</h1>
          <p className="w-1/2 text-center text-white text-content leading-loose pb-12">
            Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme,
            die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir
            Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck.
          </p>
        </>
        <Separator className="h-0.5 bg-primary w-2/3" />
      </section>
    </>
  )
}

function ImageGrid() {
  const colSpans = [2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2]

  return (
    <div className="grid grid-cols-3 gap-4 px-20 py-24">
      {Array.from({ length: 11 }).map((_, index) => (
        <div key={index} className={`relative col-span-${colSpans[index]}`}>
          <Image
            className="h-60 object-cover rounded-lg"
            src="/Bilder/GHR/Sofa.png"
            alt=""
            width={1000}
            height={500}
          />
          <div className="absolute inset-0 bg-primary/40 rounded-lg"></div>
        </div>
      ))}
    </div>
  )
}

const Rooms: NextPage = () => {
  return (
    <main className="w-full bg-primary-darker flex-col overflow-hidden">
      <Header />
      <ImageGrid />
      <section className="flex flex-col justify-center items-center gap-4 px-30 w-full pb-30">
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
