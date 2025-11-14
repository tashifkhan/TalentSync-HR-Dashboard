// components/candidates/top-navbar.tsx
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, HelpCircle } from "lucide-react";

export function TopNavbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 py-3 sticky top-0 z-20">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <div className="size-6 text-primary">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold tracking-tight">TalentSync HR</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-center gap-8">
        <nav className="flex items-center gap-8">
          <Button
            variant="link"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary p-0"
            asChild
          >
            <Link href="#">Dashboard</Link>
          </Button>
          <Button
            variant="link"
            className="text-sm font-medium text-primary dark:text-primary p-0"
            asChild
          >
            <Link href="#">Jobs</Link>
          </Button>
          <Button
            variant="link"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary p-0"
            asChild
          >
            <Link href="#">Candidates</Link>
          </Button>
          <Button
            variant="link"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary p-0"
            asChild
          >
            <Link href="#">Analytics</Link>
          </Button>
          <Button
            variant="link"
            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary p-0"
            asChild
          >
            <Link href="#">Settings</Link>
          </Button>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <Button className="h-10">
            <span>Add Candidate</span>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
        <Avatar className="h-10 w-10">
          <AvatarImage
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSPSLtUh4i30S1NtiaMPEEpc3Hhxj2WgxLyPo4xdNmOccU8JTWQ9dpNsABDnNMaN_AH627knw5aWdgS4vfYqquJ3aac9_HXOLb0qVaPhoAuaps8fFDUdAJU8o7YSldu0dS9pTLYQGuP3N0FfEnNJjA0c2nYIHiUtKptUCA2_bx5HTd8_N4P9d_wxU6t4p62N8Jn7VY2oPtscyBcesMNVDPsaVZKu_xlnq5BLD0MOjn2eNEBwOVso-fNCEJUgngo6jyBfLyZjVQdG68"
            alt="User avatar"
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
