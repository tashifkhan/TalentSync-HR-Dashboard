// app/page.tsx

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  // Icons for removed sidebar:
  // LayoutDashboard,
  // Briefcase,
  // Users,
  // Calendar,
  // BarChart2,
  Search,
  Bell,
  Settings,
  UserPlus,
  MessageSquare,
  Check,
  Menu, // Added Menu icon for toggle
} from "lucide-react";

// 1. Sidebar Component (REMOVED)
// The full sidebar component is removed as requested.

// 2. Header Component (UPDATED)
function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b bg-background px-8">
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle Button */}
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        
        {/* Welcome Message */}
        <div className="flex min-w-72 flex-col">
          <h1 className="text-2xl font-bold">Welcome back, Jessica!</h1>
          <p className="text-sm text-muted-foreground">
            Here's your daily briefing for Tuesday, 24th September.
          </p>
        </div>
      </div>

      {/* Search & Actions */}
      <div className="flex flex-1 items-center justify-end gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for jobs, candidates..."
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
          <AvatarImage src="/avatars/01.png" alt="Jessica Lane" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

// 3. StatCard Component (Unchanged)
interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
}

function StatCard({ title, value, change, changeType }: StatCardProps) {
  const changeColor =
    changeType === "positive" ? "text-green-600" : "text-red-600";
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-3xl">{value}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-sm font-medium ${changeColor}`}>{change}</p>
      </CardContent>
    </Card>
  );
}

// 4. Main Page Component (UPDATED)
export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark">
      {/* <Sidebar />  <- Sidebar component removed */}
      
      <div className="flex flex-1 flex-col overflow-y-auto">
        <Header />
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column (Main) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <StatCard
                  title="Active Jobs"
                  value="12"
                  change="+2%"
                  changeType="positive"
                />
                <StatCard
                  title="New Applicants (24h)"
                  value="28"
                  change="+15%"
                  changeType="positive"
                />
                <StatCard
                  title="Interviews Today"
                  value="6"
                  change="+5%"
                  changeType="positive"
                />
                <StatCard
                  title="Avg. Time to Fill"
                  value="32 days"
                  change="-3%"
                  changeType="negative"
                />
              </div>

              {/* Urgent Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle>Urgent Tasks</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">
                      Review 5 new candidates for Senior Developer
                    </p>
                    <Button variant="link" className="text-sm">
                      View
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">
                      Action needed: John Doe offer
                    </p>
                    <Button variant="link" className="text-sm">
                      Finalize
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">
                      Follow up with hiring manager for UX Designer role
                    </p>
                    <Button variant="link" className="text-sm">
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity Feed */}
              <div>
                <h2 className="text-lg font-bold">Recent Activity</h2>
                <div className="mt-4 flow-root">
                  <ul role="list" className="-mb-8">
                    {/* Item 1 */}
                    <li>
                      <div className="relative pb-8">
                        <span
                          className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-border"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-8 ring-background">
                              <UserPlus
                                className="h-4 w-4 text-primary"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p className="text-sm">
                                Emily Carter applied for{" "}
                                <a
                                  href="#"
                                  className="font-medium text-primary hover:underline"
                                >
                                  Senior Product Manager
                                </a>
                              </p>
                            </div>
                            <div className="whitespace-nowrap text-right text-sm text-muted-foreground">
                              <time>2m ago</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Item 2 */}
                    <li>
                      <div className="relative pb-8">
                        <span
                          className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-border"
                          aria-hidden="true"
                        ></span>
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/10 ring-8 ring-background">
                              <MessageSquare
                                className="h-4 w-4 text-teal-500"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p className="text-sm">
                                Hiring manager left feedback for{" "}
                                <a
                                  href="#"
                                  className="font-medium text-primary hover:underline"
                                >
                                  Alex Johnson
                                </a>
                              </p>
                            </div>
                            <div className="whitespace-nowrap text-right text-sm text-muted-foreground">
                              <time>1h ago</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Item 3 */}
                    <li>
                      <div className="relative">
                        <div className="relative flex space-x-3">
                          <div>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 ring-8 ring-background">
                              <Check
                                className="h-4 w-4 text-green-500"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p className="text-sm">
                                Interview scheduled with{" "}
                                <a
                                  href="#"
                                  className="font-medium text-primary hover:underline"
                                >
                                  Sarah Lee
                                </a>{" "}
                                for Marketing Lead
                              </p>
                            </div>
                            <div className="whitespace-nowrap text-right text-sm text-muted-foreground">
                              <time>3h ago</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-1 space-y-8">
              {/* Top Candidates (REMOVED) */}

              {/* Upcoming Interviews */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Interviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <p className="font-bold">10:00</p>
                      <p className="text-xs">AM</p>
                    </div>
                    <div className="w-1 rounded-full bg-primary"></div>
                    <div>
                      <p className="font-semibold">Maria Garcia</p>
                      <p className="text-sm text-muted-foreground">
                        Screening Call for Senior Developer
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <p className="font-bold">2:30</p>
                      <p className="text-xs">PM</p>
                    </div>
                    <div className="w-1 rounded-full bg-teal-500"></div>
                    <div>
                      <p className="font-semibold">James Rodriguez</p>
                      <p className="text-sm text-muted-foreground">
                        Technical Interview for UX Designer
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <p className="font-bold">4:00</p>
                      <p className="text-xs">PM</p>
                    </div>
                    <div className="w-1 rounded-full bg-primary"></div>
                    <div>
                      <p className="font-semibold">Aisha Khan</p>
                      <p className="text-sm text-muted-foreground">
                        Final Interview for Senior Developer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}