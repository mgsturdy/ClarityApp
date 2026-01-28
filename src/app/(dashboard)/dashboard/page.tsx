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
  FileText,
  DollarSign,
  Calendar,
  Clock,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Total Requested",
    value: "$250,000",
    change: "+12% from last month",
    icon: DollarSign,
  },
  {
    label: "Active Applications",
    value: "2",
    subtext: "1 awaiting review",
    icon: FileText,
  },
  {
    label: "Funds Received",
    value: "$75,000",
    change: "APP-002 funded",
    icon: ArrowUpRight,
  },
  {
    label: "Est. Completion",
    value: "Mar 2026",
    subtext: "On track",
    icon: Calendar,
  },
];

const applications = [
  {
    id: "APP-001",
    type: "Advance",
    amount: 175000,
    status: "bidding",
    bids: 4,
    bestRate: "12.5%",
    created: "Jan 26, 2026",
  },
  {
    id: "APP-002",
    type: "Secure",
    amount: 75000,
    status: "funded",
    rate: "14%",
    created: "Jan 12, 2026",
  },
];

const activity = [
  { message: "New bid received on APP-001", time: "2 hours ago" },
  { message: "Documents verified for APP-001", time: "1 day ago" },
  { message: "APP-002 funded successfully", time: "2 weeks ago" },
];

export default function HeirDashboard() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar variant="heir" />

      <div className="flex-1 ml-64">
        <DashboardHeader
          title="Dashboard"
          subtitle="Overview of your inheritance advances"
          showNewApplication
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
                      <p className="text-xs text-[#64748b] mt-1">
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
            {/* Applications Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-[#0f172a]">Your Applications</h2>
                <Link href="/dashboard/applications">
                  <Button variant="ghost" size="sm">
                    View All
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </div>

              {applications.map((app) => (
                <Card key={app.id} variant="elevated">
                  <CardContent className="p-5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#f1f5f9] rounded flex items-center justify-center">
                          <FileText className="h-5 w-5 text-[#475569]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-[#0f172a]">{app.id}</span>
                            <Badge variant={app.status === "funded" ? "success" : "gold"}>
                              {app.status === "funded" ? "Funded" : "Active"}
                            </Badge>
                          </div>
                          <p className="text-sm text-[#64748b]">
                            {app.type} · ${app.amount.toLocaleString()} · {app.created}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        {app.status === "bidding" ? (
                          <div className="text-right">
                            <p className="text-sm text-[#64748b]">{app.bids} bids</p>
                            <p className="text-lg font-semibold text-[#059669]">
                              Best: {app.bestRate}
                            </p>
                          </div>
                        ) : (
                          <div className="text-right">
                            <p className="text-sm text-[#64748b]">Rate</p>
                            <p className="text-lg font-semibold text-[#0f172a]">{app.rate}</p>
                          </div>
                        )}
                        <Button variant={app.status === "bidding" ? "default" : "outline"} size="sm">
                          {app.status === "bidding" ? "Review Bids" : "Details"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* New Application CTA */}
              <Card variant="bordered" className="border-dashed">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[#0f172a]">Need additional funding?</p>
                      <p className="text-sm text-[#64748b]">Start a new application</p>
                    </div>
                    <Link href="/apply">
                      <Button size="sm">
                        Apply Now
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Clarity Score */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-base">Your Clarity Score</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center pb-6">
                  <ClarityScore score={742} size="md" />
                  <p className="mt-4 text-sm text-[#64748b] text-center">
                    Your score qualifies you for competitive rates.
                  </p>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-base">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {activity.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 pb-4 border-b border-[#e2e8f0] last:border-0 last:pb-0"
                      >
                        <div className="w-2 h-2 bg-[#0f2744] rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-[#0f172a]">{item.message}</p>
                          <p className="text-xs text-[#94a3b8] mt-0.5">{item.time}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
