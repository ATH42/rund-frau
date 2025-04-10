import { Button } from '@/components/ui/button'
import type { NextPage } from 'next'
import Image from 'next/image'

const coursesData = [
  {
    title: 'Geburtsvorbereitung',
    description:
      'Geburtsvorbereitungskurse bieten wir als wöchentliche Kurse, als Wochenend-Kompaktkurse sowie speziell für Mehrgebärende an. Auch spezielle Kurse zur bewussten Geburt könnt ihr bei uns besuchen.',
  },
  {
    title: 'Rückbildung',
    description:
      'Der Rückbildungskurs befasst sich mit der Stärkung der durch Schwangerschaft und Geburt beanspruchten Strukturen, kräftigt Dich generell und gibt Tipps für Deinen körperlichen Alltag.',
  },
  {
    title: 'Babymassage',
    description:
      'Wenn ihr etwas sucht, das euch und eurem Baby Entspannung bietet, könnt ihr an einem Babymassagekurs teilnehmen.',
  },
  {
    title: 'Geschwisterkurs',
    description:
      'Mehrmals im Jahr findet bei uns im Geburtshaus ein Geschwisterkurs statt. Darin lernen die werdenden großen Geschwister spielerisch alles, was zum Thema Geburt und Wochenbett sowie für die erste Zeit mit dem Baby wichtig ist.',
  },
  {
    title: 'Seminare & Info-Abende',
    description:
      'Mehrmals im Jahr findet bei uns im Geburtshaus ein Geschwisterkurs statt. Darin lernen die werdenden großen Geschwister spielerisch alles, was zum Thema Geburt und Wochenbett sowie für die erste Zeit mit dem Baby wichtig ist.',
  },
]

const CourseItem = ({ title, description }: { title: string; description: string }) => (
  <div className="flex-1 flex flex-col gap-4">
    <div className="text-subheader font-bold text-white">{title}</div>
    <div className="text-content text-white">{description}</div>
    <div className="flex items-start">
      <Button variant="whiteLight">
        <p>mehr erfahren</p>
      </Button>
    </div>
  </div>
)

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="py-12 self-center w-1/2 text-center text-primary-darker flex flex-col gap-6">
    <div className="text-header font-ink-blossoms">{title}</div>
    <div className="text-subheader">{subtitle}</div>
    <Image
      src="/illustrations/ball-flower.svg"
      alt="Header Image"
      width={400}
      height={200}
      className="self-center"
    />
  </div>
)

const Courses: NextPage = () => {
  return (
    <div className="w-full  bg-white flex flex-col ">
      <Header
        title="Unsere Kurse"
        subtitle="Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme, die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck."
      />

      <section className="flex bg-primary-dark flex-col gap-16 px-6 py-12 lg:px-24 lg:py-24">
        <h1 className="text-header font-ink-blossoms text-white">Alle Kurse im Überblick</h1>
        {coursesData.map((course, index) => (
          <div key={index} className="flex flex-wrap gap-16 py-5">
            <CourseItem title={course.title} description={course.description} />
            <div className="flex justify-center items-center relative">
              <Image
                width={486}
                height={270}
                src="/Bilder/GHR/course-placeholder.jpg"
                alt="placeholder"
                className="rounded-lg h-[270px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/30 rounded-lg z-10"></div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Courses
