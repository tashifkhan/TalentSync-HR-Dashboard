import type { Candidate, Job, Interview } from "./types";

export const mockKpis = {
  timeToFill: { value: "28d", delta: { value: "-12%", direction: "down" as const } },
  pipelineVelocity: { value: "2.1x", delta: { value: "+0.3x", direction: "up" as const } },
  costPerHire: { value: "$3.3k", delta: { value: "-8%", direction: "down" as const } },
  qualityOfHire: { value: "84", delta: { value: "+3", direction: "up" as const } },
};

export const mockJobs: Job[] = [
  { id: "job1", title: "Senior Full-Stack Engineer", department: "Engineering", status: "Open", candidatesInPipeline: 23, timeToFillDays: 35, aiConfidence: 92 },
  { id: "job2", title: "Product Manager", department: "Product", status: "Open", candidatesInPipeline: 17, timeToFillDays: 42, aiConfidence: 88 },
  { id: "job3", title: "Data Analyst", department: "Data", status: "Paused", candidatesInPipeline: 8, timeToFillDays: 50, aiConfidence: 73 },
];

export const mockCandidates: Candidate[] = [
  { id: "c1", name: "Alex Morgan", currentRole: "Senior Engineer @ Acme", matchScore: 93, validationScore: "High", stage: "Screening" },
  { id: "c2", name: "Priya Patel", currentRole: "PM @ Nimbus", matchScore: 88, validationScore: "Medium", stage: "Interview" },
  { id: "c3", name: "Diego Ruiz", currentRole: "Analyst @ Contoso", matchScore: 76, validationScore: "Low", stage: "Applied" },
  { id: "c4", name: "Sara Kim", currentRole: "Staff Engineer @ Globex", matchScore: 96, validationScore: "High", stage: "Offer" },
];

export const mockInterviews: Interview[] = [
  { id: "i1", candidateId: "c1", jobId: "job1", when: new Date().toISOString(), stage: "Tech Screen" },
  { id: "i2", candidateId: "c2", jobId: "job2", when: new Date(Date.now() + 86400000).toISOString(), stage: "HM" },
];
