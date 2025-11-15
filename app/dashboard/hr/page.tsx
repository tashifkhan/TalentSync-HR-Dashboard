// app/page.tsx

// --- Imports from your component structure ---
import { AppSidebar } from "@/components/app-sidebar";
// import { ChartAreaInteractive } from "@/components/chart-area-interactive"; // Removed by user
// import { DataTable } from "@/components/data-table"; // Removed by user
// import { SectionCards } from "@/components/section-cards"; // We are replacing this
// import { SiteHeader } from "@/components/site-header"; // We are replacing this
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// --- Imports from our previous ShadCN build ---
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
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"; // Added for Search
import {
  UserPlus,
  MessageSquare,
  Check,
  Search, // Added for Search
  Bell,   // Added for Header
  Settings, // Added for Header
  Menu, // For mobile sidebar toggle
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

// --- New Component: StatCard (for the grid) ---
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

// --- New Component: StatCardsGrid (Replaces SectionCards) ---
function StatCardsGrid() {
  return (
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
  );
}


// --- Your Existing Components ---

function UrgentTasks() {
  return (
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
  );
}

function RecentActivity() {
  return (
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
  );
}

function UpcomingInterviews() {
  return (
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
  );
}

// --- Hardcoded Data (No longer needed since DataTable is removed) ---
// const hardcodedData = [ ... ];


// --- Main Page Component (Updated) ---

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        {/* Replaced SiteHeader with DashboardHeader */}
<SiteHeader header="HR Dashboard"/>
        
        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            
            {/* Left Column (Main) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Replaced SectionCards with StatCardsGrid */}
              <StatCardsGrid />

              {/* Urgent Tasks (from our previous design) */}
              <UrgentTasks />

              {/* Recent Activity (from our previous design) */}
              <RecentActivity />
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-1 space-y-8">
              {/* Upcoming Interviews (from our previous design) */}
              <UpcomingInterviews />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}