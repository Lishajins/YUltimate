import { useState } from "react";
import CoachingLayout from "./layout";

export default function AddChild() {
  const [child, setChild] = useState({ name: "", age: "", level: "" });

  const handleChange = (e) => {
    setChild({ ...child, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Added ${child.name} successfully!`);
  };

  return (
    <CoachingLayout>
      <div className="p-8 min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">
          Add Child
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-md mx-auto border border-blue-100"
        >
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={child.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={child.age}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Level
            </label>
            <select
              name="level"
              value={child.level}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Add Child
          </button>
        </form>
      </div>
    </CoachingLayout>
  );
}
