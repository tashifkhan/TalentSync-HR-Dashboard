"use client"

import { useState } from "react"

// --- Imports for Dashboard Layout ---
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Bell, Search } from "lucide-react"; // <-- Imports for new header
// --- End Dashboard Imports ---

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  // --- Old Sidebar Icons (Removed) ---
  // LayoutGrid,
  // Briefcase,
  // Users,
  // Calendar,
  // BarChart3,
  // HelpCircle,
  
  // --- Icons used in Page Content (Kept) ---
  Settings,
  Sparkles,
  Send,
  ChevronRight,
  Link2,
  Mail,
  MessageSquare,
  FileText,
  X,
} from "lucide-react"

// const sidebarItems = [ ... ] // <-- REMOVED

// --- NEW Component: ComposeMessageHeader (from dashboard) ---
function ComposeMessageHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b bg-background px-8 shrink-0">
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle */}
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        
        {/* Welcome Message (Adapted for Candidates) */}
        <div className="flex min-w-72 flex-col">
          <h1 className="text-3xl font-bold">Candidates</h1>
          <p className="text-sm text-muted-foreground">
            View and manage candidate profiles and logs.
          </p>
        </div>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search candidates..."
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


export default function ComposeMessagePage() {
  const [messageMode, setMessageMode] = useState<"email" | "sms">("email")

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
      {/* --- ADDED: New AppSidebar --- */}
      <AppSidebar variant="inset" />
      
      {/* --- REMOVED: Old Sidebar Navigation --- */}
      {/* <aside> ... </aside> */}

      {/* --- ADDED: New SidebarInset Wrapper --- */}
      <SidebarInset>

        {/* --- ADDED: New Global Sticky Header --- */}
        <ComposeMessageHeader />

        {/* --- UPDATED: Main content now fills remaining space and scrolls --- */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* Breadcrumbs (Styling is theme-aware) */}
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

            {/* Page Heading (Styling is theme-aware) */}
            <h1 className="text-3xl font-bold tracking-tight mb-6">New Message to Jane Doe</h1>

            {/* Main Interface (Styling is theme-aware) */}
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
                  {/* --- UPDATED: Replaced hardcoded colors with theme variables --- */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                      Top Candidate
                    </Badge>
                    <Badge variant="secondary">
                      Java Expert
                    </Badge>
                    <Badge variant="secondary">
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
                    {/* --- UPDATED: Replaced hardcoded colors with theme variables --- */}
                    <div className="border-l-2 border-primary pl-3">
                      <p className="text-xs text-muted-foreground mb-1">Mar 28, 2024</p>
                      <p className="text-sm font-semibold">Phone Screen Follow-up</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Hi Jane, it was great speaking with you today. I was very...
                      </p>
                    </div>
                    <div className="border-l-2 border-border pl-3">
                      <p className="text-xs text-muted-foreground mb-1">Mar 25, 2024</p>
                      <p className="text-sm font-semibold">Re: Your Application for Senior Engineer</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Hi Jane, thanks for your interest. We'd love to schedule a brief c...
                      </p>
                    </div>
                    <div className="border-l-2 border-border pl-3">
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

      </SidebarInset>
    </SidebarProvider>
  )
}