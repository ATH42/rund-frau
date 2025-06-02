import { sanityFetch } from '@/sanity/live'
import { COURSE_QUERY } from '@/sanity/queries'
import CoursesClient from './components/CoursesClient'

const CoursesPage = async () => {
  const { data: coursesData } = await sanityFetch({ query: COURSE_QUERY })

  return (
    <main className="w-full bg-white flex flex-col">
      <CoursesClient coursesData={coursesData} />
    </main>
  )
}

export default CoursesPage
