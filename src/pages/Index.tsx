
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import StatCard from "@/components/dashboard/StatCard";
import RecentStudents from "@/components/dashboard/RecentStudents";
import CourseOverview from "@/components/dashboard/CourseOverview";
import RecentActivities from "@/components/dashboard/RecentActivities";
import { Users, BookOpen, GraduationCap, CalendarDays } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome to the NexusEdu Student Database Management System.</p>
        </div>
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Students"
            value="1,245"
            icon={<Users className="h-5 w-5 text-education-primary" />}
            trend={{ value: 12, isPositive: true }}
          />
          <StatCard
            title="Active Courses"
            value="42"
            icon={<BookOpen className="h-5 w-5 text-education-primary" />}
            trend={{ value: 4, isPositive: true }}
          />
          <StatCard
            title="Average GPA"
            value="3.68"
            icon={<GraduationCap className="h-5 w-5 text-education-primary" />}
            trend={{ value: 2.5, isPositive: true }}
          />
          <StatCard
            title="Attendance Rate"
            value="92%"
            icon={<CalendarDays className="h-5 w-5 text-education-primary" />}
            trend={{ value: 1.2, isPositive: false }}
          />
        </div>
        
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <CourseOverview />
          <RecentActivities />
        </div>
        
        <RecentStudents />
      </div>
    </MainLayout>
  );
};

export default Index;
