import { useState } from "react";
import CoachingLayout from "./layout";

export default function Dashboard() {
  const [stats] = useState([
    { title: "Total Children", value: 25 },
    { title: "Active Sessions", value: 12 },
    { title: "Attendance Rate", value: "92%" },
    { title: "Avg Score", value: "88%" },
  ]);

  return (
    <CoachingLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Coaching Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-5 text-center"
            >
              <h2 className="text-gray-500 font-medium">{stat.title}</h2>
              <p className="text-3xl font-bold text-blue-700 mt-2">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </CoachingLayout>
  );
}
