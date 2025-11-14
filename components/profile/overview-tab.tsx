// components/profile/overview-tab.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // <-- Import Card
import { OverviewData } from "@/types/profile";
import { Bot, Mail, Check, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

type OverviewTabProps = {
  data: OverviewData;
};

const getTimelineIcon = (type: string) => {
  switch (type) {
    case "Email":
      return <Mail className="h-4 w-4 text-primary" />;
    case "StageMove":
      return <Check className="h-4 w-4 text-secondary" />;
    case "Application":
      return <UserPlus className="h-4 w-4 text-gray-500" />;
    default:
      return <Mail className="h-4 w-4 text-primary" />;
  }
};

const getTimelineColor = (type: string) => {
  switch (type) {
    case "Email":
      return "bg-primary/20";
    case "StageMove":
      return "bg-secondary/20";
    case "Application":
      return "bg-gray-400/20";
    default:
      return "bg-primary/20";
  }
};

export function OverviewTab({ data }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      {/* AI Summary Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Bot className="h-5 w-5 text-secondary" /> AI-Generated Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-subtext-light dark:text-subtext-dark text-sm leading-relaxed">
            {data.aiSummary}
          </p>
        </CardContent>
      </Card>

      {/* Interview Feedback Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Interview Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="space-y-3">
            {data.feedback.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <AccordionTrigger className="p-4 font-semibold text-text-light dark:text-text-dark">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="font-semibold text-text-light dark:text-text-dark text-left">
                        {item.title}
                      </p>
                      {item.status === "Pending" && (
                        <p className="text-xs text-subtext-light dark:text-subtext-dark font-normal text-left">
                          with {item.interviewer} (Upcoming)
                        </p>
                      )}
                    </div>
                    {item.status === "Pending" && (
                      <Badge
                        variant="outline"
                        className="text-warning-600 dark:text-warning-400 bg-warning/10 border-none"
                      >
                        PENDING
                      </Badge>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0">
                  {item.status === "Completed" && <p>Feedback details...</p>}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Recent Communication Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Communication</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flow-root">
            <ul className="-mb-8">
              {data.communication.map((item, index) => (
                <li key={item.id}>
                  <div className="relative pb-8">
                    {index !== data.communication.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                      ></span>
                    )}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={cn(
                            "h-8 w-8 rounded-full flex items-center justify-center ring-4 ring-surface-light dark:ring-surface-dark",
                            getTimelineColor(item.type)
                          )}
                        >
                          {getTimelineIcon(item.type)}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-subtext-light dark:text-subtext-dark">
                            {item.title}{" "}
                            {item.highlight && (
                              <span className="font-medium text-text-light dark:text-text-dark">
                                {item.highlight}
                              </span>
                            )}
                          </p>
                        </div>
                        <div className="text-right text-xs whitespace-nowrap text-subtext-light dark:text-subtext-dark">
                          <time>{item.time}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
