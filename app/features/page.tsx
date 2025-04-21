"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function FeaturesPage() {
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
          <Link href="/features" className="text-white font-medium hover:text-white transition">
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
      <main className="container mx-auto px-4 py-12">
        <Link href="/" className="flex items-center gap-2 text-blue-300 mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Features</h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          remEDy offers a comprehensive suite of features designed to streamline emergency department workflows and
          improve patient care.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Feature 1 */}
          <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
            <h2 className="text-2xl font-semibold mb-6">Pre-Arrival Automation</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="text-blue-300 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Virtual AI Triage App</h3>
                  <p className="text-gray-300">
                    Patients describe symptoms before visiting the ED, with AI analysis to assign risk scores and
                    recommend appropriate care pathways.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-300 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Pre-Registration Form</h3>
                  <p className="text-gray-300">
                    Digital forms collect demographics, symptoms, and ID information with OCR auto-extraction, available
                    in multiple languages.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-300 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Advance Notification</h3>
                  <p className="text-gray-300">
                    Creates a "pre-arrival file" sent to ED tracking systems, notifying staff of incoming patients and
                    allowing preparation.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
            <h2 className="text-2xl font-semibold mb-6">In-ED Intake & Consent</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="text-blue-300 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Smart Check-In Kiosks</h3>
                  <p className="text-gray-300">
                    Patients can check in via kiosk or mobile, enter symptoms, and digitally sign consent forms with
                    multilingual support.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-300 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">E-Signature & Compliance</h3>
                  <p className="text-gray-300">
                    All digital consent forms meet PHIPA and PIPEDA legal standards with secure authentication.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-300 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">AI Triage Decision Support</h3>
                  <p className="text-gray-300">
                    AI models analyze symptom data and suggest triage levels while highlighting risk factors for serious
                    conditions.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
            <h2 className="text-2xl font-semibold mb-6">Discharge & Follow-Up Automation</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="text-blue-300 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">AI-Generated Discharge Summaries</h3>
                  <p className="text-gray-300">
                    LLMs draft summaries based on EHR data, visit notes, and treatments given, saving time and
                    standardizing documentation.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-300 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Patient-Friendly Instructions</h3>
                  <p className="text-gray-300">
                    AI translates summaries into clear, non-technical language in the patient's preferred language.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-300 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Automated Referrals & Follow-Up</h3>
                  <p className="text-gray-300">
                    Instant referrals to community clinics, specialists, and home care providers with coordinated
                    scheduling.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
            <h2 className="text-2xl font-semibold mb-6">System-Wide Integration</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="text-blue-300 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">EHR Integration</h3>
                  <p className="text-gray-300">
                    Seamless integration with hospital electronic health record systems for real-time data access and
                    updates.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-300 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">Data Security</h3>
                  <p className="text-gray-300">
                    End-to-end encryption, audit trails, and compliance with Canadian healthcare privacy laws.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-300 shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-medium">eNotifications</h3>
                  <p className="text-gray-300">
                    Secure notifications sent to patients' family doctors upon discharge, enabling faster follow-up.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
