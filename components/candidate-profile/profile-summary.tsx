import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // <-- Imports added
import { CandidateProfile } from "@/types/candidate-profile";
import { CheckCircle, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

type ProfileSummaryProps = {
  profile: CandidateProfile;
};

export function ProfileSummary({ profile }: ProfileSummaryProps) {
  return (
    <div className="space-y-6">
      {/* AI Summary --- Wrapped in Card --- */}
      <Card>
        <Accordion type="single" collapsible defaultValue="ai-summary">
          {/* --- Updated: Removed custom bg/border --- */}
          <AccordionItem value="ai-summary" className="border-b-0">
            {/* --- Updated: Padding moved to CardHeader/CardContent --- */}
            <AccordionTrigger className="p-4 text-base font-semibold">
              AI Summary
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              {/* --- Updated: Use text-muted-foreground --- */}
              <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                {profile.aiSummary}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      {/* Fact Check Flags (No change - This is a semantic warning block) */}
      {profile.factChecks.length > 0 && (
        <div className="flex flex-col rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4 gap-3">
          <div className="flex items-center gap-3">
            <Flag className="h-6 w-6 text-amber-500 dark:text-warning" />
            <h3 className="text-amber-800 dark:text-amber-200 text-base font-semibold leading-normal">
              Fact-Check Flags ({profile.factChecks.length})
            </h3>
          </div>
          <div className="flex flex-col gap-2 pl-8">
            <Accordion type="multiple" className="w-full">
              {profile.factChecks.map((flag) => (
                <AccordionItem
                  key={flag.id}
                  value={flag.id}
                  className="border-b-0"
                >
                  <AccordionTrigger className="text-amber-700 dark:text-amber-300 text-sm font-medium p-0 hover:no-underline">
                    {flag.summary}
                  </AccordionTrigger>
                  <AccordionContent className="text-amber-600 dark:text-amber-400 text-sm mt-1 pb-0">
                    <p>{flag.details}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      )}

      {/* Key Skills --- Converted to Card --- */}
      <Card>
        {/* --- Updated: Replaced h3 with CardHeader/CardTitle --- */}
        <CardHeader className="p-4">
          <CardTitle className="text-base font-semibold leading-normal">
            Key Skills
          </CardTitle>
        </CardHeader>
        {/* --- Updated: Content wrapped in CardContent --- */}
        <CardContent className="p-4 pt-0">
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge
                key={skill.id}
                variant={skill.isMatched ? "default" : "secondary"}
                className={
                  skill.isMatched
                    ? "bg-primary/20 text-primary hover:bg-primary/20 dark:text-primary border-none"
                    : ""
                }
              >
                {skill.isMatched && <CheckCircle className="h-4 w-4 mr-1.5" />}
                {skill.label}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience Timeline --- Converted to Card --- */}
      <Card>
        {/* --- Updated: Replaced h3 with CardHeader/CardTitle --- */}
        <CardHeader className="p-4">
          <CardTitle className="text-base font-semibold leading-normal">
            Experience Timeline
          </CardTitle>
        </CardHeader>
        {/* --- Updated: Content wrapped in CardContent --- */}
        <CardContent className="p-4 pt-0">
          <div className="relative pl-6">
            {/* --- Updated: Use bg-border for theme-aware line --- */}
            <div className="absolute left-[1.5px] h-full w-0.5 bg-border"></div>
            <div className="relative flex flex-col gap-6">
              {profile.experience.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div
                    className={cn(
                      /* --- Updated: Use border-background --- */
                      "absolute -left-1.5 mt-1 size-3 rounded-full border-2 border-background",
                      /* --- Updated: Use bg-muted-foreground for inactive dot --- */
                      item.isCurrent
                        ? "bg-primary"
                        : "bg-muted-foreground"
                    )}
                  ></div>
                  <div className="flex flex-col">
                    {/* --- Updated: Use text-foreground --- */}
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    {/* --- Updated: Use text-muted-foreground --- */}
                    <p className="text-sm text-muted-foreground">
                      {item.company}
                    </p>
                    {/* --- Updated: Use text-muted-foreground --- */}
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.dates}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}