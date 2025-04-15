import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/(app)/components/Navbar'
import MobileNavbar from './components/MobileNavbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// TODO: add DM SANS
export const metadata: Metadata = {
  title: 'Rundfrau Leipzig',
  description: 'Wir sind fuer euch da',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar className="sm:hidden md:block" />
        <MobileNavbar className="md:hidden" />
        {children}
      </body>
    </html>
  )
}
