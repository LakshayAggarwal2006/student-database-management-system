
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    user: "Admin",
    action: "Added new student",
    target: "Jessica Thompson (SID22134)",
    time: "10 minutes ago",
    type: "student"
  },
  {
    id: 2,
    user: "System",
    action: "Updated course schedule",
    target: "Advanced Database Management",
    time: "1 hour ago",
    type: "course"
  },
  {
    id: 3,
    user: "Prof. Williams",
    action: "Submitted grades",
    target: "Computer Networks (CS301)",
    time: "3 hours ago",
    type: "grade"
  },
  {
    id: 4,
    user: "Admin",
    action: "Generated report",
    target: "Q1 Attendance Summary",
    time: "Yesterday",
    type: "report"
  },
  {
    id: 5,
    user: "System",
    action: "Backup completed",
    target: "Student Database",
    time: "Yesterday",
    type: "system"
  }
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "student":
      return (
        <div className="bg-blue-100 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4361ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <line x1="19" x2="19" y1="8" y2="14"></line>
            <line x1="22" x2="16" y1="11" y2="11"></line>
          </svg>
        </div>
      );
    case "course":
      return (
        <div className="bg-green-100 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
          </svg>
        </div>
      );
    case "grade":
      return (
        <div className="bg-purple-100 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <path d="m9 11 3 3L22 4"></path>
          </svg>
        </div>
      );
    case "report":
      return (
        <div className="bg-amber-100 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <path d="M14 2v6h6"></path>
            <path d="M16 13H8"></path>
            <path d="M16 17H8"></path>
            <path d="M10 9H8"></path>
          </svg>
        </div>
      );
    default:
      return (
        <div className="bg-gray-100 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
            <line x1="8" x2="16" y1="21" y2="21"></line>
            <line x1="12" x2="12" y1="17" y2="21"></line>
          </svg>
        </div>
      );
  }
};

const RecentActivities = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            {getActivityIcon(activity.type)}
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span>{" "}
                {activity.action}:{" "}
                <span className="font-medium text-education-primary">
                  {activity.target}
                </span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
