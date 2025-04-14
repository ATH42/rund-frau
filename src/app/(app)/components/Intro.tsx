import { Instagram, Facebook } from 'lucide-react'

export function Intro() {
  return (
    <section className=" flex w-full bg-primary-dark flex-col text-white items-start self-stretch">
      {/* TODO: add links to the icons */}
      <div className="flex w-full justify-center gap-4 px-4 md:px-[125px] pt-12 md:pt-[125px] pb-6 ">
        <Instagram className="h-10 w-10 text-accent" />
        <Facebook className="h-10 w-10 text-accent" />
      </div>

      <div className=" flex w-full flex-col items-center gap-6 self-stretch bg-variable-collection-middle-dark-purple px-4 md:px-[125px] pb-12 md:pb-[125px] pt-6 md:pt-0">
        <div className="flex flex-col items-center gap-6 px-4 text-center">
          <h2 className="w-full md:w-[500px] font-ink-blossoms text-header">
            Wir sind für euch da.
          </h2>
          <p className="w-full md:w-[500px] font-text text-[length:var(--text-font-size)] leading-[var(--text-line-height)] tracking-[var(--text-letter-spacing)] text-variable-collection-white">
            Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme,
            die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir
            Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck.
          </p>
        </div>
      </div>
    </section>
  )
}
