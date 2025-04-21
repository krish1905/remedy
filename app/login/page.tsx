"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Info } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Demo login logic
    setTimeout(() => {
      if (email === "patient@remedy.com" && password === "patient123") {
        router.push("/patient-dashboard")
      } else if (email === "hospital@remedy.com" && password === "hospital123") {
        router.push("/hospital-dashboard")
      } else {
        setError("Invalid credentials. Please try again or use the demo accounts.")
      }
      setLoading(false)
    }, 1000)
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
      <main className="container mx-auto px-4 py-12">
        <Link href="/" className="flex items-center gap-2 text-blue-300 mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="max-w-md mx-auto">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                <CardHeader>
                  <CardTitle>Login to remEDy</CardTitle>
                  <CardDescription className="text-gray-300">Access your healthcare dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin}>
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-blue-900/50 border-blue-800/50"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="bg-blue-900/50 border-blue-800/50"
                        />
                      </div>

                      {error && (
                        <Alert variant="destructive" className="bg-red-900/30 border-red-800/50 text-white">
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <div className="text-sm text-gray-300 mb-4">
                    <p className="mb-2">Demo Accounts:</p>
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <Info size={14} />
                        <p>
                          <strong>Patient:</strong> patient@remedy.com / patient123
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Info size={14} />
                        <p>
                          <strong>Hospital:</strong> hospital@remedy.com / hospital123
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-300">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-blue-300 hover:underline">
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800/50">
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription className="text-gray-300">Enter your information to get started</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-4" onClick={() => router.push("/signup")}>
                    Continue to Sign Up
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
