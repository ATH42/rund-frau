import { Button } from '@/components/ui/button'
import * as motion from 'motion/react-client'
import { Card, CardContent } from '@/components/ui/card'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

interface ContactProps {
  imageUrl: string
  backgroundColor?: string
  buttonVariant?: 'white' | 'default' | 'whiteLight' | null | undefined
  reverse?: boolean
}

export function Contact({
  imageUrl,
  backgroundColor = 'bg-primary',
  buttonVariant = 'white',
  reverse = false,
}: ContactProps) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -250 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      className={`flex w-full flex-col bg-white ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      {/* Left (or Right if reversed): Text Content */}
      <Card
        className={`flex w-full ${backgroundColor} p-6 md:w-1/2 md:p-12 lg:p-16 border-none shadow-none`}
      >
        <CardContent className="flex flex-col items-center space-y-4 border-none md:items-start md:justify-center md:space-y-6">
          <Image
            width={230}
            height={60}
            src="/illustrations/talking-heads.svg"
            alt="Talking Heads Illustration"
            className="lg:w-[230]"
          />
          <p className="text-center text-sm text-white sm:text-base md:text-left md:text-lg lg:text-xl">
            Lernt uns in einem persönlichen Gespräch
            <br /> kennen und besprecht mit uns eure Wünsche <br /> zur Geburtsbegleitung.
          </p>
          <div className="pt-2 sm:pt-4">
            <Button variant={buttonVariant} className="text-xs sm:text-sm md:text-base lg:text-lg">
              Termin vereinbaren
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Right (or Left if reversed): Image with Overlay */}
      <Card className="relative flex w-full border-none md:w-1/2">
        <AspectRatio ratio={720 / 653} className="relative h-full w-full">
          <div className={`absolute inset-0 z-10 opacity-30 ${backgroundColor}`}></div>
          <Image
            className="object-cover"
            alt="Pregnant woman in profile view with pink toned filter"
            src={imageUrl}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </AspectRatio>
      </Card>
    </motion.section>
  )
}
