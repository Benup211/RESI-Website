"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimateOnLoadProps {
  children: ReactNode;
  variant?: Variants;
  delay?: number;
  className?: string;
}

export const AnimateOnLoad = ({
  children,
  variant,
  delay = 0,
  className = "",
}: AnimateOnLoadProps) => {
  const defaultVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variant || defaultVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};
