import { KpiCard } from "@/components/ui/kpi-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockKpis, mockJobs } from "@/lib/mock";

export default function DashboardPage() {
	return (
		<div className="space-y-6">
			{/* KPI Row */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
				<KpiCard
					label="Time-to-Fill"
					value={mockKpis.timeToFill.value}
					delta={mockKpis.timeToFill.delta}
				/>
				<KpiCard
					label="Pipeline Velocity"
					value={mockKpis.pipelineVelocity.value}
					delta={mockKpis.pipelineVelocity.delta}
				/>
				<KpiCard
					label="Cost-per-Hire"
					value={mockKpis.costPerHire.value}
					delta={mockKpis.costPerHire.delta}
				/>
				<KpiCard
					label="Quality-of-Hire"
					value={mockKpis.qualityOfHire.value}
					delta={mockKpis.qualityOfHire.delta}
				/>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				{/* Pipeline Health Visualization Placeholder */}
				<Card>
					<CardHeader>
						<CardTitle>Pipeline Health</CardTitle>
					</CardHeader>
					<CardContent>
						<div
							className="h-48 rounded-md border border-dashed"
							style={{ borderColor: "var(--ts-border)" }}
						/>
						<p className="mt-2 text-[var(--ts-text-muted-70)] text-sm">
							Funnel chart placeholder
						</p>
					</CardContent>
				</Card>

				{/* Top Jobs to Focus On */}
				<Card>
					<CardHeader>
						<CardTitle>Top Jobs to Focus</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-3">
							{mockJobs.slice(0, 3).map((job) => (
								<li key={job.id} className="flex items-center justify-between">
									<div>
										<div className="text-sm font-medium">{job.title}</div>
										<div className="text-xs text-[var(--ts-text-muted-50)]">
											{job.department} • {job.candidatesInPipeline} candidates
										</div>
									</div>
									<div className="w-24 h-2 rounded bg-[var(--ts-bg-2)] overflow-hidden">
										<div
											className="h-full bg-[var(--ts-accent)]"
											style={{
												width: `${Math.min(100, job.aiConfidence ?? 0)}%`,
											}}
										/>
									</div>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>

				{/* Action Reminders */}
				<Card>
					<CardHeader>
						<CardTitle>Action Reminders</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="list-disc pl-5 text-sm space-y-2">
							<li>Review 5 candidates for Senior Full-Stack Engineer</li>
							<li>Follow up on HM feedback for PM role</li>
							<li>Send interview confirmations for 2 candidates</li>
						</ul>
						<Button className="mt-3">Open Tasks</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
