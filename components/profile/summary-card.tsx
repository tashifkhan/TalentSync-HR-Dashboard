// components/profile/summary-card.tsx
"use client"; // This component needs to be a client component for the Dropdown
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SummaryCardData } from "@/types/profile";
import { CircularProgress } from "./circular-progress";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type SummaryCardProps = {
  data: SummaryCardData;
};

// Helper to get color for status badge
const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case "New Applicant":
      return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300";
    case "Screening":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 hover:bg-blue-200";
    case "Interview":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 hover:bg-yellow-200";
    case "Offer":
      return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-200";
    case "Hired":
      return "bg-green-200 text-green-900 dark:bg-green-800 dark:text-green-100 hover:bg-green-300";
    default:
      return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300";
  }
};

export function SummaryCard({ data }: SummaryCardProps) {
  const [status, setStatus] = useState(data.status);
  const statuses = [
    "New Applicant",
    "Screening",
    "Interview",
    "Offer",
    "Hired",
  ];

  return (
    <Card className="lg:col-span-3">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Avatar className="size-24 mb-4">
              <AvatarImage src={data.avatarUrl} alt={data.name} />
              <AvatarFallback className="text-3xl">
                {data.avatarFallback}
              </AvatarFallback>
            </Avatar>
            {data.isOnline && (
              <span className="absolute bottom-4 right-1 block h-4 w-4 rounded-full bg-secondary border-2 border-surface-light dark:border-surface-dark"></span>
            )}
          </div>
          <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">
            {data.name}
          </p>
          <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
            {data.email}
          </p>
          <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">
            {data.location}
          </p>
        </div>

        <TooltipProvider>
          <div className="mt-6 flex justify-around gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2">
                  <CircularProgress
                    percentage={data.aiMatch}
                    className="text-secondary"
                  />
                  <p className="text-xs text-subtext-light dark:text-subtext-dark font-medium">
                    AI Match
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Score based on AI analysis of resume vs. job description.</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center gap-2">
                  <CircularProgress
                    percentage={data.validated}
                    className="text-primary"
                  />
                  <p className="text-xs text-subtext-light dark:text-subtext-dark font-medium">
                    Validated
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Score based on public data and contribution analysis.</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>

        <div className="mt-6">
          <Label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">
            Status
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-between font-bold border-none transition-colors",
                  getStatusBadgeClass(status)
                )}
              >
                {status}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
              <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
                {statuses.map((s) => (
                  <DropdownMenuRadioItem key={s} value={s}>
                    {s}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-bold text-text-light dark:text-text-dark mb-2">
            Key Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="bg-primary/10 text-primary border-none text-xs font-semibold"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
