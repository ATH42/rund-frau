import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { NextPage } from 'next'
import React from 'react'
import AboutFooterSection from '../components/Footer'
import { Contact } from '../components/Contact'
import SocialProof from '../components/Social-Proof'
import Link from 'next/link'

const serviceData = [
  {
    id: 1,
    title: 'Schwangerschaft',
    description:
      'Die Begleitung deiner Schwangerschaft durch uns Hebammen ist ein wichtiger Baustein auf dem Weg zu deiner selbstbestimmten Geburt. Es ist uns wichtig, deine Körperwahrnehmung zu stärken und dich darin zu unterstützen, die Expertin für deinen schwangeren Körper und dein Baby zu sein.',
    image: '/illus/paar.svg',
    imageAlt: 'Schwangerschaft Illustration',
  },
  {
    id: 2,
    title: 'Geburt',
    description:
      'In einem Zeitraum von 5 Wochen kann euer Kind im Geburtshaus geboren werden, das heißt von der 37+0 – 42+0 Ssw. In dieser Zeit sind wir für euch rund um die Uhr erreichbar und helfen euch bei Unsicherheiten, der Einwehphase und der Geburt.',
    image: '/illus/frau-mit-ball.svg',
    imageAlt: 'Geburt Illustration',
  },
  {
    id: 3,
    title: 'Wochenbett',
    description:
      'Das Wochenbett zu Hause ermöglicht es, die Selbstbestimmung während der Geburt auch in den Tagen danach fortzusetzen. Ihr gestaltet eure Zeit in eurem individuellen Rhythmus und in aller Ruhe. Ungestört kannst du dich in euer Kind verlieben und den Zauber des Neubeginns gemeinsam mit deinem Partner und den Geschwisterkindern genießen.',
    image: '/illus/paar-mit-kind.svg',
    imageAlt: 'Wochenbett Illustration',
  },
  {
    id: 4,
    title: 'Weitere Angebote',
    description:
      'In einem Zeitraum von 5 Wochen kann euer Kind im Geburtshaus geboren werden, das heißt von der 37+0 – 42+0 Ssw. In dieser Zeit sind wir für euch rund um die Uhr erreichbar und helfen euch bei Unsicherheiten, der Einwehphase und der Geburt.',
    image: '/illus/frauen-sprechen.svg',
    imageAlt: 'Weitere Angebote Illustration',
  },
]

const Angebote: NextPage = () => {
  return (
    <div>
      <section className="flex w-full flex-col text-white items-center gap-20 bg-primary-dark px-28 py-20">
        <div className="flex w-full flex-col items-center gap-10">
          <h1 className="text-center font-ink-blossoms text-header font-bold text-variable-collection-white">
            Unsere Angebote
          </h1>
          <p className="text-center text-lg text-variable-collection-white">
            Alle Angebote können einzeln oder im Paket in Anspruch genommen werden.
          </p>
        </div>

        {/* Service sections */}
        {serviceData.map((service, index) => (
          <Card
            key={service.id}
            className={`flex w-full flex-col items-center justify-end gap-20 border-none shadow-none md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div>
              <Image
                src={service.image}
                alt={service.imageAlt}
                className="object-contain"
                width={350}
                height={250}
              />
            </div>

            <CardContent className="flex w-1/2 flex-col items-start gap-5">
              <h2 className="font-ink-blossoms text-header font-semibold text-variable-collection-white">
                {service.title}
              </h2>

              <p className="text-base text-content text-variable-collection-white">
                {service.description}
              </p>

              <Link href={`/services/${service.title.toLowerCase()}`}>
                <Button variant="white">mehr Infos</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>

      <SocialProof
        cardBackgroundColor="bg-white"
        textColor="text-primary-dark"
        backgroundColor="bg-primary-dark"
      />

      <Contact
        imageUrl="/Bilder/paar-schwanger.png"
        backgroundColor="bg-primary-darker"
        buttonVariant="whiteLight"
        reverse
      />
      <AboutFooterSection />
    </div>
  )
}

export default Angebote
