// components/candidates/candidates-view.tsx
"use client"; // This is now a client component

import { useState, useMemo } from "react"; // Import React hooks
import { CandidatesHeader } from "@/components/candidates/candidates-header";
import { FilterSidebar } from "@/components/candidates/filter-sidebar";
import { CandidateList } from "@/components/candidates/candidate-list";
import { ScoreWeighting } from "@/components/candidates/score-weighting";
import { Candidate, FilterOption, ScoreWeight } from "@/types/candidates";

// --- DUMMY DATA ---
// We add more data to make the filtering meaningful

const allCandidates: Candidate[] = [
  {
    id: "c-1",
    name: "Eleanor Vance",
    title: "Product Manager at Innovate Inc.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhbljzskCvbKmlr0iLS6nNLscPw38x41wJ7PVUBG-r_xjxj-aEHBvEcSkE1ve1qt2ylWfeMvUWZUEKOBnaWNKPt8c_okiF-v9yT6FN00PebAJBfKKWc3bwpd9phmIUJkFdeVo-YxsRpmyLAeBds8Ni71tgRC7SpSf23JV-NotBllc2X-NvZiA_a3GYtqjhJ-_b7qVEKy5mgCPj9plohIXHpmopUAdWoPmeAh92TdDQxaesoU5y9bKOesmyVjNLhWbMl7nhVZctwhIv",
    avatarFallback: "EV",
    compositeScore: 92,
    scores: { skills: 95, experience: 90, cultureFit: 88 },
    status: "Interview",
    experienceYears: 8,
    skills: ["Product Roadmapping", "Agile Methodologies"],
  },
  {
    id: "c-2",
    name: "Marcus Chen",
    title: "Lead Developer at Tech Solutions",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdtdCtmeefuHk-Lk-gSZXO_wUMaiUOnvymTImSIhrQDfmF7T1bfsOfz5BsIgJp3OZ8OXGcstzha5-JaQL5vlEfBSNTGJ_sBFeL-8xeN0AYwoh-ZFSumEiB3pb0P1wWzLqtGBGFn8UP2RBkGTzrSkvshBE56PTAhucQ27AU0qtRSed0fxhJ3KCQMwONbXHYr4yXHzyWaFaWu44NATyjaUzzrLKlcrO7hDixHctciIPMuTJuT8BMrJhe0lcsPEqvcp9zevQmULjz6AOO",
    avatarFallback: "MC",
    compositeScore: 85,
    scores: { skills: 88, experience: 92, cultureFit: 75 },
    status: "Screening",
    experienceYears: 10,
    skills: ["Agile Methodologies"],
  },
  {
    id: "c-3",
    name: "Aisha Khan",
    title: "UX Designer at Creative Minds",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBnYrWzau40CLGxlIaaTrsSPaKbELM4QBxgB-6L-HbW14rvKZeRuZS58u2CixFkw12i8ZVABe-qkOCtsiHdwh-d7UAWnvrg9NdhjbHBrvZMmo2trJJCvyKPLtCLBDVG0K-pLbe842SlqbIG9IPilkL3CazxGYtd0pNl-upBXE6Nv9fl2U1NxtAi8t2sh-W0zAeZweYSUJmsJOt3eDQRCWSD4Tt6goelqhJ-Ixw56kAM4kt2XbpcJ_a0NXRSwwluCjb1cGu8uQELFO0",
    avatarFallback: "AK",
    compositeScore: 71,
    scores: { skills: 75, experience: 68, cultureFit: 70 },
    status: "Screening",
    experienceYears: 4,
    skills: ["Figma"],
  },
  {
    id: "c-4",
    name: "David Lee",
    title: "Senior PM at FinTech Co",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyUjx0GRswAN3g39TeRv378BrSZrvXeBITvgHT07dJgwx9L0-eUvo7h_NBOKvZbPQXyq6MmFBrIWlA3P9P5yXC6XdTShUq1Ip4Wg2DncRVnVq3B3jjP0QnG1GVkuMqolXL8_OLLAoDRCgxRIo9zAU164wgeYPIiEmupcnbJhmfAIPRDygL5SjMt8jH4rcI4Lz5it5gvOV07GpK2f98mXnkXOdEvaXPqk7WrGIdlLpAb5gLOBlwGKHXdkoKK8zw0-P9yJqK9oar38OY3",
    avatarFallback: "DL",
    compositeScore: 95,
    scores: { skills: 92, experience: 95, cultureFit: 94 },
    status: "Interview",
    experienceYears: 9,
    skills: ["Product Roadmapping", "Agile Methodologies", "Figma"],
  },
  {
    id: "c-5",
    name: "Sophia Grant",
    title: "Associate Product Manager",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyUjx0GRswAN3g39TeRv378BrSZrvXeBITvgHT07dJgwx9L0-eUvo7h_NBOKvZbPQXyq6MmFBrIWlA3P9P5yXC6XdTShUq1Ip4Wg2DncRVnVq3B3jjP0QnG1GVkuMqolXL8_OLLAoDRCgxRIo9zAU164wgeYPIiEmupcnbJhmfAIPRDygL5SjMt8jH4rcI4Lz5it5gvOV07GpK2f98mXnkXOdEvaXPqk7WrGIdlLpAb5gLOBlwGKHXdkoKK8zw0-P9yJqK9oar38OY4",
    avatarFallback: "SG",
    compositeScore: 78,
    scores: { skills: 80, experience: 70, cultureFit: 85 },
    status: "Offer",
    experienceYears: 3,
    skills: ["Agile Methodologies", "Figma"],
  },
];

