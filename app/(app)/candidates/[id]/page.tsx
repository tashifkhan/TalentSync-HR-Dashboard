import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockCandidates } from "@/lib/mock";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CandidateDetail({ params }: any) {
	const candidate =
		mockCandidates.find((c) => c.id === params.id) ?? mockCandidates[0];
	return (
		<div className="space-y-4">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<Card className="lg:col-span-1">
					<CardHeader>
						<CardTitle>{candidate.name}</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2">
						<div className="text-sm text-[var(--ts-text-muted-70)]">
							{candidate.currentRole}
						</div>
						<div className="flex items-center gap-2">
							<span className="text-[var(--ts-accent)] font-medium">
								Match {candidate.matchScore}%
							</span>
							<Badge
								variant={
									candidate.validationScore === "High"
										? "success"
										: candidate.validationScore === "Medium"
										? "warning"
										: "danger"
								}
							>
								{candidate.validationScore} Validation
							</Badge>
						</div>
						<div className="text-xs text-[var(--ts-text-muted-50)]">
							Stage: {candidate.stage}
						</div>
					</CardContent>
				</Card>

				<Card className="lg:col-span-2">
					<CardHeader>
						<CardTitle>AI Resume/JD Semantic Match</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="list-disc pl-5 space-y-1 text-sm text-[var(--ts-text-muted-70)]">
							<li>Matched skills: React, TypeScript, Node.js</li>
							<li>Transferable skills: System Design, CI/CD, Cloud (AWS)</li>
							<li>Gaps: Direct experience with GraphQL</li>
						</ul>
					</CardContent>
				</Card>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<Card className="lg:col-span-2">
					<CardHeader>
						<CardTitle>Interview Timeline & Insights</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2 text-sm text-[var(--ts-text-muted-70)]">
						<div>
							09/15: Phone screen summary generated. Top strengths: ownership,
							comms.
						</div>
						<div>
							09/20: Tech screen summary generated. Top strengths: React
							performance, TS mastery.
						</div>
						<div>
							Search transcript: <span className="ts-badge">AWS</span>{" "}
							<span className="ts-badge">Python</span>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Internal Feedback</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2 text-sm">
						<div
							className="border rounded p-2"
							style={{ borderColor: "var(--ts-border)" }}
						>
							<div className="font-medium">HM Scorecard</div>
							<div className="text-[var(--ts-text-muted-70)]">
								Tech: 4/5, Team Fit: 5/5, Comms: 4/5
							</div>
							<div className="text-[var(--ts-text-muted-50)]">
								Recommend Interview
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
