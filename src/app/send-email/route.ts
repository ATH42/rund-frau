import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json()

  const transporter = nodemailer.createTransport({
    // service: 'strato',
    host: 'smtp.strato.de',
    port: 465,
    secure: true,
    tls: { rejectUnauthorized: false },
    auth: {
      user: 'kurse@geburtshaus-leipzig.de',
      pass: process.env.EMAIL_PASS,
    },
    logger: true,
  })

  const mailOptions = {
    from: '<Geburtshaus-Leipzig>kurse@geburtshaus-leipzig.de',
    to: [email],
    subject: 'Neue Kontaktanfrage von deiner Webseite',
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nNachricht: ${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { message: 'Wir haben deine Email erhalen und melden uns bald bei dir!' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { message: 'Es gab einen Fehler beim versenden der Email' },
      { status: 500 },
    )
  }
}
