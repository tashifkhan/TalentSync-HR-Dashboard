"use client"
import Link from "next/link"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// --- UPDATED DATA OBJECT ---
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard", // Corrected path
      icon: IconDashboard,
    },
    {
      title: "Jobs",
      url: "/job-p", // Corrected path
      icon: IconListDetails,
    },
    {
      title: "Form Builder",
      url: "/form-builder",
      icon: IconChartBar,
    },
  ],
  navClouds: [
    // ... (omitted for brevity, no changes)
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings", // Corrected path
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "/help", // Corrected path
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#", // Search usually triggers a modal, so '#' is fine
      icon: IconSearch,
    },
  ],
  commonPages: [
    {
      name: "Campaign Manager",
      url: "/campaign-manager", // Corrected path
      icon: IconDatabase,
    },
    {
      name: "Communication Log",
      url: "/communication-log", // Corrected path
      icon: IconReport,
    },
    {
      name: "Compose Message",
      url: "/compose-message", // Corrected path
      icon: IconFileWord,
    },
    {
      name: "Template Library",
      url: "/template-library", // Corrected path
      icon: IconFolder,
    }
  ],
  interview: [
    {
      name: "Interview Scheduling",
      url: "/automated-interview-scheduling", // Corrected path
      icon: IconDatabase,
    },
    {
      name: "Interview Toolkit",
      url: "/interview-toolkit", // Corrected path
      icon: IconReport,
    },
    {
      name: "Interview Monitoring",
      url: "/live-interview-monitering", // Corrected path
      icon: IconFileWord,
    },
    {
      name: "Interview Schedule",
      url: "/master-interview-schdule", // Corrected path
      icon: IconFolder,
    },
    {
      name: "Interview Review",
      url: "/post-interview-review", // Corrected path
      icon: IconFolder,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/dashboard"> {/* This was already correct */}
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">TalentSync</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* These components will now receive the corrected URLs */}
        <NavMain items={data.navMain} />
        <NavDocuments params="Common Pages" items={data.commonPages} />
        <NavDocuments params="Interview Details" items={data.interview} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}