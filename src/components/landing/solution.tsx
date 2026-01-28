"use client";

import { Check } from "lucide-react";
import { ClarityScore } from "@/components/ui/clarity-score";

const features = [
  "Comprehensive estate asset verification",
  "Probate timeline estimation",
  "Risk assessment based on estate complexity",
  "Market-competitive rate determination",
  "Real-time monitoring and updates",
];

export function Solution() {
  return (
    <section id="products" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <p className="text-sm font-medium text-[#b8860b] uppercase tracking-wider mb-3">
              Our Approach
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
              The Clarity Score
            </h2>
            <p className="text-lg text-[#475569] mb-8">
              Our proprietary evaluation system assesses each inheritance opportunity 
              to determine appropriate advance amounts and competitive rates for both 
              heirs and lenders.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#d1fae5] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-[#059669]" />
                  </div>
                  <span className="text-[#334155]">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-[#64748b]">
              The Clarity Score brings transparency and efficiency to inheritance 
              lending, ensuring fair terms for all parties.
            </p>
          </div>

          {/* Right - Score Visual */}
          <div className="flex justify-center">
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-12">
              <div className="text-center mb-8">
                <p className="text-sm text-[#64748b] uppercase tracking-wider mb-2">
                  Sample Assessment
                </p>
                <p className="text-lg font-semibold text-[#0f172a]">
                  Smith Family Estate
                </p>
              </div>
              
              <div className="flex justify-center mb-8">
                <ClarityScore score={742} size="lg" />
              </div>

              <div className="border-t border-[#e2e8f0] pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#64748b]">Estate Value</span>
                  <span className="font-medium text-[#0f172a]">$2.4M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#64748b]">Advance Eligible</span>
                  <span className="font-medium text-[#0f172a]">$175,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#64748b]">Est. Rate Range</span>
                  <span className="font-medium text-[#059669]">12-14%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
