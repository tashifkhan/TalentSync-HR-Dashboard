"use client";

import { useState } from "react";

// --- Imports for Dashboard Layout ---
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Bell } from "lucide-react"; 
// --- End Dashboard Imports ---

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LayoutGrid,
  Type,
  AlignLeft,
  CheckSquare,
  Circle,
  ChevronDown,
  Calendar,
  Upload,
  PenTool,
  Sparkles,
  Settings,
  MoreHorizontal,
  Plus,
  Search, // <-- Added
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

// --- NEW Component: FormBuilderHeader (from dashboard) ---
function FormBuilderHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b bg-background px-8 shrink-0">
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle */}
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        
        {/* Welcome Message (Adapted for Form Builder) */}
        <div className="flex min-w-72 flex-col">
          <h1 className="text-3xl font-bold">Form Builder</h1>
          <p className="text-sm text-muted-foreground">
            Create and manage custom application forms.
          </p>
        </div>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search forms..."
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

// --- MOCK DATA (UNCHANGED) ---
const standardFields = [
  { icon: Type, label: "Text Input" },
  { icon: AlignLeft, label: "Paragraph" },
  { icon: CheckSquare, label: "Checkboxes" },
  { icon: Circle, label: "Radio" },
  { icon: ChevronDown, label: "Dropdown" },
  { icon: Calendar, label: "Date" },
];

const advancedFields = [
  { icon: Upload, label: "File Upload" },
  { icon: PenTool, label: "E-Signature" },
];

export default function FormBuilderPage() {
  const [selectedField, setSelectedField] = useState<string | null>(null);

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
      
      {/* --- ADDED: New SidebarInset Wrapper --- */}
      <SidebarInset>
        
        {/* --- ADDED: New Global Sticky Header --- */}
        <SiteHeader />

        {/* --- UPDATED: Main 3-column layout now fills remaining space --- */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* --- REMOVED: Old <header> --- */}

          {/* Left Sidebar (Page Specific) */}
          <aside className="w-64 flex-shrink-0 rounded-bl-lg bg-card border-r p-4 flex flex-col gap-6 overflow-y-auto">
            <h1 className="text-base font-medium px-2">Form Builder</h1>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary cursor-pointer">
                <LayoutGrid className="size-5" />
                <p className="text-sm font-medium">Fields</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                <Sparkles className="size-5" />
                <p className="text-sm font-medium">AI Assistant</p>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent cursor-pointer text-muted-foreground hover:text-foreground transition-colors">
                <Settings className="size-5" />
                <p className="text-sm font-medium">Settings</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Standard Fields
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {standardFields.map((field) => (
                  <div
                    key={field.label}
                    className="flex flex-col items-center gap-2 p-2 rounded-lg border bg-card hover:bg-primary/10 hover:border-primary/50 cursor-grab transition-all"
                    draggable
                  >
                    <field.icon className="size-5 text-muted-foreground" />
                    <span className="text-xs text-center">{field.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Advanced Fields
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {advancedFields.map((field) => (
                  <div
                    key={field.label}
                    className="flex flex-col items-center gap-2 p-2 rounded-lg border bg-card hover:bg-primary/10 hover:border-primary/50 cursor-grab transition-all"
                    draggable
                  >
                    <field.icon className="size-5 text-muted-foreground" />
                    <span className="text-xs text-center">{field.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Canvas */}
          <main className="flex-1 bg-background overflow-y-auto">
            <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
              {/* Page Heading */}
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-2">
                  <p className="tracking-tight text-[32px] font-bold">
                    Senior Software Engineer - Pre-Screening
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="rounded-full">
                      Draft
                    </Badge>
                  </div>
                </div>
                {/* --- ADDED: Page-specific actions, moved from old header --- */}
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="default">
                    Preview
                  </Button>
                  <Button variant="secondary" size="default">
                    Save
                  </Button>
                  <Button variant="default" size="default">
                    Publish
                  </Button>
                </div>
              </div>

              {/* Form Canvas */}
              <div className="space-y-8 mt-4">
                {/* Empty State */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-border px-6 py-14">
                    <div className="flex max-w-[480px] flex-col items-center gap-2">
                      <p className="text-lg font-bold">Build Your Form</p>
                      <p className="text-muted-foreground text-sm text-center">
                        Drag a field from the left or use the AI Assistant to get started.
                      </p>
                    </div>
                    <Button variant="secondary" size="default">
                      <Plus className="size-4" />
                      Add Section
                    </Button>
                  </div>
                </div>

                {/* Section Header with AI Suggestion */}
                <Card className="p-6">
                  <h2 className="text-[22px] font-bold tracking-tight">
                    Personal Information
                  </h2>
                  
                  {/* AI Suggestion */}
                  <div className="mt-4 flex items-start gap-3 p-4 rounded-lg bg-accent/50 border-accent">
                    <Sparkles className="size-5 text-primary mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-primary">AI Suggestion</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Based on the job title, consider adding fields for "LinkedIn Profile" and
                        "Portfolio/GitHub Link".
                      </p>
                      <div className="mt-3 flex gap-2">
                        <Button size="sm" className="text-xs">
                          Add Both
                        </Button>
                        <Button variant="ghost" size="sm" className="text-xs">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </main>

          {/* Right Side Panel */}
          <aside className="w-80 flex-shrink-0 rounded-br-lg bg-card border-l p-6 overflow-y-auto">
            <div className="flex flex-col gap-6">
              {!selectedField ? (
                <div className="text-center py-10 border-b">
                  <p className="text-sm text-muted-foreground">
                    Select a field to see its properties
                  </p>
                </div>
              ) : (
                <>
                  {/* Field Properties */}
                  <div>
                    <h3 className="font-bold">Field Properties</h3>
                    <p className="text-sm text-muted-foreground">Text Input</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="label">Label</Label>
                      <Input
                        id="label"
                        defaultValue="Link to your LinkedIn Profile"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="placeholder">Placeholder Text</Label>
                      <Input
                        id="placeholder"
                        defaultValue="https://linkedin.com/in/..."
                        className="mt-1"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Required</Label>
                      <div className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-secondary rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </div>
                    </div>
                  </div>

                  {/* Conditional Logic */}
                  <div className="border-t pt-6 space-y-4">
                    <h4 className="font-semibold">Conditional Logic</h4>
                    <Button variant="secondary" size="default" className="w-full">
                      <Plus className="size-4" />
                      Add Rule
                    </Button>
                  </div>

                  {/* Data Mapping */}
                  <div className="border-t pt-6 space-y-4">
                    <h4 className="font-semibold">Data Mapping</h4>
                    <p className="text-xs text-muted-foreground">
                      Link this field to a candidate profile attribute.
                    </p>
                    <Select defaultValue="linkedin">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="linkedin">
                          Candidate Profile &gt; LinkedIn URL
                        </SelectItem>
                        <SelectItem value="website">
                          Candidate Profile &gt; Website
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
            </div>
          </aside>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}