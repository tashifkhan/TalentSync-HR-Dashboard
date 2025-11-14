// components/profile/profile-header.tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ChevronRight, Share, X, ArrowRight } from "lucide-react";

type ProfileHeaderProps = {
  name: string;
  jobTitle: string;
};

export function ProfileHeader({ name, jobTitle }: ProfileHeaderProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="text-subtext-light dark:text-subtext-dark"
            >
              Candidates
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="text-subtext-light dark:text-subtext-dark"
            >
              {jobTitle}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-text-light dark:text-text-dark">
              {name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* PageHeading */}
      <div className="flex flex-wrap justify-between gap-4 items-center mb-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-text-light dark:text-text-dark text-3xl font-bold tracking-tight">
            {name}
          </h1>
          <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">
            Applying for:{" "}
            <span className="font-medium text-text-light dark:text-text-dark">
              {jobTitle}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant="secondary"
            className="gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <Share className="h-4 w-4" />
            <span className="truncate">Share</span>
          </Button>
          <Button
            variant="outline"
            className="gap-2 text-danger border-danger hover:bg-danger/10 hover:text-danger"
          >
            <X className="h-4 w-4" />
            <span className="truncate">Reject</span>
          </Button>
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <ArrowRight className="h-4 w-4" />
            <span className="truncate">Move to Next Stage</span>
          </Button>
        </div>
      </div>
    </>
  );
}
