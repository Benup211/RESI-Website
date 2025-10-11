"use client";
import { Syne, Work_Sans } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const worksans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export default function NewRoadmap() {
  return (
    <section className="w-full min-h-screen bg-white relative py-8 lg:py-0">
      <div className="w-full h-full lg:h-screen flex flex-col lg:grid lg:grid-rows-[2fr_8fr] place-items-center">
        <div className="w-[80%] h-full lg:max-h-[20vh] lg:min-h-[20vh] flex justify-between items-center lg:p-4 py-8">
          <div className="flex flex-col gap-2 items-start text-start">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`${syne.className} text-base md:text-xl 2xl:text-2xl tracking-wide pl-1 lg:pl-4`}
            >
              The Roadmap
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-2xl md:text-4xl xl:text-5xl 2xl:text-6xl leading-[1.1] ${syne.className}`}
            >
              On and Offchain <br /> Infrastructure
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360,
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.3 },
              scale: { duration: 0.6, delay: 0.3 },
              rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            }}
            className="relative w-20 h-20 md:w-25 md:h-25 xl:w-30 xl:h-30"
          >
            <Image
              src="/icon/powered.svg"
              alt="resi powered icon"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-[80%] h-full flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-1 gap-8 lg:gap-0 pb-8 lg:pb-0">
          {[
            {
              number: "01",
              icon: "/icon/file-gradient.svg",
              alt: "file gradient icon",
              text: "Nationwide Property Database for\nmarket insights, training,\n & prediction markets.",
              textAdjust: true,
            },
            {
              number: "02",
              icon: "/icon/ai-gradient.svg",
              alt: "ai gradient icon",
              text: "AI Appraisal Agent for off and\nonchain use cases.",
              textAdjust: false,
            },
            {
              number: "03",
              icon: "/icon/resi-gradient.svg",
              alt: "resi gradient icon",
              text: "Autonomous Transacting with\nend to end agents built on RESI.",
              textAdjust: false,
            },
          ].map((item, index) => (
            <div key={index} className="w-full flex-1 lg:h-full">
              <div className="w-full h-full flex flex-col justify-center items-center gap-4 lg:gap-0 lg:grid lg:grid-rows-[1fr_auto_1fr] lg:place-items-center">
                <div className="w-full flex justify-center items-center">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                    className={`${worksans.className} text-black text-5xl xl:text-6xl 2xl:text-6xl leading-[0.8] text-center font-medium`}
                  >
                    {item.number}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                  className="w-[200px] h-[220px] lg:w-[180px] lg:h-[200px] xl:w-[220px] xl:h-[280px] 2xl:w-[380px] 2xl:h-[300px] relative"
                >
                  <Image src={item.icon} alt={item.alt} fill className="object-contain" />
                </motion.div>
                <div className="w-full flex justify-center items-center px-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                    className={`${syne.className} text-black text-base xl:text-xl 2xl:text-2xl leading-[1.2] text-center font-normal w-full ${item.textAdjust ? "lg:pt-5 xl:pt-7 2xl:pt-8" : ""}`}
                  >
                    {item.text.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < item.text.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
