'use client'

// Importing necessary modules and components from Next.js
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Navbar component that renders a sticky navigation bar with dynamic background color
 * based on the current route.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.className] - Additional CSS classes for the navbar.
 * @returns {JSX.Element} The rendered Navbar component.
 */
const Navbar = ({ className }: { className?: string }) => {
  const pathName = usePathname()

  /**
   * Determines the background color and text color of the navbar
   * based on the current route.
   *
   * @returns {string} A string of CSS classes for background and text color.
   */
  const getBackgroundColor = () => {
    switch (pathName) {
      case '/services':
        return 'bg-primary-dark text-white'
      case '/courses':
        return 'bg-white text-primary-darker'
      case '/about':
        return 'bg-primary-dark text-white'
      case '/rooms':
        return 'bg-primary-darker text-white'
      case '/faq':
        return 'bg-primary-darker text-white'
      default:
        return 'bg-white text-primary-darker'
    }
  }

  return (
    <nav className={`sticky ${className} ${getBackgroundColor()}`}>
      <div className="top-0 z-50 flex w-full items-center justify-between px-8 py-3 shadow-md">
        {/* Left-aligned Icon */}
        <Link href="/">
          <Image
            src="/logo.png"
            width={60}
            height={50}
            alt="Logo Rundfrau: Buntstift Illustration einer frau auf dem Ruecken liegend mit einem Kind im Arm"
          />
        </Link>

        {/* Right-aligned Navigation Links */}
        <nav className="flex space-x-16">
          <Link href="/services">
            <p className="text-secondary-dark hover:text-secondary">Angebote</p>
          </Link>
          <Link href="/courses">
            <p className="text-secondary-dark hover:text-secondary">Kurse buchen</p>
          </Link>
          <Link href="/about">
            <p className="text-secondary-dark hover:text-secondary">Team</p>
          </Link>
          <Link href="/rooms">
            <p className="text-secondary-dark hover:text-secondary">Räume</p>
          </Link>
          <Link href="/faq">
            <p className="text-secondary-dark hover:text-secondary">FAQ</p>
          </Link>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar
