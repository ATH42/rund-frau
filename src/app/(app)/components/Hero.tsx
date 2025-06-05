import { Card, CardContent } from '@/components/ui/card'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import { ContactForm } from './ContactForm'
import { ContactReasons } from '@/sanity/types'

const Hero = ({ reasons }: { reasons: ContactReasons[] }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`flex w-full flex-col bg-white md:flex-row-reverse`}
    >
      {/* Left (or Right if reversed): Text Content */}
      <Card className={`flex w-full flex-1 bg-white p-6 md:w-1/2 md:p-12 lg:p-16 shadow-none`}>
        <CardContent className="flex flex-col items-start space-y-4 md:items-start md:justify-center md:space-y-6">
          <Image width={80} height={60} src="/logo.png" alt="Talking Heads Illustration" priority />
          <h1 className="text-left text-header font-ink-blossoms text-primary-dark">
            Herzlich Willkommen
            <br /> im Geburtshaus
            <br /> Rundfrau Leipzig.
          </h1>
          <div className="pt-2 sm:pt-4">
            <ContactForm buttonVariant="dark" reasons={reasons} />
          </div>
        </CardContent>
      </Card>

      {/* Right (or Left if reversed): Image with Overlay */}
      <Card className="relative flex w-full flex-1 md:w-1/2 shadow-none">
        <AspectRatio ratio={720 / 653} className="relative h-full w-full">
          <div className={`absolute inset-0 z-10 bg-primary-dark opacity-30`}></div>
          <Image
            className="object-cover"
            alt="Pregnant woman in profile view with pink toned filter"
            src="/baby-hand.jpeg"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </AspectRatio>
      </Card>
    </motion.section>
  )
}

export default Hero
