"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockCandidates } from "@/lib/mock";

export default function HiringManagerHub() {
  const [selected, setSelected] = useState<string | null>(null);
  const candidate = mockCandidates.find((c) => c.id === selected);
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold">Candidates for Review</h2>
      <Card>
        <CardContent className="space-y-3">
          {mockCandidates.map((c) => (
            <div key={c.id} className="flex items-center justify-between border rounded p-3" style={{ borderColor: "var(--ts-border)" }}>
              <div>
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs text-[var(--ts-text-muted-50)]">Target Role: Senior Engineer</div>
                <div className="text-xs mt-1"><span className="text-[var(--ts-accent)]">AI Match {c.matchScore}%</span> • Validation: {c.validationScore}</div>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => setSelected(c.id)}>Review</Button>
                <Button variant="outline">Reject</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {candidate && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="ts-card max-w-lg w-full">
            <div className="p-4 border-b" style={{ borderColor: "var(--ts-border)" }}>
              <div className="text-lg font-semibold">{candidate.name}</div>
            </div>
            <div className="p-4 space-y-3 text-sm">
              <div className="text-[var(--ts-text-muted-70)]">AI Summary: 8+ years building scalable React/Node systems; strong in TypeScript and AWS.</div>
              <div className="text-[var(--ts-text-muted-70)]">Key Skills: React, TS, Node, AWS</div>
              <div className="border rounded p-3" style={{ borderColor: "var(--ts-border)" }}>
                <div className="font-medium text-[var(--ts-text)] mb-1">Structured Feedback</div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <label className="flex items-center gap-2">Tech <input type="range" min={1} max={5} defaultValue={4} /></label>
                  <label className="flex items-center gap-2">Team Fit <input type="range" min={1} max={5} defaultValue={5} /></label>
                  <label className="flex items-center gap-2">Comms <input type="range" min={1} max={5} defaultValue={4} /></label>
                </div>
                <textarea className="mt-2 w-full h-20 bg-transparent border rounded p-2 text-[var(--ts-text)]" style={{ borderColor: "var(--ts-border)" }} placeholder="Brief justification" />
                <div className="mt-2 flex items-center gap-3 text-xs">
                  <label className="flex items-center gap-1"><input type="radio" name="next" defaultChecked /> Recommend Interview</label>
                  <label className="flex items-center gap-1"><input type="radio" name="next" /> Not a Fit</label>
                  <label className="flex items-center gap-1"><input type="radio" name="next" /> Hold</label>
                </div>
              </div>
            </div>
            <div className="p-4 flex justify-end gap-2 border-t" style={{ borderColor: "var(--ts-border)" }}>
              <Button variant="outline" onClick={() => setSelected(null)}>Close</Button>
              <Button>Submit Feedback</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
