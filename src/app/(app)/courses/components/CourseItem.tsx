import { urlFor } from '@/sanity/imageUrlBuilder'
import { CourseDialogTrigger } from './DialogTrigger'
import Image from 'next/image'
import { Course } from '@/sanity/types'

export const CourseItem = ({ course }: { course: Course }) => {
  const { title, description, dates, maxAttendees, location, price, image, alt } = course
  if (!title || !description || !dates || !maxAttendees || !location || !price || !image || !alt) {
    return null
  }
  return (
    <div id={title} className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
      <div className="flex flex-col w-full lg:w-1/2 gap-4">
        <h2 className="text-subheader font-bold text-white">{title}</h2>
        <p className="text-content text-white">{description}</p>
        <div className="flex items-start">
          <CourseDialogTrigger course={course} />
        </div>
      </div>

      <div className="flex justify-center items-center relative w-full lg:w-1/2 h-[270px]">
        <Image
          width={486}
          height={270}
          // TODO: Use a default image if none is provided
          src={image ? urlFor(image).url() : '/images/default-course-image.jpg'}
          alt={alt}
          className="rounded-lg h-full object-cover w-full"
        />
        <div className="absolute inset-0 bg-primary/30 rounded-lg pointer-events-none" />
      </div>
    </div>
  )
}
