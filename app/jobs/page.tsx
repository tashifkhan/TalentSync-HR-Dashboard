// --- NEW Imports for Dashboard Layout ---
"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Bell, Settings, Search, ChevronDown } from "lucide-react";
// --- END NEW Imports ---

// import { Sidebar } from "@/components/jobs/sidebar"; // <-- REMOVED
import { RequisitionHeader } from "@/components/jobs/requisition-header";
import { RequisitionStats } from "@/components/jobs/requisition-stats";
import { PipelineBoard } from "@/components/jobs/pipeline-board";
import { TopCandidatesTable } from "@/components/jobs/top-candidates-table";
// import { AiInsights } from "@/components/jobs/ai-insights";
import { CandidatesView } from "@/components/candidates/candidates-view";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  // AiInsight,
  PipelineColumnData,
  StatCardData,
  TopCandidate,
} from "@/types/jobs";
// import { ChevronDown } from "lucide-react"; // <-- Already imported above

// --- NEW Component: JobsPageHeader (from dashboard) ---
function JobsPageHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b bg-background px-8">
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle */}
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>

        {/* Welcome Message (Adapted for Jobs) */}
        <div className="flex min-w-72 flex-col">
          <h1 className="text-3xl font-bold">Jobs Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Manage your open requisitions and candidate pipelines.
          </p>
        </div>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for jobs, candidates..."
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
          <AvatarImage
            src="https://placehold.co/100x100/E2E8F0/4A5568?text=JL"
            alt="Jessica Lane"
          />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

// --- Mock Data (UNCHANGED) ---
const requisitionData = {
  title: "Senior Product Designer",
  jobId: "8B673",
  location: "Design Team • Remote, USA",
  status: "Open",
};
const statsData: StatCardData[] = [
  { title: "Total Candidates", value: "128" },
  { title: "Days Open", value: "24" },
  { title: "Time to Fill (Est.)", value: "45 Days" },
  { title: "New this week", value: "12", change: "+5%" },
];
const pipelineColumns: PipelineColumnData[] = [
  /* ... data ... */
];
const topCandidates: TopCandidate[] = [
  /* ... data ... */
];

// --- Page Component (UPDATED) ---

export default function RequisitionOverviewPage() {
  return (
    // --- UPDATED: New SidebarProvider wrapper ---
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      {/* --- UPDATED: New AppSidebar --- */}
      <AppSidebar variant="inset" />

      {/* --- UPDATED: New SidebarInset wrapper --- */}
      <SidebarInset>
        {/* --- ADDED: New Dashboard-style Header --- */}
        <JobsPageHeader />

        {/* Main Content (Removed old layout <div>) */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            <RequisitionHeader
              title={requisitionData.title}
              jobId={requisitionData.jobId}
              location={requisitionData.location}
              status={requisitionData.status}
            />

            <RequisitionStats stats={statsData} />

            <Tabs defaultValue="pipeline" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
                <TabsTrigger value="candidates">Candidates View</TabsTrigger>
              </TabsList>

              <TabsContent value="pipeline" className="space-y-6">
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1" className="border-b-0">
                    {/* --- UPDATED: Removed hardcoded text colors --- */}
                    <AccordionTrigger className="text-2xl font-bold mb-4 px-1 py-2 group hover:no-underline">
                      <div className="flex items-center gap-2">
                        Pipeline
                        <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <PipelineBoard columns={pipelineColumns} />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <TopCandidatesTable candidates={topCandidates} />
                </section>
              </TabsContent>

              <TabsContent value="candidates">
                <CandidatesView />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}