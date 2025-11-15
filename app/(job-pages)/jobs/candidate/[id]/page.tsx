// app/jobs/candidate/[id]/page.tsx
// Server Component (default). Avoid 'use client' so async is allowed.

// --- Imports from your other dashboard files ---
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header"; // <-- Reference import
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
// --- End Dashboard Imports ---

import { FeedbackPanel } from "@/components/candidate-profile/feedback-panel";
import { ProfileHeader } from "@/components/candidate-profile/profile-header";
import { ProfileSidebar } from "@/components/candidate-profile/profile-sidebar";
import { ProfileSummary } from "@/components/candidate-profile/profile-summary";
import { CandidateProfile, CandidateStub } from "@/types/candidate-profile";
import { Card, CardContent } from "@/components/ui/card";

// --- MOCK DATA ---
// (Unchanged - data omitted for brevity)
const allCandidatesStub: CandidateStub[] = [
  // ...
];
const candidateProfileData: Record<string, CandidateProfile> = {

  "c-1": {
    id: "c-1",
    name: "John Does",
    title: "Senior Product Manager at TechCorp",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBbEgj_SOrbgOSWAXfICDHbHMmCiT2bIYf0el_KQVPeVkvnl6MSSuaNRGa_bPnZ4M4EojuVS2XjCSvaPGBdWa6xRHTs9uWtI6qtbyvS90FJdlGFlQYKVzCSXIGwDo0rTogmbxhfv7QieicHb9eV5nlpZF7lJKWt6DDlvl8BEc794yEY-qvW_XxqH8II8ipMgimO4MmEC49Z_CdDcKJz4BK4QbLvg7rbNUInTKI1pBhI2s9adhh8PDsC330vE2bWUYA1bndm6GwAvpAa",
    avatarFallback: "JD",
    matchScore: 92,
    aiSummary:
      "John is an accomplished Senior Product Manager with over 10 years of experience in the tech industry. His background in B2B SaaS platforms and expertise in agile methodologies align well with the requirements for this role. He has demonstrated consistent career progression and leadership skills.",
    linkedInUrl: "#",
    portfolioUrl: "#",
    factChecks: [
      {
        id: "fc-1",
        summary: "Employment date mismatch at Innovate Inc.",
        details:
          "Resume lists end date as Jun 2022, but online profile suggests May 2022. Recommend manual verification.",
      },
    ],
    skills: [
      { id: "s-1", label: "Product Strategy", isMatched: true },
      { id: "s-2", label: "Agile Methodologies", isMatched: true },
      { id: "s-3", label: "Roadmap Planning", isMatched: true },
      { id: "s-4", label: "Market Research", isMatched: false },
      { id: "s-5", label: "User-Centered Design", isMatched: true },
      { id: "s-6", label: "Data Analysis", isMatched: false },
    ],
    experience: [
      {
        id: "e-1",
        title: "Senior Product Manager",
        company: "TechCorp",
        dates: "Jun 2022 - Present",
        isCurrent: true,
      },
      {
        id: "e-2",
        title: "Product Manager",
        company: "Innovate Inc.",
        dates: "Jan 2019 - May 2022",
        isCurrent: false,
      },
      {
        id: "e-3",
        title: "Associate Product Manager",
        company: "Data Solutions",
        dates: "Aug 2016 - Dec 2018",
        isCurrent: false,
      },
    ],
    scorecard: [
      { id: "sc-1", label: "Technical Skills", score: 4, maxScore: 5 },
      { id: "sc-2", label: "Team Fit & Communication", score: 5, maxScore: 5 },
      { id: "sc-3", label: "Experience", score: 4, maxScore: 5 },
    ],
  },
  "c-2": {
    id: "c-2",
    name: "Jane Smith",
    title: "Product Manager at Innovate Labs",
    avatarUrl: "https://placehold.co/160x160/E2E8F0/4A5568?text=JS",
    avatarFallback: "JS",
    matchScore: 88,
    aiSummary:
      "Jane is an experienced PM with strong delivery across platform roadmaps, stakeholder alignment, and discovery. Her background spans B2B and internal tooling, aligning with the current Product Manager opening.",
    linkedInUrl: "#",
    portfolioUrl: "#",
    factChecks: [
      {
        id: "fc-1",
        summary: "Title variation across sources",
        details:
          "Some profiles list 'Senior PM'. Recommend confirming with candidate.",
      },
    ],
    skills: [
      { id: "s-1", label: "Roadmap Planning", isMatched: true },
      { id: "s-2", label: "Stakeholder Management", isMatched: true },
      { id: "s-3", label: "Agile", isMatched: true },
      { id: "s-4", label: "SQL", isMatched: false },
      { id: "s-5", label: "User Research", isMatched: true },
    ],
    experience: [
      {
        id: "e-1",
        title: "Product Manager",
        company: "Innovate Labs",
        dates: "Feb 2021 - Present",
        isCurrent: true,
      },
      {
        id: "e-2",
        title: "Associate Product Manager",
        company: "Brightware",
        dates: "Aug 2018 - Jan 2021",
        isCurrent: false,
      },
    ],
    scorecard: [
      { id: "sc-1", label: "Product Sense", score: 5, maxScore: 5 },
      { id: "sc-2", label: "Communication", score: 4, maxScore: 5 },
      { id: "sc-3", label: "Execution", score: 4, maxScore: 5 },
    ],
  },
  "c-3": {
    id: "c-3",
    name: "Peter Jones",
    title: "UX Designer at PixelWorks",
    avatarUrl: "https://placehold.co/160x160/E2E8F0/4A5568?text=PJ",
    avatarFallback: "PJ",
    matchScore: 85,
    aiSummary:
      "Peter brings a strong portfolio across enterprise UX, with strengths in prototyping and information architecture. A solid match for the UX Designer role.",
    linkedInUrl: "#",
    portfolioUrl: "#",
    factChecks: [],
    skills: [
      { id: "s-1", label: "Figma", isMatched: true },
      { id: "s-2", label: "Wireframing", isMatched: true },
      { id: "s-3", label: "Prototyping", isMatched: true },
      { id: "s-4", label: "User Research", isMatched: false },
      { id: "s-5", label: "Design Systems", isMatched: true },
    ],
    experience: [
      {
        id: "e-1",
        title: "UX Designer",
        company: "PixelWorks",
        dates: "Mar 2020 - Present",
        isCurrent: true,
      },
      {
        id: "e-2",
        title: "Junior UX Designer",
        company: "Craft Studio",
        dates: "Jul 2017 - Feb 2020",
        isCurrent: false,
      },
    ],
    scorecard: [
      { id: "sc-1", label: "Visual Design", score: 4, maxScore: 5 },
      { id: "sc-2", label: "Interaction Design", score: 4, maxScore: 5 },
      { id: "sc-3", label: "Research", score: 3, maxScore: 5 },
    ],
  },
  "c-4": {
    id: "c-4",
    name: "Emily White",
    title: "Backend Engineer at Nimbus",
    avatarUrl: "https://placehold.co/160x160/E2E8F0/4A5568?text=EW",
    avatarFallback: "EW",
    matchScore: 81,
    aiSummary:
      "Emily specializes in distributed systems and API design, with hands-on experience in Node.js and Go. Good alignment with Backend Engineer requirements.",
    linkedInUrl: "#",
    portfolioUrl: "#",
    factChecks: [
      {
        id: "fc-1",
        summary: "Gap between roles",
        details: "Two-month sabbatical in 2021; candidate notes relocation.",
      },
    ],
    skills: [
      { id: "s-1", label: "Node.js", isMatched: true },
      { id: "s-2", label: "Go", isMatched: false },
      { id: "s-3", label: "PostgreSQL", isMatched: true },
      { id: "s-4", label: "Kubernetes", isMatched: false },
      { id: "s-5", label: "API Design", isMatched: true },
    ],
    experience: [
      {
        id: "e-1",
        title: "Backend Engineer",
        company: "Nimbus",
        dates: "May 2022 - Present",
        isCurrent: true,
      },
      {
        id: "e-2",
        title: "Software Engineer",
        company: "Datavault",
        dates: "Jan 2019 - Apr 2022",
        isCurrent: false,
      },
    ],
    scorecard: [
      { id: "sc-1", label: "System Design", score: 4, maxScore: 5 },
      { id: "sc-2", label: "Coding", score: 4, maxScore: 5 },
      { id: "sc-3", label: "Ownership", score: 4, maxScore: 5 },
    ],
  },

};

