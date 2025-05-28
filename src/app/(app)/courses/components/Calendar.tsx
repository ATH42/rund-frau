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

  const handleCourseClick = (courseDates?: string[]) => {
    if (!courseDates || courseDates.length === 0) return

    const validDates = courseDates
      .map((dateStr) => new Date(dateStr))
      .filter((date) => !isNaN(date.getTime()))

    console.log('Original date strings:', courseDates)
    console.log('Parsed valid dates:', validDates)

    setHighlightedDates(validDates)
  }

  return (
    <div className="flex gap-10 w-full">
      <Calendar
        mode="multiple"
        selected={highlightedDates}
        onSelect={(dates) => {
          if (dates) {
            setHighlightedDates(dates)
          }
        }}
        className="w-1/2"
      />

      <div className="w-1/2 flex flex-col gap-4">
        {courses.map((course, index) => (
          <Button key={index} onClick={() => handleCourseClick(course.dates)} variant="whiteLight">
            {course.title}
          </Button>
        ))}
      </div>
    </div>
  )
}
