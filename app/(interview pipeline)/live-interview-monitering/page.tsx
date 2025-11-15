'use client';

import { useState } from 'react';

// --- Imports for Dashboard Layout ---
import { SiteHeader } from '@/components/site-header';
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Bell, Settings, Search } from "lucide-react"; 
// --- End Dashboard Imports ---

import { ArrowLeft, Download, Share2, Flag, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

// --- NEW Component: LiveInterviewHeader (from dashboard) ---
function LiveInterviewHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b bg-background px-8 shrink-0">
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle */}
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        
        {/* Welcome Message (Adapted for Live Interview) */}
        <div className="flex min-w-72 flex-col">
          <h1 className="text-3xl font-bold">Live Interview</h1>
          <p className="text-sm text-muted-foreground">
            Monitor and review live interview sessions.
          </p>
        </div>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search candidates or interviews..."
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

const transcript = [
  {
    id: 1,
    speaker: 'AI Agent',
    time: '14:58',
    message: '"Can you elaborate on the outcome?"',
    type: 'question',
  },
  {
    id: 2,
    speaker: 'Jane Doe',
    time: '15:10',
    message:
      '"Certainly. The outcome was a 15% increase in user engagement after we implemented the revised feature set. We also saw a 10% reduction in support tickets related to that area of the product."',
    type: 'answer',
  },
  {
    id: 3,
    speaker: 'AI Agent',
    time: '15:25',
    message: '"That sounds impressive. Let\'s move on to the next topic. Tell me about a time you had to manage a difficult stakeholder."',
    type: 'question',
  },
  {
    id: 4,
    speaker: 'Jane Doe',
    time: '15:30',
    message:
      '"I can share a specific example. At my previous role at InnovateCorp, I was responsible for managing a difficult stakeholder..."',
    type: 'answer',
  },
];

export default function LiveInterviewMonitoring() {
  const [isFlagged, setIsFlagged] = useState(false);

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
        <SiteHeader header="Live interview monitoring"/>

        {/* --- UPDATED: Main content now fills remaining space and scrolls --- */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="container mx-auto px-4 py-8"> {/* Using original container */}
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold tracking-tight">Live Interview: Jane Doe</h1>
                  <p className="text-muted-foreground">Senior Product Manager</p>
                </div>
                {/* 'accent' is a valid theme variable */}
                <div className="flex items-center gap-2 bg-accent/10 text-accent font-semibold px-3 py-1.5 rounded-full">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </div>
                  LIVE
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Notice: This session is being monitored. Real-time transcription is active.
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Interview Info */}
              <div className="lg:col-span-1 space-y-6">
                {/* Interview Details Card */}
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Candidate</p>
                      <div className="flex gap-3">
                        {/* --- UPDATED: Replaced teal gradient with theme primary --- */}
                        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold shrink-0">
                          JD
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Jane Doe</p>
                          <p className="text-xs text-muted-foreground">Senior Product Manager</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-muted-foreground uppercase">Interview Date</span>
                        <span className="text-sm font-medium">October 26, 2023</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-muted-foreground uppercase">Elapsed Time</span>
                        <span className="text-sm font-medium font-mono">00:15:32</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Agent Status */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">AI Agent Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      {/* --- UPDATED: Replaced orange with 'destructive' for warning --- */}
                      <div className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
                      <div>
                        <p className="text-sm font-semibold">Status</p>
                        <p className="text-xs text-muted-foreground">Listening to response</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Current Question</p>
                        <p className="text-sm text-foreground">
                          "Tell me about a time you had to manage a difficult stakeholder."
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Sentiment Analysis</p>
                        {/* --- UPDATED: Replaced green with 'primary' --- */}
                        <Badge variant="default" className="bg-primary/10 text-primary border-0">
                          Positive
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <Button
                    variant={isFlagged ? 'default' : 'outline'}
                    className="w-full"
                    onClick={() => setIsFlagged(!isFlagged)}
                  >
                    <Flag className="h-4 w-4 mr-2" />
                    Flag Moment
                  </Button>
                  <Button variant="outline" className="w-full">
                    <LogOut className="h-4 w-4 mr-2" />
                    End Interview
                  </Button>
                </div>
              </div>

              {/* Right Column: Transcription */}
              <div className="lg:col-span-2">
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Real-Time Transcription</CardTitle>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <Input
                        placeholder="Search in transcript..."
                        className="text-sm"
                      />
                    </div>

                    <Tabs defaultValue="full" className="w-full mb-4">
                      <TabsList>
                        <TabsTrigger value="full">Full Transcript</TabsTrigger>
                        <TabsTrigger value="factcheck">Fact-Check</TabsTrigger>
                        <TabsTrigger value="feedback">Structured Feedback</TabsTrigger>
                      </TabsList>
                    </Tabs>

                    <ScrollArea className="flex-1 pr-4">
                      <div className="space-y-4">
                        {transcript.map(item => (
                          <div key={item.id} className="flex gap-3">
                            <div
                              // --- UPDATED: Replaced slate/teal with theme colors ---
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                                item.type === 'question'
                                  ? 'bg-secondary text-secondary-foreground'
                                  : 'bg-primary text-primary-foreground'
                              }`}
                            >
                              {item.speaker === 'AI Agent' ? 'AI' : 'JD'}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-baseline gap-2 mb-1">
                                <p className="font-semibold text-sm">{item.speaker}</p>
                                <p className="text-xs text-muted-foreground">{item.time}</p>
                              </div>
                              <p className="text-sm text-foreground leading-relaxed">"{item.message}"</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
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