import React from "react";
import Link from "next/link";

export default function CoachingHome() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Coaching Management</h1>
      <p className="text-gray-600">
        Welcome to the Coaching Module. Choose a section below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <Link
          href="/coaching/children"
          className="p-6 bg-blue-100 hover:bg-blue-200 rounded-2xl text-center shadow"
        >
          👶 Child Profiles
        </Link>
        <Link
          href="/coaching/attendance"
          className="p-6 bg-green-100 hover:bg-green-200 rounded-2xl text-center shadow"
        >
          📋 Attendance Tracker
        </Link>
        <Link
          href="/coaching/sessions"
          className="p-6 bg-yellow-100 hover:bg-yellow-200 rounded-2xl text-center shadow"
        >
          📚 Session Management
        </Link>
      </div>
    </div>
  );
}
