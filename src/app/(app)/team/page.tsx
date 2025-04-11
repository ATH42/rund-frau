import { Separator } from '@/components/ui/separator'
import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'

function Header() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-6 p-24">
        <>
          <div className=" text-center text-white font-ink-blossoms text-header">Unser Team</div>
          <div className="w-1/2  text-center text-white text-content leading-loose">
            Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme,
            die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir
            Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck.
          </div>
        </>
        <Image width={1000} height={20} className="w-72 h-52 mt-8" src="/logo.png" alt={''} />
        <Separator />
      </div>
    </>
  )
}

function TeamMemberSection() {
  return (
    <section className="self-stretch py-5 flex flex-col justify-start items-center gap-16">
      <h1 className="self-stretch text-center justify-start text-white text-header font-ink-blossoms">
        Vorsorge-, Geburts- und Wochenbetthebammen
      </h1>
      <div className="self-stretch inline-flex justify-start items-start gap-16">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-white text-header font-ink-blossoms leading-loose">
              Andrea
            </div>
            <div className="self-stretch justify-start text-white text-content leading-loose">
              Hebamme
              <br />
              Mobil: 0155 66394059
              <br />
              Mail: salome@geburtshaus-leipzig.de
            </div>
          </div>
          <div className="self-stretch h-96 bg-primary-darker rounded-[20px]" />
          <div data-style="Default" className="inline-flex justify-start items-start">
            <div
              data-style="Filled"
              className="px-5 py-3 bg-white rounded-[50px] flex justify-center items-center gap-2.5 overflow-hidden"
            >
              <div className="justify-start text-dark-purple text-content font-ink-blossoms leading-normal tracking-wide">
                mehr erfahren
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
const Team: NextPage = () => {
  return (
    <main className="w-full bg-primary-dark flex-col overflow-hidden">
      <Header />
      <TeamMemberSection />
      <Footer />
    </main>
  )
}

export default Team
