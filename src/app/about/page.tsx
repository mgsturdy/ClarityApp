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
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Lock,
  Calendar,
  PiggyBank,
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
            A structured, responsible approach to inheritance advances that protects 
            both heirs and lenders through conservative limits and staged disbursements.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 lg:py-24 border-b border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0f172a] mb-6">
            The Problem We Solve
          </h2>
          <div className="prose prose-lg text-[#475569] max-w-none">
            <p>
              When someone passes away, their heirs often face an 18-24 month wait for probate 
              to conclude. During this time, they may have immediate financial needs—medical bills, 
              mortgage payments, business opportunities, or simply managing the transition.
            </p>
            <p>
              Traditional options are limited. Banks won't lend against an inheritance in probate. 
              Personal loans require good credit and come with high rates. The few companies that 
              do offer inheritance advances often charge 30-40% or more and operate with little 
              transparency.
            </p>
            <p>
              Clarity creates a transparent marketplace where heirs can access a portion of their 
              inheritance early, while lenders can participate in a secured, asset-backed 
              opportunity with attractive returns.
            </p>
          </div>
        </div>
      </section>

      {/* Our Structure */}
      <section className="py-16 lg:py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#0f172a] mb-4">
            Our Structured Approach
          </h2>
          <p className="text-lg text-[#475569] mb-12">
            We've designed a system that protects everyone involved through conservative limits, 
            staged disbursements, and thorough verification.
          </p>

          {/* Key Structure Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0f2744] rounded-lg flex items-center justify-center mb-4">
                  <PiggyBank className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                  Conservative Advance Limits
                </h3>
                <p className="text-[#475569] mb-4">
                  Maximum advance is 10% of the verified estate value. On a $5M estate, 
                  the maximum advance would be $500,000—leaving substantial buffer for 
                  estate costs, taxes, and value fluctuations.
                </p>
                <p className="text-sm text-[#64748b]">
                  This protects lenders from overexposure and ensures heirs don't 
                  over-leverage their inheritance.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0f2744] rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                  Staged Disbursements
                </h3>
                <p className="text-[#475569] mb-4">
                  Funds aren't released all at once. For a $500K advance, a typical 
                  structure might be $100K immediately, with the remaining $400K 
                  disbursed quarterly over 2-4 years.
                </p>
                <p className="text-sm text-[#64748b]">
                  This prevents misuse of funds and aligns disbursements with the 
                  probate timeline.
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
                  All funds are held in a third-party escrow account. Disbursements 
                  only occur after verification milestones are met. Repayment is 
                  processed directly when probate concludes.
                </p>
                <p className="text-sm text-[#64748b]">
                  Neither party handles funds directly—escrow ensures transparency 
                  and security.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0f2744] rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                  Thorough Verification
                </h3>
                <p className="text-[#475569] mb-4">
                  Every advance requires verified documentation: death certificate, 
                  will or trust documents, probate filing, asset inventory, and 
                  heir identification.
                </p>
                <p className="text-sm text-[#64748b]">
                  Our Clarity Score synthesizes this information to assess risk 
                  and determine appropriate terms.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Example Scenario */}
          <div className="bg-white border border-[#e2e8f0] rounded-lg p-8">
            <h3 className="text-lg font-semibold text-[#0f172a] mb-4">
              Example: How a $500,000 Advance Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-[#64748b] uppercase tracking-wider mb-2">Estate Details</p>
                <ul className="space-y-2 text-[#475569]">
                  <li>Estate Value: $5,000,000</li>
                  <li>Heir's Expected Share: $2,500,000 (50%)</li>
                  <li>Maximum Advance: $500,000 (10% of estate)</li>
                  <li>Approved Rate: 14% annual</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-[#64748b] uppercase tracking-wider mb-2">Disbursement Schedule</p>
                <ul className="space-y-2 text-[#475569]">
                  <li>Immediately: $100,000</li>
                  <li>Quarter 1: $50,000</li>
                  <li>Quarter 2: $50,000</li>
                  <li>Quarter 3: $50,000</li>
                  <li>Quarter 4: $50,000</li>
                  <li>Year 2 (quarterly): $200,000</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#e2e8f0]">
              <p className="text-sm text-[#64748b]">
                <strong className="text-[#0f172a]">At probate conclusion:</strong> The lender 
                receives their principal plus accrued interest directly from the estate 
                distribution before the heir receives their remaining inheritance.
              </p>
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
                <h3 className="font-semibold text-[#0f172a] mb-1">Non-Recourse Advances</h3>
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
                <h3 className="font-semibold text-[#0f172a] mb-1">No Credit Check Required</h3>
                <p className="text-[#475569]">
                  The advance is based on the estate's value, not your personal credit. 
                  Your credit score isn't impacted.
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
                  the terms that work best for you.
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
                  No hidden fees. You'll see exactly what you'll receive and what 
                  you'll owe at the end. Everything is documented clearly.
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
                  Every advance is secured by verified estate assets worth at least 10x 
                  the advance amount. You have a legal claim on the inheritance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#dbeafe] rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] mb-1">Target Returns of 12-18%</h3>
                <p className="text-[#475569]">
                  Interest rates are determined by the Clarity Score and competitive 
                  bidding. Higher-risk estates command higher rates.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#dbeafe] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] mb-1">Staged Disbursement Protection</h3>
                <p className="text-[#475569]">
                  You don't deploy all capital upfront. Disbursements are staged, 
                  reducing risk and allowing you to monitor the probate process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#dbeafe] rounded-full flex items-center justify-center flex-shrink-0">
                <Wallet className="h-5 w-5 text-[#2563eb]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#0f172a] mb-1">Direct Repayment from Estate</h3>
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
            Read our FAQ for more details, or get in touch to discuss your situation.
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
