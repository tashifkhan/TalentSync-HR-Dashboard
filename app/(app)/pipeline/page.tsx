import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockCandidates } from "@/lib/mock";
import type { Candidate } from "@/lib/types";

const stages = [
	"Sourced",
	"Applied",
	"Screening",
	"Interview",
	"Offer",
	"Hired",
] as const;

export default function PipelinePage() {
	const grouped: Record<string, Candidate[]> = Object.fromEntries(
		stages.map((s) => [s, [] as Candidate[]])
	) as Record<string, Candidate[]>;
	for (const c of mockCandidates) {
		(grouped[c.stage] ?? grouped["Applied"]).push(c);
	}
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-semibold">Candidate Pipeline</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
				{stages.map((stage) => (
					<Card key={stage}>
						<CardHeader>
							<CardTitle>{stage}</CardTitle>
						</CardHeader>
						<CardContent className="space-y-3">
							{grouped[stage].map((c) => (
								<div
									key={c.id}
									className="rounded-md border p-3"
									style={{ borderColor: "var(--ts-border)" }}
								>
									<div className="text-sm font-medium">{c.name}</div>
									<div className="text-xs text-[var(--ts-text-muted-50)]">
										{c.currentRole}
									</div>
									<div className="mt-2 flex items-center justify-between text-xs">
										<span className="text-[var(--ts-accent)]">
											Match {c.matchScore}%
										</span>
										<span
											className={
												c.validationScore === "High"
													? "ts-badge ts-badge-success"
													: c.validationScore === "Medium"
													? "ts-badge ts-badge-warning"
													: "ts-badge ts-badge-danger"
											}
										>
											{c.validationScore}
										</span>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