const scoreWeights: ScoreWeight[] = [
  { id: "skills-match", label: "Skills Match", value: 40 },
  { id: "experience-match", label: "Relevant Experience", value: 35 },
  { id: "communication-match", label: "Communication", value: 15 },
  { id: "culture-fit", label: "Culture Fit", value: 10 },
];

// --- INITIAL FILTER STATE ---
const initialStatusOptions: FilterOption[] = [
  { id: "status-screening", label: "Screening", checked: true },
  { id: "status-interview", label: "Interview", checked: true },
  { id: "status-offer", label: "Offer", checked: false },
  { id: "status-hired", label: "Hired", checked: false },
];

const initialSkillOptions: FilterOption[] = [
  { id: "skill-roadmap", label: "Product Roadmapping", checked: false },
  { id: "skill-agile", label: "Agile Methodologies", checked: false },
  { id: "skill-figma", label: "Figma", checked: false },
];

const initialExperienceValue = 3; // Default to 3+ years

// --- COMPONENT ---

export function CandidatesView() {
  // --- STATE ---
  const [statusFilters, setStatusFilters] =
    useState<FilterOption[]>(initialStatusOptions);
  const [skillFilters, setSkillFilters] =
    useState<FilterOption[]>(initialSkillOptions);
  const [experienceFilter, setExperienceFilter] = useState(
    initialExperienceValue
  );

  // --- FILTER LOGIC ---
  const filteredCandidates = useMemo(() => {
    // Get active (checked) status filters
    const activeStatuses = statusFilters
      .filter((option) => option.checked)
      .map((option) => option.label);

    // Get active (checked) skill filters
    const activeSkills = skillFilters
      .filter((option) => option.checked)
      .map((option) => option.label);

    return allCandidates.filter((candidate) => {
      // 1. Filter by Status
      // If no statuses are selected, show all (or handle as needed)
      // Here, we check if the candidate's status is in the active list.
      if (
        activeStatuses.length > 0 &&
        !activeStatuses.includes(candidate.status)
      ) {
        return false;
      }

      // 2. Filter by Experience
      if (candidate.experienceYears < experienceFilter) {
        return false;
      }

      // 3. Filter by Skills
      // If no skills are selected, show all candidates (ignore skill filter)
      if (activeSkills.length === 0) {
        return true;
      }
      // Check if the candidate has AT LEAST ONE of the selected skills
      return activeSkills.some((skill) => candidate.skills.includes(skill));
    });
  }, [statusFilters, skillFilters, experienceFilter]);

  // --- EVENT HANDLERS ---
  const handleStatusChange = (id: string, checked: boolean) => {
    setStatusFilters((prev) =>
      prev.map((option) => (option.id === id ? { ...option, checked } : option))
    );
  };

  const handleSkillChange = (id: string, checked: boolean) => {
    setSkillFilters((prev) =>
      prev.map((option) => (option.id === id ? { ...option, checked } : option))
    );
  };

  const handleExperienceChange = (value: number) => {
    setExperienceFilter(value);
  };

  const handleClearFilters = () => {
    setStatusFilters(initialStatusOptions);
    setSkillFilters(initialSkillOptions);
    setExperienceFilter(initialExperienceValue);
  };

  return (
    <div className="space-y-6">
      <CandidatesHeader />

      <div className="grid grid-cols-12 gap-8 items-start">
        <FilterSidebar
          statusOptions={statusFilters}
          skillOptions={skillFilters}
          experienceValue={experienceFilter}
          onStatusChange={handleStatusChange}
          onSkillChange={handleSkillChange}
          onExperienceChange={handleExperienceChange}
          onClearFilters={handleClearFilters}
        />
        <CandidateList
          candidates={filteredCandidates}
          totalCandidates={allCandidates.length}
        />
        <ScoreWeighting weights={scoreWeights} />
      </div>
    </div>
  );
}
