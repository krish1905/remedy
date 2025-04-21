import Link from "next/link"
import {
  BarChart2,
  Calendar,
  FileText,
  Home,
  MessageSquare,
  Settings,
  Users,
  ClipboardList,
  LogOut,
} from "lucide-react"

export default function HospitalSidebar() {
  return (
    <aside className="w-64 border-r border-blue-800/50 bg-blue-950/50 h-[calc(100vh-4rem)] hidden md:block">
      <div className="p-4">
        <nav className="space-y-1">
          <Link
            href="/hospital-dashboard"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-blue-900/50 text-white"
          >
            <Home size={18} />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/hospital-dashboard?tab=intake"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
          >
            <Users size={18} />
            <span>Patient Intake</span>
          </Link>
          <Link
            href="/hospital-dashboard?tab=dashboard"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
          >
            <BarChart2 size={18} />
            <span>Department Overview</span>
          </Link>
          <Link
            href="/hospital-dashboard?tab=discharge"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
          >
            <FileText size={18} />
            <span>Discharge Management</span>
          </Link>
          <Link
            href="/hospital-dashboard?tab=reports"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
          >
            <ClipboardList size={18} />
            <span>Reports & Analytics</span>
          </Link>
          <Link
            href="/hospital-dashboard?tab=schedule"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
          >
            <Calendar size={18} />
            <span>Staff Schedule</span>
          </Link>
          <Link
            href="/hospital-dashboard?tab=messages"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
          >
            <MessageSquare size={18} />
            <span>Messages</span>
            <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </Link>
        </nav>

        <div className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Settings</h3>
          <nav className="mt-2 space-y-1">
            <Link
              href="/hospital-dashboard?tab=settings"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
            >
              <Settings size={18} />
              <span>Department Settings</span>
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-blue-900/30 hover:text-white"
            >
              <LogOut size={18} />
              <span>Log Out</span>
            </Link>
          </nav>
        </div>
      </div>
    </aside>
  )
}
