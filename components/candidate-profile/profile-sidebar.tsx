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
    // --- Updated: Use theme-aware bg-background and border-r ---
    <aside className="flex flex-col w-full max-w-xs border-r bg-background overflow-y-auto">
      {/* --- Updated: Use theme-aware border-b --- */}
      <div className="p-4 border-b">
        <div className="flex flex-col">
          {/* --- Updated: Use text-foreground --- */}
          <h1 className="text-foreground text-base font-semibold leading-normal">
            Candidates
          </h1>
          {/* --- Updated: Use text-muted-foreground --- */}
          <p className="text-muted-foreground text-sm font-normal leading-normal">
            Senior Product Manager
          </p>
        </div>
      </div>
      <div className="p-4">
        <div className="relative">
          {/* --- Updated: Use text-muted-foreground --- */}
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Find candidates..."
            // --- Updated: Removed custom bg-* classes ---
            className="pl-10"
          />
        </div>
      </div>
      <nav className="flex-1 px-2 space-y-1">
        {candidates.map((candidate) => (
          <Link
            key={candidate.id}
            href={`/jobs/candidate/${candidate.id}`}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg",
              // --- Updated: Use theme-aware accent for hover/active ---
              "hover:bg-accent hover:text-accent-foreground",
              candidate.id === activeCandidateId &&
                "bg-accent text-accent-foreground"
            )}
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={candidate.avatarUrl} alt={candidate.name} />
              <AvatarFallback>{candidate.avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p
                // --- Updated: Simplified to text-foreground ---
                // (Parent Link's "text-accent-foreground" will override on hover/active)
                className={cn(
                  "text-sm font-medium leading-normal text-foreground"
                )}
              >
                {candidate.name}
              </p>
              {/* --- Updated: Use text-muted-foreground --- */}
              <p className="text-muted-foreground text-xs">
                {candidate.stage}
              </p>
            </div>
            <Badge
              variant="outline"
              className={cn(
                "text-sm font-semibold",
                candidate.matchScore > 90
                  ? "text-success border-success" // Semantic color (good)
                  : "text-muted-foreground" // --- Updated ---
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