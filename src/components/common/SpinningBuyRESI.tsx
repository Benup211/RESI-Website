"use client";

import { motion } from "framer-motion";

export default function SpinningBuyRESI() {
  const text = "BUY RESI TOKEN·BUY RESI TOKEN·";
  const characters = text.split("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-80 h-80">
        <motion.div
          className="absolute inset-0 rounded-full bg-[#6B9EFF] flex items-center justify-center"
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
              const radius = 140;

              return (
                <span
                  key={index}
                  className="absolute text-black text-lg font-bold tracking-tight"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `
                      translate(-50%, -50%)
                      rotate(${angle}deg)
                      translateY(-${radius}px)
                    `,
                    transformOrigin: "center center",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {char}
                </span>
              );
            })}
          </div>
        </motion.div>

        <div
          className="absolute inset-[52px] rounded-full bg-gradient-to-br from-[#5B7FC7] to-[#7A9EDD] flex items-center justify-center"
          style={{
            boxShadow: "inset 0 4px 20px rgba(0, 0, 0, 0.3), inset 0 -4px 10px rgba(0, 0, 0, 0.2)"
          }}
        >
          <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <div className="text-6xl font-bold text-[#5B7FC7]">R</div>
          </div>
        </div>
      </div>
    </div>
  );
}
