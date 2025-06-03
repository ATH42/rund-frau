import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Link from 'next/link'

interface CourseDialogTriggerProps {
  title: string
  description: string
  dates: string[]
  maxAttendees: number
  location: string
  price: number
}

export const CourseDialogTrigger = ({
  title,
  description,
  dates,
  maxAttendees,
  location,
  price,
}: CourseDialogTriggerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDialogClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="whiteLight" onClick={() => setIsOpen(true)}>
          mehr erfahren
        </Button>
      </DialogTrigger>
      <DialogContent className="text-white bg-primary-darker max-w-fit p-20 border-none">
        <div className="flex flex-col justify-center items-center mb-4">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-white text-header font-ink-blossoms">{title}</DialogTitle>
          </DialogHeader>
          <p className="p-4">{description}</p>
          {dates ? (
            <div className="p-4">
              {dates.map((dateStr, idx) => {
                const date = new Date(dateStr)
                return (
                  <p key={idx}>
                    {date.toLocaleDateString('de-DE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}{' '}
                    um{' '}
                    {date.toLocaleTimeString('de-DE', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                )
              })}{' '}
            </div>
          ) : null}
          {maxAttendees ? <p className="p-4">Max. Teilnehmer*innen: {maxAttendees}</p> : null}
          {location ? <p className="p-4">Ort: {location}</p> : null}
          {price ? <p className="p-4">Preis: {price}€</p> : null}
        </div>
        <Link href="#calendar" className="w-full flex justify-center">
          <Button variant="whiteLight" onClick={handleDialogClose}>
            Kurs Buchen
          </Button>
        </Link>
      </DialogContent>
    </Dialog>
  )
}
