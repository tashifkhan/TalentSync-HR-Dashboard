// components/dashboard/pipeline-candidate-card.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PipelineCandidate } from "@/types/jobs";

type PipelineCandidateCardProps = {
  candidate: PipelineCandidate;
};

export function PipelineCandidateCard({
  candidate,
}: PipelineCandidateCardProps) {
  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={candidate.avatarUrl}
              alt={`${candidate.name}'s avatar`}
            />
            <AvatarFallback>{candidate.avatarFallback}</AvatarFallback>
          </Avatar>
          <p className="font-medium text-sm text-gray-800 dark:text-gray-200">
            {candidate.name}
          </p>
        </div>
        <p className="mt-2 text-xs font-bold text-teal-600 dark:text-teal-400">
          AI Match: {candidate.aiMatch}%
        </p>
      </CardContent>
    </Card>
  );
}
