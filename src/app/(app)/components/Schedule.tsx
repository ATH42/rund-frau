import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import * as motion from 'motion/react-client'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

const bounceOnHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.3 } },
}

const newsItems = [
  {
    title: 'Infoabend Geburt - 24.11.24',
    content:
      'Eiusmod sunt velit nulla elit officia non dolore ad do nisi duis voluptate irure officia. Deserunt adipisicing esse incididunt sit tempor enim anim eiusmod elit deserunt labore non esse proident. Nulla Lorem in occaecat occaecat. Adipisicing est adipisicing aute voluptate veniam Lorem eu in elit est dolor elit. Eiusmod ex culpa mollit qui ex mollit. Qui ipsum cupidatat anim eu nostrud velit elit excepteur aliquip amet. Enim dolor eu consectetur magna pariatur elit velit voluptate. Consectetur velit do incididunt nisi laborum nostrud do reprehenderit est Lorem nostrud elit.',
  },
  {
    title: 'Infoabend Geburt - 24.11.24',
    content:
      'Eiusmod sunt velit nulla elit officia non dolore ad do nisi duis voluptate irure officia. Deserunt adipisicing esse incididunt sit tempor enim anim eiusmod elit deserunt labore non esse proident. Nulla Lorem in occaecat occaecat. Adipisicing est adipisicing aute voluptate veniam Lorem eu in elit est dolor elit. Eiusmod ex culpa mollit qui ex mollit. Qui ipsum cupidatat anim eu nostrud velit elit excepteur aliquip amet. Enim dolor eu consectetur magna pariatur elit velit voluptate. Consectetur velit do incididunt nisi laborum nostrud do reprehenderit est Lorem nostrud elit.',
  },
  {
    title: 'Infoabend Geburt - 24.11.24',
    content:
      'Eiusmod sunt velit nulla elit officia non dolore ad do nisi duis voluptate irure officia. Deserunt adipisicing esse incididunt sit tempor enim anim eiusmod elit deserunt labore non esse proident. Nulla Lorem in occaecat occaecat. Adipisicing est adipisicing aute voluptate veniam Lorem eu in elit est dolor elit. Eiusmod ex culpa mollit qui ex mollit. Qui ipsum cupidatat anim eu nostrud velit elit excepteur aliquip amet. Enim dolor eu consectetur magna pariatur elit velit voluptate. Consectetur velit do incididunt nisi laborum nostrud do reprehenderit est Lorem nostrud elit.',
  },
  { title: 'Infoabend Geburt - 24.11.24', content: '' },
]

export function Schedule() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="relative flex w-full flex-col items-center gap-10 bg-primary-darker self-stretch  pb-2.5 pt-[130px]"
    >
      <h2 className="text-center font-ink-blossoms text-header text-white">Aktuelles</h2>

      <div className="flex flex-col items-center gap-6">
        {newsItems.map((item, index) => (
          <motion.div key={index} {...bounceOnHover}>
            <Accordion type="single" collapsible className="w-[800px]">
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="flex items-center rounded-[20px] bg-primary-light px-8 py-6 shadow-shadow-1">
                  <h3 className="flex-1 text-subheader">{item.title}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="border-none shadow-none ">
                    <CardContent className=" rounded-2xl flex items-center justify-center w-full flex-col bg-primary-light ">
                      {item.content}
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        ))}

        <Button variant="whiteLight">mehr ansehen</Button>
      </div>
    </motion.section>
  )
}
