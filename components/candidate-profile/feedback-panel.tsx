// components/candidate-profile/feedback-panel.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScorecardItem } from "@/types/candidate-profile";
import { Send, Pause, ThumbsDown, Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type FeedbackPanelProps = {
  initialScorecard: ScorecardItem[];
};

export function FeedbackPanel({ initialScorecard }: FeedbackPanelProps) {
  const [scorecard, setScorecard] = useState(initialScorecard);

  const handleScoreChange = (id: string, newScore: number) => {
    setScorecard((prev) =>
      prev.map((item) => (item.id === id ? { ...item, score: newScore } : item))
    );
  };

  return (
    <aside className="flex flex-col w-full max-w-sm border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 overflow-y-auto">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          Feedback & Actions
        </h2>
      </div>
      <div className="flex-1 p-4 space-y-6">
        {/* Scorecard */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-slate-600 dark:text-slate-300">
            SCORECARD
          </h3>
          <div className="space-y-4">
            {scorecard.map((item) => (
              <div key={item.id}>
                <Label className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  {item.label}
                </Label>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex gap-1 text-slate-300 dark:text-slate-600">
                    {[...Array(item.maxScore)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "cursor-pointer",
                          i < item.score
                            ? "text-primary fill-primary"
                            : "fill-transparent"
                        )}
                        onClick={() => handleScoreChange(item.id, i + 1)}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {item.score}/{item.maxScore}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Text Area */}
        <div>
          <Label
            className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2"
            htmlFor="feedback"
          >
            FEEDBACK
          </Label>
          <Textarea
            id="feedback"
            placeholder="Add your qualitative notes here..."
            rows={5}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800 space-y-3">
        <Button className="w-full h-10 gap-2">
          <Send className="h-5 w-5" />
          <span className="truncate">Move to Next Stage</span>
        </Button>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" className="w-full h-10 gap-2">
            <Pause className="h-5 w-5" />
            <span className="truncate">Put on Hold</span>
          </Button>
          <Button
            variant="secondary"
            className="w-full h-10 gap-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400"
          >
            <ThumbsDown className="h-5 w-5" />
            <span className="truncate">Reject</span>
          </Button>
        </div>
      </div>
    </aside>
  );
}
