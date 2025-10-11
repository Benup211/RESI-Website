"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useLenisScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Detect mobile
    const isMobile = window.innerWidth < 768;

    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.2, // slightly slower for mobile
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: isMobile ? 2.5 : 1.3, // moderate swipe scroll
      wheelMultiplier: isMobile ? 1.5 : 1.2, // moderate wheel scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
