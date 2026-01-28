"use client";

import { Sidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClarityScore } from "@/components/ui/clarity-score";
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  DollarSign,
  Users,
  Percent,
  Clock,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Total Invested",
    value: "$1.2M",
    change: "+$150K this month",
    icon: DollarSign,
  },
  {
    label: "Active Investments",
    value: "8",
    subtext: "2 near maturity",
    icon: TrendingUp,
  },
  {
    label: "Avg. Return",
    value: "14.2%",
    change: "+0.8% vs last quarter",
    icon: Percent,
  },
  {
    label: "Total Earnings",
    value: "$85,400",
    subtext: "YTD realized",
    icon: ArrowUpRight,
  },
];

const opportunities = [
  {
    id: "OPP-2847",
    type: "Advance",
    amount: 175000,
    estateValue: 2500000,
    clarityScore: 742,
    bids: 4,
    timeLeft: "2 days",
    location: "California",
  },
  {
    id: "OPP-2846",
    type: "Advance",
    amount: 350000,
    estateValue: 5800000,
    clarityScore: 798,
    bids: 7,
    timeLeft: "4 days",
    location: "New York",
  },
  {
    id: "OPP-2845",
    type: "Secure",
    amount: 500000,
    estateValue: 12000000,
    clarityScore: 815,
    bids: 12,
    timeLeft: "6 days",
    location: "Texas",
  },
];

const investments = [
  { id: "INV-1234", amount: 150000, rate: "14.5%", progress: 65, est: "Mar 2026" },
  { id: "INV-1233", amount: 225000, rate: "13.8%", progress: 40, est: "Jun 2026" },
];

export default function LenderDashboard() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar variant="lender" />

      <div className="flex-1 ml-64">
        <DashboardHeader
          title="Lender Dashboard"
          subtitle="Manage your inheritance lending portfolio"
        />

        <main className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} variant="elevated">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-[#64748b] mb-1">{stat.label}</p>
                      <p className="text-2xl font-semibold text-[#0f172a]">{stat.value}</p>
                      <p className="text-xs text-[#059669] mt-1">
                        {stat.change || stat.subtext}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-[#f1f5f9] rounded flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-[#475569]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Opportunities Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#0f172a]">New Opportunities</h2>
                <Link href="/lender/opportunities">
                  <Button variant="ghost" size="sm">
                    View All
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>

              {opportunities.map((opp) => (
                <Card key={opp.id} variant="elevated">
                  <CardContent className="p-5">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <ClarityScore score={opp.clarityScore} size="sm" showLabel={false} />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-[#0f172a]">{opp.id}</span>
                            <Badge variant={opp.type === "Advance" ? "navy" : "success"}>
                              {opp.type}
                            </Badge>
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
                            <span className="font-medium text-[#0f172a]">{opp.bids}</span>
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
                        <Button size="sm">Place Bid</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Active Investments */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-base">Active Investments</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {investments.map((inv) => (
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
                  <Link href="/lender/investments">
                    <Button variant="ghost" size="sm" className="w-full mt-4">
                      View All Investments
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Portfolio Health */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-base">Portfolio Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#64748b]">Default Rate</span>
                      <span className="font-medium text-[#059669]">0.0%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#64748b]">Avg. Duration</span>
                      <span className="font-medium text-[#0f172a]">11.2 months</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#64748b]">Win Rate</span>
                      <span className="font-medium text-[#0f172a]">68%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#64748b]">Avg. Clarity Score</span>
                      <span className="font-medium text-[#0f172a]">756</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-[#d1fae5] rounded">
                    <p className="text-sm text-[#065f46]">
                      <strong>Excellent standing.</strong> Your portfolio is performing above market average.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
