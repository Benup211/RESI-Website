"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface StaggerItemProps {
  children: ReactNode;
  variant?: Variants;
  className?: string;
}

export const StaggerItem = ({ children, variant, className = "" }: StaggerItemProps) => {
  const defaultVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={variant || defaultVariant} className={className}>
      {children}
    </motion.div>
  );
};
