// components/jobs/top-candidates-table.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TopCandidate } from "@/types/jobs";
import { MoreHorizontal, Mail, Phone, CalendarDays } from "lucide-react";

type TopCandidatesTableProps = {
  candidates: TopCandidate[];
};

// Helper to get badge variant based on stage
const getStageVariant = (
  stage: string
): "default" | "secondary" | "outline" => {
  switch (stage.toLowerCase()) {
    case "interview":
      return "default";
    case "screening":
      return "secondary";
    case "sourced":
      return "outline";
    default:
      return "outline";
  }
};

export function TopCandidatesTable({ candidates }: TopCandidatesTableProps) {
  return (
    // This Card now spans all 3 columns of its parent grid
    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle>Top Candidates</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>AI Match</TableHead>
                <TableHead>Current Stage</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Applied</TableHead>
                <TableHead>Last Activity</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="flex items-center gap-3 cursor-pointer">
                          <Avatar className="h-9 w-9">
                            <AvatarImage
                              src={candidate.avatarUrl}
                              alt="Candidate avatar"
                            />
                            <AvatarFallback>
                              {candidate.avatarFallback}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{candidate.name}</span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarImage
                              src={candidate.avatarUrl}
                              alt="Candidate avatar"
                            />
                            <AvatarFallback>
                              {candidate.avatarFallback}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-bold">{candidate.name}</div>
                            <div className="text-sm text-muted-foreground">
                              AI Match: {candidate.aiMatch}%
                            </div>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </TableCell>
                  <TableCell>
                    <span className="font-bold text-teal-600 dark:text-teal-400">
                      {candidate.aiMatch}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStageVariant(candidate.stage)}>
                      {candidate.stage}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Mail className="h-3 w-3 text-muted-foreground" />
                        <span>{candidate.email}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        <span>{candidate.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1.5 text-sm">
                      <CalendarDays className="h-3 w-3 text-muted-foreground" />
                      {candidate.appliedDate}
                    </div>
                  </TableCell>
                  <TableCell>{candidate.lastActivity}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More actions</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
