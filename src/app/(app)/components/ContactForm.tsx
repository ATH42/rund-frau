'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react'
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
import { Textarea } from '@/components/ui/textarea'
import type { ContactReasons } from '@/sanity/types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface ContactFormProps {
  buttonVariant?: 'white' | 'default' | 'whiteLight' | 'dark'
  reasons?: ContactReasons[]
}

interface FormData {
  name: string
  reason: string
  phone: string
  email: string
  message: string
}

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary"></div>
    </div>
  )
}

export function ContactForm({ buttonVariant = 'whiteLight', reasons }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    reason: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  console.log('ContactForm rendered with reasons:', reasons)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccessMessage('Wir haben deine E-Mail erhalten und melden uns bald bei dir!')
        setFormData({ name: '', reason: '', phone: '', email: '', message: '' })
      } else {
        setSuccessMessage(
          'Es gab einen Fehler beim Versenden der E-Mail. Bitte versuche es später erneut.',
        )
      }
    } catch (error) {
      console.error('Error sending email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        setIsDialogOpen(open)
        if (!open) {
          setSuccessMessage('')
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant={buttonVariant} onClick={() => setIsDialogOpen(true)}>
          Termin vereinbaren
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white text-primary-darker max-w-fit p-20">
        <DialogHeader>
          {!successMessage ? (
            <DialogTitle className="text-primary-darker text-header font-ink-blossoms">
              Kontaktformular
            </DialogTitle>
          ) : null}
        </DialogHeader>
        {successMessage ? (
          <div className="text-primary-darker font-ink-blossoms text-center">{successMessage}</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                tabIndex={1}
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Vor- und Nachname"
                disabled={isSubmitting}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                tabIndex={2}
                id="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Deine Telefon-Nummer"
                disabled={isSubmitting}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                tabIndex={3}
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Deine E-Mail"
                disabled={isSubmitting}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="reason">Anliegen</Label>
              <Select required onValueChange={(value) => handleSelectChange('reason', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Dein Anliegen" />
                </SelectTrigger>
                <SelectContent className="w-full bg-white">
                  {reasons &&
                    reasons.map((reason) => (
                      <SelectItem key={reason._id} value={reason.reason || ''}>
                        {reason.reason}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Nachricht</Label>
              <Textarea
                tabIndex={4}
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Schreib uns deine Nachricht."
                disabled={isSubmitting}
              />
            </div>
            <Button type="submit" className="mt-4" variant="dark" disabled={isSubmitting}>
              {isSubmitting ? <Loader /> : 'Termin vereinbaren'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
