'use client'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'

const items = [
  { icon: '/illus/paar.svg', title: 'Schwangerschaft' },
  { icon: '/illus/geburt-auf-ball.svg', title: 'Geburt' },
  { icon: '/illus/paar-mit-baby.svg', title: 'Wochenbett' },
  { icon: '/illus/frau-auf-ball.svg', title: 'Kurse' },
  { icon: '/illus/Fehlgeburt.svg', title: 'Begleitete Fehlgeburt' },
  {
    icon: '/illus/frauen-sprechen.svg',
    title: 'Info-Veranstaltungen',
  },
  { icon: '/illus/zwei-frauen.svg', title: 'Weitere Angebote' },
]

export default function Offers() {
  return (
    <section className="w-full bg-primary-dark p-6 md:p-12">
      <div className="mb-6 flex flex-col items-center justify-between gap-2 md:flex-row">
        <h2 className="font-ink-blossoms text-header text-white">Unsere Angebote</h2>
      </div>
      <CarouselSize />
      <p className="mt-4 text-center text-sm text-white">
        Alle Angebote können einzeln oder im Paket in Anspruch genommen werden.
      </p>
    </section>
  )
}

function CarouselSize() {
  return (
    <div className="px-12">
      <Carousel
        opts={{
          align: 'center',
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="gap-5">
          {items.map(({ icon, title }, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center basis-1/3" // Adjust basis for multiple items
            >
              <div className="p-1">
                <Card className="rounded-lg bg-white ">
                  <CardContent className="w-70 h-70 flex flex-col items-center justify-center p-6 text-center">
                    <Link href={`/services/${title}`} className="flex flex-col items-center">
                      <Image
                        src={icon}
                        width={250}
                        height={100}
                        alt={'illustration'}
                        className="h-50 w-50 "
                      />
                      <p className="text-content font-semibold text-primary-dark">{title}</p>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-primary-light" />
        <CarouselNext className="bg-primary-light" />
      </Carousel>
    </div>
  )
}
