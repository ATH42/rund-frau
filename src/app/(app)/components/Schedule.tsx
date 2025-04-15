import * as motion from 'motion/react-client'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { AccordionList } from './AccordionList' // Import the new component

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export async function Schedule() {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'schedule',
  })

  const sortedData = data.docs.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
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
