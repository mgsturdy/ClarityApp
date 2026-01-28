"use client";

import { cn } from "@/lib/utils";

interface ClarityScoreProps {
  score: number;
  maxScore?: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

export function ClarityScore({
  score,
  maxScore = 850,
  size = "md",
  showLabel = true,
  className,
}: ClarityScoreProps) {
  const percentage = (score / maxScore) * 100;

  const getScoreColor = (score: number) => {
    if (score >= 750) return { color: "#059669", text: "Excellent", bg: "#d1fae5" };
    if (score >= 650) return { color: "#d97706", text: "Good", bg: "#fef3c7" };
    if (score >= 550) return { color: "#ea580c", text: "Fair", bg: "#ffedd5" };
    return { color: "#dc2626", text: "Poor", bg: "#fee2e2" };
  };

  const { color, text, bg } = getScoreColor(score);

  const sizes = {
    sm: { width: 64, fontSize: "text-lg", labelSize: "text-[10px]" },
    md: { width: 96, fontSize: "text-2xl", labelSize: "text-xs" },
    lg: { width: 140, fontSize: "text-4xl", labelSize: "text-sm" },
  };

  const { width, fontSize, labelSize } = sizes[size];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className="relative rounded-full border-4"
        style={{ 
          width, 
          height: width, 
          borderColor: color,
          backgroundColor: bg 
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-bold text-[#0f172a]", fontSize)}>
            {score}
          </span>
          {showLabel && (
            <span className={cn("font-medium", labelSize)} style={{ color }}>
              {text}
            </span>
          )}
        </div>
      </div>
      {showLabel && (
        <p className="mt-2 text-xs text-[#64748b] uppercase tracking-wider font-medium">
          Clarity Score
        </p>
      )}
    </div>
  );
}
