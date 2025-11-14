// app/admin-settings/page.tsx
"use client";

// --- Imports from your component structure ---
// We will create a new sidebar component for this page
// import { AppSidebar } from "@/components/app-sidebar"; 
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
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Search,
  PlusCircle,
  BarChartHorizontal, // New icon for Reports
  Filter,
} from "lucide-react";

// --- 1. New Admin Sidebar Component (to match the image) ---
function AdminSidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r bg-background p-4 md:flex">
      {/* Logo */}
      <div className="flex h-20 items-center gap-3 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
          </svg>
        </div>
        <h1 className="text-xl font-bold">TalentSync</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <Button variant="ghost" className="w-full justify-start gap-3">
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
          <BarChartHorizontal className="h-4 w-4" />
          Reports
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 bg-primary/10 text-primary"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Button>
      </nav>

      {/* Footer Nav */}
      <nav className="mt-auto flex flex-col gap-2">
        <Button variant="ghost" className="w-full justify-start gap-3">
          <HelpCircle className="h-4 w-4" />
          Support
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </nav>
    </aside>
  );
}

// --- 2. Hardcoded data for the user table ---
const userData = [
  {
    name: "Olivia Rhye",
    email: "olivia@example.com",
    role: "Admin",
    team: "Recruiting",
    status: "Active",
  },
  {
    name: "Phoenix Baker",
    email: "phoenix@example.com",
    role: "Hiring Manager",
    team: "Engineering",
    status: "Active",
  },
  {
    name: "Lana Steiner",
    email: "lana@example.com",
    role: "Recruiter",
    team: "Recruiting",
    status: "Active",
  },
  {
    name: "Demi Wilkinson",
    email: "demi@example.com",
    role: "Interviewer",
    team: "Design",
    status: "Active",
  },
  {
    name: "Candice Wu",
    email: "candice@example.com",
    role: "Hiring Manager",
    team: "Product",
    status: "Deactivated",
  },
];

// --- 3. User Management Tab Content ---
function UserManagementTab() {
  return (
    <Card>
      <CardContent className="pt-6">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search users..."
                className="w-full pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New User
          </Button>
        </div>

        {/* User Table */}
        <div className="mt-4 rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userData.map((user) => (
                <TableRow key={user.email}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.team}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "Active" ? "default" : "destructive"
                      }
                      className={
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="link" className="p-0">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

// --- 4. Main Page Component ---
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
      {/* Use the new AdminSidebar */}
      <AdminSidebar />

      <SidebarInset>
        {/* Main Content */}
        <main className="flex-1 space-y-6 p-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold">Admin Settings</h1>
            <p className="text-muted-foreground">
              Manage users, billing, integrations, and company-wide settings.
            </p>
          </div>

          {/* Tabs Navigation */}
          <Tabs defaultValue="user-management">
            <TabsList>
              <TabsTrigger value="user-management">
                User Management
              </TabsTrigger>
              <TabsTrigger value="team-management">
                Team Management
              </TabsTrigger>
              <TabsTrigger value="subscription">
                Subscription & Billing
              </TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="branding">Company Branding</TabsTrigger>
              <TabsTrigger value="audit-log">Audit Log</TabsTrigger>
            </TabsList>

            {/* Tab Panels */}
            <TabsContent value="user-management" className="mt-4">
              <UserManagementTab />
            </TabsContent>
            <TabsContent value="team-management">
              <Card>
                <CardHeader>
                  <CardTitle>Team Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage teams and permissions here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="subscription">
              <Card>
                <CardHeader>
                  <CardTitle>Subscription & Billing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage your subscription and billing details here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="integrations">
              <Card>
                <CardHeader>
                  <CardTitle>Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage your third-party integrations here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="branding">
              <Card>
                <CardHeader>
                  <CardTitle>Company Branding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage your company's branding assets here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="audit-log">
              <Card>
                <CardHeader>
                  <CardTitle>Audit Log</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>View company-wide audit logs here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}