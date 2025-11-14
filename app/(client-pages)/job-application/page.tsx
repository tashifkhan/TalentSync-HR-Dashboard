"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, ArrowRight, ArrowLeft } from "lucide-react"

export default function JobApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      <div className="flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-1 justify-center py-5 sm:py-10">
          <div className="flex flex-col max-w-[960px] flex-1 gap-8">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-4 items-center">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight">
                  Senior Product Designer
                </h1>
                <p className="text-muted-foreground text-base font-normal">
                  Innovatech Inc. / Design / Remote
                </p>
              </div>
              <div className="bg-primary/10 rounded-lg size-12 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">IT</span>
              </div>
            </div>

            {/* Progress Bar */}
            <Card className="p-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-6 justify-between">
                  <p className="text-base font-medium">
                    Step {currentStep} of {totalSteps}: Personal Details
                  </p>
                  <p className="text-muted-foreground text-base font-medium">{progress}%</p>
                </div>
                <div className="rounded-full bg-secondary h-2">
                  <div
                    className="h-2 rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </Card>

            {/* Form Section */}
            <Card className="flex flex-col">
              {/* Section 1: Personal & Contact Information */}
              <div className="border-b">
                <h2 className="text-[22px] font-bold leading-tight tracking-tight px-6 pb-3 pt-5">
                  Personal & Contact Information
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <div className="col-span-1 md:col-span-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <Input
                      id="linkedin"
                      placeholder="linkedin.com/in/yourprofile"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="portfolio">Portfolio/Website</Label>
                    <Input
                      id="portfolio"
                      placeholder="your-portfolio.com"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Resume & Experience */}
              <div className="border-t border-b">
                <h2 className="text-[22px] font-bold leading-tight tracking-tight px-6 pb-3 pt-5">
                  Resume & Experience
                </h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-2">
                  <Label>Upload Resume</Label>
                  <div className="relative flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-accent/10 p-8 text-center transition-colors hover:border-primary hover:bg-primary/5">
                    <Upload className="size-8 text-muted-foreground mb-2" />
                    <p className="font-medium">Drag & drop your file here</p>
                    <p className="text-muted-foreground text-sm">or click to browse</p>
                    <p className="text-muted-foreground text-xs mt-2">
                      PDF, DOCX, TXT up to 5MB
                    </p>
                    <input
                      className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
                      type="file"
                      accept=".pdf,.docx,.txt"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Custom Questions */}
              <div className="border-t border-b">
                <h2 className="text-[22px] font-bold leading-tight tracking-tight px-6 pb-3 pt-5">
                  Questions
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <Label htmlFor="salary">What are your salary expectations? (Annual)</Label>
                  <Input
                    id="salary"
                    placeholder="e.g., $120,000"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="experience">
                    Describe your experience with Figma and other design tools.
                  </Label>
                  <Textarea
                    id="experience"
                    placeholder="Share your expertise and proficiency..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-wrap justify-between gap-4 p-6 border-t">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="gap-2"
                >
                  <ArrowLeft className="size-4" />
                  Back
                </Button>
                <Button
                  size="lg"
                  onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                  className="gap-2"
                >
                  {currentStep === totalSteps ? "Submit Application" : "Next Step"}
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
