"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Percent, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  "No credit check required",
  "Non-recourse—pay only from your inheritance",
  "Funding in as little as 48 hours",
  "Competitive rates through our lender marketplace",
];

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-sm font-medium text-[#b8860b] uppercase tracking-wider mb-4">
              Inheritance Advances
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#0f172a] leading-tight mb-6">
              Access Your Inheritance Today
            </h1>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              Don't wait months or years for probate to settle. Clarity Finance 
              provides immediate advances against your expected inheritance, 
              giving you access to funds when you need them most.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#059669] flex-shrink-0" />
                  <span className="text-[#334155]">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/apply">
                <Button size="lg">
                  Apply Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button variant="secondary" size="lg">
                  Learn How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-[#e2e8f0]">
              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <Shield className="h-4 w-4 text-[#0f2744]" />
                <span>Bank-level security</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <Clock className="h-4 w-4 text-[#0f2744]" />
                <span>24-hour decisions</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#475569]">
                <Percent className="h-4 w-4 text-[#0f2744]" />
                <span>Transparent pricing</span>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://www.fidelity.com/bin-public/600_Fidelity_Com_English/images/learning-center/heros/probate-settling-the-estate_632003618_banner.png"
                alt="Family discussing estate planning"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-b border-[#e2e8f0]" />
    </section>
  );
}
