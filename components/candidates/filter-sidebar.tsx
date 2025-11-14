// components/candidates/filter-sidebar.tsx
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

type FilterSidebarProps = {
  statusOptions: FilterOption[];
  skillOptions: FilterOption[];
};

export function FilterSidebar({
  statusOptions,
  skillOptions,
}: FilterSidebarProps) {
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
              >
                Clear all
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <Accordion
              type="multiple"
              defaultValue={["status"]}
              className="w-full"
            >
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
                          defaultChecked={option.checked}
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
                      5+
                    </span>
                  </Label>
                  <Slider
                    id="experience-slider"
                    defaultValue={[5]}
                    max={15}
                    min={0}
                    step={1}
                  />
                </AccordionContent>
              </AccordionItem>

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
                          defaultChecked={option.checked}
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
