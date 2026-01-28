"use client";

import { Bell, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showNewApplication?: boolean;
}

export function DashboardHeader({ title, subtitle, showNewApplication = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-[#e2e8f0]">
      <div className="flex items-center justify-between px-8 h-16">
        {/* Left - Title */}
        <div>
          <h1 className="text-lg font-semibold text-[#0f172a]">{title}</h1>
          {subtitle && (
            <p className="text-sm text-[#64748b]">{subtitle}</p>
          )}
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
            <input
              type="text"
              placeholder="Search..."
              className="w-56 h-9 pl-9 pr-4 rounded border border-[#e2e8f0] text-sm text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744] transition-colors"
            />
          </div>

          {/* New Application Button */}
          {showNewApplication && (
            <Link href="/apply">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                New Application
              </Button>
            </Link>
          )}

          {/* Notifications */}
          <button className="relative p-2 rounded hover:bg-[#f8fafc] transition-colors">
            <Bell className="h-5 w-5 text-[#64748b]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#dc2626] rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
}
