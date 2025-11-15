'use client';

import { useState } from 'react';

// --- Imports for Dashboard Layout ---
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from '@/components/site-header'; // <-- Reference import
// --- End Dashboard Imports ---

import { Plus, Download, Share2, Zap, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const questions = [
  {
    id: 1,
    text: 'Can you tell me about yourself and your background?',
    scorecard: 'COMMUNICATION',
    section: 'Introduction',
  },
  {
    id: 2,
    text: 'What are you looking for in your next role?',
    scorecard: 'MOTIVATION',
    section: 'Introduction',
  },
];

const scorecardCriteria = [
  { name: 'Problem Solving', rating: 4 },
  { name: 'Communication', rating: 3 },
];

export default function InterviewToolkit() {
  const [jobRole, setJobRole] = useState('Senior Backend Engineer');
  const [difficulty, setDifficulty] = useState(50);
  const [selectedTab, setSelectedTab] = useState('introduction');

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
        
        {/* --- ADDED: Reusable SiteHeader --- */}
        <SiteHeader header="Interview Guide Creator" />

        {/* --- UPDATED: Main content now fills remaining space and scrolls --- */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="container mx-auto px-4 py-8"> {/* Using original container */}
            {/* Header */}
            <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">Interview Guide Creator</h1>
                <p className="text-muted-foreground">Create and customize interview guides for your team</p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  Use Template
                </Button>
                <Button size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Save Guide
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Configuration */}
              <div className="lg:col-span-1 space-y-6">
                {/* Job Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Configuration</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="job-role" className="text-xs font-semibold uppercase">
                        Select Job Role
                      </Label>
                      <Select value={jobRole} onValueChange={setJobRole}>
                        <SelectTrigger id="job-role">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Senior Backend Engineer">Senior Backend Engineer</SelectItem>
                          <SelectItem value="Frontend Developer">Frontend Developer</SelectItem>
                          <SelectItem value="Product Manager">Product Manager</SelectItem>
                          <SelectItem value="Data Scientist">Data Scientist</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Question Suggestions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">AI Question Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Question Type Tabs */}
                    <Tabs defaultValue="technical" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="technical">Technical</TabsTrigger>
                        <TabsTrigger value="non-technical">Non-Technical</TabsTrigger>
                      </TabsList>
                    </Tabs>

                    {/* Difficulty Slider */}
                    <div className="space-y-3">
                      <Label className="text-xs font-semibold uppercase">Question Difficulty</Label>
                      <Slider value={[difficulty]} onValueChange={(v: number[]) => setDifficulty(v[0])} className="w-full" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Junior</span>
                        <span>Mid</span>
                        <span>Senior</span>
                      </div>
                    </div>

                    {/* --- UPDATED: Removed hardcoded purple --- */}
                    <Button className="w-full">
                      <Zap className="h-4 w-4 mr-2" />
                      Generate Questions
                    </Button>
                  </CardContent>
                </Card>

                {/* Configure Scorecard */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Configure Scorecard</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Input
                        placeholder="e.g., Communication"
                        className="text-sm"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Add Criterion
                    </Button>

                    <Separator />

                    <div className="space-y-2">
                      {scorecardCriteria.map(criterion => (
                        <div key={criterion.name} className="flex items-center justify-between">
                          <span className="text-sm">{criterion.name}</span>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(rating => (
                              <button
                                key={rating}
                                // --- UPDATED: Replaced yellow with 'text-primary' ---
                                className={`text-lg ${
                                  rating <= criterion.rating ? 'text-primary' : 'text-muted-foreground'
                                }`}
                              >
                                ★
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column: Interview Guide */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <Input
                          defaultValue="Senior Backend Engineer - Fi"
                          className="text-lg font-semibold border-0 p-0 h-auto focus-visible:ring-0"
                        />
                        <p className="text-sm text-muted-foreground mt-1">For: Jane Doe</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Section Tabs */}
                    <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mt-6">
                      <TabsList>
                        <TabsTrigger value="introduction">Introduction</TabsTrigger>
                        <TabsTrigger value="technical">Technical Deep-Dive</TabsTrigger>
                        <TabsTrigger value="behavioral">Behavioral</TabsTrigger>
                        <TabsTrigger value="closing">Closing</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      {questions.map((question, idx) => (
                        <div key={question.id} className="p-4 border rounded-lg space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <p className="font-semibold text-sm mb-1">
                                {idx + 1}. {question.text}
                              </p>
                              <Textarea
                                placeholder="[Add Interviewer Notes Here]"
                                className="text-sm min-h-16"
                              />
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 mt-1">
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t">
                            <Badge variant="secondary" className="text-xs">
                              {question.scorecard}
                            </Badge>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map(rating => (
                                <button key={rating} className="text-lg text-muted-foreground hover:text-primary transition">
                                  ★
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add Section */}
                    <div className="flex justify-center pt-4">
                      <Button variant="outline" size="lg">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Section
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}