// app/jobs/candidate/[id]/page.tsx
import { TopNavbar } from "@/components/candidates/top-navbar";
import { FeedbackPanel } from "@/components/candidate-profile/feedback-panel";
import { ProfileHeader } from "@/components/candidate-profile/profile-header";
import { ProfileSidebar } from "@/components/candidate-profile/profile-sidebar";
import { ProfileSummary } from "@/components/candidate-profile/profile-summary";
import { CandidateProfile, CandidateStub } from "@/types/candidate-profile";

// --- MOCK DATA ---
// In a real app, you'd fetch this from your database/API

const allCandidatesStub: CandidateStub[] = [
  {
    id: "c-1",
    name: "John Doe",
    stage: "AI Screening",
    matchScore: 92,
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDo-Vqh5BSoyr0gBppZkK-bzvFWHRaTWB54uMyySeNVjoHjTI5IPqXKV0JA_4rR9SB-bnri4b8YT-7q2vk6zCvZFoD3BGwWD9TXMCktK_aTQ0bghVz50EXWgLsteq0UXzHWyQhvuicE6fvHw4Xp4BjSlTpb7KdZ3WT4cAaTVV0ltF-nQC4iSGKvpVUMETHtgzFnESn4_XLH9X8lXGFqTO7sIbmbrn4yQWFI1vup_k_W0xCW08ZRpIiWjN5cFwHeGHTIr09yFuCxsW3D",
    avatarFallback: "JD",
  },
  {
    id: "c-2",
    name: "Jane Smith",
    stage: "AI Screening",
    matchScore: 88,
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXvm_iPvq__Y7ftPiqMwR3QmEzUhAAYzYHwPNEsJONr1Uz_hKZjxT9WP_Yf8RYSt08mWQfp4fq6FnM0CKjCtPd7GSdbYzSWygeBSu5TsIRwy2HBSifnixHV_5GJpcbznes_bHdTRwsh8dSKmFwyi471SGxPnEWeTmSjgqgyZJF8GQggrgvoI4z17-9dbJlpiEXKeJ9jMbREQet2ge9OQ0eUHq6nfUgecox3pTJ6pNU-vKSJQ0h5VGre6r3KTcwqufn0NEAFjKbhPHV",
    avatarFallback: "JS",
  },
  {
    id: "c-3",
    name: "Peter Jones",
    stage: "AI Screening",
    matchScore: 85,
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCimbUXXtkPfQYbzCD3WTdcCt428Y3M-4prbTQHYze-Q5rHgnKkjg--ER6rCeBu5a41UtFEh4ORNOWjwmvF8hShSofOBdPOZEzjSDr-zQT8Dt4V4ttipLvlHHV7xb89JSg0LBn1j0t1tpgyfw1WQIc2YmlQcCVaKzfFHqyAwHN4nkU94q21zJXA5Lj5fSTzBOJN06djDagJj1GBb0_uWRTjojpp-WHmhIuzCXE-P2w7U05DKbhPp0YVtawkOCbTlNaEBqpQgou1JGP",
    avatarFallback: "PJ",
  },
  {
    id: "c-4",
    name: "Emily White",
    stage: "AI Screening",
    matchScore: 81,
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGQiWyPH4Ecjs-IathQlIPrCD5CTprjwODs-a58IGNDE1KR0RUgw_xjrqYyPaXeNMJohS2Sz0ZwVx754HAO5wAExLf9-GY1sqnixv2rTpiXZG0HGt2bsqab13drdd9nbTu3fgssxu4cUAulpRyj6c_dpONDQFeio1WPjO349kIsM-NRXtT0eJRbvY1DU3lBWo_PBpCtFvnOiZjNqZrjxHuyRjwPt452ABn7kuQzFeT7V8876mfjU0pk3tz5v-AogE299hq7pv4UF0b",
    avatarFallback: "EW",
  },
];

const candidateProfileData: Record<string, CandidateProfile> = {
  "c-1": {
    id: "c-1",
    name: "John Doe",
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
  // You would have entries for c-2, c-3, c-4 here
};

// Mock function to get data
async function getCandidateData(id: string) {
  // In a real app: const data = await db.candidates.find...
  const profile = candidateProfileData[id] || candidateProfileData["c-1"]; // Fallback to c-1
  const candidatesList = allCandidatesStub;
  return { profile, candidatesList };
}

// --- PAGE COMPONENT ---

type CandidateProfilePageProps = {
  params: { id: string };
};

export default async function CandidateProfilePage({
  params,
}: CandidateProfilePageProps) {
  const { id } = params;
  const { profile, candidatesList } = await getCandidateData(id);

  return (
    <div className="flex flex-col h-screen w-full bg-background-light dark:bg-background-dark">
      {/* We reuse the TopNavbar from the candidates-jobs page */}
      <TopNavbar />

      <main className="flex flex-1 overflow-hidden">
        <ProfileSidebar candidates={candidatesList} activeCandidateId={id} />

        <section className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <ProfileHeader profile={profile} />
            <ProfileSummary profile={profile} />
          </div>
        </section>

        <FeedbackPanel initialScorecard={profile.scorecard} />
      </main>
    </div>
  );
}
