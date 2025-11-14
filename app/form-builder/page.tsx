"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
} from "lucide-react"

const standardFields = [
  { icon: Type, label: "Text Input" },
  { icon: AlignLeft, label: "Paragraph" },
  { icon: CheckSquare, label: "Checkboxes" },
  { icon: Circle, label: "Radio" },
  { icon: ChevronDown, label: "Dropdown" },
  { icon: Calendar, label: "Date" },
]

const advancedFields = [
  { icon: Upload, label: "File Upload" },
  { icon: PenTool, label: "E-Signature" },
]

export default function FormBuilderPage() {
  const [selectedField, setSelectedField] = useState<string | null>(null)

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between border-b bg-card px-6 py-3 flex-shrink-0">
        <div className="flex items-center gap-4">
          <svg
            className="text-primary size-5"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
              fill="currentColor"
            />
          </svg>
          <h2 className="text-lg font-bold">TalentSync HR</h2>
        </div>
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
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="size-5" />
          </Button>
          <div className="bg-primary/10 rounded-full size-10 flex items-center justify-center">
            <span className="text-primary font-semibold text-sm">U</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-64 flex-shrink-0 bg-card border-r p-4 flex flex-col gap-6">
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
                <div className="mt-4 flex items-start gap-3 p-4 rounded-lg bg-accent/50 border border-accent">
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
        <aside className="w-80 flex-shrink-0 bg-card border-l p-6 overflow-y-auto">
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
    </div>
  )
}
