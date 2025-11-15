"use client"

import { CheckCircle2, Circle, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ApplicationStatusPage() {
  const progressSteps = [
    {
      title: "Application Received",
      status: "completed",
      date: "Oct 26",
      description: "Completed on Oct 26",
    },
    {
      title: "HR Review",
      status: "completed",
      date: "Nov 2",
      description: "Completed on Nov 2",
    },
    {
      title: "Interview",
      status: "current",
      date: null,
      description: "Current Stage",
    },
    {
      title: "Offer",
      status: "pending",
      date: null,
      description: "Pending",
    },
    {
      title: "Hired",
      status: "pending",
      date: null,
      description: "Pending",
    },
  ]

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="grow">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between border-b bg-card px-4 sm:px-10 py-3">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold tracking-tight">TalentSync</h2>
          </div>
          <div className="flex flex-1 justify-end">
            <a className="text-sm font-medium text-muted-foreground hover:text-foreground" href="#">
              Applied to: Innovate Inc.
            </a>
          </div>
        </header>

        <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:py-12">
          <div className="flex flex-col gap-8">
            {/* Page Heading */}
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-black tracking-tighter sm:text-4xl">
                  Application Status
                </h1>
                <p className="text-base text-muted-foreground">
                  Track your progress for the Senior Product Designer role.
                </p>
              </div>
            </div>

            {/* Application Summary Card */}
            <Card className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-muted-foreground">Applicant Name</p>
                  <p className="text-base font-medium">Jane Doe</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-muted-foreground">Application ID</p>
                  <p className="text-base font-medium">TS-836104</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-muted-foreground">Date Submitted</p>
                  <p className="text-base font-medium">October 26, 2023</p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-muted-foreground">Last Updated</p>
                  <p className="text-base font-medium">November 5, 2023</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
              {/* Left Side: Visual Status Tracker */}
              <div className="lg:col-span-1">
                <h2 className="text-[22px] font-bold tracking-tight pb-4">Your Progress</h2>
                <div className="grid grid-cols-[auto_1fr] gap-x-4">
                  {progressSteps.map((step, index) => (
                    <div key={step.title} className="contents">
                      <div className="flex flex-col items-center gap-1">
                        {step.status === "completed" && (
                          <CheckCircle2 className="size-6 text-green-500" />
                        )}
                        {step.status === "current" && (
                          <div className="relative flex size-6 items-center justify-center">
                            <div className="absolute size-6 rounded-full bg-primary/20"></div>
                            <div className="size-3 rounded-full bg-primary"></div>
                          </div>
                        )}
                        {step.status === "pending" && (
                          <Circle className="size-6 text-muted-foreground" />
                        )}
                        {index < progressSteps.length - 1 && (
                          <div className="w-0.5 grow bg-border min-h-8"></div>
                        )}
                      </div>
                      <div className="flex flex-col pb-6">
                        <p
                          className={`font-medium ${
                            step.status === "current"
                              ? "font-bold text-primary"
                              : step.status === "completed"
                              ? ""
                              : "text-muted-foreground"
                          }`}
                        >
                          {step.title}
                        </p>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Status Details Section */}
              <div className="lg:col-span-2">
                <Card className="border-primary/30 p-6">
                  <h3 className="text-lg font-bold">Interview Stage</h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    Congratulations! You've advanced to the interview stage. This is an opportunity
                    for us to get to know you better and for you to learn more about the team and
                    role.
                  </p>
                  <div className="my-4 h-px w-full bg-border"></div>
                  <h4 className="font-bold">Next Steps</h4>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-muted-foreground">
                    <li>
                      A recruiter will contact you via email to schedule an interview within the
                      next 5 business days.
                    </li>
                    <li>Please ensure your contact information is up to date.</li>
                    <li>
                      Prepare to discuss your previous experience and how it relates to the Senior
                      Product Designer position.
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">Last updated on Nov 5, 2023</p>
                    <a
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      href="#"
                    >
                      Having issues? Contact support
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full border-t bg-card">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-10">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 TalentSync HR. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a className="text-sm text-muted-foreground hover:text-primary" href="#">
                Terms of Service
              </a>
              <a className="text-sm text-muted-foreground hover:text-primary" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
