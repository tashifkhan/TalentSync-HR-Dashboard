// components/dashboard/top-candidates-table.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TopCandidate } from "@/types/jobs";
import { MoreHorizontal } from "lucide-react";

type TopCandidatesTableProps = {
  candidates: TopCandidate[];
};

export function TopCandidatesTable({ candidates }: TopCandidatesTableProps) {
  return (
    <Card className="lg:col-span-2 p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Top Candidates
      </h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate Name</TableHead>
              <TableHead>AI Match Score</TableHead>
              <TableHead>Current Stage</TableHead>
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
                  <div className="flex items-center gap-3">
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
                </TableCell>
                <TableCell>
                  <span className="font-bold text-teal-600 dark:text-teal-400">
                    {candidate.aiMatch}%
                  </span>
                </TableCell>
                <TableCell>{candidate.stage}</TableCell>
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
    </Card>
  );
}
