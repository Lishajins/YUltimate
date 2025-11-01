import { useState } from "react";
import CoachingLayout from "./layout";

export default function SessionDetails() {
  const [sessions, setSessions] = useState([
    { id: 1, date: "2025-10-01", topic: "Introduction to Teamwork", attendees: 12 },
    { id: 2, date: "2025-10-08", topic: "Confidence Building", attendees: 15 },
  ]);

  const [formData, setFormData] = useState({
    date: "",
    topic: "",
    attendees: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.date || !formData.topic || !formData.attendees) {
      alert("Please fill all fields");
      return;
    }
    setSessions([
      ...sessions,
      { id: sessions.length + 1, ...formData, attendees: Number(formData.attendees) },
    ]);
    setFormData({ date: "", topic: "", attendees: "" });
  };

  return (
    <CoachingLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Session Details</h1>

        <form
          onSubmit={handleSubmit}
          className="mb-8 bg-white shadow-md rounded-2xl p-6 space-y-4 max-w-md"
        >
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="topic"
            placeholder="Topic"
            value={formData.topic}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="attendees"
            placeholder="No. of Attendees"
            value={formData.attendees}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Session
          </button>
        </form>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse bg-white rounded-2xl shadow-md">
            <thead>
              <tr className="bg-blue-100 text-left">
                <th className="border p-3">ID</th>
                <th className="border p-3">Date</th>
                <th className="border p-3">Topic</th>
                <th className="border p-3">Attendees</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id} className="hover:bg-blue-50 transition">
                  <td className="border p-3 text-center">{session.id}</td>
                  <td className="border p-3">{session.date}</td>
                  <td className="border p-3">{session.topic}</td>
                  <td className="border p-3 text-center">{session.attendees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CoachingLayout>
  );
}
