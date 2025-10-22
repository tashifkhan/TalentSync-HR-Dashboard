import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-[var(--ts-accent)] text-[var(--ts-text)] hover:opacity-90",
				outline:
					"border border-[var(--ts-border)] bg-transparent text-[var(--ts-text)] hover:bg-[var(--ts-bg-2)]",
				ghost: "bg-transparent hover:bg-[var(--ts-bg-2)]",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 px-3",
				lg: "h-11 px-6 text-base",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={[buttonVariants({ variant, size }), className]
					.filter(Boolean)
					.join(" ")}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { buttonVariants };
