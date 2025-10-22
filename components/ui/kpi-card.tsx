import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function KpiCard({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta?: { value: string; direction: "up" | "down" };
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[var(--ts-text-muted-70)] text-xs uppercase tracking-wide">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <div className="text-2xl font-semibold text-[var(--ts-accent)]">{value}</div>
          {delta && (
            <div
              className={
                delta.direction === "up" ? "text-green-400 text-xs" : "text-red-400 text-xs"
              }
            >
              {delta.direction === "up" ? "▲" : "▼"} {delta.value}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
