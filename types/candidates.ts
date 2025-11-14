// types/candidates.ts

export type FilterOption = {
  id: string;
  label: string;
  checked?: boolean;
  min?: number;
  max?: number;
};

export type CandidateScore = {
  skills: number;
  experience: number;
  cultureFit: number;
};

export type Candidate = {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  avatarFallback: string;
  compositeScore: number;
  scores: CandidateScore;
  status: string;
  experienceYears: number;
  skills: string[];
};

export type ScoreWeight = {
  id: string;
  label: string;
  value: number;
};
