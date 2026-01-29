"use client";

import Link from "next/link";

const footerLinks = {
  Learn: [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "For Lenders", href: "#lenders" },
  ],
  Contact: [
    { label: "Email Us", href: "mailto:mg@mattgoulet.ca" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e2e8f0]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#0f2744] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-semibold text-[#0f172a]">
                Clarity
              </span>
            </Link>
            <p className="text-sm text-[#64748b] leading-relaxed max-w-xs">
              Providing heirs with immediate access to their inheritance through 
              a transparent marketplace connecting borrowers and lenders.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-[#0f172a] mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e2e8f0]">
          <p className="text-sm text-[#64748b]">
            © {new Date().getFullYear()} Clarity Finance, Inc. All rights reserved.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[#e2e8f0]">
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            <strong className="text-[#64748b]">Important Disclosure:</strong> Clarity Finance, Inc. 
            is a marketplace platform that connects heirs seeking inheritance advances with private lenders. 
            We are not a bank or direct lender. All lending decisions are made by third-party lenders. 
            Rates and terms vary based on individual circumstances and lender requirements. This is not 
            an offer to lend. Past performance does not guarantee future results. Inheritance advances 
            may not be classified as loans in all jurisdictions. Please consult with a financial advisor 
            and attorney before proceeding.
          </p>
        </div>
      </div>
    </footer>
  );
}
