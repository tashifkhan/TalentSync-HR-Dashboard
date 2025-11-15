"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Users,
  Clock,
  Menu,
  Bell,
  Settings,
  ChevronDown,
  Briefcase,
  MapPin,
  TrendingUp,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

function JobsPageHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Jobs</h1>
            <p className="text-xs text-muted-foreground">6 active positions</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Quick search..." className="w-64 pl-9 h-9" />
        </div>

        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Bell className="h-4 w-4" />
        </Button>

        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Settings className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2 pl-2 border-l">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/user.jpg" alt="User" />
            <AvatarFallback className="text-xs">JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

export default function Jobs() {
  const [searchQuery, setSearchQuery] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      status: "active",
      candidates: 45,
      daysOpen: 12,
      stage: "Active Screening",
      priority: "high",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      status: "active",
      candidates: 28,
      daysOpen: 8,
      stage: "Interviews",
      priority: "high",
    },
    {
      id: 3,
      title: "UX Designer",
      department: "Design",
      location: "New York, NY",
      status: "active",
      candidates: 32,
      daysOpen: 15,
      stage: "Shortlisting",
      priority: "medium",
    },
    {
      id: 4,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote",
      status: "active",
      candidates: 51,
      daysOpen: 20,
      stage: "Active Screening",
      priority: "high",
    },
    {
      id: 5,
      title: "Data Analyst",
      department: "Analytics",
      location: "Boston, MA",
      status: "active",
      candidates: 23,
      daysOpen: 6,
      stage: "Initial Review",
      priority: "medium",
    },
    {
      id: 6,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      status: "paused",
      candidates: 18,
      daysOpen: 25,
      stage: "On Hold",
      priority: "low",
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <JobsPageHeader />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Stats Overview */}
            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Active Jobs
                      </p>
                      <p className="text-2xl font-semibold">6</p>
                    </div>
                    <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Candidates
                      </p>
                      <p className="text-2xl font-semibold">197</p>
                    </div>
                    <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                      <Users className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Avg. Time to Fill
                      </p>
                      <p className="text-2xl font-semibold">14d</p>
                    </div>
                    <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        High Priority
                      </p>
                      <p className="text-2xl font-semibold">3</p>
                    </div>
                    <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold">Open Positions</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Manage and track all active job requisitions
                </p>
              </div>
              <Button className="gap-2 shadow-sm">
                <Plus className="h-4 w-4" />
                New Position
              </Button>
            </div>

            {/* Filters */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title, department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 h-10 bg-muted/50"
                />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[130px] h-10">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px] h-10">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="analytics">Analytics</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Jobs Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="group cursor-pointer transition-colors hover:bg-muted/30 relative"
                >
                  <Link
                    href="/jobs"
                    aria-label={`Open jobs`}
                    className="absolute inset-0 z-10"
                  />
                  <CardContent className="p-5">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                              <Briefcase className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <Badge
                              variant={
                                job.status === "active"
                                  ? "default"
                                  : "secondary"
                              }
                              className="text-xs px-2 py-0.5 capitalize"
                            >
                              {job.status}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-base line-clamp-1">
                            {job.title}
                          </h3>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Location & Department */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-4 w-4 flex items-center justify-center">
                            <MapPin className="h-3.5 w-3.5" />
                          </div>
                          <span className="truncate">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-4 w-4 flex items-center justify-center">
                            <Briefcase className="h-3.5 w-3.5" />
                          </div>
                          <span>{job.department}</span>
                        </div>
                      </div>

                      {/* Stage Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border">
                        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
                        <span className="text-xs text-muted-foreground">
                          {job.stage}
                        </span>
                      </div>

                      {/* Stats & Priority */}
                      <div className="flex items-center justify-between pt-3 border-t">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-semibold">
                              {job.candidates}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {job.daysOpen}d
                            </span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="capitalize">
                          {job.priority}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
