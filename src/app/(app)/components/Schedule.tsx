import * as motion from 'motion/react-client'
import { AccordionList } from './AccordionList' // Import the new component
import { sanityFetch } from '@/sanity/live'
import { SCHEDULE_QUERY } from '@/sanity/queries'
import type { Schedule } from '@/sanity/types'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export async function Schedule() {
  const { data } = await sanityFetch({ query: SCHEDULE_QUERY })

  const sortedData = data.sort((a: Schedule, b: Schedule) => {
    return new Date(a?.date || '').getTime() - new Date(b?.date || '').getTime()
  })

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="relative flex w-full flex-col items-center gap-10 bg-primary-darker self-stretch pb-2.5 pt-[130px]"
    >
      <h2 className="text-center font-ink-blossoms text-header text-white">Aktuelles</h2>

      <AccordionList items={sortedData} />
    </motion.section>
  )
}
