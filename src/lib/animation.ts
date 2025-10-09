// lib/animations.ts
import { Variants } from "framer-motion";

// Animation Variants - Reusable animation configs
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // easeOutExpo
    },
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.45, 0, 0.55, 1], // easeInOut
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// NEW: Slide in from outside screen (top)
export const slideInFromTop: Variants = {
  hidden: {
    opacity: 0,
    y: -200, // Start from way above
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1], // Linear smooth easing
    },
  },
};

// NEW: Slide in from outside screen (bottom)
export const slideInFromBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 200, // Start from way below
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// NEW: Image reveal from top - smooth linear motion
export const imageRevealTop: Variants = {
  hidden: {
    opacity: 0,
    y: -300,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1], // Almost linear but smooth
      opacity: { duration: 0.8 },
    },
  },
};

// NEW: Image reveal from top - preserves X positioning (for centered elements)
export const imageRevealTopCentered: Variants = {
  hidden: {
    opacity: 0,
    y: -300,
    x: "-50%", // Preserves centering during animation
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: "-50%", // Maintains centering
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
      opacity: { duration: 0.8 },
    },
  },
};

// NEW: Image reveal from bottom - smooth linear motion
export const imageRevealBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 300,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
      opacity: { duration: 0.8 },
    },
  },
};

// Stagger Children Animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Rotation animation
export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// NEW: Large text reveal from bottom - smooth linear motion
export const textRevealBottom: Variants = {
  hidden: {
    opacity: 0,
    y: 150, // Small travel distance for big text
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.25, 0.1, 0.25, 1], // Smooth linear
      opacity: { duration: 0.8 },
    },
  },
};

// NEW: Subtle rise from below (for paragraphs/small text)
export const subtleRiseUp: Variants = {
  hidden: {
    opacity: 0,
    y: 100, // Small 10-15px travel
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1], // Smooth linear
      opacity: { duration: 0.6 },
    },
  },
};

// Custom easing curves
export const easings = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275],
  linear: [0.25, 0.1, 0.25, 1],
  easeOut: [0.22, 1, 0.36, 1],
  easeIn: [0.42, 0, 1, 1],
  easeInOut: [0.45, 0, 0.55, 1],
} as const;
