"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-[#0f2744] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-white mb-4">
          Ready to Access Your Inheritance?
        </h2>
        <p className="text-lg text-[#94a3b8] mb-8 max-w-2xl mx-auto">
          Start your application today and receive a decision within 24 hours. 
          Our team is here to guide you through every step of the process.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/apply">
            <Button variant="gold" size="lg">
              Apply Now
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Trust Elements */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#94a3b8]">
          <span>No credit check required</span>
          <span className="hidden sm:block">•</span>
          <span>Non-recourse advances</span>
          <span className="hidden sm:block">•</span>
          <span>Confidential process</span>
        </div>
      </div>
    </section>
  );
}
