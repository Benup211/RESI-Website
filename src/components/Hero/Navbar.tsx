"use client";
import { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Menu } from "lucide-react";
import { DM_Sans, Syne } from "next/font/google";

const pp = localFont({ src: "../../fonts/pp-plainmedium.otf" });

const dmsans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export default function Navbar() {
  const [isTransparent, setIsTransparent] = useState(false);

  return (
    <header
      className={`fixed top-10 left-1/2 -translate-x-1/2 z-[999] px-8 py-2 rounded-[2rem] border border-white/20 transition-all duration-700 shadow-[0_0_20px_rgba(51,79,215,0.3)] ${isTransparent ? "bg-white/10 backdrop-blur-[4px]" : "bg-[linear-gradient(to_bottom_right,_rgba(51,78,215,1)_20%,_rgba(0,0,0,1)_99%)]"}`}
    >
      <nav className="flex justify-between items-center w-[300px] lg:w-[480px]">
        <div className="flex justify-center items-center gap-1">
          <Image src={"/common/logo-cream.svg"} alt="resi logo" width={24} height={24} priority />
          <h6 className={`text-2xl ${pp.className} text-[#CAD1F3] scale-y-110 cursor-pointer`}>
            RESI
          </h6>
        </div>
        <a
          href="#"
          className={`text-[1rem] ${dmsans.className} text-[#CAD1F3] font-medium hover:text-white cursor-pointer transition hidden lg:block`}
        >
          HOME
        </a>
        <a
          href="#"
          className={`text-[1rem] ${dmsans.className} text-[#CAD1F3] font-medium hover:text-white cursor-pointer transition hidden lg:block`}
        >
          DASHBOARD
        </a>
        <button onClick={() => setIsTransparent(!isTransparent)}>
          <Menu
            width={24}
            height={24}
            className="text-[#CAD1F3] cursor-pointer hover:scale-110 transition-transform"
          />
        </button>
      </nav>

      <div className={`${isTransparent ? "block" : "hidden"}`}>
        <div className="mt-4 py-4 border-t-1 border-t-[#FFFFFF]/20 border-0 flex flex-col lg:flex-row justify-between items-start">
          <a
            href="https://taostats.io/subnets/46/chart"
            className={`text-white bg-gradient-to-r from-[#293EAC] to-[#0E1330] ${syne.className} py-2 px-3 rounded-lg border border-white/20 transition-all duration-700 shadow-[0_0_20px_rgba(51,79,215,0.3)]`}
          >
            BUY DTAO
          </a>
          <div className="w-full lg:w-auto flex justify-between lg:justify-center items-start gap-8 p-1 mt-2 lg:p-0 lg:mt-0">
            <div>
              <a
                href="#how-resi-works"
                className={`block text-white ${dmsans.className} hover:text-white/80 cursor-pointer transition text-sm uppercase mb-1`}
              >
                How RESI Works
              </a>
              <a
                href="#documentation"
                className={`block text-white ${dmsans.className} hover:text-white/80 cursor-pointer transition text-sm uppercase mb-1`}
              >
                Documentation
              </a>
              <a
                href="#subnet-status"
                className={`block text-white ${dmsans.className} hover:text-white/80 cursor-pointer transition text-sm uppercase mb-1`}
              >
                Subnet Status
              </a>
              <a
                href="#resi-roadmap"
                className={`block text-white ${dmsans.className} hover:text-white/80 cursor-pointer transition text-sm uppercase mb-1`}
              >
                RESI Roadmap
              </a>
            </div>
            <div>
              <a
                href="https://x.com/resilabsai"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-white ${dmsans.className} hover:text-white/80 cursor-pointer transition text-sm uppercase mb-1`}
              >
                X
              </a>
              <a
                href="https://www.linkedin.com/company/resilabs/"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-white ${dmsans.className} hover:text-white/80 cursor-pointer transition text-sm uppercase mb-1`}
              >
                Linkedin
              </a>
              <a
                href="https://discord.gg/fpDQ6tHEXb"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-white ${dmsans.className} hover:text-white/80 cursor-pointer transition text-sm uppercase mb-1`}
              >
                Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
