'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'

const MobileNavbar = ({ className }: { className?: string }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`${className} relative bg-white shadow-md`}>
            <div className="flex items-center justify-center p-3">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo.png"
                        width={40}
                        height={50}
                        alt="Logo Rundfrau"
                    />
                </Link>

                {/* Hamburger Menu Icon */}
                <button
                    onClick={toggleMenu}
                    className="ml-4 focus:outline-none"
                >
                    <Menu size="2rem" className="text-secondary-dark" />
                </button>
            </div>

            {/* Navigation Links */}
            {isOpen && (
                <ul className="absolute left-0 right-0 top-full mt-1 flex flex-col items-center bg-white shadow-md">
                    <li className="py-2">
                        <Link href="/services">
                            <p className="text-secondary-dark hover:text-secondary">
                                Angebote
                            </p>
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/courses">
                            <p className="text-secondary-dark hover:text-secondary">
                                Kurse buchen
                            </p>
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/about">
                            <p className="text-secondary-dark hover:text-secondary">
                                Team
                            </p>
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/rooms">
                            <p className="text-secondary-dark hover:text-secondary">
                                Räume
                            </p>
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link href="/faq">
                            <p className="text-secondary-dark hover:text-secondary">
                                FAQ
                            </p>
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default MobileNavbar
