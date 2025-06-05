'use client'
import * as React from 'react'
import { Calendar } from '@/components/ui/calendar'
import type { Course } from '@/sanity/types'
import { Button } from '@/components/ui/button'

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
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null)
  const [selectedCourse, setSelectedCourse] = React.useState<Course | null>(null)

  const coursesByCategory = React.useMemo(() => {
    return courses.reduce(
      (acc, course) => {
        if (!course.category) {
          console.warn(`Course "${course.title}" is missing a category.`)
          return acc
        }
        if (!acc[course.category]) {
          acc[course.category] = []
        }
        acc[course.category].push(course)
        return acc
      },
      {} as Record<string, Course[]>,
    )
  }, [courses])

  const handleCategoryClick = (category: string) => {
    const validDates = coursesByCategory[category]
      .flatMap((course) => course.dates || [])
      .map((dateStr) => {
        if (dateStr) {
          const date = new Date(dateStr)
          return !isNaN(date.getTime()) ? date : null
        }
        return null
      })
      .filter((date): date is Date => date !== null)

    setHighlightedDates(validDates)
    setActiveCategory(category)
  }

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const normalizedDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
      setSelectedDate(normalizedDate)

      // Find the course that matches the selected date
      const matchedCourse = courses.find((course) =>
        course.dates?.some(
          (dateStr) =>
            formatDateToYYYYMMDD(new Date(dateStr)) === formatDateToYYYYMMDD(normalizedDate),
        ),
      )

      setSelectedCourse(matchedCourse || null)
    } else {
      setSelectedDate(undefined)
      setSelectedCourse(null)
    }
  }

  const handleZumKursClick = () => {
    if (selectedCourse) {
      const courseElement = document.getElementById(selectedCourse.title || '')
      if (courseElement) {
        courseElement.scrollIntoView({ behavior: 'smooth', block: 'start' })

        // Add a slight delay to ensure scrollIntoView completes before adjusting further
        setTimeout(() => {
          window.scrollBy({
            top: -100, // Adjust this value to control the overscroll distance
            behavior: 'smooth',
          })
        }, 300) // Adjust delay as needed to ensure smooth scrolling
      }
    }
  }

  return (
    <>
      <h2 id="calendar" className="font-ink-blossoms self-center text-header text-white">
        Kurs buchen
      </h2>
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
          {Object.keys(coursesByCategory).map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryClick(category)}
              variant={category === activeCategory ? 'default' : 'whiteLight'}
            >
              {category}
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
        }) && (
          <>
            <Button onClick={handleZumKursClick}>Zum Kurs</Button>
          </>
        )}
    </>
  )
}
