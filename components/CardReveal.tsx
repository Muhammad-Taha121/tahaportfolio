"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type CardRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function CardReveal({ children, className, delay = 0 }: CardRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, scale: 0.97, boxShadow: "0 0px 0px rgba(17,17,17,0)" }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        boxShadow: "0 26px 50px -28px rgba(17,17,17,0.22)",
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 34px 60px -24px rgba(17,17,17,0.3)",
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
