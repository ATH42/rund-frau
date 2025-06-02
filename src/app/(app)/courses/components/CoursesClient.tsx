'use client'
import { Course } from '@/sanity/types'
import { CourseItem } from './CourseItem'
import { CoursesCalendar } from './Calendar'

interface CoursesClientProps {
  coursesData: Course[]
}

const CoursesClient: React.FC<CoursesClientProps> = ({ coursesData }) => {
  return (
    <>
      <section className="flex bg-primary-dark flex-col gap-16 px-6 py-12 lg:px-24 lg:py-24">
        <h1 className="text-header font-ink-blossoms text-white">Alle Kurse im Überblick</h1>
        {coursesData.map((course, index) => (
          <div key={index} className="flex flex-col lg:flex-row flex-wrap gap-16 py-5">
            <CourseItem
              title={course.title || ''}
              description={course.description || ''}
              dates={course.dates || []}
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
        <CoursesCalendar courses={coursesData} />
      </section>
    </>
  )
}

export default CoursesClient
