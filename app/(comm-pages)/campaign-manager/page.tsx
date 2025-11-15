"use client"

import { useState } from "react"

// --- Imports for Dashboard Layout ---
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menu,
  Bell,
  Settings, 
  Search,
} from "lucide-react";
// --- End Dashboard Imports ---

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
  // --- Icons used in Page Content ---
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

// --- NEW Component: CampaignsPageHeader (from dashboard) ---
function CampaignsPageHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b bg-background px-8 shrink-0">
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle */}
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        
        {/* Welcome Message (Adapted for Campaigns) */}
        <div className="flex min-w-72 flex-col">
          <h1 className="text-3xl font-bold">Campaigns</h1>
          <p className="text-sm text-muted-foreground">
            Create and manage automated outreach sequences.
          </p>
        </div>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search campaigns..."
            className="w-full pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://placehold.co/100x100/E2E8F0/4A5568?text=JL" alt="Jessica Lane" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}


export default function CampaignManagerPage() {
  const [selectedStage, setSelectedStage] = useState("email-1")

  return (
    // --- UPDATED: New Dashboard Layout ---
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
        
        <CampaignsPageHeader />

        <div className="flex flex-1 flex-col overflow-hidden">
          
          {/* Header Bar (Page Specific) */}
          <header className="flex items-center justify-between gap-4 p-4 border-b bg-card z-10 shrink-0">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">Post-Application Follow-up Sequence</h1>
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">Status:</p>
                {/* --- UPDATED: Removed hardcoded yellow to use theme-aware 'secondary' --- */}
                <Badge variant="secondary">
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

          {/* This is the main 2-column layout for the editor */}
          <div className="flex flex-1 overflow-hidden">
            
            {/* Center Canvas/Workflow */}
            <div className="flex-1 overflow-y-auto p-8 relative">
              <div className="max-w-xl mx-auto relative pl-10">
                <div className="absolute left-5 top-5 h-full w-0.5 bg-border -z-10" />
                <div className="flex flex-col gap-6">

                  {/* Trigger Stage */}
                  <div className="relative">
                    <div className="absolute -left-11.5 top-3 flex size-10 items-center justify-center rounded-full bg-background">
                      {/* --- UPDATED: Use 'text-primary' --- */}
                      <PlayCircle className="size-5 text-primary" />
                    </div>
                    <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                      <p className="text-base font-bold">Trigger: Candidate Applies</p>
                      <p className="text-sm text-muted-foreground">
                        For 'Senior Product Designer' job
                      </p>
                    </Card>
                  </div>

                  {/* Email 1 Stage (Selected) */}
                  <div className="relative">
                    <div className="absolute -left-11.5 top-3 flex size-10 items-center justify-center rounded-full bg-background">
                      {/* --- UPDATED: Use 'text-primary' --- */}
                      <Mail className="size-5 text-primary" />
                    </div>
                    <Card
                      className={`p-4 cursor-pointer transition-all ${
                        selectedStage === "email-1"
                          ? "ring-2 ring-primary shadow-lg" // 'ring-primary' uses --color-ring (which is --primary)
                          : "hover:shadow-lg"
                      }`}
                      onClick={() => setSelectedStage("email-1")}
                    >
                      <p className="text-base font-bold">Send Email 1: Application Received</p>
                      <p className="text-sm text-muted-foreground">Template: Welcome Email</p>
                    </Card>
                  </div>
                  
                  {/* Delay Stage */}
                  <div className="relative">
                    <div className="absolute -left-11.5 top-3 flex size-10 items-center justify-center rounded-full bg-background">
                      {/* --- UPDATED: Use 'text-muted-foreground' for neutral icons --- */}
                      <Clock className="size-5 text-muted-foreground" />
                    </div>
                    <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                      <p className="text-base font-bold">Delay: Wait 3 Days</p>
                    </Card>
                  </div>

                  {/* AI Stage */}
                  <div className="relative">
                    <div className="absolute -left-11.5 top-3 flex size-10 items-center justify-center rounded-full bg-background">
                      {/* --- UPDATED: Use 'text-primary' (which is purple in your theme) --- */}
                      <Sparkles className="size-5 text-primary" />
                    </div>
                    <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow">
                      <p className="text-base font-bold">AI Action: Analyze Resume</p>
                      <p className="text-sm text-muted-foreground">
                        Checks for keywords: Figma, Prototyping
                      </p>
                    </Card>
                  </div>

                  {/* SMS Stage (Incomplete) */}
                  <div className="relative">
                    <div className="absolute -left-11.5 top-3 flex size-10 items-center justify-center rounded-full bg-background">
                      {/* --- UPDATED: Use 'text-destructive' for error/warning --- */}
                      <MessageSquare className="size-5 text-destructive" />
                    </div>
                    {/* --- 'destructive' maps to --color-destructive, which is correct --- */}
                    <Card className="p-4 border-destructive/50 cursor-pointer hover:shadow-lg transition-shadow">
                      <p className="text-base font-bold text-destructive">
                        Send SMS: Incomplete
                      </p>
                      <p className="text-sm text-destructive/80">Template missing</p>
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
            <aside className="w-96 border-l bg-card overflow-y-auto p-6 shrink-0">
              {/* --- UPDATED: Replaced hardcoded blue with 'bg-accent' and 'text-primary' --- */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent rounded-lg">
                  <Mail className="size-5 text-primary" />
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
                    {/* --- 'bg-accent' maps to --color-accent --- */}
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

                {/* --- 'bg-accent' and 'text-primary' are correct --- */}
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
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}