import { Separator } from '@/components/ui/separator'
import type { NextPage } from 'next'
import { Contact } from '../components/Contact'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { sanityFetch } from '@/sanity/live'
import { CONTACT_FORM_QUERY, FAQ_QUERY } from '@/sanity/queries'
import { Faq } from '@/sanity/types'

const GroupedQuestions = async () => {
  const { data: questions } = await sanityFetch({ query: FAQ_QUERY })

  const groupQuestionsByTopic = (questions: Faq[]) => {
    return questions.reduce<Record<string, Faq[]>>((acc, current) => {
      if (!current.category) {
        return acc
      }
      const { category } = current
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(current)
      return acc
    }, {})
  }

  const groupedQuestions = groupQuestionsByTopic(questions)

  return (
    <div className="flex flex-col items-center gap-10 w-full px-4 md:px-0  pb-20">
      {Object.entries(groupedQuestions).map(([topic, questions], index) => (
        <div key={index}>
          <h2 className="text-center text-header font-ink-blossoms text-white pb-6">{topic}</h2>
          {questions.map(({ question, answer }, index) => (
            <div key={index} className="w-full md:w-[800px] mb-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="flex items-center rounded-2xl decoration-0 hover:cursor-pointer px-4 py-4 md:px-8 md:py-6">
                    <h3 className="flex-1 text-content ">{question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-2 text-primary-darkest text-content">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function Header() {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center gap-6 py-20">
        <>
          <h1 className=" text-center text-white font-ink-blossoms text-header">FAQ</h1>
        </>
        <Separator className="h-0.5 bg-primary w-2/3" />
      </section>
    </>
  )
}

const FAQ: NextPage = async () => {
  const { data: reasons } = await sanityFetch({ query: CONTACT_FORM_QUERY })
  return (
    <main className="min-h-screen bg-primary-darker">
      <Header />
      <GroupedQuestions />
      <Contact
        reasons={reasons}
        imageUrl="/Bilder/pexels-mikhail-nilov-8342877.png"
        backgroundColor="bg-primary-dark"
        buttonVariant="whiteLight"
        reverse
      />
      {/* TODO: uncomment this when the component is ready */}
      {/* <BirthCalculator /> */}
    </main>
  )
}

export default FAQ
