export type Job = {
  id: string;
  title: string;
  department: string;
  status: "Open" | "Paused" | "Closed";
  candidatesInPipeline: number;
  timeToFillDays?: number;
  aiConfidence?: number; // 0-100
};

export type Candidate = {
  id: string;
  name: string;
  currentRole: string;
  matchScore: number; // 0-100
  validationScore: "High" | "Medium" | "Low";
  stage: string;
};

export type Interview = {
  id: string;
  candidateId: string;
  jobId: string;
  when: string; // ISO
  stage: string;
};
