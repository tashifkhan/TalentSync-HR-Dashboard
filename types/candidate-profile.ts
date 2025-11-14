// types/candidate-profile.ts

// For the left-hand list of candidates
export type CandidateStub = {
  id: string;
  name: string;
  stage: string;
  matchScore: number;
  avatarUrl: string;
  avatarFallback: string;
};

export type Skill = {
  id: string;
  label: string;
  isMatched: boolean;
};

export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  dates: string;
  isCurrent: boolean;
};

export type FactCheckFlag = {
  id: string;
  summary: string;
  details: string;
};

export type ScorecardItem = {
  id: string;
  label: string;
  score: number;
  maxScore: number;
};

// The full, detailed profile
export type CandidateProfile = {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  avatarFallback: string;
  matchScore: number;
  aiSummary: string;
  linkedInUrl?: string;
  portfolioUrl?: string;
  skills: Skill[];
  experience: ExperienceItem[];
  factChecks: FactCheckFlag[];
  scorecard: ScorecardItem[];
};
