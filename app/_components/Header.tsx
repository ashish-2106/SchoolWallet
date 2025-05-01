"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative shadow-md">
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex items-center space-x-3">
                    <Image src="/logo.jpg" alt="Logo" width={80} height={50} className="bg-transparent" />
                </div>

                {/* Hamburger menu button - only visible on mobile */}
                <button 
                    className="block sm:hidden focus:outline-none" 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Desktop menu - hidden on mobile */}
                <ul className="hidden sm:flex items-center gap-6 text-lg font-medium">
                    <Link href="/Dashboard">
                        <li className="hover:text-green-600 transition duration-300 cursor-pointer">Dashboard</li>
                    </Link>
                    <Link href={"/Students"}>
                    <li className="hover:text-green-600 transition duration-300 cursor-pointer">Student</li>
                    </Link>
                   
                    <li className="hover:text-green-600 transition duration-300 cursor-pointer">Teacher</li>
                    <li className="hover:text-green-600 transition duration-300 cursor-pointer">Payments</li>
                </ul>
            </div>

            {/* Mobile menu dropdown - only visible when menu is open */}
            {isMenuOpen && (
                <div className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-10">
                    <ul className="flex flex-col w-full py-2">
                        <Link href="/Dashboard" onClick={toggleMenu}>
                            <li className="px-6 py-3 hover:bg-gray-100 hover:text-green-600 transition duration-300 cursor-pointer">
                                Dashboard
                            </li>
                        </Link>
                        <li className="px-6 py-3 hover:bg-gray-100 hover:text-green-600 transition duration-300 cursor-pointer">
                            Student
                        </li>
                        <li className="px-6 py-3 hover:bg-gray-100 hover:text-green-600 transition duration-300 cursor-pointer">
                            Teacher
                        </li>
                        <li className="px-6 py-3 hover:bg-gray-100 hover:text-green-600 transition duration-300 cursor-pointer">
                            Payments
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Header