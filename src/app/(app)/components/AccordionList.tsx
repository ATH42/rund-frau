'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Schedule } from '@/sanity/types'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function AccordionList({ items }: { items: Schedule[] }) {
  const [visibleCount, setVisibleCount] = useState(3)

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3)
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full px-4 md:px-0">
      {items.slice(0, visibleCount).map((item, index) => (
        <div key={index} className="w-full md:w-[800px]">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={`item-${index}`} className="border-none">
              <AccordionTrigger className="flex items-center rounded-2xl decoration-0 hover:cursor-pointer px-4 py-4 md:px-8 md:py-6">
                <h3 className="flex-1 text-subheader">{item.title}</h3>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 text-primary-darker">
                {item.content}

                <Link className="flex items-center gap-2" href="/anmeldung">
                  <ArrowRight className="text-primary-darker mr-2 size-6" />

                  <span className="text-content text-primary-darker hover:underline py-4">
                    {/* TODO: dialog trigger hier anmelden */}
                  </span>
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
      {visibleCount < items.length && (
        <Button variant="whiteLight" onClick={loadMore}>
          mehr ansehen
        </Button>
      )}
    </div>
  )
}
