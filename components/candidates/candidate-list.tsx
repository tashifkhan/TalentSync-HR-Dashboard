// components/candidates/candidate-list.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label"; // Make sure Label is imported
import { Candidate } from "@/types/candidates";
import { ArrowDown } from "lucide-react";
import { CandidateCard } from "./candidate-card";

type CandidateListProps = {
  candidates: Candidate[];
  totalCandidates: number; // Add this prop
};

export function CandidateList({
  candidates,
  totalCandidates,
}: CandidateListProps) {
  return (
    <section className="col-span-12 lg:col-span-6">
      <Card className="p-2 sm:p-4">
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Checkbox id="select-all" className="h-5 w-5" />
            <Label
              htmlFor="select-all"
              className="text-base font-semibold text-slate-700 dark:text-slate-200"
            >
              {/* Use dynamic candidate counts */}
              Showing {candidates.length} of {totalCandidates} candidates
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Sort by:
            </span>
            <Button
              variant="ghost"
              className="flex items-center gap-1 text-sm font-semibold text-slate-800 dark:text-slate-100 p-1 h-auto"
            >
              Composite Score
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <CardContent className="p-0">
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {/* If no candidates match, show a message */}
            {candidates.length === 0 ? (
              <p className="p-8 text-center text-slate-500 dark:text-slate-400">
                No candidates match the current filters.
              </p>
            ) : (
              candidates.map((candidate) => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
