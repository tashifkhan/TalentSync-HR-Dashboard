"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  LayoutGrid,
  List,
  Mail,
  MessageSquare,
  Calendar,
  FileText,
  UserPlus,
  CheckCircle2,
  MessageCircle,
  FileCheck,
  XCircle,
  Bell,
  Copy,
  Trash2,
  Eye,
  Sparkles,
  Bold,
  Italic,
  Underline,
  Link2,
} from "lucide-react"

export default function TemplateLibraryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>("phone-screen")

  const templates = [
    {
      id: "app-ack",
      title: "Application Acknowledged",
      description: "Auto-reply to confirm receipt of a candidate's application.",
      icon: Mail,
      color: "blue",
      lastEdited: "2 days ago",
    },
    {
      id: "phone-screen",
      title: "Phone Screen Invitation",
      description: "Invite a promising candidate to an initial phone screening.",
      icon: MessageSquare,
      color: "blue",
      lastEdited: "1 week ago",
    },
    {
      id: "final-interview",
      title: "Final Interview Confirmation",
      description: "Confirm details for a candidate's final round interview.",
      icon: Calendar,
      color: "blue",
      lastEdited: "1 month ago",
    },
    {
      id: "sms-reminder",
      title: "SMS Interview Reminder",
      description: "A brief text message reminder sent 24 hours before an interview.",
      icon: MessageCircle,
      color: "green",
      lastEdited: "4 days ago",
    },
    {
      id: "offer-letter",
      title: "Offer Letter",
      description: "Extend a formal job offer to a successful candidate.",
      icon: FileCheck,
      color: "green",
      lastEdited: "2 weeks ago",
    },
    {
      id: "rejection",
      title: "Rejection Notice",
      description: "A respectful rejection email for candidates not moving forward.",
      icon: XCircle,
      color: "yellow",
      lastEdited: "5 days ago",
    },
  ]

  const categories = [
    { icon: LayoutGrid, label: "All Templates", active: true },
    { icon: Mail, label: "Screening" },
    { icon: Calendar, label: "Interviewing" },
    { icon: FileText, label: "Offer Stage" },
    { icon: UserPlus, label: "Onboarding" },
  ]

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between border-b px-6 py-3 bg-card sticky top-0 z-20">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight">TalentSync HR</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Dashboard
            </a>
            <a href="/jobs" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Jobs
            </a>
            <a href="/candidates" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Candidates
            </a>
            <a href="/templates" className="text-sm font-bold text-primary">
              Templates
            </a>
            <a href="/analytics" className="text-sm font-medium text-muted-foreground hover:text-primary">
              Analytics
            </a>
          </nav>
        </div>
        <div className="flex flex-1 justify-end gap-3">
          <Button>Post a Job</Button>
          <Button variant="ghost" size="icon">
            <Bell className="size-5" />
          </Button>
          <div className="bg-primary/10 rounded-full size-10 flex items-center justify-center">
            <span className="text-primary font-semibold text-sm">U</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="grow w-full">
        <div className="grid grid-cols-12 gap-6 h-full p-6">
          {/* Left Column: Navigation/Filter Panel */}
          <aside className="col-span-12 lg:col-span-3 xl:col-span-2 bg-card rounded-xl border p-4 flex flex-col h-fit sticky top-24">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-9" />
              </div>
              <nav className="flex flex-col gap-1 mt-2">
                {categories.map((category) => (
                  <a
                    key={category.label}
                    href="#"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      category.active
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-accent text-foreground"
                    }`}
                  >
                    <category.icon className="size-5" />
                    <p className="text-sm font-semibold">{category.label}</p>
                  </a>
                ))}
              </nav>
              <div className="border-t my-2"></div>
              <Button className="w-full">Create New Template</Button>
            </div>
          </aside>

          {/* Center Column: Template Library */}
          <section className="col-span-12 lg:col-span-9 xl:col-span-6 flex flex-col gap-6">
            <div className="flex flex-wrap justify-between gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-black tracking-tight">Template Library</h1>
                <p className="text-muted-foreground text-base">
                  Create and manage automated email and SMS communications.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-muted-foreground text-sm font-medium">Showing 6 templates</p>
              <div className="flex gap-2">
                <div className="flex gap-1 bg-accent p-1 rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="icon"
                    className="size-8"
                    onClick={() => setViewMode("grid")}
                  >
                    <LayoutGrid className="size-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="icon"
                    className="size-8"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="size-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Template Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templates.map((template) => (
                <Card
                  key={template.id}
                  className={`p-4 flex flex-col gap-3 cursor-pointer transition-all hover:shadow-lg ${
                    selectedTemplate === template.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-bold">{template.title}</h3>
                      <p className="text-muted-foreground text-sm">{template.description}</p>
                    </div>
                    <div className={`p-2 rounded-lg bg-${template.color}-100 dark:bg-${template.color}-900/30`}>
                      <template.icon className={`size-5 text-${template.color}-600 dark:text-${template.color}-400`} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Last edited: {template.lastEdited}</span>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="size-6">
                        <Copy className="size-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-6">
                        <Trash2 className="size-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Right Column: Template Editor */}
          <aside className="col-span-12 xl:col-span-4 flex flex-col gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Edit Template</h2>
                <div className="flex gap-2">
                  <Button size="sm">Edit</Button>
                  <Button variant="outline" size="sm">
                    <Eye className="size-4" />
                    Preview
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <Label htmlFor="template-name">Template Name</Label>
                  <Input
                    id="template-name"
                    defaultValue="Phone Screen Invitation"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject Line</Label>
                  <Input
                    id="subject"
                    defaultValue="Invitation to Interview for the {job_title} rol"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Body</Label>
                  <div className="mt-2 border rounded-lg">
                    <div className="flex items-center gap-1 p-2 border-b bg-accent/50">
                      <Button variant="ghost" size="icon" className="size-8">
                        <Bold className="size-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-8">
                        <Italic className="size-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-8">
                        <Underline className="size-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-8">
                        <Link2 className="size-4" />
                      </Button>
                    </div>
                    <Textarea
                      defaultValue={`Hi {candidate_name},

Thank you for your interest in the {job_title} position at {company_name}. We were impressed with your background and would like to invite you for a 30-minute phone screen to discuss your experience further.

Please let us know what times work best for you.`}
                      className="min-h-[200px] border-0 focus-visible:ring-0"
                    />
                  </div>
                </div>

                <div className="bg-accent/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="size-5 text-primary" />
                    <p className="font-bold text-primary">AI Assist</p>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    Enhance your message with AI-powered suggestions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      Improve Tone
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      Make Shorter
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Dynamic Fields</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">{"{candidate_name}"}</Badge>
                    <Badge variant="secondary">{"{job_title}"}</Badge>
                    <Badge variant="secondary">{"{company_name}"}</Badge>
                    <Badge variant="secondary">{"{interview_date}"}</Badge>
                    <Badge variant="secondary">{"{recruiter_name}"}</Badge>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline" className="flex-1">
                    Cancel
                  </Button>
                  <Button className="flex-1">Save Template</Button>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}
