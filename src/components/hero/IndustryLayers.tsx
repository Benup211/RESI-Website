"use client";

import { useEffect, useRef } from "react";
import { Syne } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export default function IndustryLayers() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const topTextRef = useRef<HTMLDivElement | null>(null);
  const phasesRef = useRef<HTMLDivElement[]>([]);
  const currentPhase = useRef(0);

  const phases = [
    {
      count: "",
      leftTitle: "",
      rightText: "",
      image: "/icon/small-cube.svg",
      showText: false,
    },
    {
      count: "01/03",
      leftTitle: "Model Training &<br />Data Products",
      rightText: "Live Nationwide<br />Property Data",
      image: "/icon/cube-layer-1.svg",
      showText: true,
    },
    {
      count: "02/03",
      leftTitle: "DeFi Price Feeds &<br />Market Insights",
      rightText: "Macro Prediction markets<br/> & Precise Property Pricing",
      image: "/icon/cube-layer-2.svg",
      showText: true,
    },
    {
      count: "03/03",
      leftTitle: "Autonomous Agents",
      rightText: "End to End Transacting,<br/>Loans, and Legal Support",
      image: "/icon/cube-layer-3.svg",
      showText: true,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const allPhases = phasesRef.current;
    if (!allPhases.length) return;

    // --- Initial State ---
    gsap.set(allPhases, { opacity: 0, scale: 1 });
    gsap.set(allPhases[0], { opacity: 1 });
    gsap.set(topTextRef.current, { y: 0, opacity: 1 });

    gsap.delayedCall(2, () => {
      const tl = gsap.timeline({
        onComplete: () => {
          currentPhase.current = 1;
          startScrollTimeline();
        },
      });

      tl.to(allPhases[0], { opacity: 0, scale: 0.95, duration: 0.6 })
        .to(allPhases[1], { opacity: 1, scale: 1.05, duration: 0.8 }, "-=0.3")
        .to(topTextRef.current, { y: -50, opacity: 1, duration: 0.8, ease: "power2.out" }, "-=0.8");
    });

    function startScrollTimeline() {
      const tlScroll = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${8000 * (phases.length - 1)}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (allPhases.length - 1),
            inertia: false,
            duration: { min: 0.2, max: 0.4 },
          },
        },
      });

      for (let i = 1; i < allPhases.length - 1; i++) {
        const current = allPhases[i];
        const next = allPhases[i + 1];
        tlScroll.to(current, { opacity: 0, scale: 0.95, duration: 0.6 });
        tlScroll.to(next, { opacity: 1, scale: 1.05, duration: 0.8 }, "-=0.3");
      }
    }

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [phases.length]);

  return (
    <section ref={sectionRef} className="w-full relative pt-10 lg:pt-0 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom,rgba(5, 10, 36, 1) 0%,rgba(12, 16, 83, 0.1) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,rgba(0, 8, 16, 1) 23%,rgba(23, 35, 97, 1) 66%,rgba(31, 48, 130, 1) 91%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,rgba(22, 23, 28, 1) 0%,rgba(31, 48, 130, 1) 20%,rgba(1, 1, 1, 1) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/common/blue-grid.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "15px 15px",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,0) 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,0) 65%)",
        }}
      />

      <div className="relative grid grid-rows-1 lg:grid-rows-[3fr_7fr] w-full h-full">
        <div
          ref={topTextRef}
          className="flex flex-col justify-center items-center text-center w-full h-[30vh] lg:h-[40vh]"
        >
          <h2
            className={`bg-gradient-to-b from-[#9CB1FA] to-[#304FC0] bg-clip-text text-transparent font-bold ${syne.className} text-4xl lg:text-6xl`}
          >
            Industry Layers of
            <br /> Real Estate
          </h2>
          <p className={`text-[#CAD1F3] ${syne.className} text-lg lg:text-2xl mt-3`}>
            Gatekept Data stifles new builders
          </p>
        </div>

        <div className="relative w-full h-[70vh] lg:h-[60vh]">
          {phases.map((phase, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) phasesRef.current[i] = el;
              }}
              className="absolute inset-0 transition-all w-full h-full"
            >
              <div className="flex flex-col items-center justify-start w-full h-full px-4 pt-4 lg:grid lg:grid-cols-[2.5fr_5fr_2.5fr] lg:gap-4 lg:pt-0 lg:items-center">
                <div className="flex flex-col items-center text-white text-center mb-4 lg:mb-0">
                  {phase.showText && (
                    <>
                      <span className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold mb-1 sm:mb-2">
                        {phase.count}
                      </span>
                      <h3
                        className={`${syne.className} font-semibold leading-tight text-lg sm:text-xl lg:text-3xl`}
                        dangerouslySetInnerHTML={{ __html: phase.leftTitle }}
                      />
                    </>
                  )}
                </div>

                <div className="flex justify-center items-start w-full mb-4 lg:mb-0">
                  <div className="relative w-40 sm:w-60 lg:w-[416px] h-40 sm:h-52 lg:h-[241px]">
                    <Image
                      src={phase.image}
                      alt="cube layer"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>

                <div className="flex justify-center items-start text-center">
                  {phase.showText && (
                    <p
                      className={`${syne.className} text-base sm:text-lg lg:text-2xl font-semibold leading-snug text-[#CAD1F3]`}
                      dangerouslySetInnerHTML={{ __html: phase.rightText }}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
