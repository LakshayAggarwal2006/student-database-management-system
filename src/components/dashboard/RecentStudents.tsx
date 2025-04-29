
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const getInitials = (name: string) => {
  const names = name.split(' ');
  return names.length > 1
    ? `${names[0][0]}${names[1][0]}`
    : names[0].substring(0, 2);
};

const recentStudents = [
  {
    id: 1,
    name: "Alex Johnson",
    studentId: "SID22001",
    program: "Computer Science",
    year: 2,
    status: "Active",
    lastActive: "2 hours ago"
  },
  {
    id: 2,
    name: "Sarah Williams",
    studentId: "SID22045",
    program: "Data Science",
    year: 3,
    status: "Active",
    lastActive: "1 day ago"
  },
  {
    id: 3,
    name: "Michael Brown",
    studentId: "SID22078",
    program: "Computer Engineering",
    year: 1,
    status: "Inactive",
    lastActive: "5 days ago"
  },
  {
    id: 4,
    name: "Emily Davis",
    studentId: "SID22102",
    program: "Information Systems",
    year: 4,
    status: "Active",
    lastActive: "Just now"
  },
  {
    id: 5,
    name: "Daniel Lee",
    studentId: "SID22109",
    program: "Cybersecurity",
    year: 2,
    status: "On Leave",
    lastActive: "2 weeks ago"
  }
];

const RecentStudents = () => {
  return (
    <div className="border rounded-lg">
      <div className="p-4 bg-card border-b">
        <h2 className="text-lg font-semibold">Recent Students</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Student ID</TableHead>
              <TableHead className="hidden md:table-cell">Program</TableHead>
              <TableHead className="hidden md:table-cell">Year</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Last Active</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentStudents.map((student) => (
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
                <TableCell className="hidden md:table-cell">{student.program}</TableCell>
                <TableCell className="hidden md:table-cell">{student.year}</TableCell>
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
                <TableCell className="text-right text-sm text-muted-foreground">
                  {student.lastActive}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RecentStudents;
