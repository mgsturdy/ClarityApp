"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Mail } from "lucide-react";
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
  const [showLogin, setShowLogin] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <>
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
              <Button variant="ghost" size="sm" onClick={() => setShowLogin(true)}>
                Log In
              </Button>
              <a href="mailto:mg@mattgoulet.ca">
                <Button size="sm">
                  <Mail className="h-4 w-4 mr-1" />
                  Get in Touch
                </Button>
              </a>
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
                <Button variant="outline" className="w-full" onClick={() => { setIsOpen(false); setShowLogin(true); }}>
                  Log In
                </Button>
                <a href="mailto:mg@mattgoulet.ca" className="w-full">
                  <Button className="w-full">
                    <Mail className="h-4 w-4 mr-1" />
                    Get in Touch
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowLogin(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-8">
            <button 
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 p-1 hover:bg-[#f1f5f9] rounded"
            >
              <X className="h-5 w-5 text-[#64748b]" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-[#0f2744] rounded mx-auto flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <h2 className="text-xl font-semibold text-[#0f172a]">Welcome back</h2>
              <p className="text-sm text-[#64748b] mt-1">Sign in to your Clarity account</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-11 px-4 rounded border border-[#e2e8f0] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full h-11 px-4 rounded border border-[#e2e8f0] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744]"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-[#e2e8f0]" />
                  <span className="text-[#475569]">Remember me</span>
                </label>
                <button type="button" className="text-[#0f2744] hover:underline">
                  Forgot password?
                </button>
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <p className="text-center text-sm text-[#64748b] mt-6">
              Don't have an account?{" "}
              <a href="mailto:mg@mattgoulet.ca" className="text-[#0f2744] hover:underline">
                Get in touch
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
