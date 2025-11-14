// types/jobs.ts

export type StatCardData = {
  title: string;
  value: string;
  change?: string;
};

export type PipelineCandidate = {
  id: string;
  name: string;
  avatarUrl: string;
  avatarFallback: string;
  aiMatch: number;
};

export type PipelineColumnData = {
  id: string;
  title: string;
  candidates: PipelineCandidate[];
};

export type TopCandidate = {
  id: string;
  name: string;
  avatarUrl: string;
  avatarFallback: string;
  aiMatch: number;
  stage: string;
  lastActivity: string;
  email: string;
  phone: string;
  appliedDate: string;
};

export type AiInsight = {
  id: string;
  text: string;
};
// types/jobs.ts
// ... (other types)
