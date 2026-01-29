"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ArrowRight } from "lucide-react";

const faqCategories = [
  {
    name: "For Heirs",
    questions: [
      {
        q: "How much can I borrow against my inheritance?",
        a: "The maximum advance is 10% of the total verified estate value. For example, if the estate is worth $5 million, the maximum advance would be $500,000. This conservative limit protects both you and the lender by leaving substantial buffer for estate costs, taxes, and any value fluctuations.",
      },
      {
        q: "Do I receive all the money at once?",
        a: "No. Advances are disbursed in stages over time. A typical structure might be 20% immediately, with the remaining 80% distributed quarterly over 2-4 years. This staged approach helps ensure funds are used responsibly and aligns with the probate timeline. Specific disbursement schedules are agreed upon when you accept a lender's terms.",
      },
      {
        q: "What happens if the estate is worth less than expected?",
        a: "All advances through Clarity are non-recourse. This means repayment comes only from your inheritance—you're not personally liable for any shortfall. If the estate ends up being worth less than anticipated, the lender bears that risk, not you.",
      },
      {
        q: "Will this affect my credit score?",
        a: "No. Inheritance advances are not traditional loans and are not based on your personal credit. We don't run a credit check, and this transaction won't appear on your credit report or impact your credit score.",
      },
      {
        q: "How long does it take to get funded?",
        a: "After your application is verified and you accept a lender's terms, the initial disbursement typically arrives within 48-72 hours. The verification process itself usually takes 3-5 business days, depending on how quickly you can provide the required documentation.",
      },
      {
        q: "What documents do I need to provide?",
        a: "Required documents typically include: death certificate, will or trust documents naming you as beneficiary, probate filing (if applicable), government-issued ID, and any available asset inventory or estate valuation. Our team will guide you through exactly what's needed for your situation.",
      },
      {
        q: "What can I use the money for?",
        a: "There are no restrictions on how you use the funds. Common uses include paying off debt, covering living expenses during probate, making investments, purchasing property, or handling estate-related costs. The staged disbursement structure naturally encourages thoughtful use over time.",
      },
      {
        q: "How much will I owe when probate closes?",
        a: "You'll owe the total amount advanced plus accrued interest. Interest rates typically range from 12-18% annually, determined by your Clarity Score and the lender's bid. Before accepting any terms, you'll see a clear breakdown of exactly what you'll owe in various probate timeline scenarios.",
      },
      {
        q: "What if probate takes longer than expected?",
        a: "Interest continues to accrue until probate concludes and repayment occurs. However, because advances are non-recourse and secured by estate assets worth at least 10x the advance, extended timelines primarily increase the lender's risk, not yours. You won't be asked to make payments before probate closes.",
      },
    ],
  },
  {
    name: "For Lenders",
    questions: [
      {
        q: "How is my investment protected?",
        a: "Multiple layers protect your investment: (1) Conservative LTV—advances never exceed 10% of estate value, (2) Staged disbursements—you don't deploy all capital upfront, (3) Escrow accounts—funds are held by a third party, (4) Legal assignment—you have a documented claim on the inheritance, (5) Document verification—all estates are thoroughly vetted before listing.",
      },
      {
        q: "What prevents an heir from misusing the funds?",
        a: "The staged disbursement structure is designed specifically to address this concern. Rather than receiving a lump sum, heirs receive funds over 2-4 years. This natural pacing reduces the risk of funds being spent irresponsibly. Additionally, because repayment comes directly from the estate (not the heir personally), the heir's spending behavior doesn't affect your ability to be repaid.",
      },
      {
        q: "What happens if the heir dies before probate closes?",
        a: "The advance is tied to the inheritance, not to the heir personally. If the heir passes away, their claim on the inheritance passes to their own estate or heirs, and the lender's claim remains attached to those funds. The escrow structure ensures repayment still occurs when the original estate's probate concludes.",
      },
      {
        q: "How do I get repaid?",
        a: "When probate concludes and the estate is distributed, the escrow agent ensures you're paid your principal plus accrued interest before the heir receives their remaining inheritance. You don't need to chase the heir for payment—it's handled automatically through the legal structure.",
      },
      {
        q: "What's the typical investment duration?",
        a: "Most probate proceedings conclude within 12-24 months, though complex estates can take longer. The Clarity Score includes an estimated timeline based on estate complexity, jurisdiction, and current status. You can factor this into your bidding decisions.",
      },
      {
        q: "What returns can I expect?",
        a: "Interest rates typically range from 12-18% annually, depending on the estate's Clarity Score and competitive bidding dynamics. Higher-risk estates (lower Clarity Scores) command higher rates. All returns are quoted on an annual basis, with actual returns depending on how long probate takes.",
      },
      {
        q: "What if the estate has outstanding debts or claims?",
        a: "Estate debts and claims are settled before heirs receive distributions—this is standard probate procedure. The Clarity Score accounts for known liabilities and estimates their impact on the heir's expected distribution. The 10% maximum LTV provides substantial buffer against unexpected claims.",
      },
      {
        q: "Can I withdraw from a commitment?",
        a: "Once funds are disbursed, they cannot be recalled. However, because disbursements are staged, you're not fully committed upfront. If significant adverse information emerges about an estate, you can discuss options with our team before subsequent disbursements are made.",
      },
    ],
  },
  {
    name: "About the Process",
    questions: [
      {
        q: "What is the Clarity Score?",
        a: "The Clarity Score is our proprietary assessment of each inheritance advance opportunity. It considers estate value and composition, probate stage and estimated timeline, documentation completeness, jurisdictional factors, and potential complications. Scores range from 500-850, with higher scores indicating lower risk.",
      },
      {
        q: "How does the bidding process work?",
        a: "Once an heir's application is verified and listed, lenders can submit bids specifying the interest rate they're willing to offer. Heirs can see all bids and accept the terms that work best for them. This competitive process typically results in better rates than traditional inheritance advance companies offer.",
      },
      {
        q: "Who holds the funds?",
        a: "All funds are held in third-party escrow accounts, not by Clarity directly. This ensures neither the heir nor the lender can access funds inappropriately. Disbursements to the heir and repayment to the lender are handled by the escrow agent according to the agreed terms.",
      },
      {
        q: "What are Clarity's fees?",
        a: "Clarity charges a 2% platform fee, paid by the heir from the advance proceeds. Lenders pay no fees. There are no hidden charges, origination fees, or processing fees beyond this transparent 2%.",
      },
      {
        q: "Is this a loan?",
        a: "Technically, inheritance advances are structured as assignments or purchases of a portion of the expected inheritance, not as loans. This distinction matters legally and is why personal credit isn't a factor. However, functionally, it works similarly: heirs receive money now and owe money later, with the difference being the interest/discount.",
      },
      {
        q: "What states or jurisdictions do you operate in?",
        a: "We currently focus on estates in the United States. Probate laws vary by state, which affects timelines and procedures, but our structure works across all U.S. jurisdictions. We're exploring expansion to other countries with similar legal frameworks.",
      },
      {
        q: "How do you verify estate values?",
        a: "We use multiple sources: court-filed asset inventories, independent appraisals for significant assets (real estate, businesses), brokerage and bank statements where available, and professional estate valuations. Our team reviews all documentation manually in addition to automated checks.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (question: string) => {
    const newOpen = new Set(openQuestions);
    if (newOpen.has(question)) {
      newOpen.delete(question);
    } else {
      newOpen.add(question);
    }
    setOpenQuestions(newOpen);
  };

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
      <section className="bg-[#f8fafc] py-16 lg:py-20 border-b border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#0f172a] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[#475569]">
            Everything you need to know about how Clarity works, for both heirs and lenders.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {faqCategories.map((category) => (
            <div key={category.name} className="mb-16 last:mb-0">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#0f172a] mb-8 pb-4 border-b border-[#e2e8f0]">
                {category.name}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item) => {
                  const isOpen = openQuestions.has(item.q);
                  return (
                    <div
                      key={item.q}
                      className="border border-[#e2e8f0] rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(item.q)}
                        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#f8fafc] transition-colors"
                      >
                        <span className="font-medium text-[#0f172a] pr-4">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-[#64748b] flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-[#475569] leading-relaxed border-t border-[#e2e8f0] bg-[#f8fafc]">
                          <p className="pt-4">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#0f2744]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-[#94a3b8] mb-8">
            We're happy to discuss your specific situation and answer any questions not covered here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:mg@mattgoulet.ca">
              <Button variant="gold" size="lg">
                Get in Touch
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </a>
            <Link href="/about">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e2e8f0] py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-[#64748b]">
          © {new Date().getFullYear()} Clarity Finance, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
