import { Card, CardContent } from "@/components/ui/card";
import { Upload, Search, CheckCircle2, Rocket } from "lucide-react";

const STEPS = [
  {
    title: "Source & Import",
    description: "Connect with job boards, upload resumes, or integrate with your ATS. Support for Naukri, LinkedIn, and major Indian platforms.",
    icon: <Upload className="size-6" />,
    time: "2 min"
  },
  {
    title: "AI Validation & Matching",
    description: "Semantic analysis verifies skills against LinkedIn/GitHub. Objective Validation Score eliminates resume fluff and bias.",
    icon: <Search className="size-6" />,
    time: "30 sec"
  },
  {
    title: "Smart Interviews",
    description: "Automated scheduling, AI transcription, real-time summaries, and post-interview fact-checking—all hands-free.",
    icon: <CheckCircle2 className="size-6" />,
    time: "Automated"
  },
  {
    title: "Hire with Confidence",
    description: "Standardized scoring, collaborative decision-making, and complete audit trails. Make objective, data-backed offers.",
    icon: <Rocket className="size-6" />,
    time: "Fast"
  }
];

export function HowItWorks() {
  return (
    <section className="py-32 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <header className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-1/10 text-chart-1 text-sm font-semibold mb-6">
          <Rocket className="size-4" />
          <span>From Resume to Offer in Days, Not Weeks</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">How TalentSync Works</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Four simple steps to transform your hiring process.</p>
      </header>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, i) => (
          <div key={step.title} className="relative">
            <Card className="glass-neutral h-full hover:shadow-xl transition-all group">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="size-12 flex items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-chart-1/10 text-primary ring-1 ring-primary/30 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-xs font-semibold text-primary px-2 py-1 rounded-full bg-primary/10">
                    {step.time}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="size-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h3 className="font-bold text-base">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </CardContent>
            </Card>
            {i < STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-primary/40">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
