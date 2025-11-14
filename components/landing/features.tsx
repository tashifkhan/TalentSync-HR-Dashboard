import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Zap, Users, CheckCircle2, Target } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  metric?: string;
}

const FEATURES: FeatureItem[] = [
  {
    title: "AI-Powered Semantic Matching",
    description: "Deep skill analysis with objective Validation Scores. Cross-referenced with LinkedIn & GitHub to verify true expertise—not just buzzwords.",
    icon: <Brain className="size-6" />,
    metric: "94% accuracy"
  },
  {
    title: "Systematic Bias Elimination",
    description: "Combat 'Youngism' and unconscious biases. Standardized, skill-based scoring at every stage promotes diversity and fairness.",
    icon: <Shield className="size-6" />,
    metric: "100% objective"
  },
  {
    title: "Automated Interview Management",
    description: "Smart scheduling, AI-driven real-time transcription, instant summaries, and post-interview fact-checking—all in one place.",
    icon: <Zap className="size-6" />,
    metric: "10h saved/week"
  },
  {
    title: "Hiring Manager Experience (HM-UX)",
    description: "Simplified, intuitive interface ensures high adoption. Quick feedback loops and seamless collaboration across teams.",
    icon: <Users className="size-6" />,
    metric: "90% adoption rate"
  },
  {
    title: "All-in-One Platform",
    description: "Replace fragmented tools. One unified workspace for sourcing, screening, interviewing, and decision-making.",
    icon: <CheckCircle2 className="size-6" />,
    metric: "50% cost reduction"
  },
  {
    title: "Proactive Talent Intelligence",
    description: "Transform reactive hiring into strategic advantage. Data-driven insights help you stay ahead in India's competitive talent market.",
    icon: <Target className="size-6" />,
    metric: "30% faster hiring"
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
          <Shield className="size-4" />
          <span>Built for India's Growing SMEs</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Escape the <span className="text-primary">Talent Gauntlet</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Stop losing top talent to slow, biased processes. TalentSync transforms chaotic hiring into a systematic competitive advantage.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>

      {/* Pain Point Callout */}
      <div className="mt-20 rounded-2xl bg-linear-to-br from-red-500/10 via-orange-500/5 to-transparent p-8 md:p-12 ring-1 ring-red-500/20">
        <h3 className="text-2xl font-bold mb-6">The Cost of Bad Hiring in India</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-red-500 mb-2">48hrs</div>
            <p className="text-sm text-muted-foreground">Average time to lose top talent to competitors</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500 mb-2">6-12 months</div>
            <p className="text-sm text-muted-foreground">Cost of one bad hire (salary + productivity loss)</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-500 mb-2">40%</div>
            <p className="text-sm text-muted-foreground">Resumes with inflated or misleading claims</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon, metric }: FeatureItem) {
  return (
    <Card className="group card-tilt bg-linear-to-br from-card via-card to-card/50 ring-1 ring-border hover:ring-primary/50 transition-all shadow-lg hover:shadow-xl">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="size-12 rounded-xl flex items-center justify-center bg-linear-to-br from-primary/20 to-chart-1/10 text-primary ring-1 ring-primary/30 group-hover:scale-110 transition-transform">
            {icon}
          </div>
          {metric && (
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              {metric}
            </span>
          )}
        </div>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
