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
    <aside className="flex flex-col w-full max-w-sm border-l bg-background overflow-y-auto">
      {/* --- Updated: Removed hardcoded border/bg colors --- */}
      <div className="p-4 border-b">
        {/* --- Updated: Use `text-foreground` (default) --- */}
        <h2 className="text-base font-semibold text-foreground">
          Feedback & Actions
        </h2>
      </div>
      <div className="flex-1 p-4 space-y-6">
        {/* Scorecard */}
        <div className="space-y-4">
          {/* --- Updated: Use `text-muted-foreground` for subheadings --- */}
          <h3 className="text-sm font-medium text-muted-foreground">
            SCORECARD
          </h3>
          <div className="space-y-4">
            {scorecard.map((item) => (
              <div key={item.id}>
                {/* --- Updated: Use `text-foreground` (default) --- */}
                <Label className="text-sm font-medium text-foreground">
                  {item.label}
                </Label>
                <div className="flex items-center justify-between mt-1">
                  {/* --- Updated: Use `text-muted-foreground` for empty stars --- */}
                  <div className="flex gap-1 text-muted-foreground">
                    {[...Array(item.maxScore)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "cursor-pointer",
                          i < item.score
                            ? "text-primary fill-primary"
                            : "fill-transparent" // Empty star stroke inherits from parent
                        )}
                        onClick={() => handleScoreChange(item.id, i + 1)}
                      />
                    ))}
                  </div>
                  {/* --- Updated: Use `text-foreground` (default) --- */}
                  <span className="text-sm font-semibold text-foreground">
                    {item.score}/{item.maxScore}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Text Area */}
        <div>
          {/* --- Updated: Use `text-muted-foreground` for subheadings --- */}
          <Label
            className="block text-sm font-medium text-muted-foreground mb-2"
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
      {/* --- Updated: Removed hardcoded border color --- */}
      <div className="p-4 mt-auto border-t space-y-3">
        <Button className="w-full h-10 gap-2">
          <Send className="h-5 w-5" />
          <span className="truncate">Move to Next Stage</span>
        </Button>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" className="w-full h-10 gap-2">
            <Pause className="h-5 w-5" />
            <span className="truncate">Put on Hold</span>
          </Button>
          {/* --- Updated: Simplified to outline variant + destructive text --- */}
          <Button
            variant="outline"
            className="w-full h-10 gap-2 text-destructive hover:text-destructive"
          >
            <ThumbsDown className="h-5 w-5" />
            <span className="truncate">Reject</span>
          </Button>
        </div>
      </div>
    </aside>
  );
}