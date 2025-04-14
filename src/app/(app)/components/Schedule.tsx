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
  // Repeat for other items...
]
// TODO: button expands paginated list
export function Schedule() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="relative flex w-full flex-col items-center gap-10 bg-primary-darker self-stretch pb-2.5 pt-[130px]"
    >
      <h2 className="text-center font-ink-blossoms text-header text-white">Aktuelles</h2>

      <div className="flex flex-col items-center gap-6 w-full px-4 md:px-0">
        {newsItems.map((item, index) => (
          <motion.div key={index} className="w-full md:w-[800px]">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="flex items-center rounded-2xl decoration-0 hover:cursor-pointer bg-primary-light px-4 py-4 md:px-8 md:py-6">
                  <h3 className="flex-1 text-subheader">{item.title}</h3>
                </AccordionTrigger>
                {/* TODO: add styling to the content box */}
                <AccordionContent className="bg-primary-light p-6">
                  <Card className="border-none shadow-none">
                    <CardContent className="rounded-2xl pt-4 md:pt-6 w-full bg-primary-light">
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
