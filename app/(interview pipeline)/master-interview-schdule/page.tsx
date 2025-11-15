'use client';

import { useState } from 'react';

// --- Imports for Dashboard Layout ---
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Bell } from "lucide-react"; 
// --- End Dashboard Imports ---

import { ChevronLeft, ChevronRight, Plus, Search, Settings, MoreVertical, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SiteHeader } from '@/components/site-header';

// --- NEW Component: CalendarPageHeader (from dashboard) ---
function CalendarPageHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b bg-background px-8 shrink-0">
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle */}
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        
        {/* Welcome Message (Adapted for Calendar) */}
        <div className="flex min-w-72 flex-col">
          <h1 className="text-3xl font-bold">Interview Calendar</h1>
          <p className="text-sm text-muted-foreground">
            View and manage all scheduled interviews.
          </p>
        </div>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search interviews..."
            className="w-full pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://placehold.co/100x100/E2E8F0/4A5568?text=JL" alt="Jessica Lane" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

// --- UPDATED: Mock data using theme-aware color classes ---
const mockInterviews = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Sr. Product Designer',
    date: 21,
    day: 1, // Monday
    time: '9:00 AM',
    duration: '45 min',
    stage: 'Final',
    // 'Final' (positive) maps to 'primary'
    color: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Frontend Engineer',
    date: 22,
    day: 2, // Tuesday
    time: '11:00 AM',
    duration: '1 hour',
    stage: 'Technical',
    // 'Technical' (neutral category) maps to 'accent'
    color: 'bg-accent/10 text-accent-foreground border-accent/20',
  },
  {
    id: 3,
    name: 'Ben Carter',
    role: 'Data Scientist',
    date: 23,
    day: 3, // Wednesday
    time: '2:00 PM',
    duration: '30 min',
    stage: 'Cancelled',
    // 'Cancelled' (negative) maps to 'destructive'
    color: 'bg-destructive/10 text-destructive border-destructive/20',
    cancelled: true,
  },
  {
    id: 4,
    name: 'Chloe Wang',
    role: 'Backend Engineer',
    date: 24,
    day: 4, // Thursday
    time: '10:00 AM',
    duration: '45 min',
    stage: 'Phone Screen',
    // 'Phone Screen' (neutral category) maps to 'secondary'
    color: 'bg-secondary/10 text-secondary-foreground border-secondary/20',
  },
  {
    id: 5,
    name: 'David Lee',
    role: 'Sr. Product Designer',
    date: 24,
    day: 4, // Thursday
    time: '3:00 PM',
    duration: '1 hour',
    stage: 'Final',
    // 'Final' (positive) maps to 'primary'
    color: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    id: 6,
    name: 'Sarah Mitchell',
    role: 'Product Manager',
    date: 25,
    day: 5, // Friday
    time: '9:30 AM',
    duration: '45 min',
    stage: 'Behavioral',
    // 'Behavioral' (neutral category) maps to 'accent'
    color: 'bg-accent/10 text-accent-foreground border-accent/20',
  },
];

const generateCalendarDays = () => {
  const days = [];
  // Start from Sunday (20th)
  for (let i = 0; i < 7; i++) {
    days.push(20 + i);
  }
  return days;
};

const dayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function MasterInterviewSchedule() {
  const [currentMonth] = useState('October 2024');
  const [view, setView] = useState('Week');
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const calendarDays = generateCalendarDays();

  const interviewsByDay = (day: number) => mockInterviews.filter(i => i.date === day);
  const today = 24; // Current day for highlighting

  return (
    // --- UPDATED: New Dashboard Layout ---
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      {/* --- ADDED: New AppSidebar --- */}
      <AppSidebar variant="inset" />
      
      {/* --- ADDED: New SidebarInset Wrapper --- */}
      <SidebarInset>
        
        {/* --- ADDED: New Global Sticky Header --- */}
        <SiteHeader header="Master Interview Schedule" />

        {/* --- UPDATED: Main content now fills remaining space and scrolls --- */}
        <main className="flex-1 overflow-y-auto">
          {/* Google Calendar-style Header (No longer sticky) */}
          <header className="border-b bg-card">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                {/* Left section */}
                <div className="flex items-center gap-6">
                  <h1 className="text-xl font-semibold">Interview Calendar</h1>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Today
                    </Button>
                    <div className="flex items-center">
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-9 w-9">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <span className="text-xl font-medium ml-2">{currentMonth}</span>
                  </div>
                </div>

                {/* Right section */}
                <div className="flex items-center gap-3">
                  {/* Search bar is in global header, this one is page-specific */}
                  <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Search interviews"
                      className="pl-9 w-64"
                    />
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        {view}
                        <ChevronRight className="ml-2 h-4 w-4 rotate-90" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setView('Day')}>Day</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setView('Week')}>Week</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setView('Month')}>Month</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setView('Year')}>Year</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Create
                  </Button>

                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </header>

          <div className="container mx-auto p-0">
            {/* --- UPDATED: Removed fixed height class --- */}
            <div className="flex">
              {/* Calendar Grid */}
              <div className="flex-1 flex flex-col">
                {/* Day headers */}
                <div className="grid grid-cols-7 border-b bg-card">
                  {dayLabels.map((label, idx) => (
                    <div key={label} className="border-r last:border-r-0">
                      <div className="text-center py-3">
                        <div className="text-xs font-semibold text-muted-foreground mb-1">
                          {label}
                        </div>
                        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium ${
                          calendarDays[idx] === today
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground'
                        }`}>
                          {calendarDays[idx]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Time slots and events */}
                <div className="flex-1 overflow-auto">
                  <div className="grid grid-cols-7">
                    {calendarDays.map((day, dayIdx) => {
                      const dayInterviews = interviewsByDay(day);
                      const isToday = day === today;
                      
                      return (
                        <div
                          key={day}
                          className={`border-r last:border-r-0 min-h-[600px] relative ${
                            isToday ? 'bg-primary/5' : '' // bg-primary/5 is theme-aware
                          } ${selectedDay === day ? 'bg-accent/50' : ''}`} // bg-accent/50 is theme-aware
                          onClick={() => setSelectedDay(day)}
                        >
                          {/* Time grid lines */}
                          <div className="absolute inset-0 pointer-events-none">
                            {Array.from({ length: 12 }).map((_, i) => (
                              <div
                                key={i}
                                className="border-b h-[50px]" // border-b uses theme 'border'
                                style={{ top: `${i * 50}px` }}
                              />
                            ))}
                          </div>

                          {/* Events */}
                          <div className="relative p-1 space-y-1 pt-2">
                            {dayInterviews.map((interview) => (
                              <button
                                key={interview.id}
                                // --- UPDATED: 'interview.color' now contains theme-aware classes ---
                                className={`w-full text-left p-2 rounded-md border transition-all hover:shadow-md group ${interview.color} ${
                                  interview.cancelled ? 'opacity-60 line-through' : ''
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle interview click
                                }}
                              >
                                <div className="flex items-start justify-between gap-1">
                                  <div className="flex-1 min-w-0">
                                    <div className="text-xs font-semibold truncate">
                                      {interview.time}
                                    </div>
                                    <div className="text-xs font-medium truncate mt-0.5">
                                      {interview.name}
                                    </div>
                                    <div className="text-[10px] truncate opacity-90">
                                      {interview.role}
                                    </div>
                                  </div>
                                  <DropdownMenu>
                                    {/* <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                      <button className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-black/10 dark:hover:bg-white/10 rounded">
                                        <MoreVertical className="h-3 w-3" />
                                      </button>WH
                                    </DropdownMenuTrigger> */}
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>View Details</DropdownMenuItem>
                                      <DropdownMenuItem>Edit</DropdownMenuItem>
                                      <DropdownMenuItem>Reschedule</DropdownMenuItem>
                                      <DropdownMenuItem className="text-destructive">
                                        Cancel
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                t</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}