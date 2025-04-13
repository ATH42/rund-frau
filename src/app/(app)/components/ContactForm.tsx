import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ContactForm({
  buttonVariant = 'whiteLight',
}: {
  buttonVariant?: 'white' | 'default' | 'whiteLight' | 'dark'
}) {
  {
    return (
      <Dialog>
        <DialogTrigger asChild className="w-[150px]">
          <Button variant={buttonVariant}>Termin vereinbaren</Button>
        </DialogTrigger>
        <DialogContent className="bg-white text-primary-darker max-w-fit p-20">
          <DialogHeader>
            <DialogTitle className="text-primary-darker text-header font-ink-blossoms">
              Kontaktformular
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Vor- und Nachname" />
            </div>
            <div>
              <Label htmlFor="phone">Telefon</Label>
              <Input id="phone" type="" placeholder="Deine Telefon-Nummer" />
            </div>
            <div>
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" placeholder="Deine E-Mail" />
            </div>
            <div>
              <Label htmlFor="message">Nachricht</Label>
              <Input type="text" id="message" placeholder="Schreib uns deine Nachricht." />
            </div>
          </div>
          <Button type="submit" className="mt-4" variant="dark">
            Termin vereinbaren
          </Button>
        </DialogContent>
      </Dialog>
    )
  }
}
