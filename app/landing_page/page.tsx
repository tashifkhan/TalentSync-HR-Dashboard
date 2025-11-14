"use client";
import React from "react";
import { HeroSection } from "@/components/landing/hero";
import { FeaturesGrid } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Outcomes } from "@/components/landing/outcomes";
import { FinalCTA } from "@/components/landing/cta";

export default function LandingPage() {
	return (
		<div className="relative ambient-gradient noise-layer bloom-layer">
			<HeroSection />
			<FeaturesGrid />
			<HowItWorks />
			<Outcomes />
			<FinalCTA />
			<footer className="pb-16 text-center text-xs text-muted-foreground">
				© {new Date().getFullYear()} TalentSync. All rights reserved. · Privacy · Terms · Contact
			</footer>
		</div>
	);
}
