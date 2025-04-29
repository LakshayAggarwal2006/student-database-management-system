
import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  CalendarDays, 
  ClipboardList, 
  BarChart3, 
  Settings,
  Home
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Dashboard", to: "/" },
    { icon: Users, label: "Students", to: "/students" },
    { icon: BookOpen, label: "Courses", to: "/courses" },
    { icon: GraduationCap, label: "Grades", to: "/grades" },
    { icon: CalendarDays, label: "Attendance", to: "/attendance" },
    { icon: ClipboardList, label: "Reports", to: "/reports" },
    { icon: BarChart3, label: "Analytics", to: "/analytics" },
    { icon: Settings, label: "Settings", to: "/settings" },
  ];

  return (
    <div className="w-64 bg-education-primary text-white h-full flex flex-col">
      <div className="p-4 border-b border-education-secondary">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <GraduationCap className="h-8 w-8" />
          <span>NexusEdu</span>
        </h1>
        <p className="text-sm opacity-80">Student Management System</p>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                    isActive
                      ? "bg-education-secondary text-white"
                      : "text-white/80 hover:bg-education-secondary/60 hover:text-white"
                  )
                }
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-education-secondary">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-education-accent flex items-center justify-center">
            <span className="font-semibold">AD</span>
          </div>
          <div>
            <p className="font-medium">Admin User</p>
            <p className="text-xs opacity-80">admin@nexusedu.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
