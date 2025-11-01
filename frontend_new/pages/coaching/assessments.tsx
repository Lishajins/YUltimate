import { useState } from "react";
import CoachingLayout from "./layout";

export default function Assessments() {
  const [records, setRecords] = useState<{ child: string; subject: string; score: number; remarks: string }[]>([]);
  const [child, setChild] = useState("");
  const [subject, setSubject] = useState("");
  const [score, setScore] = useState("");
  const [remarks, setRemarks] = useState("");

  const addRecord = () => {
    if (!child || !subject || !score) return alert("Please fill all fields");
    const newRecord = { child, subject, score: Number(score), remarks };
    setRecords([...records, newRecord]);
    setChild("");
    setSubject("");
    setScore("");
    setRemarks("");
  };

  const avgScore =
    records.length > 0
      ? (records.reduce((sum, r) => sum + r.score, 0) / records.length).toFixed(2)
      : 0;

  return (
    <CoachingLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-blue-800">Assessments</h1>

        <div className="bg-white p-6 rounded-2xl shadow-md border">
          <h2 className="text-lg font-semibold mb-3">Add Assessment</h2>
          <div className="grid grid-cols-4 gap-4">
            <input
              value={child}
              onChange={(e) => setChild(e.target.value)}
              placeholder="Child Name"
              className="border rounded-lg px-3 py-2"
            />
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="border rounded-lg px-3 py-2"
            />
            <input
              type="number"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              placeholder="Score (0–100)"
              className="border rounded-lg px-3 py-2"
            />
            <input
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Remarks"
              className="border rounded-lg px-3 py-2"
            />
          </div>
          <button
            onClick={addRecord}
            className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            Add Record
          </button>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-inner">
          <h2 className="text-lg font-semibold mb-3">Assessment Records</h2>
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-blue-100">
              <tr>
                <th className="p-2 border">Child</th>
                <th className="p-2 border">Subject</th>
                <th className="p-2 border">Score</th>
                <th className="p-2 border">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec, i) => (
                <tr key={i} className="text-center border-t">
                  <td className="p-2 border">{rec.child}</td>
                  <td className="p-2 border">{rec.subject}</td>
                  <td className="p-2 border font-semibold text-blue-800">{rec.score}</td>
                  <td className="p-2 border">{rec.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {records.length === 0 && <p className="text-gray-500 mt-2">No records yet</p>}
          <p className="mt-4 text-blue-700 font-semibold">Average Score: {avgScore}</p>
        </div>
      </div>
    </CoachingLayout>
  );
}
