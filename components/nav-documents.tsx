"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation" // <-- Added for active state
import { type Icon } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function NavDocuments({ items, params, className }: {
  items: {
    name: string
    url: string
    icon: Icon
  }[]
  params: string
  className?: string
}) {
  if (!params) {
    params = "Documents";
  }
  const pathname = usePathname() // <-- Get the current page path

  return (
    <SidebarGroup className={cn("group-data-[collapsible=icon]:mt-6", className)}>
      {/* Label now correctly hides when sidebar is collapsed */}
      <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
        {params}
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          // Check if this link is the active page
          const isActive = pathname === item.url
          
          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                // Apply 'primary' variant if active, 'ghost' if not
                variant={isActive ? "outline" : "default"}
              >
                <Link href={item.url}>
                  <item.icon />
                  {/* Text now correctly hides when sidebar is collapsed */}
                  <span className="group-data-[collapsible=icon]:hidden">
                    {item.name}
                  </span>
                </Link>
              </SidebarMenuButton>
              {/* Removed the DropdownMenu with "Share/Delete" 
                as it is not needed for page navigation links
              */}
            </SidebarMenuItem>
          )
        })}
        {/* Removed the static "More" button */}
      </SidebarMenu>
    </SidebarGroup>
  )
}