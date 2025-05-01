import { GraduationCap, GraduationCapIcon, IndianRupee, User, Users, Wallet, Wallet2Icon } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"
import Header from '../_components/Header'
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
                        <p className="text-xl font-bold text-gray-800 ">2000</p>

                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold mb-2">Total Teachers</h2>
                            <Users className='text-green-600' />
                        </div>

                        <p className="text-xl font-bold text-gray-800 ">50</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold mb-2">Pending Fees</h2>
                            <IndianRupee className='text-green-600' />
                        </div>

                        <p className="text-xl font-bold text-gray-800 ">$20,000</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold mb-2">Payments Today</h2>
                            <Wallet className='text-green-600' />
                        </div>

                        <p className="text-xl font-bold text-gray-800 ">$20,000</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className='flex justify-between items-center'>
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">Quick Actions</h1>

                        </div>
                        <Button variant="outline" className="w-full cursor-pointer bg-green-600 text-white hover:bg-green-600 hover:text-white">
                            Record New Payment
                        </Button>

                        <Button variant="outline" className='w-full mt-2 cursor-pointer hover:bg-green-600 hover:text-white'>Add New Student</Button>
                        <Button variant="outline" className='w-full mt-2 cursor-pointer hover:bg-green-600 hover:text-white'>Add New Teacher</Button>
                        <Button variant="outline" className='w-full mt-2 cursor-pointer hover:bg-green-600 hover:text-white'>Make a Payment</Button>


                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className=' justify-between items-center'>
                            <h1 className="text-2xl font-bold text-gray-800 ">Recent Payments</h1>
                            <p className='text-sm text-gray-500'>Last 5 payment transactions</p>
                        </div>

                        <p className="text-gray-700">10</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
