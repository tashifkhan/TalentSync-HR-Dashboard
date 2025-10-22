import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockJobs } from "@/lib/mock";

export default function JobsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Jobs & Requisitions</h2>
        <Button>Create New Job</Button>
      </div>
      <Card padded={false}>
        <CardHeader>
          <CardTitle className="p-4">Open Roles</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-[var(--ts-text-muted-70)]">
                <tr>
                  <th className="p-3">Title</th>
                  <th className="p-3">Department</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Pipeline</th>
                  <th className="p-3">Time-to-Fill</th>
                  <th className="p-3">AI Confidence</th>
                </tr>
              </thead>
              <tbody>
                {mockJobs.map((job) => (
                  <tr key={job.id} className="border-t" style={{ borderColor: "var(--ts-border)" }}>
                    <td className="p-3">{job.title}</td>
                    <td className="p-3">{job.department}</td>
                    <td className="p-3">{job.status}</td>
                    <td className="p-3">{job.candidatesInPipeline}</td>
                    <td className="p-3">{job.timeToFillDays ?? "-"}d</td>
                    <td className="p-3">{job.aiConfidence ?? 0}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
