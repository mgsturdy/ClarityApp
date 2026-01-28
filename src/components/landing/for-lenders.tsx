"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Target, BarChart3 } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: TrendingUp,
    title: "Attractive Returns",
    description: "Target 12-18% annual returns on inheritance advances backed by verified estate assets.",
  },
  {
    icon: Shield,
    title: "Asset-Backed Security",
    description: "All advances are secured by verified estate assets with legal documentation and clear title.",
  },
  {
    icon: Target,
    title: "Transparent Underwriting",
    description: "Our Clarity Score provides comprehensive risk assessment for every lending opportunity.",
  },
  {
    icon: BarChart3,
    title: "Portfolio Diversification",
    description: "Add a unique asset class to your portfolio that's uncorrelated with traditional markets.",
  },
];

const stats = [
  { label: "Avg. Loan Duration", value: "8-14 months" },
  { label: "Historical Default Rate", value: "<2%" },
  { label: "Minimum Investment", value: "$25,000" },
  { label: "Lender Platform Fee", value: "0%" },
];

export function ForLenders() {
  return (
    <section id="lenders" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Content */}
          <div>
            <p className="text-sm font-medium text-[#b8860b] uppercase tracking-wider mb-3">
              For Lenders
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
              A New Asset Class in Estate Lending
            </h2>
            <p className="text-lg text-[#475569] mb-8">
              Join our marketplace of accredited lenders capitalizing on the $124 trillion 
              wealth transfer. Bid on verified inheritance advances with transparent 
              underwriting and secured returns.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#f8fafc] border border-[#e2e8f0] rounded p-4"
                >
                  <p className="text-xl font-semibold text-[#0f172a]">{stat.value}</p>
                  <p className="text-xs text-[#64748b] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/lender">
                <Button>
                  Become a Lender
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/lender/opportunities">
                <Button variant="secondary">
                  View Opportunities
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#f8fafc] border border-[#e2e8f0] rounded p-6"
              >
                <div className="w-10 h-10 bg-[#0f2744] rounded flex items-center justify-center mb-4">
                  <benefit.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-[#0f172a] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#0f2744] rounded-lg p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <p className="text-2xl font-semibold text-white mb-2">
              $200M+ in Annual Market Volume
            </p>
            <p className="text-[#94a3b8]">
              Currently underserved by traditional lenders with rates exceeding 30%
            </p>
          </div>
          <Link href="/lender">
            <Button variant="gold" size="lg">
              Start Lending
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
