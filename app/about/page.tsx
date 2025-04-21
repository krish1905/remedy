"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold">
            🌟 remEDy
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-gray-200 hover:text-white transition">
            Features
          </Link>
          <Link href="/benefits" className="text-gray-200 hover:text-white transition">
            Benefits
          </Link>
          <Link href="/about" className="text-white font-medium hover:text-white transition">
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
      <main className="container mx-auto px-4 py-12">
        <Link href="/" className="flex items-center gap-2 text-blue-300 mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About remEDy</h1>

          <div className="space-y-8 mb-16">
            <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                At remEDy, our mission is to transform emergency department workflows through AI-powered automation,
                reducing wait times, improving patient experiences, and enabling healthcare providers to focus on what
                matters most—providing exceptional care.
              </p>
            </div>

            <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                remEDy was born from firsthand observations of the challenges facing emergency departments in the
                Waterloo Region. Our team of healthcare professionals, technologists, and designers came together with a
                shared vision: to create a solution that addresses the paperwork burden and inefficiencies that impact
                both patients and providers.
              </p>
              <p className="text-gray-300">
                Developed as part of the WRHN Innovation Challenge, our platform integrates AI and automation across the
                entire patient journey—from pre-arrival to discharge—creating a seamless, efficient experience for
                everyone involved.
              </p>
            </div>

            <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="text-gray-300 mb-4">
                We believe that technology should enhance human capabilities, not replace them. Our AI-powered solutions
                are designed to handle routine administrative tasks, freeing healthcare providers to focus on clinical
                decision-making and patient care.
              </p>
              <p className="text-gray-300">
                Every feature in remEDy is developed with input from frontline healthcare workers, ensuring our
                solutions address real-world challenges and integrate seamlessly into existing workflows.
              </p>
            </div>

            <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-gray-300 mb-4">We are committed to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Privacy and security in all aspects of our platform</li>
                <li>Continuous improvement based on user feedback</li>
                <li>Accessibility for all patients, regardless of language or technical ability</li>
                <li>Supporting healthcare providers with tools that enhance their work, not complicate it</li>
                <li>Creating measurable improvements in emergency department efficiency and patient satisfaction</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Join Us in Transforming Emergency Care</h2>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg">Request a Demo</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
