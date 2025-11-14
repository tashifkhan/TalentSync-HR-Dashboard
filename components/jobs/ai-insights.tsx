// components/dashboard/ai-insights.tsx
import { Card, CardContent } from "@/components/ui/card";
import { AiInsight } from "@/types/jobs";
import { Sparkles } from "lucide-react";

type AiInsightsProps = {
  insights: AiInsight[];
};

export function AiInsights({ insights }: AiInsightsProps) {
  return (
    <Card className="bg-teal-50 dark:bg-teal-900/30 rounded-xl border-teal-200 dark:border-teal-800 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="h-6 w-6 text-teal-600 dark:text-teal-400" />
        <h3 className="text-xl font-bold text-teal-900 dark:text-teal-200">
          AI Insights
        </h3>
      </div>
      <div className="space-y-4">
        {insights.map((insight) => (
          <Card key={insight.id}>
            <CardContent className="p-4">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {insight.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  );
}
