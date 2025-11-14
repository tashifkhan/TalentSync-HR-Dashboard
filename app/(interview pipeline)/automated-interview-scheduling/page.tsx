'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Mail, Phone, MapPin, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const suggestedSlots = [
  { day: 'Mon 21', date: 21, time: '10:00 AM', duration: '45 min' },
  { day: 'Tue 22', date: 22, time: '2:30 PM', duration: '45 min' },
  { day: 'Wed 23', date: 23, time: '11:00 AM', duration: '45 min' },
];

export default function AutomatedInterviewScheduling() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [interviewType, setInterviewType] = useState('video');

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <span>Candidates</span>
          <span>/</span>
          <span>Eleanor Vance</span>
          <span>/</span>
          <span className="text-foreground">Schedule Interview</span>
        </div>

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Schedule Interview</h1>
          <p className="text-muted-foreground">
            Review AI-suggested time slots or manually select a time to schedule an interview with Eleanor Vance.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Candidate Details */}
          <div className="space-y-6">
            {/* Candidate Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {/* Candidate Info */}
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-amber-400 to-amber-600 shrink-0 flex items-center justify-center text-white font-semibold text-xl">
                      EV
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Eleanor Vance</h3>
                      <p className="text-sm text-muted-foreground">Senior Product Designer</p>
                      <div className="flex flex-col gap-1 mt-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3" />
                          evance@email.com
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3" />
                          (555) 123-4567
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="border-t pt-4 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase">Job Title</p>
                      <p className="text-sm font-medium">Lead UX Designer</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase">Department</p>
                      <p className="text-sm font-medium">Product & Engineering</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase">Hiring Manager</p>
                      <p className="text-sm font-medium">David Chen</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Column: Time Slots */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI-Suggested Time Slots</CardTitle>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Oct 21 - 25, 2024</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* Day tabs */}
                  <Tabs defaultValue="0" className="w-full">
                    <TabsList className="grid w-full grid-cols-5">
                      <TabsTrigger value="0" className="text-xs">Mon 21</TabsTrigger>
                      <TabsTrigger value="1" className="text-xs">Tue 22</TabsTrigger>
                      <TabsTrigger value="2" className="text-xs">Wed 23</TabsTrigger>
                      <TabsTrigger value="3" className="text-xs">Thu 24</TabsTrigger>
                      <TabsTrigger value="4" className="text-xs">Fri 25</TabsTrigger>
                    </TabsList>
                  </Tabs>

                  {/* Time slots */}
                  <div className="space-y-2">
                    {suggestedSlots.map((slot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSlot(idx)}
                        className={`w-full p-3 rounded-lg border-2 transition-colors text-center cursor-pointer ${
                          selectedSlot === idx
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <p className="font-semibold text-sm">{slot.time}</p>
                        <p className="text-xs text-muted-foreground">{slot.duration}</p>
                      </button>
                    ))}
                  </div>

                  {/* Add Manual Slot */}
                  <Button variant="outline" className="w-full" size="sm">
                    <span className="text-xs">+ Add Manual Slot</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Interview Details */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interview Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Interview Type */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase">Interview Type</Label>
                  <div className="flex gap-2">
                    {['Phone', 'Video', 'On-site'].map(type => (
                      <Button
                        key={type}
                        variant={interviewType === type.toLowerCase() ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setInterviewType(type.toLowerCase())}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Interviewers */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase">Interviewers</Label>
                  <div className="bg-muted p-3 rounded-lg text-sm space-y-1">
                    <p>David Chen</p>
                    <p>Sarah Johnson</p>
                    <p>Michael Brown</p>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase">Date & Time</Label>
                  <div className="space-y-2">
                    <Input type="date" defaultValue="2024-10-24" />
                    <Select defaultValue="45">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 mins</SelectItem>
                        <SelectItem value="45">45 mins</SelectItem>
                        <SelectItem value="60">60 mins</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-xs text-muted-foreground">Timezone: (UTC-05:00) Eastern Time</p>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-xs font-semibold uppercase">
                    Notes for Candidate (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="e.g., Please come prepared to discuss your portfolio."
                    className="min-h-20 text-sm"
                  />
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">
                    <span>Send Invitation</span>
                  </Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
