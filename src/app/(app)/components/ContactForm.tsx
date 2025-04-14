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

interface ContactFormProps {
  buttonVariant?: 'white' | 'default' | 'whiteLight' | 'dark'
}

interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

export function ContactForm({ buttonVariant = 'whiteLight' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Email sent successfully!')
      } else {
        alert('Failed to send email.')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('An error occurred while sending the email.')
    }
  }

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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Vor- und Nachname"
            />
          </div>
          <div>
            <Label htmlFor="phone">Telefon</Label>
            <Input
              id="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Deine Telefon-Nummer"
            />
          </div>
          <div>
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Deine E-Mail"
            />
          </div>
          <div>
            <Label htmlFor="message">Nachricht</Label>
            <Input
              type="text"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Schreib uns deine Nachricht."
            />
          </div>
          <Button type="submit" className="mt-4" variant="dark">
            Termin vereinbaren
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
