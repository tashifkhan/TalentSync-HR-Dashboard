import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Candidate } from "@/types/candidates";
import { Mail, ArrowRight } from "lucide-react"; // <-- Replaced Eye with ArrowRight
import { cn } from "@/lib/utils";

type CandidateCardProps = {
  candidate: Candidate;
};

const getProgressClass = (score: number) => {
  if (score >= 90) return "bg-gradient-to-r from-orange-400 to-emerald-500";
  if (score >= 80) return "bg-gradient-to-r from-orange-400 to-emerald-500";
  return "bg-gradient-to-r from-red-500 to-orange-400";
};

export function CandidateCard({ candidate }: CandidateCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors duration-200 group">
      <Checkbox className="h-5 w-5 mt-2" />
      <Avatar className="h-12 w-12">
        <AvatarImage src={candidate.avatarUrl} alt={candidate.name} />
        <AvatarFallback>{candidate.avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-bold text-slate-800 dark:text-slate-100">
              {candidate.name}
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {candidate.title}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-2xl font-bold ${
                candidate.compositeScore >= 90
                  ? "text-emerald-500"
                  : candidate.compositeScore >= 80
                  ? "text-orange-500"
                  : "text-red-500"
              }`}
            >
              {candidate.compositeScore}
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              / 100
            </span>
          </div>
        </div>
        <div className="mt-3">
          <Progress
            value={candidate.compositeScore}
            className="h-2 bg-slate-200 dark:bg-slate-700"
          >
            <div
              className={`h-2 rounded-full ${getProgressClass(
                candidate.compositeScore
              )}`}
              style={{ width: `${candidate.compositeScore}%` }}
            />
          </Progress>
          <div className="flex justify-between text-xs mt-2 text-slate-500 dark:text-slate-400">
            <span>Skills: {candidate.scores.skills}</span>
            <span>Experience: {candidate.scores.experience}</span>
            <span>Culture Fit: {candidate.scores.cultureFit}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity">
        {/* --- MODIFICATION HERE --- */}
        <Link
          href={`/jobs/candidate/${candidate.id}`}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "h-8 w-8 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300"
          )}
        >
          <ArrowRight className="h-4 w-4" /> {/* <-- Icon changed */}
        </Link>
        {/* --- END MODIFICATION --- */}

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300"
        >
          <Mail className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
