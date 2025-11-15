"use client";

import { useState } from "react";

// --- Imports for Dashboard Layout ---
import { SiteHeader } from "@/components/site-header"; // <-- Reference import
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
// --- End Dashboard Imports ---

import {
  ArrowLeft,
  Download,
  Share2,
  ThumbsUp,
  ThumbsDown,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const transcriptData = [
  {
    id: 1,
    speaker: "Interviewer",
    time: "00:24",
    message:
      "Thanks for joining, Jane. Can you start by telling us about your experience managing product roadmaps for B2B SaaS products?",
    type: "interviewer",
  },
  {
    id: 2,
    speaker: "Jane Doe",
    time: "00:58",
    message:
      "Certainly. At my previous role at InnovateCorp, I was responsible for the entire product lifecycle of our flagship CRM platform. I increased user engagement by 30% in my first year by prioritizing user-requested features and data-driven insights.",
    type: "candidate",
  },
  {
    id: 3,
    speaker: "Interviewer",
    time: "01:45",
    message:
      "That's impressive. How do you approach balancing technical debt with new feature development?",
    type: "interviewer",
  },
  {
    id: 4,
    speaker: "Jane Doe",
    time: "02:12",
    message:
      "I advocate for allocating a fixed percentage of each sprint—typically around 20%—to address technical debt. This ensures platform stability while still delivering value to customers. I also worked on a project that migrated our entire stack from monolith to microservices...",
    type: "candidate",
  },
];

const keyTakeaways = [
  "Strong product sense and leadership qualities",
  "Excellent experience in B2B SaaS aligns well with the role's requirements",
  "Limited knowledge in backend architecture may require further evaluation",
];

const skillsAssessment = [
  { skill: "Product Strategy", score: 4, max: 5 },
  { skill: "Leadership", score: 5, max: 5 },
  { skill: "Technical Knowledge", score: 3, max: 5 },
  { skill: "Communication", score: 5, max: 5 },
  { skill: "Problem Solving", score: 4, max: 5 },
];

const factCheckData = [
  {
    claim: "Increased user engagement by 30% at InnovateCorp",
    status: "verified",
    source: "LinkedIn profile, InnovateCorp press release",
  },
  {
    claim: "Led migration from monolith to microservices",
    status: "pending",
    source: "Awaiting verification from references",
  },
  {
    claim: "5 years of product management experience",
    status: "verified",
    source: "Resume, LinkedIn profile",
  },
];

export default function PostInterviewReview() {
  const [activeTab, setActiveTab] = useState("transcript");

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
        <SiteHeader header="Post-Interview Review" />

        {/* --- UPDATED: Main content now fills remaining space and scrolls --- */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* --- REMOVED: Old sticky header --- */}
          
          <div className="container mx-auto px-4 py-8">
            {/* Page Header (moved from sticky header) */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div>
                  <h1 className="text-2xl font-bold">Jane Doe</h1>
                  <p className="text-sm text-muted-foreground">
                    Applied for Senior Product Manager
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Candidate Info & Summary */}
              <div className="lg:col-span-1 space-y-6">
                {/* Candidate Profile */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* --- UPDATED: Replaced teal gradient with theme primary --- */}
                      <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-3xl font-semibold">
                        JD
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Jane Doe</h3>
                        <p className="text-sm text-muted-foreground">
                          Senior Product Manager
                        </p>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                          Interview Date
                        </p>
                        <p className="text-sm">June 26, 2024</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                          Interview Stage
                        </p>
                        <Badge variant="secondary">Technical Round</Badge>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                          Duration
                        </p>
                        <p className="text-sm">45 minutes</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                          Interviewer
                        </p>
                        <p className="text-sm">Sarah Johnson, Michael Chen</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      AI-Powered Actionable Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      {/* 'text-primary' is a valid theme variable */}
                      <h4 className="text-sm font-semibold text-primary mb-2">
                        Key Takeaways
                      </h4>
                      <ul className="space-y-2">
                        {keyTakeaways.map((takeaway, idx) => (
                          <li key={idx} className="text-sm flex gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="text-sm font-semibold mb-3">
                        Skills Assessment
                      </h4>
                      <div className="space-y-3">
                        {skillsAssessment.map((item) => (
                          <div key={item.skill}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-medium">
                                {item.skill}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {item.score}/{item.max}
                              </span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                // 'bg-primary' is a valid theme variable
                                className="h-full bg-primary rounded-full transition-all"
                                style={{
                                  width: `${(item.score / item.max) * 100}%`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Overall Score */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Overall Suitability Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-3">
                      <div className="relative inline-flex items-center justify-center">
                        <svg className="w-32 h-32 transform -rotate-90">
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-muted" // 'text-muted' is valid
                          />
                          <circle
                            cx="64"
                            cy="64"
                            r="56"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 56}`}
                            strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.85)}`}
                            className="text-primary" // 'text-primary' is valid
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl font-bold">85%</span>
                        </div>
                      </div>
                      {/* --- UPDATED: Replaced green with theme primary --- */}
                      <Badge className="bg-primary/10 text-primary border-0">
                        Strong Match
                      </Badge>
                      <p className="text-xs text-muted-foreground">
                        Jane demonstrates excellent product management skills and
                        leadership qualities.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Decision Actions */}
                <Card>
                  <CardContent className="pt-6 space-y-3">
                    {/* --- UPDATED: Replaced green with default primary --- */}
                    <Button className="w-full">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Move to Next Stage
                    </Button>
                    <Button variant="destructive" className="w-full">
                      <ThumbsDown className="h-4 w-4 mr-2" />
                      Reject Candidate
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Transcript & Details */}
              <div className="lg:col-span-2">
                <Card className="h-full">
                  <CardHeader>
                    <Tabs
                      value={activeTab}
                      onValueChange={setActiveTab}
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="transcript">
                          Full Transcript
                        </TabsTrigger>
                        <TabsTrigger value="factcheck">Fact-Check</TabsTrigger>
                        <TabsTrigger value="feedback">
                          Structured Feedback
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="transcript" className="mt-4">
                        <div className="mb-4">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              placeholder="Search in transcript..."
                              className="pl-9"
                            />
                          </div>
                        </div>
                        <ScrollArea className="h-[600px] pr-4">
                          <div className="space-y-6">
                            {transcriptData.map((item) => (
                              <div key={item.id} className="flex gap-3">
                                <div
                                  // --- UPDATED: Replaced slate/teal with theme colors ---
                                  className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-sm font-semibold ${
                                    item.type === "interviewer"
                                      ? "bg-secondary text-secondary-foreground"
                                      : "bg-primary text-primary-foreground"
                                  }`}
                                >
                                  {item.type === "interviewer" ? "INT" : "JD"}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-baseline gap-2 mb-1">
                                    <p className="font-semibold text-sm">
                                      {item.speaker}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                      {item.time}
                                    </p>
                                  </div>
                                  <p className="text-sm leading-relaxed">
                                    {item.message}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </TabsContent>

                      <TabsContent value="factcheck" className="mt-4">
                        <ScrollArea className="h-[600px] pr-4">
                          <div className="space-y-4">
                            {factCheckData.map((fact, idx) => (
                              <Card key={idx}>
                                <CardContent className="pt-6">
                                  <div className="space-y-3">
                                    <div className="flex items-start justify-between gap-4">
                                      <p className="text-sm font-medium flex-1">
                                        {fact.claim}
                                      </p>
                                      {/* --- UPDATED: Replaced green/yellow with theme colors --- */}
                                      <Badge
                                        variant={
                                          fact.status === "verified"
                                            ? "default"
                                            : "secondary"
                                        }
                                        className={
                                          fact.status === "verified"
                                            ? "bg-primary/10 text-primary border-0"
                                            : "bg-accent text-accent-foreground border-0"
                                        }
                                      >
                                        {fact.status === "verified"
                                          ? "✓ Verified"
                                          : "⏳ Pending"}
                                      </Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                      <span className="font-semibold">Source:</span>{" "}
                                      {fact.source}
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </ScrollArea>
                      </TabsContent>

                      <TabsContent value="feedback" className="mt-4">
                        <ScrollArea className="h-[600px] pr-4">
                          <div className="space-y-6">
                            <Card>
                              <CardHeader>
                                <CardTitle className="text-base">
                                  Technical Competency
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div>
                                  <p className="text-sm font-medium mb-2">
                                    Strengths:
                                  </p>
                                  <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li>
                                      • Deep understanding of product lifecycle
                                      management
                                    </li>
                                    <li>
                                      • Experience with data-driven decision making
                                    </li>
                                    <li>
                                      • Strong grasp of user engagement metrics
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <p className="text-sm font-medium mb-2">
                                    Areas for Improvement:
                                  </p>
                                  <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li>
                                      • Limited backend architecture knowledge
                                    </li>
                                    <li>
                                      • Could benefit from more technical depth in
                                      system design
                                    </li>
                                  </ul>
                                </div>
                              </CardContent>
                            </Card>

                            <Card>
                              <CardHeader>
                                <CardTitle className="text-base">
                                  Leadership & Communication
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-3">
                                <div>
                                  <p className="text-sm font-medium mb-2">
                                    Strengths:
                                  </p>
                                  <ul className="space-y-1 text-sm text-muted-foreground">
                                    <li>
                                      • Excellent communication and presentation
                                      skills
                                    </li>
                                    <li>
                                      • Demonstrated experience leading
                                      cross-functional teams
                                    </li>
                                    <li>
                                      • Strong stakeholder management capabilities
                                    </li>
                                  </ul>
                                </div>
                              </CardContent>
                            </Card>

                            <Card>
                              <CardHeader>
                                <CardTitle className="text-base">
                                  Cultural Fit
                                </CardTitle>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm text-muted-foreground">
                                  Jane's collaborative approach and focus on
                                  user-centric product development aligns well with
                                  our company values. Her experience in fast-paced
                                  environments suggests she would thrive in our
                                  startup culture.
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                        </ScrollArea>
                      </TabsContent>
                    </Tabs>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}