"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, HelpCircle, Calendar as CalendarIcon, ArrowRight } from "lucide-react"

export default function ScheduleInterviewPage() {
  const [selectedDate, setSelectedDate] = useState(17)
  const [selectedTime, setSelectedTime] = useState("10:00 AM")

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "11:30 AM",
    "1:00 PM",
    "2:30 PM",
    "3:00 PM",
    "4:00 PM",
  ]

  const availableDates = [7, 9, 10, 11, 14, 15, 16, 17, 18]

  const generateCalendarDays = () => {
    const days = []
    const startDay = 2 // Tuesday (October 1, 2024)
    const daysInMonth = 31

    // Add empty cells for days before the 1st
    for (let i = 0; i < startDay; i++) {
      days.push(null)
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }

    return days
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-card border-b w-full sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <svg
                className="size-6 text-primary"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                  fill="currentColor"
                />
              </svg>
              <h2 className="text-lg font-bold tracking-tight">TalentSync HR</h2>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <HelpCircle className="size-5" />
              </Button>
              <div className="bg-primary/10 rounded-full size-10 flex items-center justify-center">
                <span className="text-primary font-semibold text-sm">U</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col gap-8">
          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
                Schedule Your Interview
              </h1>
              <p className="text-muted-foreground text-base">
                For the Senior Product Designer position
              </p>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="default" className="bg-primary text-primary-foreground">
              Select Date & Time
            </Badge>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground text-sm font-medium">Confirm</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground text-sm font-medium">Done</span>
          </div>

          <Card className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column: Calendar */}
              <div className="flex flex-col gap-4">
                <p className="text-xl font-bold">Select a Date</p>
                
                {/* Calendar Picker */}
                <div className="flex flex-col border rounded-lg p-4">
                  <div className="flex items-center justify-between pb-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <ChevronLeft className="size-5" />
                    </Button>
                    <p className="text-base font-bold text-center">October 2024</p>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <ChevronRight className="size-5" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-7 text-center gap-1">
                    {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                      <p key={day} className="text-muted-foreground text-xs font-bold h-10 flex items-center justify-center">
                        {day}
                      </p>
                    ))}
                    
                    {generateCalendarDays().map((day, index) => {
                      if (day === null) {
                        return <div key={`empty-${index}`} />
                      }
                      
                      const isAvailable = availableDates.includes(day)
                      const isSelected = day === selectedDate
                      const isPast = day < 7

                      return (
                        <button
                          key={day}
                          onClick={() => isAvailable && setSelectedDate(day)}
                          disabled={!isAvailable}
                          className={`h-10 w-full text-sm font-medium rounded-full transition-all ${
                            isSelected
                              ? "bg-primary text-primary-foreground"
                              : isAvailable
                              ? "hover:bg-accent border-b-2 border-primary"
                              : "text-muted-foreground cursor-not-allowed"
                          }`}
                        >
                          <div className="flex size-full items-center justify-center">
                            {day}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="size-4" />
                  <span>Timezone: Pacific Time (US & Canada)</span>
                </div>
              </div>

              {/* Right Column: Time Slots */}
              <div className="flex flex-col gap-4">
                <p className="text-xl font-bold">Thursday, October 17, 2024</p>
                
                <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        selectedTime === time
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:border-primary hover:bg-accent"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Selected Time Summary */}
          <Card className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CalendarIcon className="size-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-muted-foreground">Selected Time:</p>
                <p className="font-semibold">Thursday, October 17, 2024 at {selectedTime} PDT</p>
              </div>
            </div>
            <Button size="lg" className="gap-2">
              Confirm Time
              <ArrowRight className="size-4" />
            </Button>
          </Card>
        </div>
      </main>
    </div>
  )
}
