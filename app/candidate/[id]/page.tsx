// app/candidates/[id]/page.tsx
// import { AppSidebar } from "@/components/layout/app-sidebar";
import { ProfileHeader } from "@/components/profile/profile-header";
import { SummaryCard } from "@/components/profile/summary-card";
import { MainContentTabs } from "@/components/profile/main-content-tabs";
import { EnrichedDataPanel } from "@/components/profile/enriched-data-panel";
import { FullProfile } from "@/types/profile";
import { Sidebar } from "@/components/jobs/sidebar";

// --- MOCK DATA ---
const allProfiles: Record<string, FullProfile> = {
  "c-1": {
    id: "c-1",
    name: "Eleanor Vance",
    jobTitle: "Senior Software Engineer",
    summary: {
      id: "c-1",
      name: "Eleanor Vance",
      email: "eleanor.vance@example.com",
      location: "San Francisco, CA",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAhbljzskCvbKmlr0iLS6nNLscPw38x41wJ7PVUBG-r_xjxj-aEHBvEcSkE1ve1qt2ylWfeMvUWZUEKOBnaWNKPt8c_okiF-v9yT6FN00PebAJBfKKWc3bwpd9phmIUJkFdeVo-YxsRpmyLAeBds8Ni71tgRC7SpSf23JV-NotBllc2X-NvZiA_a3GYtqjhJ-_b7qVEKy5mgCPj9plohIXHpmopUAdWoPmeAh92TdDQxaesoU5y9bKOesmyVjNLhWbMl7nhVZctwhIv",
      avatarFallback: "EV",
      isOnline: true,
      aiMatch: 92,
      validated: 95,
      status: "Interview",
      skills: ["Product Roadmapping", "Agile", "Jira", "Figma"],
    },
    enrichedData: {
      socials: [
        {
          id: "s-1",
          name: "LinkedIn",
          url: "#",
          handle: "/in/eleanorvance",
          iconUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAaO7JZNLQdSAiGx60D9v2XqKanaLr_VDHj0ztDqilrjOLNGIZ3DWZSQJCtGy7EwqNW-67fo_10IhEs1l_aaODdaakbF793PjQynt4KtVWBEzhObUQiStYG65fjjDUZGT0Wghkg7tlNLNHd2gqds7AwqRUV2-RQRTzdVR_eGqSmIXCqfjvtE0ypesK4koUic3wn7kZOrCRepVqONzl--LKBqCy3bdCWqZNoOlnoUfsNHvyELYjPdwImGWRsA3GeQLd7yTnxh5uhdzLb",
        },
        {
          id: "s-2",
          name: "GitHub",
          url: "#",
          handle: "@evance",
          iconUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBBLa55mi4vatI5pX5NbXcNKRfCMFgSujTC6xF51eOMgTP0KxBAQi6VQU-VPSthtjEDBmKSCqm3o6w37uvynaapiOeBvAlb3dINRSh2cf61hUEFydI7Wf60rlrVbWtC9_-jVCbQmruLGIJZkiaF6cMgs7PQSNxC4X-otnZ7QGJ29CauaRcDe5otTMpe0EzFjQcqjjSMHETfsTMPLeIa-32yKD8QROhvW-HFVfUlzvxwse9gDFffw0eKCUN5i6j6ltxw467E-rquwBXh",
        },
      ],
      contributions: [
        { id: "p-1", text: "Speaker at ProductCon 2023", url: "#" },
        { id: "p-2", text: "Medium blog on PM best practices", url: "#" },
      ],
    },
    overview: {
      aiSummary:
        "Eleanor is a strong candidate with 8 years of experience, aligning perfectly with the 'Product Roadmapping' and 'Agile' skill requirements. Her background at Innovate Inc. shows a clear progression. She is a top-tier match for this role.",
      feedback: [
        {
          id: "f-1",
          title: "Technical Screen",
          interviewer: "John Smith",
          status: "Completed",
        },
        {
          id: "f-2",
          title: "Hiring Manager Interview",
          interviewer: "Sarah Chen",
          status: "Pending",
        },
      ],
      communication: [
        // --- UPDATED DATA ---
        {
          id: "comm-1",
          type: "Email",
          title: "You sent an email: ",
          highlight: "Invitation to Interview",
          time: "1d ago",
        },
        {
          id: "comm-2",
          type: "StageMove",
          title: "Candidate moved to ",
          highlight: "Interview",
          time: "2d ago",
        },
        {
          id: "comm-3",
          type: "Application",
          title: "Applied for Senior Software Engineer",
          time: "6d ago",
        },
      ],
    },
  },
  "c-2": {
    id: "c-2",
    name: "Marcus Chen",
    jobTitle: "Senior Software Engineer",
    summary: {
      id: "c-2",
      name: "Marcus Chen",
      email: "marcus.chen@example.com",
      location: "New York, NY",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCdtdCtmeefuHk-Lk-gSZXO_wUMaiUOnvymTImSIhrQDfmF7T1bfsOfz5BsIgJp3OZ8OXGcstzha5-JaQL5vlEfBSNTGJ_sBFeL-8xeN0AYwoh-ZFSumEiB3pb0P1wWzLqtGBGFn8UP2RBkGTzrSkvshBE56PTAhucQ27AU0qtRSed0fxhJ3KCQMwONbXHYr4yXHzyWaFaWu44NATyjaUzzrLKlcrO7hDixHctciIPMuTJuT8BMrJhe0lcsPEqvcp9zevQmULjz6AOO",
      avatarFallback: "MC",
      isOnline: false,
      aiMatch: 85,
      validated: 88,
      status: "Screening",
      skills: ["Node.js", "TypeScript", "AWS", "SQL"],
    },
    enrichedData: {
      socials: [
        {
          id: "s-1",
          name: "LinkedIn",
          url: "#",
          handle: "/in/marcuschen",
          iconUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAaO7JZNLQdSAiGx60D9v2XqKanaLr_VDHj0ztDqilrjOLNGIZ3DWZSQJCtGy7EwqNW-67fo_10IhEs1l_aaODdaakbF793PjQynt4KtVWBEzhObUQiStYG65fjjDUZGT0Wghkg7tlNLNHd2gqds7AwqRUV2-RQRTzdVR_eGqSmIXCqfjvtE0ypesK4koUic3wn7kZOrCRepVqONzl--LKBqCy3bdCWqZNoOlnoUfsNHvyELYjPdwImGWRsA3GeQLd7yTnxh5uhdzLb",
        },
        {
          id: "s-2",
          name: "GitHub",
          url: "#",
          handle: "@marcus-chen",
          iconUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBBLa55mi4vatI5pX5NbXcNKRfCMFgSujTC6xF51eOMgTP0KxBAQi6VQU-VPSthtjEDBmKSCqm3o6w37uvynaapiOeBvAlb3dINRSh2cf61hUEFydI7Wf60rlrVbWtC9_-jVCbQmruLGIJZkiaF6cMgs7PQSNxC4X-otnZ7QGJ29CauaRcDe5otTMpe0EzFjQcqjjSMHETfsTMPLeIa-32yKD8QROhvW-HFVfUlzvxwse9gDFffw0eKCUN5i6j6ltxw467E-rquwBXh",
        },
      ],
      contributions: [
        { id: "p-1", text: "Contributor to Nest.js framework", url: "#" },
      ],
    },
    overview: {
      aiSummary:
        "Marcus has a deep technical background as a Lead Developer, with 10 years of experience. His skills in backend architecture (Node.js, AWS) are exceptional. He matches 85% due to less direct experience in 'Product Roadmapping', but his technical leadership is a major asset.",
      feedback: [
        {
          id: "f-1",
          title: "AI Screening",
          interviewer: "System",
          status: "Completed",
        },
        {
          id: "f-2",
          title: "Recruiter Screen",
          interviewer: "Anne Lee",
          status: "Pending",
        },
      ],
      communication: [
        {
          id: "comm-1",
          type: "StageMove",
          title: "Candidate moved to ",
          highlight: "Screening",
          time: "5d ago",
        },
        {
          id: "comm-2",
          type: "Application",
          title: "Applied for Senior Software Engineer",
          time: "6d ago",
        },
      ],
    },
  },
  "c-3": {
    id: "c-3",
    name: "Aisha Khan",
    jobTitle: "Senior Software Engineer",
    summary: {
      id: "c-3",
      name: "Aisha Khan",
      email: "aisha.khan@example.com",
      location: "Austin, TX",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBBnYrWzau40CLGxlIaaTrsSPaKbELM4QBxgB-6L-HbW14rvKZeRuZS58u2CixFkw12i8ZVABe-qkOCtsiHdwh-d7UAWnvrg9NdhjbHBrvZMmo2trJJCvyKPLtCLBDVG0K-pLbe842SlqbIG9IPilkL3CazxGYtd0pNl-upBXE6Nv9fl2U1NxtAi8t2sh-W0zAeZweYSUJmsJOt3eDQRCWSD4Tt6goelqhJ-Ixw56kAM4kt2XbpcJ_a0NXRSwwluCjb1cGu8uQELFO0",
      avatarFallback: "AK",
      isOnline: true,
      aiMatch: 71,
      validated: 75,
      status: "Screening",
      skills: ["Figma", "UI/UX Design", "React", "CSS"],
    },
    enrichedData: {
      socials: [
        {
          id: "s-1",
          name: "LinkedIn",
          url: "#",
          handle: "/in/aishakhan",
          iconUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAaO7JZNLQdSAiGx60D9v2XqKanaLr_VDHj0ztDqilrjOLNGIZ3DWZSQJCtGy7EwqNW-67fo_10IhEs1l_aaODdaakbF793PjQynt4KtVWBEzhObUQiStYG65fjjDUZGT0Wghkg7tlNLNHd2gqds7AwqRUV2-RQRTzdVR_eGqSmIXCqfjvtE0ypesK4koUic3wn7kZOrCRepVqONzl--LKBqCy3bdCWqZNoOlnoUfsNHvyELYjPdwImGWRsA3GeQLd7yTnxh5uhdzLb",
        },
        {
          id: "s-3",
          name: "Portfolio",
          url: "#",
          handle: "aisha.design",
          iconUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDccq1N8P27zeVASCIq9ilsFYC4K4EnEFdxjPzv9nbEcjj7kjWNFoGUCSBEZwPEy71fdeM2v2or6sSEb1hjFmUZZEfJQxspqghPHlp0hu5hRflrJ0h_WzFlAGICc2ieJOWxcHCMIJhsnmzhUT22mzu8HFu69BHwfeyO0IzkV1i5xC7O3cDEEsGeidrtJDatdlIVQidl4td4cXFh3NHy1_WfQlnHf2B7sqSj-WQRO3G7zUNO4fkX0wPW5p44aWK_f8Tp-2i1lCsSAnOv",
        },
      ],
      contributions: [
        { id: "p-1", text: "Dribbble Pro with 10k+ followers", url: "#" },
      ],
    },
    overview: {
      aiSummary:
        "Aisha comes from a strong design background (UX Designer) with 4 years of experience. Her frontend skills, especially in Figma and React, are excellent. The lower match score (71%) reflects her lack of experience in backend systems and senior-level product strategy.",
      feedback: [
        {
          id: "f-1",
          title: "AI Screening",
          interviewer: "System",
          status: "Completed",
        },
        {
          id: "f-2",
          title: "Recruiter Screen",
          interviewer: "Anne Lee",
          status: "Pending",
        },
      ],
      communication: [
        {
          id: "comm-1",
          type: "StageMove",
          title: "Candidate moved to ",
          highlight: "Screening",
          time: "5d ago",
        },
        {
          id: "comm-2",
          type: "Application",
          title: "Applied for Senior Software Engineer",
          time: "7d ago",
        },
      ],
    },
  },
  "c-4": {
    id: "c-4",
    name: "David Lee",
    jobTitle: "Senior Software Engineer",
    summary: {
      id: "c-4",
      name: "David Lee",
      email: "david.lee@example.com",
      location: "Seattle, WA",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCyUjx0GRswAN3g39TeRv378BrSZrvXeBITvgHT07dJgwx9L0-eUvo7h_NBOKvZbPQXyq6MmFBrIWlA3P9P5yXC6XdTShUq1Ip4Wg2DncRVnVq3B3jjP0QnG1GVkuMqolXL8_OLLAoDRCgxRIo9zAU164wgeYPIiEmupcnbJhmfAIPRDygL5SjMt8jH4rcI4Lz5it5gvOV07GpK2f98mXnkXOdEvaXPqk7WrGIdlLpAb5gLOBlwGKHXdkoKK8zw0-P9yJqK9oar38OY3",
      avatarFallback: "DL",
      isOnline: true,
      aiMatch: 95,
      validated: 94,
      status: "Interview",
      skills: ["Product Roadmapping", "Agile", "Figma", "React", "Node.js"],
    },
    enrichedData: {
      socials: [
        {
          id: "s-1",
          name: "LinkedIn",
          url: "#",
          handle: "/in/davidlee-pm",
          iconUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAaO7JZNLQdSAiGx60D9v2XqKanaLr_VDHj0ztDqilrjOLNGIZ3DWZSQJCtGy7EwqNW-67fo_10IhEs1l_aaODdaakbF793PjQynt4KtVWBEzhObUQiStYG65fjjDUZGT0Wghkg7tlNLNHd2gqds7AwqRUV2-RQRTzdVR_eGqSmIXCqfjvtE0ypesK4koUic3wn7kZOrCRepVqONzl--LKBqCy3bdCWqZNoOlnoUfsNHvyELYjPdwImGWRsA3GeQLd7yTnxh5uhdzLb",
        },
        {
          id: "s-2",
          name: "GitHub",
          url: "#",
          handle: "@davidlee",
          iconUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBBLa55mi4vatI5pX5NbXcNKRfCMFgSujTC6xF51eOMgTP0KxBAQi6VQU-VPSthtjEDBmKSCqm3o6w37uvynaapiOeBvAlb3dINRSh2cf61hUEFydI7Wf60rlrVbWtC9_-jVCbQmruLGIJZkiaF6cMgs7PQSNxC4X-otnZ7QGJ29CauaRcDe5otTMpe0EzFjQcqjjSMHETfsTMPLeIa-32yKD8QROhvW-HFVfUlzvxwse9gDFffw0eKCUN5i6j6ltxw467E-rquwBXh",
        },
      ],
      contributions: [
        { id: "p-1", text: "Core contributor to React Router", url: "#" },
      ],
    },
    overview: {
      aiSummary:
        "David is an exceptionally strong candidate, matching 95%. With 9 years at a FinTech co, he has a rare blend of senior-level product management and deep technical skills (React, Node.js). He matches all key criteria for the role.",
      feedback: [
        {
          id: "f-1",
          title: "Technical Screen",
          interviewer: "John Smith",
          status: "Completed",
        },
        {
          id: "f-2",
          title: "Hiring Manager Interview",
          interviewer: "Sarah Chen",
          status: "Pending",
        },
      ],
      communication: [
        {
          id: "comm-1",
          type: "Email",
          title: "You sent an email: ",
          highlight: "Invitation to Interview",
          time: "1d ago",
        },
        {
          id: "comm-2",
          type: "StageMove",
          title: "Candidate moved to ",
          highlight: "Interview",
          time: "2d ago",
        },
      ],
    },
  },
  "c-5": {
    id: "c-5",
    name: "Sophia Grant",
    jobTitle: "Senior Software Engineer",
    summary: {
      id: "c-5",
      name: "Sophia Grant",
      email: "sophia.grant@example.com",
      location: "Raleigh, NC",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCyUjx0GRswAN3g39TeRv378BrSZrvXeBITvgHT07dJgwx9L0-eUvo7h_NBOKvZbPQXyq6MmFBrIWlA3P9P5yXC6XdTShUq1Ip4Wg2DncRVnVq3B3jjP0QnG1GVkuMqolXL8_OLLAoDRCgxRIo9zAU164wgeYPIiEmupcnbJhmfAIPRDygL5SjMt8jH4rcI4Lz5it5gvOV07GpK2f98mXnkXOdEvaXPqk7WrGIdlLpAb5gLOBlwGKHXdkoKK8zw0-P9yJqK9oar38OY4",
      avatarFallback: "SG",
      isOnline: false,
      aiMatch: 78,
      validated: 80,
      status: "Offer",
      skills: ["Agile Methodologies", "Figma", "React", "Python"],
    },
    enrichedData: {
      socials: [
        {
          id: "s-1",
          name: "LinkedIn",
          url: "#",
          handle: "/in/sophiagrant",
          iconUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAaO7JZNLQdSAiGx60D9v2XqKanaLr_VDHj0ztDqilrjOLNGIZ3DWZSQJCtGy7EwqNW-67fo_10IhEs1l_aaODdaakbF793PjQynt4KtVWBEzhObUQiStYG65fjjDUZGT0Wghkg7tlNLNHd2gqds7AwqRUV2-RQRTzdVR_eGqSmIXCqfjvtE0ypesK4koUic3wn7kZOrCRepVqONzl--LKBqCy3bdCWqZNoOlnoUfsNHvyELYjPdwImGWRsA3GeQLd7yTnxh5uhdzLb",
        },
      ],
      contributions: [{ id: "p-1", text: "Speaker at PyCon 2023", url: "#" }],
    },
    overview: {
      aiSummary:
        "Sophia is a promising candidate with 3 years of experience as an APM. While more junior, her strong performance in the interviews and excellent culture fit led to an offer. Her skills in Python and data analysis are a unique bonus.",
      feedback: [
        {
          id: "f-1",
          title: "Final Interview",
          interviewer: "Exec Team",
          status: "Completed",
        },
        {
          id: "f-2",
          title: "Hiring Manager Interview",
          interviewer: "Sarah Chen",
          status: "Completed",
        },
      ],
      communication: [
        {
          id: "comm-1",
          type: "Email",
          title: "You sent an email: ",
          highlight: "Offer Letter",
          time: "1d ago",
        },
        {
          id: "comm-2",
          type: "StageMove",
          title: "Candidate moved to ",
          highlight: "Offer",
          time: "2d ago",
        },
      ],
    },
  },
};

async function getProfileData(id: string) {
  // Simulate API call
  return allProfiles[id] || allProfiles["c-1"]; // Fallback to c-1
}

// --- PAGE COMPONENT ---
type CandidateProfilePageProps = {
  params: { id: string };
};

export default async function CandidateProfilePage({
  params,
}: CandidateProfilePageProps) {
  const profile = await getProfileData(params.id);

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <ProfileHeader name={profile.name} jobTitle={profile.jobTitle} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <SummaryCard data={profile.summary} />
            <MainContentTabs overviewData={profile.overview} />
            <EnrichedDataPanel data={profile.enrichedData} />
          </div>
        </div>
      </main>
    </div>
  );
}
