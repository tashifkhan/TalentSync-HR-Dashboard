import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <Topbar />
        <main className="p-4 md:p-6 space-y-6">{children}</main>
      </div>
    </div>
  );
}
