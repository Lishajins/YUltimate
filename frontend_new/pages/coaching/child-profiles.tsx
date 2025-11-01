import { useState } from "react";
import CoachingLayout from "./layout";

export default function ChildProfiles() {
  const [children, setChildren] = useState([
    { id: 1, name: "Aarav", age: 10, gender: "Male" },
    { id: 2, name: "Diya", age: 9, gender: "Female" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.gender) {
      alert("Please fill all fields");
      return;
    }
    setChildren([
      ...children,
      { id: children.length + 1, ...formData, age: Number(formData.age) },
    ]);
    setFormData({ name: "", age: "", gender: "" });
  };

  return (
    <CoachingLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Child Profiles</h1>

        <form
          onSubmit={handleSubmit}
          className="mb-8 bg-white shadow-md rounded-2xl p-6 space-y-4 max-w-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Child
          </button>
        </form>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse bg-white rounded-2xl shadow-md">
            <thead>
              <tr className="bg-blue-100 text-left">
                <th className="border p-3">ID</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Age</th>
                <th className="border p-3">Gender</th>
              </tr>
            </thead>
            <tbody>
              {children.map((child) => (
                <tr
                  key={child.id}
                  className="hover:bg-blue-50 transition"
                >
                  <td className="border p-3 text-center">{child.id}</td>
                  <td className="border p-3">{child.name}</td>
                  <td className="border p-3 text-center">{child.age}</td>
                  <td className="border p-3 text-center">{child.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CoachingLayout>
  );
}
