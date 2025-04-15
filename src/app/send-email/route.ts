import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'halexanderc4@gmail.com',
      pass: process.env.EMAIL_PASS,
    },
    logger: true,
  })

  // TODO: actual recipient and confirmation mail
  const mailOptions = {
    from: email,
    to: 'alex.t.hoffmann@icloud.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json(
      { message: 'Wir haben deine Email erhalen und melden uns bald bei dir!' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 })
  }
}
