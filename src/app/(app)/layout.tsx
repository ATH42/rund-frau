import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/(app)/components/Navbar'
import MobileNavbar from './components/MobileNavbar'
import { SanityLive } from '@/sanity/live'
import Footer from './components/Footer'
import { sanityFetch } from '@/sanity/live'
import { TEAM_IMAGE_QUERY } from '@/sanity/queries'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rundfrau Leipzig',
  description: 'Wir sind fuer euch da',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { data: teamImageData } = await sanityFetch({ query: TEAM_IMAGE_QUERY })

  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
        <Navbar className="hidden md:block" />
        <MobileNavbar className="md:hidden" />
        {children}
        <Footer teamImageData={teamImageData} />
        <SanityLive />
      </body>
    </html>
  )
}
