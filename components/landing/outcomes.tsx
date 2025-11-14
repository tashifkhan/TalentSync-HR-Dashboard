import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, IndianRupee, Clock } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  impact: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "We were losing great candidates because our hiring took 6 weeks. TalentSync cut it to 18 days. The AI validation caught resume exaggerations we would have missed.",
    name: "Arjun Mehta",
    role: "VP Engineering",
    company: "FinTech Startup, Bangalore",
    impact: "30% faster hiring"
  },
  {
    quote: "As a 50-person company, we were spending ₹4L annually on fragmented HR tools. TalentSync replaced 5 tools and saved us 50%. The bias-free scoring has improved our diversity metrics significantly.",
    name: "Priya Nair",
    role: "Head of People",
    company: "SaaS Company, Mumbai",
    impact: "₹2L+ saved annually"
  },
  {
    quote: "The automated interview management is a game-changer. AI transcription and summaries save our hiring managers 10+ hours per week. No more manual note-taking or biased recall.",
    name: "Vikram Singh",
    role: "Talent Acquisition Lead",
    company: "EdTech Scale-up, Delhi",
    impact: "10h saved/week"
  }
];

export function Outcomes() {
  return (
    <section className="py-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-1/10 text-chart-1 text-sm font-semibold mb-6">
          <TrendingUp className="size-4" />
          <span>Proven Results from Indian SMEs</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Real Impact, Real ROI</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Companies using TalentSync see measurable improvements in speed, cost, and quality of hire.</p>
      </header>

      {/* ROI Metrics */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        <MetricCard 
          icon={<Clock className="size-5" />}
          value="20-30%"
          label="Reduction in Time-to-Fill"
          color="teal"
        />
        <MetricCard 
          icon={<IndianRupee className="size-5" />}
          value="30-50%"
          label="HR Tech Cost Savings"
          color="green"
        />
        <MetricCard 
          icon={<TrendingUp className="size-5" />}
          value="40%"
          label="Improvement in Quality of Hire"
          color="cyan"
        />
        <MetricCard 
          icon={<Star className="size-5" />}
          value="10-11h"
          label="Saved per Recruiter/Week"
          color="blue"
        />
      </div>

      {/* Testimonials */}
      <div className="grid gap-8 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <Card key={t.name} className="bg-linear-to-br from-card via-card to-card/50 ring-1 ring-border shadow-lg hover:shadow-xl transition-all">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed italic">"{t.quote}"</p>
              <div className="pt-4 border-t border-border/50">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.company}</p>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <TrendingUp className="size-3" />
                  {t.impact}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function MetricCard({ icon, value, label, color }: { icon: React.ReactNode; value: string; label: string; color: string }) {
  const colorClasses = {
    teal: 'from-chart-1/20 to-chart-1/5 ring-chart-1/30 text-chart-1',
    green: 'from-chart-2/20 to-chart-2/5 ring-chart-2/30 text-chart-2',
    cyan: 'from-chart-3/20 to-chart-3/5 ring-chart-3/30 text-chart-3',
    blue: 'from-chart-4/20 to-chart-4/5 ring-chart-4/30 text-chart-4'
  };
  
  return (
    <Card className={`bg-linear-to-br ${colorClasses[color as keyof typeof colorClasses]} ring-1`}>
      <CardContent className="p-6 space-y-3 text-center">
        <div className="flex justify-center">{icon}</div>
        <div className="text-3xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
      </CardContent>
    </Card>
  );
}
