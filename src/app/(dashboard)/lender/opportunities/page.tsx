"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClarityScore } from "@/components/ui/clarity-score";
import {
  Filter,
  Users,
  Clock,
  MapPin,
  Building,
  User,
  X,
  Check,
} from "lucide-react";

const opportunities = [
  {
    id: "OPP-2847",
    type: "Advance",
    amount: 175000,
    estateValue: 2500000,
    clarityScore: 742,
    bids: 4,
    highestBid: "13.2%",
    timeLeft: "2 days",
    location: "California",
    relationship: "Child",
    probateStage: "In Progress",
    duration: "8-12 months",
    documents: ["Death Certificate", "Will", "Probate Filing"],
  },
  {
    id: "OPP-2846",
    type: "Advance",
    amount: 350000,
    estateValue: 5800000,
    clarityScore: 798,
    bids: 7,
    highestBid: "12.1%",
    timeLeft: "4 days",
    location: "New York",
    relationship: "Spouse",
    probateStage: "Near Completion",
    duration: "3-6 months",
    documents: ["Death Certificate", "Will", "Probate Filing", "Asset Inventory"],
  },
  {
    id: "OPP-2845",
    type: "Secure",
    amount: 500000,
    estateValue: 12000000,
    clarityScore: 815,
    bids: 12,
    highestBid: "11.5%",
    timeLeft: "6 days",
    location: "Texas",
    relationship: "Child",
    probateStage: "Pre-Probate",
    duration: "12-18 months",
    documents: ["Estate Plan", "Asset Verification", "Tri-party Consent"],
  },
  {
    id: "OPP-2844",
    type: "Advance",
    amount: 85000,
    estateValue: 950000,
    clarityScore: 689,
    bids: 2,
    highestBid: "15.5%",
    timeLeft: "1 day",
    location: "Florida",
    relationship: "Sibling",
    probateStage: "Filed",
    duration: "10-14 months",
    documents: ["Death Certificate", "Will"],
  },
];

