"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Zap, TrendingUp, Clock, IndianRupee } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <div className="glass-neutral inline-flex items-center gap-3 rounded-full px-6 py-2.5 text-xs text-muted-foreground shadow-sm">
            <Shield className="size-4 text-primary" />
            <span className="font-medium tracking-wide">Ethical AI-First Hiring</span>
            <Separator orientation="vertical" className="h-5" />
            <span className="font-semibold text-foreground">Built for India's Growth</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance">
            <span className="block bg-linear-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">Don't Just Fill Seats.</span>
            <span className="block mt-3 bg-linear-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent">Build Your A-Team.</span>
          </h1>
          <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">TalentSync HR/Pro</span> transforms chaotic hiring into your competitive edge. AI-powered semantic matching, automated workflows, and bias-free decisions—designed for India's ambitious SMEs.
          </p>
          
          {/* Three Marketing Angles */}
          <div className="grid md:grid-cols-3 gap-4 pt-4">
            <AngleCard 
              icon={<Target className="size-5" />}
              title="Zero False Starts"
              description="Stop losing top talent to slow, biased processes"
            />
            <AngleCard 
              icon={<Zap className="size-5" />}
              title="10+ Hours/Week Saved"
              description="Automate screening, scheduling & validation"
            />
            <AngleCard 
              icon={<Shield className="size-5" />}
              title="Bias-Free Hiring"
              description="Objective scoring eliminates age & resume bias"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="font-semibold shadow-xl hover:shadow-2xl bg-linear-to-r from-primary to-chart-1 hover:from-chart-2 hover:to-chart-3 text-primary-foreground">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="glass-neutral font-semibold">Watch Demo</Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-4">
            <Stat label="Time-to-Fill" value="-30%" icon={<Clock className="size-4" />} />
            <Stat label="HR Tech Savings" value="-50%" icon={<IndianRupee className="size-4" />} />
            <Stat label="Quality Hires" value="+40%" icon={<TrendingUp className="size-4" />} />
          </div>
        </div>

        {/* Visual Demonstration Card */}
        <aside className="w-full max-w-xl">
          <Card className="glass-neutral overflow-hidden border-2 border-primary/20 shadow-2xl">
            <CardContent className="p-0">
              <div className="bg-linear-to-br from-primary/10 via-chart-1/5 to-transparent p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Validation Score Dashboard</h3>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">LIVE</span>
                </div>
                
                {/* Mock Candidate Card */}
                <div className="space-y-4 rounded-xl bg-card/50 backdrop-blur p-6 ring-1 ring-border shadow-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-base">Priya Sharma</h4>
                      <p className="text-sm text-muted-foreground">Senior Product Manager</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">94</div>
                      <p className="text-xs text-muted-foreground">Match Score</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <SkillBadge skill="React & TypeScript" verified={true} />
                    <SkillBadge skill="Product Strategy" verified={true} />
                    <SkillBadge skill="Team Leadership" verified={true} />
                  </div>

                  <div className="pt-3 border-t border-border/50 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">LinkedIn Verified</span>
                      <span className="text-primary font-semibold">✓ Cross-referenced</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">GitHub Activity</span>
                      <span className="text-primary font-semibold">✓ 847 contributions</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Bias Check</span>
                      <span className="text-primary font-semibold">✓ Objective scoring</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                  <Shield className="size-3 text-primary" />
                  <span>AI-validated • Bias-free • Real-time insights</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Trust indicators */}
      <div className="mt-16 pt-12 border-t border-border/50">
        <p className="text-xs text-center text-muted-foreground mb-6">TRUSTED BY INDIA'S FASTEST GROWING COMPANIES</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
          <div className="text-sm font-semibold">FinTech Startup</div>
          <div className="text-sm font-semibold">SaaS Scale-up</div>
          <div className="text-sm font-semibold">EdTech Company</div>
          <div className="text-sm font-semibold">Healthcare SME</div>
        </div>
      </div>
    </section>
  );
}

function AngleCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-lg p-4 bg-foreground/5 ring-1 ring-border/60 hover:ring-primary/40 transition-all group">
      <div className="text-primary mb-2 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function Stat({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-lg px-4 py-3 bg-linear-to-br from-primary/10 to-chart-1/5 ring-1 ring-primary/20 flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <div className="text-primary">{icon}</div>
        <span className="text-xl font-bold text-primary">{value}</span>
      </div>
      <span className="text-[11px] text-muted-foreground uppercase tracking-wide">{label}</span>
    </div>
  );
}

function SkillBadge({ skill, verified }: { skill: string; verified: boolean }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 rounded-md bg-background/50 ring-1 ring-border/50">
      <span className="text-xs font-medium">{skill}</span>
      {verified && <span className="text-xs text-primary">✓</span>}
    </div>
  );
}
