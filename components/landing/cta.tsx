import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, CheckCircle2 } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-linear-to-br from-primary/10 via-chart-1/5 to-transparent p-12 md:p-16 ring-1 ring-primary/20 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
            <Zap className="size-4" />
            <span>Limited Time: 30-Day Free Trial</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Ready to <span className="bg-linear-to-r from-primary to-chart-1 bg-clip-text text-transparent">Transform Your Hiring?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join India's fastest-growing SMEs using TalentSync to build their A-teams. No credit card required. Setup in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="font-semibold shadow-2xl hover:shadow-3xl bg-linear-to-r from-primary to-chart-1 hover:from-chart-2 hover:to-chart-3 text-primary-foreground text-lg px-8 py-6 h-auto">
              Start Free Trial
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button size="lg" variant="outline" className="glass-neutral font-semibold text-lg px-8 py-6 h-auto">
              Book a Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" />
              <span>5-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="size-4 text-primary" />
              <span>SOC 2 compliant</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="pt-12 border-t border-border/30 mt-12">
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-6">Join 500+ companies hiring smarter</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-semibold">TechCorp</div>
              <div className="text-sm font-semibold">StartupHub</div>
              <div className="text-sm font-semibold">InnovateLabs</div>
              <div className="text-sm font-semibold">GrowthScale</div>
              <div className="text-sm font-semibold">FutureWorks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
