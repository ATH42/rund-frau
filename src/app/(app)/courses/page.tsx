import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import { CourseDialogTrigger } from './components/DialogTrigger'
import { CalendarDemo } from './components/Calendar'

const CourseItem = ({
  title,
  description,
  date,
  maxAttendees,
  location,
  price,
  image,
  alt,
}: {
  title: string
  description: string
  date: string
  maxAttendees: number
  location: string
  price: number
  image: any | null

  // i know that's bad practice, but the image type is quite complicated and it solves the problem and i would need to change everything how coursedata is passed here and in the dialogTrigger

  alt: string
}) => (
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
    <div className="flex flex-col w-full lg:w-1/2 gap-4">
      <h2 className="text-subheader font-bold text-white">{title}</h2>
      <p className="text-content text-white">{description}</p>
      <div className="flex items-start">
        <CourseDialogTrigger
          title={title}
          description={description}
          date={date}
          maxAttendees={maxAttendees}
          location={location}
          price={price}
        />
      </div>
    </div>

    <div className="flex justify-center items-center relative w-full lg:w-1/2">
      <Image
        width={486}
        height={270}
        src={image ? urlFor(image).url() : ''}
        alt={alt}
        className="rounded-lg h-[270px] object-cover w-full"
      />
      <div className="absolute inset-0 bg-primary/30 rounded-lg"></div>
    </div>
  </div>
)

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className=" self-center bg-white w-full md:w-1/2 text-center text-primary-darker flex flex-col gap-6 py-20">
    <h1 className="text-header font-ink-blossoms">{title}</h1>
    <p className="text-subheader">{subtitle}</p>
    <Image
      src="/illustrations/ball-flower.svg"
      alt="Header Image"
      width={400}
      height={200}
      className="self-center"
    />
  </section>
)

import { sanityFetch } from '@/sanity/live'
import { COURSE_QUERY } from '@/sanity/queries'
import { Course } from '@/sanity/types'
import { urlFor } from '@/sanity/imageUrlBuilder'

const Courses: NextPage = async () => {
  const { data: coursesData } = await sanityFetch({ query: COURSE_QUERY })

  return (
    <main className="w-full bg-white flex flex-col">
      <Header
        title="Unsere Kurse"
        subtitle="Auf der Reise durch deine Schwangerschaft, Geburt und Wochenbett suchst du eine Hebamme, die dich sieht, im Blick behält und deinen Fähigkeiten vertraut. Begleitend tragen wir Hebammen unser Wissen, unsere Erfahrungen und das klassische Handwerk im Gepäck."
      />

      <section className="flex bg-primary-dark flex-col gap-16 px-6 py-12 lg:px-24 lg:py-24">
        <h1 className="text-header font-ink-blossoms text-white">Alle Kurse im Überblick</h1>
        {coursesData.map((course: Course, index: number) => (
          <div key={index} className="flex flex-col lg:flex-row flex-wrap gap-16 py-5">
            <CourseItem
              title={course.title || ''}
              description={course.description || ''}
              date={course.date || ''}
              maxAttendees={course.maxAttendees || 0}
              location={course.location || ''}
              price={course.price || 0}
              image={course.image || ''}
              alt={course.alt || ''}
            />
          </div>
        ))}
      </section>
      <section className="flex bg-primary-dark flex-col gap-16 px-6 py-12 lg:px-24 lg:py-24 w-full">
        <CalendarDemo />
      </section>
    </main>
  )
}

export default Courses
