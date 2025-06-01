'use client'

import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import type { Course } from '@/sanity/types'
import { Button } from '@/components/ui/button'

type CoursesCalendarProps = {
  courses: Course[]
}

export function CoursesCalendar({ courses }: CoursesCalendarProps) {
  const [highlightedDates, setHighlightedDates] = React.useState<Date[]>([])
  const [activeCourseIndex, setActiveCourseIndex] = React.useState<number | null>(null)

  const handleCourseClick = (courseDates?: string[], index?: number) => {
    if (!courseDates || courseDates.length === 0) return

    const validDates = courseDates
      .map((dateStr) => new Date(dateStr))
      .filter((date) => !isNaN(date.getTime()))

    setHighlightedDates(validDates)
    setActiveCourseIndex(index ?? null)
  }

  return (
    <>
      <h2 className="font-ink-blossoms self-center text-header text-white">Kurs buchen</h2>
      <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="flex flex-col items-center justify-center gap-4 lg:w-1/3 bg-white rounded-lg shadow-lg py-6">
          <h2 className="font-ink-blossoms text-header text-primary-darker"> Kursplan</h2>
          <Calendar
            mode="multiple"
            selected={highlightedDates}
            onSelect={(dates) => {
              if (dates) {
                setHighlightedDates(dates)
              }
            }}
            className="text-primary-darker rounded-lg bg-white"
          />
        </div>

        <div className="w-1/2 flex flex-col gap-4">
          {courses.map((course, index) => (
            <Button
              key={index}
              onClick={() => handleCourseClick(course.dates, index)}
              variant={index === activeCourseIndex ? 'default' : 'whiteLight'}
            >
              {course.title}
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}
