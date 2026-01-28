"use client";

import { Clock, TrendingDown, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Lengthy Probate Process",
    description:
      "Probate proceedings can take 12-24 months or longer, leaving heirs without access to funds during critical times when they may need them most.",
  },
  {
    icon: TrendingDown,
    title: "Time Value of Money",
    description:
      "Money received years from now is worth significantly less than money today. Delayed inheritances mean missed investment opportunities and eroded purchasing power.",
  },
  {
    icon: AlertTriangle,
    title: "Financial Uncertainty",
    description:
      "Estate disputes, tax obligations, and administrative costs can reduce final distributions. Heirs face uncertainty about when and how much they'll actually receive.",
  },
];

export function Problem() {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-[#b8860b] uppercase tracking-wider mb-3">
            The Challenge
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-[#0f172a] mb-4">
            Probate Creates Financial Hardship
          </h2>
          <p className="text-lg text-[#475569]">
            The traditional probate system was designed centuries ago and hasn't kept 
            pace with modern financial needs. Heirs often face difficult situations 
            while waiting for their rightful inheritance.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white border border-[#e2e8f0] rounded p-8"
            >
              <div className="w-12 h-12 bg-[#0f2744] rounded flex items-center justify-center mb-6">
                <problem.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-3">
                {problem.title}
              </h3>
              <p className="text-[#475569] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
