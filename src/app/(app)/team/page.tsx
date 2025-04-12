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
      {/* TODO: create a page componnent */}
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <>
          <div className=" text-center text-white font-ink-blossoms text-header">Unser Team</div>
          <div className="w-1/2  text-center text-white text-content leading-loose">
            Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme,
            die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir
            Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck.
          </div>
        </>
        <Image width={1000} height={20} className="w-72 h-52 mt-8" src="/logo.png" alt={''} />
        <Separator />
      </div>
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
}: {
  name: string
  title: string
  phone: string
  mail: string
}) {
  return (
    <>
      <Card>
        <CardContent className="flex flex-col items-start  text-white">
          <h3 className="text-content font-semibold pb-2">{name}</h3>
          <div className="flex flex-col">
            <span>{title}</span>
            <a href={`tel:${phone}`}>{phone}</a>
            <a href={`mailto:${mail}`}>{mail}</a>
          </div>
          <div className="py-4">
            <Image
              width={1000}
              height={20}
              className="rounded-xl w-48 h-48 object-cover "
              src="/Bilder/headshot.png"
              alt={name}
            />
          </div>
        </CardContent>
      </Card>
    </>
  )
}

function TeamMemberSection({ header }: { header?: string }) {
  return (
    <section className="py-5 flex flex-col justify-start items-center gap-16">
      <h1 className="self-stretch text-center justify-start text-white text-header font-ink-blossoms">
        {header}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col flex-start">
            {/* TODO: remove second name from card */}
            <TeamMember
              name={member.name}
              title={member.title}
              phone={member.phone}
              mail={member.mail}
            />
            <TeamMemberDialog
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

function TeamMemberDialog({
  name,
  title,
  phone,
  mail,
}: {
  name: string
  title: string
  phone: string
  mail: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild className="w-[150px]">
        <Button variant="whiteLight">mehr erfahren</Button>
      </DialogTrigger>
      <DialogContent className=" bg-primary-dark text-white border-none max-w-fit p-8">
        <DialogTitle className="font-ink-blossoms text-subheader">{name}</DialogTitle>
        <div className="flex flex-row gap-6 items-center justify-center">
          <div className="w-1/2">
            <TeamMember name={name} title={title} phone={phone} mail={mail} />
          </div>
          <p className="w-1/2">
            Deserunt tempor mollit ea laboris labore adipisicing. Esse deserunt incididunt sunt
            consequat proident eu incididunt sint eu velit sit. Ut aute labore enim tempor qui do
            elit ipsum eu voluptate laborum. Velit officia ipsum occaecat occaecat laborum magna.
            Qui ut tempor consequat consequat. Deserunt tempor mollit ea laboris labore adipisicing.
            Esse deserunt incididunt sunt consequat proident eu incididunt sint eu velit sit. Ut
            aute
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const Team: NextPage = () => {
  return (
    <main className="w-full bg-primary-dark flex-col overflow-hidden p-20">
      <Header />
      <TeamMemberSection header="Vorsorge-, Geburts- und Wochenbetthebammen" />
      <TeamMemberSection header="Vorsorge- und Wochenbetthebammen" />
      <TeamMemberSection header="Kurshebammen" />
      <TeamMemberSection header="Kooperation" />
      <Footer />
    </main>
  )
}

export default Team
