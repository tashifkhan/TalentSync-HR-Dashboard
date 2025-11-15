"use client"; // <-- ADDED: Required for Tabs and Accordion

// --- Imports for Dashboard Layout ---
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
// --- End Dashboard Imports ---

// import { Sidebar } from "@/components/jobs/sidebar"; // <-- REMOVED
import { RequisitionHeader } from "@/components/jobs/requisition-header";
import { RequisitionStats } from "@/components/jobs/requisition-stats";
import { PipelineBoard } from "@/components/jobs/pipeline-board";
import { TopCandidatesTable } from "@/components/jobs/top-candidates-table";
import { CandidatesView } from "@/components/candidates/candidates-view";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PipelineColumnData,
  StatCardData,
  TopCandidate,
} from "@/types/jobs";
import { ChevronDown } from "lucide-react";

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
  // ... (data omitted for brevity)
];

const topCandidates: TopCandidate[] = [
  // ... (data omitted for brevity)
];

// --- Page Component (UPDATED) ---

export default function RequisitionOverviewPage() {
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
        {/* --- ADDED: Reusable SiteHeader --- */}
        <SiteHeader header="Requisition Overview" />

        {/* --- ADDED: Main flex wrapper from reference --- */}
        <div className="flex flex-1 flex-col">
          {/* Main Content (Original <main> tag with overflow) */}
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
                  {/* --- NEW COLLAPSIBLE PIPELINE --- */}
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

                  {/* --- UPDATED KPI SECTION --- */}
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
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}