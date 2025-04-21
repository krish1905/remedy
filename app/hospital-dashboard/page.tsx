"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Bell, Calendar, Clock, FileText, Filter, MessageSquare, Search, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import HospitalNavbar from "@/components/hospital-navbar"
import HospitalSidebar from "@/components/hospital-sidebar"

export default function HospitalDashboard() {
  const [selectedPatient, setSelectedPatient] = useState<null | {
    id: string
    name: string
    age: number
    gender: string
    arrivalTime: string
    status: string
    triageLevel: number
    chiefComplaint: string
    waitTime: string
    preRegistered: boolean
  }>(null)

  const patients = [
    {
      id: "P12345",
      name: "John Doe",
      age: 45,
      gender: "Male",
      arrivalTime: "09:15 AM",
      status: "Waiting",
      triageLevel: 3,
      chiefComplaint: "Chest pain and shortness of breath",
      waitTime: "25 min",
      preRegistered: true,
    },
    {
      id: "P12346",
      name: "Sarah Johnson",
      age: 32,
      gender: "Female",
      arrivalTime: "09:30 AM",
      status: "In Triage",
      triageLevel: 2,
      chiefComplaint: "Severe abdominal pain",
      waitTime: "10 min",
      preRegistered: false,
    },
    {
      id: "P12347",
      name: "Michael Brown",
      age: 67,
      gender: "Male",
      arrivalTime: "08:45 AM",
      status: "Waiting",
      triageLevel: 4,
      chiefComplaint: "Sprained ankle",
      waitTime: "45 min",
      preRegistered: true,
    },
    {
      id: "P12348",
      name: "Emily Wilson",
      age: 28,
      gender: "Female",
      arrivalTime: "09:50 AM",
      status: "Pre-Registered",
      triageLevel: 3,
      chiefComplaint: "Migraine headache",
      waitTime: "30 min",
      preRegistered: true,
    },
    {
      id: "P12349",
      name: "Robert Garcia",
      age: 52,
      gender: "Male",
      arrivalTime: "09:05 AM",
      status: "In Treatment",
      triageLevel: 2,
      chiefComplaint: "Difficulty breathing",
      waitTime: "0 min",
      preRegistered: false,
    },
  ]

  const departmentStats = {
    currentPatients: 18,
    waitingRoom: 12,
    inTreatment: 6,
    averageWaitTime: "37 min",
    bedUtilization: 75,
    preRegistered: 8,
  }

  const recentDischarges = [
    {
      id: "D5001",
      name: "Jennifer Adams",
      age: 42,
      dischargeTime: "09:00 AM",
      diagnosis: "Acute bronchitis",
      followUp: "Primary care in 3 days",
    },
    {
      id: "D5002",
      name: "Thomas Lee",
      age: 29,
      dischargeTime: "08:30 AM",
      diagnosis: "Laceration, right hand",
      followUp: "Wound check in 48 hours",
    },
    {
      id: "D5003",
      name: "Maria Rodriguez",
      age: 61,
      dischargeTime: "08:15 AM",
      diagnosis: "Hypertensive urgency",
      followUp: "Cardiology in 1 week",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <HospitalNavbar />

      <div className="flex">
        <HospitalSidebar />

        <main className="flex-1 p-6">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold">Hospital Dashboard</h1>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="bg-blue-500/20 text-white border-blue-400/30 px-3 py-1">
                  Hospital Staff
                </Badge>
              </div>
            </div>

            <Tabs defaultValue="intake" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="intake">Patient Intake</TabsTrigger>
                <TabsTrigger value="dashboard">Department Overview</TabsTrigger>
                <TabsTrigger value="discharge">Discharge Management</TabsTrigger>
                <TabsTrigger value="reports">Reports & Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="intake">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50 mb-6">
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                          <CardTitle>Patient Queue</CardTitle>
                          <CardDescription className="text-gray-300">Current waiting patients</CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Filter className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Search className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {patients.map((patient) => (
                            <div
                              key={patient.id}
                              className={`p-4 rounded-lg cursor-pointer transition-colors ${
                                selectedPatient?.id === patient.id
                                  ? "bg-blue-700/50 border border-blue-600/50"
                                  : "bg-blue-800/30 border border-blue-700/50 hover:bg-blue-700/30"
                              }`}
                              onClick={() => setSelectedPatient(patient)}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium flex items-center gap-2">
                                    {patient.name}
                                    {patient.preRegistered && (
                                      <Badge
                                        variant="outline"
                                        className="bg-green-500/20 text-white border-green-400/30 text-xs"
                                      >
                                        Pre-Registered
                                      </Badge>
                                    )}
                                  </h4>
                                  <p className="text-sm text-gray-300">
                                    {patient.age} y/o {patient.gender}
                                  </p>
                                </div>
                                <Badge
                                  variant="outline"
                                  className={`
                                    ${patient.triageLevel === 1 ? "bg-red-500/20 text-white border-red-400/30" : ""}
                                    ${patient.triageLevel === 2 ? "bg-orange-500/20 text-white border-orange-400/30" : ""}
                                    ${patient.triageLevel === 3 ? "bg-yellow-500/20 text-white border-yellow-400/30" : ""}
                                    ${patient.triageLevel === 4 ? "bg-green-500/20 text-white border-green-400/30" : ""}
                                    ${patient.triageLevel === 5 ? "bg-blue-500/20 text-white border-blue-400/30" : ""}
                                  `}
                                >
                                  Triage {patient.triageLevel}
                                </Badge>
                              </div>
                              <div className="mt-2 text-sm text-gray-300">
                                <div className="flex items-center gap-1">
                                  <Clock size={14} />
                                  <span>Arrived: {patient.arrivalTime}</span>
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                  <AlertTriangle size={14} />
                                  <span className="truncate">{patient.chiefComplaint}</span>
                                </div>
                              </div>
                              <div className="mt-3 flex justify-between items-center">
                                <Badge variant="outline" className="bg-blue-500/20 text-white border-blue-400/30">
                                  {patient.status}
                                </Badge>
                                <div className="text-sm text-gray-300">Wait: {patient.waitTime}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                      <CardHeader>
                        <CardTitle>Pre-Arrival Notifications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="p-4 rounded-lg bg-blue-800/30 border border-blue-700/50">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">New Pre-Registration</h4>
                                <p className="text-sm text-gray-300">Lisa Chen, 34 y/o Female</p>
                              </div>
                              <Badge variant="outline" className="bg-yellow-500/20 text-white border-yellow-400/30">
                                ETA 15 min
                              </Badge>
                            </div>
                            <div className="mt-2 text-sm text-gray-300">
                              <p>Chief complaint: Severe migraine with visual disturbances</p>
                              <p className="mt-1">Triage recommendation: Level 3</p>
                            </div>
                            <div className="mt-3 flex justify-end">
                              <Button size="sm" className="text-xs">
                                View Details
                              </Button>
                            </div>
                          </div>

                          <div className="p-4 rounded-lg bg-blue-800/30 border border-blue-700/50">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">Ambulance Arrival</h4>
                                <p className="text-sm text-gray-300">David Wilson, 72 y/o Male</p>
                              </div>
                              <Badge variant="outline" className="bg-red-500/20 text-white border-red-400/30">
                                ETA 5 min
                              </Badge>
                            </div>
                            <div className="mt-2 text-sm text-gray-300">
                              <p>Chief complaint: Fall with possible hip fracture</p>
                              <p className="mt-1">Triage recommendation: Level 2</p>
                            </div>
                            <div className="mt-3 flex justify-end">
                              <Button size="sm" className="text-xs">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="md:col-span-2">
                    {selectedPatient ? (
                      <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="flex items-center gap-2">
                                {selectedPatient.name}
                                <Badge variant="outline" className="bg-blue-500/20 text-white border-blue-400/30">
                                  {selectedPatient.id}
                                </Badge>
                              </CardTitle>
                              <CardDescription className="text-gray-300">
                                {selectedPatient.age} y/o {selectedPatient.gender} • Arrived at{" "}
                                {selectedPatient.arrivalTime}
                              </CardDescription>
                            </div>
                            <Badge
                              variant="outline"
                              className={`
                                ${selectedPatient.triageLevel === 1 ? "bg-red-500/20 text-white border-red-400/30" : ""}
                                ${selectedPatient.triageLevel === 2 ? "bg-orange-500/20 text-white border-orange-400/30" : ""}
                                ${selectedPatient.triageLevel === 3 ? "bg-yellow-500/20 text-white border-yellow-400/30" : ""}
                                ${selectedPatient.triageLevel === 4 ? "bg-green-500/20 text-white border-green-400/30" : ""}
                                ${selectedPatient.triageLevel === 5 ? "bg-blue-500/20 text-white border-blue-400/30" : ""}
                              `}
                            >
                              Triage Level {selectedPatient.triageLevel}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h3 className="text-lg font-medium mb-3">Patient Information</h3>
                                <div className="bg-blue-800/30 p-4 rounded-lg border border-blue-700/50">
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <p className="text-gray-400">Status</p>
                                      <p>{selectedPatient.status}</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-400">Wait Time</p>
                                      <p>{selectedPatient.waitTime}</p>
                                    </div>
                                    <div className="col-span-2">
                                      <p className="text-gray-400">Chief Complaint</p>
                                      <p>{selectedPatient.chiefComplaint}</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-400">Pre-Registered</p>
                                      <p>{selectedPatient.preRegistered ? "Yes" : "No"}</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-400">Health Card</p>
                                      <p>1234-567-890-XX</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h3 className="text-lg font-medium mb-3">Vital Signs</h3>
                                <div className="bg-blue-800/30 p-4 rounded-lg border border-blue-700/50">
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <p className="text-gray-400">Blood Pressure</p>
                                      <p>138/85 mmHg</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-400">Heart Rate</p>
                                      <p>88 bpm</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-400">Respiratory Rate</p>
                                      <p>18 breaths/min</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-400">Temperature</p>
                                      <p>37.2°C</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-400">Oxygen Saturation</p>
                                      <p>97%</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-400">Pain Level</p>
                                      <p>6/10</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-medium mb-3">Digital Consent Forms</h3>
                              <div className="bg-blue-800/30 p-4 rounded-lg border border-blue-700/50">
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                      <FileText size={16} />
                                      <span>General Consent for Treatment</span>
                                    </div>
                                    <Badge variant="outline" className="bg-green-500/20 text-white border-green-400/30">
                                      Signed
                                    </Badge>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                      <FileText size={16} />
                                      <span>Privacy Policy Acknowledgment</span>
                                    </div>
                                    <Badge variant="outline" className="bg-green-500/20 text-white border-green-400/30">
                                      Signed
                                    </Badge>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                      <FileText size={16} />
                                      <span>Financial Responsibility</span>
                                    </div>
                                    <Badge
                                      variant="outline"
                                      className="bg-yellow-500/20 text-white border-yellow-400/30"
                                    >
                                      Pending
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-medium mb-3">Medical History</h3>
                              <div className="bg-blue-800/30 p-4 rounded-lg border border-blue-700/50">
                                <div className="space-y-3">
                                  <div>
                                    <p className="text-gray-400">Allergies</p>
                                    <p>Penicillin, Shellfish</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-400">Current Medications</p>
                                    <p>Lisinopril 10mg, Atorvastatin 20mg</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-400">Medical Conditions</p>
                                    <p>Hypertension, Type 2 Diabetes</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-400">Previous ED Visits</p>
                                    <p>2 visits in the past year</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <Button>Begin Intake Process</Button>
                              <Button variant="outline">Update Triage Level</Button>
                              <Button variant="outline">View Full Medical Record</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50 h-full flex items-center justify-center">
                        <CardContent className="text-center py-12">
                          <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                          <h3 className="text-xl font-medium mb-2">No Patient Selected</h3>
                          <p className="text-gray-300">Select a patient from the queue to view details</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="dashboard">
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Current Patients</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{departmentStats.currentPatients}</div>
                      <p className="text-sm text-gray-300">Total patients in ED</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Waiting Room</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{departmentStats.waitingRoom}</div>
                      <p className="text-sm text-gray-300">Patients waiting for care</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Average Wait Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{departmentStats.averageWaitTime}</div>
                      <p className="text-sm text-gray-300">From arrival to provider</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Bed Utilization</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{departmentStats.bedUtilization}%</div>
                      <Progress value={departmentStats.bedUtilization} className="h-2 mt-2" />
                    </CardContent>
                  </Card>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                    <CardHeader>
                      <CardTitle>Patient Distribution</CardTitle>
                      <CardDescription className="text-gray-300">Current patients by triage level</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span className="h-3 w-3 rounded-full bg-red-500"></span>
                              <span>Level 1 (Resuscitation)</span>
                            </div>
                            <span>1</span>
                          </div>
                          <Progress value={5} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span className="h-3 w-3 rounded-full bg-orange-500"></span>
                              <span>Level 2 (Emergent)</span>
                            </div>
                            <span>3</span>
                          </div>
                          <Progress value={15} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                              <span>Level 3 (Urgent)</span>
                            </div>
                            <span>7</span>
                          </div>
                          <Progress value={35} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span className="h-3 w-3 rounded-full bg-green-500"></span>
                              <span>Level 4 (Less Urgent)</span>
                            </div>
                            <span>5</span>
                          </div>
                          <Progress value={25} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                              <span>Level 5 (Non-Urgent)</span>
                            </div>
                            <span>2</span>
                          </div>
                          <Progress value={10} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                    <CardHeader>
                      <CardTitle>Staff On Duty</CardTitle>
                      <CardDescription className="text-gray-300">Current department staffing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow className="border-blue-800/50">
                            <TableHead>Role</TableHead>
                            <TableHead>Current</TableHead>
                            <TableHead>Required</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow className="border-blue-800/50">
                            <TableCell>Physicians</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-500/20 text-white border-green-400/30">
                                Optimal
                              </Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow className="border-blue-800/50">
                            <TableCell>Nurses</TableCell>
                            <TableCell>8</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-yellow-500/20 text-white border-yellow-400/30">
                                Understaffed
                              </Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow className="border-blue-800/50">
                            <TableCell>Technicians</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-500/20 text-white border-green-400/30">
                                Optimal
                              </Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow className="border-blue-800/50">
                            <TableCell>Clerks</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-yellow-500/20 text-white border-yellow-400/30">
                                Understaffed
                              </Badge>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="discharge">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                      <CardHeader>
                        <CardTitle>Patients Ready for Discharge</CardTitle>
                        <CardDescription className="text-gray-300">
                          Patients awaiting discharge processing
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow className="border-blue-800/50">
                              <TableHead>Patient</TableHead>
                              <TableHead>Diagnosis</TableHead>
                              <TableHead>Provider</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow className="border-blue-800/50">
                              <TableCell>
                                <div>
                                  <p className="font-medium">James Wilson</p>
                                  <p className="text-sm text-gray-300">42 y/o Male</p>
                                </div>
                              </TableCell>
                              <TableCell>Laceration, left forearm</TableCell>
                              <TableCell>Dr. Martinez</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="bg-yellow-500/20 text-white border-yellow-400/30">
                                  Pending Summary
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button size="sm">Process</Button>
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-blue-800/50">
                              <TableCell>
                                <div>
                                  <p className="font-medium">Sophia Chen</p>
                                  <p className="text-sm text-gray-300">29 y/o Female</p>
                                </div>
                              </TableCell>
                              <TableCell>Acute gastroenteritis</TableCell>
                              <TableCell>Dr. Johnson</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="bg-green-500/20 text-white border-green-400/30">
                                  Ready
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button size="sm">Process</Button>
                              </TableCell>
                            </TableRow>
                            <TableRow className="border-blue-800/50">
                              <TableCell>
                                <div>
                                  <p className="font-medium">Marcus Brown</p>
                                  <p className="text-sm text-gray-300">56 y/o Male</p>
                                </div>
                              </TableCell>
                              <TableCell>Chest pain, non-cardiac</TableCell>
                              <TableCell>Dr. Patel</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="bg-blue-500/20 text-white border-blue-400/30">
                                  Awaiting Tests
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button size="sm" disabled>
                                  Process
                                </Button>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="md:col-span-1">
                    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50 mb-6">
                      <CardHeader>
                        <CardTitle>Recent Discharges</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {recentDischarges.map((discharge) => (
                            <div key={discharge.id} className="p-4 rounded-lg bg-blue-800/30 border border-blue-700/50">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium">{discharge.name}</h4>
                                  <p className="text-sm text-gray-300">{discharge.age} y/o</p>
                                </div>
                                <div className="text-xs text-gray-400">{discharge.dischargeTime}</div>
                              </div>
                              <div className="mt-2 text-sm text-gray-300">
                                <p>
                                  <span className="text-gray-400">Diagnosis:</span> {discharge.diagnosis}
                                </p>
                                <p className="mt-1">
                                  <span className="text-gray-400">Follow-up:</span> {discharge.followUp}
                                </p>
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

                    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                      <CardHeader>
                        <CardTitle>Discharge Tools</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Button className="w-full flex items-center justify-start">
                            <FileText className="mr-2 h-4 w-4" />
                            Generate Discharge Summary
                          </Button>
                          <Button className="w-full flex items-center justify-start">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Patient Instructions
                          </Button>
                          <Button className="w-full flex items-center justify-start">
                            <Calendar className="mr-2 h-4 w-4" />
                            Schedule Follow-up
                          </Button>
                          <Button className="w-full flex items-center justify-start">
                            <Bell className="mr-2 h-4 w-4" />
                            Notify Primary Care
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reports">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                    <CardHeader>
                      <CardTitle>Department Performance</CardTitle>
                      <CardDescription className="text-gray-300">Key metrics for the past 30 days</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span>Average Wait Time</span>
                            </div>
                            <span>32 min</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span>Patient Satisfaction</span>
                            </div>
                            <span>87%</span>
                          </div>
                          <Progress value={87} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span>Left Without Being Seen</span>
                            </div>
                            <span>3.2%</span>
                          </div>
                          <Progress value={32} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span>Door-to-Doctor Time</span>
                            </div>
                            <span>28 min</span>
                          </div>
                          <Progress value={56} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                    <CardHeader>
                      <CardTitle>Patient Volume Trends</CardTitle>
                      <CardDescription className="text-gray-300">ED visits by day of week</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span>Monday</span>
                            </div>
                            <span>78</span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span>Tuesday</span>
                            </div>
                            <span>65</span>
                          </div>
                          <Progress value={65} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span>Wednesday</span>
                            </div>
                            <span>72</span>
                          </div>
                          <Progress value={72} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span>Thursday</span>
                            </div>
                            <span>68</span>
                          </div>
                          <Progress value={68} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span>Friday</span>
                            </div>
                            <span>82</span>
                          </div>
                          <Progress value={82} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span>Saturday</span>
                            </div>
                            <span>95</span>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span>Sunday</span>
                            </div>
                            <span>88</span>
                          </div>
                          <Progress value={88} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