// Mock function to get data
async function getCandidateData(id: string) {
  // In a real app: const data = await db.candidates.find...
  const profile = candidateProfileData[id] || candidateProfileData["c-1"]; // Fallback to c-1
  const candidatesList = allCandidatesStub;
  return { profile, candidatesList };
}

// --- REMOVED: Inline DashboardHeader component ---

// --- PAGE COMPONENT ---

type CandidateProfilePageProps = {
  params: Promise<{ id: string }>;
};

export default async function CandidateProfilePage({
  params,
}: CandidateProfilePageProps) {
  const { id } = await params;
  const { profile, candidatesList } = await getCandidateData(id);

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
        <SiteHeader header="Candidate Profile" />
        
        {/* --- ADDED: Main flex wrapper from reference --- */}
        <div className="flex flex-1 flex-col">
          {/* Main Content (Original <main> tag with overflow) */}
          <main className="grid flex-1 grid-cols-1 lg:grid-cols-5 gap-8 p-8 overflow-y-auto">
            
            {/* Central Content */}
            {/* --- UPDATED: Removed <CardContent> wrapper --- */}
            <section className="lg:col-span-3 space-y-8">
              <ProfileHeader profile={profile} />
              <ProfileSummary profile={profile} />
            </section>

            {/* Right Sidebar (stacked) */}
            <aside className="lg:col-span-2 flex flex-col gap-8">
              <ProfileSidebar
                candidates={candidatesList}
                activeCandidateId={id}
              />
              <FeedbackPanel initialScorecard={profile.scorecard} />
            </aside>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}