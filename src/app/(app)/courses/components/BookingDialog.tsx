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

export default function BookingDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="whiteLight">Kurs Buchen</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
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
            <Input placeholder="Vorname" required />
            <Input placeholder="Nachname" required />
          </div>

          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Begleitperson?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ja">Ja</SelectItem>
              <SelectItem value="nein">Nein</SelectItem>
            </SelectContent>
          </Select>

          <Input type="date" placeholder="Dein Geburtsdatum" required className="col-span-1" />

          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Schon in Betreuung?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ja">Ja</SelectItem>
              <SelectItem value="nein">Nein</SelectItem>
            </SelectContent>
          </Select>

          <Input type="email" placeholder="Deine E-Mail" required />
          <Input placeholder="Deine Versichertennummer" required />

          <Input type="tel" placeholder="Deine Telefon-Nummer" required />
          <Input placeholder="Institutionskennzeichen" />

          <div className="flex gap-2">
            <Input placeholder="Straße" required />
            <Input placeholder="Hausnummer" required />
          </div>

          <div className="flex gap-2">
            <Input placeholder="Postleitzahl" required />
            <Input placeholder="Stadt" required />
          </div>

          <Textarea placeholder="Schreib uns deine Nachricht." className="md:col-span-2" />
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
