"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SpinningBuyRESI() {
  const [isMounted, setIsMounted] = useState(false);
  const text = "BUY RESI TOKEN·BUY RESI TOKEN·";

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
        {isMounted && (
          <svg className="absolute inset-0 w-full h-full" viewBox="10 13 175 175">
            <defs>
              <path
                id="circlePath"
                d="M 150,150 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text className={"text-[16px] fill-black font-[800]"} letterSpacing="0.30em">
              <textPath href="#circlePath" startOffset="0%">
                {text}
              </textPath>
            </text>
          </svg>
        )}
      </motion.div>

      <div
        className="absolute inset-[18px] rounded-full bg-gradient-to-br from-[#5B7FC7] to-[#7A9EDD] flex items-center justify-center"
        style={{
          boxShadow: "inset 0 4px 20px rgba(0, 0, 0, 0.3), inset 0 -4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="w-10 h-10 rounded-2xl flex items-center justify-center relative">
          <Image src="/icon/resi-spinner-icon.svg" alt="resi spinner icon" fill />
        </div>
      </div>
    </div>
  );
}
