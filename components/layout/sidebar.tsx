"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/jobs", label: "Jobs" },
  { href: "/pipeline", label: "Pipeline" },
  { href: "/interviews", label: "Interviews" },
  { href: "/analytics", label: "Analytics" },
  { href: "/hm", label: "HM Hub" },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex md:w-64 flex-col border-r" style={{ borderColor: "var(--ts-border)" }}>
      <div className="p-4 border-b" style={{ borderColor: "var(--ts-border)" }}>
        <div className="text-lg font-semibold" style={{ color: "var(--ts-text)" }}>TalentSync</div>
        <div className="text-xs" style={{ color: "var(--ts-text-muted-50)" }}>Pro/HR</div>
      </div>
      <nav className="flex-1 p-2">
        {nav.map((item) => {
          const active = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "block rounded-md px-3 py-2 text-sm",
                active ? "bg-[var(--ts-bg-2)] text-[var(--ts-accent)]" : "text-[var(--ts-text)] hover:bg-[var(--ts-bg-2)]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 text-xs" style={{ color: "var(--ts-text-muted-40)" }}>v0.1.0</div>
    </aside>
  );
}
