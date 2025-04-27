"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 shadow-md">
            <div className="flex items-center space-x-3">
                <Image src="/logo.jpg" alt="Logo" width={80} height={50} className="bg-transparent" />
                
            </div>

            <ul className="flex flex-col sm:flex-row items-center gap-6 mt-4 sm:mt-0 text-lg font-medium">
               
                <li className="hover:text-indigo-600 transition duration-300 cursor-pointer">Dashboard</li>
                <li className="hover:text-indigo-600 transition duration-300 cursor-pointer">Student</li>
                <li className="hover:text-indigo-600 transition duration-300 cursor-pointer">Teacher</li>
                <li className="hover:text-indigo-600 transition duration-300 cursor-pointer">Payments</li>
            </ul>
            
        </div>



    )
}

export default Header
