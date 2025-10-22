import * as React from "react";

type BadgeVariant = "default" | "success" | "warning" | "danger";

export function Badge({
	className,
	variant = "default",
	...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant }) {
	const base = "ts-badge text-xs";
	const map: Record<BadgeVariant, string> = {
		default: "bg-[var(--ts-bg-2)] text-[var(--ts-text)]",
		success: "ts-badge-success",
		warning: "ts-badge-warning",
		danger: "ts-badge-danger",
	};
	return (
		<span
			className={[base, map[variant], className].filter(Boolean).join(" ")}
			{...props}
		/>
	);
}
