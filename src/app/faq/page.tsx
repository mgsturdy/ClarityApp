"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ArrowRight } from "lucide-react";

const faqCategories = [
  {
    name: "General",
    description: "Questions that apply to both Clarity products",
    questions: [
      {
        q: "What's the difference between Advance and Secure?",
        a: "Clarity Advance is for estates already in probate—there's court documentation verifying the estate and your claim. Clarity Secure is for situations before probate begins, requiring consent from the current estate holder (e.g., a living parent or trustee). Advance typically offers higher limits and lower rates because there's more certainty; Secure is more conservative due to the additional unknowns.",
      },
      {
        q: "Will this affect my credit score?",
        a: "No. Neither Advance nor Secure are traditional loans—they're structured as assignments of your future inheritance. We don't run a credit check, and this transaction won't appear on your credit report.",
      },
      {
        q: "What happens if the estate is worth less than expected?",
        a: "All advances through Clarity are non-recourse. Repayment comes only from your inheritance—you're not personally liable for any shortfall. If the estate ends up being worth less than anticipated, the lender bears that risk.",
      },
      {
        q: "What can I use the money for?",
        a: "There are no restrictions. Common uses include paying off debt, covering living expenses, making investments, purchasing property, or handling estate-related costs. The staged disbursement structure naturally encourages thoughtful use over time.",
      },
      {
        q: "Is this a loan?",
        a: "Technically, no. Inheritance advances are structured as assignments or purchases of a portion of your expected inheritance. This legal distinction is why personal credit isn't a factor. However, functionally it's similar: you receive money now and owe money later, with interest.",
      },
    ],
  },
  {
    name: "Clarity Advance",
    description: "For estates already in probate",
    badge: "Post-Probate",
    questions: [
      {
        q: "What qualifies me for Advance?",
        a: "Advance requires that the estate has been filed for probate and you have documentation showing: (1) a death certificate, (2) a will or trust naming you as beneficiary, (3) probate court filing, and (4) some form of asset inventory or valuation. The estate must be in a U.S. jurisdiction.",
      },
      {
        q: "How much can I receive through Advance?",
        a: "The maximum is 10% of the total verified estate value. For example, on a $5 million estate, the maximum advance would be $500,000. This conservative limit leaves substantial buffer for estate costs, taxes, and value fluctuations.",
      },
      {
        q: "Do I receive all the money at once?",
        a: "No. Advances are disbursed in stages. A typical structure: 20% immediately upon approval, with the remaining 80% distributed quarterly over 2-4 years. This protects lenders and aligns disbursements with the probate timeline.",
      },
      {
        q: "What interest rates can I expect?",
        a: "Rates typically range from 12-16% annually for Advance, determined by your Clarity Score (our risk assessment) and competitive bidding from lenders. Higher scores—meaning cleaner documentation and simpler estates—command lower rates.",
      },
      {
        q: "How long does it take to get funded?",
        a: "After submitting documentation, verification typically takes 3-5 business days. Once verified and you accept a lender's terms, the initial disbursement arrives within 48-72 hours.",
      },
      {
        q: "What documents do I need?",
        a: "Required: death certificate, will or trust documents, probate court filing, and government-issued ID. Helpful: asset inventory, property appraisals, brokerage/bank statements. More complete documentation leads to faster approval and better rates.",
      },
      {
        q: "How much will I owe when probate closes?",
        a: "You'll owe the total amount advanced plus accrued interest. Before accepting any terms, you'll see a clear breakdown showing exactly what you'll owe under different probate timeline scenarios (e.g., 12 months, 18 months, 24 months).",
      },
      {
        q: "What if probate takes longer than expected?",
        a: "Interest continues to accrue until probate concludes. However, since advances are non-recourse and secured by assets worth at least 10x the advance, extended timelines primarily increase lender risk, not yours. You won't be asked to make payments before probate closes.",
      },
    ],
  },
  {
    name: "Clarity Secure",
    description: "For accessing inheritance before probate",
    badge: "Pre-Probate",
    questions: [
      {
        q: "What is Secure and who is it for?",
        a: "Secure allows you to access a portion of a future inheritance before probate begins—typically while a parent or family member is still living or immediately after passing but before probate filing. It's designed for situations where you need funds now but want to draw against a clearly defined future inheritance.",
      },
      {
        q: "What's required for Secure approval?",
        a: "Secure requires tri-party consent: (1) You as the future heir, (2) The current estate holder (e.g., parent, trustee, or executor), and (3) Clarity's verification. The estate holder must confirm your beneficiary status and provide visibility into the assets backing the inheritance.",
      },
      {
        q: "Why is tri-party consent required?",
        a: "Without probate court documentation, we need the current estate holder to verify your claim and the assets involved. This protects everyone: it ensures you're legitimately a beneficiary, gives lenders confidence in the underlying assets, and prevents potential family disputes.",
      },
      {
        q: "How much can I receive through Secure?",
        a: "Maximum is 5-8% of the verified asset value backing your inheritance—more conservative than Advance due to the additional uncertainty before probate. On $5 million in identifiable assets, the maximum would be $250,000-$400,000.",
      },
      {
        q: "What interest rates can I expect with Secure?",
        a: "Rates typically range from 15-20% annually—higher than Advance because there's more uncertainty: no court verification, longer timeline, and more variables. The tri-party consent and lower LTV help offset this risk for lenders.",
      },
      {
        q: "How are funds disbursed with Secure?",
        a: "Even more conservatively than Advance. A typical structure: 15% immediately, with remaining funds distributed quarterly over 3-5 years. Disbursements may also be tied to verification milestones—for example, additional releases when probate is filed or assets are formally inventoried.",
      },
      {
        q: "What happens when the estate holder passes?",
        a: "The Secure arrangement transitions to the probate process. Your lender's claim remains attached to your inheritance. The staged disbursement schedule may accelerate once probate documentation becomes available, providing more certainty.",
      },
      {
        q: "Can the estate holder change the will after I've received funds?",
        a: "This is a key risk with Secure, which is why tri-party consent is required. The estate holder signs documentation acknowledging the arrangement. If they were to change the will, the legal assignment of inheritance rights would still apply to whatever you're entitled to receive—though disputes could arise. This is also why Secure has more conservative limits.",
      },
    ],
  },
  {
    name: "For Lenders",
    description: "Investment and risk questions",
    questions: [
      {
        q: "How is my investment protected?",
        a: "Multiple layers: (1) Conservative LTV—Advance maxes at 10%, Secure at 5-8%, (2) Staged disbursements—you don't deploy all capital upfront, (3) Escrow accounts—third party holds funds, (4) Legal assignment—documented claim on the inheritance, (5) Thorough verification—all estates vetted before listing.",
      },
      {
        q: "What prevents an heir from misusing the funds?",
        a: "The staged disbursement structure. Rather than a lump sum, heirs receive funds over 2-5 years. This natural pacing reduces misuse risk. More importantly, repayment comes directly from the estate—the heir's spending behavior doesn't affect your ability to be repaid.",
      },
      {
        q: "What's the difference between Advance and Secure opportunities?",
        a: "Advance opportunities are estates already in probate with court documentation—more certainty, shorter expected duration, lower rates. Secure opportunities are pre-probate with tri-party consent—more uncertainty, longer duration, higher rates to compensate. Most lenders start with Advance and add Secure for portfolio diversification.",
      },
      {
        q: "How do I get repaid?",
        a: "When probate concludes and the estate is distributed, the escrow agent pays you principal plus accrued interest before the heir receives their remaining inheritance. It's handled automatically—you don't chase the heir for payment.",
      },
      {
        q: "What's the typical investment duration?",
        a: "Advance: Most probate proceedings conclude within 12-24 months. Secure: Timeline is less predictable since it starts before probate; expect 2-5 years total. The Clarity Score includes timeline estimates you can factor into bidding.",
      },
      {
        q: "What returns can I expect?",
        a: "Advance: 12-16% annually. Secure: 15-20% annually. Actual returns depend on probate duration—shorter timelines mean faster capital return but same annualized rate. Competitive bidding determines final rates within these ranges.",
      },
      {
        q: "What if the estate has outstanding debts?",
        a: "Estate debts are settled before heirs receive distributions—standard probate procedure. The Clarity Score accounts for known liabilities. The conservative LTV limits (10% for Advance, 5-8% for Secure) provide substantial buffer against unexpected claims.",
      },
      {
        q: "Can I withdraw from a commitment?",
        a: "Once disbursed, funds can't be recalled. However, since disbursements are staged, you're not fully committed upfront. If significant adverse information emerges, you can discuss options with our team before subsequent disbursements.",
      },
    ],
  },
  {
    name: "About the Process",
    description: "Platform and operational questions",
    questions: [
      {
        q: "What is the Clarity Score?",
        a: "Our risk assessment for each opportunity. It considers: estate value and asset composition, probate stage (or pre-probate verification level), documentation completeness, jurisdictional factors, and potential complications. Scores range from 500-850; higher means lower risk.",
      },
      {
        q: "How does the bidding process work?",
        a: "Once an heir's application is verified and listed, lenders submit bids with their offered interest rate. Heirs see all bids and choose the best terms. This competition typically produces better rates than traditional inheritance advance companies.",
      },
      {
        q: "Who holds the funds?",
        a: "All funds are held in third-party escrow accounts—not by Clarity. Neither heir nor lender can access funds improperly. The escrow agent handles disbursements and repayment according to agreed terms.",
      },
      {
        q: "What are Clarity's fees?",
        a: "2% platform fee paid by the heir from advance proceeds. Lenders pay nothing. No hidden charges, origination fees, or processing fees.",
      },
      {
        q: "What jurisdictions do you operate in?",
        a: "Currently U.S. estates only. Probate laws vary by state, affecting timelines and procedures, but our structure works across all U.S. jurisdictions. We're exploring international expansion.",
      },
      {
        q: "How do you verify estate values?",
        a: "Multiple sources: court-filed inventories (for Advance), estate holder attestation (for Secure), independent appraisals for major assets, brokerage/bank statements when available. Manual review supplements automated checks.",
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
          <p className="text-lg text-[#475569] mb-8">
            Everything you need to know about Clarity Advance and Clarity Secure.
          </p>
          
          {/* Product Quick Reference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <div className="bg-white border border-[#e2e8f0] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium bg-[#0f2744] text-white px-2 py-0.5 rounded">Advance</span>
                <span className="text-xs text-[#64748b]">Post-Probate</span>
              </div>
              <p className="text-sm text-[#475569]">
                Estate already filed for probate. Up to 10% LTV, 12-16% rates.
              </p>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium bg-[#475569] text-white px-2 py-0.5 rounded">Secure</span>
                <span className="text-xs text-[#64748b]">Pre-Probate</span>
              </div>
              <p className="text-sm text-[#475569]">
                Before probate begins. Tri-party consent, 5-8% LTV, 15-20% rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {faqCategories.map((category) => (
            <div key={category.name} className="mb-16 last:mb-0">
              <div className="mb-8 pb-4 border-b border-[#e2e8f0]">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#0f172a]">
                    {category.name}
                  </h2>
                  {category.badge && (
                    <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                      category.badge === "Post-Probate" 
                        ? "bg-[#0f2744] text-white" 
                        : "bg-[#475569] text-white"
                    }`}>
                      {category.badge}
                    </span>
                  )}
                </div>
                {category.description && (
                  <p className="text-sm text-[#64748b]">{category.description}</p>
                )}
              </div>
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
