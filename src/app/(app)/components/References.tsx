'use client'
import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export function References() {
    return (
        <section className="bg-secondary-dark flex w-full flex-col items-center justify-center gap-4 px-4 py-12 md:p-12">
            <Image
                src="/logo.png"
                width={150}
                height={50}
                alt="Logo Rundfrau: Buntstift Illustration einer frau auf dem Ruecken liegend mit einem Kind im Arm"
            />
            <CarouselSize />
        </section>
    )
}

const items = [
    { title: '15 Jahre', subtitle: 'Ganzheitliche Erfahrung' },
    { title: 'über 700', subtitle: 'Begleitete Geburten' },
    { title: '100%', subtitle: 'Herz & Angagement' },
]

function CarouselSize() {
    return (
        <div className="px-12">
            <Carousel
                opts={{
                    align: 'center',
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {items.map(({ title, subtitle }, index) => (
                        <CarouselItem
                            key={index}
                            className="flex justify-center pl-2 sm:basis-1 md:basis-1/2 md:pl-4 lg:basis-1/3"
                        >
                            <div className="p-1">
                                <Card className="border-secondary-light bg-secondary-light min-w-52 md:min-w-80">
                                    <CardContent className="flex flex-col items-start justify-start gap-2 pt-4">
                                        <h3 className="text-secondary-dark font-ink-blossoms text-2xl md:text-3xl">
                                            {title}
                                        </h3>
                                        <p className="text-secondary-dark md:text-xl">
                                            {subtitle}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
