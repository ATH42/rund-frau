'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'

const MobileNavbar = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav className={`${className} sticky relative bg-white shadow-md`} ref={menuRef}>
      <div className="flex items-center justify-center p-3">
        <Link href="/">
          <Image src="/logo.png" width={40} height={50} alt="Logo Rundfrau" />
        </Link>

        <button onClick={toggleMenu} className="ml-4 focus:outline-none">
          <Menu size="2rem" className="text-secondary-dark" />
        </button>
      </div>

      {/* Navigation Links */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1 bg-white shadow-md">
          <ul className="flex flex-col text-center items-center py-2">
            <li className="py-2 w-full border-b border-gray-300">
              <Link href="/services" onClick={() => setIsOpen(false)}>
                <p className="text-shadow-primary-darker hover:text-secondary">Angebote</p>
              </Link>
            </li>
            <li className="py-2 w-full border-b border-gray-300">
              <Link href="/courses" onClick={() => setIsOpen(false)}>
                <p className="text-primary-darker hover:text-secondary">Kurse buchen</p>
              </Link>
            </li>
            <li className="py-2 w-full border-b border-gray-300">
              <Link href="/team" onClick={() => setIsOpen(false)}>
                <p className="text-primary-darker  hover:text-secondary">Team</p>
              </Link>
            </li>
            <li className="py-2 w-full border-b border-gray-300">
              <Link href="/rooms" onClick={() => setIsOpen(false)}>
                <p className="text-primary-darker hover:text-secondary">Räume</p>
              </Link>
            </li>
            <li className="py-2 w-full">
              <Link href="/faq" onClick={() => setIsOpen(false)}>
                <p className="text-primary-darker hover:text-secondary">FAQ</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default MobileNavbar
