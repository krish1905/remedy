import Link from "next/link"
import { Calendar, FileText, Home, MessageSquare, Settings, User, AlertTriangle, Bell } from "lucide-react"

export default function PatientSidebar() {
  return (
    <aside className="w-64 border-r border-blue-800/50 bg-blue-950/50 h-[calc(100vh-4rem)] hidden md:block">
      <div className="p-4">
        <nav className="space-y-1">
          <Link
            href="/patient-dashboard"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-blue-900/50 text-white"
          >
            <Home size={18} />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/patient-dashboard?tab=triage"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
          >
            <AlertTriangle size={18} />
            <span>Pre-Arrival Triage</span>
          </Link>
          <Link
            href="/patient-dashboard?tab=visits"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
          >
            <FileText size={18} />
            <span>ED Visits</span>
          </Link>
          <Link
            href="/patient-dashboard?tab=notifications"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
          >
            <Bell size={18} />
            <span>Notifications</span>
            <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </Link>
          <Link
            href="/patient-dashboard?tab=messages"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
          >
            <MessageSquare size={18} />
            <span>Messages</span>
          </Link>
          <Link
            href="/patient-dashboard?tab=appointments"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
          >
            <Calendar size={18} />
            <span>Appointments</span>
          </Link>
        </nav>

        <div className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Account</h3>
          <nav className="mt-2 space-y-1">
            <Link
              href="/patient-dashboard?tab=profile"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
            >
              <User size={18} />
              <span>My Profile</span>
            </Link>
            <Link
              href="/patient-dashboard?tab=settings"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
            >
              <Settings size={18} />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  )
}
