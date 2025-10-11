import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export default function EnterResi() {
  return (
    <section className="w-full h-[60vh] md:h-[70vh] flex justify-center items-center relative lg:mt-0 bg-white border-t-blue-900">
      <div
        className="absolute inset-[-1] pointer-events-none"
        style={{
          background: "linear-gradient(to bottom,rgba(37, 56, 121,1) 0%,rgba(0,0,0,0) 75%)",
        }}
      />
      <div className="w-full h-full max-w-2xl xl:max-w-4xl">
        <div className="grid grid-rows-1 h-full">
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full lg:w-[35vw] xl:w-[30vw] h-full">
              <div className="absolute -top-4 md:-top-10 lg:-top-6 xl:-top-10 xx:-top-16 2xl:-top-20  left-0 w-full h-full">
                <Image
                  src="/common/resi-3d.svg"
                  alt="resi logo 3d"
                  fill
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                  className="absolute z-2"
                />
              </div>
              <div className="absolute right-5 md:right-0 top-4/12 min-w-[65px] min-h-[72px] md:min-w-[144px] md:min-h-[125px] lg:min-w-[6vw] lg:min-h-[5vw] lg:w-[6vw] lg:h-[5vw]">
                <Image
                  src="/common/ball-3d.svg"
                  alt="resi logo 3d"
                  fill
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                  className="absolute z-2"
                />
              </div>
              <div className="absolute right-2/12 top-1/2 min-w-[39px] min-h-[34px] md:min-w-[78px] md:min-h-[68px] lg:min-w-[3vw] lg:min-h-[3vw] lg:w-[3vw] lg:h-[3vw]">
                <Image
                  src="/common/ball-3d.svg"
                  alt="resi logo 3d"
                  fill
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                  className="absolute z-2 blur-xs rotate-90"
                />
              </div>
              <div className="absolute left-1/4 bottom-[33%] md:left-3/12 md:bottom-[30%] min-w-[39px] min-h-[34px] md:min-w-[78px] md:min-h-[68px] lg:min-w-[3vw] lg:min-h-[3vw] lg:w-[3vw] lg:h-[3vw]">
                <Image
                  src="/common/ball-3d.svg"
                  alt="resi logo 3d"
                  fill
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                  className="absolute z-1 blur-[1px] rotate-90"
                />
              </div>
              <h2
                className={`absolute bottom-[9vh] xz:bottom-[11vh] sm:bottom-[6vh] md:bottom-[9vh] lg:bottom-[10vh] xl:bottom-[15vh] 2xl:bottom-[10vh] left-1/2 -translate-x-1/2 ${syne.className} text-[#242424] font-medium text-[10vw] lg:text-[5vw] xl:text-[4.45vw] w-[80%] z-1 text-center`}
              >
                Enter <span className={`${syne.className} font-bold text-[#213FCD]`}>RESI</span>
              </h2>
            </div>
            <p
              className={`w-[90%] ${syne.className} font-normal text-[14px] md:text-[16px] lg:text-[1.3vw]/[1.2] xl:text-[1.4rem]/[1.2] text-[#111737] text-center absolute bottom-2 xz:bottom-[5vh] md:bottom-[2.5vh] lg:bottom-[2rem] left-1/2 -translate-x-1/2`}
            >
              RESI is the intelligence infrastructure needed to usher in the next generation of
              <br className="hidden lg:block" /> proptech apps.From Data products to DeFi protocols,
              RESI is the answer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
