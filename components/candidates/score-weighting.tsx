// components/candidates/score-weighting.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScoreWeight } from "@/types/candidates";
import { Info } from "lucide-react";

type ScoreWeightingProps = {
  weights: ScoreWeight[];
};

export function ScoreWeighting({ weights }: ScoreWeightingProps) {
  // In a real app, this would be calculated
  const totalWeight = weights.reduce((acc, w) => acc + w.value, 0);

  return (
    <aside className="col-span-12 lg:col-span-3">
      <div className="sticky top-28">
        <Card>
          <CardHeader className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-lg font-bold text-slate-800 dark:text-slate-200">
                Composite Score
              </CardTitle>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-slate-500 dark:text-slate-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Adjust weights to rank candidates based on what's most
                      important.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Customize the AI ranking model.
            </p>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="space-y-6">
              {weights.map((weight) => (
                <div key={weight.id}>
                  <div className="flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <Label htmlFor={weight.id}>{weight.label}</Label>
                    <span className="font-bold text-primary">
                      {weight.value}%
                    </span>
                  </div>
                  <Slider
                    id={weight.id}
                    defaultValue={[weight.value]}
                    max={100}
                    step={5}
                  />
                </div>
              ))}
            </div>

            <Separator className="my-8" />

            <div className="flex flex-col gap-3">
              <div className="flex justify-between text-base font-bold text-slate-800 dark:text-slate-100">
                <span>Total</span>
                <span>{totalWeight}%</span>
              </div>
              <Button className="w-full h-10">Apply Changes</Button>
              <Button variant="secondary" className="w-full h-10">
                Reset to Default
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}
