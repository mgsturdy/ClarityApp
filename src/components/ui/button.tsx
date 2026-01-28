"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode, ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#0f2744] text-white hover:bg-[#1a3a5c] focus-visible:ring-[#0f2744]",
        secondary:
          "bg-white text-[#0f2744] border border-[#0f2744] hover:bg-[#f8fafc]",
        outline:
          "border border-[#e2e8f0] text-[#334155] hover:bg-[#f8fafc] hover:border-[#cbd5e1]",
        ghost:
          "text-[#475569] hover:text-[#0f2744] hover:bg-[#f8fafc]",
        link:
          "text-[#0f2744] underline-offset-4 hover:underline p-0 h-auto",
        gold:
          "bg-[#b8860b] text-white hover:bg-[#d4a012] focus-visible:ring-[#b8860b]",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm rounded",
        sm: "h-9 px-4 text-sm rounded",
        lg: "h-12 px-8 text-base rounded",
        xl: "h-14 px-10 text-base rounded",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
}

function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button, buttonVariants };
