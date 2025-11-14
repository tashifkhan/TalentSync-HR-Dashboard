// app/executive-dashboard/page.tsx

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  Filter,
} from "lucide-react";

// --- 1. New Sidebar Component (ExecutiveSidebar) ---
// This replaces AppSidebar for this specific page
function ExecutiveSidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r bg-background p-4 md:flex">
      {/* Logo */}
      <div className="flex h-20 items-center gap-3 px-2">
        {/* Using a simple placeholder logo */}
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <BarChart2 className="h-5 w-5" />
        </div>
        <h1 className="text-xl font-bold">TalentSync</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 bg-primary/10 text-primary"
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3">
          <Briefcase className="h-4 w-4" />
          Jobs
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3">
          <Users className="h-4 w-4" />
          Candidates
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3">
          <BarChart2 className="h-4 w-4" />
          Analytics
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
      </nav>

      {/* Footer Nav */}
      <nav className="mt-auto flex flex-col gap-2">
        <Button variant="ghost" className="w-full justify-start gap-3">
          <HelpCircle className="h-4 w-4" />
          Help Center
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
        {/* Profile */}
        <div className="mt-4 flex items-center gap-3 border-t pt-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://placehold.co/100x100/E2E8F0/4A5568?text=JL" alt="HR Manager" />
            <AvatarFallback>HR</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold">Jessica Lane</h2>
            <p className="text-xs text-muted-foreground">HR Manager</p>
          </div>
        </div>
      </nav>
    </aside>
  );
}

// --- 2. New Header Component (ExecutiveHeader) ---
function ExecutiveHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b bg-background px-8">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold">Executive Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Strategic oversight and executive insights for HR/TA Leadership.
        </p>
      </div>
      
      {/* Filters */}
      <div className="flex items-center gap-2">
        <Select defaultValue="last-30">
          <SelectTrigger className="w-[150px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-30">Last 30 days</SelectItem>
            <SelectItem value="last-60">Last 60 days</SelectItem>
            <SelectItem value="last-90">Last 90 days</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="last-quarter">
          <SelectTrigger className="w-[150px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-quarter">Last Quarter</SelectItem>
            <SelectItem value="this-quarter">This Quarter</SelectItem>
            <SelectItem value="prev-quarter">Previous Quarter</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline">Year-to-date</Button>

        <Button>
          <Filter className="mr-2 h-4 w-4" />
          Customize
        </Button>
      </div>
    </header>
  );
}

// --- 3. Stat Card Components ---

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

// --- 4. Main Content Cards ---

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
        <div className="flex h-[300px] items-center justify-center rounded-lg bg-secondary text-muted-foreground">
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

function BudgetOverviewCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
        <CardDescription>Actual spend vs. budget YTD.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Placeholder for donut chart */}
        <div className="flex h-[200px] items-center justify-center rounded-lg bg-secondary text-muted-foreground">
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
      {/* Use the new ExecutiveSidebar */}
      <ExecutiveSidebar />

      <SidebarInset>
        {/* Use the new ExecutiveHeader */}
        <ExecutiveHeader /> 
        
        {/* Main Content */}
        <main className="flex-1 space-y-8 p-8">
          {/* Top Stat Cards */}
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