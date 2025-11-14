"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LayoutGrid,
  Briefcase,
  Users,
  Calendar,
  BarChart3,
  Settings,
  HelpCircle,
  Sparkles,
  Send,
  ChevronRight,
  Link2,
  Mail,
  MessageSquare,
  FileText,
  X,
} from "lucide-react"

const sidebarItems = [
  { icon: LayoutGrid, label: "Dashboard", href: "/dashboard" },
  { icon: Briefcase, label: "Jobs", href: "/jobs" },
  { icon: Users, label: "Candidates", href: "/candidates", active: true },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: BarChart3, label: "Reports", href: "/reports" },
]

export default function ComposeMessagePage() {
  const [messageMode, setMessageMode] = useState<"email" | "sms">("email")

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="flex h-full min-h-screen">
        {/* Side Navigation Bar */}
        <aside className="flex w-64 flex-col border-r bg-card p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-full size-10 flex items-center justify-center">
                <span className="text-primary font-bold text-sm">TS</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-base font-bold">TalentSync HR</h1>
                <p className="text-muted-foreground text-sm">Recruitment Platform</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
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
            </div>
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <Button className="w-full">New Job</Button>
            <div className="flex flex-col gap-1">
              <a
                href="/settings"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                <Settings className="size-5" />
                <p className="text-sm font-medium">Settings</p>
              </a>
              <a
                href="/help"
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent transition-colors"
              >
                <HelpCircle className="size-5" />
                <p className="text-sm font-medium">Help</p>
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 items-center text-sm mb-4">
              <a href="/candidates" className="text-muted-foreground hover:text-primary">
                Candidates
              </a>
              <ChevronRight className="size-4 text-muted-foreground" />
              <a href="/candidates/jane-doe" className="text-muted-foreground hover:text-primary">
                Jane Doe
              </a>
              <ChevronRight className="size-4 text-muted-foreground" />
              <span className="font-medium">New Message</span>
            </div>

            {/* Page Heading */}
            <h1 className="text-3xl font-bold tracking-tight mb-6">New Message to Jane Doe</h1>

            {/* Main Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column: Composition Area */}
              <div className="lg:col-span-2">
                <Card className="p-6">
                  {/* Mode Selector */}
                  <Tabs defaultValue="email" className="w-full max-w-xs mb-6">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="email" onClick={() => setMessageMode("email")}>
                        Email
                      </TabsTrigger>
                      <TabsTrigger value="sms" onClick={() => setMessageMode("sms")}>
                        SMS
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>

                  {/* Recipient & Subject Fields */}
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Label className="text-sm font-medium text-muted-foreground w-16">
                        To:
                      </Label>
                      <div className="flex-1 rounded-lg bg-accent px-3 py-2 text-sm">
                        Jane Doe &lt;jane.doe@example.com&gt;
                      </div>
                    </div>
                    {messageMode === "email" && (
                      <div className="flex items-center gap-2">
                        <Label
                          htmlFor="subject"
                          className="text-sm font-medium text-muted-foreground w-16"
                        >
                          Subject:
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Follow-up regarding our call"
                          className="flex-1"
                        />
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    {/* AI Action Bar */}
                    <div className="flex items-center gap-2 flex-wrap mb-4">
                      <Button variant="default" size="sm" className="gap-2">
                        <Sparkles className="size-4" />
                        Generate with AI
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <FileText className="size-4" />
                        Improve Writing
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <MessageSquare className="size-4" />
                        Adjust Tone
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Button variant="ghost" size="sm" className="gap-2 text-xs">
                        <FileText className="size-3" />
                        Check Typos
                      </Button>
                      <div className="ml-auto">
                        <select className="text-xs border rounded px-2 py-1 bg-background">
                          <option>Interview Invite Template</option>
                          <option>Follow-up Template</option>
                          <option>Rejection Template</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Body */}
                    <Textarea
                      placeholder="Type a goal or use an AI prompt to get started (e.g., 'Draft a follow-up after our first call')."
                      className="min-h-[300px] resize-none"
                    />

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-2 mt-6">
                      <Button variant="ghost">Cancel</Button>
                      <Button variant="outline">Save as Draft</Button>
                      <Button className="gap-2">
                        <Send className="size-4" />
                        Send
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right Column: Candidate Info & History */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                {/* Candidate Card */}
                <Card className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-primary/10 rounded-full size-12 flex items-center justify-center">
                      <span className="text-primary font-bold">JD</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">Jane Doe</h3>
                      <p className="text-xs text-muted-foreground">
                        Senior Software Engineer at TechCorp
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Top Candidate
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Java Expert
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      React
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 pt-3 border-t">
                    <a href="#" className="flex items-center gap-1 text-sm text-primary hover:underline">
                      <Link2 className="size-3" />
                      Portfolio
                    </a>
                    <a href="#" className="flex items-center gap-1 text-sm text-primary hover:underline">
                      <Link2 className="size-3" />
                      LinkedIn
                    </a>
                  </div>
                </Card>

                {/* Communication History */}
                <Card className="p-4">
                  <h3 className="font-bold mb-4">Communication History</h3>
                  <div className="flex flex-col gap-4">
                    <div className="border-l-2 border-blue-500 pl-3">
                      <p className="text-xs text-muted-foreground mb-1">Mar 28, 2024</p>
                      <p className="text-sm font-semibold">Phone Screen Follow-up</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Hi Jane, it was great speaking with you today. I was very...
                      </p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-3">
                      <p className="text-xs text-muted-foreground mb-1">Mar 25, 2024</p>
                      <p className="text-sm font-semibold">Re: Your Application for Senior Engineer</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Hi Jane, thanks for your interest. We'd love to schedule a brief c...
                      </p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-3">
                      <p className="text-xs text-muted-foreground mb-1">Mar 22, 2024</p>
                      <p className="text-sm font-semibold">Application Received</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        This is an automated confirmation that we have received your...
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
