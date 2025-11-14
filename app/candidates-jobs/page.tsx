// app/candidates-jobs/page.tsx
import { TopNavbar } from "@/components/candidates/top-navbar";
import { CandidatesView } from "@/components/candidates/candidates-view"; // <-- Import the new view

// --- Page Component ---

export default function CandidatesPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <TopNavbar />
      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-screen-2xl mx-auto">
          {/* This page now just renders the navbar 
            and the reusable CandidatesView component.
          */}
          <CandidatesView />
        </div>
      </main>
    </div>
  );
}
