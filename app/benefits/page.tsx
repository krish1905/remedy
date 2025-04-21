"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BarChart3, Clock, HeartPulse, Users } from "lucide-react"

export default function BenefitsPage() {
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
          <Link href="/benefits" className="text-white font-medium hover:text-white transition">
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

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Benefits</h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          remEDy delivers significant benefits to patients, healthcare providers, and hospital systems.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* For Patients */}
          <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Users className="text-blue-300" size={24} />
              </div>
              <h2 className="text-2xl font-semibold">For Patients</h2>
            </div>

            <ul className="space-y-6">
              <li>
                <h3 className="font-medium text-lg mb-2">Reduced Wait Times</h3>
                <p className="text-gray-300">
                  By completing pre-registration and triage before arrival, patients spend less time waiting in the ED.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-lg mb-2">Better Care Coordination</h3>
                <p className="text-gray-300">
                  Automated referrals and follow-up ensure patients receive appropriate care after discharge.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-lg mb-2">Improved Communication</h3>
                <p className="text-gray-300">
                  Clear, patient-friendly discharge instructions in preferred languages enhance understanding and
                  compliance.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-lg mb-2">Appropriate Care Settings</h3>
                <p className="text-gray-300">
                  AI triage helps direct patients to the most appropriate care setting, whether ED, urgent care, or
                  telehealth.
                </p>
              </li>
            </ul>
          </div>

          {/* For Healthcare Providers */}
          <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <HeartPulse className="text-blue-300" size={24} />
              </div>
              <h2 className="text-2xl font-semibold">For Healthcare Providers</h2>
            </div>

            <ul className="space-y-6">
              <li>
                <h3 className="font-medium text-lg mb-2">Reduced Administrative Burden</h3>
                <p className="text-gray-300">
                  Automated documentation and AI-assisted discharge summaries free up clinical time for patient care.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-lg mb-2">Enhanced Decision Support</h3>
                <p className="text-gray-300">
                  AI triage tools help identify high-risk patients and suggest appropriate interventions.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-lg mb-2">Improved Workflow</h3>
                <p className="text-gray-300">
                  Digital intake and consent streamline processes and reduce redundant paperwork.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-lg mb-2">Better Information Access</h3>
                <p className="text-gray-300">
                  Real-time access to patient history and records from regional health networks improves care decisions.
                </p>
              </li>
            </ul>
          </div>

          {/* For Hospital Systems */}
          <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <BarChart3 className="text-blue-300" size={24} />
              </div>
              <h2 className="text-2xl font-semibold">For Hospital Systems</h2>
            </div>

            <ul className="space-y-6">
              <li>
                <h3 className="font-medium text-lg mb-2">Increased Efficiency</h3>
                <p className="text-gray-300">
                  Streamlined workflows and reduced paperwork lead to more efficient use of resources.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-lg mb-2">Reduced Overcrowding</h3>
                <p className="text-gray-300">
                  Pre-arrival triage and community care diversion help reduce unnecessary ED visits.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-lg mb-2">Data-Driven Insights</h3>
                <p className="text-gray-300">
                  Comprehensive data collection enables better analytics and continuous improvement.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-lg mb-2">Regulatory Compliance</h3>
                <p className="text-gray-300">
                  Built-in compliance with PHIPA and PIPEDA ensures legal and regulatory requirements are met.
                </p>
              </li>
            </ul>
          </div>

          {/* For Healthcare System */}
          <div className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-xl border border-blue-800/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Clock className="text-blue-300" size={24} />
              </div>
              <h2 className="text-2xl font-semibold">For Healthcare System</h2>
            </div>

            <ul className="space-y-6">
              <li>
                <h3 className="font-medium text-lg mb-2">Better Resource Allocation</h3>
                <p className="text-gray-300">
                  Directing patients to appropriate care settings optimizes healthcare resource utilization.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-lg mb-2">Reduced Readmissions</h3>
                <p className="text-gray-300">
                  Improved discharge planning and follow-up coordination help reduce unnecessary readmissions.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-lg mb-2">Enhanced Continuity of Care</h3>
                <p className="text-gray-300">
                  Automated notifications to primary care providers improve post-ED follow-up and care continuity.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-lg mb-2">Cost Savings</h3>
                <p className="text-gray-300">
                  More efficient processes, reduced administrative burden, and appropriate care settings lead to overall
                  cost savings.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
