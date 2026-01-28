"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Wallet,
  History,
  Settings,
  HelpCircle,
  TrendingUp,
  Users,
  Briefcase,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  variant: "heir" | "lender";
}

const heirNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: FileText, label: "Applications", href: "/dashboard/applications" },
  { icon: Wallet, label: "My Advances", href: "/dashboard/advances" },
  { icon: History, label: "History", href: "/dashboard/history" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: HelpCircle, label: "Help", href: "/dashboard/help" },
];

const lenderNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/lender" },
  { icon: Briefcase, label: "Opportunities", href: "/lender/opportunities" },
  { icon: TrendingUp, label: "Investments", href: "/lender/investments" },
  { icon: Users, label: "Portfolio", href: "/lender/portfolio" },
  { icon: History, label: "History", href: "/lender/history" },
  { icon: Settings, label: "Settings", href: "/lender/settings" },
];

export function Sidebar({ variant }: SidebarProps) {
  const pathname = usePathname();
  const navItems = variant === "heir" ? heirNavItems : lenderNavItems;

  return (
    <aside className="fixed left-0 top-0 bottom-0 z-40 w-64 flex flex-col bg-white border-r border-[#e2e8f0]">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 h-16 border-b border-[#e2e8f0]">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0f2744] rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="text-xl font-semibold text-[#0f172a]">Clarity</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors",
                    isActive
                      ? "bg-[#f1f5f9] text-[#0f172a] font-medium"
                      : "text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc]"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-[#e2e8f0]">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-9 h-9 rounded-full bg-[#0f2744] flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-medium">JS</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[#0f172a] truncate">John Smith</p>
            <p className="text-xs text-[#64748b] truncate">john@example.com</p>
          </div>
        </div>
        <button className="w-full mt-2 flex items-center gap-2 px-3 py-2 text-sm text-[#64748b] hover:text-[#0f172a] hover:bg-[#f8fafc] rounded transition-colors">
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
