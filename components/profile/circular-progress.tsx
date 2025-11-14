// components/profile/circular-progress.tsx
import { cn } from "@/lib/utils";

type CircularProgressProps = {
  percentage: number;
  className?: string;
};

export function CircularProgress({
  percentage,
  className,
}: CircularProgressProps) {
  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${percentage}, ${100 - percentage}`;

  return (
    <div className="relative size-16">
      <svg className="size-full" viewBox="0 0 36 36">
        <path
          className="stroke-current text-gray-200 dark:text-gray-700"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          strokeWidth="3"
        ></path>
        <path
          className={cn("stroke-current", className)}
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={25} // Rotates start to top
          strokeLinecap="round"
          strokeWidth="3"
        ></path>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={cn("font-bold text-lg", className)}>
          {percentage}%
        </span>
      </div>
    </div>
  );
}
