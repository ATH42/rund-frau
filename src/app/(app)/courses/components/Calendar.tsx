'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import type { Course } from '@/sanity/types'
import { Button } from '@/components/ui/button'
import BookingDialog from './BookingDialog'

type CoursesCalendarProps = {
  courses: Course[]
}

function formatDateToYYYYMMDD(date: Date): string {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
    .toISOString()
    .split('T')[0]
}

export function CoursesCalendar({ courses }: CoursesCalendarProps) {
  const [highlightedDates, setHighlightedDates] = React.useState<Date[]>([])
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined)
  const [activeCourseIndex, setActiveCourseIndex] = React.useState<number | null>(null)
  const [selectedCourse, setSelectedCourse] = React.useState<Course | null>(null)

  const handleCourseClick = (course: Course, index: number) => {
    if (!course.dates || course.dates.length === 0) return

    const validDates = course.dates
      .map((dateStr) => new Date(dateStr))
      .filter((date) => !isNaN(date.getTime()))

    setHighlightedDates(validDates)
    setActiveCourseIndex(index)
    setSelectedCourse(course)
  }

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const normalizedDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
      setSelectedDate(normalizedDate)
    } else {
      setSelectedDate(undefined)
    }
  }

  return (
    <>
      <h2 className="font-ink-blossoms self-center text-header text-white">Kurs buchen</h2>
      <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="flex flex-col items-center justify-center gap-4 lg:w-1/3 bg-white rounded-lg py-6 min-w-[400px]">
          <h2 className="font-ink-blossoms text-header text-primary-darker">Kursplan</h2>
          <Calendar
            mode="single"
            modifiers={{ highlighted: highlightedDates }}
            modifiersClassNames={{ highlighted: 'border-2 border-accent text-primary-darker' }}
            selected={selectedDate}
            onSelect={handleDateSelect}
            className="text-primary-darker rounded-lg bg-white overflow-x-auto"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-4">
          {courses.map((course, index) => (
            <Button
              key={index}
              onClick={() => handleCourseClick(course, index)}
              variant={index === activeCourseIndex ? 'default' : 'whiteLight'}
            >
              {course.title}
            </Button>
          ))}
        </div>
      </div>

      {selectedCourse &&
        selectedDate &&
        selectedCourse.dates &&
        selectedCourse.dates.some((dateStr) => {
          const formattedDate = formatDateToYYYYMMDD(new Date(dateStr))
          const isMatch = formattedDate === formatDateToYYYYMMDD(selectedDate)
          return isMatch
        }) && <BookingDialog course={selectedCourse} date={formatDateToYYYYMMDD(selectedDate)} />}
    </>
  )
}
