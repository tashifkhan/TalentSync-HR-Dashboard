"use client"

import { useState } from "react"

// --- Imports for Dashboard Layout ---
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Settings } from "lucide-react"; 
// --- End Dashboard Imports ---

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; 
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
  Plus, 
} from "lucide-react"
import { SiteHeader } from "@/components/site-header";

// --- MOCK DATA (UNCHANGED) ---
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
];

const categories = [
  { id: "all", icon: LayoutGrid, label: "All Templates" },
  { id: "screening", icon: Mail, label: "Screening" },
  { id: "interviewing", icon: Calendar, label: "Interviewing" },
  { id: "offer", icon: FileText, label: "Offer Stage" },
  { id: "onboarding", icon: UserPlus, label: "Onboarding" },
];


// --- UPDATED COMPONENT: TemplateSubNav ---
function TemplateSubNav() {
  return (
    <Card className="p-4">
      {/* --- UPDATED: Layout to include search --- */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* --- ADDED: Search Bar --- */}
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Search templates..." className="pl-9" />
        </div>

        <Tabs defaultValue="all" className="w-full md:w-auto">
          <TabsList className="w-full md:w-auto overflow-x-auto justify-start">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="gap-2">
                <category.icon className="size-4" />
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        {/* --- UPDATED: Button pushed to the right on desktop --- */}
        <Button className="w-full md:w-auto gap-2 shrink-0 md:ml-auto">
          <Plus className="size-4" />
          Create New Template
        </Button>
      </div>
    </Card>
  )
}


export default function TemplateLibraryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>("phone-screen")

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      
      <SidebarInset>
        
        <SiteHeader header="Template Library" />

        <main className="grow w-full flex-1 overflow-y-auto p-6">
          
          <TemplateSubNav />

          {/* --- UPDATED: Main Grid --- */}
          {/* --- REMOVED: Old 12-col grid, replaced with flex --- */}
          <div className="flex flex-col xl:flex-row gap-6 mt-6">

            {/* --- REMOVED: Old sticky <aside> column --- */}

            {/* Center Column: Template Library */}
            <section className="flex-1 flex flex-col gap-6">
              {/* --- STYLING UNCHANGED --- */}
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

              {/* Template Cards Grid --- STYLING UNCHANGED --- */}
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

            {/* Right Column: Template Editor --- UPDATED: Width classes --- */}
            <aside className="w-full xl:w-2/5 shrink-0 flex flex-col gap-6">
              <Card className="p-6">
                {/* --- STYLING UNCHANGED --- */}
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
            
          </div> {/* --- End of Main Flex Wrapper --- */}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}