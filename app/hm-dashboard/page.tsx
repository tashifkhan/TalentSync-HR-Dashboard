// app/executive-dashboard/page.tsx
"use client"; // Add this at the top for recharts

// --- Imports from your component structure ---
import { AppSidebar } from "@/components/app-sidebar"; // <-- Updated
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// --- Imports for ShadCN UI ---
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// Select imports are no longer needed for the header
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input"; // <-- Added for new header

import {
  LayoutDashboard,
  Briefcase,
  Users,
  BarChart2,
  Settings, // <-- Now used in header
  HelpCircle,
  LogOut,
  // ChevronDown, // No longer needed
  // Filter, // No longer needed
  Search, // <-- Added for new header
  Bell, // <-- Added for new header
  Menu, // <-- Added for new header
} from "lucide-react";
// --- Add Recharts Imports ---
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// --- 1. Sidebar Component (REMOVED) ---
// function ExecutiveSidebar() { ... } // <-- Replaced with AppSidebar import

// --- 2. Header Component (REPLACED) ---
// function ExecutiveHeader() { ... } // <-- Replaced with DashboardHeader

// --- New Component: DashboardHeader (from app/page.tsx) ---
function DashboardHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b bg-background px-8">
      <div className="flex items-center gap-4">
        {/* Mobile Sidebar Toggle (from your original structure) */}
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        
        {/* Welcome Message */}
        <div className="flex min-w-72 flex-col">
          <h1 className="text-2xl font-bold">Executive Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Strategic oversight and executive insights.
          </p>
        </div>
      </div>

      {/* Search & Actions (from our previous design) */}
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
          <AvatarImage src="https://placehold.co/100x100/E2E8F0/4A5568?text=JL" alt="Jessica Lane" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}


// --- 3. Stat Card Components (UNCHANGED) ---

interface ExecutiveStatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
}

function ExecutiveStatCard({ title, value, change, changeType }: ExecutiveStatCardProps) {
  const changeColor =
    changeType === "positive" ? "text-green-600" : "text-red-600";
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <div className="flex items-baseline gap-2">
          <CardTitle className="text-3xl">{value}</CardTitle>
          <p className={`text-sm font-medium ${changeColor}`}>{change}</p>
        </div>
      </CardHeader>
    </Card>
  );
}

function ExecutiveStatCardsGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 px-8 md:grid-cols-4">
      <ExecutiveStatCard
        title="Total Open Roles"
        value="42"
        change="↑5%"
        changeType="positive"
      />
      <ExecutiveStatCard
        title="Avg. Time to Fill"
        value="34 Days"
        change="↓8%"
        changeType="negative"
      />
      <ExecutiveStatCard
        title="Offer Acceptance Rate"
        value="92%"
        change="↑2%"
        changeType="positive"
      />
      <ExecutiveStatCard
        title="Cost Per Hire"
        value="$4,500"
        change="↑3%"
        changeType="positive"
      />
    </div>
  );
}

// --- 4. Main Content Cards (UNCHANGED) ---

// --- Data for Trend Analysis Chart ---
const trendData = [
  { name: "Jan", "Time to Fill": 45, "Hiring Velocity": 20 },
  { name: "Feb", "Time to Fill": 42, "Hiring Velocity": 25 },
  { name: "Mar", "Time to Fill": 40, "Hiring Velocity": 28 },
  { name: "Apr", "Time to Fill": 38, "Hiring Velocity": 30 },
  { name: "May", "Time to Fill": 35, "Hiring Velocity": 35 },
  { name: "Jun", "Time to Fill": 34, "Hiring Velocity": 40 },
  { name: "Jul", "Time to Fill": 32, "Hiring Velocity": 42 },
];

function TrendAnalysisCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trend Analysis</CardTitle>
        <CardDescription>
          Hiring velocity and source effectiveness over time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Placeholder for chart */}
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={trendData}
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis yAxisId="left" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" fontSize={12} />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="Time to Fill"
                stroke="#8884d8"
                strokeWidth={2}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="Hiring Velocity"
                stroke="#82ca9d"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

const pipelineData = [
  { job: "Senior Product Manager", dept: "Product", candidates: 34, status: "Interviewing" },
  { job: "Lead Software Engineer", dept: "Engineering", candidates: 12, status: "Offer Extended" },
  { job: "UX/UI Designer", dept: "Design", candidates: 58, status: "Screening" },
];

function ActivePipelineCard() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Interviewing":
        return <Badge variant="default" className="bg-blue-600">{status}</Badge>;
      case "Offer Extended":
        return <Badge variant="default" className="bg-purple-600">{status}</Badge>;
      case "Screening":
        return <Badge variant="default" className="bg-yellow-600">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Pipeline Summary</CardTitle>
        <CardDescription>
          High-priority and aging requisitions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Title</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Candidates</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pipelineData.map((item) => (
              <TableRow key={item.job}>
                <TableCell className="font-medium">{item.job}</TableCell>
                <TableCell>{item.dept}</TableCell>
                <TableCell>{item.candidates}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

const funnelData = [
  { stage: "Applied", value: 1204, percent: 100 },
  { stage: "Screened", value: 310, percent: 25.7 },
  { stage: "Interview", value: 95, percent: 7.9 },
  { stage: "Offer", value: 23, percent: 1.9 },
  { stage: "Hired", value: 21, percent: 1.7 },
];

function TalentFunnelCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Talent Funnel Health</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {funnelData.map((item) => (
          <div key={item.stage}>
            <div className="mb-1 flex justify-between">
              <span className="text-sm font-medium">{item.stage}</span>
              <span className="text-sm text-muted-foreground">
                {item.value.toLocaleString()}
                {item.stage !== "Applied" && ` (${item.percent}%)`}
              </span>
            </div>
            <Progress value={item.percent} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// --- Data for Budget Overview Chart ---
const budgetData = [
  { name: "Spent", value: 187500 },
  { name: "Remaining", value: 250000 - 187500 },
];
const COLORS = ["#0088FE", "#E2E8F0"]; // Blue for Spent, Gray for Remaining

function BudgetOverviewCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
        <CardDescription>Actual spend vs. budget YTD.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Placeholder for donut chart */}
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={budgetData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {budgetData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) =>
                  `$${value.toLocaleString()}`
                }
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-around">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Spent</p>
            <p className="text-lg font-bold">$187,500</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Budget</p>
            <p className="text-lg font-bold">$250,000</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


// --- 5. Main Page Component (Updated) ---

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
      {/* Use the new AppSidebar */}
      <AppSidebar variant="inset" />

      <SidebarInset>
        {/* Use the new DashboardHeader */}
        <DashboardHeader /> 
        
        {/* Main Content (p-8 added back for padding) */}
        <main className="flex-1 space-y-8 p-8">
          {/* Top Stat Cards (px-8 removed, padding is in main) */}
          <ExecutiveStatCardsGrid />

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            
            {/* Left Column (Main) */}
            <div className="lg:col-span-2 space-y-8">
              <TrendAnalysisCard />
              <ActivePipelineCard />
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-1 space-y-8">
              <TalentFunnelCard />
              <BudgetOverviewCard />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}