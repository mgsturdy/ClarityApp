"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "advance",
    name: "Advance",
    tagline: "Post-Probate",
    description:
      "Receive immediate funding against your inheritance while probate proceedings are ongoing. Our marketplace connects you with competitive lenders.",
    features: [
      "Funding available in as little as 48 hours",
      "Non-recourse—repayment only from inheritance",
      "No personal credit check required",
      "Competitive bidding from multiple lenders",
    ],
    steps: [
      { title: "Apply", description: "Submit your application with estate documentation" },
      { title: "Review", description: "Our team verifies documents and calculates your Clarity Score" },
      { title: "Match", description: "Lenders review and bid on your advance request" },
      { title: "Fund", description: "Accept terms and receive funds directly to your account" },
    ],
    stats: { funding: "48 hrs", fee: "2%", min: "$50K", max: "$10M" },
  },
  {
    id: "secure",
    name: "Secure",
    tagline: "Pre-Probate",
    description:
      "Access liquidity against your expected inheritance before probate begins. Ideal for heirs with verified estate expectations seeking early access to funds.",
    features: [
      "Pre-probate funding available",
      "Real-time asset monitoring integration",
      "Flexible repayment structures",
      "Tri-party consent for added security",
    ],
    steps: [
      { title: "Apply", description: "Submit request with video verification of estate details" },
      { title: "Verify", description: "We confirm assets through financial institution integrations" },
      { title: "Match", description: "Qualified lenders bid based on your Clarity Score" },
      { title: "Fund", description: "Finalize agreement and receive your advance" },
    ],
    stats: { funding: "72 hrs", fee: "2%", min: "$100K", max: "$10M" },
  },
];

export function Products() {
  const [activeProduct, setActiveProduct] = useState("advance");
  const product = products.find((p) => p.id === activeProduct)!;

  return (
    <section id="how-it-works" className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[#b8860b] uppercase tracking-wider mb-3">
            Our Products
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
            Two Paths to Liquidity
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto">
            Whether your inheritance is already in probate or you're anticipating 
            a future transfer, we have a solution tailored to your needs.
          </p>
        </div>

        {/* Product Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-[#e2e8f0] rounded bg-white p-1">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProduct(p.id)}
                className={`px-6 py-2.5 text-sm font-medium rounded transition-colors ${
                  activeProduct === p.id
                    ? "bg-[#0f2744] text-white"
                    : "text-[#475569] hover:text-[#0f172a]"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Content */}
        <div className="bg-white border border-[#e2e8f0] rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Details */}
            <div className="p-8 lg:p-12">
              <Badge variant="navy" className="mb-4">
                {product.tagline}
              </Badge>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#0f172a] mb-4">
                {product.name}
              </h3>
              <p className="text-[#475569] mb-8">
                {product.description}
              </p>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#d1fae5] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-[#059669]" />
                    </div>
                    <span className="text-[#334155] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/apply">
                <Button>
                  Apply for {product.name}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Right - Process */}
            <div className="bg-[#f8fafc] border-t lg:border-t-0 lg:border-l border-[#e2e8f0] p-8 lg:p-12">
              <p className="text-sm font-medium text-[#64748b] uppercase tracking-wider mb-6">
                How It Works
              </p>
              
              <div className="space-y-6">
                {product.steps.map((step, index) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#0f2744] rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-[#0f172a]">{step.title}</p>
                      <p className="text-sm text-[#64748b] mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-10 pt-8 border-t border-[#e2e8f0] grid grid-cols-2 gap-6">
                <div>
                  <p className="text-2xl font-semibold text-[#0f172a]">{product.stats.funding}</p>
                  <p className="text-xs text-[#64748b] uppercase tracking-wider">Avg. Funding Time</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#0f172a]">{product.stats.fee}</p>
                  <p className="text-xs text-[#64748b] uppercase tracking-wider">Platform Fee</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#0f172a]">{product.stats.min}</p>
                  <p className="text-xs text-[#64748b] uppercase tracking-wider">Minimum</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#0f172a]">{product.stats.max}</p>
                  <p className="text-xs text-[#64748b] uppercase tracking-wider">Maximum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
