import * as motion from 'motion/react-client'
import { AccordionList } from './AccordionList' // Import the new component
import { sanityFetch } from '@/sanity/live'
import { SCHEDULE_QUERY } from '@/sanity/queries'
import type { ContactReasons, Schedule } from '@/sanity/types'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export async function Schedule({ reasons }: { reasons: ContactReasons[] }) {
  const { data } = await sanityFetch({ query: SCHEDULE_QUERY })

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="relative flex w-full flex-col items-center gap-10 bg-primary-darker self-stretch pb-2.5 pt-[130px]"
    >
      <h2 className="text-center font-ink-blossoms text-header text-white">Aktuelles</h2>

      <AccordionList items={data} reasons={reasons} />
    </motion.section>
  )
}
