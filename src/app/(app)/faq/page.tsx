import type { NextPage } from 'next'
import { Contact } from '../components/Contact'
import Footer from '../components/Footer'
import { Separator } from '@/components/ui/separator'
import BirthCalculator from '../components/BirthCalc'

import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

type Question = {
  topic: string
  question: string
  answer: string
}

const questions = [
  {
    topic: 'Kosten',
    question: 'Wie wird abgerechnet?',
    answer:
      'Die Abrechnung erfolgt in der Regel über die Krankenkasse. Bitte erkundigen Sie sich bei Ihrer Kasse.',
  },
  {
    topic: 'Kosten',
    question: 'Was sind die Kosten für die Rufbereitschaft bei einer außerklinischen Geburt?',
    answer:
      'Wehen sind die Kontraktionen, die den Geburtsprozess einleiten, während Senkwehen dazu dienen, das Baby in die richtige Position zu bringen.',
  },
  {
    topic: 'Qualität',
    question: 'Was macht es sicher außerklinisch zu gebären?',
    answer:
      'Die Erholungszeit variiert, aber viele Frauen fühlen sich nach 6 bis 8 Wochen wieder fit.',
  },
  {
    topic: 'Wer sind wir?',
    question:
      'Die Begleitung deiner Schwangerschaft durch und Hebammen ist ein wichtiger Baustein auf dem Weg zu deiner selbstbestimmten Geburt?',
    answer:
      'Die Erholungszeit variiert, aber viele Frauen fühlen sich nach 6 bis 8 Wochen wieder fit.',
  },
  {
    topic: 'Kosten',
    question: 'Was sind die Kosten für zusätzliche Leistungen?',
    answer:
      'Die Erholungszeit variiert, aber viele Frauen fühlen sich nach 6 bis 8 Wochen wieder fit.',
  },
]

const GroupedQuestions = () => {
  const groupQuestionsByTopic = (questions: Question[]) => {
    return questions.reduce<Record<string, Question[]>>((acc, current) => {
      const { topic } = current
      if (!acc[topic]) {
        acc[topic] = []
      }
      acc[topic].push(current)
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

const FAQ: NextPage = () => {
  return (
    <main className="min-h-screen bg-primary-darker">
      <Header />
      <GroupedQuestions />
      <Contact
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
