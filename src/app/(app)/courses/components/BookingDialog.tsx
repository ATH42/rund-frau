'use client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Course } from '@/sanity/types'

interface FormData {
  firstName: string
  lastName: string
  birthday: string
  email: string
  phone: string
  address: string
  houseNumber: string
  zipCode: string
  city: string
  isAccompanyied: boolean
  inCare: boolean
  insuranceNumber: string
  insurer: string
  message: string
  course: {
    title: string
    date: string
  }
}

export default function BookingDialog({ course, date }: { course: Course; date: string }) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    phone: '',
    address: '',
    houseNumber: '',
    zipCode: '',
    city: '',
    isAccompanyied: false,
    inCare: false,
    insuranceNumber: '',
    insurer: '',
    message: '',
    course: { title: course.title || '', date: date || '' },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value === 'true',
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      const response = await fetch('/book-course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSuccessMessage('Wir haben deine Buchung erhalten und melden uns bald bei dir!')
        setFormData({
          firstName: '',
          lastName: '',
          birthday: '',
          email: '',
          phone: '',
          address: '',
          houseNumber: '',
          zipCode: '',
          city: '',
          isAccompanyied: false,
          inCare: false,
          insuranceNumber: '',
          insurer: '',
          message: '',
          course: { title: course.title || '', date: date || '' },
        }) // Reset form
      } else {
        setErrorMessage('Es gab einen Fehler bei der Buchung. Bitte versuche es später erneut.')
      }
    } catch (error) {
      console.error('Error booking course:', error)
      setErrorMessage('Es gab einen Fehler bei der Buchung. Bitte versuche es später erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog>
      {/* TODO: Style Button like in Design */}
      <DialogTrigger asChild>
        <Button variant="whiteLight">Kurs Buchen</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl bg-white text-primary-darker">
        <DialogHeader>
          <DialogTitle className="text-3xl font-script">Kurs buchen</DialogTitle>
        </DialogHeader>

        <div className="space-y-1">
          <h2 className="font-bold">{course.title}</h2>
          <p className="text-sm text-muted-foreground">{date}</p>
          <p className="text-sm">{course.location}</p>
          <p className="text-lg  mt-2">{course.price} Euro</p>
          <p className="text-sm text-muted-foreground">
            Im Anschluss an den Kurs wird eine Teilnahmebestätigung ausgestellt. Über die
            Kostenübernahme durch eine Krankenkasse müsst ihr euch selbst informieren.
          </p>
        </div>

        {/* TODO: fix message */}
        {successMessage || errorMessage ? (
          <div className={`text-center ${successMessage ? 'text-green-600' : 'text-red-600'}`}>
            {successMessage || errorMessage}
          </div>
        ) : (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <div className="flex flex-col w-full gap-2">
                <Label>Name *</Label>
                <div className="flex gap-2">
                  <Input
                    name="firstName"
                    placeholder="Vorname"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <Input
                    name="lastName"
                    placeholder="Nachname"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Bringst du eine Begleitperson mit? *</Label>
              <Select
                required
                onValueChange={(value) => handleSelectChange('isAccompanyied', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Ja / Nein" />
                </SelectTrigger>
                <SelectContent className="w-full bg-white">
                  <SelectItem value="true">Ja</SelectItem>
                  <SelectItem value="false">Nein</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Dein Geburtsdatum *</Label>
              <Input
                name="birthday"
                type="date"
                placeholder="Dein Geburtsdatum"
                required
                value={formData.birthday}
                onChange={handleChange}
                className="col-span-1"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Bist du bereits in Betreuung? *</Label>
              <Select required onValueChange={(value) => handleSelectChange('inCare', value)}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Ja / Nein" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Ja</SelectItem>
                  <SelectItem value="false">Nein</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label>E-Mail Adresse *</Label>
              <Input
                name="email"
                type="email"
                placeholder="Deine E-Mail"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Deine Versichertennummer *</Label>
              <Input
                name="insuranceNumber"
                placeholder="Deine Versichertennummer"
                required
                value={formData.insuranceNumber}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Telefon *</Label>
              <Input
                name="phone"
                type="tel"
                placeholder="Deine Telefon-Nummer"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Institutionskennzeichen *</Label>
              <Input
                name="insurer"
                placeholder="Eine Achtstellige Nummer unten links auf der Versichertenkarte."
                value={formData.insurer}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label>Adresse *</Label>
              <div className="grid grid-cols-3 gap-2">
                <Input
                  name="address"
                  placeholder="Straße"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="col-span-2"
                />
                <Input
                  name="houseNumber"
                  placeholder="Nr."
                  required
                  value={formData.houseNumber}
                  onChange={handleChange}
                  className="col-span-1"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Input
                  name="zipCode"
                  placeholder="Plz"
                  required
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="col-span-1"
                />
                <Input
                  name="city"
                  placeholder="Stadt"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="col-span-2"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Kommentar *</Label>
              <Textarea
                name="message"
                placeholder="Schreib uns deine Nachricht."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              className="col-start-2 rounded-full px-6 py-2 shadow-md bg-primary text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Buchen...' : 'Kurs buchen'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
