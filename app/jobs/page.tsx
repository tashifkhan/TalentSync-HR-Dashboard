// app/jobs/page.tsx
// import { Sidebar } from "@/components/jobs/sidebar";
import { Sidebar } from "@/components/jobs/sidebar";
import { RequisitionHeader } from "@/components/jobs/requisition-header";
import { RequisitionStats } from "@/components/jobs/requisition-stats";
import { PipelineBoard } from "@/components/jobs/pipeline-board";
import { TopCandidatesTable } from "@/components/jobs/top-candidates-table";
import { AiInsights } from "@/components/jobs/ai-insights";
import {
  AiInsight,
  PipelineColumnData,
  StatCardData,
  TopCandidate,
} from "@/types/jobs"; // <-- Updated path

// --- Mock Data ---
// This data would normally come from an API

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
  {
    id: "col-1",
    title: "Sourced",
    candidates: [
      {
        id: "c-3",
        name: "Olivia Martinez",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCyUjx0GRswAN3g39TeRv378BrSZrvXeBITvgHT07dJgwx9L0-eUvo7h_NBOKvZbPQXyq6MmFBrIWlA3P9P5yXC6XdTShUq1Ip4Wg2DncRVnVq3B3jjP0QnG1GVkuMqolXL8_OLLAoDRCgxRIo9zAU164wgeYPIiEmupcnbJhmfAIPRDygL5SjMt8jH4rcI4Lz5it5gvOV07GpK2f98mXnkXOdEvaXPqk7WrGIdlLpAb5gLOBlwGKHXdkoKK8zw0-P9yJqK9oar38OY",
        avatarFallback: "OM",
        aiMatch: 92,
      },
    ],
  },
  {
    id: "col-2",
    title: "Applied",
    candidates: [
      {
        id: "c-4",
        name: "Ethan Williams",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAJt3LOAKIAuPxmJkOY4FNJAlOP1OAj0WGLpQaSBderPhDhpoasT34BlWy6s6PIpEN7Nf74jlyuASVfXcA3mAxz6ZOm2cWL8ErcBXKnnmBCFLRoG6es-VqROR2kdZsgXGwGn9QPvMgCJU_AeR1rXOdxTJyfxJ8rscXEoG5bWDZUkDqoUnby6TsX0HMKaaGBGzKQayDlxDMQUzgJaLzNV0zFL-rG9bxOATkjq3u1gsLtyuj-pTXBZDeJUg6tI0KLXd_pSFJBLFFor1_d",
        avatarFallback: "EW",
        aiMatch: 88,
      },
      {
        id: "c-5",
        name: "Sophia Brown",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDVuWsHA7GxWsGcM1t9_IwOwkmxCTGuBwizoH0IsnroKhZ6c3jR8j3gUqiXwK5Fdeh9nMZ4XQNEtcCqet_JlZPgPmkfRlIB3Dh-jsdvSVIbhZHAPh4mO7jHDdMSvXwiuqsjeSU7O9wt4THbCEaZd6vmxTXBXB6XWLKRqmh3SELp9W3uwOfFBrUWLAHNNMPyC4tQS6ZNYljRIf3pslfLr6X31qzJCshIMS-yCpiDpptwF_znkd4ZswUoKRCC3RGDBnTDZZIdWrjIWY6g",
        avatarFallback: "SB",
        aiMatch: 85,
      },
    ],
  },
  {
    id: "col-3",
    title: "Screening",
    candidates: [
      {
        id: "c-2",
        name: "Liam Johnson",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBmXbQq1BFRP2UUI2PsYo3A8fTrF1GGL6GK8FzWoyaEa2WlIpOwZ7mDUttgXE4yRKFa25D9LJgGNT2KRqa7VdRb-HWt9f9JQ4MunLbXoNnGeK2UlZS9QB4am7kqs0pVmAMhThefSAv-WITZbGrL1gwkP7PSl1Fj1tVyQmI6JqHSv1jAeDteUeVzDYCkRobLTUVLmDqMX0TdoumbbJGSLmCIkO5uEF-mplJBpQzgvmqNmUv79boE3IOA-qQ_gO3FwdHhuJnL7xJuP7e8",
        avatarFallback: "LJ",
        aiMatch: 95,
      },
    ],
  },
  {
    id: "col-4",
    title: "Interview",
    candidates: [
      {
        id: "c-1",
        name: "Ava Garcia",
        avatarUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAlcZlfNo2BP0iW3qjdlNF6yMuuSRQxXW3At9ztf-kR2E3Wevu469TKGQXhlRdI4WHIluZLuhhxbAYE0lREtDguuox6uEK4SBUQ5qnSQgTBVSl6ol2bwEwexplWE5FYxXzjxv5sugKBkFIGzW6x1PemqdeMNg7JFsdh865nOvCRo-3jKv1gk6EaAWRMykRkD22gdxxbRmOhl3QIW9Hi3B77_QjcSGLPcmWrG3c3sDtDHFnRm9B8ln4cF2VdHsGLygDjNitNv2nNKeT1",
        avatarFallback: "AG",
        aiMatch: 98,
      },
    ],
  },
  { id: "col-5", title: "Offer", candidates: [] },
  { id: "col-6", title: "Hired", candidates: [] },
  { id: "col-7", title: "Rejected", candidates: [] }, // In a real app, you'd fetch the 4 rejected candidates
];

