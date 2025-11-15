import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"; // <-- Import Card
import { Progress } from "@/components/ui/progress";
import { CandidateProfile } from "@/types/candidate-profile";
import { Linkedin, Link } from "lucide-react";

type ProfileHeaderProps = {
  profile: CandidateProfile;
};

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    // --- Updated: Replaced outer div with <Card> for theme consistency ---
    <Card className="@container">
      <CardContent className="p-4">
        <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
          <div className="flex gap-6 items-center">
            <Avatar className="w-24 h-24 shrink-0">
              <AvatarImage src={profile.avatarUrl} alt={profile.name} />
              <AvatarFallback className="text-4xl">
                {profile.avatarFallback}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center">
              {/* --- Updated: Use `text-foreground` (default) --- */}
              <p className="text-foreground text-2xl font-bold leading-tight tracking-[-0.015em]">
                {profile.name}
              </p>
              {/* --- Updated: Use `text-muted-foreground` for secondary text --- */}
              <p className="text-muted-foreground text-base font-normal leading-normal mt-1">
                {profile.title}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-success font-semibold">
                  Match Score: {profile.matchScore}%
                </span>
                {/* --- Updated: Simplified Progress bar --- */}
                {/* Removed wrapper div, applied w-24 directly. */}
                {/* The Progress component's default track uses `bg-secondary` */}
                <Progress
                  value={profile.matchScore}
                  className="w-24 h-1.5 [&>div]:bg-success"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-3 @[520px]:w-auto shrink-0">
            {/* Buttons already use a theme variant (secondary), which is correct */}
            <Button
              variant="secondary"
              className="flex-1 @[520px]:flex-auto gap-2"
              asChild
            >
              <a
                href={profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="truncate">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="secondary"
              className="flex-1 @[520px]:flex-auto gap-2"
              asChild
            >
              <a
                href={profile.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link className="h-5 w-5" />
                <span className="truncate">Portfolio</span>
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}