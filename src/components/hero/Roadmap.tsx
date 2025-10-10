"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Syne, Work_Sans } from "next/font/google";
import Image from "next/image";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const worksans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

export default function Roadmap() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const horizontalRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    const text = textRef.current;
    const arrow = arrowRef.current;
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    if (!header || !text || !arrow || !container || !horizontal) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: header,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: false,
        },
      })
      .to(text, { y: -150, opacity: 0, ease: "power2.out" }, 0)
      .to(arrow, { rotate: 360, opacity: 0, ease: "power2.out" }, 0);

    const setupHorizontal = () => {
      const totalScrollWidth = horizontal.scrollWidth - window.innerWidth;

      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });

      gsap.to(horizontal, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalScrollWidth}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    };

    setupHorizontal();
    window.addEventListener("resize", setupHorizontal);

    return () => {
      window.removeEventListener("resize", setupHorizontal);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      <section
        ref={headerRef}
        className="h-[40vh] flex items-center justify-between p-[4vw] text-black relative"
      >
        <div ref={textRef} className="flex flex-col gap-2 items-start text-start">
          <p
            className={`${syne.className} text-base md:text-xl 2xl:text-2xl tracking-wide pl-1 lg:pl-4`}
          >
            The Roadmap
          </p>
          <h3
            className={`text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl leading-[1.1] ${syne.className}`}
          >
            On and Offchain <br /> Infrastructure
          </h3>
        </div>
        <div ref={arrowRef} className="relative w-20 h-20 md:w-32 md:h-32 xl:w-40 xl:h-40">
          <Image src="/icon/powered.svg" alt="resi powered icon" fill className="object-contain" />
        </div>
      </section>

      <section ref={containerRef} className="relative h-[100vh] overflow-hidden">
        <div ref={horizontalRef} className="flex h-full w-max">
          <div className="w-[100vw] lg:w-[80vw] h-[100vh] flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] h-full w-full p-1">
              <div className="w-full h-full flex justify-center items-center">
                <div className=" w-[200px] h-[220px] lg:w-[230px] lg:h-[250px] xl:w-[270px] xl:h-[290px] relative">
                  <Image
                    src="/icon/file-gradient.svg"
                    alt="file gradient icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full h-full grid grid-rows-[auto_1fr_1fr] lg:grid-rows-[1fr_auto_1fr]">
                <div className="w-full h-full flex justify-center items-center lg:items-end order-2 lg:order-1 p-4">
                  <p
                    className={`${syne.className} text-black text-xl xl:text-2xl leading-[1.2] text-center font-normal`}
                  >
                    Nationwide Property Database for
                    <br /> market insights, training, & prediction
                    <br /> markets.
                  </p>
                </div>

                <div className="w-[60%] h-[2px] bg-[#7E7E7E]/20 order-1 lg:order-2 mx-auto"></div>

                <div className="w-full h-full flex justify-center items-start order-2 lg:order-3 p-4">
                  <p
                    className={`${worksans.className} text-black text-6xl xl:text-7xl leading-[0.8] text-center font-medium`}
                  >
                    01
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] h-[100vh] flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] h-full w-full p-1">
              <div className="w-full h-full flex justify-center items-center">
                <div className=" w-[200px] h-[220px] lg:w-[230px] lg:h-[250px] xl:w-[270px] xl:h-[290px] relative">
                  <Image
                    src="/icon/ai-gradient.svg"
                    alt="ai gradient icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full h-full grid grid-rows-[auto_1fr_1fr] lg:grid-rows-[1fr_auto_1fr]">
                <div className="w-full h-full flex justify-center items-center lg:items-start order-3 lg:order-3 p-4">
                  <p
                    className={`${syne.className} text-black text-xl xl:text-2xl leading-[1.2] text-center font-normal`}
                  >
                    AI Appraisal Agent for off and
                    <br /> onchain use cases.
                  </p>
                </div>

                <div className="w-[60%] h-[2px] bg-[#7E7E7E]/20 order-1 lg:order-2 mx-auto"></div>

                <div className="w-full h-full flex justify-center items-start lg:items-end order-3 lg:order-1 p-4">
                  <p
                    className={`${worksans.className} text-black text-6xl xl:text-7xl leading-[0.8] text-center font-medium`}
                  >
                    02
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] h-[100vh] flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] h-full w-full p-1">
              <div className="w-full h-full flex justify-center items-center">
                <div className=" w-[200px] h-[220px] lg:w-[230px] lg:h-[250px] xl:w-[270px] xl:h-[290px] relative">
                  <Image
                    src="/icon/resi-gradient.svg"
                    alt="resi gradient icon"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full h-full grid grid-rows-[auto_1fr_1fr] lg:grid-rows-[1fr_auto_1fr]">
                <div className="w-full h-full flex justify-center items-center lg:items-end order-2 lg:order-1 p-4">
                  <p
                    className={`${syne.className} text-black text-xl xl:text-2xl leading-[1.2] text-center font-normal`}
                  >
                    Autonomous Transacting with
                    <br /> end to end agents built on RESI.
                  </p>
                </div>

                <div className="w-[60%] h-[2px] bg-[#7E7E7E]/20 order-1 lg:order-2 mx-auto"></div>

                <div className="w-full h-full flex justify-center items-start order-2 lg:order-3 p-4">
                  <p
                    className={`${worksans.className} text-black text-6xl xl:text-7xl leading-[0.8] text-center font-medium`}
                  >
                    03
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
