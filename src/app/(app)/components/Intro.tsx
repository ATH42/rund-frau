import { Instagram, Facebook } from 'lucide-react'

export function Intro() {
  return (
    <section className="relative flex w-full bg-primary-dark flex-col text-white items-start self-stretch">
      <div className="relative flex w-full flex-col items-end gap-[30px] self-stretch bg-variable-collection-middle-dark-purple px-[125px] pb-0 pt-[125px]">
        <div className="flex items-center gap-[17px]">
          <div className="relative h-10 w-10">
            <Instagram className="h-10 w-10 text-accent" />
          </div>
          <div className="relative h-10 w-10">
            <Facebook className="h-10 w-10 text-accent" />
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center gap-[30px] self-stretch bg-variable-collection-middle-dark-purple px-[125px] pb-[125px] pt-0">
        <div className="flex flex-col items-center gap-6">
          <h2 className="w-[500px] font-ink-blossoms text-center text-header">
            Wir sind für euch da.
          </h2>

          <p className="w-[500px] text-center font-text text-[length:var(--text-font-size)] leading-[var(--text-line-height)] tracking-[var(--text-letter-spacing)] text-variable-collection-white">
            Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme,
            die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir
            Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck.
          </p>
        </div>
      </div>
    </section>
  )
}
