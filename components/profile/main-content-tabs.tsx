// components/profile/main-content-tabs.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { OverviewTab } from "./overview-tab";
import { OverviewData } from "@/types/profile";

type MainContentTabsProps = {
  overviewData: OverviewData;
};

export function MainContentTabs({ overviewData }: MainContentTabsProps) {
  return (
    <Card className="lg:col-span-6">
      <Tabs defaultValue="overview">
        <TabsList className="px-6 border-b border-gray-200 dark:border-gray-700 w-full justify-start rounded-t-xl rounded-b-none bg-transparent">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="interviews">Interviews</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>
        <div className="p-6">
          <TabsContent value="overview">
            <OverviewTab data={overviewData} />
          </TabsContent>
          <TabsContent value="resume">
            <p>Full resume viewer would go here.</p>
          </TabsContent>
          <TabsContent value="communication">
            <p>Communication log would go here.</p>
          </TabsContent>
          <TabsContent value="interviews">
            <p>Interview details would go here.</p>
          </TabsContent>
          <TabsContent value="notes">
            <p>Notes section would go here.</p>
          </TabsContent>
        </div>
      </Tabs>
    </Card>
  );
}
