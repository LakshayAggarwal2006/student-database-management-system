
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const courseData = [
  { name: "Computer Science", students: 156, averageGrade: 87 },
  { name: "Data Science", students: 98, averageGrade: 84 },
  { name: "Information Systems", students: 120, averageGrade: 82 },
  { name: "Cybersecurity", students: 75, averageGrade: 89 },
  { name: "Software Engineering", students: 145, averageGrade: 85 },
  { name: "AI & ML", students: 62, averageGrade: 91 }
];

const CourseOverview = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Course Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={courseData}
              margin={{ top: 5, right: 30, left: 20, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                tick={{fontSize: 12}} 
                angle={-45}
                textAnchor="end"
                height={70}
              />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" name="Number of Students" fill="#4361ee" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseOverview;
