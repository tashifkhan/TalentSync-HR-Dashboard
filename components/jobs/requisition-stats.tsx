// components/dashboard/requisition-stats.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCardData } from "@/types/jobs";

type RequisitionStatsProps = {
  stats: StatCardData[];
};

export function RequisitionStats({ stats }: RequisitionStatsProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-600 dark:text-gray-400 text-base font-medium leading-normal">
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {stat.change ? (
              <div className="flex items-baseline gap-2">
                <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">
                  {stat.value}
                </p>
                <p className="text-green-600 dark:text-green-400 text-base font-medium leading-normal">
                  {stat.change}
                </p>
              </div>
            ) : (
              <p className="text-gray-900 dark:text-white tracking-light text-3xl font-bold leading-tight">
                {stat.value}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
