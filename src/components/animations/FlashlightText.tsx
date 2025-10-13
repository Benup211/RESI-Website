import { useState, useRef, ReactNode, useEffect } from "react";
 
interface FlashlightTextProps {
  children: ReactNode;
  className?: string;
  spotlightSize?: number;
  delay?: number;
  intensity?: number;
}
 
export const FlashlightText = ({
  children,
  className = "",
  spotlightSize = 150,
  delay = 1000,
  intensity = 5,
}: FlashlightTextProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = useState(false);
  const [hasMouseMoved, setHasMouseMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
 
  const clampedIntensity = Math.max(1, Math.min(10, intensity));
  const brightness = 1 + (clampedIntensity / 10) * 1.5;
  const contrast = 1 + clampedIntensity / 20;
 
  // Detect mobile/small screens
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
 
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
 
  // Enable flashlight after animation delay (only on desktop)
  useEffect(() => {
    if (isMobile) {
      setIsEnabled(false);
      return;
    }
 
    const timer = setTimeout(() => {
      setIsEnabled(true);
    }, delay + 1000);
 
    return () => clearTimeout(timer);
  }, [delay, isMobile]);
 
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !isEnabled || isMobile) return;
 
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
 
    if (!hasMouseMoved) {
      setHasMouseMoved(true);
    }
  };
 
  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`} 
      onMouseMove={handleMouseMove}
      style={{ 
        isolation: "isolate",
      }}
    >
      {/* Original text layer - always visible */}
      <div className="relative z-10">{children}</div>
 
      {/* Illuminated text layer - only on desktop, only shows on text itself */}
      {isEnabled && !isMobile && hasMouseMoved && (
        <>
          {/* Main brightened spotlight - tight mask */}
          <div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              maskImage: `radial-gradient(circle ${spotlightSize * 0.8}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 30%, transparent 65%)`,
              WebkitMaskImage: `radial-gradient(circle ${spotlightSize * 0.8}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 30%, transparent 65%)`,
              filter: `brightness(${brightness}) contrast(${contrast})`,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          >
            <div style={{ 
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}>
              {children}
            </div>
          </div>
 
          {/* Subtle inner glow - no blur to prevent overflow */}
          <div
            className="absolute inset-0 pointer-events-none z-[19]"
            style={{
              maskImage: `radial-gradient(circle ${spotlightSize * 0.9}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 55%)`,
              WebkitMaskImage: `radial-gradient(circle ${spotlightSize * 0.9}px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 55%)`,
              opacity: 0.4,
              filter: `brightness(${brightness * 1.3})`,
            }}
          >
            <div style={{ 
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}>
              {children}
            </div>
          </div>
 
          {/* Additional white highlight for extra intensity - very tight */}
          {clampedIntensity > 6 && (
            <div
              className="absolute inset-0 pointer-events-none z-[21]"
              style={{
                maskImage: `radial-gradient(circle ${spotlightSize * 0.5}px at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 40%)`,
                WebkitMaskImage: `radial-gradient(circle ${spotlightSize * 0.5}px at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 40%)`,
                opacity: ((clampedIntensity - 6) / 4) * 0.25,
              }}
            >
              <div style={{ 
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}>
                <div className="absolute inset-0" style={{
                  background: "white",
                  mixBlendMode: "overlay",
                }}>
                  {children}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};