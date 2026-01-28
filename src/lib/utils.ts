import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  if (num >= 1e12) {
    return `$${(num / 1e12).toFixed(0)}T`;
  }
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(0)}B`;
  }
  if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(0)}M`;
  }
  return num.toLocaleString();
}

export function formatCompactNumber(num: number): string {
  if (num >= 1e12) {
    return `${(num / 1e12).toFixed(0)}T`;
  }
  if (num >= 1e9) {
    return `${(num / 1e9).toFixed(0)}B`;
  }
  if (num >= 1e6) {
    return `${(num / 1e6).toFixed(0)}M`;
  }
  if (num >= 1e3) {
    return `${(num / 1e3).toFixed(0)}K`;
  }
  return num.toString();
}