export default function OpportunitiesPage() {
  const [selectedOpp, setSelectedOpp] = useState<string | null>(null);
  const [bidAmount, setBidAmount] = useState("");
  const [filterType, setFilterType] = useState<"all" | "advance" | "secure">("all");

  const filteredOpportunities = opportunities.filter((opp) => {
    if (filterType === "all") return true;
    return opp.type.toLowerCase() === filterType;
  });

  const selected = opportunities.find((o) => o.id === selectedOpp);

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar variant="lender" />

      <div className="flex-1 ml-64">
        <DashboardHeader
          title="Lending Opportunities"
          subtitle="Browse and bid on verified inheritance advances"
        />

        <main className="p-8">
          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-[#64748b]">
              <Filter className="h-4 w-4" />
              Filter:
            </div>
            <div className="flex gap-2">
              {["all", "advance", "secure"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type as typeof filterType)}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                    filterType === type
                      ? "bg-[#0f2744] text-white"
                      : "bg-white border border-[#e2e8f0] text-[#475569] hover:border-[#cbd5e1]"
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
            <span className="ml-auto text-sm text-[#64748b]">
              {filteredOpportunities.length} opportunities
            </span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* List */}
            <div className="xl:col-span-2 space-y-4">
              {filteredOpportunities.map((opp) => (
                <Card
                  key={opp.id}
                  variant={selectedOpp === opp.id ? "elevated" : "bordered"}
                  className={`cursor-pointer transition-all ${
                    selectedOpp === opp.id ? "ring-2 ring-[#0f2744]" : ""
                  }`}
                  onClick={() => setSelectedOpp(opp.id)}
                >
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
                            {opp.clarityScore >= 800 && <Badge variant="gold">Premium</Badge>}
                          </div>
                          <p className="text-xl font-semibold text-[#0f172a]">
                            ${opp.amount.toLocaleString()}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-[#64748b]">
                            <span className="flex items-center gap-1">
                              <Building className="h-3 w-3" />
                              ${(opp.estateValue / 1e6).toFixed(1)}M estate
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {opp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {opp.relationship}
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
                          <span className="text-lg font-semibold text-[#059669]">{opp.highestBid}</span>
                          <p className="text-xs text-[#94a3b8]">best rate</p>
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

            {/* Detail Panel */}
            <div className="xl:col-span-1">
              {selected ? (
                <div className="sticky top-24 space-y-6">
                  <Card variant="elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-[#0f172a]">{selected.id}</h3>
                        <button onClick={() => setSelectedOpp(null)} className="p-1 hover:bg-[#f1f5f9] rounded">
                          <X className="h-5 w-5 text-[#64748b]" />
                        </button>
                      </div>

                      <div className="flex justify-center mb-6">
                        <ClarityScore score={selected.clarityScore} size="md" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-3 bg-[#f8fafc] rounded">
                          <p className="text-xs text-[#64748b]">Requested</p>
                          <p className="font-semibold text-[#0f172a]">${selected.amount.toLocaleString()}</p>
                        </div>
                        <div className="p-3 bg-[#f8fafc] rounded">
                          <p className="text-xs text-[#64748b]">Estate Value</p>
                          <p className="font-semibold text-[#0f172a]">${(selected.estateValue / 1e6).toFixed(1)}M</p>
                        </div>
                        <div className="p-3 bg-[#f8fafc] rounded">
                          <p className="text-xs text-[#64748b]">LTV Ratio</p>
                          <p className="font-semibold text-[#059669]">
                            {((selected.amount / selected.estateValue) * 100).toFixed(1)}%
                          </p>
                        </div>
                        <div className="p-3 bg-[#f8fafc] rounded">
                          <p className="text-xs text-[#64748b]">Duration</p>
                          <p className="font-semibold text-[#0f172a]">{selected.duration}</p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#64748b]">Location</span>
                          <span className="text-[#0f172a]">{selected.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#64748b]">Relationship</span>
                          <span className="text-[#0f172a]">{selected.relationship}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#64748b]">Probate Stage</span>
                          <Badge variant={selected.probateStage === "Pre-Probate" ? "success" : "navy"}>
                            {selected.probateStage}
                          </Badge>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm text-[#64748b] mb-2">Verified Documents</p>
                        <div className="flex flex-wrap gap-2">
                          {selected.documents.map((doc) => (
                            <span key={doc} className="inline-flex items-center gap-1 px-2 py-1 bg-[#d1fae5] text-[#065f46] text-xs rounded">
                              <Check className="h-3 w-3" />
                              {doc}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-[#e2e8f0]">
                        <p className="text-sm font-medium text-[#0f172a] mb-1">Place Your Bid</p>
                        <p className="text-xs text-[#64748b] mb-4">Current best: {selected.highestBid}</p>
                        <div className="flex gap-2">
                          <div className="relative flex-1">
                            <input
                              type="text"
                              value={bidAmount}
                              onChange={(e) => setBidAmount(e.target.value)}
                              placeholder="14.0"
                              className="w-full h-11 px-4 pr-8 rounded border border-[#e2e8f0] text-[#0f172a] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b]">%</span>
                          </div>
                          <Button>Bid</Button>
                        </div>
                        <p className="text-xs text-[#64748b] mt-2">Lower rates are more competitive.</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card variant="bordered">
                    <CardHeader>
                      <CardTitle className="text-sm">Risk Assessment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#64748b]">Default Risk</span>
                          <Badge variant="success">Low</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#64748b]">Estate Complexity</span>
                          <Badge variant="gold">Medium</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#64748b]">Documentation</span>
                          <Badge variant="success">Complete</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center bg-white border border-[#e2e8f0] rounded p-8">
                  <p className="text-[#64748b] mb-2">Select an opportunity</p>
                  <p className="text-sm text-[#94a3b8]">Click on any listing to view details and place a bid</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
