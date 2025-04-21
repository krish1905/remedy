"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  // Form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    healthCardNumber: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    allergies: "",
    medications: "",
    conditions: "",
    acceptTerms: false,
    acceptPrivacy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (step < 3) {
      setStep(step + 1)
      return
    }

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      router.push("/patient-dashboard")
    }, 1500)
  }

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      router.push("/login")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-bold">
            🌟 remEDy
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <button onClick={goBack} className="flex items-center gap-2 text-blue-300 mb-8">
          <ArrowLeft size={16} />
          {step > 1 ? "Back to Previous Step" : "Back to Login"}
        </button>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
            <CardHeader>
              <CardTitle>Create Your remEDy Account</CardTitle>
              <CardDescription className="text-gray-300">
                Step {step} of 3:{" "}
                {step === 1 ? "Account Information" : step === 2 ? "Personal Details" : "Medical Information"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="bg-blue-900/50 border-blue-800/50"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="bg-blue-900/50 border-blue-800/50"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-blue-900/50 border-blue-800/50"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="bg-blue-900/50 border-blue-800/50"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="bg-blue-900/50 border-blue-800/50"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                          className="bg-blue-900/50 border-blue-800/50"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                          <SelectTrigger className="bg-blue-900/50 border-blue-800/50">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-blue-900/50 border-blue-800/50"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="bg-blue-900/50 border-blue-800/50"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="bg-blue-900/50 border-blue-800/50"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="province">Province</Label>
                        <Select
                          value={formData.province}
                          onValueChange={(value) => handleSelectChange("province", value)}
                        >
                          <SelectTrigger className="bg-blue-900/50 border-blue-800/50">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ON">Ontario</SelectItem>
                            <SelectItem value="BC">British Columbia</SelectItem>
                            <SelectItem value="AB">Alberta</SelectItem>
                            <SelectItem value="QC">Quebec</SelectItem>
                            <SelectItem value="MB">Manitoba</SelectItem>
                            <SelectItem value="SK">Saskatchewan</SelectItem>
                            <SelectItem value="NS">Nova Scotia</SelectItem>
                            <SelectItem value="NB">New Brunswick</SelectItem>
                            <SelectItem value="NL">Newfoundland and Labrador</SelectItem>
                            <SelectItem value="PE">Prince Edward Island</SelectItem>
                            <SelectItem value="YT">Yukon</SelectItem>
                            <SelectItem value="NT">Northwest Territories</SelectItem>
                            <SelectItem value="NU">Nunavut</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="bg-blue-900/50 border-blue-800/50"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="healthCardNumber">Health Card Number</Label>
                      <Input
                        id="healthCardNumber"
                        name="healthCardNumber"
                        value={formData.healthCardNumber}
                        onChange={handleChange}
                        required
                        className="bg-blue-900/50 border-blue-800/50"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="emergencyContactName">Emergency Contact Name</Label>
                        <Input
                          id="emergencyContactName"
                          name="emergencyContactName"
                          value={formData.emergencyContactName}
                          onChange={handleChange}
                          required
                          className="bg-blue-900/50 border-blue-800/50"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="emergencyContactPhone">Emergency Contact Phone</Label>
                        <Input
                          id="emergencyContactPhone"
                          name="emergencyContactPhone"
                          type="tel"
                          value={formData.emergencyContactPhone}
                          onChange={handleChange}
                          required
                          className="bg-blue-900/50 border-blue-800/50"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="allergies">Allergies (if any)</Label>
                      <Input
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        className="bg-blue-900/50 border-blue-800/50"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="medications">Current Medications (if any)</Label>
                      <Input
                        id="medications"
                        name="medications"
                        value={formData.medications}
                        onChange={handleChange}
                        className="bg-blue-900/50 border-blue-800/50"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="conditions">Medical Conditions (if any)</Label>
                      <Input
                        id="conditions"
                        name="conditions"
                        value={formData.conditions}
                        onChange={handleChange}
                        className="bg-blue-900/50 border-blue-800/50"
                      />
                    </div>
                    <div className="space-y-4 mt-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="acceptTerms"
                          checked={formData.acceptTerms}
                          onCheckedChange={(checked) => handleCheckboxChange("acceptTerms", checked as boolean)}
                          required
                        />
                        <label
                          htmlFor="acceptTerms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I accept the Terms of Service
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="acceptPrivacy"
                          checked={formData.acceptPrivacy}
                          onCheckedChange={(checked) => handleCheckboxChange("acceptPrivacy", checked as boolean)}
                          required
                        />
                        <label
                          htmlFor="acceptPrivacy"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          I accept the Privacy Policy and consent to share my health information
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Creating Account..." : step < 3 ? "Continue" : "Create Account"}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <div className="text-sm text-gray-300">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-300 hover:underline">
                  Log in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
