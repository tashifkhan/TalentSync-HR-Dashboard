// app/admin-settings/page.tsx
"use client";

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
  // Imports for old AdminSidebar (removed)
  // LayoutDashboard,
  // Briefcase,
  // Users,
  // HelpCircle,
  // LogOut,
  // BarChartHorizontal, 

  // Imports for new DashboardHeader
  Menu,
  Bell,
  
  // Imports for page content
  Settings,
  Search,
  PlusCircle,
  Filter,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

// --- 1. Admin Sidebar Component (REMOVED) ---
// function AdminSidebar() { ... }

// --- 3. Hardcoded data for the user table (UNCHANGED) ---
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

// --- 4. User Management Tab Content (UNCHANGED) ---
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
        {/* <DashboardHeader /> */}
                <SiteHeader header="Admin Dashboard"/>

        {/* Main Content */}
        <main className="flex-1 space-y-6 p-8">
          {/* Header (REMOVED - Now in DashboardHeader) */}
          {/* <div> ... </div> */}

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