const topCandidates: TopCandidate[] = [
  {
    id: "c-1",
    name: "Ava Garcia",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDG-lSRCIxAgEiDK7BYaPNRlR6e2DpO5zJd8t2Mxx120j1X1z0YhMCTcU5AoEJ-7CWhTGrRBQTt7TIlAaUDcG1xV9tW_Jze6T3BDjx2F-wlr9AnJ-PQ2I2ul-AmRJj4TAGGzTScolTjQL2K3Nk1i71FFdxe49PVCq7ABn_CUTFTC7LddSX0AK_-Nlum-MJC9iaHmUPzdUc2eG7sNXLG3SDLZSO05CsHTPUgjTWBF89O7iJdryprZiML9H8J3eci_oak6HTUWRNRsXA-",
    avatarFallback: "AG",
    aiMatch: 98,
    stage: "Interview",
    lastActivity: "2 days ago",
  },
  {
    id: "c-2",
    name: "Liam Johnson",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHiKCH69tOIfMDNN9qoIfnC-OybKbQ5k4Y6ydYR0NRvtmEJaSwb1gdPl4mukXqp9I-Cz5K8XpdtN_-B9xIueii-THXRLV_6GWDaKQlb3N-mw3-wraRghNsdK_jF1NCZ7nKn6qI-EvpMba072FOPbEq5vVV92zoqSBBlykZs6BC0cErQLSPS5cxswq7CpBRM8G2EnWdNBBcfTNpGdKKiBU3UKc7ARUFqukXqbrhfZfBLl0hgrR7f4rxjM94KiWAgyZGop_JeQ9w7bpq",
    avatarFallback: "LJ",
    aiMatch: 95,
    stage: "Screening",
    lastActivity: "4 days ago",
  },
  {
    id: "c-3",
    name: "Olivia Martinez",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5x-uE9w7Vcl6kRLp1zyJJbXuPbe0gCbCCI3D-DW-FWCTr3PjpYrtmIwEomXfp9yQjh3O0IIn8I98pmCwB2PW5Z_vUSEu4NpN0ZFB7WjvgSiId1CYJpARE0P6kRSbxLbqJq3_cLk-i6jIREUO5tEIl2UFd96-dzEvY4yPzBsNmCnQbUMiTk-RdaLgkO1y4JDQdpNUlFrp7A2uVjxjM-irfS1bBrxatwxRvk1waor0GI4WLedvtz5_mS-GvRMkVg5VLaJMJRTxCfZIg",
    avatarFallback: "OM",
    aiMatch: 92,
    stage: "Sourced",
    lastActivity: "1 day ago",
  },
];

const aiInsights: AiInsight[] = [
  {
    id: "ai-1",
    text: "Potential bottleneck at Screening stage. Average time is 7 days, 40% above target.",
  },
  {
    id: "ai-2",
    text: "Top 3 candidates are awaiting feedback. Consider scheduling next steps.",
  },
];

// --- Page Component ---

export default function RequisitionOverviewPage() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-6">
          <RequisitionHeader
            title={requisitionData.title}
            jobId={requisitionData.jobId}
            location={requisitionData.location}
            status={requisitionData.status}
          />

          <RequisitionStats stats={statsData} />

          <PipelineBoard columns={pipelineColumns} />

          {/* KPI Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <TopCandidatesTable candidates={topCandidates} />
            <AiInsights insights={aiInsights} />
          </section>
        </div>
      </main>
    </div>
  );
}
