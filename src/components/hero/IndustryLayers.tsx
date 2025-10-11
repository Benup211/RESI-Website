"use client";

import { useLayoutEffect, useRef } from "react";
import { Syne } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

export default function IndustryLayers() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const topTextRef = useRef<HTMLDivElement | null>(null);
  const phasesRef = useRef<HTMLDivElement[]>([]);
  const scrollTimelineRef = useRef<gsap.core.Timeline | null>(null);

  const phases = [
    {
      count: "",
      total: "/03",
      leftTitle: "",
      rightText: "",
      image: "/icon/small-cube.svg",
      showText: false,
    },
    {
      count: "01",
      total: "/03",
      leftTitle: "Model Training &<br />Data Products",
      rightText: "Live Nationwide<br />Property Data",
      image: "/icon/cube-layer-1.svg",
      showText: true,
    },
    {
      count: "02",
      total: "/03",
      leftTitle: "DeFi Price Feeds<br />& Market Insights",
      rightText: "Macro Prediction<br/> markets & Precise <br/>Property Pricing",
      image: "/icon/cube-layer-2.svg",
      showText: true,
    },
    {
      count: "03",
      total: "/03",
      leftTitle: "Autonomous Agents",
      rightText: "End to End Transacting,<br/>Loans, and Legal<br/> Support",
      image: "/icon/cube-layer-3.svg",
      showText: true,
    },
  ];

  useLayoutEffect(() => {
    if (!sectionRef.current || !topTextRef.current || !phasesRef.current.length) return;

    const ctx = gsap.context(() => {
      const allPhases = phasesRef.current;

      gsap.set(allPhases, { opacity: 0, scale: 0.95 });
      gsap.set(allPhases[0], { opacity: 1, scale: 1 });
      gsap.set(topTextRef.current, { y: 0, opacity: 1 });

      const isMobile = window.innerWidth < 768;
      const scrollDistance = isMobile ? 800 : 1000;

      const tlScroll = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollDistance * (phases.length - 1)}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 1 / (phases.length - 1),
            duration: { min: 0.2, max: 0.4 },
            inertia: false,
          },
        },
      });

      tlScroll.to(topTextRef.current, { y: 30, opacity: 1, duration: 0.6, ease: "power2.out" }, 0);

      for (let i = 0; i < phases.length - 1; i++) {
        const current = allPhases[i];
        const next = allPhases[i + 1];
        tlScroll
          .to(current, { opacity: 0, scale: 0.95, duration: 0.6 }, i * 1.2 + 0.2)
          .to(next, { opacity: 1, scale: 1.05, duration: 0.8 }, i * 1.2 + 0.5);
      }

      scrollTimelineRef.current = tlScroll;
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [phases.length]);

  return (
    <section
      ref={sectionRef}
      className="w-full lg:h-screen relative pt-10 lg:pt-0 overflow-hidden bg-black/80"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom,rgba(0,0,0,1) 0%,rgba(0,0,0,0.1) 80%",
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
          background:
            "linear-gradient(to top,rgba(37, 56, 121,1) 0%,rgba(0,0,0,1) 25%,rgba(0, 0, 0, 0) 65%",
        }}
      />

      <div className="relative grid grid-rows-1 gap-0 lg:grid-rows-[1fr_3fr] xl:grid-rows-[3fr_7fr] w-full h-full">
        <div
          ref={topTextRef}
          className="flex flex-col justify-center items-center text-center w-full h-[30vh] xl:h-[40vh] mt-2 lg:mt-10 xl:mt-0"
        >
          <h2
            className={`bg-gradient-to-b from-[#9CB1FA] to-[#304FC0] bg-clip-text text-transparent font-bold ${syne.className} text-3xl lg:text-4xl xl:text-6xl`}
          >
            Industry Layers of
            <br /> Real Estate
          </h2>
          <p className={`text-[#CAD1F3] ${syne.className} text-base xl:text-2xl mt-3`}>
            RESI enables the future of PropTech
            <br /> and RWA Protocols.
          </p>
        </div>

        <div className="relative w-full h-[70vh] lg:h-[55vh]">
          {phases.map((phase, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) phasesRef.current[i] = el;
              }}
              className="absolute inset-0 transition-all w-full h-full"
            >
              <div className="flex flex-col items-center justify-start w-full h-full px-4 pt-4 lg:grid lg:grid-cols-[6fr_7fr_6fr] lg:gap-4 lg:pt-0 lg:items-center">
                <div className="flex flex-col justify-center items-end text-white text-center mb-4 lg:mb-0">
                  <div>
                    {phase.showText && (
                      <>
                        <p className="text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-semibold mb-1 sm:mb-2">
                          <span className="text-transparent [-webkit-text-stroke:2px_white]">
                            {" "}
                            {phase.count}
                          </span>
                          <span>{phase.total}</span>
                        </p>
                        <h3
                          className={`${syne.className} font-semibold leading-tight text-[18px] md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl text-center lg:text-left`}
                          dangerouslySetInnerHTML={{ __html: phase.leftTitle }}
                        />
                      </>
                    )}
                  </div>
                </div>

                <div className="flex justify-center items-center w-full mb-4 lg:mb-0 relative h-[30vh] lg:h-full">
                  <div
                    className={`absolute -translate-x-1/2 w-50 sm:w-60 lg:w-[200px] xl:w-[416px] h-40 sm:h-52 lg:h-[100px] xl:h-[180px] 2xl:h-[200px] ${
                      i === 0
                        ? "top-[33%] left-[50%]"
                        : i === 1
                          ? "top-[33%] md:top-[50%] left-[50%]"
                          : i === 2
                            ? "top-[10%] md:top-[35%] left-[50%]"
                            : "-top-[15%] md:top-[20%] left-[50%]"
                    }`}
                  >
                    <Image
                      src={phase.image}
                      alt="cube layer"
                      fill
                      style={{ objectFit: "contain" }}
                      className="z-1"
                    />
                  </div>

                  {i > 0 && (
                    <>
                      <div
                        className={`absolute text-white  -translate-x-1/2 w-50 sm:w-60 lg:w-[200px] xl:w-[416px] h-40 sm:h-52 lg:h-[100px] xl:h-[180px] 2xl:h-[200px] ${
                          i === 1
                            ? "-top-[15%] md:top-[20%] left-[50%]"
                            : i === 2
                              ? "-top-[15%] md:top-[20%] left-[50%]"
                              : "top-[10%] md:top-[33%] left-[50%]"
                        }`}
                      >
                        <Image
                          src="/icon/empty-cube.svg"
                          alt="empty cube"
                          fill
                          style={{ objectFit: "contain" }}
                          className="z-2"
                        />
                      </div>
                      <div
                        className={`absolute text-white -translate-x-1/2 w-50 sm:w-60 lg:w-[200px] xl:w-[416px] h-40 sm:h-52 lg:h-[100px] xl:h-[180px] 2xl:h-[200px] ${
                          i === 1
                            ? "top-[10%] md:top-[35%] left-[50%]"
                            : i === 2
                              ? "top-[33%] md:top-[50%] left-[50%]"
                              : "top-[33%] md:top-[50%] left-[50%]"
                        }`}
                      >
                        <Image
                          src="/icon/empty-cube.svg"
                          alt="empty cube"
                          fill
                          style={{ objectFit: "contain" }}
                          className="z-2"
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="flex flex-col justify-center items-start text-center">
                  <div className="">
                    {phase.showText && (
                      <p
                        className={`${syne.className} text-[18px] md:text-xl xl:text-2xl 2xl:text-3xl font-semibold leading-snug text-[#CAD1F3] text-center lg:text-left`}
                        dangerouslySetInnerHTML={{ __html: phase.rightText }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
