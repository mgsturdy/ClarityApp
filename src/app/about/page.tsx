"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  ArrowLeft,
  Shield,
  Clock,
  Wallet,
  FileCheck,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Lock,
  Calendar,
  PiggyBank,
  Users,
  FileText,
  AlertCircle,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero */}
      <section className="bg-[#0f2744] text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold mb-6">
            How Clarity Works
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Two structured products for accessing inheritance early—each designed 
            for different situations, both built on conservative limits and staged disbursements.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0f172a] mb-6">
            The Problem We Solve
          </h2>
          <div className="space-y-6 text-lg text-[#475569]">
            <p>
              When someone passes away, their heirs often face an 18-24 month wait for probate 
              to conclude. Even before death, families may know a significant inheritance is coming 
              but have no way to access it when needs arise.
            </p>
            <p>
              Traditional options are limited. Banks won't lend against an inheritance. Personal 
              loans require good credit and come with high rates. The few companies that do offer 
              inheritance advances often charge 30-40% or more and operate with little transparency.
            </p>
            <p>
              Clarity creates a transparent marketplace where heirs can access a portion of their 
              inheritance early, while lenders participate in a secured, asset-backed opportunity 
              with attractive returns.
            </p>
          </div>
        </div>
      </section>

      {/* Two Products Overview */}
      <section className="py-16 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0f172a] mb-4">
              Two Products for Different Situations
            </h2>
            <p className="text-lg text-[#475569]">
              Choose the product that matches where you are in the inheritance process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Advance Card */}
            <div className="bg-white border-2 border-[#0f2744] rounded-lg overflow-hidden">
              <div className="bg-[#0f2744] px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium bg-white text-[#0f2744] px-2 py-0.5 rounded">
                    Post-Probate
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white mt-2">Clarity Advance</h3>
                <p className="text-[#94a3b8] text-sm mt-1">For estates already in probate</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-[#0f2744] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0f172a]">Court-Verified Documentation</p>
                      <p className="text-sm text-[#64748b]">Probate filing provides legal certainty</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PiggyBank className="h-5 w-5 text-[#0f2744] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0f172a]">Up to 10% of Estate Value</p>
                      <p className="text-sm text-[#64748b]">Higher limits due to greater certainty</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-[#0f2744] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0f172a]">12-16% Annual Rates</p>
                      <p className="text-sm text-[#64748b]">Lower rates reflect lower risk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#0f2744] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0f172a]">12-24 Month Typical Duration</p>
                      <p className="text-sm text-[#64748b]">Aligns with probate timeline</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4 text-sm text-[#475569]">
                  <p className="font-medium text-[#0f172a] mb-1">Required Documentation</p>
                  <p>Death certificate, will/trust, probate court filing, government ID, asset inventory</p>
                </div>
              </div>
            </div>

            {/* Secure Card */}
            <div className="bg-white border-2 border-[#475569] rounded-lg overflow-hidden">
              <div className="bg-[#475569] px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium bg-white text-[#475569] px-2 py-0.5 rounded">
                    Pre-Probate
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white mt-2">Clarity Secure</h3>
                <p className="text-[#cbd5e1] text-sm mt-1">Before probate begins</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-[#475569] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0f172a]">Tri-Party Consent Required</p>
                      <p className="text-sm text-[#64748b]">You + estate holder + Clarity verification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PiggyBank className="h-5 w-5 text-[#475569] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0f172a]">Up to 5-8% of Asset Value</p>
                      <p className="text-sm text-[#64748b]">More conservative due to uncertainty</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-[#475569] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0f172a]">15-20% Annual Rates</p>
                      <p className="text-sm text-[#64748b]">Higher rates compensate for risk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#475569] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#0f172a]">2-5 Year Typical Duration</p>
                      <p className="text-sm text-[#64748b]">Longer timeline, more staged disbursements</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fafc] rounded-lg p-4 text-sm text-[#475569]">
                  <p className="font-medium text-[#0f172a] mb-1">Required Documentation</p>
                  <p>Estate holder consent, beneficiary verification, asset attestation, government IDs (both parties)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Structure */}
      <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0f172a] mb-4">
            Built-In Protections
          </h2>
          <p className="text-lg text-[#475569] mb-12">
            Both products share the same core structure designed to protect heirs and lenders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0f2744] rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                  Staged Disbursements
                </h3>
                <p className="text-[#475569] mb-4">
                  Funds aren't released all at once. Advance: 20% immediately, 80% over 2-4 years. 
                  Secure: 15% immediately, 85% over 3-5 years with milestone triggers.
                </p>
                <p className="text-sm text-[#64748b]">
                  This prevents misuse—no one can "blow it all on a boat"—and aligns 
                  disbursements with the timeline.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0f2744] rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                  Escrow Protection
                </h3>
                <p className="text-[#475569] mb-4">
                  All funds are held in third-party escrow accounts. Disbursements 
                  only occur after verification milestones are met.
                </p>
                <p className="text-sm text-[#64748b]">
                  Neither heir nor lender handles funds directly—escrow ensures 
                  transparency and security for everyone.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0f2744] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                  Non-Recourse Structure
                </h3>
                <p className="text-[#475569] mb-4">
                  Repayment comes only from the inheritance. If the estate is worth 
                  less than expected, the heir isn't personally liable.
                </p>
                <p className="text-sm text-[#64748b]">
                  This protects heirs from worst-case scenarios and means 
                  lenders focus on estate quality, not personal credit.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0f2744] rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                  Clarity Score
                </h3>
                <p className="text-[#475569] mb-4">
                  Every opportunity is assessed on estate value, documentation quality, 
                  timeline estimates, and potential complications.
                </p>
                <p className="text-sm text-[#64748b]">
                  Scores range 500-850. Higher scores mean lower risk, 
                  better rates for heirs, and more confidence for lenders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Example Scenarios */}
      <section className="py-16 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0f172a] mb-4">
            Example Scenarios
          </h2>
          <p className="text-lg text-[#475569] mb-12">
            How each product works in practice.
          </p>

          {/* Advance Example */}
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-[#0f2744] text-white px-2 py-0.5 rounded">
                Advance
              </span>
              <h3 className="text-lg font-semibold text-[#0f172a]">
                $500,000 Advance on $5M Estate
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-[#64748b] uppercase tracking-wider mb-2">Situation</p>
                <ul className="space-y-2 text-[#475569] text-sm">
                  <li>• Father passed away 2 months ago</li>
                  <li>• Estate in probate, expected 18 months</li>
                  <li>• Heir's expected share: $2.5M (50%)</li>
                  <li>• Maximum advance: $500K (10% of estate)</li>
                  <li>• Approved rate: 14% annual</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-[#64748b] uppercase tracking-wider mb-2">Disbursement</p>
                <ul className="space-y-2 text-[#475569] text-sm">
                  <li>• Immediately: $100,000</li>
                  <li>• Quarterly Year 1: $50K × 4 = $200,000</li>
                  <li>• Quarterly Year 2: $50K × 4 = $200,000</li>
                  <li className="pt-2 border-t border-[#e2e8f0] font-medium">
                    At 18-month probate close: Heir owes ~$605K
                  </li>
                  <li className="text-[#64748b]">Receives remaining ~$1.9M inheritance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Secure Example */}
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-[#475569] text-white px-2 py-0.5 rounded">
                Secure
              </span>
              <h3 className="text-lg font-semibold text-[#0f172a]">
                $300,000 Secure on $5M Estate
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-[#64748b] uppercase tracking-wider mb-2">Situation</p>
                <ul className="space-y-2 text-[#475569] text-sm">
                  <li>• Mother is elderly, heir in trust</li>
                  <li>• Mother consents to arrangement</li>
                  <li>• Identifiable assets: $5M</li>
                  <li>• Maximum advance: $300K (6% of assets)</li>
                  <li>• Approved rate: 17% annual</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-[#64748b] uppercase tracking-wider mb-2">Disbursement</p>
                <ul className="space-y-2 text-[#475569] text-sm">
                  <li>• Immediately: $45,000 (15%)</li>
                  <li>• Quarterly Years 1-2: $25K × 8 = $200,000</li>
                  <li>• On probate filing: $55,000 (milestone)</li>
                  <li className="pt-2 border-t border-[#e2e8f0] font-medium">
                    At 3-year resolution: Heir owes ~$470K
                  </li>
                  <li className="text-[#64748b]">Receives remaining inheritance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Heirs */}
      <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0f172a] mb-4">
            For Heirs
          </h2>
          <p className="text-lg text-[#475569] mb-8">
            Access funds when you need them, with protection built in.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#d1fae5] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-[#059669]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] mb-1">Non-Recourse Protection</h3>
                <p className="text-[#475569]">
                  Repayment comes only from your inheritance. If the estate is worth less 
                  than expected, you're not personally liable for the difference.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#d1fae5] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-[#059669]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] mb-1">No Credit Check</h3>
                <p className="text-[#475569]">
                  The advance is based on the estate's value, not your personal credit. 
                  Your credit score isn't checked or impacted.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#d1fae5] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-[#059669]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] mb-1">Competitive Marketplace</h3>
                <p className="text-[#475569]">
                  Multiple lenders bid on your advance, driving rates down. You choose 
                  the terms that work best for your situation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#d1fae5] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5 text-[#059669]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] mb-1">Transparent Terms</h3>
                <p className="text-[#475569]">
                  No hidden fees—just a 2% platform fee. You'll see exactly what you'll 
                  receive and what you'll owe under different timeline scenarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Lenders */}
      <section className="py-16 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0f172a] mb-4">
            For Lenders
          </h2>
          <p className="text-lg text-[#475569] mb-8">
            A new asset class with built-in protections and attractive returns.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#dbeafe] rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] mb-1">Asset-Backed Security</h3>
                <p className="text-[#475569]">
                  Every advance is secured by verified estate assets worth 10-20x the 
                  advance amount. You have a legal claim on the inheritance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#dbeafe] rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] mb-1">12-20% Annual Returns</h3>
                <p className="text-[#475569]">
                  Advance opportunities: 12-16%. Secure opportunities: 15-20%. 
                  Rates determined by Clarity Score and competitive bidding.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#dbeafe] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] mb-1">Staged Capital Deployment</h3>
                <p className="text-[#475569]">
                  You don't deploy all capital upfront. Disbursements are staged over 
                  years, reducing risk and allowing you to monitor progress.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#dbeafe] rounded-full flex items-center justify-center flex-shrink-0">
                <Wallet className="h-5 w-5 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] mb-1">Automatic Repayment</h3>
                <p className="text-[#475569]">
                  When probate concludes, you're paid directly from the estate 
                  distribution—before the heir receives their remaining funds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0f172a] mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-[#475569] mb-8">
            Read our FAQ for detailed answers, or get in touch to discuss your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq">
              <Button size="lg">
                Read the FAQ
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
            <a href="mailto:mg@mattgoulet.ca">
              <Button variant="secondary" size="lg">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e2e8f0] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-[#64748b]">
          © {new Date().getFullYear()} Clarity Finance, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
