import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

type SocialProofProps = {
  backgroundColor: 'bg-primary-darker' | 'bg-primary-dark'
  cardBackgroundColor: 'bg-primary' | 'bg-white'
  textColor: 'text-primary-darker' | 'text-primary-dark'
}

export default function SocialProof({
  backgroundColor,
  cardBackgroundColor,
  textColor,
}: SocialProofProps) {
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
      className={`flex w-full items-center justify-center ${backgroundColor} ${textColor} px-4 md:px-32 py-12 md:py-36`}
    >
      <div className="grid w-full md:gap-6 gap-2 grid-cols-1 md:grid-cols-3">
        {socialProofData.map((item, index) => (
          <Card key={index} className={`rounded-2xl border-none  shadow-none`}>
            <div className={`${cardBackgroundColor} w-full h-full rounded-2xl`}>
              <CardContent className="flex flex-col justify-center items-center md:items-start w-full items-center p-4 md:p-8">
                <h2 className={`font-ink-blossoms text-header ${textColor}`}>{item.title}</h2>
                <p className="text-content text-primary-dark">{item.description}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
