import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => (
		<input
			ref={ref}
			className={[
				"h-10 w-full rounded-md bg-transparent",
				"border border-[var(--ts-border)] px-3 text-[var(--ts-text)] placeholder:text-[var(--ts-text-muted-50)]",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in oklab,var(--ts-accent)_50%,transparent)]",
				className,
			]
				.filter(Boolean)
				.join(" ")}
			{...props}
		/>
	)
);
Input.displayName = "Input";
