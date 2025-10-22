import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
	padded?: boolean;
};

export function Card({ className, padded = true, ...props }: CardProps) {
	return (
		<div
			className={["ts-card", padded ? "p-4" : "", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		/>
	);
}

export function CardHeader({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={["mb-3 flex items-center justify-between", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		/>
	);
}

export function CardTitle({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h3
			className={["text-base font-semibold text-[var(--ts-text)]", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		/>
	);
}

export function CardContent({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={["text-sm text-[var(--ts-text-muted-70)]", className]
				.filter(Boolean)
				.join(" ")}
			{...props}
		/>
	);
}
