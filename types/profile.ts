// types/profile.ts

export type SummaryCardData = {
  id: string;
  name: string;
  email: string;
  location: string;
  avatarUrl: string;
  avatarFallback: string;
  isOnline: boolean;
  aiMatch: number;
  validated: number;
  status: string;
  skills: string[];
};

export type SocialLink = {
  id: string;
  name: string;
  url: string;
  handle: string;
  iconUrl: string;
};

export type Contribution = {
  id: string;
  text: string;
  url: string;
};

export type EnrichedData = {
  socials: SocialLink[];
  contributions: Contribution[];
};

export type InterviewFeedback = {
  id: string;
  title: string;
  interviewer: string;
  status: "Pending" | "Completed";
};

export type CommunicationItem = {
  id: string;
  type: "Email" | "StageMove" | "Application";
  title: string;
  highlight?: string; // <-- We'll add this optional field
  time: string;
};
export type OverviewData = {
  aiSummary: string;
  feedback: InterviewFeedback[];
  communication: CommunicationItem[];
};

// This combines all data for the page
export type FullProfile = {
  id: string;
  name: string;
  jobTitle: string;
  summary: SummaryCardData;
  enrichedData: EnrichedData;
  overview: OverviewData;
};
