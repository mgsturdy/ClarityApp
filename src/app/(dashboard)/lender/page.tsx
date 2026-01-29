"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClarityScore } from "@/components/ui/clarity-score";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  DollarSign,
  Users,
  Percent,
  Clock,
  MapPin,
  Eye,
  Mail,
  Shield,
  Check,
} from "lucide-react";
import { useState } from "react";

const sampleStats = [
  { label: "Total Invested", value: "$1.2M", icon: DollarSign },
  { label: "Active Investments", value: "8", icon: TrendingUp },
  { label: "Avg. Return", value: "14.2%", icon: Percent },
  { label: "Total Earnings", value: "$85,400", icon: TrendingUp },
];

const sampleOpportunities = [
  {
    id: "Sample A",
    type: "Advance",
    amount: 175000,
    estateValue: 2500000,
    clarityScore: 742,
    bids: 4,
    timeLeft: "2 days",
    location: "California",
  },
  {
    id: "Sample B",
    type: "Advance",
    amount: 350000,
    estateValue: 5800000,
    clarityScore: 798,
    bids: 7,
    timeLeft: "4 days",
    location: "New York",
  },
];

const sampleInvestments = [
  { id: "Sample 1", amount: 150000, rate: "14.5%", progress: 65, est: "Mar 2026" },
  { id: "Sample 2", amount: 225000, rate: "13.8%", progress: 40, est: "Jun 2026" },
];

export default function LenderDashboard() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <header className="bg-white border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0f2744] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-semibold text-[#0f172a]">Clarity</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-[#64748b] hover:text-[#0f172a]">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Sample Banner */}
      <div className="bg-[#0f2744] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Eye className="h-5 w-5 text-[#fbbf24]" />
            <p className="text-sm">
              <span className="font-medium">Sample Dashboard</span>
              <span className="text-[#94a3b8] ml-2">Preview the lender experience with sample data</span>
            </p>
          </div>
          <Badge variant="gold">Demo Mode</Badge>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#0f172a] mb-2">Lender Dashboard</h1>
          <p className="text-[#64748b]">
            See how you'd manage your inheritance lending portfolio on Clarity.
          </p>
        </div>

        {/* Sample Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {sampleStats.map((stat) => (
            <Card key={stat.label} variant="elevated">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-[#64748b] mb-1">{stat.label}</p>
                    <p className="text-2xl font-semibold text-[#0f172a]">{stat.value}</p>
                    <p className="text-xs text-[#94a3b8] mt-1">Sample data</p>
                  </div>
                  <div className="w-10 h-10 bg-[#f1f5f9] rounded flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-[#475569]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Opportunities Preview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#0f172a]">Sample Opportunities</h2>
              <Link href="/lender/opportunities">
                <Button variant="ghost" size="sm">
                  View All Samples
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>

            {sampleOpportunities.map((opp) => (
              <Card key={opp.id} variant="elevated">
                <CardContent className="p-5">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <ClarityScore score={opp.clarityScore} size="sm" showLabel={false} />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-[#0f172a]">{opp.id}</span>
                          <Badge variant="navy">{opp.type}</Badge>
                        </div>
                        <p className="text-lg font-semibold text-[#0f172a]">
                          ${opp.amount.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-3 mt-1 text-sm text-[#64748b]">
                          <span>${(opp.estateValue / 1e6).toFixed(1)}M estate</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {opp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-[#64748b]">
                          <Users className="h-4 w-4" />
                          <span className="font-semibold text-[#0f172a]">{opp.bids}</span>
                        </div>
                        <span className="text-xs text-[#94a3b8]">bids</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-[#b8860b]">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">{opp.timeLeft}</span>
                        </div>
                        <span className="text-xs text-[#94a3b8]">left</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sample Investments */}
          <div className="space-y-6">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-base">Sample Investments</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {sampleInvestments.map((inv) => (
                    <li key={inv.id} className="pb-4 border-b border-[#e2e8f0] last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#0f172a]">{inv.id}</span>
                        <span className="text-sm text-[#059669]">{inv.rate}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#64748b] mb-2">
                        <span>${inv.amount.toLocaleString()}</span>
                        <span>Est. {inv.est}</span>
                      </div>
                      <div className="h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#0f2744] rounded-full"
                          style={{ width: `${inv.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-[#94a3b8] mt-1">{inv.progress}% to maturity</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-base">Portfolio Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748b]">Default Rate</span>
                    <span className="font-medium text-[#059669]">0.0%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748b]">Avg. Duration</span>
                    <span className="font-medium text-[#0f172a]">11.2 months</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748b]">Win Rate</span>
                    <span className="font-medium text-[#0f172a]">68%</span>
                  </div>
                </div>
                <p className="text-xs text-[#94a3b8] mt-4 pt-4 border-t border-[#e2e8f0]">
                  Sample metrics for illustration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg p-8 lg:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#0f172a] mb-4">
              Ready to Start Lending?
            </h2>
            <p className="text-[#64748b] mb-8">
              Join our network of private lenders and gain access to verified inheritance 
              advance opportunities with target returns of 12-18%.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[#f1f5f9] rounded-full flex items-center justify-center mb-3">
                  <TrendingUp className="h-5 w-5 text-[#0f2744]" />
                </div>
                <p className="text-sm font-medium text-[#0f172a]">12-18% Target Returns</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[#f1f5f9] rounded-full flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-[#0f2744]" />
                </div>
                <p className="text-sm font-medium text-[#0f172a]">Asset-Backed Security</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-[#f1f5f9] rounded-full flex items-center justify-center mb-3">
                  <Check className="h-5 w-5 text-[#0f2744]" />
                </div>
                <p className="text-sm font-medium text-[#0f172a]">Verified Opportunities</p>
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 pl-11 pr-4 rounded border border-[#e2e8f0] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                  />
                </div>
                <Button type="submit">Join Waitlist</Button>
              </form>
            ) : (
              <div className="p-4 bg-[#d1fae5] rounded max-w-md mx-auto">
                <p className="text-[#065f46] font-medium">
                  Thanks! We'll be in touch when lender access opens.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
