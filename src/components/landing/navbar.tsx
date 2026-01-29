"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    label: "Products",
    href: "#products",
    submenu: [
      { label: "Advance", href: "#products", description: "Post-probate advances" },
      { label: "Secure", href: "#products", description: "Pre-probate lending" },
    ],
  },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Lenders", href: "#lenders" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#e2e8f0]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0f2744] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-semibold text-[#0f172a]">
              Clarity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm text-[#475569] hover:text-[#0f172a] transition-colors"
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Submenu */}
                {link.submenu && activeSubmenu === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[#e2e8f0] rounded shadow-lg py-2">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-[#f8fafc]"
                      >
                        <span className="block text-sm font-medium text-[#0f172a]">
                          {item.label}
                        </span>
                        <span className="block text-xs text-[#64748b]">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#475569]"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#e2e8f0] bg-white">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-2 text-[#475569] hover:text-[#0f172a]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="ml-4 border-l border-[#e2e8f0] pl-4">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-1.5 text-sm text-[#64748b] hover:text-[#0f172a]"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-[#e2e8f0] flex flex-col gap-2">
              <Button variant="outline" className="w-full">
                Log In
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
