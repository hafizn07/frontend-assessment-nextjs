"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

type StatsCounterProps = {
  value: number;
  direction?: "up" | "down";
  hasPlus?: boolean;
  className?: string;
};

export default function StatsCounter({
  value,
  direction = "up",
  hasPlus = false,
  className,
}: StatsCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return Intl.NumberFormat("en-US").format(num);
  };

  // Adjusted margin and threshold for better visibility detection
  const isInView = useInView(ref, {
    once: true,
    margin: "0px",
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${formatNumber(Math.floor(latest))} ${
          hasPlus ? "+" : ""
        }`;
      }
    });

    return () => unsubscribe();
  }, [springValue, hasPlus]);

  return <span className={className} ref={ref} />;
}
