"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  variant?: "default" | "elevated" | "bordered" | "filled";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

function Card({ className, variant = "default", children, onClick }: CardProps) {
  const variants = {
    default: "bg-white",
    elevated: "bg-white border border-[#e2e8f0] shadow-sm",
    bordered: "bg-white border border-[#e2e8f0]",
    filled: "bg-[#f8fafc] border border-[#e2e8f0]",
  };

  return (
    <div
      className={cn("rounded p-6", variants[variant], className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  className?: string;
  children?: ReactNode;
}

function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div className={cn("pb-4", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  className?: string;
  children?: ReactNode;
}

function CardTitle({ className, children }: CardTitleProps) {
  return (
    <h3 className={cn("text-lg font-semibold text-[#0f172a]", className)}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  className?: string;
  children?: ReactNode;
}

function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn("text-sm text-[#64748b] mt-1", className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  className?: string;
  children?: ReactNode;
}

function CardContent({ className, children }: CardContentProps) {
  return <div className={cn("", className)}>{children}</div>;
}

interface CardFooterProps {
  className?: string;
  children?: ReactNode;
}

function CardFooter({ className, children }: CardFooterProps) {
  return (
    <div className={cn("flex items-center pt-4 border-t border-[#e2e8f0] mt-4", className)}>
      {children}
    </div>
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
