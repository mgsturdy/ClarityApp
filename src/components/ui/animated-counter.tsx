"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    if (value >= 1e12) {
      return `${prefix}${(current / 1e12).toFixed(0)}${suffix}`;
    }
    if (value >= 1e9) {
      return `${prefix}${(current / 1e9).toFixed(0)}${suffix}`;
    }
    if (value >= 1e6) {
      return `${prefix}${(current / 1e6).toFixed(0)}${suffix}`;
    }
    return `${prefix}${Math.floor(current).toLocaleString()}${suffix}`;
  });

  useEffect(() => {
    if (isVisible) {
      spring.set(value);
    }
  }, [spring, value, isVisible]);

  return <motion.span className={className}>{display}</motion.span>;
}
