import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface CourseDialogTriggerProps {
  title: string
  description: string
  date: string
  maxAttendees: number
  location: string
  price: number
}

export const CourseDialogTrigger = ({
  title,
  description,
  date,
  maxAttendees,
  location,
  price,
}: CourseDialogTriggerProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="whiteLight">mehr erfahren</Button>
      </DialogTrigger>
      <DialogContent className="text-white bg-primary-darker max-w-fit p-20 border-none">
        <div className="flex flex-col justify-center items-center mb-4">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-white text-header font-ink-blossoms">{title}</DialogTitle>
          </DialogHeader>
          <p className="p-4">{description}</p>
          <p className="p-4">
            {new Date(date).toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            um{' '}
            {new Date(date).toLocaleTimeString('de-DE', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
          <p className="p-4">Max. Teilnehmer*innen: {maxAttendees}</p>
          <p className="p-4"> Ort: {location}</p>
          <p className="p-4">Preis: {price}€</p>
        </div>
        <Button variant="whiteLight">Kurs Buchen</Button>
      </DialogContent>
    </Dialog>
  )
}
