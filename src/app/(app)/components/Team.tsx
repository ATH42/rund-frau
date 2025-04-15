import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'

const InfoCard = () => {
  return (
    <div className="max-w-sm bg-secondary-dark px-6 py-4 pb-36 text-white shadow-lg">
      <div className="relative mb-4">
        <Image src="/team.png" alt="Team" width={400} height={200} className="rounded-lg" />
        <div className="absolute inset-0 rounded-lg bg-secondary-light opacity-30"></div>{' '}
        {/* Overlay */}
        <div className="absolute left-2 top-2 rounded-full p-2 text-white">
          <ArrowRightIcon className="text-xl" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="mb-2 font-ink-blossoms text-3xl font-bold">Wir sind für euch da.</h2>
        <p className="text-md px-6">
          Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme,
          die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir
          Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck.
        </p>
      </div>
    </div>
  )
}

export default InfoCard
