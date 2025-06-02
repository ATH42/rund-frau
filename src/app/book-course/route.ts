import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const {
    firstName,
    lastName,
    birthday,
    email,
    phone,
    address,
    houseNumber,
    zipCode,
    city,
    isAccompanyied,
    inCare,
    insuranceNumber,
    insurer,
    message,
    course: { title, date },
  } = await req.json()

  const transporter = nodemailer.createTransport({
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
    to: ['alex.t.hoffmann@icloud.com'],
    subject: 'Neue Kursbuchung',
    text: `
      Name: ${firstName} ${lastName}
      Geburtsdatum: ${birthday}
      E-Mail: ${email}
      Telefon: ${phone}
      Adresse: ${address} ${houseNumber}, ${zipCode} ${city}
      Begleitperson: ${isAccompanyied ? 'Ja' : 'Nein'}
      In Betreuung: ${inCare ? 'Ja' : 'Nein'}
      Versichertennummer: ${insuranceNumber}
      Versicherer: ${insurer}
      Nachricht: ${message}

      Kurs: ${title}
      Kursdatum: ${date}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { message: 'Wir haben deine Email erhalten und melden uns bald bei dir!' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { message: 'Es gab einen Fehler beim Versenden der Email' },
      { status: 500 },
    )
  }
}
