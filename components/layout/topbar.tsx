"use client";
import { Input } from "@/components/ui/input";

export function Topbar() {
	return (
		<header
			className="flex items-center justify-between gap-4 border-b p-3 sticky top-0 z-10 bg-[var(--ts-bg)]"
			style={{ borderColor: "var(--ts-border)" }}
		>
			<div className="flex-1 max-w-md">
				<Input placeholder="Search candidates, jobs…" />
			</div>
			<div className="flex items-center gap-3">
				<span className="text-sm text-[var(--ts-text-muted-70)]">
					Recruiter
				</span>
				<div
					className="h-8 w-8 rounded-full bg-[var(--ts-bg-2)] border"
					style={{ borderColor: "var(--ts-border)" }}
				/>
			</div>
		</header>
	);
}
