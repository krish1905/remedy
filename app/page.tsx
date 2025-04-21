"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, ComputerIcon as Windows } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">🌟 remEDy</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-gray-200 hover:text-white transition">
            Features
          </Link>
          <Link href="/benefits" className="text-gray-200 hover:text-white transition">
            Benefits
          </Link>
          <Link href="/about" className="text-gray-200 hover:text-white transition">
            About Us
          </Link>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault()
              alert("Help Center Coming Soon!")
            }}
            className="text-gray-200 hover:text-white transition"
          >
            Help Center
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-gray-200 hover:text-white" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button className="bg-white text-blue-900 hover:bg-gray-100" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 text-center">
        {/* Announcement Badge */}
        <div className="flex justify-center mb-8">
          <Badge variant="secondary" className="py-2 px-4 bg-opacity-20 backdrop-blur-sm">
            WRHN Innovation Challenge
          </Badge>
        </div>

        {/* Hero Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-tight">
          AI-Powered Automation for
          <span className="relative">
            <span className="relative z-10"> Emergency </span>
            <span className="absolute inset-0 bg-blue-500 bg-opacity-30 transform -rotate-1 rounded-lg"></span>
          </span>
          Departments
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          remEDy is a comprehensive digital solution that streamlines patient intake, reduces wait times, and improves
          care coordination across the emergency department journey.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg flex items-center gap-2">
            <Download size={20} />
            Request Demo
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg flex items-center gap-2"
          >
            <Windows size={20} />
            Learn More
          </Button>
        </div>

        {/* AI Assistant Preview */}
        <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-xl">
          <div className="flex items-center gap-2 mb-2 text-gray-400 text-sm">
            <span className="bg-blue-500 h-2 w-2 rounded-full"></span>
            <span>AI Assistant</span>
            <span className="ml-auto">00:15</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-left">remEDy AI Response</h3>
          <p className="text-gray-300 text-left mb-4">
            remEDy is an intelligent healthcare automation system designed to streamline emergency department workflows.
          </p>
          <p className="text-gray-400 text-left text-sm">
            It's a comprehensive digital solution that integrates across the entire patient journey - from pre-arrival
            triage to discharge follow-up, helping reduce wait times and improve patient care coordination.
          </p>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-800/50">
            <h3 className="text-xl font-semibold mb-4">Pre-Arrival Automation</h3>
            <p className="text-gray-300 mb-4">
              Collect patient data before they arrive, triage remotely, and route non-emergent cases to community care.
            </p>
            <Button variant="link" className="text-blue-300 p-0 flex items-center gap-1">
              Learn more <ArrowRight size={16} />
            </Button>
          </div>

          {/* Feature 2 */}
          <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-800/50">
            <h3 className="text-xl font-semibold mb-4">In-ED Intake & Consent</h3>
            <p className="text-gray-300 mb-4">
              Digitize and automate intake, consent, and triage to reduce initial delays and paperwork redundancy.
            </p>
            <Button variant="link" className="text-blue-300 p-0 flex items-center gap-1">
              Learn more <ArrowRight size={16} />
            </Button>
          </div>

          {/* Feature 3 */}
          <div className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-800/50">
            <h3 className="text-xl font-semibold mb-4">Discharge & Follow-Up</h3>
            <p className="text-gray-300 mb-4">
              Minimize discharge delays by automating paperwork, referrals, and follow-up communication.
            </p>
            <Button variant="link" className="text-blue-300 p-0 flex items-center gap-1">
              Learn more <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
