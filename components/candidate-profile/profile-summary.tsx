// components/candidate-profile/profile-summary.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CandidateProfile } from "@/types/candidate-profile";
import { CheckCircle, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

type ProfileSummaryProps = {
  profile: CandidateProfile;
};

export function ProfileSummary({ profile }: ProfileSummaryProps) {
  return (
    <div className="space-y-6">
      {/* AI Summary */}
      <Accordion type="single" collapsible defaultValue="ai-summary">
        <AccordionItem
          value="ai-summary"
          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
        >
          <AccordionTrigger className="p-4 text-base font-semibold">
            AI Summary
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-4">
            <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed">
              {profile.aiSummary}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Fact Check Flags */}
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

      {/* Key Skills */}
      <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 gap-3">
        <h3 className="text-slate-900 dark:text-white text-base font-semibold leading-normal">
          Key Skills
        </h3>
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
      </div>

      {/* Experience Timeline */}
      <div className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 gap-4">
        <h3 className="text-slate-900 dark:text-white text-base font-semibold leading-normal">
          Experience Timeline
        </h3>
        <div className="relative pl-6">
          <div className="absolute left-[1.5px] h-full w-0.5 bg-slate-200 dark:bg-slate-700"></div>
          <div className="relative flex flex-col gap-6">
            {profile.experience.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <div
                  className={cn(
                    "absolute -left-1.5 mt-1 size-3 rounded-full border-2 border-white dark:border-slate-900",
                    item.isCurrent
                      ? "bg-primary"
                      : "bg-slate-300 dark:bg-slate-600"
                  )}
                ></div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.company}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                    {item.dates}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
