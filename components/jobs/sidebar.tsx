// components/dashboard/sidebar.tsx
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Briefcase,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="flex w-64 flex-col bg-white dark:bg-gray-900/50 p-4 border-r border-gray-200 dark:border-gray-800">
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfAeKN0rdVeFsq3pANXKkpesvlZdm4TolozCq4gt4pAKArwj7TG3gJWdKHsI-rGZUk8OxaLHDFGJayPQCdJu9TdVOrgKQ5GtVOeH16W71mWaJa8DV2XYhsfmcEVs_e0LsHooxrHsyma2Eq2zE7eaT1tWXOzQMWzswwY60V46RM3ognOKfSYNQuvvd0_1m9RwUsvG38m5hqIsfLOmQpLTIsYeAipleQyFVleR7meHU_S7cdT4IrR7rQCJTYAKxqrDnmytsUVGopmlVB"
              alt="TalentSync HR logo"
            />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h1 className="text-gray-900 dark:text-white text-base font-medium leading-normal">
              TalentSync HR
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
              Recruitment Platform
            </p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            asChild
          >
            <Link href="#">
              <LayoutDashboard className="h-5 w-5" />
              <span className="text-sm font-medium leading-normal">
                Dashboard
              </span>
            </Link>
          </Button>
          <Button
            variant="secondary"
            className="w-full justify-start gap-3 bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
            asChild
          >
            <Link href="#">
              <Briefcase className="h-5 w-5" />
              <span className="text-sm font-bold leading-normal">
                Requisitions
              </span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            asChild
          >
            <Link href="#">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium leading-normal">
                Candidates
              </span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            asChild
          >
            <Link href="#">
              <BarChart className="h-5 w-5" />
              <span className="text-sm font-medium leading-normal">
                Analytics
              </span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            asChild
          >
            <Link href="#">
              <Settings className="h-5 w-5" />
              <span className="text-sm font-medium leading-normal">
                Settings
              </span>
            </Link>
          </Button>
        </nav>
      </div>
      <div className="mt-auto flex flex-col gap-4">
        <Button className="w-full h-10">
          <span className="truncate">New Requisition</span>
        </Button>
        <div className="flex flex-col gap-1">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            asChild
          >
            <Link href="#">
              <HelpCircle className="h-5 w-5" />
              <span className="text-sm font-medium leading-normal">Help</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            asChild
          >
            <Link href="#">
              <LogOut className="h-5 w-5" />
              <span className="text-sm font-medium leading-normal">Logout</span>
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}
