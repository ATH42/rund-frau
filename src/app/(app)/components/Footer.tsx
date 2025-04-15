import { ArrowRight, Mail, Phone, Instagram, Facebook } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Media } from '@/payload-types'


type AboutFooterSectionProps = {
  showAboutSection?: boolean
  teamImageData?: number | Media
  introTitle?: string
  introDescription?: string
}

export default function AboutFooterSection({
  showAboutSection = false,
  teamImageData,
  introTitle = 'Wir sind für euch da.',
  introDescription = 'Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme, die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck.',
}: AboutFooterSectionProps) {

  const footerLinks = [
    { label: 'Impressum', href: '#' },
    { label: 'Datenschutzerklärung', href: '#' },
    { label: 'Kontakt', href: '#' },
    { label: 'Downloads & Links', href: '#' },
  ]

  const imageUrl =
    typeof teamImageData === 'object' && teamImageData !== null && 'url' in teamImageData
      ? teamImageData.url
      : '/default-image.jpg'


  return (
    <section className="relative flex w-full flex-col">
      {showAboutSection && (
        <div className="absolute left-0 top-0 h-1/2 w-full bg-primary-darker md:h-1/3"></div>
      )}
      <div
        className={`absolute bottom-0 left-0 w-full ${showAboutSection ? 'h-1/2 md:h-2/3' : 'h-full'} bg-primary`}
      ></div>

      {/* About Section */}
      {showAboutSection && (
        <div className="relative z-10 flex w-full flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:items-start lg:px-32">
          <Card className="relative h-auto w-full max-w-[546px] overflow-hidden rounded-2xl shadow-lg lg:w-1/2">
            <div className="relative">
              <Image

                src={imageUrl || '/default-image.jpg'}
                alt={'Team Image'}

                className="h-100 w-full object-cover"
                width={1000}
                height={1000}
                priority
              />
              <div className="absolute inset-0 bg-primary/30"></div> {/* Overlay */}
            </div>
            <ArrowRight className="absolute right-4 top-4 text-white size-10" />
          </Card>

          <div className="w-full space-y-6 text-center text-white lg:w-1/2 lg:text-left">
            <h2 className="text-header font-ink-blossoms">{introTitle}</h2>
            <p className="font-text text-content md:text-lg">{introDescription}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 w-full px-6 pb-16 pt-24 lg:px-32 ">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h2 className=" text-header font-ink-blossoms text-white md:text-4xl">
              Kontaktiert uns.
            </h2>
            <p className="text-lg text-white">
              Geburtshaus Rundfrau Leipzig GbR
              <br />
              Hebammen Andrea Held &amp; Anne Halt
              <br />
              Mo bis Fr 9:00 - 11:00 Uhr
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-4 text-center text-white lg:text-left">
            <a
              className="flex items-center justify-center gap-3 cursor-pointer lg:justify-start"
              href="mailto:mail@mail.de"
            >
              <Mail className="h-5 w-5" />
              <span>E-Mail</span>
            </a>
            <a
              className="flex items-center justify-center gap-3 lg:justify-start cursor-pointer"
              href="tel:+49123456789"
            >
              <Phone className="h-5 w-5" />
              <span>Telefonnummer</span>
            </a>
            <div className="flex items-center justify-center gap-3 lg:justify-start cursor-pointer">
              <Phone className="h-5 w-5" />
              <span>Faxnummer</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-wrap justify-center gap-6 md:justify-start">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm font-bold tracking-wide text-white hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <Instagram className="h-6 w-6 text-white" />
            <Facebook className="h-6 w-6 text-white" />
          </div>
        </div>
      </footer>
    </section>
  )
}
