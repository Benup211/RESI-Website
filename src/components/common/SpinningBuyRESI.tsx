"use client";

import { motion } from "framer-motion";
import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export default function SpinningBuyRESI() {
  const text = "BUY RESI TOKEN·BUY RESI TOKEN·";
  const characters = text.split("");

  return (
    <div className="relative w-30 h-30">
      <motion.div
        className="absolute inset-0 rounded-full bg-[#6590FF] flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative w-full h-full">
          {characters.map((char, index) => {
            const angle = (index * 360) / characters.length;
            const radius = 50;

            return (
              <span
                key={index}
                className={`absolute text-[#010307] text-[12px] font-[750] p-1 tracking-normal ${syne.className}`}
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `
                         translate(-50%, -50%)
                         rotate(${angle}deg)
                         translateY(-${radius}px)
                       `,
                  transformOrigin: "center center",
                  letterSpacing: "0.02em",
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      </motion.div>

      <div
        className="absolute inset-[18px] rounded-full bg-gradient-to-br from-[#5B7FC7] to-[#7A9EDD] flex items-center justify-center"
        style={{
          boxShadow: "inset 0 4px 20px rgba(0, 0, 0, 0.3), inset 0 -4px 10px rgba(0, 0, 0, 0.2)"
        }}
      >
        <div className="w-10 h-10 rounded-2xl flex items-center justify-center relative">
          <Image src="/icon/resi-spinner-icon.svg" alt="resi spinner icon" fill />
        </div>
      </div>
    </div>
  );
}