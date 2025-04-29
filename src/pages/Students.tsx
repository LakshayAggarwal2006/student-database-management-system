
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import StudentForm from "@/components/students/StudentForm";
import { Search, MoreVertical, Plus, FileDown, Filter, RefreshCw } from "lucide-react";

const getInitials = (name: string) => {
  const names = name.split(' ');
  return names.length > 1
    ? `${names[0][0]}${names[1][0]}`
    : names[0].substring(0, 2);
};

const studentsData = [
  {
    id: 1,
    name: "Alex Johnson",
    studentId: "SID22001",
    email: "alex.j@university.edu",
    program: "Computer Science",
    year: 2,
    gpa: 3.8,
    status: "Active"
  },
  {
    id: 2,
    name: "Sarah Williams",
    studentId: "SID22045",
    email: "sarah.w@university.edu",
    program: "Data Science",
    year: 3,
    gpa: 3.9,
    status: "Active"
  },
  {
    id: 3,
    name: "Michael Brown",
    studentId: "SID22078",
    email: "michael.b@university.edu",
    program: "Computer Engineering",
    year: 1,
    gpa: 3.2,
    status: "Inactive"
  },
  {
    id: 4,
    name: "Emily Davis",
    studentId: "SID22102",
    email: "emily.d@university.edu",
    program: "Information Systems",
    year: 4,
    gpa: 3.7,
    status: "Active"
  },
  {
    id: 5,
    name: "Daniel Lee",
    studentId: "SID22109",
    email: "daniel.l@university.edu",
    program: "Cybersecurity",
    year: 2,
    gpa: 3.5,
    status: "On Leave"
  },
  {
    id: 6,
    name: "Jessica Thompson",
    studentId: "SID22134",
    email: "jessica.t@university.edu",
    program: "Computer Science",
    year: 1,
    gpa: 4.0,
    status: "Active"
  },
  {
    id: 7,
    name: "David Wilson",
    studentId: "SID22156",
    email: "david.w@university.edu",
    program: "Software Engineering",
    year: 3,
    gpa: 3.6,
    status: "Active"
  },
  {
    id: 8,
    name: "Olivia Martinez",
    studentId: "SID22189",
    email: "olivia.m@university.edu",
    program: "Data Science",
    year: 2,
    gpa: 3.4,
    status: "Active"
  }
];

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter students based on search term
  const filteredStudents = studentsData.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Students</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Student
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Student</DialogTitle>
              </DialogHeader>
              <StudentForm />
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search students..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <FileDown className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Student ID</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead>Program</TableHead>
                <TableHead className="hidden md:table-cell">Year</TableHead>
                <TableHead className="hidden lg:table-cell">GPA</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[70px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No students found matching your search.
                  </TableCell>
                </TableRow>
              ) : (
                filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-education-accent text-white">
                            {getInitials(student.name)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{student.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{student.studentId}</TableCell>
                    <TableCell className="hidden md:table-cell">{student.email}</TableCell>
                    <TableCell>{student.program}</TableCell>
                    <TableCell className="hidden md:table-cell">{student.year}</TableCell>
                    <TableCell className="hidden lg:table-cell">{student.gpa}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`
                          ${student.status === 'Active' ? 'bg-green-100 text-green-800 border-green-200' : ''}
                          ${student.status === 'Inactive' ? 'bg-gray-100 text-gray-800 border-gray-200' : ''}
                          ${student.status === 'On Leave' ? 'bg-amber-100 text-amber-800 border-amber-200' : ''}
                        `}
                      >
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View details</DropdownMenuItem>
                          <DropdownMenuItem>Edit student</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete student</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Students;
