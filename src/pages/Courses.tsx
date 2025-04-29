
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Users, Clock, CalendarDays } from "lucide-react";

const coursesData = [
  {
    id: "CS101",
    title: "Introduction to Computer Science",
    department: "Computer Science",
    credits: 4,
    semester: "Fall 2023",
    instructor: "Dr. Robert Johnson",
    enrolled: 45,
    capacity: 60,
    days: "Mon, Wed",
    time: "10:00 AM - 11:30 AM"
  },
  {
    id: "DS202",
    title: "Data Analysis and Visualization",
    department: "Data Science",
    credits: 3,
    semester: "Fall 2023",
    instructor: "Dr. Emily Parker",
    enrolled: 38,
    capacity: 40,
    days: "Tue, Thu",
    time: "1:00 PM - 2:30 PM"
  },
  {
    id: "CS305",
    title: "Database Management Systems",
    department: "Computer Science",
    credits: 4,
    semester: "Fall 2023",
    instructor: "Prof. Michael Chen",
    enrolled: 52,
    capacity: 55,
    days: "Mon, Wed, Fri",
    time: "3:00 PM - 4:00 PM"
  },
  {
    id: "IS210",
    title: "Information Systems Analysis",
    department: "Information Systems",
    credits: 3,
    semester: "Fall 2023",
    instructor: "Dr. Sarah Williams",
    enrolled: 30,
    capacity: 35,
    days: "Tue, Thu",
    time: "9:00 AM - 10:30 AM"
  },
  {
    id: "CS401",
    title: "Artificial Intelligence",
    department: "Computer Science",
    credits: 4,
    semester: "Fall 2023",
    instructor: "Dr. James Wilson",
    enrolled: 48,
    capacity: 50,
    days: "Wed, Fri",
    time: "11:00 AM - 12:30 PM"
  },
  {
    id: "CY301",
    title: "Network Security Fundamentals",
    department: "Cybersecurity",
    credits: 3,
    semester: "Fall 2023",
    instructor: "Prof. Lisa Chen",
    enrolled: 25,
    capacity: 30,
    days: "Mon, Thu",
    time: "4:00 PM - 5:30 PM"
  }
];

const CourseCard = ({ course }: { course: typeof coursesData[0] }) => {
  const availableSpots = course.capacity - course.enrolled;
  const fillPercentage = (course.enrolled / course.capacity) * 100;
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <Badge variant="outline" className="bg-education-light text-education-primary">
            {course.id}
          </Badge>
          <Badge variant={availableSpots <= 5 ? "destructive" : "outline"} className={availableSpots <= 5 ? "" : "bg-green-100 text-green-800 border-green-200"}>
            {availableSpots} spots left
          </Badge>
        </div>
        <CardTitle className="text-xl mt-2">{course.title}</CardTitle>
        <CardDescription>{course.department}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-1 text-sm">
          <p><span className="font-medium">Instructor:</span> {course.instructor}</p>
          <p><span className="font-medium">Credits:</span> {course.credits}</p>
          <div className="flex items-center gap-2 mt-3">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            <span>{course.days}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{course.time}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="w-full">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{course.enrolled}/{course.capacity}</span>
            </div>
            <span className="text-sm text-muted-foreground">{Math.round(fillPercentage)}% Full</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full" 
              style={{ 
                width: `${fillPercentage}%`,
                backgroundColor: fillPercentage > 90 ? '#ef4444' : fillPercentage > 75 ? '#f59e0b' : '#4361ee'
              }}
            ></div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

const Courses = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Courses</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Course
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Search courses..." className="pl-8" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">Fall 2023</Button>
            <Button variant="outline" size="sm">All Departments</Button>
            <Button variant="outline" size="sm">Available Only</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Courses;
