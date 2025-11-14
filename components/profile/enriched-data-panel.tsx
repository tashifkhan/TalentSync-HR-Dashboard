// components/profile/enriched-data-panel.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EnrichedData } from "@/types/profile";

type EnrichedDataPanelProps = {
  data: EnrichedData;
};

export function EnrichedDataPanel({ data }: EnrichedDataPanelProps) {
  return (
    <div className="lg:col-span-3 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Enriched Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.socials.map((link) => (
              <a
                key={link.id}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Avatar className="w-8 h-8 rounded">
                  <AvatarImage src={link.iconUrl} alt={`${link.name} logo`} />
                  <AvatarFallback>{link.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm text-text-light dark:text-text-dark">
                    {link.name}
                  </p>
                  <p className="text-xs text-primary">{link.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Public Contributions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {data.contributions.map((item) => (
              <li
                key={item.id}
                className="text-sm text-subtext-light dark:text-subtext-dark"
              >
                <a
                  className="text-primary hover:underline"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
