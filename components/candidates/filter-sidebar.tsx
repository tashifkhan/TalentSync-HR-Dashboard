// components/candidates/filter-sidebar.tsx
"use client"; // This component now manages state via props

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { FilterOption } from "@/types/candidates";
import { useState } from "react"; // Import useState for local slider state

// Define new props for handling state changes
type FilterSidebarProps = {
  statusOptions: FilterOption[];
  skillOptions: FilterOption[];
  experienceValue: number; // Current value of the experience slider
  onStatusChange: (id: string, checked: boolean) => void;
  onSkillChange: (id: string, checked: boolean) => void;
  onExperienceChange: (value: number) => void;
  onClearFilters: () => void;
};

export function FilterSidebar({
  statusOptions,
  skillOptions,
  experienceValue,
  onStatusChange,
  onSkillChange,
  onExperienceChange,
  onClearFilters,
}: FilterSidebarProps) {
  // Use local state for the slider to feel responsive
  // It will only call the expensive onExperienceChange when the user stops sliding
  const [localExperience, setLocalExperience] = useState(experienceValue);

  return (
    <aside className="col-span-12 lg:col-span-3">
      <div className="sticky top-28">
        <Card>
          <CardHeader className="p-6">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg font-bold text-slate-800 dark:text-slate-200">
                Filters
              </CardTitle>
              <Button
                variant="link"
                className="text-sm text-primary p-0 h-auto"
                onClick={onClearFilters} // Add click handler
              >
                Clear all
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <Accordion
              type="multiple"
              defaultValue={["status", "experience"]} // Default open
              className="w-full"
            >
              {/* --- Status Filter --- */}
              <AccordionItem
                value="status"
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 mb-4"
              >
                <AccordionTrigger className="py-3 text-slate-800 dark:text-slate-200 text-sm font-medium">
                  Status
                </AccordionTrigger>
                <AccordionContent className="pb-3 text-slate-600 dark:text-slate-300">
                  <div className="space-y-2">
                    {statusOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center gap-x-3 py-1.5"
                      >
                        <Checkbox
                          id={option.id}
                          checked={option.checked} // Use checked state from prop
                          onCheckedChange={(checked) => {
                            onStatusChange(option.id, Boolean(checked));
                          }}
                        />
                        <Label
                          htmlFor={option.id}
                          className="text-sm font-normal"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* --- Experience Filter --- */}
              <AccordionItem
                value="experience"
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 mb-4"
              >
                <AccordionTrigger className="py-3 text-slate-800 dark:text-slate-200 text-sm font-medium">
                  Experience
                </AccordionTrigger>
                <AccordionContent className="py-3 text-slate-600 dark:text-slate-300">
                  <Label
                    htmlFor="experience-slider"
                    className="block mb-2 text-sm text-slate-500 dark:text-slate-400"
                  >
                    Years of Experience:{" "}
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      {localExperience}+
                    </span>
                  </Label>
                  <Slider
                    id="experience-slider"
                    value={[localExperience]} // Use local state for value
                    max={15}
                    min={0}
                    step={1}
                    onValueChange={(value) => setLocalExperience(value[0])} // Update local state
                    onValueCommit={(value) => onExperienceChange(value[0])} // Call parent on commit
                  />
                </AccordionContent>
              </AccordionItem>

              {/* --- Skills Filter --- */}
              <AccordionItem
                value="skills"
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4"
              >
                <AccordionTrigger className="py-3 text-slate-800 dark:text-slate-200 text-sm font-medium">
                  Skills
                </AccordionTrigger>
                <AccordionContent className="pb-3 text-slate-600 dark:text-slate-300">
                  <div className="space-y-2">
                    {skillOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center gap-x-3 py-1.5"
                      >
                        <Checkbox
                          id={option.id}
                          checked={option.checked} // Use checked state from prop
                          onCheckedChange={(checked) => {
                            onSkillChange(option.id, Boolean(checked));
                          }}
                        />
                        <Label
                          htmlFor={option.id}
                          className="text-sm font-normal"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
}
