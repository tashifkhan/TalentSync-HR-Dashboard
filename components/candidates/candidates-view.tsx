// components/candidates/candidates-view.tsx
import { CandidatesHeader } from "@/components/candidates/candidates-header";
import { FilterSidebar } from "@/components/candidates/filter-sidebar";
import { CandidateList } from "@/components/candidates/candidate-list";
import { ScoreWeighting } from "@/components/candidates/score-weighting";
import { Candidate, FilterOption, ScoreWeight } from "@/types/candidates";

// --- Mock Data ---
// We keep the data here so the component is self-contained
const statusOptions: FilterOption[] = [
  { id: "status-screening", label: "Screening", checked: true },
  { id: "status-interview", label: "Interview", checked: true },
  { id: "status-offer", label: "Offer" },
  { id: "status-hired", label: "Hired" },
];

const skillOptions: FilterOption[] = [
  { id: "skill-roadmap", label: "Product Roadmapping" },
  { id: "skill-agile", label: "Agile Methodologies" },
  { id: "skill-figma", label: "Figma" },
];

const candidates: Candidate[] = [
  {
    id: "c-1",
    name: "Eleanor Vance",
    title: "Product Manager at Innovate Inc.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhbljzskCvbKmlr0iLS6nNLscPw38x41wJ7PVUBG-r_xjxj-aEHBvEcSkE1ve1qt2ylWfeMvUWZUEKOBnaWNKPt8c_okiF-v9yT6FN00PebAJBfKKWc3bwpd9phmIUJkFdeVo-YxsRpmyLAeBds8Ni71tgRC7SpSf23JV-NotBllc2X-NvZiA_a3GYtqjhJ-_b7qVEKy5mgCPj9plohIXHpmopUAdWoPmeAh92TdDQxaesoU5y9bKOesmyVjNLhWbMl7nhVZctwhIv",
    avatarFallback: "EV",
    compositeScore: 92,
    scores: { skills: 95, experience: 90, cultureFit: 88 },
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
  },
];

const scoreWeights: ScoreWeight[] = [
  { id: "skills-match", label: "Skills Match", value: 40 },
  { id: "experience-match", label: "Relevant Experience", value: 35 },
  { id: "communication-match", label: "Communication", value: 15 },
  { id: "culture-fit", label: "Culture Fit", value: 10 },
];

/**
 * Note: We've wrapped this in a `div` and removed the outer <main>
 * and max-w-screen-2xl to make it embeddable.
 */
export function CandidatesView() {
  return (
    <div className="space-y-6">
      <CandidatesHeader />

      {/* Three-column layout */}
      <div className="grid grid-cols-12 gap-8 items-start">
        <FilterSidebar
          statusOptions={statusOptions}
          skillOptions={skillOptions}
        />
        <CandidateList candidates={candidates} />
        <ScoreWeighting weights={scoreWeights} />
      </div>
    </div>
  );
}
