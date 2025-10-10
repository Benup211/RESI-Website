// FlashlightText.tsx
"use client";

import { useState, useRef, ReactNode, useEffect } from "react";

interface FlashlightTextProps {
  children: ReactNode;
  className?: string;
  spotlightSize?: number;
  delay?: number; // Delay before enabling flashlight (matches animation duration)
  intensity?: number; // 1-10 scale for flashlight brightness (default: 5)
}

export const FlashlightText = ({
  children,
  className = "",
  spotlightSize = 150,
  delay = 1000,
  intensity = 5, // Default medium intensity
}: FlashlightTextProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Clamp intensity between 1-10 and calculate values
  const clampedIntensity = Math.max(1, Math.min(10, intensity));
  
  // Calculate brightness based on intensity (1.2x to 2.5x range)
  const brightness = 1 + (clampedIntensity / 10) * 1.5;
  
  // Calculate glow opacity based on intensity (0.2 to 0.7 range)
  const glowOpacity = 0.15 + (clampedIntensity / 10) * 0.55;
  
  // Calculate contrast based on intensity (1.0 to 1.5 range)
  const contrast = 1 + (clampedIntensity / 20);

  // Enable flashlight after animation delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnabled(true);
    }, delay + 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isEnabled) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
    >
      {/* Original text layer - always visible */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Illuminated text layer - adapts to any text color */}
      {isEnabled && (
        <>
          {/* Brightened version of original text */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              maskImage: `radial-gradient(circle ${spotlightSize}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 70%)`,
              WebkitMaskImage: `radial-gradient(circle ${spotlightSize}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 70%)`,
              filter: `brightness(${brightness}) contrast(${contrast})`,
            }}
          >
            {children}
          </div>

          {/* Subtle glow layer - inherits text color */}
          <div
            className="absolute inset-0 pointer-events-none z-[19]"
            style={{
              maskImage: `radial-gradient(circle ${spotlightSize + 20}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 60%)`,
              WebkitMaskImage: `radial-gradient(circle ${spotlightSize + 20}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 60%)`,
              filter: `blur(${8 + clampedIntensity}px) brightness(${brightness * 1.2})`,
              opacity: glowOpacity,
            }}
          >
            {children}
          </div>

          {/* Additional white highlight for extra intensity */}
          {clampedIntensity > 6 && (
            <div
              className="absolute inset-0 pointer-events-none z-[21]"
              style={{
                maskImage: `radial-gradient(circle ${spotlightSize * 0.6}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 50%)`,
                WebkitMaskImage: `radial-gradient(circle ${spotlightSize * 0.6}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 50%)`,
                opacity: (clampedIntensity - 6) / 4 * 0.3,
              }}
            >
              <div className="absolute inset-0 bg-white mix-blend-overlay" />
            </div>
          )}
        </>
      )}
    </div>
  );
};