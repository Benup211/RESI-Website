"use client";
import { Anton, Syne } from "next/font/google";
import Image from "next/image";
import { AnimateOnLoad } from "../animations/AnimateOnLoad";
import { imageRevealTop, subtleRiseUp, textRevealBottom } from "@/lib/animation";
import { motion } from "framer-motion";
import { useState } from "react";

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

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden relative">
      {/* Background Dim Overlay */}
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
            <AnimateOnLoad variant={textRevealBottom} delay={1}>
              <h1
                className={`${anton.className} text-[4rem] lg:text-[7.9rem] xl:text-[10rem] 2xl:text-[12.2vw] font-bold origin-center lg:scale-y-[1.5] mt-25 lg:mt-0
              bg-[url("/common/noise.svg")] bg-repeat bg-clip-text text-blue-900`}
              >
                REAL ESTATE <br className="block lg:hidden" />
                <span className="text-[7rem] lg:text-[7.9rem] xl:text-[10rem] 2xl:text-[12.2vw] leading-[1]">
                  ORACLE
                </span>
              </h1>
            </AnimateOnLoad>

            <div className="absolute left-1/2 -translate-x-1/2 lg:ml-8 top-[25vh] md:top-[35vh] lg:-top-85 xl:-top-100 2xl:-top-115 z-20">
              <AnimateOnLoad variant={imageRevealTop} delay={0.6}>
                <motion.div
                  className="rounded-full w-[310px] h-[350px] lg:w-[450px] lg:h-[510px] xl:w-[550px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px] cursor-pointer"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], // Smooth ease with slight bounce for vibration
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                  }}
                >
                  <div className="relative w-full h-full rounded-full">
                    <Image
                      className="rounded-full"
                      src="/common/earth.png"
                      alt="Earth"
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 310px, (max-width: 1024px) 450px, (max-width: 1280px) 550px, 700px"
                      priority
                    />

                    {/* Circular Text "Explore Now" */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        scale: isHovered ? 1.2 : 1,
                      }}
                      transition={{
                        opacity: { duration: 0.4 },
                        scale: {
                          duration: 1.2,
                          type: "spring",
                          stiffness: 80,
                          damping: 12,
                        }
                      }}
                    >
                      <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full"
                        style={{ transform: "rotate(-20deg)" }}
                      >
                        <defs>
                          {/* path for circle path */}
                          {/* to change the margin between text and circle, adjust the "m -70, 0" */}
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
                          className="text-[5px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] font-semibold tracking-[0.18em] uppercase"
                          fill="url(#textGradient)"
                        >
                          <textPath
                            href="#circlePath"
                            startOffset="38%"
                            style={{ fontFamily: syne.style.fontFamily }}
                          >
                            Explore Now
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>
                  </div>
                  <div className="relative w-full h-full rounded-full"></div>
                </motion.div>
              </AnimateOnLoad>
            </div>
          </div>

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