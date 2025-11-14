'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Search, Settings, MoreVertical, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
    color: 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700',
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
    color: 'bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700',
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
    color: 'bg-red-100 text-red-800 border-red-300 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700',
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
    color: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
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
    color: 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700',
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
    color: 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700',
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
    <div className="min-h-screen bg-background">
      {/* Google Calendar-style Header */}
      <header className="border-b bg-card sticky top-0 z-10">
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

      <main className="container mx-auto p-0">
        <div className="flex h-[calc(100vh-73px)]">
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
                        isToday ? 'bg-primary/5' : ''
                      } ${selectedDay === day ? 'bg-accent/50' : ''}`}
                      onClick={() => setSelectedDay(day)}
                    >
                      {/* Time grid lines */}
                      <div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <div
                            key={i}
                            className="border-b h-[50px]"
                            style={{ top: `${i * 50}px` }}
                          />
                        ))}
                      </div>

                      {/* Events */}
                      <div className="relative p-1 space-y-1 pt-2">
                        {dayInterviews.map((interview) => (
                          <button
                            key={interview.id}
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
                                <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                  <button className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-black/10 dark:hover:bg-white/10 rounded">
                                    <MoreVertical className="h-3 w-3" />
                                  </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Details</DropdownMenuItem>
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem>Reschedule</DropdownMenuItem>
                                  <DropdownMenuItem className="text-destructive">
                                    Cancel
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
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
      </main>
    </div>
  );
}
