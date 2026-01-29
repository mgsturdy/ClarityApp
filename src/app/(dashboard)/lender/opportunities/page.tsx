"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClarityScore } from "@/components/ui/clarity-score";
import Link from "next/link";
import {
  Users,
  Clock,
  MapPin,
  Building,
  User,
  X,
  Check,
  ArrowLeft,
  Mail,
  TrendingUp,
  Shield,
  Eye,
} from "lucide-react";

const sampleOpportunities = [
  {
    id: "Sample A",
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
    id: "Sample B",
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
    id: "Sample C",
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
];

export default function OpportunitiesPage() {
  const [selectedOpp, setSelectedOpp] = useState<string | null>("Sample A");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selected = sampleOpportunities.find((o) => o.id === selectedOpp);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
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
              <span className="font-medium">Sample View</span>
              <span className="text-[#94a3b8] ml-2">This is a preview of the lender marketplace experience</span>
            </p>
          </div>
          <Badge variant="gold">Demo Mode</Badge>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-[#0f172a] mb-2">Lending Opportunities</h1>
          <p className="text-[#64748b]">
            Preview how verified inheritance advances appear in our lender marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Opportunities List */}
          <div className="xl:col-span-2 space-y-4">
            {sampleOpportunities.map((opp) => (
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
              <div className="sticky top-8 space-y-6">
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
                      <p className="text-sm font-medium text-[#0f172a] mb-1">Risk Assessment</p>
                      <div className="space-y-2 text-sm mt-3">
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
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center bg-white border border-[#e2e8f0] rounded p-8">
                <p className="text-[#64748b] mb-2">Select an opportunity</p>
                <p className="text-sm text-[#94a3b8]">Click on any listing to view details</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-white border border-[#e2e8f0] rounded-lg p-8 lg:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#0f172a] mb-4">
              Interested in Lending?
            </h2>
            <p className="text-[#64748b] mb-8">
              Join our network of private lenders and gain access to verified inheritance 
              advance opportunities. Target returns of 12-18% backed by estate assets.
            </p>

            {/* Benefits */}
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

            {/* Email Signup */}
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
