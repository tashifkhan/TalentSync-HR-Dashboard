// components/dashboard/requisition-header.tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

type RequisitionHeaderProps = {
  title: string;
  jobId: string;
  location: string;
  status: string;
};

export function RequisitionHeader({
  title,
  jobId,
  location,
  status,
}: RequisitionHeaderProps) {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary"
            >
              All Requisitions
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <ChevronRight className="h-4 w-4" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
              {title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* PageHeading */}
      <header className="flex flex-wrap justify-between items-start gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-tight">
            {title}{" "}
            <span className="text-gray-400 dark:text-gray-500 font-medium text-2xl">
              #{jobId}
            </span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
            {location}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="min-w-[84px] h-10">
            <span className="truncate">Edit Job</span>
          </Button>
          <Button variant="secondary" className="min-w-[84px] h-10">
            <span className="truncate">Share</span>
          </Button>
          <Button className="min-w-[84px] h-10">
            <span className="truncate">Add Candidate</span>
          </Button>
        </div>
      </header>

      {/* Chips */}
      <div className="flex gap-3 items-center">
        <Badge
          variant="outline"
          className="h-8 px-3 border-none bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300"
        >
          <div className="size-2 rounded-full bg-green-500 mr-2"></div>
          <p className="text-sm font-medium leading-normal">Status: {status}</p>
        </Badge>
      </div>
    </>
  );
}
