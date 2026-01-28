"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-[#f1f5f9] text-[#475569]",
        navy: "bg-[#0f2744] text-white",
        gold: "bg-[#fef3c7] text-[#92400e]",
        success: "bg-[#d1fae5] text-[#065f46]",
        warning: "bg-[#fef3c7] text-[#92400e]",
        danger: "bg-[#fee2e2] text-[#991b1b]",
        outline: "border border-[#e2e8f0] text-[#475569] bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
