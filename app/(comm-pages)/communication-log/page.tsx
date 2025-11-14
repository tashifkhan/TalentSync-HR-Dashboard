"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  LayoutGrid,
  Briefcase,
  Users,
  Calendar,
  BarChart3,
  Settings,
  HelpCircle,
  Search,
  ChevronDown,
  MessageSquare,
  Mail,
  Phone,
  Sparkles,
  CalendarClock,
  FileText,
  ArrowRightLeft,
} from "lucide-react"

const sidebarItems = [
  { icon: LayoutGrid, label: "Dashboard", href: "/dashboard" },
  { icon: Briefcase, label: "Jobs", href: "/jobs" },
  { icon: Users, label: "Candidates", href: "/candidates", active: true },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
]

export default function CommunicationLogPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  return (
    <div className="flex min-h-screen">
      {/* Side Navigation Bar */}
      <aside className="flex w-64 flex-col border-r bg-card p-4 shrink-0">
        <div className="flex flex-col gap-3">
          <div className="bg-primary/10 rounded-full size-10 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">TS</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-medium">TalentSync HR</h1>
            <p className="text-muted-foreground text-sm">Recruitment Platform</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 mt-8">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-accent text-foreground"
              }`}
            >
              <item.icon className="size-5" />
              <p className="text-sm font-medium">{item.label}</p>
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-4">
          <Button className="w-full">Create New Job</Button>
          <div className="flex flex-col gap-1">
            <a
              href="/settings"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent text-foreground transition-colors"
            >
              <Settings className="size-5" />
              <p className="text-sm font-medium">Settings</p>
            </a>
            <a
              href="/help"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent text-foreground transition-colors"
            >
              <HelpCircle className="size-5" />
              <p className="text-sm font-medium">Help</p>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Page Heading */}
          <header className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 rounded-full size-16 flex items-center justify-center shrink-0">
                <span className="text-primary font-bold text-xl">AS</span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                  Ananya Sharma - Communication Log
                </h1>
                <p className="text-muted-foreground text-base">
                  Interviewing for Senior Developer
                </p>
              </div>
            </div>
          </header>

          {/* Filter & Search Bar */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
              <Input
                placeholder="Search for keywords..."
                className="pl-10 h-12"
              />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="h-12 w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="sms">SMS</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="email">
                <SelectTrigger className="h-12 w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="received">Received</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="sms">
                <SelectTrigger className="h-12 w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sms">SMS</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="received">Received</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Timeline/Log Area */}
          <div className="flex flex-col gap-6">
            <div className="text-center py-2 text-sm text-muted-foreground font-medium">
              Today
            </div>

            {/* Incoming SMS */}
            <div className="flex items-start gap-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 shrink-0">
                <MessageSquare className="size-5 text-blue-600 dark:text-blue-400" />
              </div>
              <Card className="flex-1 p-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold">Incoming SMS</p>
                  <p className="text-xs text-muted-foreground">Today, 9:41 AM</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Thank you for the update! Looking forward to it."
                </p>
              </Card>
            </div>

            {/* Outgoing Email */}
            <div className="flex items-start gap-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 shrink-0">
                <Mail className="size-5 text-green-600 dark:text-green-400" />
              </div>
              <Card className="flex-1 p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <p className="font-semibold">
                      Outgoing Email: 'Interview Confirmation for Senior Developer'
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Sent by John Doe</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ChevronDown className="size-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Yesterday, 3:15 PM</p>
              </Card>
            </div>

            <div className="text-center py-2 text-sm text-muted-foreground font-medium">
              October 24, 2023
            </div>

            {/* AI System Note */}
            <div className="flex items-start gap-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50 shrink-0">
                <Sparkles className="size-5 text-purple-600 dark:text-purple-400" />
              </div>
              <Card className="flex-1 p-4 border-purple-200 dark:border-purple-800">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-semibold">AI System Note</p>
                  <p className="text-xs text-muted-foreground">Oct 24, 11:00 AM</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Automated follow-up email scheduled for 3 days from now.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-1 flex flex-col gap-6">
          {/* Compose Button */}
          <Button size="lg" className="w-full gap-2">
            <Mail className="size-4" />
            Compose
          </Button>

          {/* AI Summary */}
          <Card className="p-4 bg-accent/50 border-accent relative">
            <button className="absolute top-2 right-2 text-muted-foreground hover:text-foreground">
              ×
            </button>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="size-5 text-primary" />
              <h3 className="font-bold text-primary">AI Summary</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Candidate is highly engaged, last contacted yesterday regarding interview
              scheduling. Sentiment is positive.
            </p>
          </Card>

          {/* Candidate Details */}
          <Card className="p-4">
            <h3 className="font-bold mb-4">Candidate Details</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-muted-foreground" />
                <span>ananya.sharma@email.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-muted-foreground" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Briefcase className="size-4 text-muted-foreground" />
                <span>Senior Software Engineer at TechCorp</span>
              </div>
            </div>
            <Button variant="link" className="mt-4 p-0 h-auto text-primary">
              View Full Profile
            </Button>
          </Card>

          {/* Quick Actions */}
          <Card className="p-4">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full justify-start gap-2">
                <CalendarClock className="size-4" />
                Schedule Interview
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <FileText className="size-4" />
                Add Note
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2">
                <ArrowRightLeft className="size-4" />
                Move to Next Stage
              </Button>
            </div>
          </Card>
        </aside>
      </main>
    </div>
  )
}
