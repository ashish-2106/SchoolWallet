import { GraduationCap, GraduationCapIcon, IndianRupee, User, Users, Wallet, Wallet2Icon } from 'lucide-react'
import React from 'react'

function Dashboard() {
    return (
        <div>
            <h1 className='font-bold text-3xl mt-4 ml-4 text-gray-700'>Dashboard</h1>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold mb-2">Total Students </h2>
                            <GraduationCap className='text-green-600' />
                        </div>
                        <p className="text-gray-700">2000</p>

                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold mb-2">Total Teachers</h2>
                            <Users className='text-green-600' />
                        </div>

                        <p className="text-gray-700">50</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold mb-2">Pending Fees</h2>
                            <IndianRupee className='text-green-600' />
                        </div>

                        <p className="text-gray-700">$20,000</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold mb-2">Payments Today</h2>
                            <Wallet className='text-green-600' />
                        </div>

                        <p className="text-gray-700">$20,000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
