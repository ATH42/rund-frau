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
}

export default function BookingDialog() {
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
  })
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="whiteLight">Kurs Buchen</Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl bg-white text-primary-darker">
        <DialogHeader>
          <DialogTitle className="text-3xl font-script">Kurs buchen</DialogTitle>
        </DialogHeader>

        <div className="space-y-1">
          <h2 className="font-bold">Geburtsvorbereitung</h2>
          <p className="text-sm text-muted-foreground">10.4.24 13:30 – 15:00</p>
          <p className="text-sm">Ort: Geburtshaus Rundfrau</p>
          <p className="text-lg font-semibold mt-2">70 €</p>
          <p className="text-sm text-muted-foreground">
            Im Anschluss an den Kurs wird eine Teilnahmebestätigung ausgestellt. Über die
            Kostenübernahme durch eine Krankenkasse müsst ihr euch selbst informieren.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex gap-2">
            <div className="flex flex-col w-full">
              <Label>Name *</Label>
              <div className="flex gap-2">
                <Input placeholder="Vorname" required />
                <Input placeholder="Nachname" required />
              </div>
            </div>
          </div>

          <div className="flex-col gap-2">
            <Label>Bringst du eine Begleitperson mit? *</Label>
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Ja / Nein" />
              </SelectTrigger>
              <SelectContent className="w-full bg-white">
                <SelectItem value="ja">Ja</SelectItem>
                <SelectItem value="nein">Nein</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-col gap-2">
            <Label>Dein Geburtsdatum *</Label>
            <Input type="date" placeholder="Dein Geburtsdatum" required className="col-span-1" />
          </div>

          <div className="flex-col gap-2">
            <Label>Bist du bereits in Betreuung? *</Label>
            <Select required>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Ja / Nein" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ja">Ja</SelectItem>
                <SelectItem value="nein">Nein</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-col gap-2">
            <Label> E-Mail Adresse *</Label>
            <Input type="email" placeholder="Deine E-Mail" required />
          </div>

          <div>
            <Label>Deine Versichertennummer *</Label>
            <Input placeholder="Deine Versichertennummer" required />
          </div>

          <div className="flex-col gap-6">
            <Label>Telefon *</Label>
            <Input type="tel" placeholder="Deine Telefon-Nummer" required />
          </div>
          <div className="flex-col gap-2">
            <Label>Institutionskennzeichen *</Label>
            <Input placeholder="Eine Achtstellige Nummer unten links auf der Versichertenkarte." />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Adresse *</Label>
            <div className="grid grid-cols-3 gap-2">
              <Input placeholder="Straße" required className="col-span-2" />
              <Input placeholder="Nr." required className="col-span-1" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Input placeholder="Plz" required className="col-span-1" />
              <Input placeholder="Stadt" required className="col-span-2" />
            </div>
          </div>

          <div className="flex-col gap-2">
            <Label>Kommentar *</Label>
            <Textarea placeholder="Schreib uns deine Nachricht." />
          </div>
        </form>

        <div className="flex justify-end mt-4">
          <Button className="rounded-full px-6 py-2 shadow-md bg-primary text-white">
            Kurs buchen
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
