"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserPlus, Filter, RotateCw } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

// Student data type
interface Student {
  id: string
  name: string
  class: string
  gender: "Male" | "Female"
  feeStatus: "Paid" | "Pending" | "Partial"
}

function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedClass, setSelectedClass] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  // Mock student data
  const students: Student[] = [
    { id: "ADM2023001", name: "Rahul Sharma", class: "10-A", gender: "Male", feeStatus: "Paid" },
    { id: "ADM2023045", name: "Priya Patel", class: "8-B", gender: "Female", feeStatus: "Pending" },
    { id: "ADM2022089", name: "Amit Kumar", class: "12-C", gender: "Male", feeStatus: "Paid" },
    { id: "ADM2023102", name: "Neha Singh", class: "9-A", gender: "Female", feeStatus: "Partial" },
    { id: "ADM2022156", name: "Vikram Mehta", class: "11-B", gender: "Male", feeStatus: "Paid" },
    { id: "ADM2023078", name: "Ananya Gupta", class: "7-C", gender: "Female", feeStatus: "Pending" },
  ]

  // Available classes for filter
  const classes = [
    "6-A",
    "6-B",
    "7-A",
    "7-B",
    "7-C",
    "8-A",
    "8-B",
    "9-A",
    "9-B",
    "10-A",
    "10-B",
    "11-A",
    "11-B",
    "12-A",
    "12-B",
    "12-C",
  ]

  // Available statuses for filter
  const statuses = ["Paid", "Pending", "Partial"]

  // Filter students based on search query and selected filters
  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      searchQuery === "" ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.class.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesClass = selectedClass === null || student.class === selectedClass
    const matchesStatus = selectedStatus === null || student.feeStatus === selectedStatus

    return matchesSearch && matchesClass && matchesStatus
  })

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Students</h1>
        <Button className="bg-emerald-600 hover:bg-emerald-700">
          <UserPlus className="mr-2 h-4 w-4" />
          Add New Student
        </Button>
      </div>

      <div className="bg-white rounded-lg border p-6 mb-8">
        <h2 className="text-xl font-bold mb-1">Student Management</h2>
        <p className="text-gray-500 mb-6">View and manage all student records</p>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Input
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2 min-w-[150px] justify-between">
                  {selectedClass || "All Classes"}
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuCheckboxItem
                  checked={selectedClass === null}
                  onCheckedChange={() => setSelectedClass(null)}
                >
                  All Classes
                </DropdownMenuCheckboxItem>
                {classes.map((cls) => (
                  <DropdownMenuCheckboxItem
                    key={cls}
                    checked={selectedClass === cls}
                    onCheckedChange={() => setSelectedClass(cls)}
                  >
                    {cls}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2 min-w-[150px] justify-between">
                  {selectedStatus || "All Statuses"}
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuCheckboxItem
                  checked={selectedStatus === null}
                  onCheckedChange={() => setSelectedStatus(null)}
                >
                  All Statuses
                </DropdownMenuCheckboxItem>
                {statuses.map((status) => (
                  <DropdownMenuCheckboxItem
                    key={status}
                    checked={selectedStatus === status}
                    onCheckedChange={() => setSelectedStatus(status)}
                  >
                    {status}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setSearchQuery("")
                setSelectedClass(null)
                setSelectedStatus(null)
              }}
            >
              <RotateCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left font-medium">Admission No.</th>
                <th className="py-3 px-4 text-left font-medium">Name</th>
                <th className="py-3 px-4 text-left font-medium">Class</th>
                <th className="py-3 px-4 text-left font-medium">Gender</th>
                <th className="py-3 px-4 text-left font-medium">Fee Status</th>
                <th className="py-3 px-4 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{student.id}</td>
                  <td className="py-3 px-4">{student.name}</td>
                  <td className="py-3 px-4">{student.class}</td>
                  <td className="py-3 px-4">{student.gender}</td>
                  <td className="py-3 px-4">
                    <Badge
                      className={
                        student.feeStatus === "Paid"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : student.feeStatus === "Partial"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {student.feeStatus}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-emerald-600 border-emerald-600 hover:bg-emerald-50"
                      >
                        Pay Fees
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default StudentsPage