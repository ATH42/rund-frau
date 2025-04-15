import { Instagram, Facebook } from 'lucide-react'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-secondary-dark md:px-28">
      {/* Top Icons */}
      <div className="flex justify-center space-x-4 pt-8">
        <Instagram size="2rem" className="text-orange-300" />
        <Facebook size="2rem" className="text-orange-300" />
      </div>
      <div className="absolute right-10 top-[-200px] -translate-y-1/2 transform md:left-10 md:top-0">
        <Image
          width={120}
          height={30}
          src="/rings.svg"
          alt=""
          className="md:w-[220px] lg:w-[270px]"
        />
      </div>

      {/* Centered Text */}
      <div className="w-ful space-y-4 px-6 py-8 text-center">
        <h1 className="font-ink-blossoms text-2xl text-white">Wir sind für euch da.</h1>
        <p className="break-words text-center text-gray-300">
          Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme,
          die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir
          Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck.
        </p>
      </div>
    </div>
  )
}
