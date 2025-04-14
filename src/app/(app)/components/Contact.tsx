import { Card, CardContent } from '@/components/ui/card'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import { ContactForm } from './ContactForm'

interface ContactProps {
  imageUrl: string
  backgroundColor?: string
  buttonVariant: 'white' | 'default' | 'whiteLight'
  reverse?: boolean
}

export function Contact({
  imageUrl,
  backgroundColor = 'bg-primary',
  reverse = false,
}: ContactProps) {
  return (
    <section
      className={`flex w-full flex-col bg-white ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      {/* Left (or Right if reversed): Text Content */}
      <Card
        className={`flex w-full ${backgroundColor} justify-center items-center p-6 py-12 md:w-1/2 md:p-12 lg:p-16 border-none shadow-none`}
      >
        <CardContent className="flex flex-col justify-center items-center space-y-4 border-none md:items-start md:justify-center md:space-y-6">
          <Image
            width={230}
            height={60}
            src="/illustrations/talking-heads.svg"
            alt="Talking Heads Illustration"
            className="w-32 md:w-[230]"
          />
          <p className="text-center text-content text-white  md:text-left">
            Lernt uns in einem persönlichen Gespräch
            <br /> kennen und besprecht mit uns eure Wünsche <br /> zur Geburtsbegleitung.
          </p>
          <div className="pt-2 sm:pt-4">
            <ContactForm buttonVariant="white" />
          </div>
        </CardContent>
      </Card>

      {/* Right (or Left if reversed): Image with Overlay */}
      <Card className="relative flex w-full border-none shadow-none md:w-1/2">
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
    </section>
  )
}
