import type { NextPage } from 'next'
import { Contact } from '../components/Contact'
import Footer from '../components/Footer'
import { Separator } from '@/components/ui/separator'
import BirthCalculator from '../components/BirthCalc'

function Header() {
  return (
    <>
      {/* TODO: create a page componnent */}
      <section className="w-full flex flex-col justify-center items-center gap-6 py-20">
        <>
          <h1 className=" text-center text-white font-ink-blossoms text-header">FAQ</h1>
        </>
        <Separator className="h-0.5 bg-primary w-2/3" />
      </section>
    </>
  )
}

const FAQ: NextPage = () => {
  return (
    <main className="min-h-screen bg-primary-darker">
      <div className="flex flex-col justify-start items-center gap-6 px-24">
        <Header />
        <Contact
          imageUrl="/Bilder/pexels-mikhail-nilov-8342877.png"
          backgroundColor="bg-primary-dark"
          buttonVariant="whiteLight"
          reverse
        />
        <BirthCalculator />
        <Footer />
      </div>
    </main>
  )
}

export default FAQ
