import { Separator } from '@/components/ui/separator'
import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center gap-6 p-6 py-20 ">
        <>
          <h1 className=" text-center text-white font-ink-blossoms text-header">Unser Team</h1>
          <p className="md:w-1/2  text-center text-white text-content ">
            Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme,
            die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir
            Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck.
          </p>
        </>
        <Image width={1000} height={20} className="w-72 h-52 mt-8" src="/logo.png" alt={''} />
        <Separator />
      </section>
    </>
  )
}

const teamMembers = [
  {
    name: 'Alice Johnson',
    title: 'Software Engineer',
    phone: '+49 123 456 789',
    mail: 'alice.johnson@example.com',
  },
  {
    name: 'Bob Smith',
    title: 'Product Manager',
    phone: '+49 987 654 321',
    mail: 'bob.smith@example.com',
  },
  {
    name: 'Charlie Brown',
    title: 'UX Designer',
    phone: '+49 555 444 333',
    mail: 'charlie.brown@example.com',
  },
  {
    name: 'Diana Prince',
    title: 'Marketing Specialist',
    phone: '+49 111 222 333',
    mail: 'diana.prince@example.com',
  },
]

function TeamMember({
  name,
  title,
  phone,
  mail,
  dialog = false,
}: {
  name: string
  title: string
  phone: string
  mail: string
  dialog?: boolean
}) {
  return (
    <Card className="flex flex-col bg-primary-dark text-white shadow-none">
      <CardContent className="flex flex-col items-start text-white">
        {!dialog && <h3 className="text-content font-semibold pb-2">{name}</h3>}
        <div className="flex flex-col">
          <span>{title}</span>
          <a href={`tel:${phone}`}>{phone}</a>
          <a href={`mailto:${mail}`}>{mail}</a>
        </div>
        <div className="py-4 w-full">
          <Image
            width={1000}
            height={1000}
            className="rounded-xl w-full h-60 md:h-100 object-cover"
            src="/Bilder/headshot.png"
            alt={name}
          />
        </div>
        {!dialog && (
          <Dialog>
            <DialogTrigger asChild className="w-[150px]">
              <Button variant="whiteLight">mehr erfahren</Button>
            </DialogTrigger>
            <DialogContent className="bg-primary-dark text-white border-none md:p-14 md:max-w-fit">
              <DialogTitle className="font-ink-blossoms text-subheader">{name}</DialogTitle>
              <div className="lg:grid lg:grid-cols-2 lg:gap-10 flex flex-col">
                <div>
                  <div className="flex flex-col">
                    <span>{title}</span>
                    <a href={`tel:${phone}`}>{phone}</a>
                    <a href={`mailto:${mail}`} className="wrap-break-word">
                      {mail}
                    </a>
                  </div>
                  <div className="py-4">
                    <Image
                      width={1000}
                      height={1000}
                      className="rounded-xl w-full h-60 object-cover"
                      src="/Bilder/headshot.png"
                      alt={name}
                    />
                  </div>
                </div>
                <div className="">
                  <p>
                    Deserunt tempor mollit ea laboris labore adipisicing. Esse deserunt incididunt
                    sunt consequat proident eu incididunt sint eu velit sit. Ut aute labore enim
                    tempor qui do elit ipsum eu voluptate laborum. Velit officia ipsum occaecat
                    occaecat laborum magna. Qui ut tempor consequat consequat. Deserunt tempor
                    mollit ea laboris labore adipisicing. Esse deserunt incididunt sunt consequat
                    proident eu incididunt sint eu velit sit. Ut aute
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </CardContent>
    </Card>
  )
}

function TeamMemberSection({ header }: { header?: string }) {
  return (
    <section className="flex flex-col justify-start items-center gap-6 py-12">
      <h1 className="self-stretch text-center justify-start text-white text-header font-ink-blossoms">
        {header}
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col flex-start p-6">
            <TeamMember
              name={member.name}
              title={member.title}
              phone={member.phone}
              mail={member.mail}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

const Team: NextPage = () => {
  return (
    <main className="w-full bg-primary-dark flex-col overflow-hidden">
      <div className="md:px-20 ">
        <Header />
        <TeamMemberSection header="Vorsorge-, Geburts- und Wochenbett-Hebammen" />
        <TeamMemberSection header="Vorsorge- und Wochenbett-Hebammen" />
        <TeamMemberSection header="Kurshebammen" />
        <TeamMemberSection header="Kooperation" />
        <Footer />
      </div>
    </main>
  )
}

export default Team
