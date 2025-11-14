// components/candidates/candidates-header.tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function CandidatesHeader() {
  return (
    <div className="mb-6">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="text-slate-500 dark:text-slate-400 hover:text-primary"
            >
              Jobs
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="text-slate-500 dark:text-slate-400 hover:text-primary"
            >
              Senior Product Manager
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-slate-800 dark:text-slate-200 font-medium">
              Candidates
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-wrap justify-between gap-4 items-center">
        <div className="flex flex-col">
          <h1 className="text-slate-900 dark:text-white text-3xl font-black tracking-tighter">
            Candidates for Senior Product Manager
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Review, filter, and rank candidates based on customized scoring.
          </p>
        </div>
      </div>
    </div>
  );
}
