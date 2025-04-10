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
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const items = [
    { icon: '/illustrations/pregnancy.svg' },
    { icon: '/illustrations/geburt.svg' },
    { icon: '/illustrations/wochenbett.svg' },
    { icon: '/illustrations/kurse.svg' },
    { icon: '/illustrations/fehlgeburt.svg' },
    {
        icon: '/illustrations/veranstaltungen.svg',
    },
    { icon: '/illustrations/angebote.svg' },
]

export default function Offers() {
    return (
        <section className="w-full bg-primary-dark p-6 md:p-12">
            <div className="mb-6 flex flex-col items-center justify-between gap-2 md:flex-row">
                <h2 className="font-ink-blossoms text-header text-white">
                    Unsere Angebote
                </h2>
                <ArrowRight className="h-8 w-8 text-white md:w-16" />
            </div>
            <CarouselSize />
            <p className="mt-4 text-center text-sm text-white">
                Alle Angebote können einzeln oder im Paket in Anspruch genommen
                werden.
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
                <CarouselContent>
                    {items.map(({ icon }, index) => (
                        <CarouselItem
                            key={index}
                            className="flex justify-center pl-2 sm:basis-1 md:basis-1/2 md:pl-4 lg:basis-1/3"
                        >
                            <div className="p-1">
                                <Card className="rounded-lg bg-white">
                                    <CardContent className="flex flex-col items-center justify-center pt-4 text-center">
                                        <Image
                                            src={icon}
                                            width={150}
                                            height={100}
                                            alt={'illustration'}
                                            className="h-2/3"
                                        />
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
