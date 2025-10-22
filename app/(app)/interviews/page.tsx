import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InterviewsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Interview & Scheduling</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 border border-dashed rounded" style={{ borderColor: "var(--ts-border)" }} />
            <p className="text-xs text-[var(--ts-text-muted-50)] mt-2">Calendar sync placeholder</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Scheduling Assistant</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-[var(--ts-text-muted-70)]">
            <div>Input candidate/interviewer; AI suggests optimal slots.</div>
            <div className="border rounded p-3" style={{ borderColor: "var(--ts-border)" }}>
              <div className="font-medium text-[var(--ts-text)]">AI-Generated Interview Questions</div>
              <ul className="list-disc pl-5 mt-1">
                <li>Explain how you optimize React performance in large apps.</li>
                <li>Design a system to handle 10k RPS for file uploads.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
