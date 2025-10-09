"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimateOnViewProps {
  children: ReactNode;
  variant?: Variants;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean; // Animate only once when in view
}

export const AnimateOnView = ({ 
  children, 
  variant, 
  delay = 0,
  duration = 0.6,
  className = "",
  once = true 
}: AnimateOnViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  const defaultVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant || defaultVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};