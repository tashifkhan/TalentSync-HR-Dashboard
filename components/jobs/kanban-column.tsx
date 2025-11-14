// components/dashboard/kanban-column.tsx
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PipelineCandidate } from "@/types/jobs";
import { PipelineCandidateCard } from "./pipeline-candidate-card";

type KanbanColumnProps = {
  title: string;
  candidates: PipelineCandidate[];
};

export function KanbanColumn({ title, candidates }: KanbanColumnProps) {
  return (
    <Card className="flex flex-col gap-4 bg-gray-100 dark:bg-gray-900/60 rounded-xl p-4 min-h-[300px] border-none">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-gray-800 dark:text-gray-200">{title}</h3>
        <Badge
          variant="secondary"
          className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
        >
          {candidates.length}
        </Badge>
      </div>
      <div className="space-y-3">
        {candidates.map((candidate) => (
          <PipelineCandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </Card>
  );
}
