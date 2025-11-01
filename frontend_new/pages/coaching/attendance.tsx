import { useState } from "react";
import CoachingLayout from "./layout";

export default function Attendance() {
  const [records, setRecords] = useState<{ child: string; date: string; status: string }[]>([]);
  const [child, setChild] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");

  const addRecord = () => {
    if (!child || !date) return alert("Please fill all fields");
    const newRecord = { child, date, status };
    setRecords([...records, newRecord]);
    setChild("");
    setDate("");
    setStatus("Present");
  };

  return (
    <CoachingLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-blue-800">Attendance Tracker</h1>

        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <h2 className="text-lg font-semibold mb-3">Mark Attendance</h2>
          <div className="grid grid-cols-3 gap-4">
            <input
              value={child}
              onChange={(e) => setChild(e.target.value)}
              placeholder="Child Name"
              className="border rounded-lg px-3 py-2"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-lg px-3 py-2"
            />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded-lg px-3 py-2"
            >
              <option>Present</option>
              <option>Absent</option>
            </select>
          </div>
          <button
            onClick={addRecord}
            className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            Add Record
          </button>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-inner">
          <h2 className="text-lg font-semibold mb-3">Attendance Records</h2>
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-2 border">Child</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec, i) => (
                <tr key={i} className="text-center border-t">
                  <td className="p-2 border">{rec.child}</td>
                  <td className="p-2 border">{rec.date}</td>
                  <td
                    className={`p-2 border font-semibold ${
                      rec.status === "Present" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {rec.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {records.length === 0 && <p className="text-gray-500 mt-2">No records yet</p>}
        </div>
      </div>
    </CoachingLayout>
  );
}
