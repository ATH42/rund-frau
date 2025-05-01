import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { NextPage } from 'next'
import React from 'react'
import AboutFooterSection from '../components/Footer'
import { Contact } from '../components/Contact'
import SocialProof from '../components/Social-Proof'
import Link from 'next/link'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

const Angebote: NextPage = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'services',
  })

  const serviceImages = [
    {
      image: '/illus/paar.svg',
      imageAlt: 'Schwangerschaft Illustration',
    },
    {
      image: '/illus/geburt-auf-ball.svg',
      imageAlt: 'Geburt Illustration',
    },
    {
      image: '/illus/paar-mit-baby.svg',
      imageAlt: 'Wochenbett Illustration',
    },
    {
      image: '/illus/frauen-sprechen.svg',
      imageAlt: 'Weitere Angebote Illustration',
    },
  ]

  return (
    <div className="bg-primary-dark w-full">
      <section className="flex w-full flex-col text-white items-center md:gap-20 bg-primary-dark px-6 md:px-28 py-20 px-0">
        <div className="flex w-full flex-col items-center gap-10">
          <h1 className="text-center font-ink-blossoms text-header">Unsere Angebote</h1>
          <p className="text-center text-lg text-variable-collection-white">
            Alle Angebote können einzeln oder im Paket in Anspruch genommen werden.
          </p>
        </div>

        {/* Service sections */}
        {data.docs.map((service, index) => (
          <Card
            key={service.id}
            className={`flex w-full flex-col items-center justify-start md:justify-end md:gap-20 border-none shadow-none md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div>
              <Image
                src={serviceImages[index]?.image || '/default-image.jpg'}
                alt={serviceImages[index]?.imageAlt || 'Service Illustration'}
                className="object-contain"
                width={350}
                height={250}
              />
            </div>

            <CardContent className="flex  md:w-1/2 flex-col items-start gap-5">
              <h2 className="font-ink-blossoms text-header ">{service.title}</h2>

              <p className="text-base text-content text-variable-collection-white">
                {service.description.toString()}
              </p>

              <Link
                href={{
                  pathname: `/services/${service.title}`,
                }}
              >
                <Button variant="white">mehr Infos</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
      <div className="hidden">
        <SocialProof
          cardBackgroundColor="bg-white"
          textColor="text-primary-dark"
          backgroundColor="bg-primary-dark"
        />
      </div>

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
