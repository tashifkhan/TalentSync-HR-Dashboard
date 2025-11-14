"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
  Megaphone,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  PlayCircle,
  Mail,
  Clock,
  Sparkles,
  MessageSquare,
  Check,
  Plus,
  Bold,
  Italic,
  List as ListIcon,
  Link2,
} from "lucide-react"

const sidebarItems = [
  { icon: LayoutGrid, label: "Dashboard", href: "/dashboard" },
  { icon: Briefcase, label: "Jobs", href: "/jobs" },
  { icon: Users, label: "Candidates", href: "/candidates" },
  { icon: Megaphone, label: "Campaigns", href: "/campaigns", active: true },
  { icon: BarChart3, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export default function CampaignManagerPage() {
  const [selectedStage, setSelectedStage] = useState("email-1")

  return (
    <div className="flex h-screen w-full">
      {/* Side Navigation Bar */}
      <aside className="flex flex-col h-full w-64 border-r bg-card p-4 shrink-0">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary/10 rounded-full size-10 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">TS</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold">TalentSync HR</h1>
            <p className="text-muted-foreground text-sm">Recruitment Platform</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 grow">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? "bg-primary/20 text-primary font-bold"
                  : "hover:bg-accent"
              }`}
            >
              <item.icon className="size-5" />
              <p className="text-sm font-medium">{item.label}</p>
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-2">
          <Button className="w-full">Create New Job</Button>
          <a
            href="/help"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
          >
            <HelpCircle className="size-5" />
            <p className="text-sm font-medium">Help Center</p>
          </a>
          <a
            href="/logout"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
          >
            <LogOut className="size-5" />
            <p className="text-sm font-medium">Log Out</p>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header Bar */}
        <header className="flex items-center justify-between gap-4 p-4 border-b bg-card z-10">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Post-Application Follow-up Sequence</h1>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">Status:</p>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                Draft
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Back to Campaigns</Button>
            <Button className="gap-2">
              <Check className="size-4" />
              Save Campaign
            </Button>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Center Canvas/Workflow */}
          <div className="flex-1 overflow-y-auto p-8 relative">
            <div className="max-w-xl mx-auto">
              {/* Timeline */}
              <div className="grid grid-cols-[40px_1fr] gap-x-4">
                {/* Trigger Stage */}
                <div className="flex flex-col items-center gap-1 pt-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full text-green-600 dark:text-green-300">
                    <PlayCircle className="size-5" />
                  </div>
                  <div className="w-[2px] bg-border h-full"></div>
                </div>
                <div className="flex-1 flex flex-col py-3">
                  <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                    <p className="text-base font-bold">Trigger: Candidate Applies</p>
                    <p className="text-sm text-muted-foreground">
                      For 'Senior Product Designer' job
                    </p>
                  </Card>
                </div>

                {/* Email 1 Stage (Selected) */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[2px] bg-border h-2"></div>
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                    <Mail className="size-5" />
                  </div>
                  <div className="w-[2px] bg-border h-full"></div>
                </div>
                <div className="flex-1 flex flex-col py-3">
                  <Card
                    className={`p-4 cursor-pointer transition-all ${
                      selectedStage === "email-1"
                        ? "ring-2 ring-primary shadow-lg"
                        : "hover:shadow-lg"
                    }`}
                    onClick={() => setSelectedStage("email-1")}
                  >
                    <p className="text-base font-bold">Send Email 1: Application Received</p>
                    <p className="text-sm text-muted-foreground">Template: Welcome Email</p>
                  </Card>
                </div>

                {/* Delay Stage */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[2px] bg-border h-2"></div>
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-muted-foreground">
                    <Clock className="size-5" />
                  </div>
                  <div className="w-[2px] bg-border h-full"></div>
                </div>
                <div className="flex-1 flex flex-col py-3">
                  <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                    <p className="text-base font-bold">Delay: Wait 3 Days</p>
                  </Card>
                </div>

                {/* AI Stage */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[2px] bg-border h-2"></div>
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full text-purple-600 dark:text-purple-300">
                    <Sparkles className="size-5" />
                  </div>
                  <div className="w-[2px] bg-border h-full"></div>
                </div>
                <div className="flex-1 flex flex-col py-3">
                  <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                    <p className="text-base font-bold">AI Action: Analyze Resume</p>
                    <p className="text-sm text-muted-foreground">
                      Checks for keywords: Figma, Prototyping
                    </p>
                  </Card>
                </div>

                {/* SMS Stage (Incomplete) */}
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[2px] bg-border h-2"></div>
                  <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-full text-orange-600 dark:text-orange-300">
                    <MessageSquare className="size-5" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col py-3">
                  <Card className="p-4 border-red-200 dark:border-red-800 cursor-pointer hover:shadow-lg transition-shadow">
                    <p className="text-base font-bold text-red-600 dark:text-red-400">
                      Send SMS: Incomplete
                    </p>
                    <p className="text-sm text-red-500 dark:text-red-400">Template missing</p>
                  </Card>
                </div>
              </div>

              {/* Add Stage Button */}
              <div className="flex justify-center mt-8">
                <Button size="lg" className="rounded-full gap-2">
                  <Plus className="size-5" />
                  Add Stage
                </Button>
              </div>
            </div>
          </div>

          {/* Right Panel: Stage Editor */}
          <aside className="w-96 border-l bg-card overflow-y-auto p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Mail className="size-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-lg font-bold">Edit Email Stage</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  defaultValue="Thank You for Your Application to {{job_title}}"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="template">Template</Label>
                <Select defaultValue="welcome">
                  <SelectTrigger id="template" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="welcome">Welcome Email</SelectItem>
                    <SelectItem value="follow-up">Follow-up Email</SelectItem>
                    <SelectItem value="interview">Interview Invite</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Message</Label>
                <div className="mt-2 border rounded-lg">
                  <div className="flex items-center gap-1 p-2 border-b bg-accent/50">
                    <Button variant="ghost" size="icon" className="size-8">
                      <Bold className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-8">
                      <Italic className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-8">
                      <ListIcon className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-8">
                      <Link2 className="size-4" />
                    </Button>
                  </div>
                  <Textarea
                    defaultValue={`Hi {{candidate_name}},

Thank you for your interest in the {{job_title}} position at our company. We've received your application and our team will review it shortly.

We appreciate you taking the time to apply.

Best regards,`}
                    className="min-h-[200px] border-0 focus-visible:ring-0"
                  />
                </div>
              </div>

              <Card className="p-4 bg-accent/50">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="size-5 text-primary" />
                  <h3 className="font-bold">AI Assistant</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    Improve Writing
                  </Button>
                  <Button variant="outline" size="sm">
                    Generate Subject
                  </Button>
                  <Button variant="outline" size="sm">
                    Make it shorter
                  </Button>
                  <Button variant="outline" size="sm">
                    Change Tone
                  </Button>
                </div>
              </Card>

              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1">
                  Delete Stage
                </Button>
                <Button className="flex-1">Save Changes</Button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
