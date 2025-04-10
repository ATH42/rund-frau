import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import { Contact } from './components/Contact'
import AboutFooterSection from './components/Footer'
import Hero from './components/Hero'
import { Intro } from './components/Intro'
import './globals.css'
import Offers from './components/Offers'
import SocialProof from './components/Social-Proof'

export default function Home() {
  // TODO: cards bigger on desktop
  const newsItems = [
    { title: 'Infoabend Geburt - 24.11.24', content: '' },
    { title: 'Infoabend Geburt - 24.11.24', content: '' },
    { title: 'Infoabend Geburt - 24.11.24', content: '' },
    { title: 'Infoabend Geburt - 24.11.24', content: '' },
  ]

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const bounceOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-white">
      <h1 className="w-full bg-amber-200">YOYOYOYO </h1>
      <Hero />

      <Intro />

      <Offers />

      <Contact imageUrl="/woman-preg.jpeg" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative flex w-full flex-col items-center gap-10 self-stretch bg-variable-collection-dark-purple px-[125px] pb-2.5 pt-[130px]"
      >
        <h2 className="text-center font-h1-new text-[length:var(--h1-new-font-size)] leading-[var(--h1-new-line-height)] tracking-[var(--h1-new-letter-spacing)] text-variable-collection-white">
          Aktuelles
        </h2>

        <div className="flex flex-col items-center gap-6">
          {newsItems.map((item, index) => (
            <motion.div key={index} {...bounceOnHover}>
              <Accordion type="single" collapsible className="w-[800px]">
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="flex items-center rounded-[20px] bg-variable-collection-light-purple px-8 py-6 shadow-shadow-1">
                    <h3 className="flex-1 font-h2 text-[length:var(--h2-font-size)] leading-[var(--h2-line-height)] tracking-[var(--h2-letter-spacing)] text-variable-collection-dark-purple">
                      {item.title}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}

          <Button className="rounded-[50px] bg-variable-collection-white px-5 py-3 text-base font-light leading-6 tracking-[0.50px] text-variable-collection-dark-purple shadow-shadow-1 [font-family:'DM_Sans-Light',Helvetica]">
            mehr ansehen
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative flex w-full items-center justify-center gap-[132px] self-stretch bg-variable-collection-dark-purple px-[125px] pb-0 pt-[125px]"
      >
        <Image
          className="h-[202px] w-[290px] object-cover"
          alt="Logo"
          src="/logo.png"
          width={290}
          height={202}
        />
      </motion.div>

      <SocialProof
        cardBackgroundColor="bg-primary"
        textColor="text-primary-darker"
        backgroundColor="bg-primary-darker"
      />

      <AboutFooterSection showAboutSection />
    </main>
  )
}
