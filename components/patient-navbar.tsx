import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, HelpCircle, LogOut, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export default function PatientNavbar() {
  return (
    <header className="border-b border-blue-800/50 bg-blue-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold">
            🌟 remEDy
          </Link>
        </div>

        <div className="hidden md:flex items-center relative max-w-sm w-full mx-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input type="search" placeholder="Search..." className="pl-10 bg-blue-900/30 border-blue-800/50" />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle size={20} />
          </Button>
          <Link href="/login">
            <Button variant="ghost" size="icon">
              <LogOut size={20} />
            </Button>
          </Link>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
