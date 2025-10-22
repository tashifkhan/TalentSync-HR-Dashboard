import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Predictive Analytics & Reporting</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Source Effectiveness</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-56 border border-dashed rounded" style={{ borderColor: "var(--ts-border)" }} />
            <p className="text-xs text-[var(--ts-text-muted-50)] mt-2">Bar chart placeholder</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Time-to-Fill / Pipeline Velocity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-56 border border-dashed rounded" style={{ borderColor: "var(--ts-border)" }} />
            <p className="text-xs text-[var(--ts-text-muted-50)] mt-2">Line chart placeholder</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quality-of-Hire Correlation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-56 border border-dashed rounded" style={{ borderColor: "var(--ts-border)" }} />
            <p className="text-xs text-[var(--ts-text-muted-50)] mt-2">Scatter plot placeholder</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>DEI Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-56 border border-dashed rounded" style={{ borderColor: "var(--ts-border)" }} />
            <p className="text-xs text-[var(--ts-text-muted-50)] mt-2">Stacked chart placeholder</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
