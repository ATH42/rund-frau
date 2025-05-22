import { Separator } from '@/components/ui/separator'
import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { sanityFetch } from '@/sanity/live'
import { TeamMember } from '@/sanity/types'
import { urlFor } from '@/sanity/imageUrlBuilder'
import { TEAM_MEMBERS_QUERY } from '@/sanity/queries'

function Header() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 p-6 py-20">
      <h1 className="text-center text-white font-ink-blossoms text-header">Unser Team</h1>
      <p className="md:w-1/2 text-center text-white text-content">
        Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme, die
        dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir Hebammen
        unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck.
      </p>
      <Image width={1000} height={20} className="w-72 h-52 mt-8" src="/logo.png" alt="" />
      <Separator />
    </section>
  )
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  const { name, title, phone, mail, image, description } = member
  // const imageUrl = typeof image === 'object' && image.url ? image.url : '/default-image.jpg' // Use default image if URL is null

  return (
    <Card className="flex flex-col bg-primary-dark text-white shadow-none">
      <CardContent className="flex flex-col items-start text-white">
        <h3 className="text-content font-semibold pb-2">{name}</h3>
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
            src={image ? urlFor(image).url() || 'default-image.jpg' : 'default-image.jpg'}
            alt={name || ''}
          />
        </div>
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
                    src={image ? urlFor(image).url() : 'default-image.jpg'}
                    alt={name || ''}
                  />
                </div>
              </div>
              <div className="">
                <p>{description}</p>
                {/* TODO: if it's too much text it's not readable, add shadcn component to scroll f.ex. */}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

function TeamMemberSection({ title, members }: { title: string; members: TeamMember[] }) {
  return (
    <section className="flex flex-col justify-start items-center gap-6 py-12">
      <h1 className="self-stretch text-center justify-start text-white text-header font-ink-blossoms">
        {title}
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col flex-start p-6">
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
    </section>
  )
}

const Team: NextPage = async () => {
  // const payload = await getPayload({
  //   config: configPromise,
  // })

  // const { docs: teamMembers } = await payload.find({
  //   collection: 'team-members',
  //   limit: 100,
  //   depth: 1,
  // })

  const { data: teamMembers } = (await sanityFetch({ query: TEAM_MEMBERS_QUERY })) as {
    data: TeamMember[]
  }

  const groupedMembers = teamMembers.reduce(
    (acc: Record<string, TeamMember[]>, member: TeamMember) => {
      if (!member.title) {
        return acc
      } // for now, bc of the sanity bug that it makes everything optional in types.
      if (!acc[member.title]) {
        acc[member.title] = []
      }
      acc[member.title].push(member)
      return acc
    },
    {} as Record<string, TeamMember[]>,
  )

  return (
    <main className="w-full bg-primary-dark flex-col overflow-hidden">
      <div className="md:px-20">
        <Header />
        {Object.entries(groupedMembers).map(([title, members], index) => (
          <TeamMemberSection key={index} title={title} members={members} />
        ))}
        {/* Maybe add something to be able to sort them?*/}
        <Footer />
      </div>
    </main>
  )
}

export default Team
