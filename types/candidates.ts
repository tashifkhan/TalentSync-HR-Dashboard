// types/candidates.ts

export type FilterOption = {
  id: string;
  label: string;
  checked?: boolean;
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
};

export type ScoreWeight = {
  id: string;
  label: string;
  value: number;
};
