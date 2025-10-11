import { MoveUpRight } from "lucide-react";
import { Anton, DM_Sans, Work_Sans } from "next/font/google";
import ContactForm from "../common/ContactForm";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const dmsans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const worksans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="relative w-full xl:h-screen px-6 py-8 lg:px-12 lg:py-8 bg-black overflow-y-visible">
      <div
        className="absolute top-0 left-0 w-full h-1/2 pointer-events-none"
        style={{
          backgroundImage: "url(/common/cream-grid.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "10px 10px",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute inset-0 w-full h-1/2 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 65%)",
        }}
      />

      <div
        className="absolute inset-0 w-full h-1/2 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 65%)",
        }}
      />

      <div
        className="absolute bottom-[0%] right-[0%] w-[60%] h-[15%] rounded-full pointer-events-none blur-[90px] opacity-80"
        style={{ background: "radial-gradient(circle, #5D87EF 0%, transparent 100%)" }}
      ></div>

      <div className="relative z-10 grid grid-rows-[9fr_0.8fr] xl:grid-rows-[9fr_1fr] h-full">
        <div className="grid grid-cols-1 xl:grid-cols-[6fr_4fr] 2xl:grid-cols-[7fr_3fr] h-full">
          <div className="order-1 xl:order-2 h-auto lg:h-full mb-10">
            <div className="lg:p-6 text-white h-full flex items-end 2xl:items-center justify-center">
              <ContactForm />
            </div>
          </div>
          <div className="order-2 lg:order-1 h-auto lg:h-full">
            <div className="grid grid-rows-[5fr_2fr] lg:grid-rows-[7fr_3fr] xl:grid-rows-[6fr_4fr] 2xl:grid-rows-[5fr_5fr] 3xl:grid-rows-[4.5fr_5.5fr] h-full">
              <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-[1fr_1fr_0.8fr_0.8fr] gap-2 xl:gap-4 mb-10 lg:mb-0 p-2 lg:p-8 xl:p-[1.7vw] self-end">
                <div className="order-1 xl:order-1 flex flex-col items-start justify-start text-white">
                  <h3 className={`${worksans.className} font-bold text-[1rem] mb-2`}>SOLUTIONS</h3>
                  <a
                    href="#"
                    className={`${worksans.className} text-xs md:text-sm hover:text-[#98C8FF] transition-colors duration-200`}
                  >
                    DASHBOARD
                  </a>
                  <a
                    href="#"
                    className={`${worksans.className} text-xs md:text-sm hover:text-[#98C8FF] transition-colors duration-200`}
                  >
                    DASHBOARD API
                  </a>
                  <a
                    href="#"
                    className={`${worksans.className} text-xs md:text-sm hover:text-[#98C8FF] transition-colors duration-200`}
                  >
                    PREDICTION MARKET API
                  </a>
                  <a
                    href="#"
                    className={`${worksans.className} text-xs md:text-sm hover:text-[#98C8FF] transition-colors duration-200`}
                  >
                    APPRAISALS API
                  </a>
                </div>
                <div className="order-3 xl:order-2 flex flex-col items-start justify-start text-white">
                  <h3 className={`${worksans.className} font-bold text-[1rem] mb-2`}>COMPANY</h3>
                  <a
                    href="#"
                    className={`${worksans.className} text-xs md:text-sm hover:text-[#98C8FF] transition-colors duration-200`}
                  >
                    SUBNET STATUS
                  </a>
                  <a
                    href="#"
                    className={`${worksans.className} text-xs md:text-sm hover:text-[#98C8FF] transition-colors duration-200`}
                  >
                    BRANDING
                  </a>
                  <a
                    href="#"
                    className={`${worksans.className} text-xs md:text-sm hover:text-[#98C8FF] transition-colors duration-200`}
                  >
                    TEAM
                  </a>
                </div>
                <div className="order-4 xl:order-3 flex flex-col items-start justify-start text-white">
                  <h3 className={`${worksans.className} font-bold text-[1rem] mb-2`}>SOCIALS</h3>
                  <a
                    href="https://discord.gg/fpDQ6tHEXb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${worksans.className} text-xs md:text-sm flex justify-center items-center gap-1 hover:text-[#98C8FF] transition-colors duration-200 group`}
                  >
                    DISCORD{" "}
                    <MoveUpRight
                      width={13}
                      height={13}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/resilabs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${worksans.className} text-xs md:text-sm flex justify-center items-center gap-1 hover:text-[#98C8FF] transition-colors duration-200 group`}
                  >
                    LINKEDIN{" "}
                    <MoveUpRight
                      width={13}
                      height={13}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
                  <a
                    href="https://x.com/resilabsai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${worksans.className} text-xs md:text-sm flex justify-center items-center gap-1 hover:text-[#98C8FF] transition-colors duration-200 group`}
                  >
                    X{" "}
                    <MoveUpRight
                      width={13}
                      height={13}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
                </div>
                <div className="order-2 xl:order-4 flex flex-col items-start justify-start text-white">
                  <h3 className={`${worksans.className} font-bold text-[1rem] mb-2`}>OTHERS</h3>
                  <a
                    href="https://taostats.io/subnets/46/chart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${worksans.className} text-xs md:text-sm flex justify-center items-center gap-1 hover:text-[#98C8FF] transition-colors duration-200 group`}
                  >
                    BUY RESI TOKEN{" "}
                    <MoveUpRight
                      width={13}
                      height={13}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center text-white overflow-hidden">
                <div className="px-[2vw] mb-2 text-xl flex w-full justify-between items-center lg:hidden">
                  <a
                    href="#"
                    className={`${dmsans.className} font-medium text-sm md:text-xl hover:text-[#98C8FF] transition-colors duration-200`}
                  >
                    Terms of Services{" "}
                  </a>
                  <a
                    href="#"
                    className={`${dmsans.className} font-medium text-sm md:text-xl hover:text-[#98C8FF] transition-colors duration-200`}
                  >
                    Privacy Policy
                  </a>
                </div>
                <h1
                  className={`${anton.className} 
                                        text-[11.2vw] md:text-[12vw] lg:text-[11.2vw] xl:text-[7vw] 2xl:text-[8.5vw] 
                                        font-bold origin-center scale-y-[1.5] lg:scale-y-[1] xl:scale-y-[1.5]
                                        bg-gradient-to-b from-[#DDEDFF] via-[#98C8FF] via-56% to-[#2C3A7E]
                                        text-transparent bg-clip-text
                                    `}
                >
                  REAL ESTATE ORACLE
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-white/20 mt-4 rounded-lg grid grid-cols-1 lg:grid-cols-[6fr_4fr] xl:grid-cols-[7fr_3fr] 2xl:grid-cols-[8fr_2fr] text-white px-4">
          <p
            className={`${dmsans.className} font-semibold text-2xl lg:text-4xl flex justify-start items-center`}
          >
            ©2025 RESI
          </p>
          <div className="px-3 mb-1 h-full lg:flex justify-between items-center hidden">
            <a
              href="#"
              className={`${dmsans.className} font-medium text-xl hover:text-[#98C8FF] transition-colors duration-200`}
            >
              Terms of Services{" "}
            </a>
            <a
              href="#"
              className={`${dmsans.className} font-medium text-xl hover:text-[#98C8FF] transition-colors duration-200`}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
