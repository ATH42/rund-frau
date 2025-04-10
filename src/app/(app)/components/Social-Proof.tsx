import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

type SocialProofProps = {
    backgroundColor?: 'bg-primary-darker' | 'bg-primary-dark'
    cardBackgroundColor?: 'bg-primary' | 'bg-white'
    textColor?: 'text-primary-darker' | 'text-primary-dark'
}

export default function SocialProof({
    backgroundColor,
    cardBackgroundColor,
    textColor,
}: SocialProofProps) {
    // Data for the social proof cards
    const socialProofData = [
        {
            title: '15 Jahre',
            description: 'Ganzheitliche Erfahrung',
        },
        {
            title: 'über 700',
            description: 'Begleitete Geburten',
        },
        {
            title: '100%',
            description: 'Herz & Engagement',
        },
    ]

    return (
        <section
            className={`flex w-full items-center justify-center ${backgroundColor} ${textColor} px-32 py-36`}
        >
            <div className="flex w-full gap-6">
                {socialProofData.map((item, index) => (
                    <Card
                        key={index}
                        className={`flex flex-1 items-center justify-start rounded-lg border-none bg-white pt-6 shadow-md ${cardBackgroundColor}`}
                    >
                        <CardContent className="flex flex-col gap-4 p-8">
                            <h2 className="font-ink-blossoms text-header text-primary-dark">
                                {item.title}
                            </h2>
                            <p className="text-content text-primary-dark">
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
