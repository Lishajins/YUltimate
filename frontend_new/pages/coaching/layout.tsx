import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import {
  Home,
  Users,
  Calendar,
  BarChart,
  ClipboardCheck,
} from "lucide-react";

export default function CoachingLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  const links = [
    { name: "Dashboard", path: "/coaching/dashboard", icon: <Home size={18} /> },
    { name: "Child Profiles", path: "/coaching/child-profiles", icon: <Users size={18} /> },
    { name: "Session Details", path: "/coaching/session-details", icon: <Calendar size={18} /> },
    { name: "Attendance", path: "/coaching/attendance", icon: <ClipboardCheck size={18} /> },
    { name: "Assessments", path: "/coaching/assessments", icon: <BarChart size={18} /> },
    { name: "Reports", path: "/coaching/reports", icon: <BarChart size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 backdrop-blur-xl bg-blue-900/80 text-white flex flex-col p-6 shadow-2xl border-r border-blue-700">
        <h1 className="text-3xl font-bold mb-10 text-center tracking-wider drop-shadow-lg">
          Coaching
        </h1>

        <nav className="space-y-2">
          {links.map((link) => {
            const active = router.pathname === link.path;
            return (
              <Link key={link.path} href={link.path}>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
                    active
                      ? "bg-blue-600/90 shadow-lg scale-105"
                      : "hover:bg-blue-700/70 hover:scale-[1.02]"
                  }`}
                >
                  <div className={`${active ? "text-white" : "text-blue-100"}`}>
                    {link.icon}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      active ? "text-white" : "text-blue-100"
                    }`}
                  >
                    {link.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-blue-700/60 text-sm text-center text-blue-200">
          <p>Team XYZ © 2025</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10 bg-white/70 backdrop-blur-lg rounded-l-3xl shadow-inner overflow-y-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
