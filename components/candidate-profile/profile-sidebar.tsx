// components/candidate-profile/profile-sidebar.tsx
"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CandidateStub } from "@/types/candidate-profile";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type ProfileSidebarProps = {
  candidates: CandidateStub[];
  activeCandidateId: string;
};

export function ProfileSidebar({
  candidates,
  activeCandidateId,
}: ProfileSidebarProps) {
  return (
    <aside className="flex flex-col w-full max-w-xs border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark/50 overflow-y-auto">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-col">
          <h1 className="text-slate-900 dark:text-white text-base font-semibold leading-normal">
            Candidates
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
            Senior Product Manager
          </p>
        </div>
      </div>
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 dark:text-slate-400" />
          <Input
            placeholder="Find candidates..."
            className="pl-10 bg-background-light dark:bg-slate-800"
          />
        </div>
      </div>
      <nav className="flex-1 px-2 space-y-1">
        {candidates.map((candidate) => (
          <Link
            key={candidate.id}
            href={`/jobs/candidate/${candidate.id}`}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800",
              candidate.id === activeCandidateId &&
                "bg-primary/10 dark:bg-primary/20"
            )}
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={candidate.avatarUrl} alt={candidate.name} />
              <AvatarFallback>{candidate.avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p
                className={cn(
                  "text-sm font-medium leading-normal",
                  candidate.id === activeCandidateId
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-800 dark:text-slate-200"
                )}
              >
                {candidate.name}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs">
                {candidate.stage}
              </p>
            </div>
            <Badge
              variant="outline"
              className={cn(
                "text-sm font-semibold",
                candidate.matchScore > 90
                  ? "text-success border-success"
                  : "text-slate-600 dark:text-slate-400"
              )}
            >
              {candidate.matchScore}%
            </Badge>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
