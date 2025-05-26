import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Contact } from '../components/Contact'

import { urlFor } from '@/sanity/imageUrlBuilder'
import { sanityFetch } from '@/sanity/live'
import { SERVICE_QUERY } from '@/sanity/queries'
import { type Service } from '@/sanity/types'

const Angebote: NextPage = async () => {
  const { data } = (await sanityFetch({ query: SERVICE_QUERY })) as { data: Service[] }

  return (
    <div className="bg-primary-dark w-full">
      <section className="flex w-full flex-col text-white items-center md:gap-20 bg-primary-dark px-6 md:px-28 py-20">
        <div className="flex w-full flex-col items-center gap-10">
          <h1 className="text-center font-ink-blossoms text-header">Unsere Angebote</h1>
          <p className="text-center text-lg text-variable-collection-white">
            Alle Angebote können einzeln oder im Paket in Anspruch genommen werden.
          </p>
        </div>

        {data.map((service: Service, index: number) => {
          const imageUrl = service.image ? urlFor(service.image).url() : '/default-image.jpg'

          return (
            <Card
              key={service._id}
              className={`flex w-full flex-col items-center justify-start md:justify-end md:gap-20 border-none shadow-none md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div>
                <Image
                  src={imageUrl}
                  alt={service.title || 'Service Illustration'}
                  className="object-contain"
                  width={350}
                  height={250}
                />
              </div>

              <CardContent className="flex md:w-1/2 flex-col items-start gap-5">
                <h2 className="font-ink-blossoms text-header ">{service.title}</h2>

                <p className="text-base text-content text-variable-collection-white">
                  {service.description?.toString()}
                </p>

                <Link href={{ pathname: `/services/${service.title}` }}>
                  <Button variant="white">mehr Infos</Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </section>

      {/* <div className="hidden"> */}
      {/*   <SocialProof */}
      {/*     cardBackgroundColor="bg-white" */}
      {/*     textColor="text-primary-dark" */}
      {/*     backgroundColor="bg-primary-dark" */}
      {/*   /> */}
      {/* </div> */}

      <Contact
        imageUrl="/Bilder/paar-schwanger.png"
        backgroundColor="bg-primary-darker"
        buttonVariant="whiteLight"
        reverse
      />
    </div>
  )
}

export default Angebote
