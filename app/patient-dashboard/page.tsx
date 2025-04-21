"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  Calendar,
  Clock,
  FileText,
  LogOut,
  MapPin,
  MessageSquare,
  Settings,
  User,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  MapIcon,
} from "lucide-react"
import PatientNavbar from "@/components/patient-navbar"
import PatientSidebar from "@/components/patient-sidebar"

export default function PatientDashboard() {
  const [symptoms, setSymptoms] = useState("")
  const [duration, setDuration] = useState("")
  const [severity, setSeverity] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<null | {
    recommendation: string
    urgency: "high" | "medium" | "low"
    facilities: Array<{
      name: string
      type: string
      distance: string
      waitTime: string
      address: string
    }>
  }>(null)

  const handleSubmitSymptoms = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate AI processing
    setTimeout(() => {
      // This would be the AI response in a real application
      setResult({
        recommendation:
          symptoms.toLowerCase().includes("chest pain") || symptoms.toLowerCase().includes("breathing")
            ? "Based on your symptoms, we recommend immediate emergency care."
            : "Based on your symptoms, you may visit an urgent care center or your primary care physician.",
        urgency:
          symptoms.toLowerCase().includes("chest pain") || symptoms.toLowerCase().includes("breathing")
            ? "high"
            : "medium",
        facilities: [
          {
            name: "Grand River Hospital",
            type: "Emergency Department",
            distance: "3.2 km",
            waitTime: "45 min",
            address: "835 King St W, Kitchener, ON",
          },
          {
            name: "St. Mary's General Hospital",
            type: "Emergency Department",
            distance: "5.1 km",
            waitTime: "65 min",
            address: "911 Queen's Blvd, Kitchener, ON",
          },
          {
            name: "Waterloo Urgent Care Clinic",
            type: "Urgent Care",
            distance: "2.3 km",
            waitTime: "30 min",
            address: "170 University Ave W, Waterloo, ON",
          },
        ],
      })
      setLoading(false)
    }, 2000)
  }

  const recentVisits = [
    {
      id: "V12345",
      date: "2025-03-15",
      hospital: "Grand River Hospital",
      department: "Emergency Department",
      reason: "Severe abdominal pain",
      status: "Completed",
      summary:
        "Patient presented with severe abdominal pain in the lower right quadrant. Examination revealed tenderness and guarding. CT scan confirmed acute appendicitis. Patient underwent emergency appendectomy. Post-operative recovery was uneventful. Discharged with oral antibiotics and pain management. Follow-up appointment scheduled with surgeon in 2 weeks.",
    },
    {
      id: "V12289",
      date: "2025-01-22",
      hospital: "St. Mary's General Hospital",
      department: "Emergency Department",
      reason: "Chest pain and shortness of breath",
      status: "Completed",
      summary:
        "Patient arrived with complaints of chest pain and shortness of breath. ECG showed normal sinus rhythm. Troponin levels were within normal range. Chest X-ray revealed no acute findings. Patient was diagnosed with anxiety-induced chest pain. Discharged with recommendation for follow-up with primary care physician and consideration of anxiety management strategies.",
    },
  ]

  const notifications = [
    {
      id: 1,
      title: "Discharge Summary Available",
      message: "Your discharge summary from your recent visit to Grand River Hospital is now available.",
      date: "2025-04-18",
      read: false,
      type: "document",
    },
    {
      id: 2,
      title: "Appointment Reminder",
      message: "You have a follow-up appointment with Dr. Johnson tomorrow at 10:00 AM.",
      date: "2025-04-19",
      read: true,
      type: "appointment",
    },
    {
      id: 3,
      title: "Prescription Refill",
      message: "Your prescription for Amoxicillin has been refilled and is ready for pickup.",
      date: "2025-04-17",
      read: true,
      type: "medication",
    },
  ]

  const [selectedVisit, setSelectedVisit] = useState<null | (typeof recentVisits)[0]>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <PatientNavbar />

      <div className="flex">
        <PatientSidebar />

        <main className="flex-1 p-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Patient Dashboard</h1>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="bg-blue-500/20 text-white border-blue-400/30 px-3 py-1">
                  Patient
                </Badge>
              </div>
            </div>

            <Tabs defaultValue="triage" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="triage">Pre-Arrival Triage</TabsTrigger>
                <TabsTrigger value="visits">ED Visits</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="profile">My Profile</TabsTrigger>
              </TabsList>

              <TabsContent value="triage">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                    <CardHeader>
                      <CardTitle>Virtual AI Triage</CardTitle>
                      <CardDescription className="text-gray-300">
                        Describe your symptoms to get care recommendations
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {!result ? (
                        <form onSubmit={handleSubmitSymptoms}>
                          <div className="grid gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="symptoms">What symptoms are you experiencing?</Label>
                              <Textarea
                                id="symptoms"
                                placeholder="Describe your symptoms in detail..."
                                value={symptoms}
                                onChange={(e) => setSymptoms(e.target.value)}
                                required
                                className="bg-blue-900/50 border-blue-800/50 min-h-[100px]"
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="duration">How long have you been experiencing these symptoms?</Label>
                              <Input
                                id="duration"
                                placeholder="e.g., 2 days, 5 hours"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                                required
                                className="bg-blue-900/50 border-blue-800/50"
                              />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="severity">On a scale of 1-10, how severe are your symptoms?</Label>
                              <Input
                                id="severity"
                                placeholder="Enter a number from 1-10"
                                value={severity}
                                onChange={(e) => setSeverity(e.target.value)}
                                required
                                className="bg-blue-900/50 border-blue-800/50"
                              />
                            </div>
                            <Button type="submit" disabled={loading}>
                              {loading ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Analyzing Symptoms...
                                </>
                              ) : (
                                "Get Care Recommendations"
                              )}
                            </Button>
                          </div>
                        </form>
                      ) : (
                        <div className="space-y-6">
                          <Alert
                            className={
                              result.urgency === "high"
                                ? "bg-red-900/30 border-red-800/50"
                                : result.urgency === "medium"
                                  ? "bg-yellow-900/30 border-yellow-800/50"
                                  : "bg-green-900/30 border-green-800/50"
                            }
                          >
                            <AlertTriangle
                              className={
                                result.urgency === "high"
                                  ? "text-red-400"
                                  : result.urgency === "medium"
                                    ? "text-yellow-400"
                                    : "text-green-400"
                              }
                            />
                            <AlertTitle className="ml-2">
                              {result.urgency === "high"
                                ? "Urgent Care Recommended"
                                : result.urgency === "medium"
                                  ? "Medical Attention Advised"
                                  : "Non-Urgent Care"}
                            </AlertTitle>
                            <AlertDescription className="ml-2">{result.recommendation}</AlertDescription>
                          </Alert>

                          <div>
                            <h3 className="text-lg font-medium mb-3">Nearby Healthcare Facilities</h3>
                            <div className="space-y-4">
                              {result.facilities.map((facility, index) => (
                                <div key={index} className="bg-blue-800/30 p-4 rounded-lg border border-blue-700/50">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h4 className="font-medium">{facility.name}</h4>
                                      <p className="text-sm text-gray-300">{facility.type}</p>
                                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-300">
                                        <MapPin size={14} />
                                        <span>{facility.address}</span>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="flex items-center gap-1 text-sm">
                                        <Clock size={14} />
                                        <span>Wait time: {facility.waitTime}</span>
                                      </div>
                                      <div className="flex items-center gap-1 text-sm mt-1">
                                        <MapIcon size={14} />
                                        <span>Distance: {facility.distance}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-3 flex justify-between">
                                    <Button variant="outline" size="sm" className="text-xs">
                                      View on Map
                                    </Button>
                                    <Button size="sm" className="text-xs">
                                      Pre-Register
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button
                            variant="outline"
                            onClick={() => {
                              setResult(null)
                              setSymptoms("")
                              setDuration("")
                              setSeverity("")
                            }}
                          >
                            Start New Assessment
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                      <CardHeader>
                        <CardTitle>When to Seek Emergency Care</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="text-red-400 mt-1 shrink-0" size={16} />
                            <span>Difficulty breathing or shortness of breath</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="text-red-400 mt-1 shrink-0" size={16} />
                            <span>Chest or upper abdominal pain or pressure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="text-red-400 mt-1 shrink-0" size={16} />
                            <span>Fainting, sudden dizziness, or weakness</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="text-red-400 mt-1 shrink-0" size={16} />
                            <span>Changes in vision or difficulty speaking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="text-red-400 mt-1 shrink-0" size={16} />
                            <span>Confusion or changes in mental status</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="text-red-400 mt-1 shrink-0" size={16} />
                            <span>Any sudden or severe pain</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="text-red-400 mt-1 shrink-0" size={16} />
                            <span>Uncontrolled bleeding</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="text-red-400 mt-1 shrink-0" size={16} />
                            <span>Severe or persistent vomiting or diarrhea</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                      <CardHeader>
                        <CardTitle>Pre-Registration Benefits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={16} />
                            <span>Reduced wait times upon arrival</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={16} />
                            <span>Staff prepared for your specific needs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={16} />
                            <span>Streamlined check-in process</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={16} />
                            <span>Digital consent forms completed in advance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={16} />
                            <span>Improved care coordination</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="visits">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                      <CardHeader>
                        <CardTitle>Recent ED Visits</CardTitle>
                        <CardDescription className="text-gray-300">
                          Your emergency department visit history
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {recentVisits.map((visit) => (
                            <div
                              key={visit.id}
                              className={`p-4 rounded-lg cursor-pointer transition-colors ${
                                selectedVisit?.id === visit.id
                                  ? "bg-blue-700/50 border border-blue-600/50"
                                  : "bg-blue-800/30 border border-blue-700/50 hover:bg-blue-700/30"
                              }`}
                              onClick={() => setSelectedVisit(visit)}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium">{visit.hospital}</h4>
                                  <p className="text-sm text-gray-300">{visit.department}</p>
                                </div>
                                <Badge variant="outline" className="bg-blue-500/20 text-white border-blue-400/30">
                                  {visit.status}
                                </Badge>
                              </div>
                              <div className="mt-2 text-sm text-gray-300">
                                <div className="flex items-center gap-1">
                                  <Calendar size={14} />
                                  <span>{new Date(visit.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                  <FileText size={14} />
                                  <span>{visit.reason}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="md:col-span-2">
                    {selectedVisit ? (
                      <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>Visit Summary</CardTitle>
                              <CardDescription className="text-gray-300">
                                {selectedVisit.hospital} - {new Date(selectedVisit.date).toLocaleDateString()}
                              </CardDescription>
                            </div>
                            <Badge variant="outline" className="bg-blue-500/20 text-white border-blue-400/30">
                              {selectedVisit.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-lg font-medium mb-2">Visit Details</h3>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="text-gray-400">Visit ID</p>
                                  <p>{selectedVisit.id}</p>
                                </div>
                                <div>
                                  <p className="text-gray-400">Date</p>
                                  <p>{new Date(selectedVisit.date).toLocaleDateString()}</p>
                                </div>
                                <div>
                                  <p className="text-gray-400">Hospital</p>
                                  <p>{selectedVisit.hospital}</p>
                                </div>
                                <div>
                                  <p className="text-gray-400">Department</p>
                                  <p>{selectedVisit.department}</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="text-gray-400">Reason for Visit</p>
                                  <p>{selectedVisit.reason}</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-medium mb-2">AI-Generated Summary</h3>
                              <div className="bg-blue-800/30 p-4 rounded-lg border border-blue-700/50">
                                <p className="text-gray-300">{selectedVisit.summary}</p>
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <Button variant="outline">
                                <FileText className="mr-2 h-4 w-4" />
                                Download Full Report
                              </Button>
                              <Button>
                                <MessageSquare className="mr-2 h-4 w-4" />
                                Ask Questions
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50 h-full flex items-center justify-center">
                        <CardContent className="text-center py-12">
                          <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                          <h3 className="text-xl font-medium mb-2">No Visit Selected</h3>
                          <p className="text-gray-300">Select a visit from the list to view details</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notifications">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                      <CardHeader>
                        <CardTitle>Notifications & Updates</CardTitle>
                        <CardDescription className="text-gray-300">
                          Recent communications from your healthcare providers
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`p-4 rounded-lg border ${
                                notification.read
                                  ? "bg-blue-800/30 border-blue-700/50"
                                  : "bg-blue-700/40 border-blue-600/50"
                              }`}
                            >
                              <div className="flex justify-between items-start">
                                <div className="flex gap-3">
                                  <div
                                    className={`p-2 rounded-full ${
                                      notification.type === "document"
                                        ? "bg-purple-500/20"
                                        : notification.type === "appointment"
                                          ? "bg-green-500/20"
                                          : "bg-yellow-500/20"
                                    }`}
                                  >
                                    {notification.type === "document" && <FileText className="h-5 w-5" />}
                                    {notification.type === "appointment" && <Calendar className="h-5 w-5" />}
                                    {notification.type === "medication" && <FileText className="h-5 w-5" />}
                                  </div>
                                  <div>
                                    <h4 className="font-medium">{notification.title}</h4>
                                    <p className="text-sm text-gray-300">{notification.message}</p>
                                  </div>
                                </div>
                                <div className="text-xs text-gray-400">
                                  {new Date(notification.date).toLocaleDateString()}
                                </div>
                              </div>
                              <div className="mt-3 flex justify-end">
                                <Button size="sm" variant="outline" className="text-xs">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="md:col-span-1">
                    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50 mb-6">
                      <CardHeader>
                        <CardTitle>Communication Preferences</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Bell size={16} />
                              <span>Email Notifications</span>
                            </div>
                            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-700">
                              <span className="absolute h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Bell size={16} />
                              <span>SMS Notifications</span>
                            </div>
                            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-700">
                              <span className="absolute h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Bell size={16} />
                              <span>App Notifications</span>
                            </div>
                            <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-700">
                              <span className="absolute h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                      <CardHeader>
                        <CardTitle>Contact Support</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 mb-4">
                          Need help with your notifications or have questions about your care?
                        </p>
                        <Button className="w-full">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Contact Support
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="profile">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                      <CardHeader>
                        <div className="flex flex-col items-center">
                          <Avatar className="h-24 w-24 mb-4">
                            <AvatarImage src="/placeholder.svg?height=96&width=96" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <CardTitle>John Doe</CardTitle>
                          <CardDescription className="text-gray-300">Patient ID: P12345678</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-gray-400">Email</p>
                            <p>john.doe@example.com</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Phone</p>
                            <p>(519) 555-1234</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Date of Birth</p>
                            <p>January 15, 1980</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Health Card Number</p>
                            <p>1234-567-890-XX</p>
                          </div>
                          <div className="pt-4">
                            <Button variant="outline" className="w-full">
                              <Settings className="mr-2 h-4 w-4" />
                              Edit Profile
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="md:col-span-2">
                    <div className="grid gap-6">
                      <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                        <CardHeader>
                          <CardTitle>Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <p className="text-sm text-gray-400">Address</p>
                              <p>123 Main Street</p>
                              <p>Waterloo, ON N2L 3G1</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">Emergency Contact</p>
                              <p>Jane Doe (Spouse)</p>
                              <p>(519) 555-5678</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">Primary Care Physician</p>
                              <p>Dr. Sarah Johnson</p>
                              <p>Waterloo Family Medicine</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400">Preferred Language</p>
                              <p>English</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                        <CardHeader>
                          <CardTitle>Medical Information</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-6">
                            <div>
                              <p className="text-sm text-gray-400 mb-2">Allergies</p>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="bg-red-500/20 text-white border-red-400/30">
                                  Penicillin
                                </Badge>
                                <Badge variant="outline" className="bg-red-500/20 text-white border-red-400/30">
                                  Shellfish
                                </Badge>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400 mb-2">Current Medications</p>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="bg-blue-500/20 text-white border-blue-400/30">
                                  Lisinopril 10mg
                                </Badge>
                                <Badge variant="outline" className="bg-blue-500/20 text-white border-blue-400/30">
                                  Atorvastatin 20mg
                                </Badge>
                                <Badge variant="outline" className="bg-blue-500/20 text-white border-blue-400/30">
                                  Metformin 500mg
                                </Badge>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400 mb-2">Medical Conditions</p>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="outline" className="bg-yellow-500/20 text-white border-yellow-400/30">
                                  Type 2 Diabetes
                                </Badge>
                                <Badge variant="outline" className="bg-yellow-500/20 text-white border-yellow-400/30">
                                  Hypertension
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                        <CardHeader>
                          <CardTitle>Account Settings</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <Button variant="outline" className="w-full">
                              <User className="mr-2 h-4 w-4" />
                              Update Personal Information
                            </Button>
                            <Button variant="outline" className="w-full">
                              <Settings className="mr-2 h-4 w-4" />
                              Change Password
                            </Button>
                            <Button variant="outline" className="w-full">
                              <LogOut className="mr-2 h-4 w-4" />
                              Log Out
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
