"use client";
import { Anton, Syne } from "next/font/google";
import Image from "next/image";
import { AnimateOnLoad } from "../animations/AnimateOnLoad";
import { imageRevealTop, subtleRiseUp, textRevealBottom } from "@/lib/animation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AskResi from "../common/AskResi";
import { FlashlightText } from "../animations/FlashlightText";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Circular motion keyframes for top-left quadrant
  const radius = 600; // distance of curve
  const steps = 60; // smoothness of curve
  const thetaRange = Array.from({ length: steps }, (_, i) => (Math.PI / 2) * (i / (steps - 1)));

  // true circular path (quarter-circle up-left)
  const xFrames = thetaRange.map((t) => -radius * Math.sin(t));
  const yFrames = thetaRange.map((t) => -radius * (1 - Math.cos(t)));

  // rotation keyframes – same length as motion path
  const rotateFrames = thetaRange.map((t) => -t * (180 / Math.PI) * 0.6);
  // 1.5x multiplier makes it spin a bit faster (adjust freely)

  // For the div that contains the "Questions about Real Estate? Ask Resi." text
  const xFramesDiv = thetaRange.map((t) => radius * Math.sin(t)).reverse();
  const yFramesDiv = thetaRange.map((t) => -radius * (1 - Math.cos(t))).reverse();
  const rotateFramesDiv = thetaRange.map((t) => 360 + t * (180 / Math.PI)).reverse();

  const exploreNowAnimationDuration = 0.3; // the less more fast

  return (
    <div className="w-full min-h-screen overflow-hidden relative">


      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,rgba(12, 16, 83, 0.1) 0%,rgba(7, 18, 28, 1) 100%",
          opacity: 0.2
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,rgba(10, 22, 83, 1) 9%,rgba(23, 35, 97, 1) 34%,rgba(0, 8, 16, 1) 77%",
          opacity: 0.5
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,rgba(1, 1, 1, 1) 9%,rgba(31, 48, 130, 1) 56%,rgba(22, 23, 28, 1) 100%",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/common/radical-gradient.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          mixBlendMode: "soft-light",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/common/map.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.48,
          scale: 1.1,
          mixBlendMode: "lighten",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,0) 5%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top,rgba(0, 0, 0, 1) 0%,rgba(0, 0, 0, 0) 5%",
        }}
      />

      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full bg-black/60 backdrop-blur-md"
          style={{
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(1px)",
          }}
        />
      </div>

      <motion.div
        className="absolute inset-0 bg-black pointer-events-none z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.65 : 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <div className="relative flex justify-end lg:items-end w-full min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
          <div
            className="relative order-1 lg:order-3 lg:col-span-2 p-8 text-center flex items-start justify-center
                h-[70vh] lg:h-auto"
          >
            <FlashlightText delay={1000} spotlightSize={200} intensity={5}>
              <AnimateOnLoad variant={textRevealBottom} delay={1}>
                <h1
                  className={`${anton.className} text-[4rem] lg:text-[7.9rem] xl:text-[10rem] xx:text-[11rem] 2xl:text-[12rem] 3xl:text-[13rem] font-bold origin-center lg:scale-y-[1.5] mt-25 lg:mt-0`}
                >
                  <span
                    style={{
                      backgroundImage: `
                      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/><feColorMatrix type='saturate' values='0'/></filter></defs><g filter='url(%23n)'><rect width='100%' height='100%' fill='black' opacity='0.12'/></g></svg>"),
                      linear-gradient(180deg, #DDEDFF 0%, #77A6DD 33%, #4472BE 56%, #13226B 100%)
                      `,
                      backgroundSize: "200px 200px, 100%",
                      backgroundBlendMode: "overlay, normal",

                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      MozBackgroundClip: "text",

                      WebkitTextFillColor: "transparent",
                      color: "transparent",

                      display: "inline-block",
                    }}
                  >
                    REAL ESTATE <br className="block lg:hidden" />
                    <span className="text-[4.5rem] lg:text-[7.9rem] xl:text-[10rem] xx:text-[11rem] 2xl:text-[12rem] 3xl:text-[13rem] leading-[1]">
                      ORACLE
                    </span>
                  </span>
                </h1>
              </AnimateOnLoad>
            </FlashlightText>
            <div className="absolute left-1/2 -translate-x-1/2 lg:ml-8 top-[25vh] md:top-[35vh] lg:-top-[40vh] xl:-top-[40vh] xx:-top-[40vh] 2xl:-top-[40vh] 3xl:-top-[40vh] z-20 rounded-full">
              <AnimateOnLoad variant={imageRevealTop} delay={0.6}>
                {!isHidden && (
                  <motion.div
                    className="rounded-full w-[310px] h-[350px] lg:w-[450px] lg:h-[510px] xl:w-[550px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px] cursor-pointer"
                    onHoverStart={() => !clicked && setIsHovered(true)}
                    onHoverEnd={() => !clicked && setIsHovered(false)}
                    onClick={() => setClicked(true)}
                    style={{ originX: 0.5, originY: 0.5 }}
                    animate={
                      clicked
                        ? {
                          x: xFrames,
                          y: yFrames,
                          rotate: rotateFrames,
                          opacity: [1, 0.9, 0.6, 0.3, 0],
                          scale: [1, 0.98, 0.9, 0.8],
                        }
                        : {
                          scale: isHovered ? 1.2 : 1,
                          rotate: 0,
                        }
                    }
                    transition={
                      clicked
                        ? {
                          duration: exploreNowAnimationDuration,
                          ease: "easeInOut",
                          onComplete: () => setIsHidden(true),
                        }
                        : {
                          duration: 1.2,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          type: "spring",
                          stiffness: 80,
                          damping: 12,
                        }
                    }
                  >
                    <div className="relative w-full h-full max-w-[60vw] max-h-[70vh] rounded-full mx-auto">
                      <Image
                        className="rounded-full"
                        src="/common/earth.png"
                        alt="Earth"
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                      />

                      {/* Circular Text "Explore Now" */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={
                          isMobile
                            ? { opacity: 1, scale: 1.3 }
                            : { opacity: isHovered ? 1 : 0, scale: isHovered ? 1.2 : 1 }
                        }
                        transition={{
                          opacity: { duration: 0.4 },
                          scale: {
                            duration: 1.2,
                            type: "spring",
                            stiffness: 80,
                            damping: 12,
                          },
                        }}
                      >
                        <svg
                          viewBox="0 0 200 200"
                          className="w-full h-full rounded-full"
                          style={{ transform: "rotate(-20deg)" }}
                        >
                          <defs>
                            <path
                              id="circlePath"
                              d="M 100, 100
                        m -70, 0 
                        a 68,68 0 1,1 136,0
                        a 68,68 0 1,1 -136,0"
                            />
                            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="34.14%" style={{ stopColor: "#CDD5FB" }} />
                              <stop offset="65.87%" style={{ stopColor: "#293EAC" }} />
                            </linearGradient>
                          </defs>
                          <text
                            className="text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] font-semibold tracking-[0.18em] uppercase"
                            fill="url(#textGradient)"
                          >
                            <textPath href="#circlePath" startOffset="38%">
                              Explore Now
                            </textPath>
                          </text>
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimateOnLoad>
            </div>
          </div>

          <motion.div
            className={
              "absolute top-[50%] lg:top-[30%] xl:top-[35%] left-1/2 -translate-x-1/2 z-20 text-[#CAD1F3] flex-col items-center justify-center text-center w-[80%] lg:w-auto "
            }
            initial={false}
            animate={
              clicked
                ? {
                  // Now it travels inward (top-right → center)
                  x: xFramesDiv,
                  y: yFramesDiv,
                  rotate: rotateFramesDiv,
                  opacity: [0, 0.6, 1],
                  scale: [0.8, 0.95, 1],
                }
                : {
                  opacity: 0,
                  scale: 0.8,
                }
            }
            transition={
              clicked
                ? {
                  duration: 0.8,
                  ease: "easeInOut",
                }
                : {
                  duration: exploreNowAnimationDuration,
                }
            }
          >
            <h2
              className={`${syne.className} font-semibold text-[15px] lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2`}
            >
              Questions about Real Estate?{" "}
              <span className="bg-gradient-to-r from-[#C4CEFF] via-[#9C70D5] to-[#3753E4] bg-clip-text text-transparent">
                Ask Resi.
              </span>
            </h2>
            <div className="flex justify-center items-center">
              <AskResi />
            </div>
          </motion.div>

          <div className="order-2 lg:order-1 flex items-center justify-center lg:justify-start lg:px-12 xl:px-14 2xl:px-20 h-[15vh] lg:h-auto text-white">
            <AnimateOnLoad variant={subtleRiseUp} delay={0.6}>
              <h3
                className={`text-[1.05rem] xl:text-[1.3rem] 2xl:text-[1.5rem] text-center lg:text-start ${syne.className}`}
              >
                RESI is the institutional-grade intelligence
                <br /> layer for the future of PropTech.
              </h3>
            </AnimateOnLoad>
          </div>

          <div className="order-3 lg:order-2 flex items-center justify-center lg:justify-end lg:px-12 xl:px-14 2xl:px-20 h-[15vh] lg:h-auto">
            <AnimateOnLoad variant={subtleRiseUp} delay={0.6}>
              <h2
                className={`${syne.className} text-2xl xl:text-3xl leading-[0.9] font-bold text-center lg:text-end text-white`}
              >
                <span className="uppercase text-[#8499FF]">Subnet 46</span>
                <br />
                <span className="font-normal text-xl">on Bittensor.</span>
              </h2>
            </AnimateOnLoad>
          </div>
        </div>
      </div>
    </div>
  );
}
