"use client"; // <-- Added 'use client' as CandidatesView likely has state

// --- Imports for Dashboard Layout ---
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
// --- End Dashboard Imports ---

// import { TopNavbar } from "@/components/candidates/top-navbar"; // <-- REMOVED
import { CandidatesView } from "@/components/candidates/candidates-view";

// --- Page Component ---

export default function CandidatesPage() {
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
        <SiteHeader header="Candidates" />

        {/* --- ADDED: Main flex wrapper from reference --- */}
        <div className="flex flex-1 flex-col">
          {/* --- UPDATED: Main content with overflow and padding --- */}
          <main className="flex-grow p-6 lg:p-8 overflow-y-auto">
            <div className="max-w-screen-2xl mx-auto">
              <CandidatesView />
            </div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}