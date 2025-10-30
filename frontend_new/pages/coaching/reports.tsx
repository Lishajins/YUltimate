import { useState } from "react";
import { Users, Calendar, Star, CheckCircle } from "lucide-react";
import CoachingLayout from "./layout";

export default function ReportsPage() {
  const [report] = useState({
    totalStudents: 25,
    totalSessions: 45,
    averageScore: 88,
    attendanceRate: 92,
  });

  const stats = [
    {
      title: "Total Students",
      value: report.totalStudents,
      icon: <Users className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
    },
    {
      title: "Total Sessions",
      value: report.totalSessions,
      icon: <Calendar className="w-6 h-6 text-green-600" />,
      bg: "bg-green-50",
    },
    {
      title: "Average Score",
      value: `${report.averageScore}%`,
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      bg: "bg-yellow-50",
    },
    {
      title: "Attendance Rate",
      value: `${report.attendanceRate}%`,
      icon: <CheckCircle className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50",
    },
  ];

  const content = (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Reports Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`${item.bg} p-5 rounded-2xl shadow-md flex items-center gap-4 hover:shadow-lg transition`}
          >
            <div className="p-3 bg-white rounded-full shadow">{item.icon}</div>
            <div>
              <h2 className="text-sm font-semibold text-gray-600">{item.title}</h2>
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          Coaching performance remains strong with an impressive{" "}
          <span className="font-semibold text-purple-700">{report.attendanceRate}%</span>{" "}
          attendance rate. Students have maintained an average performance score of{" "}
          <span className="font-semibold text-yellow-700">{report.averageScore}%</span>{" "}
          across <span className="font-semibold text-green-700">{report.totalSessions}</span> sessions.
        </p>
      </div>
    </div>
  );

  return <CoachingLayout>{content}</CoachingLayout>;
}
